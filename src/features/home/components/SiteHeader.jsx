import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import Brand from './Brand.jsx'
import ThemeToggle from '../../../components/ui/ThemeToggle.jsx'
import { useTheme } from '../../../app/ThemeProvider.jsx'

const navigation = [
  { label: 'Home', to: '/', end: true },
  { label: 'Tasks', to: '/tasks' },
  { label: 'Learn', to: '/learn' },
]

export default function SiteHeader() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 border-b border-line bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link
          to="/"
          aria-label="Task Manager home"
          className="w-fit rounded-xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus"
          onClick={() => setIsMenuOpen(false)}
        >
          <Brand />
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-muted">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) => `rounded-sm transition-colors hover:text-brand focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus ${isActive ? 'text-brand' : 'text-muted'}`}
                end={item.end}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-xl border border-line bg-surface text-ink transition-colors hover:bg-surface-muted focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus sm:hidden"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          type="button"
        >
          <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="absolute inset-x-4 top-full mt-2 overflow-hidden rounded-xl border border-line bg-surface shadow-panel sm:hidden"
          id="mobile-navigation"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1 p-3 text-sm font-semibold">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) => `rounded-lg px-4 py-3 transition-colors hover:bg-surface-muted hover:text-brand focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus ${isActive ? 'bg-brand-soft text-brand' : 'text-muted'}`}
                end={item.end}
                key={item.to}
                onClick={() => setIsMenuOpen(false)}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex justify-end border-t border-line bg-surface-muted p-3">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>
      )}
    </header>
  )
}
