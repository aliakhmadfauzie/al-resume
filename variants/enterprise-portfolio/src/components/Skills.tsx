import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="section-label">Expertise</span>
        <h2 className="section-title">Skills & Capabilities</h2>
        <p className="section-subtitle">
          Deep expertise across the Microsoft Power Platform ecosystem, modern frontend
          development, AI automation, and enterprise architecture.
        </p>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="card skill-category">
              <h3>{group.category}</h3>
              <div className="skill-items">
                {group.items.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
