import { staggerDelay } from '@/app/lib/motion';
import { useI18n } from '@/app/i18n/context';
import { Reveal } from './Reveal';

export function Features() {
  const { t } = useI18n();

  return (
    <section className="pb-section">
      <div className="mx-auto grid max-w-page gap-2.5 px-6 sm:gap-6 md:px-8">
        <Reveal>
          <div className="grid items-center gap-5 overflow-hidden card rounded-xl p-4 sm:gap-8 sm:p-6 md:p-[34px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
            <div className="grid justify-items-start gap-2.5 sm:gap-3.5">
              <span className="rounded-md bg-pastel-gray px-3.5 py-[7px] text-[13px] font-bold text-deep-navy">
                {t.features.badge}
              </span>
              <h3 className="text-[24px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[28px] md:text-[34px]">
                {t.features.title}
              </h3>
              <p className="text-[15.5px] leading-[1.6] text-ink/70">{t.features.text}</p>
            </div>
            <img
              src="ckad-dojo.png"
              alt={t.features.screenshotAlt}
              width={1905}
              height={929}
              loading="lazy"
              className="card w-full"
            />
          </div>
        </Reveal>

        <div className="grid gap-2.5 sm:gap-4 md:grid-cols-3 lg:gap-[18px]">
          {t.features.cards.map((feature, i) => (
            <Reveal key={feature.title} delay={staggerDelay(i)} className="h-full">
              <div className="grid h-full content-start gap-1.5 card p-4 sm:gap-2.5 sm:p-[26px]">
                <span className="text-[17px] font-bold tracking-[-0.02em] sm:text-xl">
                  {feature.title}
                </span>
                <span className="text-[14.5px] leading-[1.55] text-ink/70">{feature.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
