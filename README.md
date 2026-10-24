# rvq.lat

Personal portfolio of Ricardo Valenzuela Quintana, senior full-stack engineer. Built with Astro and plain CSS.

## Run it

Requires Node 22.23.4 or newer (`nvm use` reads `.nvmrc`).

```bash
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve the build
npm run check    # type check
npm test         # unit tests (node --test)
```

The site URL defaults to `https://rvq.lat`. Override it with `SITE_URL` (for example on a preview deployment); it drives the canonical link, `sitemap.xml`, `robots.txt` and the social-image URLs.

## Where things live

- `src/data/` — all content: profile, projects, experience, SEO.
- `src/components/` — one component per section; `fragments/` holds the project interface fragments.
- `src/lib/slug.ts` — the function behind the live demo, shown on the page as-is.
- `DECISIONS.md` — design direction, tradeoffs, image credits and the change log.
