import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede: ReactNode;
  align?: 'center' | 'left';
  /** 'lg' = standard 50px scale; 'md' = the FAQ's 44px scale. */
  size?: 'lg' | 'md';
  /** Section-specific title measure, e.g. 'max-w-[22ch]'. */
  titleMax?: string;
  /** Section-specific lede measure, e.g. 'max-w-[56ch]'. */
  ledeMax?: string;
}

const TITLE_SIZE = {
  lg: 'text-[34px] leading-[1.02] md:text-[50px]',
  md: 'text-[34px] leading-[1.04] md:text-[44px]',
};

const LEDE_SIZE = {
  lg: 'text-[17px]',
  md: 'text-base',
};

/** Eyebrow + heading + lede block shared by every section, with its reveal animation. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'center',
  size = 'lg',
  titleMax = '',
  ledeMax = '',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`grid gap-3.5 ${
        align === 'center' ? 'justify-items-center text-center' : 'justify-items-start'
      }`}
    >
      <span className="text-[15px] font-semibold text-accent">{eyebrow}</span>
      <h2 className={`font-extrabold tracking-[-0.03em] ${TITLE_SIZE[size]} ${titleMax}`}>
        {title}
      </h2>
      <p className={`leading-[1.6] text-ink/65 ${LEDE_SIZE[size]} ${ledeMax}`}>{lede}</p>
    </Reveal>
  );
}
