const contacts = [
  { label: 'Institutional Email', text: 'paulalbert.ostria@cit.edu', href: 'https://outlook.office.com/mail/' },
  { label: 'GitHub', text: 'github.com', href: 'https://github.com/OstriaPaulAlbert' },
  { label: 'Gmail', text: 'gmail.com', href: 'https://mail.google.com/mail/u/0/#inbox' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-2 text-stone-600">Say hi.</p>
      <ul className="mt-8 space-y-3">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <span className="inline-block w-24 text-sm text-stone-500">{contact.label}</span>
            <a href={contact.href} className="font-medium hover:underline">
              {contact.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}