import { useState, useEffect } from 'react'

export default function Navbar({ mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [scrollProgress, setScrollProgress] = useState(0)

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Honours', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = totalHeight > 0 ? totalScroll / totalHeight : 0
      setScrollProgress(progress)

      setScrolled(totalScroll > 50)

      // Active section calculation
      const sections = ['about', 'skills', 'work', 'certifications', 'achievements', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="nav-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>

      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#hero" className="nav-brand" aria-label="Gaourav Patil" title="Back to top">
          <span className="nav-mark" aria-hidden="true">
            <span>GP</span>
          </span>
          <span className="nav-name">Gaourav Patil</span>
        </a>

        <nav className="nav-pill" aria-label="Primary">
          <ul>
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={isActive ? 'is-active' : ''}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="nav-menu-btn"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      {/* Mobile Menu Drawer with circular clip-path transition */}
      <div
        id="mobile-menu"
        className={`menu ${mobileOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!mobileOpen}
      >
        <div className="menu-top">
          <span className="mono menu-eyebrow">Navigate</span>
          <button
            type="button"
            className="nav-menu-btn"
            onClick={() => setMobileOpen(false)}
          >
            Close
          </button>
        </div>

        <ul className="menu-list">
          {navItems.map((item, idx) => (
            <li key={item.id} style={{ '--i': idx }}>
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                <span className="mono">0{idx + 1}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="menu-foot mono">patilgaourav304@gmail.com</p>
      </div>
    </>
  )
}
