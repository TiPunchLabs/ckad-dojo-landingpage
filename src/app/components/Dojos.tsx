import { useState } from 'react';
import { CONTRIBUTING_URL } from '@/app/lib/site';
import { staggerDelay } from '@/app/lib/motion';
import { useI18n } from '@/app/i18n/context';
import type { Dictionary } from '@/app/i18n/en';
import { ArrowUpRight, Shuffle } from './icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

interface Dojo {
  name: keyof Dictionary['dojos']['items'];
  questions: number;
  points: number;
  /** GitHub handle credited in the product README, when the dojo has one. */
  credit?: string;
}

/** Sorted by points, leaderboard-style; ties keep the exam-number order. */
const DOJOS: Dojo[] = [
  { name: 'Musashi', questions: 20, points: 122, credit: 'Sai7Teja' },
  { name: 'Bishamonten', questions: 20, points: 120, credit: 'Sai7Teja' },
  { name: 'Hachiman', questions: 20, points: 119, credit: 'Sai7Teja' },
  { name: 'Izanagi', questions: 20, points: 118, credit: 'Sai7Teja' },
  { name: 'Benzaiten', questions: 20, points: 114, credit: 'Sai7Teja' },
  { name: 'Suzaku', questions: 21, points: 112 },
  { name: 'Raijin', questions: 20, points: 112, credit: 'Sai7Teja' },
  { name: 'Fujin', questions: 20, points: 110, credit: 'Sai7Teja' },
  { name: 'Susanoo', questions: 20, points: 110, credit: 'Sai7Teja' },
  { name: 'Tsukuyomi', questions: 20, points: 108, credit: 'Sai7Teja' },
  { name: 'Byakko', questions: 20, points: 105 },
  { name: 'Genbu', questions: 20, points: 105 },
  { name: 'Kirin', questions: 20, points: 105 },
  { name: 'Amaterasu', questions: 20, points: 104 },
  { name: 'Oni', questions: 20, points: 102 },
  { name: 'Tengu', questions: 20, points: 100, credit: 'dgkanatsios' },
  { name: 'Tanuki', questions: 20, points: 100, credit: 'dgkanatsios' },
  { name: 'Inari', questions: 20, points: 100, credit: 'dgkanatsios' },
  { name: 'Ryujin', questions: 20, points: 100, credit: 'dgkanatsios' },
  { name: 'Kappa', questions: 17, points: 91, credit: 'aravind4799' },
];

const MAX_POINTS = Math.max(...DOJOS.map((d) => d.points));
const RANKED = DOJOS.map((dojo, i) => ({ ...dojo, rank: i + 1 }));
const SAMPLE_SIZE = 10;
const TINTS = ['bg-tint-1', 'bg-tint-2', 'bg-tint-3', 'bg-tint-4', 'bg-tint-5'] as const;

/** Blue shade by roster-rank tier: leader dark, tail pale. */
function barColor(rank: number): string {
  return TINTS[Math.min(Math.floor((rank - 1) / 4), TINTS.length - 1)] ?? 'bg-tint-3';
}

/** Random sample of the roster, re-sorted by rank so the board stays a leaderboard. */
function sampleRoster(): typeof RANKED {
  return [...RANKED]
    .sort(() => Math.random() - 0.5)
    .slice(0, SAMPLE_SIZE)
    .sort((a, b) => a.rank - b.rank);
}

export function Dojos() {
  const { t } = useI18n();
  const [sample, setSample] = useState(sampleRoster);

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
            <span className="hidden w-44 sm:block">{t.dojos.themeHeader}</span>
            <span className="flex-1">Points</span>
            <span className="hidden w-28 lg:block">{t.dojos.creditHeader}</span>
            <span className="hidden text-right sm:block">Q · PTS</span>
            <span className="text-right sm:hidden">PTS</span>
          </div>
          {sample.map((dojo, i) => (
            <Reveal key={dojo.name} delay={staggerDelay(i)}>
              <div className="flex items-center gap-3 border-b border-line-faint px-4 py-3 sm:px-[18px]">
                <span aria-hidden="true" className="w-8 font-mono text-xs text-muted">
                  {String(dojo.rank).padStart(2, '0')}
                </span>
                <span className="w-24 text-[15.5px] font-semibold tracking-[-0.01em] sm:w-36">
                  {dojo.name}
                </span>
                <span className="hidden w-44 text-[13.5px] text-muted sm:block">
                  {t.dojos.items[dojo.name]}
                </span>
                <span className="flex-1">
                  <span
                    aria-hidden="true"
                    className="block h-1.5 max-w-[420px] overflow-hidden rounded-[3px] bg-line-faint"
                  >
                    <span
                      className={`block h-full rounded-[3px] ${barColor(dojo.rank)}`}
                      style={{ width: `${Math.round((dojo.points / MAX_POINTS) * 100)}%` }}
                    ></span>
                  </span>
                </span>
                <span className="hidden w-28 font-mono text-xs lg:block">
                  {dojo.credit ? (
                    <a
                      href={`https://github.com/${dojo.credit}`}
                      className="text-muted transition-colors hover:text-accent"
                    >
                      @{dojo.credit}
                    </a>
                  ) : (
                    <span aria-hidden="true" className="text-muted">
                      —
                    </span>
                  )}
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
          <div className="flex items-center justify-between gap-3 border-b border-line-faint px-4 py-2.5 sm:px-[18px]">
            <span className="font-mono text-xs text-muted">
              {SAMPLE_SIZE} / {DOJOS.length} dojos
            </span>
            <button
              type="button"
              onClick={() => setSample(sampleRoster())}
              className="tap-target mono-label flex cursor-pointer items-center gap-2 rounded-md border border-line-strong px-3 py-1.5 text-[11px] text-ink transition-colors hover:border-ink"
            >
              {t.dojos.shuffle}
              <Shuffle />
            </button>
          </div>
          <Reveal delay={staggerDelay(11)}>
            <a
              href={CONTRIBUTING_URL}
              className="flex items-center gap-3 bg-ground px-4 py-3.5 text-ink transition-colors hover:text-accent sm:px-[18px]"
            >
              <span aria-hidden="true" className="w-8 font-mono text-xs text-accent">
                21
              </span>
              <span className="flex-1 text-[14.5px] italic text-muted">
                {t.dojos.dojoNextTitle} {t.dojos.dojoNextText}
              </span>
              <span className="mono-label flex shrink-0 items-center gap-2 rounded-md border border-line-strong px-3 py-1.5 text-[11px]">
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
