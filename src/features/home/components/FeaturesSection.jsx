import SectionTitle from '../../../components/ui/SectionTitle.jsx'

const features = [
  {
    number: '01',
    title: 'Capture what matters',
    description: 'Add a task with a title, category, priority, and optional due date, then edit its details whenever plans change.',
  },
  {
    number: '02',
    title: 'Find your focus',
    description: 'Use search, filters, and sorting to turn a long list into the work that needs attention now.',
  },
  {
    number: '03',
    title: 'See your progress',
    description: 'The dashboard makes completed and remaining work easy to understand at a glance.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-8 bg-surface py-20 md:py-24" aria-labelledby="features-title">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="The plan"
          title="Useful features, learned in context."
          description="Each feature teaches a React concept through a task you can recognize and rebuild yourself."
          headingId="features-title"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article className="rounded-panel border border-line bg-surface p-7 shadow-panel" key={feature.number}>
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft text-sm font-extrabold text-brand">
                {feature.number}
              </span>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">{feature.title}</h3>
              <p className="mt-3 leading-7 text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
