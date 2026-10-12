import { useId } from 'react'

export default function Input({ label, hint, error, id, className = '', ...props }) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const messageId = `${inputId}-message`

  return (
    <div className={`grid w-full gap-2 ${className}`.trim()}>
      <label className="text-sm font-bold text-ink" htmlFor={inputId}>
        {label}
      </label>
      <input
        className={`min-h-11 w-full rounded-xl border bg-surface px-4 text-ink placeholder:text-soft focus-visible:border-brand focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus ${error ? 'border-danger' : 'border-line'}`}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error || hint ? messageId : undefined}
        {...props}
      />
      {(error || hint) && (
        <p
          className={`m-0 text-xs ${error ? 'text-danger' : 'text-muted'}`}
          id={messageId}
        >
          {error || hint}
        </p>
      )}
    </div>
  )
}

