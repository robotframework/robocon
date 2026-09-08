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
"""

import argparse
import pathlib
import re
import sys

# Files that can carry a URL. Everything else (images, fonts, videos) is binary
# and must not be touched.
TEXT_SUFFIXES = {'.html', '.css', '.js', '.mjs', '.json', '.webmanifest', '.xml', '.svg'}


def build_pattern(year_dir: pathlib.Path) -> re.Pattern:
    """One alternation over the year's actual top-level entries."""
    names = sorted(p.name for p in year_dir.iterdir() if not p.name.startswith('.'))
    if not names:
        sys.exit(f'{year_dir}: leer')
    alternatives = '|'.join(re.escape(n) for n in names)
    # (?<=["'(=]) so a path is only matched where one can appear.
    # (?=[/"'?)]) so /img matches the directory but /images does not.
    return re.compile(rf'(?<=["\'(=])/({alternatives})(?=[/"\'?)])')


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('year', help='the folder to fix, e.g. 2026')
    parser.add_argument('--write', action='store_true',
                        help='actually change the files (default: report only)')
    args = parser.parse_args()

    year_dir = pathlib.Path(args.year)
    if not year_dir.is_dir():
        sys.exit(f'{year_dir}: kein Verzeichnis')

    year = year_dir.name
    pattern = build_pattern(year_dir)
    total, touched = 0, 0

    for path in sorted(year_dir.rglob('*')):
        if path.suffix.lower() not in TEXT_SUFFIXES or not path.is_file():
            continue
        # surrogateescape: some of these builds are not valid UTF-8, and bytes
        # we do not touch must survive the round trip unchanged.
        source = path.read_text(encoding='utf-8', errors='surrogateescape')
        result, count = pattern.subn(rf'/{year}/\1', source)
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
