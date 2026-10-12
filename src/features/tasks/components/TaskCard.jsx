const priorityClasses = {
  High: 'bg-danger-soft text-danger',
  Medium: 'bg-brand-soft text-brand',
  Low: 'bg-surface-muted text-muted',
}

export default function TaskCard({ task, onToggleTask, onEditTask, onDeleteTask }) {
  return (
    <li className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <button
          aria-label={task.completed ? `Mark ${task.title} as pending` : `Mark ${task.title} as complete`}
          aria-pressed={task.completed}
          className={`grid size-6 shrink-0 cursor-pointer place-items-center rounded-md border text-xs focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus ${task.completed ? 'border-brand bg-brand text-on-brand' : 'border-line bg-surface'}`}
          onClick={() => onToggleTask(task.id)}
          type="button"
        >
          {task.completed ? '✓' : ''}
        </button>
        <div className="min-w-0">
          <p className={`text-sm font-semibold break-words ${task.completed ? 'text-muted line-through' : 'text-ink'}`}>
            <span className="sr-only">{task.completed ? 'Completed: ' : 'Pending: '}</span>
            {task.title}
          </p>
          <p className="mt-1 text-xs text-muted">{task.category}</p>
          {task.dueDate && <p className="mt-1 text-xs text-muted">Due {task.dueDate}</p>}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 pl-9 sm:pl-0">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityClasses[task.priority] ?? priorityClasses.Low}`}>
          {task.priority}
        </span>
        <button
          className="cursor-pointer rounded-md px-2 py-1 text-xs font-semibold text-brand hover:bg-brand-soft focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus"
          onClick={() => onEditTask(task)}
          type="button"
        >
          Edit
        </button>
        <button
          className="cursor-pointer rounded-md px-2 py-1 text-xs font-semibold text-danger hover:bg-danger-soft focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus"
          onClick={() => onDeleteTask(task)}
          type="button"
        >
          Delete
        </button>
      </div>
    </li>
  )
}
