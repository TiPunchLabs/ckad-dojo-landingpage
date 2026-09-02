/** External-link arrow, drawn on the shared 24px grid. */
export function ArrowUpRight({ className = 'h-2.5 w-2.5' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

/** Shuffle arrows, same 24px grid. */
export function Shuffle({ className = 'h-3 w-3' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 3h5v5M21 3l-7.5 7.5M4 4l5 5M16 21h5v-5M21 21l-7.5-7.5M4 20l5-5" />
    </svg>
  );
}
