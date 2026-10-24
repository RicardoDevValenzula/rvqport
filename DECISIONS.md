# Decisions log — portfolio-rvq

Personal portfolio for Ricardo Valenzuela Quintana, senior full-stack engineer in Hermosillo, Mexico. Content comes from his CV (`Cv Ricardo En.pdf`).
Stack: Astro 7, plain CSS, no UI framework. Node 22.23.4 (`.nvmrc`).

## Skills used, and for what

| Skill | Used for | Stage |
| --- | --- | --- |
| `design-taste-frontend` (taste-skill) | Art direction: dealt the direction, type, palette, hero and section blueprints; house rules; `lint.mjs` + `inspect.mjs` gate; critique rounds | Direction, build, gate |
| `emil-design-eng` | Motion decisions: what animates and why, easing curves, durations, press feedback, reduced motion, hover gating | Motion layer |
| `animate` | Building each animation in decision order | Motion layer |
| `impeccable` | Final audit/polish pass of the built page | Review |
| `web-design-guidelines` (Vercel) | Accessibility and web-interface compliance review | Review |
| `review-animations` | Not usable by the agent (`disable-model-invocation: true`); run `/review-animations` yourself | — |

## Direction (taste-skill draw)

- Command: `draw.mjs --sector personal-portfolio --sections about,work,list,contact,footer --have product-ui --options 3`
- Dealt: `dark-room`, `page-is-the-object`, `name-as-monument`.
- **Chosen: `name-as-monument`** (seed 1689850777). Why: a developer has no physical artefact (`page-is-the-object` would become a fake terminal or code editor — a costume) and no photographs of his own work (`dark-room` lives on lit photographs). The name is the one thing that belongs only to Ricardo.
- Sheet: type Unbounded 800 / Onest 400-500; palette plum-black and pink; hero "Name split to corners"; motion "Pinned story". Saved in `.taste-skill/direction.json`.

## The idea

> On this page, **"one language end to end" — the same TypeScript function running in the browser and on the server** becomes **the stage that passes between the two halves of his name, pinned to opposite corners**.

- The name frames the page the way one language frames the stack: RICARDO top-left, VALENZUELA bottom-right, everything happens between them.
- **Live thing**: type a project name; the same `toSlug()` (`src/lib/slug.ts`) produces the browser result and the server response. The code block shows that exact file (`?raw` import), so what is shown is what runs.
- Competitor test, honestly: another full-stack TypeScript developer could claim "one language". What makes it his is the name as the frame; the live demo is the proof, not the idea.

## Argument (sections as claims)

1. Hero — who he is and what he does; one action: email.
2. Live stage — claim: one language end to end. Proof: the shared function, running.
3. About — claim: senior, owns the whole product. Proof: plain description and what he works with on each side.
4. Work — claim: ships systems people use every day. Proof: four CV projects with their real figures (40%, 30–40%, ~50%, 4 min → 10 s), each shown as an interface or terminal fragment.
5. Experience — claim: 5+ years in production. Proof: the CV timeline as a line-up, with education.
6. Contact — one way to start: email.
7. Footer — the name again, full width.

## Tradeoffs and deviations

