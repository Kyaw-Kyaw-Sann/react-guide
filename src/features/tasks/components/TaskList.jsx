import EmptyState from './EmptyState.jsx'
import TaskCard from './TaskCard.jsx'

export default function TaskList({ tasks, onAddTask, onToggleTask, onEditTask, onDeleteTask }) {
  return (
    <section className="rounded-xl border border-line" aria-label="Tasks">
      <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
        <h4 className="text-base font-bold text-ink">Tasks</h4>
        <span className="text-xs font-semibold text-muted">
          {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
        </span>
      </div>
      {tasks.length === 0 ? (
        <EmptyState onAddTask={onAddTask} />
      ) : (
        <ul className="divide-y divide-line">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleTask={onToggleTask}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </ul>
      )}
    </section>
  )
}
