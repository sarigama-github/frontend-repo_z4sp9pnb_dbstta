import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About / О нас' },
  { href: '#services', label: 'Услуги' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#clients', label: 'Клиенты' },
  { href: '#contact', label: 'Контакты' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <img src="https://keysiksagency.com/wp-content/uploads/elementor/thumbs/keysiksagency_logo_white-rd30qadbp2vm3cwm8g8zt1qm0nfm87s9sxc0aqlerk.webp" alt="KEYSIKS" className="h-8 w-auto" />
          <span className="text-white/80 text-sm tracking-[0.2em] group-hover:text-white transition">AGENCY</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-lime-400 after:transition-[width] hover:after:w-full">
              {l.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm">
          <div className="absolute right-4 top-4">
            <button onClick={() => setOpen(false)} className="p-2 text-white" aria-label="Close menu"><X /></button>
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-2xl text-white hover:text-lime-400 transition">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
