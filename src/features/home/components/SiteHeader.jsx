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

  return (
    <header className="border-b border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:px-8">
        <Link to="/" aria-label="Task Manager home" className="w-fit rounded-xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus">
          <Brand />
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
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
      </div>
    </header>
  )
}
