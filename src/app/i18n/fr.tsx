import type { Dictionary } from './en';

/** French dictionary — must mirror the shape of `en.tsx` (enforced by the type). */
export const fr: Dictionary = {
  meta: {
    title: "CKAD Dojo — Simulateur d'examen CKAD gratuit",
    description:
      "CKAD Dojo, simulateur d'examen CKAD gratuit : 11 examens blancs gratuits, 218 exercices, entraînement CKAD chronométré et score instantané sur votre propre cluster. Préparez et réussissez la certification Kubernetes.",
  },
  header: {
    nav: [
      { href: '#comment', label: 'Comment ça marche' },
      { href: '#dojos', label: 'Les 11 dojos' },
      { href: '#contributeurs', label: 'Contributeurs' },
      { href: '#faq', label: 'FAQ' },
    ],
    ticker: 'Dojo Suzaku · 21 questions · 112 pts — programme CKAD v1.35 couvert à 84%',
    cta: 'Entrer dans le dojo',
    langToggle: 'Langue',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
  },
  hero: {
    eyebrow: "Simulateur d'examen CKAD gratuit · Auto-hébergé",
    title: (
      <>
        Le CKAD, mais en <span className="text-accent">mode dojo</span>.
      </>
    ),
    lede: 'Onze examens blancs CKAD gratuits, 218 questions, un chrono de 120 minutes et un score instantané. Le tout sur votre propre cluster, sans compte et sans cloud.',
    ctaStart: 'Commencer',
    ctaQuickstart: 'Voir le quickstart',
    copy: 'Copier',
    copied: 'Copié !',
    videoAria: "Démo de l'interface web CKAD Dojo",
    videoPlaceholderTitle: 'Emplacement vidéo de démo',
    videoPlaceholderHint: (
      <>
        déposez le fichier ici sous
        <br />
        media/demo.webm
      </>
    ),
    caption: "Capture de l'interface web · chrono, questions et terminal embarqué",
  },
  howItWorks: {
    eyebrow: 'La boucle',
    title: "Quatre commandes, une boucle d'entraînement CKAD.",
    lede: 'Le simulateur installe le terrain, vous vous entraînez, il compte les points, puis il remet tout à zéro. Autant de fois que nécessaire.',
    steps: [
      {
        title: 'Ouvrez un dojo',
        text: 'Choisissez un dojo dans le sélecteur — namespaces, workloads et releases Helm sont provisionnés pour vous. Scripts idempotents : relançables à volonté.',
      },
      {
        title: 'Entraînez-vous au terminal',
        text: 'Questions à gauche, shell embarqué à droite, séparateur redimensionnable. Flèches pour naviguer, F pour marquer, indices repliables si vous bloquez.',
      },
      {
        title: 'Comptez les points',
        text: "Pas besoin d'attendre la fin : scorez après chaque question et voyez exactement quel critère vous a échappé.",
      },
      {
        title: 'Effacez, recommencez',
        text: (
          <>
            Lisez <code className="text-[12.5px]">solutions.md</code>, nettoyez le cluster et
            refaites le même dojo demain — au réflexe, pas à la mémoire.
          </>
        ),
      },
    ],
  },
  dojos: {
    eyebrow: 'Les dojos',
    title: 'Choisissez votre gardien.',
    lede: (
      <>
        Trois dojos portent le nom des Shishin, les gardiens célestes ; les huit autres, des
        créatures du folklore japonais. Les ressources de chaque dojo suivent son thème, donc{' '}
        <code className="text-[15px] text-accent">kubectl get pods</code> se lit comme une histoire.
      </>
    ),
    items: {
      Suzaku: 'Constellations',
      Byakko: 'Mythologie grecque',
      Genbu: 'Mythologie nordique',
      Kappa: 'Eau & rivières',
      Kirin: 'Océan',
      Tengu: 'Sommets',
      Tanuki: 'Forêt',
      Inari: 'Récoltes',
      Ryujin: 'Mer',
      Oni: 'Fortifications',
      Amaterasu: 'Lumière',
    },
    themeHeader: 'Thème',
    contribute: 'Contribuer',
    dojo12Title: 'Dojo 12 ?',
    dojo12Text: "La matrice de couverture liste ce qu'il reste à travailler. Les PR sont ouvertes.",
  },
  features: {
    badge: 'Terminal embarqué',
    title: 'Les questions à gauche, le vrai shell à droite.',
    text: "Un panneau ttyd intégré à l'interface : même geste que dans l'examen réel, sans jongler entre les fenêtres. La session survit à la navigation entre questions.",
    screenshotAlt:
      "Interface du simulateur d'examen CKAD : question à gauche, terminal embarqué à droite, chrono de 120 minutes en haut",
    cards: [
      {
        title: 'Alertes de chrono',
        text: "Le compteur passe au jaune à 15 min, à l'orange à 5, au rouge à 1. Pause possible si vous coupez l'entraînement en deux.",
      },
      {
        title: 'Programme officiel v1.35',
        text: 'Chaque question est rattachée à un domaine CNCF. Couverture publiée : 66 à 84% selon le domaine, gaps compris.',
      },
      {
        title: 'Thème clair & sombre',
        text: "Interface web moderne, navigation clavier, bannière ASCII personnalisée dans le terminal. Oui, c'est gratuit.",
      },
    ],
  },
  contributors: {
    eyebrow: 'Contributeurs',
    title: "Les contributeurs à l'honneur.",
    lede: 'Des humains, pas des bots : les comptes automatisés (dependabot, pre-commit.ci) ne figurent pas ici. Cinq dojos sur onze viennent de travaux partagés par la communauté et adaptés au simulateur.',
    items: [
      {
        role: 'Mainteneur',
        text: "Création du simulateur, de la CLI, de l'interface web et du scoring automatique. 300 commits.",
      },
      {
        role: '4 dojos adaptés',
        text: 'CKAD-exercises, source des dojos Tengu, Tanuki, Inari et Ryujin — 80 questions au total.',
      },
      {
        role: '1 dojo adapté',
        text: 'CKAD-Practice-Questions, source du dojo Kappa des Rivières — 17 questions, 91 points.',
      },
    ],
    yourNameTitle: 'Votre nom ici',
    yourNameText:
      'Un dojo, une question, une correction de scoring : tout est bon à prendre. Licence CC BY-NC-SA 4.0.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'FAQ, version courte.',
    lede: 'Il en manque une ? Ouvrez une issue, la réponse finira dans le README.',
    items: [
      {
        question: 'Il me faut un cluster Kubernetes ?',
        answer:
          'Oui, le vôtre : kubeadm, minikube ou kind en 1.28+. Le dojo provisionne namespaces, workloads et releases Helm dessus, puis nettoie tout à la fin. Rien ne part vers le cloud.',
      },
      {
        question: 'Comment le scoring fonctionne ?',
        answer:
          "Des fonctions bash interrogent l'état réel du cluster : plus de 400 critères, question par question. Vous pouvez scorer à tout moment pendant l'entraînement, pas seulement à la fin.",
      },
      {
        question: 'Faut-il connaître Python ou uv ?',
        answer: (
          <>
            Non. La CLI <code>ckad-dojo</code> enveloppe simplement les scripts bash — et si vous
            préférez, <code>./scripts/ckad-exam.sh</code> fait exactement la même chose sans Python.
          </>
        ),
      },
      {
        question: "Les questions ressemblent-elles à l'examen ?",
        answer: (
          <>
            Elles suivent le programme CKAD v1.35 et les chemins <code>/opt/course/N/</code> de
            l'examen réel, mappés en local. Ce sont des exercices originaux, pas des questions
            d'examen fuitées.
          </>
        ),
      },
      {
        question: 'Quelle licence ?',
        answer:
          "CC BY-NC-SA 4.0 : usage personnel et pédagogique libre, modifications sous la même licence, pas d'usage commercial sans accord explicite de l'auteur.",
      },
    ],
  },
  finalCta: {
    kicker: 'Allez, un dernier dojo',
    title: 'Le stress ici. Le diplôme là-bas.',
    lede: 'Open source, gratuit, sans CB à sortir de la poche. Si un dojo vous a fait passer le CKAD, mettez une étoile pour le suivant.',
    ctaStar: 'Mettre une étoile',
    ctaQuickstart: 'Lire le quickstart',
  },
  footer: {
    license: 'CC BY-NC-SA 4.0 · à but pédagogique',
    createdBy: 'Créé par',
    issues: 'Issues',
    contribute: 'Contribuer',
    curriculum: 'Programme CKAD',
  },
};
