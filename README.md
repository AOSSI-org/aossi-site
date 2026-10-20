# aossi-site

The AOSSI main site. Static [Astro](https://astro.build/) build, hand-coded, no client JavaScript, no analytics, no cookies.

Production domain: **aossi.org** (aossi.info will redirect there). Canonical URLs and the sitemap use `https://aossi.org`.

## Build

Requires Node 22.12+.

```sh
npm ci
npm run build          # production build into dist/ (indexable)
npm run build:preview  # preview build: noindex meta, X-Robots-Tag header, robots.txt Disallow
```

`dist/` is plain static files plus a generated `.htaccess` (security headers, caching, 404 page). Upload its contents to the web root.

## Structure

- `src/styles/tokens.css`: design tokens (colors, type scale, spacing). See `DESIGN.md`.
- `src/data/pages.ts`: page titles and descriptions.
- `src/pages/`: one file per page. Copy is the approved aossi.org copy, word for word.
- `src/pages/og/[page].png.ts`: 1200×630 share cards rendered at build time.
- `src/assets/`: NASA photos (public domain, "Credit: NASA"), cropped. Listed on `/credits/`.
- `scripts/postbuild.mjs`: writes `dist/.htaccess`.

## Contact

No AOSSI email address is published yet, so the Contact page links to the form at https://aossi.org/contact. Change `CONTACT_URL` in `src/consts.ts` when an address or form handler exists.

## Licenses

Fonts: Manrope and JetBrains Mono (SIL OFL 1.1), self-hosted via Fontsource. Icons: Lucide (ISC). Photos: NASA (public domain; use does not imply endorsement).

## Preview deploy (Hostinger)

The preview lives at https://preview.aossi.org (its own static website on the Hostinger plan, noindex). To redeploy: `npm run build:preview`, zip the *contents* of `dist/` (including `.htaccess`), upload it to the site root and run Hostinger's static-archive deploy, then **clear the website cache** so the CDN doesn't keep serving old HTML that points at deleted hashed CSS files. Details in `.hostinger/site.json`.
