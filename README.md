# JERN Digital Vision

Professional product studio site built with Vite, React, TypeScript, and Tailwind CSS.

## Stack

- **Vite 5** + **React 18** + **TypeScript**
- **React Router 6** (SPA)
- **Tailwind CSS 3** + shadcn/ui
- **Framer Motion** for page animations
- Deployed on **Vercel**

## Development

```sh
npm install
npm run dev
```

Dev server runs at `http://localhost:8080`.

## Build

```sh
npm run build
npm run preview
```

Output directory: `dist/`

## Deployment (Vercel)

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |

SPA routing is handled by [`vercel.json`](vercel.json). Direct URLs like `/about` and `/work` work on refresh.

## Environment variables

Optional — for contact and waitlist form submission:

| Variable | Description |
|----------|-------------|
| `VITE_FORM_ENDPOINT` | Formspree or similar POST endpoint |

Copy `.env.example` to `.env.local` and set your endpoint.

## Project structure

```
src/
  /** content/     — editable copy (site, home, work, etc.)
  components/
    home/       — home page sections
    layout/     — PageLayout, Section, Footer, CTABlock
    motion/     — FadeUp, StaggerChildren
  pages/        — route pages
  lib/          — utilities and motion variants
public/
  video/        — hero poster (add hero-demo.webm/mp4 when ready)
```

## Customising content

Edit files in `src/content/` — no JSX changes needed for copy updates:

- `site.ts` — nav, footer, site metadata
- `home.ts` — hero, value props, CTAs
- `work.ts` — project case studies (replace placeholders)
- `about.ts`, `process.ts`, `insights.ts`, etc.

## Hero video

Place optimised video files in `public/video/`:

- `hero-demo.webm` (primary)
- `hero-demo.mp4` (fallback)
- `hero-poster.svg` is included as static fallback

Video autoplays muted; disabled when `prefers-reduced-motion` is set.

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/work` | Selected work |
| `/process` | How we build |
| `/about` | About |
| `/insights` | Notes & updates |
| `/contact` | Contact form |
| `/newsletter` | Waitlist |
| `/visual-lab` | Redirects to `/work` |
