import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">
            <GraduationCap size={14} /> Credentials
          </span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-desc">
            Academic degrees and industry-recognized system administrator certifications.
          </p>
        </motion.div>

        <div className="edu-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="edu-card-modern"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div className="skill-icon-wrapper">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  Master of Computer Applications (MCA)
                </h3>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary)' }}>
                  MIT World Peace University, Pune
                </div>
              </div>
            </div>
            <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--text-light)', marginBottom: 12 }}>
              Jul 2025 – Present · CGPA: 7.32
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
              Specialization in Cloud Computing, DevOps Automation, Microservices Architecture, and Artificial Intelligence.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="edu-card-modern"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div className="skill-icon-wrapper" style={{ background: 'var(--emerald-light)', color: 'var(--accent-emerald)' }}>
                <BookOpen size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  Bachelor of Computer Applications (BCA)
                </h3>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent-emerald)' }}>
                  Rajarshi Shahu Mahavidyalaya, Latur
                </div>
                <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--text-light)', marginBottom: 12 }}>
                  2022– 2025 · CGPA: 6.67
                </div>
              </div>
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
              Comprehensive coursework covering Data Structures, Web Engineering, Database Systems, and Computer Networks.
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 16, color: 'var(--text-main)' }}>
            Professional Industry Certifications
          </h3>

          <div className="cert-card-row">
            <div className="cert-badge-wrap">
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--text-main)' }}>
                Red Hat Certified System Administrator (RHCSA)
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                Red Hat Inc. · Certified Linux System & Server Administrator
              </div>
            </div>
          </div>

          <div className="cert-card-row">
            <div className="cert-badge-wrap" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--text-main)' }}>
                Basics of Kubernetes Fundamentals
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                The Linux Foundation / Linux Academy
              </div>
            </div>
          </div>

          <div className="cert-card-row">
            <div className="cert-badge-wrap">
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--text-main)' }}>
                Associate Cloud Engineer (ACE)
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                Google Cloud
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
