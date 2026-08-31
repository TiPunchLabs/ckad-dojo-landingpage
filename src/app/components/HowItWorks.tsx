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
        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {t.howItWorks.steps.map((step, i) => {
            const style = STEP_STYLES[i];
            if (!style) return null;
            return (
              <Reveal key={style.code} delay={staggerDelay(i)} className="h-full">
                <div
                  className={`grid h-full min-h-[260px] content-start gap-3 rounded-[26px] p-[26px] ${style.cardBg}`}
                >
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-[14px] bg-ground text-[17px] font-extrabold ${style.accent}`}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[21px] font-bold tracking-[-0.02em]">{step.title}</span>
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
