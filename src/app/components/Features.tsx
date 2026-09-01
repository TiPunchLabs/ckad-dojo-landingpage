import { staggerDelay } from '@/app/lib/motion';
import { useI18n } from '@/app/i18n/context';
import { Reveal } from './Reveal';

export function Features() {
  const { t } = useI18n();

  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-page gap-5 px-6 py-14 md:px-8">
        <Reveal>
          <div className="grid boxed lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div className="grid content-center justify-items-start gap-3 border-b border-line p-8 lg:border-b-0 lg:border-r">
              <span className="mono-label text-[11.5px] text-muted">
                <span className="text-accent">03</span> — {t.features.badge}
              </span>
              <h3 className="text-[24px] font-semibold leading-[1.12] tracking-[-0.03em] md:text-[28px]">
                {t.features.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-muted">{t.features.text}</p>
            </div>
            <div className="bg-ground">
              <img
                src="ckad-dojo.png"
                alt={t.features.screenshotAlt}
                width={1905}
                height={929}
                loading="lazy"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="grid boxed md:grid-cols-3">
          {t.features.cards.map((feature, i) => (
            <Reveal key={feature.title} delay={staggerDelay(i)} className="h-full">
              <div className="grid h-full content-start gap-2 border-b border-line p-6 md:border-b-0 md:border-r">
                <span className="text-[16.5px] font-semibold tracking-[-0.02em]">
                  {feature.title}
                </span>
                <span className="text-sm leading-[1.55] text-muted">{feature.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
