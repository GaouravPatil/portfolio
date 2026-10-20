import { useState } from 'react'

const PROJECTS_DATA = [
  {
    idx: '01',
    num: '01 / 04',
    spineTitle: 'Guardrail',
    kick: 'AI Agentic Kubernetes',
    title: 'Guardrail',
    desc: 'An enterprise AI-assisted DevOps orchestration platform designed for automated Kubernetes cluster resource provisioning, policy validation, and self-healing CI/CD operations through REST APIs.',
    features: [
      'Automated Kubernetes resource managers & centralized execution engine',
      'Enterprise JWT authentication & dependency injection architecture',
      'Prometheus & Grafana observability pipeline integration',
      'Scalable microservices prepared for autonomous GitOps deployment',
    ],
    tech: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'Terraform', 'PostgreSQL', 'Grafana'],
    githubUrl: 'https://github.com/GaouravPatil/Guardrail',
    uiType: 'k8s',
  },
  {
    idx: '02',
    num: '02 / 03',
    spineTitle: 'AnnaData Agronomic Platform',
    kick: 'Full-Stack & Agrarian AI',
    title: 'AnnaData Intelligence',
    desc: 'A robust agrarian telemetry platform powered by GrokAI, Weather APIs, and Location services to deliver actionable crop advisories, market telemetry, and subsidy procurement pathways.',
    features: [
      'Real-time Weather & Geo-location API pipeline orchestration',
      'GrokAI integration for localized predictive agronomic intelligence',
      'Asynchronous Express & Python middleware data processing',
      'High-contrast, accessible UI tailored for rapid rural telemetry',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'GrokAI'],
    githubUrl: 'https://github.com/GaouravPatil/annadata',
    uiType: 'telemetry',
  },
  {
    idx: '03',
    num: '03 / 03',
    spineTitle: 'Nexus AI Engine',
    kick: 'Intelligent Automation Layer',
    title: 'Nexus AI Engine',
    desc: 'A modular AI execution engine connecting multi-model inference (Groq, Mistral, OpenAI) to software workflows with self-healing build remediation and automated infrastructure triage.',
    features: [
      'Multi-model LLM abstraction layer for high-throughput inference',
      'Self-healing pipeline agent that diagnoses & repairs build errors',
      'Event-driven worker architecture with Redis caching',
      'Automated audit logs and structured JSON telemetry outputs',
    ],
    tech: ['Python', 'Docker', 'Groq / Mistral', 'Redis', 'GitHub Actions', 'Linux'],
    githubUrl: 'https://github.com/GaouravPatil/Nexus',
    uiType: 'pipeline',
  },
  {
    idx: '04',
    num: '04 / 04',
    spineTitle: 'Mnemo',
    kick: 'Memory As a Service [MaaS]',
    title: 'Mnemo',
    desc: 'Mnemo is a cloud-native memory layer that allows AI applications to store and retrieve contextual information across multiple sessions and deployments. It provides a simple REST API for storing, retrieving, and deleting key-value pairs, with built-in encryption and access control.',
    features: [
      'Model-agnostic memory layer that turns chat history into compact, deduplicated facts',
      'Replaces stale values (e.g. 30s → 45s timeout) while keeping history queryable',
      'Ranks by relevance, recency, type priority, and embedding ',
      '~60–65% token reduction, 45/45 critical facts recalled (author’s own samples)',
    ],
    tech: ['Python', 'Docker', 'ArrayList', 'Redis', 'RedisLabs'],
    githubUrl: 'https://github.com/GaouravPatil/Mnemo',
    uiType: 'memory',
  },
]

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="wrap">
        <header>
          <p className="sec-tag">
            <span>03</span>
            <span aria-hidden="true">—</span>
            <span>Work</span>
          </p>
          <h2 id="work-heading" className="sec-h">
            <span>Things I've <span className="accent">built.</span></span>
          </h2>
        </header>

        {/* Expandable Accordion Panels */}
        <div className="wk-row">
          {PROJECTS_DATA.map((proj, idx) => {
            const isOpen = openIndex === idx

            return (
              <div
                key={proj.idx}
                className={`wk-panel ${isOpen ? 'is-open' : ''}`}
                onClick={() => !isOpen && setOpenIndex(idx)}
                role="region"
                aria-label={proj.title}
              >
                {/* Collapsed Spine */}
                <div
                  className="wk-spine"
                  role="button"
                  tabIndex={isOpen ? -1 : 0}
                  onClick={() => setOpenIndex(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setOpenIndex(idx)
                    }
                  }}
                >
                  <span className="wk-sn mono">{proj.num}</span>
                  <span className="wk-st">{proj.spineTitle}</span>
                  <span className="wk-plus" aria-hidden="true">+</span>
                </div>

                {/* Expanded Content */}
                <div className="wk-bw">
                  <div className="wk-body">
                    {/* Left Column: Details */}
                    <div className="wk-left">
                      <span className="wk-kick mono">{proj.kick}</span>
                      <h3 className="wk-title">{proj.title}</h3>
                      <p className="wk-desc">{proj.desc}</p>

                      <ul className="wk-feat">
                        {proj.features.map((feat, fIdx) => (
                          <li key={fIdx}>{feat}</li>
                        ))}
                      </ul>

                      <ul className="wk-tech" aria-label="Technologies used">
                        {proj.tech.map((t, tIdx) => (
                          <li key={tIdx} className="mono">{t}</li>
                        ))}
                      </ul>

                      <div className="wk-links-row">
                        <a
                          href={proj.githubUrl}
                          className="btn btn-primary btn-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Repository ↗
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Mini UI Visualization */}
                    <div className="wk-right">
                      <div className="wk-vis">
                        {proj.uiType === 'k8s' && (
                          <div className="mu-arch">
                            <div className="mu-head">
                              <span className="mu-dot green" />
                              <span className="mu-dot" />
                              <span className="mu-dot" />
                              <span className="mu-title-text">k8s-cluster-active</span>
                            </div>
                            <div className="mu-box-row">
                              <div className="mu-box">
                                <span className="mono" style={{ color: '#10b981' }}>● 12 Pods</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>FastAPI Microservices</div>
                              </div>
                              <div className="mu-box">
                                <span className="mono" style={{ color: '#0284c7' }}>● Ingress</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>TLS / Load Balanced</div>
                              </div>
                            </div>
                            <div className="mu-code-block">
                              <span style={{ color: '#10b981' }}>$</span> kubectl get orchestration<br />
                              STATUS: Reconciled (0 fail)<br />
                              HEALTH: 99.98% Available
                            </div>
                          </div>
                        )}

                        {proj.uiType === 'telemetry' && (
                          <div className="mu-arch">
                            <div className="mu-head">
                              <span className="mu-dot green" />
                              <span className="mu-dot" />
                              <span className="mu-dot" />
                              <span className="mu-title-text">annadata.ai/telemetry</span>
                            </div>
                            <div className="mu-box-row">
                              <div className="mu-box">
                                <span className="mono">⛅ 28°C / 64%</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>Agri Weather Feed</div>
                              </div>
                              <div className="mu-box">
                                <span className="mono">🤖 GrokAI Advisory</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>Optimal Sowing Window</div>
                              </div>
                            </div>
                            <div className="mu-code-block">
                              POST /api/v1/advisory<br />
                              <span style={{ color: '#10b981' }}>{'{'} status: 200, yield_index: "+18%" {'}'}</span>
                            </div>
                          </div>
                        )}

                        {proj.uiType === 'pipeline' && (
                          <div className="mu-arch">
                            <div className="mu-head">
                              <span className="mu-dot green" />
                              <span className="mu-dot" />
                              <span className="mu-dot" />
                              <span className="mu-title-text">nexus-healing-agent</span>
                            </div>
                            <div className="mu-box-row">
                              <div className="mu-box">
                                <span className="mono">⚡ Groq / Mistral</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>Sub-second Triage</div>
                              </div>
                              <div className="mu-box">
                                <span className="mono">🔄 Self-Healing</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>Auto CI/CD Patch</div>
                              </div>
                            </div>
                            <div className="mu-code-block">
                              <span style={{ color: '#f59e0b' }}>[DETECTED]</span> Dockerfile layer fail<br />
                              <span style={{ color: '#10b981' }}>[REPAIRED]</span> Cache bust applied (0.4s)
                            </div>
                          </div>
                        )}

                        {proj.uiType === 'Memory' && (
                          <div className="mu-arch">
                            <div className="mu-head">
                              <span className="mu-dot green" />
                              <span className="mu-dot" />
                              <span className="mu-dot" />
                              <span className="mu-title-text">Mnemo</span>
                            </div>
                            <div className="mu-box-row">
                              <div className="mu-box">
                                <span className="mono">⚡ Memory as a Service</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>Redis</div>
                              </div>
                              <div className="mu-box">
                                <span className="mono">🔄 LLM Optimized</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>RedisLabs</div>
                              </div>
                            </div>
                            <div className="mu-code-block">
                              <span style={{ color: '#f59e0b' }}>[DETECTED]</span> Low Token Usage<br />
                              <span style={{ color: '#10b981' }}>[REPAIRED]</span> Reduce Prompt Size
                            </div>
                          </div>
                        )}
                      </div>
                      <span className="wk-cap mono">Interactive Architecture Mockup</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
