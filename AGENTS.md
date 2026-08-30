# AGENTS.md

Personal portfolio site for Bello Abdulrafiu (Senior QA Engineer & SDET).

## Stack

- Vite 8 + React 19, plain JavaScript (`.jsx`) — **no TypeScript**.
- Linter is **Oxlint** (not ESLint), configured in `.oxlintrc.json`.
- `jspdf` for the resume PDF download.
- Google Fonts (Inter + JetBrains Mono) loaded via `<link>` in `index.html`.

## Commands

- `npm run dev` — dev server (Vite)
- `npm run build` — production build (Vite)
- `npm run lint` — Oxlint
- `npm run preview` — preview the built `dist/`

No test framework or test script is present.

## Architecture

- The React app lives at the repo **root** (`src/`, `index.html`, `vite.config.js`).
- `site/` is the original vanilla HTML/CSS/JS implementation kept as the visual-parity reference. **Do not modify it.** The React app must match `site/` visually.
- Content is data-driven: `src/data/resume.json` and `src/data/tidbits.json` are the single source of truth. Never hardcode copy, jobs, skills, or tidbits in JSX — read from these files.
- `src/styles.css` was copied verbatim from `site/css/styles.css`; design tokens (colors, fonts, glow) live in its `:root`. Keep it in sync with the reference when the design changes.
- `src/lib/generateResume.js` lazily loads jsPDF via `await import('jspdf')` and generates the PDF entirely in the browser.

## Conventions

- Imports use explicit extensions: `./components/Hero.jsx`, `../hooks/useTrivia.js`.
- Components use `export default function Name()`; hooks are named exports (`useTrivia`, `useScrollReveal`, `useBackToTop`).
- Accessibility is part of the contract: `aria-expanded`, `aria-live`, `role="dialog"`, keyboard handlers, and `tabindex` must be preserved when editing interactive components.

## Gotchas

- `.gitignore` excludes `site/`, `docs/`, `dist/`, and `node_modules/`. The reference site and `docs/superpowers/*` plans are **local-only** and never committed.
- `qa-portfolio.pen` is an encrypted pen.dev design file — read it only via the pencil/pen.dev MCP tools, never with `read`/`grep`.
- `dot-grid.glsl` is an orphaned shader not imported by the React app.
- `docs/superpowers/plans/*` are stale in places (they reference React 18 and an `app/` subdirectory); the actual app is React 19 at the root. Trust the current source over those plans.
- `React.StrictMode` is enabled in `src/main.jsx`.
