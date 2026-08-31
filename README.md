# CKAD Dojo — Landing page

Landing page pour **CKAD Dojo**, plateforme d'entraînement à la certification
**CKAD** (Certified Kubernetes Application Developer).

> _« Le dojo Kubernetes : la certification se gagne à l'entraînement. »_

## Stack technique

| Catégorie  | Technologie                           |
| ---------- | ------------------------------------- |
| Framework  | React 18 + TypeScript                 |
| Build      | Vite 6                                |
| Styling    | Tailwind CSS 4 (variables CSS custom) |
| Animations | Motion (Framer Motion)                |
| Icônes     | Lucide React                          |

## Démarrage rapide

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build de production
pnpm build

# Prévisualiser le build
pnpm preview
```

## Structure du projet

```
src/
├── app/
│   ├── App.tsx                    # Composant racine
│   ├── components/
│   │   ├── Header.tsx             # Header sticky + nav + CTA GitHub
│   │   ├── Hero.tsx               # Titre, tabs d'installation, emplacement vidéo
│   │   ├── HowItWorks.tsx         # Les 4 étapes de la boucle d'entraînement
│   │   ├── Dojos.tsx              # Les 11 dojos + carte « Dojo 12 ? »
│   │   ├── Features.tsx           # Terminal embarqué + 3 features
│   │   ├── Contributors.tsx       # Contributeurs + carte « Votre nom ici »
│   │   ├── Faq.tsx                # Accordéon FAQ
│   │   ├── FinalCta.tsx           # Bandeau CTA final
│   │   ├── Footer.tsx             # Pied de page
│   │   ├── Reveal.tsx             # Wrapper d'animation au scroll (Motion)
│   │   └── SectionHeading.tsx     # Bloc eyebrow + titre + chapeau des sections
│   ├── i18n/
│   │   ├── en.tsx                 # Dictionnaire anglais (source de vérité du type)
│   │   ├── fr.tsx                 # Dictionnaire français
│   │   ├── context.ts             # Contexte + hook useI18n
│   │   └── LanguageProvider.tsx   # Provider (localStorage + auto-détection, défaut EN)
│   └── lib/
│       ├── site.ts                # Liens GitHub + compteur d'étoiles
│       └── motion.ts              # Délais de stagger
├── styles/
│   ├── index.css                  # Point d'entrée CSS
│   ├── theme.css                  # Tokens du design system (palette, typos, grille)
│   └── tailwind.css               # Config Tailwind
└── main.tsx                       # Point d'entrée React
```

Les Google Fonts (Outfit, IBM Plex Mono, Noto Sans JP) sont chargées via `<link>`
dans `index.html` pour paralléliser leur téléchargement avec le bundle CSS.

## Vidéo de démo

Le hero affiche un placeholder tant que la vidéo n'existe pas. Pour l'activer,
déposez le fichier sous `public/media/demo.webm`.

## Qualité de code

```bash
pnpm lint          # ESLint
pnpm format:check  # Prettier
pre-commit install # hooks git (via l'environnement uv, cf. .envrc)
```

## Licence

Voir [LICENSE](LICENSE).
