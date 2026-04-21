# Randy Wong Portfolio

This repository currently contains two site shapes:

- `my-portfolio/`: the active Vite + React application
- repository root: a small GitHub Pages / Jekyll-style scaffold with `_config.yml`

## Development

Use the Vite app for local development:

```bash
cd my-portfolio
npm install
npm run dev
```

## Deployment

Deploy the React app from `my-portfolio/`.

- The app now uses `HashRouter`, which avoids GitHub Pages route-refresh 404s.
- Because this repository is a user site (`randy-wong.github.io`), the default Vite base path can remain `/`.
- Build with `npm run build` inside `my-portfolio/` and publish the generated `dist/` output with your GitHub Pages workflow or hosting setup.
