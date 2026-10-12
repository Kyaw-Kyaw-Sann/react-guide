import Button from '../../../components/ui/Button.jsx'

export default function EmptyState({ onAddTask }) {
  return (
    <div className="grid justify-items-center px-5 py-10 text-center">
      <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      </span>
      <p className="mt-4 font-bold text-ink">No tasks yet</p>
      <p className="mt-2 max-w-xs text-sm leading-6 text-muted">Tasks you add will appear here.</p>
      <Button className="mt-5" onClick={onAddTask}>Add your first task</Button>
    </div>
  )
}
