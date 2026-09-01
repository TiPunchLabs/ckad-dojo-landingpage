import { CONTRIBUTING_URL } from '@/app/lib/site';
import { staggerDelay } from '@/app/lib/motion';
import { useI18n } from '@/app/i18n/context';
import type { Dictionary } from '@/app/i18n/en';
import { ArrowUpRight } from './icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

interface Dojo {
  name: keyof Dictionary['dojos']['items'];
  questions: number;
  points: number;
}

/** Sorted by points, leaderboard-style; ties keep the exam-number order. */
const DOJOS: Dojo[] = [
  { name: 'Suzaku', questions: 21, points: 112 },
  { name: 'Byakko', questions: 20, points: 105 },
  { name: 'Genbu', questions: 20, points: 105 },
  { name: 'Kirin', questions: 20, points: 105 },
  { name: 'Amaterasu', questions: 20, points: 104 },
  { name: 'Oni', questions: 20, points: 102 },
  { name: 'Tengu', questions: 20, points: 100 },
  { name: 'Tanuki', questions: 20, points: 100 },
  { name: 'Inari', questions: 20, points: 100 },
  { name: 'Ryujin', questions: 20, points: 100 },
  { name: 'Kappa', questions: 17, points: 91 },
];

const MAX_POINTS = Math.max(...DOJOS.map((d) => d.points));
const TINTS = ['bg-tint-1', 'bg-tint-2', 'bg-tint-3', 'bg-tint-4', 'bg-tint-5'] as const;

/** Blue shade by rank tier: leader dark, tail pale. */
function barColor(rank: number): string {
  return TINTS[Math.min(Math.floor(rank / 3), TINTS.length - 1)] ?? 'bg-tint-3';
}

export function Dojos() {
  const { t } = useI18n();

  return (
    <section id="dojos" className="scroll-mt-24 border-b border-line bg-paper">
      <div className="mx-auto grid max-w-page gap-7 px-6 py-14 md:px-8">
        <SectionHeading
          index="02"
          eyebrow={t.dojos.eyebrow}
          title={t.dojos.title}
          lede={t.dojos.lede}
          ledeMax="max-w-[70ch]"
        />
        <div className="boxed">
          <div className="mono-label flex items-center gap-3 border-b border-line bg-ground px-4 py-2.5 text-[11px] text-muted sm:px-[18px]">
            <span className="w-8">#</span>
            <span className="w-24 sm:w-36">Dojo</span>
            <span className="hidden w-56 sm:block">{t.dojos.themeHeader}</span>
            <span className="flex-1">Points</span>
            <span className="hidden text-right sm:block">Q · PTS</span>
            <span className="text-right sm:hidden">PTS</span>
          </div>
          {DOJOS.map((dojo, i) => (
            <Reveal key={dojo.name} delay={staggerDelay(i)}>
              <div className="flex items-center gap-3 border-b border-line-faint px-4 py-3 sm:px-[18px]">
                <span aria-hidden="true" className="w-8 font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="w-24 text-[15.5px] font-semibold tracking-[-0.01em] sm:w-36">
                  {dojo.name}
                </span>
                <span className="hidden w-56 text-[13.5px] text-muted sm:block">
                  {t.dojos.items[dojo.name]}
                </span>
                <span className="flex-1">
                  <span
                    aria-hidden="true"
                    className="block h-1.5 max-w-[420px] overflow-hidden rounded-[3px] bg-line-faint"
                  >
                    <span
                      className={`block h-full rounded-[3px] ${barColor(i)}`}
                      style={{ width: `${Math.round((dojo.points / MAX_POINTS) * 100)}%` }}
                    ></span>
                  </span>
                </span>
                <span className="whitespace-nowrap text-right font-mono text-[13px]">
                  <span className="hidden sm:inline">
                    {dojo.questions} q · {dojo.points} pts
                  </span>
                  <span className="sm:hidden">{dojo.points}</span>
                </span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={staggerDelay(11)}>
            <a
              href={CONTRIBUTING_URL}
              className="flex items-center gap-3 bg-ground px-4 py-3.5 text-ink transition-colors hover:text-accent sm:px-[18px]"
            >
              <span aria-hidden="true" className="w-8 font-mono text-xs text-accent">
                12
              </span>
              <span className="flex-1 text-[14.5px] italic text-muted">
                {t.dojos.dojo12Title} {t.dojos.dojo12Text}
              </span>
              <span className="flex shrink-0 items-center gap-2 rounded-md border border-line-strong px-3 py-1.5 mono-label text-[11px]">
                {t.dojos.contribute}
                <ArrowUpRight />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
