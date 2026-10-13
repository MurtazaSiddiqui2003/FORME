# FORME — Luxury Editorial Lookbook

A standalone, responsive luxury fashion editorial experience built with Next.js, JavaScript, Tailwind CSS, GSAP, ScrollTrigger, and Lenis.

## Getting started

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Project structure

- `app/page.js` — editorial homepage and motion
- `app/globals.css` — responsive visual system
- `app/layout.js` — root layout and metadata

## Notes

- This is a standalone project. It does not modify or depend on Sterling Bloom.
- Campaign photography currently uses remote Unsplash image URLs as visual placeholders; replace these with licensed campaign assets before a commercial launch.
- Smooth scrolling and reveal animations are initialized client-side and cleaned up when the page unmounts.
