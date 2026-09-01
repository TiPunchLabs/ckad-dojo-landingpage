# Architecture

Static one-page landing site for CKAD Dojo, built as a React SPA and deployed as
static files (Netlify-ready via `netlify.toml`).

## Mental Model

```
                 ┌────────────────────────────────────────────┐
                 │  Browser (visitor)                          │
                 │                                             │
                 │   index.html ──loads──► /src/main.tsx       │
                 │                              │              │
                 │                              ▼              │
                 │                        App.tsx (sections)   │
                 │                        styles/theme.css     │
                 └────────────────────────────────────────────┘

   pnpm build ──► tsc -b + vite build ──► dist/ (static) ──► Netlify / any CDN
```

## Module Structure

| Path                   | Responsibility                                        |
| ---------------------- | ----------------------------------------------------- |
| `index.html`           | SEO entry point (meta, OG tags, favicon)              |
| `src/main.tsx`         | React bootstrap                                       |
| `src/app/App.tsx`      | Root component — page sections composed here          |
| `src/app/components/`  | One component per landing section (from the mockup)   |
| `src/styles/theme.css` | Design system — CSS custom properties (colors, fonts) |
| `.github/workflows/`   | CI: lint + format check, then build                   |

## Design Decisions

| Decision                        | Rationale                                             |
| ------------------------------- | ----------------------------------------------------- |
| Same stack as `celine-kazarian` | Proven reference pattern (Vite/React/TS/Tailwind 4)   |
| Hosting IaC outside the repo    | Terraform state contains secrets; see infra workspace |
| Static deploy (no backend)      | Landing page only — no server-side logic needed       |
