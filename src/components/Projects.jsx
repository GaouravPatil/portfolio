import { useState } from 'react'

const PROJECTS_DATA = [
  {
    idx: '01',
    spineTitle: 'IndustrialPulse',
    kick: 'Predictive Maintenance / ML',
    title: 'IndustrialPulse',
    desc: 'An end-to-end predictive maintenance system that estimates turbofan Remaining Useful Life from NASA C-MAPSS sensor data — from EDA and feature engineering to FastAPI serving and a Streamlit dashboard.',
    features: [
      'Tuned Random Forest: R² 0.8645, MAE 11.17 cycles on 100 NASA test engines',
      '119 leakage-safe rolling, lag and trend features from 17 sensor channels',
      'Prediction persistence in PostgreSQL with critical / warning / normal bands',
      'FastAPI + Streamlit + 24 pytest tests + executed Jupyter notebooks',
    ],
    tech: ['Python', 'pandas', 'scikit-learn', 'FastAPI', 'PostgreSQL', 'Streamlit', 'Jupyter'],
    githubUrl: 'https://github.com/GaouravPatil/IndustrialPulse',
    uiType: 'ml',
  },
  {
    idx: '02',
    spineTitle: 'AnnaData Agronomic Platform',
    kick: 'Full-Stack & Agrarian AI',
    title: 'AnnaData',
    desc: 'A farmer-first AI assistant delivering crop health guidance, 7-day weather forecasts, live mandi prices and government scheme support through a JWT-secured chat experience.',
    features: [
      'Groq llama-3.3-70b chat with per-farmer sessions and 2h TTL caching',
      'Live mandi prices from data.gov.in plus Open-Meteo 7-day forecasts',
      'TF-IDF RAG-lite over agricultural schemes, pest and crop guides',
      'FastAPI + SQLAlchemy + JWT backend with a React 19 geolocation client',
    ],
    tech: ['React', 'FastAPI', 'Groq', 'SQLAlchemy', 'PostgreSQL', 'TF-IDF'],
    githubUrl: 'https://github.com/GaouravPatil/annadata',
    uiType: 'agri',
  },
  {
    idx: '03',
    spineTitle: 'Nexus Multi-LLM Chat',
    kick: 'Cross-Model AI Memory',
    title: 'Nexus',
    desc: 'One chat interface for Groq, Mistral, ChatGPT and Gemini — with cross-model persistent memory that automatically briefs the next model when you switch.',
    features: [
      'Handoff summaries preserve full context across model switches',
      'Ensemble mode queries Groq and Mistral in parallel for synthesized answers',
      'Go API with conversation history, Supabase persistence and SQLite fallback',
      'React 19 + Vite UI with WebGL SideRays and an animated composer',
    ],
    tech: ['Go', 'React', 'Supabase', 'Groq / Mistral', 'OpenAI', 'Gemini'],
    githubUrl: 'https://github.com/GaouravPatil/Nexus',
    uiType: 'nexus',
  },
  {
    idx: '04',
    spineTitle: 'Fitness Microservice',
    kick: 'Spring Boot Microservices',
    title: 'Fitness Microservice',
    desc: 'A production-minded fitness tracking platform split across four Spring Boot services with Eureka discovery, RS256 JWT auth, Kafka event streaming and MongoDB/PostgreSQL storage.',
    features: [
      'Eureka-backed discovery across userservice, activityservice and aiservice',
      'RS256 access/refresh tokens, rate limiting and owner-or-admin access',
      'Kafka SASL_SSL activity pipeline with idempotent retries and AI recommendations',
      'Flyway migrations, HTTPS by default, GitLab CI/CD to EKS via Argo CD',
    ],
    tech: ['Java 24', 'Spring Boot', 'Kafka', 'Eureka', 'MongoDB', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/GaouravPatil/Fitness-Microservice',
    uiType: 'fitness',
  },
  {
    idx: '05',
    spineTitle: 'RiskLens',
    kick: 'Risk Analytics Platform',
    title: 'RiskLens',
    desc: 'A full-stack financial risk platform that ingests transaction and access logs, scores events with SQL analytics, and routes flagged cases to role-gated analyst investigations.',
    features: [
      'PostgreSQL ETL staging with SQL feature engineering and risk scoring rules',
      'JWT authentication, rate limiting and a complete analyst audit trail',
      'React 19 dashboard with live severity distribution and review flows',
      'Python synthetic data generator for reproducible risk scenarios',
    ],
    tech: ['React', 'FastAPI', 'PostgreSQL', 'SQL Analytics', 'Python', 'JWT'],
    githubUrl: 'https://github.com/GaouravPatil/RiskLens',
    uiType: 'risk',
  },
  {
    idx: '06',
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
    idx: '07',
    spineTitle: 'Mnemo',
    kick: 'Memory As a Service [MaaS]',
    title: 'Mnemo',
    desc: 'Mnemo is a cloud-native memory layer that allows AI applications to store and retrieve contextual information across multiple sessions and deployments. It provides a simple REST API for storing, retrieving, and deleting key-value pairs, with built-in encryption and access control.',
    features: [
      'Model-agnostic memory layer that turns chat history into compact, deduplicated facts',
      'Replaces stale values (e.g. 30s → 45s timeout) while keeping history queryable',
      'Ranks by relevance, recency, type priority, and embedding',
      '~60–65% token reduction, 45/45 critical facts recalled (author’s own samples)',
    ],
    tech: ['Python', 'Docker', 'ArrayList', 'Redis', 'RedisLabs'],
    githubUrl: 'https://github.com/GaouravPatil/Mnemo',
    uiType: 'memory',
  },
]

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(0)
  const total = String(PROJECTS_DATA.length).padStart(2, '0')

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
            const num = `${String(idx + 1).padStart(2, '0')} / ${total}`

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
                  <span className="wk-sn mono">{num}</span>
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
                        {proj.uiType === 'ml' && (
                          <div className="mu-arch">
                            <div className="mu-head">
                              <span className="mu-dot green" />
                              <span className="mu-dot" />
                              <span className="mu-dot" />
                              <span className="mu-title-text">industrialpulse / model</span>
                            </div>
                            <div className="mu-box-row">
                              <div className="mu-box">
                                <span className="mono" style={{ color: '#0284c7' }}>R² 0.8645</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>Random Forest · 119 features</div>
                              </div>
                              <div className="mu-box">
                                <span className="mono" style={{ color: '#10b981' }}>MAE 11.17</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>cycles · 100 engines</div>
                              </div>
                            </div>
                            <div className="mu-spark" aria-hidden="true">
                              {[34, 48, 42, 58, 52, 68, 62, 78, 72, 88, 82, 94].map((h, i) => (
                                <span key={i} style={{ height: `${h}%` }} />
                              ))}
                            </div>
                            <div className="mu-code-block">
                              POST /api/v1/predict<br />
                              <span style={{ color: '#f59e0b' }}>RUL: 8.19 cycles</span> · band: critical<br />
                              <span style={{ color: '#10b981' }}>model_version: rf_fd001_v1</span>
                            </div>
                          </div>
                        )}

                        {proj.uiType === 'agri' && (
                          <div className="mu-arch">
                            <div className="mu-head">
                              <span className="mu-dot green" />
                              <span className="mu-dot" />
                              <span className="mu-dot" />
                              <span className="mu-title-text">annadata / farmer-chat</span>
                            </div>
                            <div className="mu-box-row">
                              <div className="mu-box">
                                <span className="mono">⛅ 7-Day Forecast</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>Open-Meteo · geolocation</div>
                              </div>
                              <div className="mu-box">
                                <span className="mono">🌾 Mandi Prices</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>data.gov.in · live</div>
                              </div>
                            </div>
                            <div className="mu-code-block">
                              POST /chat → FastAPI + Groq<br />
                              <span style={{ color: '#10b981' }}>{'{'} weather: "rain", mandi: "₹2,450/qtl" {'}'}</span>
                            </div>
                          </div>
                        )}

                        {proj.uiType === 'nexus' && (
                          <div className="mu-arch">
                            <div className="mu-head">
                              <span className="mu-dot green" />
                              <span className="mu-dot" />
                              <span className="mu-dot" />
                              <span className="mu-title-text">nexus / cross-model session</span>
                            </div>
                            <div className="mu-box-row">
                              <div className="mu-box">
                                <span className="mono">⚡ Groq → Gemini</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>Context absorbed ✓</div>
                              </div>
                              <div className="mu-box">
                                <span className="mono">🧠 Persistent Memory</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>Auto handoff brief</div>
                              </div>
                            </div>
                            <div className="mu-code-block">
                              POST /summarize → handoff brief<br />
                              <span style={{ color: '#10b981' }}>[MEMORY]</span> full context carried over
                            </div>
                          </div>
                        )}

                        {proj.uiType === 'fitness' && (
                          <div className="mu-arch">
                            <div className="mu-head">
                              <span className="mu-dot green" />
                              <span className="mu-dot" />
                              <span className="mu-dot" />
                              <span className="mu-title-text">fitness / service-cluster</span>
                            </div>
                            <div className="mu-box-row">
                              <div className="mu-box">
                                <span className="mono" style={{ color: '#10b981' }}>● 4/4 Services</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>Eureka · HTTPS</div>
                              </div>
                              <div className="mu-box">
                                <span className="mono">Kafka · SASL_SSL</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>activity-topic</div>
                              </div>
                            </div>
                            <div className="mu-code-block">
                              POST /api/activities → 201<br />
                              <span style={{ color: '#10b981' }}>RS256 JWT verified</span> · event published ✓
                            </div>
                          </div>
                        )}

                        {proj.uiType === 'risk' && (
                          <div className="mu-arch">
                            <div className="mu-head">
                              <span className="mu-dot green" />
                              <span className="mu-dot" />
                              <span className="mu-dot" />
                              <span className="mu-title-text">risklens / analyst-console</span>
                            </div>
                            <div className="mu-box-row">
                              <div className="mu-box">
                                <span className="mono" style={{ color: '#dc2626' }}>▲ Score 87</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>High risk · flagged</div>
                              </div>
                              <div className="mu-box">
                                <span className="mono">4 Analyst Roles</span>
                                <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>JWT · audit trail</div>
                              </div>
                            </div>
                            <div className="mu-code-block">
                              SELECT risk_score FROM risk_features<br />
                              <span style={{ color: '#f59e0b' }}>ALERT</span> analyst review required
                            </div>
                          </div>
                        )}

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

                        {proj.uiType === 'memory' && (
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
