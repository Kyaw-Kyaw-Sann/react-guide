export default function Brand({ inverted = false }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-xl bg-brand text-white shadow-sm" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 12 4 4L19 6" />
        </svg>
      </span>
      <span className={`text-lg font-extrabold tracking-tight ${inverted ? 'text-white' : 'text-ink'}`}>
        Task Manager
      </span>
    </span>
  )
}
