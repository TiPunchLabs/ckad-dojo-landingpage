import { AUTHOR_URL, CONTRIBUTING_URL, CURRICULUM_URL, ISSUES_URL } from '@/app/lib/site';
import { useI18n } from '@/app/i18n/context';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-page flex-wrap items-center gap-x-6 gap-y-2 px-6 py-6 text-[13px] text-muted md:px-8">
        <span className="font-semibold text-ink">TiPunchLabs / ckad-dojo</span>
        <span>{t.footer.license}</span>
        <span>
          {t.footer.createdBy}{' '}
          <a
            href={AUTHOR_URL}
            className="text-ink underline decoration-line-strong underline-offset-[3px] transition-colors hover:text-accent"
          >
            xgueret
          </a>
        </span>
        <span className="ml-auto flex gap-[18px]">
          <a href={ISSUES_URL} className="transition-colors hover:text-ink">
            {t.footer.issues}
          </a>
          <a href={CONTRIBUTING_URL} className="transition-colors hover:text-ink">
            {t.footer.contribute}
          </a>
          <a href={CURRICULUM_URL} className="transition-colors hover:text-ink">
            {t.footer.curriculum}
          </a>
        </span>
      </div>
    </footer>
  );
}
