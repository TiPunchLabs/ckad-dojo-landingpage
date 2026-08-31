import { useState } from 'react';
import { staggerDelay } from '@/app/lib/motion';
import { useI18n } from '@/app/i18n/context';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 pb-section">
      <div className="mx-auto grid max-w-page items-start gap-10 px-6 md:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <SectionHeading
          align="left"
          size="md"
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          lede={t.faq.lede}
        />
        <div className="grid gap-3">
          {t.faq.items.map((item, i) => (
            <Reveal key={i} delay={staggerDelay(i)}>
              <div className="overflow-hidden card">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full cursor-pointer items-center gap-4 px-6 py-5 text-left text-[17px] font-semibold text-ink focus-visible:[outline-offset:-3px]"
                >
                  <span className="flex-1">{item.question}</span>
                  <span aria-hidden="true" className="text-xl text-accent">
                    {open === i ? '−' : '+'}
                  </span>
                </button>
                {open === i && (
                  <div
                    id={`faq-panel-${i}`}
                    className="px-6 pb-[22px] text-[15px] leading-[1.65] text-ink/70"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
