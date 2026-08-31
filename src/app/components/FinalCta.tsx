import { GITHUB_REPO, QUICKSTART_URL } from '@/app/lib/site';
import { useGithubStars } from '@/app/lib/useGithubStars';
import { useI18n } from '@/app/i18n/context';
import { Reveal } from './Reveal';

export function FinalCta() {
  const { t } = useI18n();
  const stars = useGithubStars();

  return (
    <section className="pb-section">
      <div className="mx-auto max-w-page px-6 md:px-8">
        <Reveal>
          <div className="grid justify-items-center gap-6 rounded-xl bg-accent-deep px-6 py-14 text-center text-ground md:px-12 md:py-[72px]">
            <span className="text-[15px] font-semibold text-paper/75">{t.finalCta.kicker}</span>
            <h2 className="w-full min-w-0 max-w-[20ch] text-[38px] font-extrabold leading-none tracking-[-0.035em] md:text-[58px]">
              {t.finalCta.title}
            </h2>
            <p className="w-full min-w-0 max-w-[52ch] text-[17px] leading-[1.55] text-paper/85">
              {t.finalCta.lede}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={GITHUB_REPO}
                className="whitespace-nowrap rounded-lg bg-paper px-7 py-4 font-bold text-accent-deep transition-colors hover:bg-accent-hover hover:text-paper focus-visible:outline-amber"
              >
                {t.finalCta.ctaStar} <span aria-hidden="true">★</span>
                {stars}
              </a>
              <a
                href={QUICKSTART_URL}
                className="whitespace-nowrap rounded-lg border-2 border-paper/50 px-7 py-4 font-semibold text-ground transition-colors hover:border-ground focus-visible:outline-amber"
              >
                {t.finalCta.ctaQuickstart}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
