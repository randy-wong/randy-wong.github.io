# Randy Wong Portfolio

This repository hosts Randy Wong's personal portfolio site.

## Repository Layout

- `my-portfolio/`: active React + Vite application
- repository root: project documentation and support files

## Current Site Direction

- Present Randy as a DevOps-focused engineer with practical software and systems experience
- Keep the site fast, maintainable, and GitHub Pages compatible
- Use concise, factual copy without inflated claims

## Development

Run the app locally from `my-portfolio/`:

```bash
cd my-portfolio
npm install
npm run dev
```

## Validation

Use the existing project scripts before publishing changes:

```bash
cd my-portfolio
npm run lint
npm run build
```

## Deployment

The app is configured for GitHub Pages-safe routing with `HashRouter`.

- Because this repository is a user site (`randy-wong.github.io`), the default Vite base path can remain `/`
- Build from `my-portfolio/` with `npm run build`
- Publish the generated `my-portfolio/dist/` output with the repo's GitHub Pages workflow or equivalent hosting step

## Documentation

Supporting repository docs:

- [AGENTS.md](AGENTS.md): working rules for AI coding agents
- [prompts.md](prompts.md): task prompts for future iterations
- [todo.md](todo.md): current improvement backlog
- [CHANGELOG.md](CHANGELOG.md): notable repository updates
