import { m, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds (capped like the mockup: index * 0.07, max 6). */
  delay?: number;
  className?: string;
}

/**
 * Scroll-reveal wrapper — fade + 26px rise, once, honoring prefers-reduced-motion.
 * Uses `m.div`, so it must render inside App's `LazyMotion` provider.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.64, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
