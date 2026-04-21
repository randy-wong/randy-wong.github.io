# Agents Guide

This file captures how AI coding agents should work in this repository.

## Project Context

- The active site is the React + Vite app in `my-portfolio/`.
- The repository root is mainly for project notes and repo-level documentation.
- The portfolio is intended to present Randy Wong as a DevOps-focused engineer.

## Working Rules

- Prefer making changes inside `my-portfolio/` unless the task is clearly about repo docs or deployment metadata.
- Preserve simple deployment to GitHub Pages.
- Keep routing compatible with the current `HashRouter` setup.
- Favor maintainable React code over clever abstractions.
- Improve the portfolio with concrete, recruiter-relevant outcomes rather than generic filler copy.

## Page Goals

- `Home.jsx`: establish a strong first impression, role identity, and value proposition.
- `Experience.jsx`: emphasize impact, ownership, and technical depth.
- `Projects.jsx`: show selected work with clear problem, stack, and result framing.
- `Contact.jsx`: make it easy to reach out and verify professional presence.

## Preferred Task Types

- Tighten content and presentation for hiring relevance.
- Improve visual polish without making the site heavy or fragile.
- Refactor structure when it meaningfully improves maintainability.
- Keep deployment straightforward and documented.

## Avoid

- Leaving placeholder copy in user-facing pages.
- Adding unnecessary dependencies for simple UI needs.
- Creating documentation files that do not help maintain the project.
- Overengineering components before the content is strong.

## AGENTS.md Writing Notes

- Keep this file short, specific, and operational; it should help an agent act, not restate generic best practices.
- Describe the real purpose of the site clearly so edits stay aligned with recruiting and personal branding goals.
- Protect factual personal details such as role history, project ownership, dates, links, and contact information.
- Preserve Randy's tone: direct, credible, and concrete rather than hype-heavy or generic.
- Call out high-risk changes explicitly, especially navigation, URLs, SEO metadata, deployment setup, and resume-like content.
- Prefer reuse of existing components and styles before introducing new patterns or abstractions.
- Require accessibility, responsive behavior, and lightweight performance as defaults for UI work.
- Ask for confirmation instead of guessing when content is missing or when a rewrite would change meaning.
- Include validation expectations such as build, lint, and a quick responsive review whenever those checks are available.
