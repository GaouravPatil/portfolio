import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'patilgaourav304@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact" className="section ct" aria-labelledby="contact-heading">
      <div className="wrap">
        <p className="sec-tag">
          <span>06</span>
          <span aria-hidden="true">—</span>
          <span>Contact</span>
        </p>

        <h2 id="contact-heading" className="ct-h" aria-label="Let's build something together.">
          <span className="ct-line">
            <span className="ct-word">
              <span className="ct-l">L</span>
              <span className="ct-l">e</span>
              <span className="ct-l">t</span>
              <span className="ct-l">'</span>
              <span className="ct-l">s</span>
            </span>{' '}
            <span className="ct-word">
              <span className="ct-l">b</span>
              <span className="ct-l">u</span>
              <span className="ct-l">i</span>
              <span className="ct-l">l</span>
              <span className="ct-l">d</span>
            </span>
          </span>
          <span className="ct-line">
            <span className="ct-word">
              <span className="ct-l">s</span>
              <span className="ct-l">o</span>
              <span className="ct-l">m</span>
              <span className="ct-l">e</span>
              <span className="ct-l">t</span>
              <span className="ct-l">h</span>
              <span className="ct-l">i</span>
              <span className="ct-l">n</span>
              <span className="ct-l">g</span>
            </span>{' '}
            <span className="ct-word">
              <span className="ct-l accent">t</span>
              <span className="ct-l accent">o</span>
              <span className="ct-l accent">g</span>
              <span className="ct-l accent">e</span>
              <span className="ct-l accent">t</span>
              <span className="ct-l accent">h</span>
              <span className="ct-l accent">e</span>
              <span className="ct-l accent">r</span>
              <span className="ct-l accent">.</span>
            </span>
          </span>
        </h2>

        {/* Email & Copy Button */}
        <div className="ct-mail">
          <a href={`mailto:${email}`} className="ct-email">
            {email}
          </a>
          <button
            type="button"
            className="ct-copy"
            onClick={handleCopy}
            aria-label="Copy email address"
          >
            {copied ? '✓ Copied to clipboard' : 'Copy email'}
          </button>
        </div>

        {/* Social / Direct Channels */}
        <div className="ct-row">
          <ul className="ct-links" aria-label="Social connections">
            <li>
              <a
                href="https://github.com/GaouravPatil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mono">01 / Git</span>
                <span className="ct-lt">github.com/GaouravPatil</span>
                <span className="ct-ar" aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a
                href="linkedin.com/in/gaourav-patil-885695272/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mono">02 / In</span>
                <span className="ct-lt">linkedin.com/in/gaouravpatil</span>
                <span className="ct-ar" aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href="tel:+919834892067">
                <span className="mono">03 / Tel</span>
                <span className="ct-lt">+91 9834892067</span>
                <span className="ct-ar" aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <span className="mono">04 / Loc</span>
                <span className="ct-lt">Pune, Maharashtra, India</span>
                <span className="ct-ar" aria-hidden="true">↓</span>
              </a>
            </li>
          </ul>

          {/* Rotating Circular Seal Badge */}
          <svg className="ct-badge" viewBox="0 0 160 160" aria-hidden="true">
            <g className="ct-spin">
              <path
                id="curve"
                d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                fill="none"
              />
              <text fill="var(--ink)" fontSize="11" letterSpacing="0.22em" fontWeight="600" fontFamily="var(--f-mono)">
                <textPath href="#curve">
                  · GAOURAV PATIL · SOFTWARE ENGINEER ENTHUSIAST
                </textPath>
              </text>
            </g>
            <circle cx="80" cy="80" r="18" fill="var(--ink)" />
            <text x="80" y="84" fill="#fff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="var(--f-sans)">
              GP
            </text>
          </svg>
        </div>
      </div>

      {/* Footer bar */}
      <footer className="ct-foot" style={{ marginTop: 'clamp(56px, 8vh, 96px)' }}>
        <div className="wrap">
          <p>© {new Date().getFullYear()} Gaourav Patil. All rights reserved.</p>
          <p className="mono">Software Engineer Enthusiast · Pune, India</p>
          <button type="button" onClick={scrollToTop}>
            Back to top ↑
          </button>
        </div>
      </footer>
    </section>
  )
}
