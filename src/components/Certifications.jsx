const CERTS_DATA = [
  {
    idx: '01',
    title: 'Red Hat Certified System Administrator (RHCSA)',
    date: 'Certified',
    link: 'https://www.credly.com/badges/f9460aed-e3ce-4be1-81d5-d6e681900f46/public_url',
  },
  {
    idx: '02',
    title: 'Google Cloud Certifed - Associate Cloud Enginner (ACE)',
    date: 'Certified',
    link: 'https://www.credly.com/badges/fc2f6d7a-626d-41f6-b506-d5785bae6f67/public_url',
  },
  {
    idx: '02',
    title: 'Master of Computer Applications (MCA) – Pune University',
    date: '2025 – 2027',
    link: '#about',
  },
  {
    idx: '03',
    title: 'AWS Cloud Solutions & Infrastructure Architecture',
    date: '2025',
    link: '#skills',
  },
  {
    idx: '04',
    title: 'Kubernetes & Container Orchestration Specialist',
    date: '2025',
    link: '#work',
  },
  {
    idx: '05',
    title: 'Data Structures, Algorithms & Distributed Systems',
    date: '2024 – 2025',
    link: '#skills',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="certs" aria-labelledby="certifications-heading">
      <div className="wrap certs-grid">
        <div className="certs-left">
          <header>
            <p className="sec-tag">
              <span>04</span>
              <span aria-hidden="true">—</span>
              <span>Certifications &amp; Education</span>
            </p>
            <h2 id="certifications-heading" className="sec-h">
              <span>Always <span className="accent">learning.</span></span>
            </h2>
          </header>

          <p className="certs-count">
            <span className="mono">05</span> credentials and degrees
          </p>
        </div>

        <ol className="certs-list" aria-label="Certifications and education list">
          {CERTS_DATA.map((cert) => (
            <li key={cert.idx}>
              <a
                href={cert.link}
                className="cert-row"
                target={cert.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                <span className="cert-idx mono">{cert.idx}</span>
                <span className="cert-title">{cert.title}</span>
                <span className="cert-date mono">{cert.date}</span>
                <span className="cert-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
