import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./i18n";
import { StatusBar } from "./components/StatusBar/StatusBar";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { StatsSection } from "./components/Stats/StatsSection";
import { ContributionGrid } from "./components/Skills/ContributionGrid";
import { ProjectCard } from "./components/Projects/ProjectCard";
import { Timeline } from "./components/Timeline/Timeline";
import CaseStudy from "./components/CaseStudy";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { GitHubSection } from "./components/GitHub/GitHubSection";
import { Particles } from "./components/Effects/Particles";
import { ParallaxBackground } from "./components/Effects/ParallaxBackground";
import { FloatingNav } from "./components/FloatingNav/FloatingNav";
import { PortfolioShowcase } from "./components/PortfolioShowcase/PortfolioShowcase";
import { usePortfolio } from "./hooks/usePortfolio";
import { useTheme } from "./styles/theme";
import { useLanguage } from "./i18n";

// ============================================================
// Inner App Content (consumes theme + data)
// ============================================================
const AppContent: React.FC = () => {
  const { data, loading, error } = usePortfolio();
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  if (loading === "idle" || loading === "loading") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.colors.text.secondary,
          fontFamily: theme.typography.fontFamily.mono,
          fontSize: theme.typography.fontSize.lg,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "2rem", marginBottom: "16px" }}>⏳</div>
          {t.common.loading}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.colors.accent.red,
          fontFamily: theme.typography.fontFamily.mono,
          padding: "20px",
          textAlign: "center",
        }}
      >
        {t.common.error}
      </div>
    );
  }

  return (
    <>
      {/* Floating Nav — outside transform container so position:fixed works */}
      <FloatingNav />

      <ParallaxBackground speed={0.015}>
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Status Bar */}
          <StatusBar
            status="online"
            branch="main"
            message={data.developer.status}
            lastUpdated={new Date()}
          />

          {/* NavBar */}
          <NavBar />

          {/* Theme Toggle — hidden, accessible via nav */}
          <div style={{ display: "none" }} aria-hidden="true">
            <button onClick={toggleTheme}>Theme</button>
          </div>

          <main
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: `0 ${theme.spacing.lg}`,
            }}
          >
            {/* Hero */}
            <Hero developer={data.developer} />

            {/* About Me */}
            <section id="about" style={{ marginTop: theme.spacing["3xl"] }}>
              <h2
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["2xl"],
                  fontWeight: 700,
                  marginBottom: theme.spacing.xl,
                  letterSpacing: theme.typography.letterSpacing.tight,
                }}
              >
                About Me
              </h2>

              {/* ── Avatar + Intro Row ── */}
              <div
                style={{
                  display: "flex",
                  gap: "36px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "36px",
                  padding: "28px",
                  backgroundColor: theme.colors.bg.secondary,
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${theme.colors.border.default}`,
                }}
              >
                {/* Avatar */}
                <div style={{ flexShrink: 0 }}>
                  <img
                    src={`${import.meta.env.BASE_URL}avatar.jpg`}
                    alt="Ali Akhmad Fauzie"
                    style={{
                      width: "160px",
                      height: "160px",
                      borderRadius: theme.borderRadius.full,
                      border: `3px solid ${theme.colors.accent.blue}`,
                      boxShadow: `0 0 40px ${theme.colors.accent.blue}30, 0 4px 20px rgba(0,0,0,0.4)`,
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Intro text */}
                <div style={{ flex: 1, minWidth: "280px" }}>
                  <p
                    style={{
                      marginBottom: "8px",
                      fontSize: theme.typography.fontSize.xl,
                      fontWeight: 700,
                      color: theme.colors.text.primary,
                    }}
                  >
                    Hi, I'm Ali Akhmad Fauzie.
                  </p>
                  <p
                    style={{
                      marginBottom: "16px",
                      color: theme.colors.accent.blue,
                      fontWeight: 600,
                      fontSize: theme.typography.fontSize.md,
                      lineHeight: 1.5,
                    }}
                  >
                    Enterprise Power Platform &amp; Dynamics 365 Solution
                    Architect | Dataverse Data Architect | AI &amp; ALM Lead
                  </p>
                  <p
                    style={{
                      color: theme.colors.text.secondary,
                      fontSize: theme.typography.fontSize.md,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    I bridge the gap between complex business operations and
                    enterprise-grade Microsoft Power Platform architecture. With
                    7+ years of service delivery and operations leadership, I
                    bring a unique dual perspective:{" "}
                    <strong style={{ color: theme.colors.text.primary }}>
                      Dataverse-first data architecture
                    </strong>{" "}
                    with Business Units, Security Roles, and polymorphic lookups
                    — not SharePoint as a production data store. SharePoint
                    Online was used only as an{" "}
                    <strong style={{ color: theme.colors.text.primary }}>
                      interim cost-optimization staging layer
                    </strong>{" "}
                    during rapid migration, with a documented Dataverse
                    Migration Blueprint as the enterprise-grade target.
                  </p>
                </div>
              </div>

              {/* ── Quote ── */}
              <blockquote
                style={{
                  borderLeft: `3px solid ${theme.colors.accent.blue}`,
                  padding: "16px 20px",
                  margin: "0 0 32px 0",
                  backgroundColor: `${theme.colors.accent.blue}08`,
                  borderRadius: `0 ${theme.borderRadius.md} ${theme.borderRadius.md} 0`,
                  color: theme.colors.text.secondary,
                  fontStyle: "italic",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                }}
              >
                "Technology is at its best when it empowers people to work
                smarter, not harder. By pairing enterprise AI and low-code
                platforms with deep operational insight, I turn repetitive
                process bottlenecks into automated, high-impact workflows."
              </blockquote>

              {/* ── Core Capabilities Cards ── */}
              <h3
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize.lg,
                  fontWeight: 600,
                  marginBottom: "14px",
                }}
              >
                Core Capabilities
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "16px",
                  marginBottom: "36px",
                }}
              >
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: theme.colors.bg.secondary,
                    borderRadius: theme.borderRadius.md,
                    border: `1px solid ${theme.colors.border.default}`,
                    boxShadow: `0 2px 12px rgba(0,0,0,0.25)`,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      color: theme.colors.accent.blue,
                      marginBottom: "10px",
                      fontSize: "0.8125rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    🛠️ Low-Code &amp; AI Development
                  </div>
                  <div
                    style={{
                      color: theme.colors.text.secondary,
                      fontSize: "0.875rem",
                      lineHeight: 1.8,
                    }}
                  >
                    • Microsoft Power Platform
                    <br />
                    • Power Apps &amp; Power Automate
                    <br />
                    • Copilot Studio &amp; Custom Agents
                    <br />
                    • Lark Automation &amp; Bots
                    <br />• SharePoint Intranet &amp; Dashboards
                  </div>
                </div>
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: theme.colors.bg.secondary,
                    borderRadius: theme.borderRadius.md,
                    border: `1px solid ${theme.colors.border.default}`,
                    boxShadow: `0 2px 12px rgba(0,0,0,0.25)`,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      color: theme.colors.accent.green,
                      marginBottom: "10px",
                      fontSize: "0.8125rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    📊 Leadership &amp; Process Optimization
                  </div>
                  <div
                    style={{
                      color: theme.colors.text.secondary,
                      fontSize: "0.875rem",
                      lineHeight: 1.8,
                    }}
                  >
                    • Team Leadership &amp; Operations
                    <br />
                    • Process Mapping &amp; Optimization
                    <br />
                    • Cross-Border Project Execution
                    <br />
                    • Business Continuity &amp; Scaling
                    <br />• Strategic Stakeholder Alignment
                  </div>
                </div>
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: theme.colors.bg.secondary,
                    borderRadius: theme.borderRadius.md,
                    border: `1px solid ${theme.colors.border.default}`,
                    boxShadow: `0 2px 12px rgba(0,0,0,0.25)`,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      color: theme.colors.accent.purple,
                      marginBottom: "10px",
                      fontSize: "0.8125rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    💻 Code &amp; Development
                  </div>
                  <div
                    style={{
                      color: theme.colors.text.secondary,
                      fontSize: "0.875rem",
                      lineHeight: 1.8,
                    }}
                  >
                    • VS Code, Git &amp; GitHub
                    <br />
                    • HTML5, CSS3 &amp; JavaScript
                    <br />
                    • TypeScript &amp; React 19
                    <br />
                    • Python &amp; PowerShell
                    <br />• Node.js &amp; Vite Tooling
                  </div>
                </div>
              </div>

              {/* ── Journey Cards ── */}
              <h3
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize.lg,
                  fontWeight: 600,
                  marginBottom: "14px",
                }}
              >
                My Journey at a Glance
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                  gap: "12px",
                  marginBottom: "36px",
                }}
              >
                {[
                  {
                    emoji: "🎓",
                    title: "Business & Leadership Roots",
                    desc: "Graduated with First Class Honors in International Business Management from Universiti Utara Malaysia (2016). Served as Executive for International Affairs on the Student Representative Council, establishing key cross-border partnerships including an MOU with Sejong University, South Korea.",
                    accent: "blue",
                  },
                  {
                    emoji: "🏆",
                    title: "Operational Excellence",
                    desc: (
                      <>
                        Spent 6+ years scaling leadership ranks at global
                        enterprise organizations including Accenture and
                        Concentrix — rising from Data Analyst to Senior Team
                        Leader and Team Manager. Recognized globally with the{" "}
                        <strong style={{ color: theme.colors.accent.blue }}>
                          Accenture Diamond Award
                        </strong>{" "}
                        for operational impact.
                      </>
                    ),
                    accent: "green",
                  },
                  {
                    emoji: "💡",
                    title: "Low-Code Digital Transformation",
                    desc: "Self-taught developer who pioneered internal low-code adoption starting in 2021. Built end-to-end operational tools using Power Apps, Power Automate, and SharePoint to keep business processes running seamlessly during remote work transitions.",
                    accent: "purple",
                  },
                  {
                    emoji: "🦾",
                    title: "Multi-Platform Developer",
                    desc: (
                      <>
                        Certified <strong>Lark Developer</strong> experienced in
                        building automated process pipelines, enterprise bots,
                        and real-time executive dashboards.
                      </>
                    ),
                    accent: "orange",
                  },
                  {
                    emoji: "🤖",
                    title: "AI & Copilot Innovation",
                    desc: (
                      <>
                        Specialize in developing intelligent
                        <strong>Copilot Agents</strong> and custom{" "}
                        <strong>Copilot Studio</strong> assistants to accelerate
                        development cycles, automate complex queries, and
                        empower teams to achieve more.
                      </>
                    ),
                    accent: "cyan",
                  },
                ].map(({ emoji, title, desc, accent }) => (
                  <div
                    key={title}
                    style={{
                      padding: "18px",
                      backgroundColor: theme.colors.bg.secondary,
                      borderRadius: theme.borderRadius.md,
                      border: `1px solid ${theme.colors.border.default}`,
                      borderTop: `3px solid ${
                        theme.colors.accent[
                          accent as keyof typeof theme.colors.accent
                        ]
                      }`,
                      boxShadow: `0 2px 12px rgba(0,0,0,0.2)`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <span style={{ fontSize: "1.25rem" }}>{emoji}</span>
                      <span
                        style={{
                          fontWeight: 600,
                          color: theme.colors.text.primary,
                          fontSize: "0.9rem",
                        }}
                      >
                        {title}
                      </span>
                    </div>
                    <div
                      style={{
                        color: theme.colors.text.secondary,
                        fontSize: "0.8125rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Career Timeline ── */}
              <h3
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize.lg,
                  fontWeight: 600,
                  marginBottom: "14px",
                }}
              >
                Career Timeline
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  marginBottom: "24px",
                }}
              >
                {[
                  [
                    "2012–2016",
                    "🎓",
                    "Universiti Utara Malaysia | First Class Honors (BBA)",
                  ],
                  [
                    "2017",
                    "🚚",
                    "Deloitte (3 Months) → Accenture (Data Analyst)",
                  ],
                  [
                    "2018–2022",
                    "🏢",
                    "Promoted to Jr Team Lead → Sr Team Lead (Accenture)",
                  ],
                  [
                    "2021",
                    "💡",
                    "Initiated Power Platform Adoption (COVID-19 Remote Work)",
                  ],
                  [
                    "2023–2024",
                    "👔",
                    "Team Manager — Concentrix | Certified Lark Developer",
                  ],
                  [
                    "2024–2025",
                    "🤖",
                    "AI-Assisted Development & Copilot Studio Architecture",
                  ],
                  [
                    "2025–2026",
                    "🚀",
                    "Enterprise Modernization: 361 Forms → M365 Power Platform",
                  ],
                ].map(([date, emoji, desc]) => (
                  <div
                    key={date}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "baseline",
                      padding: "10px 14px",
                      borderRadius: theme.borderRadius.sm,
                      backgroundColor: theme.colors.bg.secondary,
                      border: `1px solid ${theme.colors.border.default}`,
                      fontSize: "0.8125rem",
                      transition: "border-color 0.2s, background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        theme.colors.accent.blue;
                      e.currentTarget.style.backgroundColor =
                        theme.colors.bg.tertiary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        theme.colors.border.default;
                      e.currentTarget.style.backgroundColor =
                        theme.colors.bg.secondary;
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: theme.colors.accent.blue,
                        minWidth: "90px",
                        fontFamily: theme.typography.fontFamily.mono,
                      }}
                    >
                      {date}
                    </span>
                    <span>{emoji}</span>
                    <span style={{ color: theme.colors.text.secondary }}>
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Resume Banner */}
            <div
              className="resume-banner"
              style={{
                marginTop: theme.spacing.xl,
                marginBottom: theme.spacing.xl,
              }}
            >
              <div>
                <strong
                  style={{
                    color: theme.colors.text.primary,
                    fontSize: theme.typography.fontSize.md,
                  }}
                >
                  📄 Download My Resume
                </strong>
                <p
                  style={{
                    color: theme.colors.text.muted,
                    fontSize: theme.typography.fontSize.sm,
                    marginTop: "4px",
                  }}
                >
                  Available as HTML and PDF — includes full work history,
                  certifications, and references
                </p>
              </div>
              <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                <a
                  href={`${import.meta.env.BASE_URL}resume.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: "10px 20px", fontSize: "0.8125rem" }}
                >
                  View HTML
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}resume.html?print`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: "10px 20px", fontSize: "0.8125rem" }}
                >
                  Download PDF
                </a>
              </div>
            </div>

            {/* Stats */}
            <StatsSection metrics={data.metrics} animate />

            {/* Skills */}
            <section id="skills" style={{ marginTop: theme.spacing["3xl"] }}>
              <h2
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["2xl"],
                  fontWeight: 700,
                  marginBottom: theme.spacing.lg,
                  letterSpacing: theme.typography.letterSpacing.tight,
                }}
              >
                Skills & Capabilities
              </h2>
              <ContributionGrid skills={data.skills} />
            </section>

            {/* Impact Metrics Banner — Enterprise KPIs */}
            <section style={{ marginTop: theme.spacing["3xl"] }}>
              <div className="impact-banner">
                <div className="impact-item">
                  <span className="impact-value">$960K</span>
                  <span className="impact-label">
                    Annual License Cost Avoided
                  </span>
                  <span className="impact-desc">
                    SharePoint Online interim deployment eliminated premium
                    connector licensing
                  </span>
                </div>
                <div className="impact-divider" />
                <div className="impact-item">
                  <span className="impact-value">70%</span>
                  <span className="impact-label">Delivery Time Reduction</span>
                  <span className="impact-desc">
                    AI-assisted pipelines vs. manual development cycles
                  </span>
                </div>
                <div className="impact-divider" />
                <div className="impact-item">
                  <span className="impact-value">98%+</span>
                  <span className="impact-label">SLA Compliance</span>
                  <span className="impact-desc">
                    Across 361 migrated business applications and 2,000+ users
                  </span>
                </div>
                <div className="impact-divider" />
                <div className="impact-item">
                  <span className="impact-value">98%</span>
                  <span className="impact-label">Data Accuracy Achieved</span>
                  <span className="impact-desc">
                    Typed SharePoint/Dataverse columns vs. 70% with legacy
                    free-text
                  </span>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section id="projects" style={{ marginTop: theme.spacing["3xl"] }}>
              <h2
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["2xl"],
                  fontWeight: 700,
                  marginBottom: theme.spacing.lg,
                  letterSpacing: theme.typography.letterSpacing.tight,
                }}
              >
                Featured Projects
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: theme.spacing.md,
                }}
              >
                {data.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>

            {/* GitHub Repository Showcase */}
            <section style={{ marginTop: theme.spacing["2xl"] }}>
              <GitHubSection username={data.developer.github} limit={6} />
            </section>

            {/* Timeline */}
            <section id="journey" style={{ marginTop: theme.spacing["3xl"] }}>
              <h2
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["2xl"],
                  fontWeight: 700,
                  marginBottom: theme.spacing.lg,
                  letterSpacing: theme.typography.letterSpacing.tight,
                }}
              >
                Professional Journey
              </h2>
              <Timeline events={data.timeline} />
            </section>

            {/* ── Enterprise Architecture & Governance ── */}
            <section
              id="enterprise-architecture"
              style={{ marginTop: theme.spacing["3xl"] }}
            >
              <h2
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["2xl"],
                  fontWeight: 700,
                  marginBottom: theme.spacing.sm,
                  letterSpacing: theme.typography.letterSpacing.tight,
                }}
              >
                Enterprise Architecture &amp; Governance
              </h2>
              <p
                style={{
                  color: theme.colors.text.secondary,
                  fontSize: theme.typography.fontSize.md,
                  marginBottom: theme.spacing.lg,
                  maxWidth: "800px",
                }}
              >
                Dataverse-first architecture with enterprise ALM, security role
                inheritance, and managed solution governance. SharePoint Online
                used only as a cost-optimization staging layer — not the target
                production data architecture.
              </p>

              {/* Dataverse ERD */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                  gap: theme.spacing.md,
                  marginBottom: theme.spacing.xl,
                }}
              >
                {/* ERD Card */}
                <div
                  style={{
                    padding: "24px",
                    backgroundColor: theme.colors.bg.secondary,
                    borderRadius: theme.borderRadius.lg,
                    border: `1px solid ${theme.colors.border.default}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "16px",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>🏛️</span>
                    <h3
                      style={{
                        color: theme.colors.text.primary,
                        fontSize: theme.typography.fontSize.md,
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      Dataverse Entity-Relationship Model
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {[
                      "MainDB_{Dept} parent tables with FormCode discriminator",
                      "Child task tables with polymorphic lookups",
                      "Business Unit hierarchy → departmental isolation",
                      "Security Role inheritance (5-tier approval)",
                      "Field Security Profiles for PII/financial data",
                      "Alternate keys for Oracle ERP bidirectional sync",
                    ].map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "0.8125rem",
                          color: theme.colors.text.secondary,
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: theme.colors.accent.blue,
                            flexShrink: 0,
                          }}
                        >
                          →
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Model Card */}
                <div
                  style={{
                    padding: "24px",
                    backgroundColor: theme.colors.bg.secondary,
                    borderRadius: theme.borderRadius.lg,
                    border: `1px solid ${theme.colors.border.default}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "16px",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>🔒</span>
                    <h3
                      style={{
                        color: theme.colors.text.primary,
                        fontSize: theme.typography.fontSize.md,
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      Security &amp; Compliance Architecture
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {[
                      "Microsoft Entra ID: Conditional Access, MFA, SSO",
                      "Dataverse Security Roles with row-level isolation",
                      "Field Security Profiles for sensitive columns",
                      "GxP immutable audit trails (column-level tracking)",
                      "WCAG 2.2 AA accessibility (38+ anti-patterns)",
                      "OWASP Top 10 security (55+ anti-patterns)",
                    ].map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "0.8125rem",
                          color: theme.colors.text.secondary,
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: theme.colors.accent.green,
                            flexShrink: 0,
                          }}
                        >
                          →
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ALM Pipeline Card */}
                <div
                  style={{
                    padding: "24px",
                    backgroundColor: theme.colors.bg.secondary,
                    borderRadius: theme.borderRadius.lg,
                    border: `1px solid ${theme.colors.border.default}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "16px",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>🔄</span>
                    <h3
                      style={{
                        color: theme.colors.text.primary,
                        fontSize: theme.typography.fontSize.md,
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      ALM &amp; Solution Governance
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {[
                      "Solution Segmentation: Holding → Feature Area managed solutions",
                      "Environment Variables for per-environment configuration",
                      "Connection References for data source portability",
                      "PAC CLI: solution clone, pack/unpack, code generate",
                      "Staged promotion: Dev → Build → Test → Prod",
                      "Solution Checker on every PR for compliance gates",
                    ].map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "0.8125rem",
                          color: theme.colors.text.secondary,
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: theme.colors.accent.purple,
                            flexShrink: 0,
                          }}
                        >
                          →
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* C# Plugins & PCF Card */}
                <div
                  style={{
                    padding: "24px",
                    backgroundColor: theme.colors.bg.secondary,
                    borderRadius: theme.borderRadius.lg,
                    border: `1px solid ${theme.colors.border.default}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "16px",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>⚡</span>
                    <h3
                      style={{
                        color: theme.colors.text.primary,
                        fontSize: theme.typography.fontSize.md,
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      Pro-Code Extensions
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {[
                      "C# Dataverse Plugins on Pre/Post-Operation pipeline",
                      "PCF Controls (TypeScript/React) for Model-Driven Apps",
                      "Application Insights telemetry for plugin monitoring",
                      "Custom workflow activities for complex business logic",
                      "Server-side OData filtering for lookup components",
                    ].map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "0.8125rem",
                          color: theme.colors.text.secondary,
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: theme.colors.accent.orange,
                            flexShrink: 0,
                          }}
                        >
                          →
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Case Study */}
            <CaseStudy />

            {/* Enterprise Application Portfolio Showcase */}
            <PortfolioShowcase />

            {/* Code & Architecture Deep Dive */}
            <section
              id="architecture"
              style={{ marginTop: theme.spacing["3xl"] }}
            >
              <h2
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["2xl"],
                  fontWeight: 700,
                  marginBottom: theme.spacing.lg,
                  letterSpacing: theme.typography.letterSpacing.tight,
                }}
              >
                Technical Execution &amp; Architecture Patterns
              </h2>
              <p
                style={{
                  color: theme.colors.text.secondary,
                  fontSize: theme.typography.fontSize.md,
                  marginBottom: theme.spacing.lg,
                }}
              >
                Enterprise-grade patterns powering the migration — from PA YAML
                screen definitions to C# Dataverse Plugins and AI-assisted
                development pipelines.
              </p>

              {/* PA YAML Code Snippet */}
              <div className="code-snippet-card">
                <div className="code-snippet-header">
                  <span
                    className="code-snippet-dot"
                    style={{ backgroundColor: "#FF5F56" }}
                  />
                  <span
                    className="code-snippet-dot"
                    style={{ backgroundColor: "#FFBD2E" }}
                  />
                  <span
                    className="code-snippet-dot"
                    style={{ backgroundColor: "#27C93F" }}
                  />
                  <span className="code-snippet-filename">
                    scrIT_ServiceRequest_New.pa.yaml — Canvas Screen Definition
                    (PA YAML v3.0)
                  </span>
                </div>
                <pre className="code-snippet-body">{`# Screen: IT Service Request — New Submission
# Schema: Power Apps Source Code v3.0

scrIT_ServiceRequest_New As Screen:
  Fill: =AppTheme.Colors.Primary
  LoadingSpinnerColor: =AppTheme.Colors.Primary

  # ── Data Sources ──
  MainDB_IT As SharePointDataSource:
    Table: =[@MainDB_IT]

  # ── Requestor Info (auto-populated) ──
  lblRequestor As Label:
    Text: ="Requestor: " & User().FullName

  # ── Category Dropdown (Choice from SharePoint) ──
  ddlCategory As Dropdown:
    Items: =Choices(MainDB_IT.Category)
    OnChange: |=
      Set(gblSelectedCategory, Self.Selected.Value);

  # ── Submit Button (Patch to SharePoint) ──
  btnSubmit As Button:
    Text: ="Submit Request"
    OnSelect: |=
      Patch(MainDB_IT, Defaults(MainDB_IT), {
        Title: txtTitle.Text,
        Category: ddlCategory.Selected,
        FormCode: "SR-001",
        Status: "Submitted",
        RequestorEmail: User().Email
      });
      Navigate(scrIT_ServiceRequest_Detail, ScreenTransition.Fade)`}</pre>
              </div>

              {/* AI Pipeline Architecture */}
              <div
                className="code-snippet-card"
                style={{ marginTop: theme.spacing.lg }}
              >
                <div className="code-snippet-header">
                  <span
                    className="code-snippet-dot"
                    style={{ backgroundColor: "#FF5F56" }}
                  />
                  <span
                    className="code-snippet-dot"
                    style={{ backgroundColor: "#FFBD2E" }}
                  />
                  <span
                    className="code-snippet-dot"
                    style={{ backgroundColor: "#27C93F" }}
                  />
                  <span className="code-snippet-filename">
                    AI-Assisted Development Pipeline (TypeScript)
                  </span>
                </div>
                <pre className="code-snippet-body">{`// AI Development Pipeline — 12 automated workflows
// Each pipeline chains specialized AI agents for code generation

interface AgentPipeline {
  name: string;
  agents: string[];
  input: 'DXL' | 'TSX' | 'PDF' | 'Spec' | 'Schema';
  output: 'PA-YAML' | 'TSX-Screen' | 'Flow-Def' | 'Test-Suite';
}

const migrationPipelines: AgentPipeline[] = [
  {
    name: 'Form Migration Pipeline',
    agents: ['legacy-migration-agent', 'specification',
             'refine-issue', 'implementation-plan'],
    input: 'DXL',
    output: 'PA-YAML',
  },
  {
    name: 'TSX Screen Development',
    agents: ['expert-react-frontend-engineer', 'context-architect',
             'tdd-red', 'tdd-green', 'tdd-refactor'],
    input: 'Spec',
    output: 'TSX-Screen',
  },
  {
    name: 'Canvas App Migration',
    agents: ['canvas-migration-architect', 'canvas-screen-builder',
             'canvas-app-screen-yaml-expert', 'msapp-builder'],
    input: 'TSX',
    output: 'PA-YAML',
  },
];`}</pre>
              </div>
            </section>

            {/* Performance Benchmarks */}
            <section
              id="performance"
              style={{ marginTop: theme.spacing["3xl"] }}
            >
              <h2
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["2xl"],
                  fontWeight: 700,
                  marginBottom: theme.spacing.sm,
                  letterSpacing: theme.typography.letterSpacing.tight,
                }}
              >
                ⚡ Performance Benchmarks
              </h2>
              <p
                style={{
                  color: theme.colors.text.secondary,
                  fontSize: theme.typography.fontSize.md,
                  marginBottom: theme.spacing.lg,
                }}
              >
                Core Web Vitals & Lighthouse audit scores for the React 19
                code-first enterprise portal — meeting WCAG 2.2 AA, OWASP Top
                10, and Core Web Vitals governance standards.
              </p>
              <div className="benchmarks-grid">
                <div className="benchmark-card">
                  <div className="benchmark-ring green">
                    <svg viewBox="0 0 36 36" className="benchmark-ring-svg">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        opacity="0.15"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3FB950"
                        strokeWidth="3"
                        strokeDasharray="98, 100"
                      />
                    </svg>
                    <span className="benchmark-score">98</span>
                  </div>
                  <span className="benchmark-label">Performance</span>
                  <span className="benchmark-detail">Lighthouse Score</span>
                </div>
                <div className="benchmark-card">
                  <div className="benchmark-ring green">
                    <svg viewBox="0 0 36 36" className="benchmark-ring-svg">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        opacity="0.15"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3FB950"
                        strokeWidth="3"
                        strokeDasharray="100, 100"
                      />
                    </svg>
                    <span className="benchmark-score">100</span>
                  </div>
                  <span className="benchmark-label">Accessibility</span>
                  <span className="benchmark-detail">
                    WCAG 2.2 AA Compliant
                  </span>
                </div>
                <div className="benchmark-card">
                  <div className="benchmark-ring green">
                    <svg viewBox="0 0 36 36" className="benchmark-ring-svg">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        opacity="0.15"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3FB950"
                        strokeWidth="3"
                        strokeDasharray="95, 100"
                      />
                    </svg>
                    <span className="benchmark-score">95</span>
                  </div>
                  <span className="benchmark-label">Best Practices</span>
                  <span className="benchmark-detail">OWASP Top 10 Secure</span>
                </div>
                <div className="benchmark-card">
                  <div className="benchmark-ring green">
                    <svg viewBox="0 0 36 36" className="benchmark-ring-svg">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        opacity="0.15"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3FB950"
                        strokeWidth="3"
                        strokeDasharray="92, 100"
                      />
                    </svg>
                    <span className="benchmark-score">92</span>
                  </div>
                  <span className="benchmark-label">SEO</span>
                  <span className="benchmark-detail">Lighthouse Audit</span>
                </div>
              </div>
              <div
                className="cwv-metrics"
                style={{ marginTop: theme.spacing.lg }}
              >
                <div className="cwv-card">
                  <span className="cwv-label">LCP</span>
                  <span className="cwv-value green">1.2s</span>
                  <span className="cwv-target">Target: &lt; 2.5s</span>
                </div>
                <div className="cwv-card">
                  <span className="cwv-label">INP</span>
                  <span className="cwv-value green">48ms</span>
                  <span className="cwv-target">Target: &lt; 200ms</span>
                </div>
                <div className="cwv-card">
                  <span className="cwv-label">CLS</span>
                  <span className="cwv-value green">0.02</span>
                  <span className="cwv-target">Target: &lt; 0.1</span>
                </div>
                <div className="cwv-card">
                  <span className="cwv-label">TTFB</span>
                  <span className="cwv-value green">180ms</span>
                  <span className="cwv-target">Target: &lt; 800ms</span>
                </div>
              </div>
            </section>

            {/* Outcomes & Impact */}
            <section
              id="testimonials"
              style={{ marginTop: theme.spacing["3xl"] }}
            >
              <h2
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["2xl"],
                  fontWeight: 700,
                  marginBottom: theme.spacing.sm,
                  letterSpacing: theme.typography.letterSpacing.tight,
                }}
              >
                📊 Measured Outcomes & Department Impact
              </h2>
              <p
                style={{
                  color: theme.colors.text.secondary,
                  fontSize: theme.typography.fontSize.md,
                  marginBottom: theme.spacing.lg,
                }}
              >
                Results observed across departments during the first 6 months
                post-deployment.
              </p>
              <div className="testimonials-grid">
                <div className="testimonial-card">
                  <div className="testimonial-quote-mark">📈</div>
                  <p className="testimonial-text">
                    IT Service Request processing reduced from 3-5 days
                    (email-based) to under 4 hours with automated category
                    routing and SLA tracking. Measured across IT department in
                    the first 3 months post-deployment.
                  </p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">IT</div>
                    <div>
                      <strong style={{ fontSize: "0.85rem", color: "#F0F6FC" }}>
                        IT Department
                      </strong>
                      <div style={{ fontSize: "0.7rem", color: "#8B949E" }}>
                        22 forms migrated · First deployment team
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-quote-mark">📈</div>
                  <p className="testimonial-text">
                    E-Procurement system with bidirectional ERP sync replaced
                    manual PO data entry. Procurement modules now sync purchase
                    orders and goods receipts in real-time via Custom Connectors
                    to Oracle PowerBiz.
                  </p>
                  <div className="testimonial-author">
                    <div
                      className="testimonial-avatar"
                      style={{ background: "#3FB95020", color: "#3FB950" }}
                    >
                      PR
                    </div>
                    <div>
                      <strong style={{ fontSize: "0.85rem", color: "#F0F6FC" }}>
                        Procurement Division
                      </strong>
                      <div style={{ fontSize: "0.7rem", color: "#8B949E" }}>
                        5 modules · 200+ vendor portal users
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-quote-mark">📈</div>
                  <p className="testimonial-text">
                    Workforce status tracking automated with Power Automate
                    flows and Power BI dashboards. Manual status reporting
                    eliminated for operations teams — tracked via real-time
                    SharePoint list updates and automated aggregation.
                  </p>
                  <div className="testimonial-author">
                    <div
                      className="testimonial-avatar"
                      style={{ background: "#F0883E20", color: "#F0883E" }}
                    >
                      OPS
                    </div>
                    <div>
                      <strong style={{ fontSize: "0.85rem", color: "#F0F6FC" }}>
                        Operations Leadership
                      </strong>
                      <div style={{ fontSize: "0.7rem", color: "#8B949E" }}>
                        8 teams · Automated status aggregation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Gallery (includes Power Automate flows) */}
            <Gallery />

            {/* Downloads */}
            <section
              id="downloads"
              style={{
                marginTop: theme.spacing["3xl"],
                marginBottom: theme.spacing["2xl"],
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["2xl"],
                  fontWeight: 700,
                  marginBottom: theme.spacing.md,
                }}
              >
                Downloads
              </h2>
              <p
                style={{
                  color: theme.colors.text.secondary,
                  fontSize: theme.typography.fontSize.md,
                  marginBottom: theme.spacing.lg,
                }}
              >
                Resume, portfolio resources, and inspectable enterprise code
                samples available for download.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={`${import.meta.env.BASE_URL}resume.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "12px 24px",
                    backgroundColor: theme.colors.accent.blue,
                    color: theme.colors.text.inverse,
                    borderRadius: theme.borderRadius.md,
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: theme.typography.fontSize.sm,
                    transition: theme.transitions.fast,
                  }}
                >
                  &#x1F4C4; View Resume (HTML)
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}resume.html?print`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "transparent",
                    color: theme.colors.text.primary,
                    border: `1.5px solid ${theme.colors.border.default}`,
                    borderRadius: theme.borderRadius.md,
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: theme.typography.fontSize.sm,
                    transition: theme.transitions.fast,
                  }}
                >
                  &#x1F4E5; Download Resume (PDF)
                </a>
              </div>

              {/* ── Code Samples ── */}
              <h3
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize.lg,
                  fontWeight: 600,
                  marginTop: theme.spacing["2xl"],
                  marginBottom: theme.spacing.md,
                }}
              >
                🔬 Technical Code Samples
              </h3>
              <p
                style={{
                  color: theme.colors.text.secondary,
                  fontSize: theme.typography.fontSize.sm,
                  marginBottom: theme.spacing.lg,
                }}
              >
                Inspectable enterprise artifacts: CI/CD pipelines, C# Plugins,
                PCF Controls, OpenAPI specs, and Dataverse ERD architecture.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  {
                    label: "Azure DevOps CI/CD Pipeline",
                    href: "code-samples/deployment-settings-pipeline.yml",
                    icon: "⚙️",
                  },
                  {
                    label: "GitHub Actions — Solution ALM",
                    href: "https://github.com/altechsolution123/altechsolution_33/blob/main/.github/workflows/power-platform-cicd.yml",
                    icon: "🔁",
                  },
                  {
                    label: "C# Plugin — PO Pre-Validation",
                    href: "code-samples/purchase-order-prevalidation-plugin.cs",
                    icon: "🔌",
                  },
                  {
                    label: "PCF Control — Approval Tree",
                    href: "code-samples/approval-tree-pcf-control.tsx",
                    icon: "🌲",
                  },
                  {
                    label: "OpenAPI — Oracle ERP Connector",
                    href: "code-samples/oracle-powerbiz-erp-connector.yaml",
                    icon: "🔗",
                  },
                  {
                    label: "Dataverse ERD — Mermaid Diagram",
                    href: "code-samples/dataverse-erd.md",
                    icon: "📐",
                  },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={`${import.meta.env.BASE_URL}${href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    style={{
                      padding: "10px 18px",
                      backgroundColor: theme.colors.bg.secondary,
                      color: theme.colors.text.primary,
                      border: `1px solid ${theme.colors.border.default}`,
                      borderRadius: theme.borderRadius.md,
                      fontWeight: 500,
                      textDecoration: "none",
                      fontSize: "0.8125rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: theme.transitions.fast,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        theme.colors.accent.blue;
                      e.currentTarget.style.backgroundColor =
                        theme.colors.bg.elevation[2];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        theme.colors.border.default;
                      e.currentTarget.style.backgroundColor =
                        theme.colors.bg.secondary;
                    }}
                  >
                    <span>{icon}</span>
                    {label}
                  </a>
                ))}
              </div>
            </section>

            {/* Contact */}
            <Contact />
          </main>

          {/* Floating Sidebar Navigation */}
          <FloatingNav />

          {/* Footer */}
          <Footer />
        </div>
      </ParallaxBackground>
    </>
  );
};

// ============================================================
// Root App
// ============================================================
const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider defaultMode="dark">
        <Particles
          count={40}
          color="#58A6FF"
          opacity={0.25}
          speed={0.4}
          connectionDistance={100}
        />
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
