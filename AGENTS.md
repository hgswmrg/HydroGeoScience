# AGENTS.md — HydroGeoScience for Watershed Management Research Group (hgswmrg)

Research group website for the HydroGeoScience for Watershed Management Laboratory
(PI: Ali Ameli, University of British Columbia). Public site + Sanity CMS studio.
Deployed on Vercel (Vercel Analytics + sanity-plugin-vercel-deploy are wired in).

## Architecture Overview

Two apps live in this repo:

1. **Frontend** (repo root) — Next.js 13 **App Router** (`app/` directory), JavaScript/JSX (not TypeScript), Tailwind CSS.
2. **CMS** (`backend/`) — Sanity Studio v3 with its own `package.json`. It is *not* an API server; content is fetched directly from Sanity's hosted API by the frontend.

```
Sanity Studio (backend/) ──publishes──▶ Sanity hosted dataset ──GROQ fetch──▶ Next.js pages (app/)
```

### Running locally
```bash
npm run dev            # frontend at http://localhost:3000
cd backend && npm run dev   # Sanity Studio (basePath /studio)
```
No build-time env vars are required to run the frontend (Sanity project ID is hardcoded).

## Key Files

| Path | Purpose |
|---|---|
| `app/layout.jsx` | Root layout: Navbar + `{children}` + Footer, site metadata |
| `app/page.jsx` | Homepage: carousel, motivation card, research topics, PI bio, news/tweets |
| `app/globals.css` | Only global CSS (tailwind directives + overflow-x fix); everything else is Tailwind utility classes |
| `backend/sanity-utils.ts` | **All data-fetching functions** (GROQ queries) — the de-facto API layer |
| `backend/sanity.config.js` | Sanity Studio config (projectId `wefrxt7t`, dataset `production`, basePath `/studio`) |
| `backend/schemas/index.js` | Registers all content schemas |
| `tailwind.config.js` | Theme: brand colors, fonts, breakpoints |
| `next.config.js` | Allows remote images from `cdn.sanity.io` |
| `jsconfig.json` | Path alias: `@*` → `./*` (e.g. `@components/CardLeft`, `@backend/sanity-utils`) |
| `components/Navbar.jsx` | Fixed top nav with mobile hamburger + Team dropdown |
| `components/Footer.jsx` | Footer with logo, lab address, Twitter/GitHub links |

## Routes (App Router pages)

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.jsx` | Server component, fetches carousel from Sanity |
| `/research` | `app/research/page.jsx` | |
| `/publications` | `app/publications/page.jsx` | Sanity `publications`, grouped by year (`YearCard`) |
| `/team` | `app/team/page.jsx` | Sub-pages: `/team/management`, `/team/affiliated`, `/team/graduates`, `/team/undergraduate`, `/team/alumni` — all filter Sanity `profile` docs by `profileType` |
| `/news` | `app/news/page.jsx` | Sanity `news` |
| `/products` | `app/products/page.jsx` | Sanity `products`; `/products/map` embeds map |
| `/map` | `app/map/page.jsx` | iframe of Google Earth Engine app: `https://hgswmrg.users.earthengine.app/view/map` |
| `/jobs` | `app/jobs/page.jsx` | Sanity `jobs` |
| `/contact` | `app/contact/page.jsx` | Client component; sends mail via **EmailJS** (`@emailjs/browser`) from the browser |

⚠️ `app/api/send-email/page.jsx` is a **Pages-Router-style API handler** (`handler(req, res)` + nodemailer) sitting in the App Router as a `page.jsx` — it does not work as a route handler. The contact form actually uses EmailJS client-side. Treat this file as dead/legacy code; if a real API route is needed, rewrite it as `app/api/send-email/route.js` with `export async function POST(request)`.

## Data Layer (Sanity)

- **Project ID:** `wefrxt7t`, **dataset:** `production`, **apiVersion:** `2023-03-09` — hardcoded in every function in `backend/sanity-utils.ts` (a new `createClient` per function; consolidate carefully if refactoring).
- Fetch functions: `getNews()`, `getJobs()`, `getProducts()`, `getPublications()`, `getProfile()`, `getCarousel()`.
- Content types (schemas in `backend/schemas/`): `news`, `jobs`, `profile`, `publications`, `carousel`, `products`.
- Images come from `cdn.sanity.io` (whitelisted in `next.config.js`); queries dereference them as `"image": image.asset->url`.
- `carousel` and `news` are ordered by date (`displayDate desc` / `publishedAt desc`).

## Styling & Design System

Tailwind-only styling (no CSS modules, no styled-components on the frontend).

**Brand colors** (defined in `tailwind.config.js`):
- `primary-darkgreen` — `#064636` (main brand color: headings, hover states, accents)
- `primary-lightgreen` — `#F4F6F4` (light background)
- `primary-darkblue` — `#03045e` (navbar bottom border, occasional accents)
- Grays: `text-gray-600` for nav/body text, `bg-gray-200` for the footer.

**Fonts** (extended families): `font-Montserrat` (Montserrat) and `font-inter` (Inter), both sans-serif fallback.

**Breakpoints** (custom): `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` **2000px** (note: 2xl is non-standard, used for very large screens — many pages add `2xl:` bumps for text size/margins).

**Patterns:**
- Nav links: `hover:bg-primary-darkgreen hover:text-white transition duration-500`.
- Section headings: centered, `text-primary-darkgreen`, `text-xl md:text-3xl 2xl:text-5xl`.
- Content cards: `CardLeft` / `CardRight` (image + text, alternating sides), `CardCenter` (text only).
- Icons via `react-icons` (`fa`, `ai`, `io` sets).

## Components (`components/`)

- `Carousel.jsx` — homepage hero (react-responsive-carousel), driven by Sanity `carousel` docs.
- `CardLeft` / `CardRight` / `CardCenter` — homepage/section layout cards.
- `ResearchTopicsContainer` + `ResearchTopicCard` — research topic grid.
- `NewsAndTweets.jsx` — news feed + Twitter embed (react-twitter-embed).
- `News.jsx`, `JobsCard.jsx`, `ProductCard.jsx`, `TeamCard.jsx`, `ResearchCard.jsx`, `YearCard.jsx` — per-page cards.
- `Navbar.jsx`, `Footer.jsx` — global chrome (mounted in `app/layout.jsx`).

## Conventions & Gotchas

- **JS, not TS** on the frontend (only `backend/sanity-utils.ts` is TypeScript). No ESLint config at root; no tests exist.
- Client components must declare `"use client"` (Navbar, Carousel, contact form do); pages that fetch Sanity data are async server components.
- Import style is mixed: relative paths and `@`-alias both appear (`@components/...`, `@backend/sanity-utils`).
- Static images live in `public/assets/` (logo: `logo.png` / `logoimg.png`, footer logo: `footer.png`, PI photo: `AAmeli.jpg`).
- `.env` at root is **committed** and contains SMTP/Sanity credentials in a non-standard format (quoted values with semicolons — not actually parseable as env vars, and mostly used by the dead nodemailer code). Don't add real secrets there; if touching email or Sanity write tokens, move to proper env vars and Vercel settings.
- `app/_document.js` is a Pages Router leftover (unused in App Router).
- Contact email: hgswmrg@gmail.com. GEE app account: `hgswmrg`.

## Deployment

- Vercel hosts the frontend; Sanity Studio has a "Deploy" button plugin (`sanity-plugin-vercel-deploy`) so content editors can trigger rebuilds.
- `npm run build` (root) for the frontend; `cd backend && npm run deploy` for the hosted Sanity Studio.
