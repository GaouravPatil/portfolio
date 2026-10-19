import { CloudCog } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero-ghost" aria-hidden="true">
        GAOURAV
      </div>

      <div className="hero-mark" aria-hidden="true">
        <CloudCog size={24} strokeWidth={1.6} />
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="mono hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Software Engineer Enthusiast <span aria-hidden="true">·</span> Cloud &amp; AI DevOps
          </p>

          <h1 className="hero-h1">
            <span className="rv-mask">
              <span>Software Engineer</span>
            </span>
            <span className="rv-mask">
              <span>
                <span className="accent">Enthusiast.</span>
              </span>
            </span>
          </h1>

          <p className="hero-desc">
            RHCSA-certified engineer driven by full-stack systems, cloud-native architecture,
            and AI-driven automation. Building scalable microservices, resilient Kubernetes environments,
            and intelligent self-healing pipelines.
          </p>

          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              Explore work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's talk
            </a>
            <a
              href="/resume.pdf"
              className="btn btn-secondary"
              download="Gaourav-Patil-Resume.pdf"
            >
              Résumé ↓
            </a>
          </div>
        </div>

        <div className="hero-meta">
          <p className="mono">Available</p>
          <p className="mono">Pune, India</p>
        </div>
      </div>
    </section>
  )
}
