import { motion } from 'framer-motion'
import { BrainCircuit, ShieldAlert, Zap, ExternalLink, Layers } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import CardSwap, { Card } from './CardSwap'

const projectList = [
  {
    icon: <BrainCircuit size={26} />,
    title: 'Nexus',
    subtitle: 'Cross-Model Persistent Memory LLM Engine',
    desc: 'An AI orchestration platform querying multiple LLM providers concurrently (Groq, Mistral, ChatGPT, Gemini). Features intelligent latency/cost routing, consensus synthesis, and persistent cross-session chat memory backed by Supabase.',
    features: [
      'Multi-provider concurrent AI querying with streaming SSE responses',
      'Consensus synthesis engine aggregating responses across LLM models',
      'Persistent memory schema across chat sessions and model changes',
      'Dynamic fallback & routing based on live provider latency and cost',
    ],
    tech: ['React', 'Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'SSE', 'Docker'],
    github: 'https://github.com/GaouravPatil',
    live: 'https://nexus.gaourav.space/',
  },
  {
    icon: <ShieldAlert size={26} />,
    title: 'Guardrail',
    subtitle: 'Self-Healing CI/CD Pipeline Framework',
    desc: 'An automated CI/CD resiliency layer that monitors build and deployment health in real-time. Detects failure patterns and triggers automated corrective actions, canary rollbacks, and configuration patches without manual triage.',
    features: [
      'Real-time stage monitoring across build, test, and container deployment',
      'Automated canary rollback and policy-as-code verification',
      'Failure pattern analysis and automated error notification alerts',
      'Deep integration with GitHub Actions, Jenkins, and ArgoCD',
    ],
    tech: ['Go', 'GitHub Actions', 'ArgoCD', 'Kubernetes', 'Prometheus', 'Docker'],
    github: 'https://github.com/GaouravPatil',
    live: null,
  },
  {
    icon: <Zap size={26} />,
    title: 'AI Orchestrator for Kubernetes',
    subtitle: 'Intelligent Autonomous Cluster Scaling',
    desc: 'An AI-driven operator extension for Kubernetes clusters that analyzes metric telemetry to predict traffic spikes, optimize pod scheduling, reduce cloud node costs, and remediate CrashLoopBackOff anomalies.',
    features: [
      'Predictive pod auto-scaling using historical telemetry trends',
      'AI resource optimization reducing node over-provisioning by ~30%',
      'Automated cluster self-healing for failing pods and nodes',
      'Federated multi-cluster deployment placement strategies',
    ],
    tech: ['Python', 'Kubernetes', 'Terraform', 'AWS EKS', 'Helm', 'Prometheus', 'Grafana'],
    github: 'https://github.com/GaouravPatil',
    live: null,
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <span className="section-badge" style={{ margin: '0 auto 16px' }}>
            <Layers size={14} /> Featured Innovations
          </span>
          <h2 className="section-title">Core Engineering Projects</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Interactive 3D project showcase. Click any card or indicator to cycle through.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ paddingBottom: 60 }}
        >
          <CardSwap cardDistance={45} verticalDistance={55} delay={6000} pauseOnHover={true}>
            {projectList.map((project) => (
              <Card key={project.title}>
                <div className="project-top-bar">
                  <div className="project-badge-icon">{project.icon}</div>
                  <div className="project-links-group">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-btn"
                        aria-label="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-btn"
                        aria-label="Live Application"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="project-title-text">{project.title}</h3>
                  <div className="project-sub-text">{project.subtitle}</div>
                  <p className="project-body-text">{project.desc}</p>

                  <ul className="project-feature-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  <div className="skill-pill-container" style={{ marginTop: 'auto' }}>
                    {project.tech.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </motion.div>
      </div>
    </section>
  )
}
