import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import DataScience from './components/DataScience'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DataScience />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
