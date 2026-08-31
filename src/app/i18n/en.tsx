/**
 * English dictionary — source of truth for the `Dictionary` type.
 * `fr.tsx` is annotated with this type, so the compiler flags any missing
 * or mistyped key. Structural data (stats, commands, URLs) stays in the
 * components; only reader-facing text lives here.
 */
export const en = {
  meta: {
    title: 'CKAD Dojo — The CKAD, but dojo style',
  },
  header: {
    nav: [
      { href: '#comment', label: 'How it works' },
      { href: '#dojos', label: 'The 11 dojos' },
      { href: '#contributeurs', label: 'Contributors' },
      { href: '#faq', label: 'FAQ' },
    ],
    cta: 'Enter the dojo',
    langToggle: 'Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  hero: {
    title: (
      <>
        The CKAD, but <span className="text-accent">dojo style</span>.
      </>
    ),
    lede: 'Eleven full mock exams, 218 questions, a 120-minute timer and instant scoring. All on your own cluster — no account, no cloud.',
    ctaStart: 'Get started',
    ctaQuickstart: 'See the quickstart',
    copy: 'Copy',
    copied: 'Copied!',
    videoAria: 'Demo of the CKAD Dojo web interface',
    videoPlaceholderTitle: 'Demo video placeholder',
    videoPlaceholderHint: (
      <>
        drop the file here at
        <br />
        media/demo.webm
      </>
    ),
    caption: 'Screenshot of the web UI · timer, questions and embedded terminal',
  },
  howItWorks: {
    eyebrow: 'Easyyy does it',
    title: 'Four commands, one training loop.',
    lede: 'The simulator sets up the training ground, you practice, it keeps score, then resets everything. As many times as it takes.',
    steps: [
      {
        title: 'Open a dojo',
        text: 'Pick a dojo from the selector — namespaces, workloads and Helm releases are provisioned for you. The scripts are idempotent: rerun them at will.',
      },
      {
        title: 'Train in the terminal',
        text: 'Questions on the left, embedded shell on the right, resizable divider. Arrow keys to navigate, F to flag, collapsible hints if you get stuck.',
      },
      {
        title: 'Count the points',
        text: 'No need to wait for the end: score after each question and see exactly which criterion you missed.',
      },
      {
        title: 'Wipe, start again',
        text: (
          <>
            Read <code className="text-[12.5px]">solutions.md</code>, clean the cluster and redo the
            same dojo tomorrow — by reflex, not by memory.
          </>
        ),
      },
    ],
  },
  dojos: {
    eyebrow: 'Eleven themed dojos',
    title: 'Choose your guardian.',
    lede: (
      <>
        Three dojos are named after the Shishin, the celestial guardians; the other eight after
        creatures of Japanese folklore. Each dojo's resources follow its theme, so{' '}
        <code className="text-[15px] text-accent">kubectl get pods</code> reads like a story.
      </>
    ),
    items: {
      Suzaku: 'Theme: constellations',
      Byakko: 'Theme: Greek mythology',
      Genbu: 'Theme: Norse mythology',
      Kappa: 'Theme: water & rivers',
      Kirin: 'Theme: ocean',
      Tengu: 'Theme: mountain summits',
      Tanuki: 'Theme: forest',
      Inari: 'Theme: harvests',
      Ryujin: 'Theme: sea',
      Oni: 'Theme: fortifications',
      Amaterasu: 'Theme: light',
    },
    dojo12Title: 'Dojo 12?',
    dojo12Text: 'The coverage matrix lists what still needs work. PRs are welcome.',
  },
  features: {
    badge: 'Embedded terminal',
    title: 'Questions on the left, a real shell on the right.',
    text: 'A ttyd panel built into the UI: the same gesture as the real exam, without juggling windows. The session survives navigating between questions.',
    screenshotAlt:
      'CKAD Dojo web interface: question on the left, embedded terminal on the right, 120-minute timer at the top',
    cards: [
      {
        title: 'Timer alerts',
        text: 'The countdown turns yellow at 15 min, orange at 5, red at 1. Pause it if you split your training in two.',
      },
      {
        title: 'Official v1.35 curriculum',
        text: 'Every question maps to a CNCF domain. Published coverage: 66 to 84% per domain, gaps included.',
      },
      {
        title: 'Light & dark theme',
        text: "Modern web UI, keyboard navigation, custom ASCII banner in the terminal. Yes, it's free.",
      },
    ],
  },
  contributors: {
    eyebrow: 'Credit where due',
    title: 'Contributors, front and center.',
    lede: 'Humans, not bots: automated accounts (dependabot, pre-commit.ci) are not listed here. Five of the eleven dojos come from work shared by the community and adapted to the simulator.',
    items: [
      {
        role: 'Maintainer',
        text: 'Built the simulator, the CLI, the web UI and the automatic scoring. 300 commits.',
      },
      {
        role: '4 dojos adapted',
        text: 'CKAD-exercises, the source of the Tengu, Tanuki, Inari and Ryujin dojos — 80 questions in total.',
      },
      {
        role: '1 dojo adapted',
        text: 'CKAD-Practice-Questions, source of the Kappa of the Rivers dojo — 17 questions, 91 points.',
      },
    ],
    yourNameTitle: 'Your name here',
    yourNameText: 'A dojo, a question, a scoring fix: everything counts. CC BY-NC-SA 4.0 license.',
  },
  faq: {
    eyebrow: 'The questions that keep coming',
    title: 'FAQ, short version.',
    lede: 'Missing one? Open an issue — the answer will end up in the README.',
    items: [
      {
        question: 'Do I need a Kubernetes cluster?',
        answer:
          'Yes, your own: kubeadm, minikube or kind, 1.28+. The dojo provisions namespaces, workloads and Helm releases on it, then cleans everything up at the end. Nothing leaves for the cloud.',
      },
      {
        question: 'How does scoring work?',
        answer:
          'Bash functions query the real state of the cluster: over 400 criteria, question by question. You can score at any point during training, not just at the end.',
      },
      {
        question: 'Do I need to know Python or uv?',
        answer: (
          <>
            No. The <code>ckad-dojo</code> CLI simply wraps the bash scripts — and if you prefer,{' '}
            <code>./scripts/ckad-exam.sh</code> does exactly the same thing without Python.
          </>
        ),
      },
      {
        question: 'Do the questions feel like the real exam?',
        answer: (
          <>
            They follow the CKAD v1.35 curriculum and the real exam's <code>/opt/course/N/</code>{' '}
            paths, mapped locally. They are original exercises, not leaked exam questions.
          </>
        ),
      },
      {
        question: 'What license?',
        answer:
          "CC BY-NC-SA 4.0: free for personal and educational use, modifications under the same license, no commercial use without the author's explicit agreement.",
      },
    ],
  },
  finalCta: {
    kicker: 'Come on, one last dojo',
    title: 'The stress here. The diploma there.',
    lede: 'Open source, free, no credit card required. If a dojo helped you pass the CKAD, leave a star for the next person.',
    ctaStar: 'Leave a star',
    ctaQuickstart: 'Read the quickstart',
  },
  footer: {
    license: 'CC BY-NC-SA 4.0 · educational use',
    createdBy: 'Created by',
    issues: 'Issues',
    contribute: 'Contribute',
    curriculum: 'CKAD curriculum',
  },
};

export type Dictionary = typeof en;
