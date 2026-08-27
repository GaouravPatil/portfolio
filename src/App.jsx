import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import OpenSource from './components/OpenSource'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {mobileOpen && (
        <div className="mobile-drawer">
          <button className="close-drawer-btn" onClick={() => setMobileOpen(false)}>
            ✕
          </button>
          {[
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Open Source', href: '#opensource' },
            { label: 'Projects', href: '#projects' },
            { label: 'Education', href: '#education' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
      <main>
        <Hero />
        <About />
        <Skills />
        <OpenSource />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
