export default function TaskSummary({ total, completed, remaining }) {
  const items = [
    { label: 'Total tasks', value: total, colorClass: 'text-ink' },
    { label: 'Completed', value: completed, colorClass: 'text-brand' },
    { label: 'Remaining', value: remaining, colorClass: 'text-ink' },
  ]

  return (
    <section className="grid gap-3 sm:grid-cols-3" aria-label="Task summary">
      {items.map((item) => (
        <div className="rounded-xl border border-line p-5" key={item.label}>
          <p className="text-sm text-muted">{item.label}</p>
          <p className={`mt-3 text-3xl font-extrabold ${item.colorClass}`}>{item.value}</p>
        </div>
      ))}
    </section>
  )
}
