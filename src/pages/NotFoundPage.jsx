import Button from '../components/ui/Button.jsx'

export default function NotFoundPage() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-app-bg px-5 py-20 text-center">
      <div>
        <p className="text-sm font-extrabold tracking-widest text-brand uppercase">404 error</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink">Page not found</h1>
        <p className="mt-4 text-muted">The page you requested does not exist.</p>
        <Button className="mt-7" to="/">Return home</Button>
      </div>
    </section>
  )
}