| Decision | Alternative | Why this one |
| --- | --- | --- |
| Astro + plain CSS, zero UI framework | Astro + React islands, or Tailwind | The page is static; one island of vanilla TS covers the live thing. No React runtime shipped for a portfolio. Tradeoff: no React component to show off in the bundle itself. |
| Fonts self-hosted via Fontsource | Google Fonts `<link>` (the sheet's snippet) | No third-party request, no layout shift from a remote CSS hop, works offline. Tradeoff: fonts ship from our build (same bytes either way). |
| Photos downloaded and optimised by `astro:assets` | Hotlink picsum.photos | No runtime dependency on a third party; Astro emits sized WebP. Tradeoff: repo carries the JPEG sources. |
| Copy in English | Spanish | Artifact default; broader audience for a remote developer. Easy to switch: all copy lives in `src/data/`. **Confirm.** |
| Name halves sit on solid strips of the ground colour | `mix-blend-mode: difference` (blueprint) | The sheet's own adjustment: difference gives random hues over colour. Strips keep the words always legible. |
| Pin held for two screens (intro + live stage) | Three to five screens (blueprint) | Sheet adjustment: two or three at most, each with its own content. |
| Primary action is a real button | Text link (blueprint) | Sheet adjustment: a real button, 44px or taller. |
| Work names separated by commas, no inline frames | Inline photo frames after each name | The projects have no photographs; frames would hold unrelated pictures. Each project gets a real interface fragment below instead. |
| Contact/list sizes mapped onto the five type steps | Their own sizes (88px rows, 30px table) | Sheet rule: five sizes on the page at most. |
| No sticky "uncover" footer | Footer with `position: sticky; bottom: 0` | Fragile with the pinned hero and full-page screenshots; static footer keeps the same composition. Revisit later. |
| Phone nav as a row of links under the action | One word in the top-right corner | That corner sits on the pinned strip, which ignores pointer events; a menu there would need a dialog for three links. |
| Easing: Emil's `cubic-bezier(0.23, 1, 0.32, 1)` for UI, taste's expo for long reveals | One curve everywhere | The two skills agree on UI (near-identical quint-out); taste's expo is tuned for 800ms+ reveals. |

| Live demo panes update with no animation | Fade or slide on change | `animate` gate: fires on every keystroke (hundreds of times), so motion would lag the input. Instant is correct. |
| Reduced motion shows content instantly (no fade) | Keep a short opacity fade | Simpler and safe; Emil prefers "gentler, not zero" — a 200ms opacity fade is a possible refinement. |
| `toSlug` tested with `node --test` + strip-types | Vitest | Zero new runtime deps for 5 pure-function tests. Tradeoff: no watch UI or coverage report. |
| Vercel "Title Case" and "second person" rules not applied | Apply them | Title Case contradicts taste-skill (sentence case); a portfolio speaks in first person. |

## Gate and review results (final build)

| Check | Result |
| --- | --- |
| `npm run check` (astro check) | 0 errors, 0 warnings |
| `npm test` (`toSlug`) | 5/5 pass |
| taste `lint.mjs src` | 0 FAIL, 0 WARN (4 data-ui lines carry `taste-skill-ignore`) |
| taste `inspect.mjs` at 1440/768/390 | 0 FAIL, 2 WARN: monospace (only inside the real `<pre><code>`), no video (no honest clip exists for this subject) |
| Vercel Web Interface Guidelines | Applied: input `name`, `translate="no"` on name/projects/code, font preload, `text-wrap`, `touch-action`, safe-area edges, focus scroll-margin under the pinned name |
| impeccable `detect` (source) | 0 findings |
| impeccable `detect` (rendered) | 1 left, verified false positive: `oversized-h1` counts the visually-hidden suffix; the visible headline is two words |

### Critique (taste-skill, last round)

- Works: the name frame reads at once; the live stage proves the claim with the real function; fragments add real-looking density; footer wordmark closes the page.
- Falls short: the about section's right side is quiet on desktop; no real photographs of Ricardo or his work yet; projects are samples, so the work section carries no real proof.
- Fixed across rounds: pin held 3 screens → 2; code block overflow; empty dark areas in fragments; phone horizontal overflow in project fragments; missing spaces after inline headings; 400px blank between work and stack; pill contrast 4.3:1 → AA; stragglers.

## Photographs, footage and credits

Asked for imagery that looks "more developer, vibecoder/hacker". Searched the open collections (taste `assets.mjs`, public-domain/CC0 only so the duotone alteration carries no share-alike duty).

| File | What | Licence / source | Where |
| --- | --- | --- | --- |
| `src/assets/photos/abner-board.jpg` | Hand-wired circuit board from ABNER, the NSA's first in-house digital computer (1951), by Daderot | CC0, Wikimedia Commons | Hero, right column |
| `src/assets/photos/punch-card.png` | IBM 80-column punched card, by MdeVicente | CC0, Wikimedia Commons | Interlude band |
| `src/assets/photos/robotron-terminal.jpg` | Robotron K 8912 terminal, by Wolfgang Stief | CC0, Wikimedia Commons | Work heading |
| `public/media/teletype-explorer-1.webm` | Teletype printing Explorer 1's launch: "5 4 3 2 1, mainstage, liftoff, exhaust flame looks good, still going" | Public domain, Wikimedia Commons | Interlude, muted loop |

- One treatment for all: black and pink duotone (grayscale × accent with `mix-blend-mode: multiply`), so archival pictures read in the page's palette.
- Rejected: a CC0 VS Code screenshot (would read as Ricardo's own screen); BY-SA photos (share-alike would bind the altered versions).
- The clip plays only while visible and never under `prefers-reduced-motion`; the poster frame was captured with headless Chromium (no ffmpeg on the machine).
- Credits sit in the footer. Removed: picsum bridge and lattice roof.

## Content still to confirm

- The four interface/terminal fragments are illustrative reconstructions (sample names, the chat text, SQL table names); the figures in the project text are from the CV.
- Phone number from the CV is intentionally not published.
- Copy stays in English.

## Log

- L1 (2026-10-24, user): "sobre uno que vamos a crear y empezarar, ojo para este proyectto me gustaria que me digas exactamente que utilizaste los tradeoffs y todo, quiero un portafolio web en astro."
- L2 (2026-10-24, user): "el portafolio es mio Ricardo valenzuela quintana, soy un desarrollador fullstack senior con especialidad en javascript, typescript react. Nodejs tengo un stack de javascript. Ahorita sobre los proyectos a destacar pon unos de ejemplo yo despues te dijo cuales poner."
- L3: Scaffolded Astro 7.4 minimal. Astro 7 requires Node >= 22.23.4; installed it with nvm and pinned `.nvmrc`. Inspector uses Playwright's Chromium via `CHROME_PATH`.
- L4 (2026-10-24, user): "'/mnt/c/Users/ricar/Downloads/Cv Ricardo En.pdf' este es mi cv para que hagas los cambios necesarios, tambien una vez termines eso dime porque dicidiste esos disenos y otra cosa me gustaria que las imagenes las cambies para algo que se vea mas como desarrollador, como mas vibecoder/hacker"
- L5: Replaced sample content with the CV: role, location, links, about, toolbox, four real projects, experience line-up (stack table removed). New fragments: Negotiachat chat, TNU CRM leads, .NET 10 terminal, SQL terminal. Imagery replaced (see above). Gate: check 0 errors, tests 5/5, lint 0 FAIL, inspect 0 FAIL / 1 WARN (3 typefaces: monospace is literal code and terminals), impeccable detect only the known `oversized-h1` false positive.
- L6 (2026-10-24, user): "quita lo de built with astro" — removed from the footer legal line.
- L7 (2026-10-24, user): asked to fill the SEO checker gaps (keywords, canonical, robots, author, publisher, robots.txt, sitemap.xml). Added keywords/author/publisher/robots meta, Open Graph + Twitter tags, a schema.org `Person` JSON-LD, `/robots.txt` and `/sitemap.xml` endpoints (no new dependency), and a 1200×630 `public/og.png` rendered from the hero design. Canonical, `og:url`, absolute image URLs and sitemap entries are emitted only when `SITE_URL` is set, so nothing points at localhost. Tradeoff: hand-written sitemap instead of `@astrojs/sitemap` (one page; add the integration when there are more).
- L8 (2026-10-24, user): "en la parte de proyectos que tienes actualmente son proyectos de donde e formado parte pero no son mios asi que es mejor hacer esa distencion y otra cosa genera una parte tambien donde estaran mis proyectos"
- L9: Work section renamed "Built with teams:" and each context now names the team or client ("With the TNUniversity team", "For Tairy, as a freelancer"). New section `OwnProjects.astro` ("Built on my own", `#projects`) between Work and Experience, data in `ownProjects` (`src/data/projects.ts`), seeded from his public GitHub repos: RFID access control (NestJS, Prisma, WebSockets, Next.js), BRUNOIA (Next.js, shadcn/ui, live) and this portfolio. **Confirm** these three and their descriptions. Composition differs from its neighbours: a typographic list with the names large in the accent on the plum-black ground, no fragments, no cards. Nav in hero and footer: "Team work" / "My projects". Gate: check 0 errors, tests 5/5, lint 0 FAIL, inspect 0 FAIL / 1 WARN (the existing monospace one).
- L10 (2026-10-24, user): "brunoIa no es mio, el de RFID si es mio y otro que tambien es mio es este https://vecma-80rtevlfo-ricardo-valenzuelas-projects-5330c647.vercel.app/ aunque ahorita no funcionando es mio"
- L11 (2026-10-24, user): "Vema es una app para  una nutriologa, la app esta hecha en nextjs como full stack y tiene supabase como auth y como database." Then: "tambien usa postgresql".
- L12: Removed BRUNOIA. Added Vecma with no links: its repo is not public and the deployment URL opens Vercel's login page (preview deployment protection), so a link would send visitors to a login wall. `years` and `code` are now optional in `OwnProject`. Intro no longer claims all code is public. **Confirm**: the name spelling (URL says "vecma", message said "Vema") and the year. Gate: check 0 errors, lint 0 FAIL, inspect 0 FAIL / 1 WARN (monospace).
- L13 (2026-10-24, user): "es VECMA. y pon una landing page de Burrititos en desarrollo, con react y nextjs"
- L14: Renamed to VECMA. Added Burrititos (React, Next.js) with "In development" in the date line and no links yet.
- L15: Fixed `src/scripts/reveal.ts`: a jump (anchor link, Page Down) could carry an element from below the viewport to above it without ever intersecting, leaving it hidden. A rAF-throttled scroll sweep now reveals anything already passed. Gate: check 0 errors, tests 5/5, lint 0 FAIL; inspect 0 FAIL at 1440/768, 1 FAIL `blank-gap` at 390 (580px at 9956px). Cause, verified in `inspect.mjs`: it walks at most 11 screens (`Math.min(11, ...)`); at 390px the page is 11309px (~13.4 screens), so Contact is never scrolled into view and its reveals never fire. A stepped scroll through the whole page (Playwright probe) leaves 0 hidden reveals. Inspector limit, not a page gap.
- L16 (2026-10-24, user): "Preferiria que los proyectos que yo arme esten arriba donde estan en donde he partitipado."
- L17: "Built on my own" now comes before "Built with teams"; nav in hero and footer follows the same order. Work gets its own top padding (it used to sit flush under the white PictureRest band). Gate: check 0 errors; inspect 0 FAIL at 1440/768, the same 390px `blank-gap` from the inspector's 11-screen cap (see L15).
