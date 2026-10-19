const ACHIEVEMENTS_DATA = [
  {
    idx: '01 / 04',
    logo: 'RH',
    tint: 'rgba(238, 0, 0, 0.16)',
    label: 'Red Hat Certified',
    caption: 'RHCSA System Administrator credential verification',
    detail: 'Storage management, network configuration, SELinux enforcement & automation',
    num: '100%',
    numLabel: 'Verified',
  },
  {
    idx: '02 / 04',
    logo: 'K8',
    tint: 'rgba(16, 185, 129, 0.16)',
    label: 'AI & Cloud Projects',
    caption: 'Engineered full-scale distributed microservices',
    detail: 'Kubernetes orchestration, GrokAI telemetry & self-healing automation engines',
    num: '3+',
    numLabel: 'Systems',
  },
  {
    idx: '03 / 04',
    logo: 'MCA',
    tint: 'rgba(59, 130, 246, 0.16)',
    label: 'Academic Performance',
    caption: 'Master of Computer Applications (MCA) – Pune University',
    detail: 'Core coursework in Distributed Systems, Data Structures & Cloud Architecture',
    num: '7.32',
    numLabel: 'CGPA',
  },
  {
    idx: '04 / 04',
    logo: 'SLA',
    tint: 'rgba(245, 158, 11, 0.16)',
    label: 'Architecture Availability',
    caption: 'High-availability containerized microservices deployment',
    detail: 'Zero-downtime rolling updates, automated health checks & Prometheus alerts',
    num: '99.9%',
    numLabel: 'Uptime SLA',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="ach" aria-labelledby="achievements-heading">
      <div className="ach-stick">
        <div className="wrap ach-head">
          <header>
            <p className="sec-tag">
              <span>05</span>
              <span aria-hidden="true">—</span>
              <span>Honours &amp; metrics</span>
            </p>
            <h2 id="achievements-heading" className="sec-h">
              <span>Honours &amp; <span className="accent">metrics.</span></span>
            </h2>
          </header>
        </div>

        <div className="ach-clip">
          <div className="ach-track">
            {ACHIEVEMENTS_DATA.map((item, idx) => (
              <article
                key={idx}
                className="ach-card"
                style={{ '--tint': item.tint }}
                aria-label={item.label}
              >
                <div className="ach-top">
                  <div className="ach-logo mono">
                    <strong>{item.logo}</strong>
                  </div>
                  <span className="mono ach-idx">{item.idx}</span>
                </div>

                <div className="ach-bottom">
                  <div className="ach-text">
                    <h3 className="ach-label">{item.label}</h3>
                    <p className="ach-cap">{item.caption}</p>
                    <p className="ach-detail mono">{item.detail}</p>
                  </div>

                  <div className="ach-num">
                    {item.num}
                    <small>{item.numLabel}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
