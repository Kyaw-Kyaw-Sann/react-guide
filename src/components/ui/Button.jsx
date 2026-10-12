import { Link } from 'react-router'

const baseClasses =
  'inline-flex min-h-11 cursor-pointer items-center justify-center rounded-xl border px-5 text-sm font-bold transition-[background-color,border-color,transform] duration-150 hover:enabled:-translate-y-px focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus disabled:cursor-not-allowed disabled:opacity-55'

const variantClasses = {
  primary: 'border-transparent bg-brand text-on-brand hover:enabled:bg-brand-hover',
  secondary: 'border-line bg-surface text-ink hover:enabled:bg-surface-muted',
}

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  href,
  to,
  className = '',
  ...props
}) {
  const classes = `${baseClasses} ${variantClasses[variant] ?? variantClasses.primary} ${className}`.trim()

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

