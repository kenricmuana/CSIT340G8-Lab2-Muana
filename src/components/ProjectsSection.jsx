const projects = [
  {
    year: '2026',
    title: 'About Me in React',
    description: 'My first React project, rebuilt from a plain HTML page.',
    url: 'https://github.com/kenricmuana/CSIT340G8-Lab3-Muana.git',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <p className="mt-2 text-stone-600">Things I have built.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-stone-200 p-6 hover:border-stone-400"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
              {project.year}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{project.description}</p>
            <p className="mt-4 text-sm text-stone-500">{project.stack}</p>
            <a
              href={project.url}
              className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}