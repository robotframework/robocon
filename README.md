# robocon-archive

Every RoboCon website since 2019, served from `archive.robocon.io/<year>`.

There is **no build step and no framework**. The landing page is one
hand-written `index.html`; the years are the original builds, copied in as they
were. That is deliberate: anything with a toolchain rots, and this repository
has to be deployable in ten years by copying files onto a host.

```
index.html          the landing page
serve.py            local dev server (mirrors vercel.json)
scripts/            prefix-paths.py, for adding a year
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
| 2026 | `archive/robocon-2026` in `samipe/rf-certs-page` | rebuilt, see below |

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

### 3. 2026 was rebuilt instead

RoboCon 2026 is a Nuxt site whose repository still builds, so it was generated
for its own address rather than patched:

```bash
NUXT_APP_BASE_URL=/2026/ npm run build:archive
```

Nuxt then writes `/2026/_nuxt/…`, `/2026/…/_payload.json` and its route base
itself. Two things it does **not** touch, and they were fixed here afterwards:

```bash
python3 scripts/prefix-paths.py 2026 --only favicon,archive --write
```

- the favicon links written literally in `nuxt.config.ts`, and the asset URLs
  stored in content (`/archive/assets/…`). Served unfixed at `/2026/`, the
  Helsinki page loads **112 broken images**; fixed, zero.

The navbar and the logo are plain `<a>` elements rather than link components, so
a click is a real browser navigation and the router never joins the base path
for them. They used to need a second pass (`--links`); the source repository now
joins `runtimeConfig.app.baseURL` itself, so the build arrives with
`/2026/`, `/2026/online` and `/2026/helsinki` already in place. `--links`
remains in the script for a build that predates that fix.

Nothing under `_nuxt/` is modified. Prefixing `buildAssetsDir:"/_nuxt/"` there
is the same trap once more: Nuxt joins it with `baseURL` and the site then
requests `/2026/2026/_nuxt/…` and loads nothing at all.

One cosmetic leftover: `/2026/helsinki` and `/2026/online` log "Hydration
completed but contains mismatches". Vue reconciles the DOM, and content,
images, links and URLs were all verified correct; the front page logs nothing.

### Two 404s that were already there

2019–2021 request a `site.webmanifest` that was never committed to the RoboCon
repository, and 2021 requests an `LDR_LLL1_0.png` that is likewise absent. Both
were broken on the live site too, and are left alone — the archive shows what
was actually shipped.

The same goes for `MÃ¤RZ` on the 2021 front page. That mojibake is in the
original bundle (verified byte-identical), not something the migration caused.

## Running it locally

```bash
python3 serve.py          # http://127.0.0.1:8099
python3 serve.py 3001     # another port
```

`serve.py` mirrors the two rules in `vercel.json` and nothing else, so what you
see locally is what Vercel serves. `python3 -m http.server` works too, but it
gets one thing wrong: from 2022 on each year is a single-page app that owns
paths like `/2023/sponsor`, and opening one directly -- or just reloading after
clicking through -- 404s there while it works in production.

Verified against `serve.py`: `/2023/sponsor`, `/2025/program` and
`/2026/helsinki` render their real routes on a direct hit, assets still come
from disk, the landing page is indexable and every year answers
`X-Robots-Tag: noindex`.

## The screenshots

Taken once at a 1000×600 viewport against a local server, then converted to
WebP. They are committed, not generated at deploy time, and there is no
`<iframe>` anywhere on the landing page — ten live conference sites on one
overview would be tens of megabytes, and any of them breaking would leave a
blank tile no one notices.

To retake them:

```bash
python3 serve.py                     # from the repository root
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

Two situations, and which one you are in decides almost everything.

**The build can still be rebuilt** (a current Nuxt/Vite site, e.g. RoboCon
2026) — then let the generator produce the year prefix and do almost nothing by
hand. Case A.

**The build is frozen** (old Node, no working toolchain — 2019 to 2025) — then
the files get fixed where they lie. Case B.

Either way, the pieces `vercel.json` and `serve.py` need no change: their rule
matches `20[0-9]{2}`, so a new year is covered the moment the folder exists.

---

### Case A — the site can be rebuilt

RoboCon 2026 lives in a Nuxt repository, and Nuxt reads its base path from
`runtimeConfig.app.baseURL` — it strips exactly that prefix off
`window.location.pathname` before routing. That is why the `<base href>` trick
used for 2022–2025 **cannot** work here, and why rebuilding is not just the
tidier option but the only clean one.

**1. Build with the year as the base URL.**

