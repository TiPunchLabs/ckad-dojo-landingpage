# ckad-dojo-landingpage

Landing page CKAD Dojo — React 18 + TypeScript, Vite 6, Tailwind CSS 4, Motion.
Projet type: node-frontend (même patron que `celine-kazarian`).

## Commands

```bash
pnpm dev           # dev server
pnpm build         # tsc -b && vite build
pnpm preview       # preview du build
pnpm lint          # eslint
pnpm format:check  # prettier
```

## Structure

- `src/app/App.tsx` — racine ; une section = un composant dans `src/app/components/`
  (Header, Hero, HowItWorks, Dojos, Features, Contributors, Faq, FinalCta, Footer).
- `src/app/components/Reveal.tsx` — wrapper Motion (`m.div`, dans le `LazyMotion` d'App.tsx)
  pour le reveal au scroll (respecte `prefers-reduced-motion`) ; stagger dans
  `src/app/lib/motion.ts` ; en-têtes de section via `SectionHeading.tsx`.
- `src/app/lib/site.ts` — liens GitHub (source de vérité, y compris pour les commandes
  d'installation du Hero) ; `GITHUB_STARS` n'est qu'un fallback, le compteur réel vient de
  l'API GitHub via `useGithubStars` (une requête par session, cache sessionStorage).
- `src/styles/theme.css` — tokens `@theme` Tailwind 4 : palette (ground/ink/accent/pastels),
  fonts, grille de page (`max-w-page` = 1200px, rythme `*-section` = 84px), règle de base
  `code → font-mono`. Ne jamais hardcoder une couleur. Google Fonts chargées via `<link>`
  dans `index.html`.
- Vidéo de démo du hero : optionnelle, attendue sous `public/media/demo.webm`
  (placeholder affiché sinon).
- Alias `@` → `src/`.
- Maquette de référence : `~/Téléchargements/CKAD Dojo Landing Page/CKAD Dojo Landing v4.dc.html`.

## Conventions

- pnpm uniquement (jamais npm/yarn) ; pre-commit installé via l'env uv (`.envrc`).
- Conventional Commits, branches `{type}/{kebab-description}` (GitHub Flow).
- L'IaC hosting (GitHub) vit hors du repo :
  `~/Workspace/02-infrastructure/ckad-dojo-landingpage/github-terraform/`.
- Site bilingue EN/FR — anglais par défaut, auto-détection navigateur, toggle header.
  Textes dans `src/app/i18n/` (`en.tsx` = source de vérité du type, `fr.tsx` contraint par
  `Dictionary`) ; ne jamais hardcoder une chaîne visible dans un composant.
  Code, commits et docs techniques en anglais.
