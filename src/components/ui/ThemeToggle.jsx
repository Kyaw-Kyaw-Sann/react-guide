export default function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === 'dark'}
      className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-line bg-surface px-3 text-sm font-bold text-ink transition-colors hover:bg-surface-muted focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus"
      onClick={onToggle}
      type="button"
    >
      <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
      {nextTheme === 'dark' ? 'Dark mode' : 'Light mode'}
    </button>
  )
}
