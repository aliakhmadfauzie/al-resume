import { highlights } from "../data/portfolio";

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <span className="section-label">Key Achievements</span>
        <h2 className="section-title">What Sets This Project Apart</h2>
        <p className="section-subtitle">
          The Enterprise Modernization Program demonstrates enterprise-scale
          architecture, AI-powered development, and rigorous governance at every
          level.
        </p>
        <div className="highlights-grid">
          {highlights.map((item) => (
            <div key={item.title} className="card highlight-card">
              <span className="highlight-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
