import { motion } from 'framer-motion'
import { Code, Layers, Cloud, Database, Wrench, Users } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code size={20} />,
    skills: ['Python', 'Go', 'Java', 'C++'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud size={20} />,
    skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Linux (RHCSA)'],
  },
  {
    title: 'CI/CD & DevOps',
    icon: <Layers size={20} />,
    skills: ['GitHub Actions', 'ArgoCD', 'Jenkins', 'Helm', 'Prometheus', 'Grafana'],
  },
  {
    title: 'Frameworks & Web',
    icon: <Wrench size={20} />,
    skills: ['React.js', 'FastAPI', 'Express.js', 'Flask', 'Spring Boot'],
  },
  {
    title: 'Databases & Storage',
    icon: <Database size={20} />,
    skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'Redis', 'AWS DynamoDB', 'S3'],
  },
  {
    title: 'Professional Skills',
    icon: <Users size={20} />,
    skills: ['System Architecture', 'Problem Solving', 'Incident Remediation', 'Leadership'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Capabilities</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-desc">
            A comprehensive overview of programming languages, DevOps tooling, and cloud-native platforms.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="skill-card"
            >
              <div className="skill-card-head">
                <div className="skill-icon-wrapper">{category.icon}</div>
                <div className="skill-card-title">{category.title}</div>
              </div>
              <div className="skill-pill-container">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
