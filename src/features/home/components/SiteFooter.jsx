import { Link } from 'react-router'
import Brand from './Brand.jsx'

export default function SiteFooter() {
  return (
    <footer className="bg-footer py-10 text-footer-text">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div>
          <Link to="/" aria-label="Task Manager home" className="inline-flex rounded-xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus">
            <Brand inverted />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-footer-text/70">
            A hands-on React project, built one understandable phase at a time.
          </p>
        </div>
        <a href="#top" className="w-fit text-sm font-semibold text-footer-text/80 underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
