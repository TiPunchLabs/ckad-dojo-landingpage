import { GITHUB_REPO, QUICKSTART_URL } from '@/app/lib/site';
import { useGithubStars } from '@/app/lib/useGithubStars';
import { useI18n } from '@/app/i18n/context';
import { Reveal } from './Reveal';

export function FinalCta() {
  const { t } = useI18n();
  const stars = useGithubStars();

  return (
    <section className="bg-ink text-frost">
      <Reveal>
        <div className="mx-auto grid max-w-page justify-items-center gap-5 px-6 py-16 text-center md:px-8 md:py-[76px]">
          <span className="mono-label text-[11.5px] text-sky">{t.finalCta.kicker}</span>
          <h2 className="w-full min-w-0 max-w-[22ch] text-[32px] font-semibold leading-[1.06] tracking-[-0.035em] md:text-[42px]">
            {t.finalCta.title}
          </h2>
          <p className="w-full min-w-0 max-w-[56ch] text-base leading-[1.6] text-paper/70">
            {t.finalCta.lede}
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <a
              href={GITHUB_REPO}
              className="btn bg-frost text-ink transition-colors hover:bg-sky focus-visible:outline-sky"
            >
              {t.finalCta.ctaStar} <span aria-hidden="true">★</span> {stars}
            </a>
            <a
              href={QUICKSTART_URL}
              className="btn border border-paper/30 text-frost transition-colors hover:border-paper focus-visible:outline-sky"
            >
              {t.finalCta.ctaQuickstart}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
