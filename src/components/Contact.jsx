import { motion } from 'framer-motion'
import { Mail, Phone, Send, MessageSquare } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-box"
        >
          <span className="section-badge" style={{ margin: '0 auto 16px' }}>
            <MessageSquare size={14} /> Get In Touch
          </span>

          <h2 className="section-title">Let's Connect & Build Together</h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
            Whether you are looking to hire a Cloud & DevOps Engineer, discuss AI orchestration, or start a technical collaboration, I'm always reachable.
          </p>

          <div className="contact-channels">
            <a href="mailto:patilgaourav304@gmail.com" className="contact-pill-card">
              <div className="contact-pill-icon">
                <Mail size={18} />
              </div>
              <div className="contact-pill-content">
                <div className="contact-pill-label">Email</div>
                <div className="contact-pill-value">patilgaourav304@gmail.com</div>
              </div>
            </a>

            <a href="tel:+919834892067" className="contact-pill-card">
              <div className="contact-pill-icon">
                <Phone size={18} />
              </div>
              <div className="contact-pill-content">
                <div className="contact-pill-label">Phone</div>
                <div className="contact-pill-value">+91 98348 92067</div>
              </div>
            </a>

            <a
              href="https://github.com/GaouravPatil"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-card"
            >
              <div className="contact-pill-icon">
                <FiGithub size={18} />
              </div>
              <div className="contact-pill-content">
                <div className="contact-pill-label">GitHub</div>
                <div className="contact-pill-value">@GaouravPatil</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/gaourav-patil-885695272"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-card"
            >
              <div className="contact-pill-icon">
                <FiLinkedin size={18} />
              </div>
              <div className="contact-pill-content">
                <div className="contact-pill-label">LinkedIn</div>
                <div className="contact-pill-value">Gaourav Patil</div>
              </div>
            </a>
          </div>

          <a href="mailto:patilgaourav304@gmail.com" className="btn-main">
            Send an Email <Send size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
