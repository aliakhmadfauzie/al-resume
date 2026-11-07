import { personalInfo } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Interested in enterprise Power Platform architecture, M365 migrations,
          or AI-enabled development? Let's discuss how I can help your organization.
        </p>
        <div className="contact-links">
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
            <span aria-hidden="true">✉</span>
            Send an Email
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <span aria-hidden="true">🔗</span>
            Connect on LinkedIn
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <span aria-hidden="true">💻</span>
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
