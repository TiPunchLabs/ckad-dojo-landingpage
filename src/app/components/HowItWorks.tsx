import { staggerDelay } from '@/app/lib/motion';
import { useI18n } from '@/app/i18n/context';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

/** Per-step structural data; the matching text lives in the dictionaries. */
const STEP_STYLES = [
  { code: 'ckad-dojo exam start', cardBg: 'bg-pastel-blue', accent: 'text-deep-blue' },
  {
    code: 'kubectl · helm · ttyd',
    cardBg: 'bg-pastel-gray',
    accent: 'text-deep-slate',
    codeAccent: 'text-deep-navy',
  },
  { code: 'ckad-dojo score', cardBg: 'bg-pastel-teal', accent: 'text-deep-teal' },
  { code: 'ckad-dojo cleanup', cardBg: 'bg-pastel-sand', accent: 'text-deep-sand' },
] as const;

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section
      id="comment"
      className="mb-section scroll-mt-24 border-y border-ink/10 bg-section py-section"
    >
      <div className="mx-auto grid max-w-page gap-11 px-6 md:px-8">
        <SectionHeading
          eyebrow={t.howItWorks.eyebrow}
          title={t.howItWorks.title}
          lede={t.howItWorks.lede}
          titleMax="max-w-[22ch]"
          ledeMax="max-w-[56ch]"
        />
        <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-[18px]">
          {t.howItWorks.steps.map((step, i) => {
            const style = STEP_STYLES[i];
            if (!style) return null;
            return (
              <Reveal key={style.code} delay={staggerDelay(i)} className="h-full">
                <div
                  className={`grid h-full content-start gap-2 rounded-lg p-4 sm:gap-3 sm:p-[26px] lg:min-h-[260px] ${style.cardBg}`}
                >
                  <div className="flex items-center gap-3 sm:contents">
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-md bg-ground text-[15px] font-extrabold sm:h-10 sm:w-10 sm:text-[17px] ${style.accent}`}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[17px] font-bold tracking-[-0.02em] sm:text-[21px]">
                      {step.title}
                    </span>
                  </div>
                  <span className="text-[14.5px] leading-[1.55] text-ink/70">{step.text}</span>
                  <code
                    className={`mt-auto text-xs ${'codeAccent' in style ? style.codeAccent : style.accent}`}
                  >
                    {style.code}
                  </code>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
