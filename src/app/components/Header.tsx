import { GITHUB_REPO } from '@/app/lib/site';
import { useGithubStars } from '@/app/lib/useGithubStars';
import { useI18n } from '@/app/i18n/context';
import type { Lang } from '@/app/i18n/context';

const LANGS: { id: Lang; label: string; name: string }[] = [
  { id: 'en', label: 'EN', name: 'English' },
  { id: 'fr', label: 'FR', name: 'Français' },
];

export function Header() {
  const { lang, setLang, t } = useI18n();
  const stars = useGithubStars();

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-ground py-3.5">
      <div className="mx-auto flex max-w-page items-center gap-6 px-6 md:px-8">
        <a href={GITHUB_REPO} className="flex items-center gap-2.5 text-ink">
          <span
            aria-hidden="true"
            className="grid h-[34px] w-[34px] place-items-center rounded-xl bg-accent font-jp text-[15px] text-ground"
          >
            道
          </span>
          <span className="text-lg font-bold tracking-[-0.02em]">ckad&#8209;dojo</span>
        </a>
        <nav className="ml-auto flex items-center gap-6 text-[15px] font-medium text-ink/65">
          {t.header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden whitespace-nowrap transition-colors hover:text-ink lg:inline"
            >
              {link.label}
            </a>
          ))}
          <div
            role="group"
            aria-label={t.header.langToggle}
            className="flex shrink-0 gap-1 rounded-full bg-ink/5 p-1"
          >
            {LANGS.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLang(l.id)}
                aria-pressed={lang === l.id}
                aria-label={l.name}
                className={`tap-target cursor-pointer rounded-full px-2.5 py-1 text-[12.5px] font-bold transition-colors ${
                  lang === l.id ? 'bg-ink text-ground' : 'text-ink/65 hover:text-ink'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href={GITHUB_REPO}
            className="shrink-0 whitespace-nowrap rounded-full bg-ink px-5 py-[11px] font-semibold text-ground transition-colors hover:bg-accent"
          >
            {t.header.cta} <span aria-hidden="true">★</span>
            {stars}
          </a>
        </nav>
      </div>
    </header>
  );
}
