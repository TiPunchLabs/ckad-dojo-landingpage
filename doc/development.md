# Development

## Prerequisites

- Node.js >= 22 + pnpm (via corepack)
- uv (Python env for pre-commit)
- direnv (optional — auto-activates the uv venv)

## Setup

```bash
pnpm install        # JS dependencies
uv sync             # tooling venv (pre-commit)
pre-commit install  # git hooks
```

## Running locally

```bash
pnpm dev      # http://localhost:5173
pnpm build    # production build in dist/
pnpm preview  # serve the built dist/
```

## Code quality

```bash
pnpm lint          # ESLint (flat config, TS + react-hooks)
pnpm lint:fix
pnpm format        # Prettier write
pnpm format:check
```

Pre-commit runs: hygiene hooks, ruff (if any Python appears), eslint, prettier.
CI (GitHub Actions) enforces lint + format:check + build on every push/PR to `main`.

## Conventions

- Conventional Commits (English), GitHub Flow branches `{type}/{kebab-description}`.
- Site content in French; code identifiers and docs in English.
- Design tokens live in `src/styles/theme.css` — never hardcode colors in components.
