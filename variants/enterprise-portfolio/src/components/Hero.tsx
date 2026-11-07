import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container">
        <div className="hero-content">
          <div className="hero-greeting">Enterprise Solution Architect</div>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-title">{personalInfo.title}</p>
          <p className="hero-tagline">{personalInfo.tagline}</p>
          <div className="hero-actions">
            <a href="#case-study" className="btn btn-primary">
              View Case Study
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
