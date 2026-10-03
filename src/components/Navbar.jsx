export default function Navbar() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-10 border-b border-stone-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold">Kenric M. Muana</a>
        <div className="flex gap-6 text-sm text-stone-600">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-stone-900">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}