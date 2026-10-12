export default function SectionTitle({ eyebrow, title, description, headingId }) {
  return (
    <div className="grid max-w-2xl gap-3">
      {eyebrow && (
        <p className="m-0 text-xs font-extrabold tracking-[0.12em] text-brand uppercase">
          {eyebrow}
        </p>
      )}
      <h2
        className="m-0 text-[clamp(1.6rem,4vw,2.2rem)] leading-[1.16] tracking-[-0.035em] text-ink"
        id={headingId}
      >
        {title}
      </h2>
      {description && <p className="m-0 leading-7 text-muted">{description}</p>}
    </div>
  )
}

