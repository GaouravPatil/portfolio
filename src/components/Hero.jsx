import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  const fullText = 'Gaourav Patil'
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    let index = 0
    setDisplayedText('')
    setIsTypingComplete(false)

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTypingComplete(true)
        clearInterval(interval)
      }
    }, 110)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-status-pill">
              <span className="status-dot" />
              Available for Cloud & AI DevOps Roles
            </div>

            <h1 className="hero-title">
              Hi, I'm{' '}
              <span className="gradient-text typewriter-wrap">
                {displayedText}
                <span className={`typewriter-cursor ${isTypingComplete ? 'blink-subtle' : ''}`}>|</span>
              </span>
            </h1>

            <p className="hero-subtitle">
              RHCSA-certified Cloud & DevOps Engineer specializing in AWS, Kubernetes,
              and AI-driven self-healing pipelines. Automating infrastructure and bridging CI/CD with intelligence.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-main">
                Explore Projects <ArrowRight size={18} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Download size={18} /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-card-preview"
          >
            <div className="hero-code-header">
              <div className="code-dots">
                <span className="code-dot red" />
                <span className="code-dot yellow" />
                <span className="code-dot green" />
              </div>
              <span style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--text-light)' }}>
                gaourav@ap-south-1
              </span>
            </div>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.8 }}>
              <div><span style={{ color: 'var(--primary)', fontWeight: 600 }}>$</span> rhcsa status --verify</div>
              <div style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>✔ RHCSA Certified Administrator</div>
              <div style={{ marginTop: 8 }}><span style={{ color: 'var(--primary)', fontWeight: 600 }}>$</span> kubectl get workloads</div>
              <div style={{ color: 'var(--text-main)', fontWeight: 500 }}>
                • Nexus AI Engine (Groq / Mistral / OpenAI)<br />
                • Guardrail CI/CD Self-Healing Agent<br />
                • Kubernetes AI Orchestrator Layer
              </div>
            </div>

            <div className="hero-stats-row">
              <div className="stat-box">
                <div className="stat-val">3+</div>
                <div className="stat-lbl">AI & K8s Projects</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">RHCSA</div>
                <div className="stat-lbl">Red Hat Certified</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">AWS</div>
                <div className="stat-lbl">Cloud Intern</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
