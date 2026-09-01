import { useState } from 'react';
import { staggerDelay } from '@/app/lib/motion';
import { useI18n } from '@/app/i18n/context';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 border-b border-line bg-paper">
      <div className="mx-auto grid max-w-page gap-8 px-6 py-14 md:px-8">
        <SectionHeading
          index="05"
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          lede={t.faq.lede}
          ledeMax="max-w-[62ch]"
        />
        <div className="grid border-t border-line">
          {t.faq.items.map((item, i) => (
            <Reveal key={i} delay={staggerDelay(i)}>
              <div className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full cursor-pointer items-center gap-4 px-1 py-[18px] text-left text-base font-medium text-ink focus-visible:[outline-offset:-3px]"
                >
                  <span className="flex-1">{item.question}</span>
                  <span aria-hidden="true" className="font-mono text-[15px] text-accent">
                    {open === i ? '−' : '+'}
                  </span>
                </button>
                {open === i && (
                  <div
                    id={`faq-panel-${i}`}
                    className="max-w-[74ch] px-1 pb-5 text-[14.5px] leading-[1.65] text-muted"
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
