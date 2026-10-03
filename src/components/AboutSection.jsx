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
        I am a third year IT student at Cebu Institute of Technology – University, currently taking up web development, databases, and systems analysis. I am passionate about programming and constantly strive to improve my skills and knowledge in the field. My goal is to become a proficient software developer and contribute to the tech industry with innovative solutions.
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