import { AUTHOR_URL, CONTRIBUTING_URL, CURRICULUM_URL, ISSUES_URL } from '@/app/lib/site';
import { useI18n } from '@/app/i18n/context';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="pb-12">
      <div className="mx-auto flex max-w-page flex-wrap items-center gap-6 px-6 text-sm text-ink/65 md:px-8">
        <span className="font-semibold text-ink">TiPunchLabs / ckad-dojo</span>
        <span>{t.footer.license}</span>
        <span>
          {t.footer.createdBy}{' '}
          <a
            href={AUTHOR_URL}
            className="font-medium text-ink underline decoration-ink/25 underline-offset-[3px] transition-colors hover:text-accent hover:decoration-accent/50"
          >
            xgueret
          </a>
        </span>
        <span className="ml-auto flex gap-5">
          <a href={ISSUES_URL} className="text-ink/65 transition-colors hover:text-ink">
            {t.footer.issues}
          </a>
          <a href={CONTRIBUTING_URL} className="text-ink/65 transition-colors hover:text-ink">
            {t.footer.contribute}
          </a>
          <a href={CURRICULUM_URL} className="text-ink/65 transition-colors hover:text-ink">
            {t.footer.curriculum}
          </a>
        </span>
      </div>
    </footer>
  );
}
