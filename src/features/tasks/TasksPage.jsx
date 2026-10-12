import SectionTitle from '../../components/ui/SectionTitle.jsx'
import TaskDashboard from './components/TaskDashboard.jsx'

export default function TasksPage() {
  return (
    <section className="bg-app-bg py-20 md:py-24" aria-labelledby="tasks-page-title">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Your workspace"
          title="Put your plans into action."
          description="Add, edit, complete, and delete tasks in your own workspace."
          headingId="tasks-page-title"
        />

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_20px_60px_rgba(24,36,58,0.08)]">
          <div className="flex items-center gap-2 border-b border-line bg-surface-muted px-5 py-4" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#f59e0b]" />
            <span className="size-2.5 rounded-full bg-[#a5b4fc]" />
            <span className="size-2.5 rounded-full bg-[#86efac]" />
            <span className="ml-3 text-xs font-medium text-muted">Task Manager / Dashboard</span>
          </div>
          <div className="p-5 sm:p-8">
            <TaskDashboard />
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          Your tasks are saved in this browser and remain after you refresh the page.
        </p>
      </div>
    </section>
  )
}
