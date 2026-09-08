#!/usr/bin/env python3
"""Prefix a year's root-absolute paths with its own folder.

    python3 scripts/prefix-paths.py 2026            # show what would change
    python3 scripts/prefix-paths.py 2026 --write    # change it

Every build in here was made for the root of robocon.io, so it refers to
`/assets/x.js` where the archive needs `/2026/assets/x.js`. Under a year prefix
the original path resolves to the domain root and 404s.

The rewrite is to the FULL prefixed path, never to a relative one. A relative
path resolves against whatever route a single-page app happens to be showing,
so `/2026/program` would start looking for `/2026/program/assets/…`. A prefixed
absolute path cannot drift.

Which paths get touched is not guessed: a root-absolute reference is rewritten
only when its first segment names something that actually exists in this year's
folder. `/favicon/x.png` is rewritten because `2026/favicon/` is there;
`/api/talks` is left alone because nothing answers it here anyway. That rule
also makes the script idempotent -- after a run the paths start with `/2026/`,
and `2026/2026/` does not exist, so a second run changes nothing.

A reference is only recognised where a path can legitimately appear: after a
quote, an `=` or a `(`. That is what keeps `https://host/img/x` untouched --
there the slash follows another slash, not a delimiter.

USE --only FOR A SITE THAT WAS REBUILT WITH ITS OWN BASE URL. A generator that
already knows it lives at /2026/ writes correct paths everywhere it controls,
and it also stores the pieces it joins at runtime -- Nuxt keeps
`buildAssetsDir:"/_nuxt/"` next to `baseURL:"/2026/"` and concatenates them.
Prefixing that stored piece produces /2026/2026/_nuxt/ and the site loads no
assets at all.

Its ROUTES are the same trap from the other side. Nuxt writes history as
joinURL(baseURL, path), so a link the generator left as `/helsinki` becomes
`/2026/helsinki` by itself -- prefix it in the file and a click lands on
/2026/2026/helsinki. Only paths no router and no config will ever touch need
fixing, which here means the favicons from nuxt.config and the asset URLs
stored in content:

    python3 scripts/prefix-paths.py 2026 --only favicon,archive

One more wrinkle, and --links is what handles it: a page reached through a
plain `<a href="/helsinki">` rather than a framework link component gets no
interception -- the browser really does leave for /helsinki -- so that anchor
needs the prefix. The identical path in the payload the same file carries
must NOT get it, or the route is prefixed a second time. Anchors only, then:

    python3 scripts/prefix-paths.py 2026 --only helsinki,online --links

A frozen build has no such state and takes the default.
"""

import argparse
import pathlib
import re
import sys

# Files that can carry a URL. Everything else (images, fonts, videos) is binary
# and must not be touched.
TEXT_SUFFIXES = {'.html', '.css', '.js', '.mjs', '.json', '.webmanifest', '.xml', '.svg'}


def build_pattern(year_dir: pathlib.Path, only: list[str] | None,
                  links_only: bool = False) -> re.Pattern:
    """One alternation over the year's top-level entries, or over `only`."""
    if only:
        missing = [n for n in only if not (year_dir / n).exists()]
        if missing:
            sys.exit(f'{year_dir}: gibt es nicht: {", ".join(missing)}')
        names = sorted(only)
    else:
        names = sorted(p.name for p in year_dir.iterdir() if not p.name.startswith('.'))
    if not names:
        sys.exit(f'{year_dir}: leer')
    alternatives = '|'.join(re.escape(n) for n in names)
    if links_only:
        # Only the href of an <a>. Needed where a path is BOTH a link a browser
        # will follow and a route the framework stores: the anchor needs the
        # prefix, the stored copy must not have it.
        return re.compile(rf'(<a\b[^>]*?\bhref=")/({alternatives})(?=["/?])')

    # (?<=["'(=]) so a path is only matched where one can appear.
    # (?=[/"'?)]) so /img matches the directory but /images does not.
    return re.compile(rf'(?<=["\'(=])/({alternatives})(?=[/"\'?)])')




def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('year', help='the folder to fix, e.g. 2026')
    parser.add_argument('--write', action='store_true',
                        help='actually change the files (default: report only)')
    parser.add_argument('--in', dest='suffixes', metavar='html,css',
                        help='only process these file types. A plain <a href> in '
                             'the markup may need a prefix the same path must NOT '
                             'get in a router payload -- see --help.')
    parser.add_argument('--links', action='store_true',
                        help='rewrite only the href of an <a>, nothing else')
    parser.add_argument('--only', metavar='a,b,c',
                        help='prefix only these top-level names, instead of every '
                             'entry in the folder. Required for a site that was '
                             'rebuilt with its own base URL -- see --help.')
    args = parser.parse_args()

    year_dir = pathlib.Path(args.year)
    if not year_dir.is_dir():
        sys.exit(f'{year_dir}: kein Verzeichnis')

    year = year_dir.name
    pattern = build_pattern(year_dir, args.only.split(',') if args.only else None,
                            links_only=args.links)
    suffixes = ({'.' + s.strip().lstrip('.') for s in args.suffixes.split(',')}
                if args.suffixes else TEXT_SUFFIXES)
    total, touched = 0, 0

    for path in sorted(year_dir.rglob('*')):
        if path.suffix.lower() not in suffixes or not path.is_file():
            continue
        # surrogateescape: some of these builds are not valid UTF-8, and bytes
        # we do not touch must survive the round trip unchanged.
        source = path.read_text(encoding='utf-8', errors='surrogateescape')
        replacement = rf'\1/{year}/\2' if args.links else rf'/{year}/\1'
        result, count = pattern.subn(replacement, source)
        if not count:
            continue
        total += count
        touched += 1
        print(f'  {path}: {count}')
        if args.write:
            path.write_text(result, encoding='utf-8', errors='surrogateescape')

    verb = 'umgeschrieben' if args.write else 'zu ändern (Probelauf)'
    print(f'{year}: {total} Pfade in {touched} Dateien {verb}')
    if total and not args.write:
        print('  --write, um es anzuwenden')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
