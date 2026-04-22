# Agents Guide

This file defines how AI coding agents should work in this repository.

## Project Scope

- This repository hosts Randy Wong's personal portfolio website.
- The active application is the React + Vite site in `my-portfolio/`.
- The repository root is mainly for project documentation and support files.
- The site is intended for public viewing and GitHub Pages deployment.

## Primary Goals

- Present Randy as a credible, technically strong DevOps-focused engineer.
- Keep the site fast, accessible, responsive, and easy to maintain.
- Preserve clear, factual, recruiter-relevant content.
- Keep deployment to GitHub Pages simple and reliable.

## Working Rules

- Prefer changes inside `my-portfolio/` unless the task is clearly about root documentation or deployment metadata.
- Read the relevant files before editing and keep changes scoped to the request.
- Favor maintainable React code over clever abstractions.
- Reuse existing layout patterns and styles before introducing new structure.
- Do not add dependencies unless they solve a real problem that is hard to address with the current stack.

## GitHub Pages Constraints

- Preserve GitHub Pages compatibility in routing, asset paths, and build output.
- Keep routing compatible with the current `HashRouter` setup unless a deployment-safe alternative is explicitly requested.
- Do not make deployment more complex without a clear reason.
- Call out any change that affects publishing, URLs, navigation behavior, or page metadata.

## Content Rules

- Do not invent or embellish personal facts, job history, project ownership, dates, metrics, links, or contact information.
- Preserve Randy's tone: direct, credible, concrete, and professional.
- Improve weak copy by making it clearer and more specific, not more generic or hype-heavy.
- Ask for clarification instead of guessing when a content change would alter meaning or introduce new claims.
- Avoid placeholder text in any user-facing page.

## Page Priorities

- `Home.jsx`: communicate role identity, strengths, and value quickly.
- `Experience.jsx`: emphasize impact, ownership, systems work, and technical depth when verified source material exists.
- `Projects.jsx`: show selected work with clear problem, stack, and outcome framing.
- `Contact.jsx`: make outreach easy and keep professional links accurate.

## Design Expectations

- Preserve a strong mobile experience and clean desktop layout.
- Prioritize accessibility with semantic HTML, keyboard-friendly behavior, sensible heading structure, and adequate contrast.
- Improve visual polish without making the site heavy, fragile, or overanimated.
- Keep the design intentional and personal rather than template-like.

## Avoid

- Breaking GitHub Pages deployment behavior.
- Rewriting large amounts of copy without being asked.
- Adding unnecessary dependencies for simple UI or styling changes.
- Overengineering components before the content and layout are solid.
- Creating extra documentation files that do not help maintain the project.

## Validation

- Use the existing Vite scripts when relevant: `npm run build` and `npm run lint` from `my-portfolio/`.
- Verify responsive behavior and obvious navigation issues when UI changes are made.
- Mention any checks that could not be run.
