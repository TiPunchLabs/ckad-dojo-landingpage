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
