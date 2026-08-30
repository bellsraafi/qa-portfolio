# Portfolio — Bello Abdulrafiu

Personal portfolio site for Bello Abdulrafiu, Senior QA Engineer & SDET.

Built with Vite 8 + React 19 (plain JavaScript, no TypeScript). Content is data-driven from `src/data/resume.json` and `src/data/tidbits.json`.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start the dev server
- `npm run build` — production build (outputs to `dist/`)
- `npm run lint` — run Oxlint
- `npm run preview` — preview the production build locally

## Deployment

The site deploys automatically to GitHub Pages via a workflow (`.github/workflows/deploy.yml`) on every push to `main`.

Live site: https://bellsraafi.github.io/qa-portfolio/

## Features

- Split-screen hero with nav overlay and a cycling testing-trivia overlay
- Data-driven experience timeline, skills, certifications, and education sections
- Scroll-reveal animations, back-to-top button, and smooth-scroll anchors
- Resume PDF download generated in-browser with jsPDF
