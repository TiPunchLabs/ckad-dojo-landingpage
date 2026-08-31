import { useEffect, useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const ctaClasses =
    'shrink-0 whitespace-nowrap rounded-lg bg-ink px-5 py-[11px] font-semibold text-ground transition-colors hover:bg-accent';
  const starCta = (
    <>
      {t.header.cta} <span aria-hidden="true">★</span>
      {stars}
    </>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-ground py-3.5">
      <div className="mx-auto flex max-w-page items-center gap-3 px-6 md:px-8 lg:gap-6">
        <a href="#top" className="flex min-w-0 items-center gap-2.5 text-ink">
          <span
            aria-hidden="true"
            className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-md bg-accent text-ground"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[22px] w-[22px]"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path strokeWidth="1.8" d="M12 2.6 20.2 7.3v9.4L12 21.4 3.8 16.7V7.3Z" />
              <path strokeWidth="2.4" d="M9.8 9.2 13.6 12l-3.8 2.8" />
            </svg>
          </span>
          <span className="truncate text-lg font-bold tracking-[-0.02em]">ckad&#8209;dojo</span>
        </a>
        <nav className="ml-auto flex items-center gap-3 text-[15px] font-medium text-ink/65 lg:gap-6">
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
            className="flex shrink-0 gap-1 rounded-md bg-ink/5 p-1"
          >
            {LANGS.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLang(l.id)}
                aria-pressed={lang === l.id}
                aria-label={l.name}
                className={`tap-target cursor-pointer rounded px-2.5 py-1 text-[12.5px] font-bold transition-colors ${
                  lang === l.id ? 'bg-ink text-ground' : 'text-ink/65 hover:text-ink'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a href={GITHUB_REPO} className={`hidden lg:block ${ctaClasses}`}>
            {starCta}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.header.menuClose : t.header.menuOpen}
            className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-md text-ink transition-colors hover:bg-ink/5 lg:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>
      </div>
      <div id="mobile-menu" hidden={!menuOpen} className="lg:hidden">
        <nav className="mx-auto grid max-w-page gap-1 px-6 pb-4 pt-3 text-[15px] font-medium text-ink/80 md:px-8">
          {t.header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-3 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={GITHUB_REPO}
            onClick={() => setMenuOpen(false)}
            className={`mt-2 text-center ${ctaClasses}`}
          >
            {starCta}
          </a>
        </nav>
      </div>
    </header>
  );
}
