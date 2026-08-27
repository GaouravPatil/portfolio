import { Mail } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16 }}>
          <a
            href="https://github.com/GaouravPatil"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)' }}
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/gaourav-patil-885695272"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)' }}
          >
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:patilgaourav304@gmail.com" style={{ color: 'var(--text-muted)' }}>
            <Mail size={18} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Gaourav Patil. Built with React, Framer Motion & Lucide.</p>
      </div>
    </footer>
  )
}
