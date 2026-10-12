import Brand from './Brand.jsx'

export default function SiteFooter() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div>
          <a href="#top" aria-label="Back to top" className="inline-flex rounded-xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus">
            <Brand inverted />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            A hands-on React project, built one understandable phase at a time.
          </p>
        </div>
        <a href="#top" className="w-fit text-sm font-semibold text-white/80 underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
