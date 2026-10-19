import { useState } from 'react'

export default function About() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="wrap about-grid">
        {/* Left Column: Bio & Links */}
        <div className="about-l">
          <header>
            <p className="sec-tag">
              <span>01</span>
              <span aria-hidden="true">—</span>
              <span>About me</span>
            </p>
            <h2 id="about-heading" className="sec-h">
              <span>Hi, I'm <span className="accent">Gaourav.</span></span>
            </h2>
          </header>

          <p className="about-p">
            A software engineer enthusiast pursuing my Master of Computer Applications (MCA)
            at Pune University and certified as a Red Hat System Administrator (RHCSA).
            Driven by a love for resilient cloud infrastructure, distributed microservices,
            and AI-assisted developer workflows.
          </p>
          <p className="about-p" style={{ marginTop: '16px' }}>
            From building an AI DevOps Orchestrator for Kubernetes cluster management to architecting
            full-stack agronomic telemetry platforms with GroqAI, I specialize in automating complex systems
            and shipping clean, enterprise-grade software.
          </p>

          <div className="about-btns">
            <a href="/resume.pdf" className="btn btn-primary" download="Gaourav-Patil-Resume.pdf">
              Resume
            </a>
            <a
              href="https://github.com/GaouravPatil"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/gaourav-patil-885695272/"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Center Column: 3D Swinging Hanging ID Lanyard Card */}
        <div className="about-c">
          <div className="idc-zone">
            <div className="idc-pend">
              {/* Lanyard Strap */}
              <div className="idc-strap" aria-hidden="true">
                <div className="idc-strap-track">
                  <span>
                    <b>GAOURAV PATIL <i>·</i> SOFTWARE ENGINEER ENTHUSIAST <i>·</i></b>
                    <b>GAOURAV PATIL <i>·</i> SOFTWARE ENGINEER ENTHUSIAST <i>·</i></b>
                    <b>GAOURAV PATIL <i>·</i> SOFTWARE ENGINEER ENTHUSIAST <i>·</i></b>
                    <b>GAOURAV PATIL <i>·</i> SOFTWARE ENGINEER ENTHUSIAST <i>·</i></b>
                  </span>
                  <span>
                    <b>GAOURAV PATIL <i>·</i> SOFTWARE ENGINEER ENTHUSIAST <i>·</i></b>
                    <b>GAOURAV PATIL <i>·</i> SOFTWARE ENGINEER ENTHUSIAST <i>·</i></b>
                    <b>GAOURAV PATIL <i>·</i> SOFTWARE ENGINEER ENTHUSIAST <i>·</i></b>
                    <b>GAOURAV PATIL <i>·</i> SOFTWARE ENGINEER ENTHUSIAST <i>·</i></b>
                  </span>
                </div>
              </div>

              {/* Metal Badge Clip */}
              <div className="idc-clip" aria-hidden="true">
                <span />
              </div>

              {/* 3D Flippable Card */}
              <div
                className={`idc-card ${flipped ? 'is-flipped' : ''}`}
                role="button"
                tabIndex={0}
                aria-pressed={flipped}
                aria-label="Click to flip Gaourav Patil ID Card"
                onClick={() => setFlipped(!flipped)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setFlipped(!flipped)
                  }
                }}
              >
                <div className="idc-inner">
                  {/* Front Face */}
                  <div className="idc-face idc-front">
                    <div className="idc-band">
                      <span className="idc-slot" />
                      <span className="mono">ENGINEER PASS</span>
                    </div>

                    <div className="idc-photo">
                      <div className="idc-halo" />
                      <div className="idc-ring">
                        <img
                          src="/portrait.jpg"
                          alt="Gaourav Patil"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <p className="idc-name">Gaourav Patil</p>
                    <p className="idc-role">Software Engineer Enthusiast</p>
                    <p className="idc-co">Cloud &amp; Intelligent Systems</p>
                    <p className="idc-loc mono">Pune, India</p>

                    <div className="idc-foot">
                      <svg
                        viewBox="0 0 200 38"
                        className="idc-bar"
                        role="img"
                        aria-label="Decorative barcode"
                        preserveAspectRatio="none"
                      >
                        <rect x="0" y="0" width="2" height="38" fill="#0d0d0d" />
                        <rect x="5" y="0" width="3" height="38" fill="#0d0d0d" />
                        <rect x="12" y="0" width="2" height="38" fill="#0d0d0d" />
                        <rect x="18" y="0" width="4" height="38" fill="#0d0d0d" />
                        <rect x="26" y="0" width="1" height="38" fill="#0d0d0d" />
                        <rect x="30" y="0" width="3" height="38" fill="#0d0d0d" />
                        <rect x="36" y="0" width="2" height="38" fill="#0d0d0d" />
                        <rect x="42" y="0" width="5" height="38" fill="#0d0d0d" />
                        <rect x="51" y="0" width="2" height="38" fill="#0d0d0d" />
                        <rect x="57" y="0" width="3" height="38" fill="#0d0d0d" />
                        <rect x="64" y="0" width="1" height="38" fill="#0d0d0d" />
                        <rect x="69" y="0" width="4" height="38" fill="#0d0d0d" />
                        <rect x="76" y="0" width="2" height="38" fill="#0d0d0d" />
                        <rect x="82" y="0" width="3" height="38" fill="#0d0d0d" />
                        <rect x="89" y="0" width="2" height="38" fill="#0d0d0d" />
                        <rect x="94" y="0" width="5" height="38" fill="#0d0d0d" />
                        <rect x="103" y="0" width="2" height="38" fill="#0d0d0d" />
                        <rect x="109" y="0" width="3" height="38" fill="#0d0d0d" />
                        <rect x="116" y="0" width="1" height="38" fill="#0d0d0d" />
                        <rect x="121" y="0" width="4" height="38" fill="#0d0d0d" />
                        <rect x="129" y="0" width="2" height="38" fill="#0d0d0d" />
                        <rect x="135" y="0" width="4" height="38" fill="#0d0d0d" />
                        <rect x="143" y="0" width="2" height="38" fill="#0d0d0d" />
                        <rect x="149" y="0" width="3" height="38" fill="#0d0d0d" />
                        <rect x="156" y="0" width="5" height="38" fill="#0d0d0d" />
                        <rect x="165" y="0" width="2" height="38" fill="#0d0d0d" />
                        <rect x="171" y="0" width="3" height="38" fill="#0d0d0d" />
                        <rect x="178" y="0" width="2" height="38" fill="#0d0d0d" />
                        <rect x="184" y="0" width="4" height="38" fill="#0d0d0d" />
                        <rect x="192" y="0" width="2" height="38" fill="#0d0d0d" />
                      </svg>
                      <span className="idc-holo" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="idc-face idc-back">
                    <p className="idc-bk-tag mono">Profile Details</p>
                    <ul className="idc-bk-list">
                      <li>Software Engineer Enthusiast &amp; Cloud Specialist</li>
                      <li>RHCSA Certified Red Hat System Administrator</li>
                      <li>Master of Computer Application (MCA), Pune</li>
                      <li>Projects: AI DevOps Orchestrator &amp; AnnaData</li>
                      <li>Stack: Python, Go, React, Kubernetes, AWS, Docker</li>
                    </ul>
                    <p className="idc-sign">Gaourav Patil</p>
                    <p className="idc-found mono">
                      If found, say hello · patilgaourav304@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Facts & Quote */}
        <div className="about-r">
          <p className="about-fh mono">Quick facts</p>
          <div className="about-facts">
            <div className="about-row">
              <dt>Location</dt>
              <dd>Pune, India</dd>
            </div>
            <div className="about-row">
              <dt>Degree</dt>
              <dd>Master of Computer Applications (MCA)</dd>
            </div>
            <div className="about-row">
              <dt>Cert</dt>
              <dd>Red Hat Certified System Administrator</dd>
            </div>
            <div className="about-row">
              <dt>Interests</dt>
              <dd>Cloud, K8s, AI Orchestration, Microservices</dd>
            </div>
            <div className="about-row">
              <dt>Status</dt>
              <dd>Open for SDE &amp; Cloud Roles</dd>
            </div>
          </div>

          <div className="about-q">
            <blockquote>
              "Bridging reliable software engineering with cloud-native intelligence."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
