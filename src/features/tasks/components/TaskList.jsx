import EmptyState from './EmptyState.jsx'
import TaskCard from './TaskCard.jsx'
import Button from '../../../components/ui/Button.jsx'

export default function TaskList({ tasks, totalTaskCount, onAddTask, onClearFilters, onToggleTask, onEditTask, onDeleteTask }) {
  return (
    <section className="rounded-xl border border-line" aria-label="Tasks">
      <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
        <h4 className="text-base font-bold text-ink">Tasks</h4>
        <span className="text-xs font-semibold text-muted">
          Showing {tasks.length} of {totalTaskCount} tasks
        </span>
      </div>
      {totalTaskCount === 0 ? (
        <EmptyState onAddTask={onAddTask} />
      ) : tasks.length === 0 ? (
        <div className="grid justify-items-center px-5 py-10 text-center">
          <p className="font-bold text-ink">No matching tasks</p>
          <p className="mt-2 text-sm text-muted">Try another search or clear the filters.</p>
          <Button className="mt-5" onClick={onClearFilters} variant="secondary">Clear filters</Button>
        </div>
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
