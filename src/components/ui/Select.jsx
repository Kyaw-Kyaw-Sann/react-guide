import { useId } from 'react'

export default function Select({ label, options, id, className = '', ...props }) {
  const generatedId = useId()
  const selectId = id ?? generatedId

  return (
    <div className={`grid w-full gap-2 ${className}`.trim()}>
      <label className="text-sm font-bold text-ink" htmlFor={selectId}>
        {label}
      </label>
      <select
        className="min-h-11 w-full rounded-xl border border-line bg-surface px-4 text-ink focus-visible:border-brand focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus"
        id={selectId}
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
