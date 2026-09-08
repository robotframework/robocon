# robocon-archive

Every RoboCon website since 2019, served from `archive.robocon.io/<year>`.

There is **no build step and no framework**. The landing page is one
hand-written `index.html`; the years are the original builds, copied in as they
were. That is deliberate: anything with a toolchain rots, and this repository
has to be deployable in ten years by copying files onto a host.

```
index.html          the landing page
assets/             fonts + favicon for the landing page only
thumbs/<year>.webp  1000x600 screenshot of each year's front page
<year>/             the original build, essentially untouched
vercel.json         SPA rewrites + noindex for the archived years
```

## Where the years came from

Each folder was exported from a branch of
[`robotframework/robocon`](https://github.com/robotframework/robocon):

| Year | Branch | Exported from |
|------|--------|---------------|
| 2019 | `archive-2019` | `index.html` + `static/` |
| 2020 | `archive-2020` | `index.html` + `static/` |
| 2021 | `archive-2021` | `index.html` + `static/` |
| 2022 | `archive-2022` | `index.html`, `404.html` + `dist/` |
| 2023 | `archive-2023` | `index.html`, `404.html` + `dist/` |
| 2024 | `archive-2024` | `index.html`, `404.html` + `dist/` |
| 2025 | `archive-2025` | `docs/` (the Vite build output) |

```bash
git -C ../robocon archive archive-2023 index.html 404.html dist | tar -x -C 2023
```

## What was changed, and why

The builds were made for a site at the **root** of `robocon.io`. Two things
break when the same files are served from `/2023/` instead, and each needed one
kind of edit. Everything else is byte-identical to the original — 2019, 2020 and
2021 have two changed files each, 2022 has two, 2023 and 2024 four.

### 1. Root-absolute asset paths

2019–2021 referenced `/static/…`, and 2025 referenced `/assets/…`, `/img/…`,
`/fonts/…`. Under a year prefix those resolve to the domain root and 404.

They were rewritten to the **full year-prefixed path** (`/2021/static/…`), not
to relative paths. A relative path would resolve against whatever route the SPA
happens to be showing, so `/2025/program` would look for
`/2025/program/assets/…`. An absolute path with the prefix cannot drift.

2019–2021 additionally carry webpack's runtime `publicPath`, which was `"/"` and
is now `"/<year>/"`. Only 2021 actually depends on it (one background video is
assembled at runtime), but all three were changed so they behave alike.

2022–2024 already used relative paths (`dist/…`) and needed none of this.

### 2. The SPA router base

From 2022 on, every build is a Vue SPA whose router is created with
`createWebHistory()` — no argument. At `/2023/` such a router sees an unknown
path and renders its own "404 – Not found" page, which is exactly what happened
before this was fixed.

Vue Router's `normalizeBase()` falls back to the `<base href>` element when no
base is passed, so a single line in the `<head>` sets it:

```html
<base href="/2023/">
```

That is the whole fix for 2022–2025. **No minified bundle was patched to change
routing.**

### Two 404s that were already there

2019–2021 request a `site.webmanifest` that was never committed to the RoboCon
repository, and 2021 requests an `LDR_LLL1_0.png` that is likewise absent. Both
were broken on the live site too, and are left alone — the archive shows what
was actually shipped.

The same goes for `MÃ¤RZ` on the 2021 front page. That mojibake is in the
original bundle (verified byte-identical), not something the migration caused.

## The screenshots

Taken once at a 1000×600 viewport against a local server, then converted to
WebP. They are committed, not generated at deploy time, and there is no
`<iframe>` anywhere on the landing page — ten live conference sites on one
overview would be tens of megabytes, and any of them breaking would leave a
blank tile no one notices.

To retake them:

```bash
python3 -m http.server 8099          # from the repository root
# then screenshot http://127.0.0.1:8099/<year>/ at 1000x600
cwebp -q 80 2023.png -o thumbs/2023.webp
```

## Deployment

Vercel, static, no framework preset. `vercel.json` does two things:

- **rewrites** every unmatched `/<year>/<path>` to that year's `index.html`, so
  deep links like `/2023/sponsor` survive a reload. Vercel checks the
  filesystem first, so real assets are unaffected.
- sends **`X-Robots-Tag: noindex`** for everything under a year. The archived
  builds still carry `canonical` and `og:` tags claiming to be `robocon.io`;
  seven copies making that claim would compete with the live site in search.
  The landing page itself stays indexable.

Domain: `archive.robocon.io` (CNAME to Vercel).

## Adding a year

1. `mkdir 2026 && git -C ../robocon archive archive-2026 … | tar -x -C 2026`
2. Open `http://127.0.0.1:8099/2026/` and watch the console. Root-absolute
   paths and a router 404 are the two things to look for; the fixes are above.
3. Screenshot at 1000×600, convert to `thumbs/2026.webp`.
4. Add a `<li>` to `index.html`.
