import { CONTRIBUTING_URL } from '@/app/lib/site';
import { staggerDelay } from '@/app/lib/motion';
import { useI18n } from '@/app/i18n/context';
import type { Dictionary } from '@/app/i18n/en';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

interface Dojo {
  name: keyof Dictionary['dojos']['items'];
  kanji: string;
  stats: string;
  /** Shishin guardians get a badge; the others show their index. */
  shishin?: boolean;
  iconBg: string;
}

const DOJOS: Dojo[] = [
  {
    name: 'Suzaku',
    kanji: '朱雀',
    stats: '21 q · 112 pts',
    shishin: true,
    iconBg: 'bg-pastel-blue',
  },
  {
    name: 'Byakko',
    kanji: '白虎',
    stats: '20 q · 105 pts',
    shishin: true,
    iconBg: 'bg-pastel-gray',
  },
  {
    name: 'Genbu',
    kanji: '玄武',
    stats: '20 q · 105 pts',
    shishin: true,
    iconBg: 'bg-pastel-teal',
  },
  { name: 'Kappa', kanji: '河童', stats: '17 q · 91 pts', iconBg: 'bg-pastel-sand' },
  { name: 'Kirin', kanji: '麒麟', stats: '20 q · 105 pts', iconBg: 'bg-pastel-teal' },
  { name: 'Tengu', kanji: '天狗', stats: '20 q · 100 pts', iconBg: 'bg-pastel-blue' },
  { name: 'Tanuki', kanji: '狸', stats: '20 q · 100 pts', iconBg: 'bg-pastel-sand' },
  { name: 'Inari', kanji: '稲荷', stats: '20 q · 100 pts', iconBg: 'bg-pastel-gray' },
  { name: 'Ryujin', kanji: '龍神', stats: '20 q · 100 pts', iconBg: 'bg-pastel-teal' },
  { name: 'Oni', kanji: '鬼', stats: '20 q · 102 pts', iconBg: 'bg-pastel-gray' },
  { name: 'Amaterasu', kanji: '天照', stats: '20 q · 104 pts', iconBg: 'bg-pastel-sand' },
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DOJOS.map((dojo, i) => {
            const text = t.dojos.items[dojo.name];
            return (
              <Reveal key={dojo.name} delay={staggerDelay(i)} className="h-full">
                <div className="grid h-full content-start gap-2.5 rounded-3xl border border-ink/10 bg-paper p-[22px] transition-colors hover:border-accent/35">
                  <div className="flex items-center justify-between">
                    <span
                      aria-hidden="true"
                      className={`grid h-10 w-10 place-items-center rounded-[14px] font-jp text-sm font-medium ${dojo.iconBg}`}
                    >
                      {dojo.kanji}
                    </span>
                    {dojo.shishin ? (
                      <span className="rounded-full bg-pastel-sand px-[11px] py-[5px] text-xs font-bold text-deep-sand">
                        Shishin
                      </span>
                    ) : (
                      <span aria-hidden="true" className="font-mono text-xs text-ink/35">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    )}
                  </div>
                  <span className="text-[22px] font-bold tracking-[-0.02em]">{dojo.name}</span>
                  <span className="text-[13.5px] leading-[1.45] text-ink/65">{text.subtitle}</span>
                  <span className="font-mono text-[12.5px] text-accent">{dojo.stats}</span>
                  <span className="text-[13.5px] italic leading-[1.5] text-ink/65">
                    {text.quote}
                  </span>
                </div>
              </Reveal>
            );
          })}
          <Reveal delay={staggerDelay(11)} className="h-full">
            <a
              href={CONTRIBUTING_URL}
              className="grid h-full content-center gap-2.5 rounded-3xl border-2 border-dashed border-ink/15 p-[22px] text-ink transition-colors hover:border-accent/40 hover:text-accent"
            >
              <span className="text-[22px] font-bold tracking-[-0.02em]">
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
