# Randy Wong Portfolio App

This directory contains the active portfolio site built with React and Vite.

## Stack

- React 19
- React Router with `HashRouter`
- Vite
- ESLint

## Purpose

The app is intended to present Randy Wong as a credible, technically strong engineer with a DevOps and systems-oriented background.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

## Notes

- Routing uses `HashRouter` to stay compatible with GitHub Pages refresh behavior
- The current design emphasizes a lightweight, static portfolio with no extra dependencies
- Content should remain factual and should not invent job history, metrics, dates, or project claims

## Publishing

Build the app before deployment:

```bash
npm run build
```

The production output is written to `dist/`.
