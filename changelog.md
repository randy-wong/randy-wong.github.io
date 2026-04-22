# Changelog

## 2026-04-22

- Reworked the portfolio app into a more polished first-pass presentation with a structured header, stronger homepage framing, and consistent multi-section page layouts.
- Replaced placeholder-style page content on `Home`, `Experience`, `Projects`, and `Contact` with more professional, recruiter-facing copy based only on verified repository facts.
- Converted raw contact details into proper email and LinkedIn links.
- Removed leftover Vite starter metadata and default global CSS that conflicted with the portfolio design direction.
- Verified the updated app with `npm run lint` and `npm run build` inside `my-portfolio/`.

## 2026-04-21

- Renamed the root `readme.md` file to `README.md` and added project-level documentation.
- Clarified that `my-portfolio/` is the active Vite + React application for development.
- Added deployment notes for publishing the Vite app to GitHub Pages.
- Removed the unused root Jekyll scaffold files: `_config.yml` and `site.css`.
- Switched the React app router from `BrowserRouter` to `HashRouter` for GitHub Pages compatibility.
- Added project support docs in the repository root:
  - `prompts.md`
  - `AGENTS.md`
  - `todo.md`
