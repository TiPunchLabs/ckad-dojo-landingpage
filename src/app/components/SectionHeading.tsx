import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  /** Two-digit section index rendered before the eyebrow (e.g. '02'). */
  index: string;
  eyebrow: string;
  title: string;
  lede: ReactNode;
  /** Section-specific lede measure, e.g. 'max-w-[56ch]'. */
  ledeMax?: string;
}

/** Numbered mono eyebrow above a semibold heading, per the v5 mockup. */
export function SectionHeading({ index, eyebrow, title, lede, ledeMax = '' }: SectionHeadingProps) {
  return (
    <Reveal className="grid justify-items-start gap-3">
      <span className="mono-label text-[11.5px] text-muted">
        <span className="text-accent">{index}</span> — {eyebrow}
      </span>
      <h2 className="text-[28px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[36px]">
        {title}
      </h2>
      <p className={`text-base leading-[1.6] text-muted ${ledeMax}`}>{lede}</p>
    </Reveal>
  );
}
