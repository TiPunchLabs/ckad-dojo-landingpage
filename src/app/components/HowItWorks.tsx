import { staggerDelay } from '@/app/lib/motion';
import { useI18n } from '@/app/i18n/context';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

/** Per-step command; the matching text lives in the dictionaries. */
const STEP_CODES = [
  'ckad-dojo exam start',
  'kubectl · helm · ttyd',
  'ckad-dojo score',
  'ckad-dojo cleanup',
] as const;

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="comment" className="scroll-mt-24 border-b border-line bg-ground">
      <div className="mx-auto grid max-w-page gap-8 px-6 py-14 md:px-8">
        <SectionHeading
          index="01"
          eyebrow={t.howItWorks.eyebrow}
          title={t.howItWorks.title}
          lede={t.howItWorks.lede}
          ledeMax="max-w-[62ch]"
        />
        <div className="grid boxed bg-paper sm:grid-cols-2 lg:grid-cols-4">
          {t.howItWorks.steps.map((step, i) => {
            const code = STEP_CODES[i];
            if (!code) return null;
            return (
              <Reveal key={code} delay={staggerDelay(i)} className="h-full">
                <div className="grid h-full content-start gap-2.5 border-b border-line p-[22px] sm:border-b-0 sm:border-r lg:min-h-[226px]">
                  <span className="font-mono text-[11.5px] text-accent">0{i + 1}</span>
                  <span className="text-[17px] font-semibold tracking-[-0.02em]">{step.title}</span>
                  <span className="text-sm leading-[1.55] text-muted">{step.text}</span>
                  <code className="mt-auto text-[11.5px] text-muted">{code}</code>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
