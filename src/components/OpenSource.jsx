import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GitCommit, Star, GitFork, ExternalLink, Code2, RefreshCw } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'

const FALLBACK_REPOS = [
  {
    name: 'Redis',
    description: 'Full Stack, AI-powered platform for managing and monitoring Kubernetes clusters through natural language commands.',
    language: 'Python',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/GaouravPatil/AI-Orchestrator',
    topics: ['kubernetes', 'ai', 'devops', 'natural-language'],
  },
  {
    name: 'sugar Labs',
    description: 'Multi-LLM aggregator platform querying multiple AI providers concurrently with ensemble synthesis and Supabase persistent memory.',
    language: 'JavaScript / Python',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/GaouravPatil/Nexus',
    topics: ['llm', 'ai-aggregator', 'fastapi', 'react'],
  },
  {
    name: 'Teleport',
    description: 'Self-healing CI/CD pipeline automation framework that detects build failures and executes automated canary rollbacks.',
    language: 'Go',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/GaouravPatil/Guardrail',
    topics: ['cicd', 'golang', 'github-actions', 'self-healing']
  },
  ,
]

export default function OpenSource() {
  const [repos, setRepos] = useState(FALLBACK_REPOS)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchGitHubRepos() {
      try {
        setLoading(true)
        const res = await fetch('https://api.github.com/users/GaouravPatil/repos?sort=updated&per_page=12')
        if (!res.ok) throw new Error('GitHub API rate limit or error')
        const data = await res.json()

        if (Array.isArray(data) && data.length > 0) {
          // Filter out forks or non-essential demo repos if needed, sort by stars / pushed date
          const formatted = data
            .filter((r) => !r.fork && r.name !== 'Gaouravpatil')
            .map((r) => ({
              name: r.name,
              description: r.description || 'Public open-source repository by Gaourav Patil.',
              language: r.language || 'Code',
              stargazers_count: r.stargazers_count,
              forks_count: r.forks_count,
              html_url: r.html_url,
              topics: r.topics && r.topics.length ? r.topics : [r.language?.toLowerCase() || 'devops'],
            }))

          setRepos(formatted.length > 0 ? formatted : FALLBACK_REPOS)
        }
      } catch (err) {
        console.warn('Using curated GitHub repo data:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubRepos()
  }, [])

  return (
    <section className="section" id="opensource">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">
            <GitCommit size={14} /> Open Source
          </span>
          <h2 className="section-title">Open Source Contributions</h2>
          <p className="section-desc">
            Public open-source repositories, developer tools, and contributions directly synchronized from{' '}
            <a
              href="https://github.com/GaouravPatil"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 600, color: 'var(--primary)' }}
            >
              @GaouravPatil
            </a>.
          </p>
        </motion.div>

        <div className="skills-grid">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="skill-card"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className="skill-icon-wrapper" style={{ width: 36, height: 36, borderRadius: 8 }}>
                      <Code2 size={18} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>{repo.name}</h3>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    style={{ width: 32, height: 32 }}
                    aria-label={`View ${repo.name} on GitHub`}
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 16 }}>
                  {repo.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span key={topic} className="tech-pill" style={{ fontSize: 11, padding: '3px 10px' }}>
                      {topic}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 12,
                    borderTop: '1px solid var(--border)',
                    fontSize: 12,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-light)',
                  }}
                >
                  <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{repo.language}</span>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Star size={13} color="var(--accent-amber)" fill="var(--accent-amber)" /> {repo.stargazers_count}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GitFork size={13} /> {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a
            href="https://github.com/GaouravPatil?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            <FiGithub size={18} /> View All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
