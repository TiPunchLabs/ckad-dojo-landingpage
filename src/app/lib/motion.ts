/** Stagger delay for the i-th card of a grid, matching the mockup's 70ms step. */
export const staggerDelay = (index: number): number => Math.min(index, 6) * 0.07;
