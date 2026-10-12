import SectionTitle from '../../../components/ui/SectionTitle.jsx'

const questions = [
  {
    question: 'Can I manage tasks in this version?',
    answer: 'Yes. You can add, edit, complete, and delete tasks in the dashboard. Changes reset when the page refreshes.',
  },
  {
    question: 'What React concepts will this project cover?',
    answer: 'The roadmap covers components, props, state, forms, effects, custom hooks, Context, and routing through practical features.',
  },
  {
    question: 'Will I need a backend to follow along?',
    answer: 'No. This project runs in the browser without a backend.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-8 bg-surface py-20 md:py-24" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="A few things to know."
          description="This project grows in small phases so you can understand each decision as it is made."
          headingId="faq-title"
        />
        <div className="grid content-start gap-3">
          {questions.map((item) => (
            <details className="group rounded-xl border border-line p-5 open:bg-app-bg" key={item.question}>
              <summary className="cursor-pointer font-bold text-ink focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus">
                {item.question}
              </summary>
              <p className="mt-4 leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
