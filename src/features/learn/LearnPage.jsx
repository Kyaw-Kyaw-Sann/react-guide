import SectionTitle from '../../components/ui/SectionTitle.jsx'

const phases = [
  { number: '01', title: 'Foundation', concept: 'Components, props, composition, and Tailwind CSS' },
  { number: '02', title: 'Website shell', concept: 'Responsive sections, navigation, and data-driven rendering' },
  { number: '03', title: 'Dashboard UI', concept: 'Lists, keys, derived values, and conditional rendering' },
  { number: '04', title: 'Task management', concept: 'State, controlled forms, validation, and immutable updates' },
  { number: '05', title: 'Find your tasks', concept: 'Search, combined filters, sorting, and derived state' },
  { number: '06', title: 'Browser persistence', concept: 'Effects, lazy state initialization, JSON, and localStorage' },
  { number: '07', title: 'Theme switching', concept: 'Context, a custom hook, global state, and semantic colors' },
  { number: '08', title: 'Client-side routing', concept: 'Routes, links, shared layouts, active navigation, and 404 pages' },
]

export default function LearnPage() {
  return (
    <section className="bg-app-bg py-20 md:py-24" aria-labelledby="learn-page-title">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Learning roadmap"
          title="Eight phases, one practical project."
          description="Use this page as a map when you rebuild the project without AI. Start with the user problem, identify the state owner, and follow data from events back to the UI."
          headingId="learn-page-title"
        />

        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {phases.map((phase) => (
            <li className="rounded-panel border border-line bg-surface p-6 shadow-panel" key={phase.number}>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-sm font-extrabold text-brand">
                  {phase.number}
                </span>
                <div>
                  <h2 className="text-lg font-bold text-ink">{phase.title}</h2>
                  <p className="mt-2 leading-7 text-muted">{phase.concept}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-panel border border-brand/20 bg-brand-soft p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-ink">A repeatable way to solve each feature</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">
            Describe the user action, decide which component owns the data, implement the smallest state change,
            derive what the screen needs, and test the empty, normal, and error cases.
          </p>
        </div>
      </div>
    </section>
  )
}
