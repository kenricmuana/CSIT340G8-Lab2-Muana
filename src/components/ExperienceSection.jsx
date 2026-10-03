import TimelineItem from './TimelineItem'

const experiences = [
  {
    period: '2024 – Present',
    title: 'BS Information Technology',
    place: 'Cebu Institute of Technology – University',
    description: 'Taking up web development, databases, and systems analysis.',
  },
  {
    period: '2022 – 2024',
    title: 'Senior High School, STEM Strand',
    place: 'Cebu Institute of Technology - University',
  },
  {
    period: '2018 – 2022',
    title: 'Junior High School',
    place: 'Cebu Institute of Technology - University',
    description: 'Developed foundational skills in mathematics, science, and social studies.',
  },
  {
    period: '2015 - 2018',
    title: 'Elementary School',
    place: 'Cebu Institute of Technology - University',
    description: 'Learned basic literacy, numeracy, and social skills.',
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <p className="mt-2 text-stone-600">Where I have learned and worked.</p>
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        {experiences.map((item) => (
          <TimelineItem
            key={item.title}
            period={item.period}
            title={item.title}
            place={item.place}
            description={item.description}
          />
        ))}
      </ol>
    </section>
  )
}