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
- Content is data-driven: `src/data/resume.json` and `src/data/tidbits.json` are the single source of truth. Never hardcode copy, jobs, skills, or tidbits in JSX — read from these files.
- `src/styles.css` holds the design tokens (colors, fonts, glow) in its `:root`.
- `src/lib/generateResume.js` lazily loads jsPDF via `await import('jspdf')` and generates the PDF entirely in the browser.

## Conventions

- Imports use explicit extensions: `./components/Hero.jsx`, `../hooks/useTrivia.js`.
- Components use `export default function Name()`; hooks are named exports (`useTrivia`, `useScrollReveal`, `useBackToTop`).
- Accessibility is part of the contract: `aria-expanded`, `aria-live`, `role="dialog"`, keyboard handlers, and `tabindex` must be preserved when editing interactive components.

## Gotchas

- `.gitignore` excludes `dist/` and `node_modules/`.
- `qa-portfolio.pen` is an encrypted pen.dev design file — read it only via the pencil/pen.dev MCP tools, never with `read`/`grep`.
- `dot-grid.glsl` is an orphaned shader not imported by the React app.
- `React.StrictMode` is enabled in `src/main.jsx`.
