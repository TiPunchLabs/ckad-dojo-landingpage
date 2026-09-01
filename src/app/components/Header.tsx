import { useEffect, useState } from 'react';
import { CKAD_VERSION, GITHUB_REPO } from '@/app/lib/site';
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
    'tap-target shrink-0 whitespace-nowrap rounded-md bg-ink px-3.5 py-2 text-[13.5px] font-medium text-paper transition-colors hover:bg-accent';
  const starCta = (
    <>
      {t.header.cta} <span aria-hidden="true">★</span> {stars}
    </>
  );

  return (
    <>
      <div className="flex items-center justify-center gap-3 border-b border-line bg-section px-6 py-2 font-mono text-xs">
        <span className="whitespace-nowrap text-accent">{new Date().getFullYear()}</span>
        <span className="min-w-0 truncate">{t.header.ticker}</span>
      </div>
      <header className="sticky top-0 z-30 border-b border-line bg-paper py-3">
        <div className="mx-auto flex max-w-page items-center gap-3 px-6 md:px-8 lg:gap-6">
          <a href="#top" className="flex min-w-0 items-center gap-2.5 text-ink">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-[26px] w-[26px] shrink-0 text-accent"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path strokeWidth="1.6" d="M12 2.6 20.2 7.3v9.4L12 21.4 3.8 16.7V7.3Z" />
              <path strokeWidth="2.2" d="M9.8 9.2 13.6 12l-3.8 2.8" />
            </svg>
            <span className="truncate text-[15.5px] font-semibold tracking-[-0.01em]">
              ckad&#8209;dojo
            </span>
            <span className="rounded border border-line-strong px-[7px] py-[3px] font-mono text-[11px] text-muted">
              {CKAD_VERSION}
            </span>
          </a>
          <nav className="ml-auto flex items-center gap-3 lg:gap-6">
            {t.header.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden whitespace-nowrap text-sm text-muted transition-colors hover:text-ink lg:inline"
              >
                {link.label}
              </a>
            ))}
            <div
              role="group"
              aria-label={t.header.langToggle}
              className="flex shrink-0 overflow-hidden rounded-md border border-line-strong"
            >
              {LANGS.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setLang(l.id)}
                  aria-pressed={lang === l.id}
                  aria-label={l.name}
                  className={`tap-target cursor-pointer px-2.5 py-1.5 font-mono text-xs transition-colors ${
                    lang === l.id ? 'bg-ink text-paper' : 'text-muted hover:text-ink'
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
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>
        <div id="mobile-menu" hidden={!menuOpen} className="lg:hidden">
          <nav className="mx-auto grid max-w-page gap-1 px-6 pb-4 pt-3 md:px-8">
            {t.header.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
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
    </>
  );
}
