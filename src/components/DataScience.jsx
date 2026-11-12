const METRICS = [
  { value: '0.8645', label: 'Test R²', note: '100 engines' },
  { value: '11.17', label: 'MAE', note: 'cycles' },
  { value: '119', label: 'Features', note: 'leakage-safe' },
  { value: '24', label: 'Tests', note: 'pytest' },
]

const PIPELINE = [
  {
    title: 'Ingest & validate',
    desc: 'Checksum-verified NASA C-MAPSS FD001 telemetry with engine-wise train/test splits.',
  },
  {
    title: 'Explore & engineer',
    desc: 'EDA notebooks plus rolling, lag and trend features without target leakage.',
  },
  {
    title: 'Train & evaluate',
    desc: 'Tuned Random Forest against a mean baseline, scored on held-out engines.',
  },
  {
    title: 'Serve & persist',
    desc: 'FastAPI predictions stored in PostgreSQL and mapped to maintenance bands.',
  },
  {
    title: 'Visualize',
    desc: 'Streamlit fleet overview, asset explorer and paginated prediction history.',
  },
]

const TOOLKIT = [
  'pandas',
  'NumPy',
  'scikit-learn',
  'Matplotlib',
  'Seaborn',
  'Plotly',
  'Jupyter',
  'Streamlit',
  'PostgreSQL',
  'SQL',
]

export default function DataScience() {
  return (
    <section id="data" className="section ds" aria-labelledby="data-heading">
      <div className="wrap">
        <div className="ds-head">
          <header>
            <p className="sec-tag">
              <span>04</span>
              <span aria-hidden="true">—</span>
              <span>Data Lab</span>
            </p>
            <h2 id="data-heading" className="sec-h">
              <span>A little data. <span className="accent">A lot of signal.</span></span>
            </h2>
          </header>
          <p className="ds-intro">
            I like problems where the answer lives in the data. IndustrialPulse is my end-to-end
            take on predictive maintenance — cleaning sensor telemetry, engineering leakage-safe
            features, training a model, and shipping it behind a real API and dashboard.
          </p>
        </div>

        <div className="ds-grid">
          <article className="ds-card ds-hero">
            <p className="mono ds-kicker">Featured experiment · 2026</p>
            <h3 className="ds-title">IndustrialPulse <span className="accent">RUL</span></h3>
            <p className="ds-desc">
              Remaining Useful Life prediction for turbofan engines, trained on NASA C-MAPSS
              FD001 with measured, reproducible results.
            </p>

            <div className="ds-metrics">
              {METRICS.map((metric) => (
                <div key={metric.label} className="ds-metric">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  <small>{metric.note}</small>
                </div>
              ))}
            </div>

            <div className="ds-bands mono">
              <span><i className="is-critical" /> critical ≤ 30</span>
              <span><i className="is-warning" /> warning 31–80</span>
              <span><i className="is-normal" /> normal &gt; 80</span>
            </div>

            <a
              href="https://github.com/GaouravPatil/IndustrialPulse"
              className="ds-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the experiment ↗
            </a>
          </article>

          <div className="ds-side">
            <article className="ds-card ds-pipe-card">
              <p className="mono ds-kicker">The pipeline</p>
              <h3 className="ds-sub">From sensors to a decision.</h3>
              <ol className="ds-pipe">
                {PIPELINE.map((step, idx) => (
                  <li key={step.title}>
                    <span className="ds-pipe-num mono">{String(idx + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <article className="ds-card ds-tools-card">
              <p className="mono ds-kicker">Toolkit</p>
              <ul className="ds-tools">
                {TOOLKIT.map((tool) => (
                  <li key={tool} className="mono">{tool}</li>
                ))}
              </ul>
              <p className="ds-note">
                Also applied in RiskLens — SQL feature engineering, rule-based risk scoring and
                investigation analytics.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
