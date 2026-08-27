import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Cloud, GitBranch } from 'lucide-react'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-card"
        >
          <div className="about-grid">
            <div className="about-text">
              <span className="section-badge">
                <ShieldCheck size={14} /> Background & Focus
              </span>
              <h2 className="section-title">Where Cloud Infrastructure Meets Artificial Intelligence</h2>
              <div className="highlight-box">
                "Automate everything, eliminate friction, and build resilient infrastructure."
              </div>
              <p>
                I am an <strong>RHCSA-certified Cloud & DevOps Engineer</strong> pursuing an MCA at MIT World Peace University, Pune. My engineering ethos revolves around constructing intelligent, self-healing cloud ecosystems.
              </p>
              <p>
                From architecting multi-model LLM persistence backends to engineering automated CI/CD guardrails and predictive Kubernetes auto-scalers, I combine modern cloud-native primitives with practical AI capabilities.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="skill-card">
                <div className="skill-icon-wrapper">
                  <Cloud size={20} />
                </div>
                <div className="skill-card-title">Cloud Infrastructure</div>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>
                  AWS EC2, VPC, Lambda, S3, RDS & Terraform provisioning.
                </p>
              </div>

              <div className="skill-card">
                <div className="skill-icon-wrapper">
                  <Cpu size={20} />
                </div>
                <div className="skill-card-title">AI & Orchestration</div>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>
                  Multi-provider LLM routing, SSE streaming & AI operators.
                </p>
              </div>

              <div className="skill-card">
                <div className="skill-icon-wrapper">
                  <GitBranch size={20} />
                </div>
                <div className="skill-card-title">CI/CD & DevOps</div>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>
                  GitHub Actions, ArgoCD, Jenkins & automated rollbacks.
                </p>
              </div>

              <div className="skill-card">
                <div className="skill-icon-wrapper">
                  <ShieldCheck size={20} />
                </div>
                <div className="skill-card-title">Linux Systems</div>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>
                  RHCSA Red Hat Certified System Administrator.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
