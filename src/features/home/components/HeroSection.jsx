import Button from '../../../components/ui/Button.jsx'
import { sampleTasks } from '../../tasks/data/sampleTasks.js'
import { getTaskSummary } from '../../tasks/utils/getTaskSummary.js'

export default function HeroSection() {
  const summary = getTaskSummary(sampleTasks)

  return (
    <section className="overflow-hidden bg-app-bg" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:gap-16 md:py-28 lg:px-8">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-brand-soft px-4 py-2 text-xs font-extrabold tracking-widest text-brand uppercase">
            A practical React learning project
          </p>
          <h1 id="hero-title" className="max-w-xl text-5xl leading-[1.07] font-extrabold tracking-[-0.055em] text-ink sm:text-6xl">
            Make progress feel simple.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Practice React with a task manager you can use. The example on the right
            shows the kind of work you can organize in your own dashboard.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#dashboard">Open the dashboard</Button>
            <Button href="#features" variant="secondary">See the plan</Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -top-7 -right-7 size-40 rounded-full bg-brand-soft blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-8 -left-8 size-40 rounded-full bg-[#dbeafe] blur-2xl" aria-hidden="true" />
          <div className="relative rounded-[1.75rem] border border-line bg-surface p-5 shadow-[0_24px_70px_rgba(24,36,58,0.12)] sm:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
              <div>
                <p className="text-xs font-bold tracking-widest text-brand uppercase">A clear start</p>
                <h2 className="mt-2 text-xl font-extrabold tracking-tight">A quick glance</h2>
              </div>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">Sample view</span>
            </div>
            <ul className="mt-5 grid gap-3">
              {sampleTasks.map((task) => (
                <li className="flex items-center gap-3 rounded-xl border border-line p-4" key={task.id}>
                  <span
                    className={`grid size-6 shrink-0 place-items-center rounded-md border text-sm font-bold ${task.completed ? 'border-brand bg-brand text-white' : 'border-line bg-surface'}`}
                    aria-hidden="true"
                  >
                    {task.completed ? '✓' : ''}
                  </span>
                  <span className={`min-w-0 break-words ${task.completed ? 'text-muted line-through' : 'font-semibold text-ink'}`}>
                    {task.title}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-brand-soft p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-ink">
                <span>Example progress</span>
                <span>{summary.completed} of {summary.total}</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white" aria-hidden="true">
                <div className="h-full rounded-full bg-brand" style={{ width: `${summary.progressPercentage}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
