export default function AboutSection() {
  const facts = [
    { label: 'Course', value: 'BS Information Technology' },
    { label: 'Year level', value: 'Third year' },
    { label: 'School', value: 'CIT-U' },
    { label: 'Based in', value: 'Cebu City' },
  ]

  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <h2 className="text-2xl font-semibold tracking-tight">About</h2>
      <p className="mt-2 text-stone-600">A little about who I am.</p>
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up in Camotes Island and moved to Cebu City for Shs and then College. Actually I picked IT because my
        wanted it, this is the program that they want me to take. And until now im still slow at programming 
        but i am trying my best to master it.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-sm text-stone-500">{fact.label}</dt>
            <dd className="mt-1 font-medium">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}