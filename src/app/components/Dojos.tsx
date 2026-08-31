import { CONTRIBUTING_URL } from '@/app/lib/site';
import { staggerDelay } from '@/app/lib/motion';
import { useI18n } from '@/app/i18n/context';
import type { Dictionary } from '@/app/i18n/en';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

interface Dojo {
  name: keyof Dictionary['dojos']['items'];
  stats: string;
}

const DOJOS: Dojo[] = [
  { name: 'Suzaku', stats: '21 q · 112 pts' },
  { name: 'Byakko', stats: '20 q · 105 pts' },
  { name: 'Genbu', stats: '20 q · 105 pts' },
  { name: 'Kappa', stats: '17 q · 91 pts' },
  { name: 'Kirin', stats: '20 q · 105 pts' },
  { name: 'Tengu', stats: '20 q · 100 pts' },
  { name: 'Tanuki', stats: '20 q · 100 pts' },
  { name: 'Inari', stats: '20 q · 100 pts' },
  { name: 'Ryujin', stats: '20 q · 100 pts' },
  { name: 'Oni', stats: '20 q · 102 pts' },
  { name: 'Amaterasu', stats: '20 q · 104 pts' },
];

export function Dojos() {
  const { t } = useI18n();

  return (
    <section id="dojos" className="scroll-mt-24 pb-section">
      <div className="mx-auto grid max-w-page gap-10 px-6 md:px-8">
        <SectionHeading
          eyebrow={t.dojos.eyebrow}
          title={t.dojos.title}
          lede={t.dojos.lede}
          titleMax="max-w-[24ch]"
          ledeMax="max-w-[60ch]"
        />
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
          {DOJOS.map((dojo, i) => (
            <Reveal key={dojo.name} delay={staggerDelay(i)} className="h-full">
              <div className="grid h-full content-start gap-0.5 card p-4 sm:gap-2 sm:p-[22px]">
                <span className="text-[17px] font-bold tracking-[-0.02em] sm:text-[22px]">
                  {dojo.name}
                </span>
                <span className="hidden text-[13.5px] leading-[1.45] text-ink/65 sm:block">
                  {t.dojos.items[dojo.name]}
                </span>
                <span className="font-mono text-xs text-accent sm:text-[12.5px]">{dojo.stats}</span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={staggerDelay(11)} className="h-full">
            <a
              href={CONTRIBUTING_URL}
              className="grid h-full content-center gap-1.5 card-dashed p-4 text-ink transition-colors hover:border-accent/40 hover:text-accent sm:gap-2.5 sm:p-[22px]"
            >
              <span className="text-[17px] font-bold tracking-[-0.02em] sm:text-[22px]">
                {t.dojos.dojo12Title}
              </span>
              <span className="text-[13.5px] leading-[1.5] text-ink/65">{t.dojos.dojo12Text}</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
