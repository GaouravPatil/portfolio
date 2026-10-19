import { useState } from 'react'

const SKILLS_DATA = [
  // Languages
  {
    id: '01',
    sym: 'Py',
    name: 'Python',
    category: 'languages',
    catLabel: 'Languages',
    proficiency: 'Core / Advanced',
    desc: 'Primary language for AI orchestration, backend APIs, microservices, and automated scripting.',
    usedIn: ['AI DevOps Orchestrator', 'AnnaData Platform', 'Automation Scripts'],
  },
  {
    id: '02',
    sym: 'Go',
    name: 'Go (Golang)',
    category: 'languages',
    catLabel: 'Languages',
    proficiency: 'Proficient',
    desc: 'High-concurrency systems, Kubernetes operators, and lightweight container microservices.',
    usedIn: ['K8s Microservices', 'Cloud Tooling'],
  },
  {
    id: '03',
    sym: 'Jv',
    name: 'Java',
    category: 'languages',
    catLabel: 'Languages',
    proficiency: 'Academic & OOP',
    desc: 'Enterprise architecture, Object-Oriented Design, and MCA network programming coursework.',
    usedIn: ['Distributed Systems', 'MCA Projects'],
  },
  {
    id: '04',
    sym: 'C+',
    name: 'C++',
    category: 'languages',
    catLabel: 'Languages',
    proficiency: 'DSA Core',
    desc: 'Algorithmic problem-solving, data structures, and memory-conscious programming.',
    usedIn: ['Data Structures & Algorithms', 'Performance Computing'],
  },
  {
    id: '05',
    sym: 'Js',
    name: 'JavaScript',
    category: 'languages',
    catLabel: 'Languages',
    proficiency: 'Full-Stack Core',
    desc: 'Interactive frontends, modern ES6+ asynchronous web services, and full-stack development.',
    usedIn: ['AnnaData Web App', 'Portfolio', 'Interactive Dashboards'],
  },
  {
    id: '06',
    sym: 'Ts',
    name: 'TypeScript',
    category: 'languages',
    catLabel: 'Languages',
    proficiency: 'Type-Safe Web',
    desc: 'Enterprise type safety, robust frontend development, and clean scalable contracts.',
    usedIn: ['Production Frontend Apps', 'Client SDKs'],
  },
  {
    id: '07',
    sym: 'Sh',
    name: 'Bash / Shell',
    category: 'languages',
    catLabel: 'Languages',
    proficiency: 'RHCSA Standard',
    desc: 'Linux server administration, automated system maintenance, and cron automation.',
    usedIn: ['Linux RHCSA Systems', 'CI/CD Automation'],
  },
  {
    id: '08',
    sym: 'Sq',
    name: 'SQL',
    category: 'languages',
    catLabel: 'Languages',
    proficiency: 'Relational DB',
    desc: 'Relational schema design, query optimization, indexing, and transactional workflows.',
    usedIn: ['PostgreSQL DBs', 'AnnaData Platform'],
  },

  // Cloud & DevOps
  {
    id: '09',
    sym: 'Aw',
    name: 'AWS',
    category: 'cloud',
    catLabel: 'Cloud & DevOps',
    proficiency: 'Cloud Architecture',
    desc: 'EC2, VPC, S3, IAM, Lambda, RDS, DynamoDB, CloudWatch, and cost-efficient cloud design.',
    usedIn: ['Cloud Deployments', 'AI Data Pipelines', 'Serverless Functions'],
  },
  {
    id: '10',
    sym: 'K8',
    name: 'Kubernetes',
    category: 'cloud',
    catLabel: 'Cloud & DevOps',
    proficiency: 'Container Orchestration',
    desc: 'Deployments, services, ingress controllers, config maps, secrets, and automated cluster scaling.',
    usedIn: ['AI DevOps Orchestrator', 'Microservice Pods'],
  },
  {
    id: '11',
    sym: 'Dc',
    name: 'Docker',
    category: 'cloud',
    catLabel: 'Cloud & DevOps',
    proficiency: 'Containerization',
    desc: 'Multi-stage Dockerfile optimization, Docker Compose environments, and image security.',
    usedIn: ['Containerized Workloads', 'Local Development'],
  },
  {
    id: '12',
    sym: 'Tf',
    name: 'Terraform',
    category: 'cloud',
    catLabel: 'Cloud & DevOps',
    proficiency: 'Infrastructure as Code',
    desc: 'Declarative cloud provisioning, modular infrastructure blueprints, and state management.',
    usedIn: ['AWS Provisioning', 'Reproducible Environments'],
  },
  {
    id: '13',
    sym: 'Lx',
    name: 'Linux (RHEL)',
    category: 'cloud',
    catLabel: 'Cloud & DevOps',
    proficiency: 'RHCSA Certified',
    desc: 'Red Hat Enterprise Linux system administration, storage, SELinux, and systemd services.',
    usedIn: ['RHCSA Certification', 'Production Servers'],
  },
  {
    id: '14',
    sym: 'Gh',
    name: 'GitHub Actions',
    category: 'cloud',
    catLabel: 'Cloud & DevOps',
    proficiency: 'CI/CD Pipelines',
    desc: 'Automated test suites, container image builds, security scanning, and continuous delivery.',
    usedIn: ['Automated Deployments', 'Nexus AI Workflows'],
  },
  {
    id: '15',
    sym: 'Jk',
    name: 'Jenkins',
    category: 'cloud',
    catLabel: 'Cloud & DevOps',
    proficiency: 'CI/CD Automation',
    desc: 'Declarative Jenkinsfile pipelines, automated build triggers, and deployment stages.',
    usedIn: ['Continuous Integration', 'Build Automation'],
  },

  // Frameworks & Libraries
  {
    id: '16',
    sym: 'Rc',
    name: 'React.js',
    category: 'frameworks',
    catLabel: 'Frameworks',
    proficiency: 'Frontend Lead',
    desc: 'Component architecture, custom hooks, reactive state management, and modern animations.',
    usedIn: ['AnnaData Web App', 'Interactive Portfolios', 'Dashboards'],
  },
  {
    id: '17',
    sym: 'Fa',
    name: 'FastAPI',
    category: 'frameworks',
    catLabel: 'Frameworks',
    proficiency: 'Modern Python APIs',
    desc: 'Asynchronous REST APIs, Pydantic data schemas, dependency injection, and auto OpenAPI docs.',
    usedIn: ['AI DevOps Orchestrator', 'Microservice Backends'],
  },
  {
    id: '18',
    sym: 'Nd',
    name: 'Node.js',
    category: 'frameworks',
    catLabel: 'Frameworks',
    proficiency: 'Backend Systems',
    desc: 'Asynchronous runtime, event-driven microservices, and NPM ecosystem development.',
    usedIn: ['AnnaData Backend', 'REST APIs'],
  },
  {
    id: '19',
    sym: 'Ex',
    name: 'Express.js',
    category: 'frameworks',
    catLabel: 'Frameworks',
    proficiency: 'RESTful Middleware',
    desc: 'Routing, middleware pipelines, authentication gates, and API error handling.',
    usedIn: ['AnnaData Service Layer', 'Web Services'],
  },
  {
    id: '20',
    sym: 'Fl',
    name: 'Flask',
    category: 'frameworks',
    catLabel: 'Frameworks',
    proficiency: 'Micro-Framework',
    desc: 'Lightweight web services, rapid prototyping, and AI/ML model inference endpoints.',
    usedIn: ['Model Serving', 'Prototyping'],
  },
  {
    id: '21',
    sym: 'Gk',
    name: 'GrokAI / LLMs',
    category: 'frameworks',
    catLabel: 'Frameworks',
    proficiency: 'AI Integration',
    desc: 'LLM orchestration, prompt engineering, context pipelines, and generative telemetry.',
    usedIn: ['AnnaData Agronomic Intelligence', 'Nexus AI Engine'],
  },

  // Databases & Tools
  {
    id: '22',
    sym: 'Pg',
    name: 'PostgreSQL',
    category: 'databases',
    catLabel: 'Databases & Tools',
    proficiency: 'Primary Relational DB',
    desc: 'ACID transactions, relational modeling, complex joins, and indexing strategies.',
    usedIn: ['AnnaData Platform', 'DevOps Orchestrator DB'],
  },
  {
    id: '23',
    sym: 'Rd',
    name: 'Redis',
    category: 'databases',
    catLabel: 'Databases & Tools',
    proficiency: 'In-Memory Cache',
    desc: 'High-speed caching layer, session storage, pub/sub queues, and rate limiting.',
    usedIn: ['Cache Optimization', 'Real-Time Queues'],
  },
  {
    id: '24',
    sym: 'Mg',
    name: 'MongoDB',
    category: 'databases',
    catLabel: 'Databases & Tools',
    proficiency: 'NoSQL Documents',
    desc: 'Flexible JSON document storage, aggregation pipelines, and rapid unstructured data ingestion.',
    usedIn: ['Telemetry Logs', 'Unstructured Records'],
  },
  {
    id: '25',
    sym: 'Gf',
    name: 'Grafana',
    category: 'databases',
    catLabel: 'Databases & Tools',
    proficiency: 'Observability & Dashboards',
    desc: 'Real-time infrastructure dashboards, alert rules, and telemetry visualization.',
    usedIn: ['AI DevOps Orchestrator', 'Cluster Metrics'],
  },
  {
    id: '26',
    sym: 'Ot',
    name: 'OpenTelemetry',
    category: 'databases',
    catLabel: 'Databases & Tools',
    proficiency: 'Distributed Tracing',
    desc: 'Standardized distributed tracing, metrics export, and microservices observability.',
    usedIn: ['Microservices Observability', 'Pipeline Monitoring'],
  },
  {
    id: '27',
    sym: 'Gt',
    name: 'Git & GitHub',
    category: 'databases',
    catLabel: 'Databases & Tools',
    proficiency: 'Version Control',
    desc: 'Git branching models, PR code reviews, semantic versioning, and repository management.',
    usedIn: ['All Repositories', 'GitOps Workflows'],
  },
  {
    id: '28',
    sym: 'Pm',
    name: 'Postman',
    category: 'databases',
    catLabel: 'Databases & Tools',
    proficiency: 'API Testing',
    desc: 'Automated API endpoint testing, environment mockups, and integration contract validation.',
    usedIn: ['API Verification', 'Team Collaboration'],
  },
]

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedSkill, setSelectedSkill] = useState(SKILLS_DATA[0])

  const categories = [
    { key: 'all', label: 'All', count: SKILLS_DATA.length },
    { key: 'languages', label: 'Languages', count: SKILLS_DATA.filter((s) => s.category === 'languages').length },
    { key: 'cloud', label: 'Cloud & DevOps', count: SKILLS_DATA.filter((s) => s.category === 'cloud').length },
    { key: 'frameworks', label: 'Frameworks', count: SKILLS_DATA.filter((s) => s.category === 'frameworks').length },
    { key: 'databases', label: 'Databases & Tools', count: SKILLS_DATA.filter((s) => s.category === 'databases').length },
  ]

  const filteredSkills = activeFilter === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeFilter)

  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="wrap">
        <header>
          <p className="sec-tag">
            <span>02</span>
            <span aria-hidden="true">—</span>
            <span>Skills</span>
          </p>
          <h2 id="skills-heading" className="sec-h">
            <span>The periodic table of <span className="accent">my stack.</span></span>
          </h2>
        </header>

        {/* Filter Chips */}
        <div className="sk-chips" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className="sk-chip"
              role="tab"
              aria-pressed={activeFilter === cat.key}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label} <span>{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Layout: Periodic Table Grid + Interactive Side Inspector */}
        <div className="sk-layout">
          <div className="sk-grid is-shown">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.id === skill.id
              return (
                <div key={skill.id} className="sk-li">
                  <button
                    type="button"
                    className={`sk-tile ${isSelected ? 'is-active' : ''}`}
                    onClick={() => setSelectedSkill(skill)}
                    onMouseEnter={() => setSelectedSkill(skill)}
                    aria-label={`${skill.name} - ${skill.catLabel}`}
                  >
                    <span className="sk-num mono">{skill.id}</span>
                    <span className="sk-sym">{skill.sym}</span>
                    <span className="sk-name">{skill.name}</span>
                  </button>
                </div>
              )
            })}
          </div>

          {/* Inspector Panel */}
          <aside className="sk-insp" aria-label="Skill details inspector">
            <div className="sk-logo mono">
              {selectedSkill.sym}
            </div>
            <p className="sk-fam mono">{selectedSkill.catLabel}</p>
            <h3 className="sk-title">{selectedSkill.name}</h3>
            <span className="sk-prof mono">{selectedSkill.proficiency}</span>

            <p className="sk-desc-text">{selectedSkill.desc}</p>

            <h4 className="sk-used-h mono">Key Applications</h4>
            <ul className="sk-used">
              {selectedSkill.usedIn.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