```bash
cd ~/Source/robotframework/samipe/rf-certs-page
# stop the dev server first -- build and dev share .nuxt/.data
NUXT_APP_BASE_URL=/2026/ npm run build:archive
```

**2. Check that the prefix actually landed**, before doing anything else:

```bash
grep -o 'href="/[^"]*"' .output/public/index.html | sort -u | head
```

Every `/_nuxt/…`, `/_payload.json` and internal link must now start with
`/2026/`. If they do not, the environment variable did not take: set it
explicitly in `nuxt.config.ts` instead and rebuild.

```ts
app: { baseURL: '/2026/' }
```

**3. Copy the output in.**

```bash
cd ~/Source/robotframework/robocon-archive
rm -rf 2026 && mkdir 2026
cp -R ~/Source/robotframework/samipe/rf-certs-page/.output/public/ 2026/
```

**4. Fix what the generator does not prefix.** `baseURL` only governs paths the
framework builds itself. Literal strings do not move: the favicon links written
out in `nuxt.config.ts` (`/favicon/…`) and asset URLs stored in content
(`/archive/assets/…`) both stay pointing at the domain root.

`--only` is not optional here. A site rebuilt with its own base URL also
*stores* the pieces it joins at runtime, and prefixing those (`_nuxt`, the
routes in the payload) yields `/2026/2026/…` — the page then loads nothing at
all. Name only what no router and no config will touch:

```bash
python3 scripts/prefix-paths.py 2026 --only favicon,archive   # dry run
python3 scripts/prefix-paths.py 2026 --only favicon,archive --write
```

Then continue at **"Checking a new year"** below.

---

### Case B — the build is frozen

**1. Export it** from its branch in `robotframework/robocon`:

```bash
mkdir 2026
git -C ../robocon archive archive-2026 index.html 404.html dist | tar -x -C 2026
```

Look at the branch first — where the deployed build lives has moved around over
the years (`static/`, then `dist/`, then `docs/`; see the table above).

**2. Prefix the root-absolute paths.**

```bash
python3 scripts/prefix-paths.py 2026 --write
```

**3. If it is a single-page app, give it a base.** Open `/2026/` (step 1 under
"Checking" below); if the site renders its own "404 – Not found" instead of the
front page, its router does not know about the prefix. For a Vue Router built
with `createWebHistory()` and no argument, one line in the `<head>` of
`index.html` and `404.html` fixes it:

```html
<base href="/2026/">
```

That works because Vue Router falls back to the `<base href>` element when it
is given no base. A Nuxt build does **not** — see Case A.

**4. Webpack builds may also carry a runtime `publicPath`.** If assets are
assembled in JavaScript rather than written into the HTML (2021 does this for
one background video), find `.p="/"` in the runtime chunk and make it
`.p="/2026/"`.

---

### Checking a new year

```bash
python3 serve.py
```

Open `http://127.0.0.1:8099/2026/` with the browser console visible, and check
four things:

1. **The front page renders** — not the site's own 404. If it does, the router
   base is wrong (Case A step 2, or Case B step 3).
2. **No failed requests.** A 404 on `/img/…` or `/assets/…` without the year
   prefix means a literal path the rewrite did not catch.
3. **The fonts are the conference's own**, not a fallback — those come from CSS
   `url()` and are the usual thing to slip through.
4. **Click an internal link, then reload the page.** The URL must stay under
   `/2026/` and survive the reload; that is what `serve.py` reproduces from
   `vercel.json` and what plain `http.server` gets wrong.

404s that were already broken in the original build are worth keeping — the
archive shows what was actually shipped. Note them here as with 2019–2021.

### Putting it on the landing page

**Screenshot** at 1000x600, matching the others:

```bash
# with serve.py running, capture http://127.0.0.1:8099/2026/ at 1000x600
cwebp -q 80 2026.png -o thumbs/2026.webp && rm 2026.png
```

**Add a card** at the top of the `<ul class="years">` in `index.html`, copying
the newest entry and changing year, dates and location. Take those from the
archived page itself rather than from memory.

```html
<li>
  <a class="card" href="/2026/">
    <img class="shot" src="/thumbs/2026.webp" width="1000" height="600"
         alt="The RoboCon 2026 website">
    <span class="meta">
      <span class="year">2026</span>
      <span class="when">... Feb &middot; Helsinki<br>... Mar &middot; online</span>
    </span>
  </a>
</li>
```

The second-newest card carries `loading="lazy"` from now on; the top two do
not, so move that attribute down one card.

Finally, note the new year in the table under "Where the years came from", and
record anything you had to change to it under "What was changed, and why".
