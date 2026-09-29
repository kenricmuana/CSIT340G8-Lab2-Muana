const skillGroups = [
  { title: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'Java'] },
  { title: 'Frameworks', items: ['React', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Tools', items: ['Git', 'VS Code', 'MySQL', 'Figma'] },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      <p className="mt-2 text-stone-600">What I work with.</p>
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-medium text-stone-500">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-300 px-3 py-1 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}