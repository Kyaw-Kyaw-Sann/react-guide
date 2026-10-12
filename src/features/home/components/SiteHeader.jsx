import Brand from './Brand.jsx'

const navigation = [
  { label: 'Features', href: '#features' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'FAQ', href: '#faq' },
]

export default function SiteHeader() {
  return (
    <header className="border-b border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:px-8">
        <a href="#top" aria-label="Task Manager home" className="w-fit rounded-xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus">
          <Brand />
        </a>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-muted">
          {navigation.map((item) => (
            <a
              className="rounded-sm transition-colors hover:text-brand focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
