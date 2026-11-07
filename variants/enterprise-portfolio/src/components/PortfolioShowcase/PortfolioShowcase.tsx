import React, { useState, useEffect } from "react";
import { useTheme } from "../../styles/theme";
import styles from "./PortfolioShowcase.module.css";

// ============================================================
// Types matching portfolio-apps.json schema
// ============================================================
interface GalleryAssets {
  thumbnail: string;
  screenshots: string[];
}

interface Project {
  id: string;
  title: string;
  formCode?: string;
  department: string;
  impactSummary: string;
  keyFeatures: string[];
  techStack: string[];
  isMigration: boolean;
  legacySystem?: string;
  status: string;
  canvasScreens: number;
  galleryAssets: GalleryAssets;
}

interface DepartmentGroup {
  departmentName: string;
  departmentKey: string;
  projects: Project[];
}

interface TechShowcase {
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}

interface PortfolioData {
  portfolioSummary: {
    totalApplications: number;
    totalDeployedApps: number;
    totalCanvasScreens: number;
    totalTypeScriptComponents: number;
    totalAutomationScripts: number;
    totalAIAgents: number;
    departmentsCovered: string[];
    techStackHighlights: string[];
  };
  departments: DepartmentGroup[];
  technologyShowcase?: {
    aiAndAutomation: TechShowcase;
    architecture: TechShowcase;
    qualityAndCompliance: TechShowcase & { standards: string[] };
  };
}

const STATUS_COLORS: Record<string, string> = {
  complete: "#3FB950",
  verified: "#3FB950",
  built: "#58A6FF",
  deployed: "#3FB950",
  ready: "#D29922",
  partial: "#D29922",
  blocked: "#F85149",
  pending: "#8B949E",
};

const STATUS_LABELS: Record<string, string> = {
  complete: "Production",
  verified: "Verified",
  built: "Built",
  deployed: "Deployed",
  ready: "Ready for UAT",
  partial: "In Progress",
  blocked: "Blocked",
  pending: "Planned",
};

// ============================================================
// Component
// ============================================================
export const PortfolioShowcase: React.FC = () => {
  const { theme } = useTheme();
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeDept, setActiveDept] = useState<string>("it");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/portfolio-apps.json`)
      .then((r) => r.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="portfolio-showcase" style={{ marginTop: "64px" }}>
        <div
          style={{
            textAlign: "center",
            color: theme.colors.text.muted,
            padding: "40px",
          }}
        >
          Loading portfolio showcase...
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section id="portfolio-showcase" style={{ marginTop: "64px" }}>
        <div
          style={{
            textAlign: "center",
            color: theme.colors.accent.red,
            padding: "40px",
          }}
        >
          Failed to load portfolio data.
        </div>
      </section>
    );
  }

  const activeDepartment = data.departments.find(
    (d) => d.departmentKey === activeDept,
  );

  return (
    <section
      id="portfolio-showcase"
      style={{ marginTop: theme.spacing["3xl"] }}
    >
      {/* Header */}
      <h2
        style={{
          color: theme.colors.text.primary,
          fontSize: theme.typography.fontSize["2xl"],
          fontWeight: 700,
          marginBottom: theme.spacing.sm,
          letterSpacing: theme.typography.letterSpacing.tight,
        }}
      >
        📂 Enterprise Application Portfolio
      </h2>
      <p
        style={{
          color: theme.colors.text.secondary,
          fontSize: theme.typography.fontSize.md,
          marginBottom: theme.spacing.lg,
        }}
      >
        {data.portfolioSummary.totalDeployedApps} Production Apps ·{' '}
        {data.portfolioSummary.totalApplications} Applications Catalogued —{' '}
        across {data.portfolioSummary.departmentsCovered.length}{' '}
        departments with{' '}
        {data.portfolioSummary.totalCanvasScreens.toLocaleString()}+ Canvas
        screens, {data.portfolioSummary.totalTypeScriptComponents}+ reusable components,
        and {data.portfolioSummary.totalAIAgents}+ AI automation agents.
      </p>
      <p
        style={{
          color: theme.colors.text.muted,
          fontSize: '0.8125rem',
          marginBottom: theme.spacing.xl,
          lineHeight: 1.6,
        }}
      >
        📋 {data.portfolioSummary.totalApplications} legacy Lotus Domino forms catalogued across 28+ departments.{' '}
        {data.portfolioSummary.totalDeployedApps} are live in production on Power Apps;{' '}
        remaining are in pipeline — built, verified, or awaiting UAT deployment.
      </p>

      {/* Summary Stats Bar */}
      <div
        className={`${styles.statsGrid} portfolio-stats-grid`}
      >
        {[
          {
            label: "Apps Modernized",
            value: data.portfolioSummary.totalApplications,
          },
          {
            label: "Production Apps",
            value: data.portfolioSummary.totalDeployedApps,
          },
          {
            label: "Canvas Screens",
            value: data.portfolioSummary.totalCanvasScreens.toLocaleString(),
          },
          {
            label: "Components",
            value: data.portfolioSummary.totalTypeScriptComponents,
          },
        ].map(({ label, value }) => (
          <div
            key={label}
            className={`${styles.statsCard} portfolio-stats-card`}
            style={{
              backgroundColor: theme.colors.bg.secondary,
              border: `1px solid ${theme.colors.border.default}`,
              borderRadius: theme.borderRadius.md,
            }}
          >
            <div
              className={styles.statsValue}
              style={{
                color: theme.colors.accent.blue,
                fontFamily: theme.typography.fontFamily.mono,
              }}
            >
              {value}
            </div>
            <div
              className={styles.statsLabel}
              style={{ color: theme.colors.text.muted }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Department Tabs */}
      <div
        className={`${styles.deptTabs} portfolio-dept-tabs`}
        style={{
          marginBottom: theme.spacing.xl,
          backgroundColor: theme.colors.bg.secondary,
          borderRadius: theme.borderRadius.md,
          border: `1px solid ${theme.colors.border.default}`,
        }}
      >
        {data.departments.map((dept) => (
          <button
            key={dept.departmentKey}
            className="portfolio-dept-tab"
            onClick={() => {
              setActiveDept(dept.departmentKey);
              setExpandedProject(null);
            }}
            style={{
              padding: "8px 16px",
              borderRadius: theme.borderRadius.sm,
              border: "none",
              cursor: "pointer",
              backgroundColor:
                activeDept === dept.departmentKey
                  ? theme.colors.accent.blue
                  : "transparent",
              color:
                activeDept === dept.departmentKey
                  ? theme.colors.text.inverse
                  : theme.colors.text.secondary,
              fontSize: "0.8125rem",
              fontWeight: activeDept === dept.departmentKey ? 600 : 400,
              transition: "all 0.15s ease",
            }}
          >
            {dept.departmentName}
            <span
              style={{
                marginLeft: "6px",
                fontSize: "0.6875rem",
                opacity: 0.7,
                fontFamily: theme.typography.fontFamily.mono,
              }}
            >
              {dept.projects.length}
            </span>
          </button>
        ))}
      </div>

      {/* Project Cards */}
      {activeDepartment && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {activeDepartment.projects.map((project) => {
            const isExpanded = expandedProject === project.id;
            const statusColor = STATUS_COLORS[project.status] || "#8B949E";

            return (
              <div
                key={project.id}
                style={{
                  border: `1px solid ${isExpanded ? theme.colors.accent.blue : theme.colors.border.default}`,
                  borderRadius: theme.borderRadius.md,
                  backgroundColor: theme.colors.bg.secondary,
                  overflow: "hidden",
                  transition: "border-color 0.2s ease",
                }}
              >
                {/* Card Header — clickable */}
                <button
                  className="portfolio-project-header"
                  onClick={() =>
                    setExpandedProject(isExpanded ? null : project.id)
                  }
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "16px 20px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    color: theme.colors.text.primary,
                    textAlign: "left",
                  }}
                >
                  {/* Status dot */}
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: statusColor,
                      flexShrink: 0,
                      boxShadow: `0 0 6px ${statusColor}60`,
                    }}
                  />

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      className="portfolio-project-title"
                      style={{
                        fontWeight: 600,
                        fontSize: theme.typography.fontSize.md,
                        color: theme.colors.text.primary,
                      }}
                    >
                      {project.title}
                    </div>
                    <div
                      className="portfolio-project-meta"
                      style={{
                        fontSize: "0.75rem",
                        color: theme.colors.text.muted,
                        marginTop: "2px",
                        display: "flex",
                        gap: "12px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          color: statusColor,
                          fontWeight: 500,
                        }}
                      >
                        {STATUS_LABELS[project.status] || project.status}
                      </span>
                      {project.formCode && (
                        <span>Form: {project.formCode}</span>
                      )}
                      {project.canvasScreens > 0 && (
                        <span>{project.canvasScreens} screens</span>
                      )}
                      {project.isMigration && (
                        <span style={{ color: theme.colors.accent.blue }}>
                          🔄 Modernized
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div
                    className="portfolio-project-tags"
                    style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}
                  >
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "2px 8px",
                          fontSize: "0.625rem",
                          fontWeight: 500,
                          borderRadius: theme.borderRadius.full,
                          backgroundColor: `${theme.colors.accent.blue}15`,
                          color: theme.colors.accent.blue,
                          fontFamily: theme.typography.fontFamily.mono,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span
                        style={{
                          fontSize: "0.625rem",
                          color: theme.colors.text.muted,
                        }}
                      >
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Chevron */}
                  <span
                    style={{
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.2s ease",
                      color: theme.colors.text.muted,
                      fontSize: "0.75rem",
                    }}
                  >
                    ▼
                  </span>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div
                    style={{
                      padding: "0 20px 20px 20px",
                      borderTop: `1px solid ${theme.colors.border.default}`,
                    }}
                  >
                    {/* Impact Summary */}
                    <p
                      style={{
                        color: theme.colors.text.secondary,
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                        marginTop: "16px",
                      }}
                    >
                      {project.impactSummary}
                    </p>

                    {/* Key Features */}
                    <div style={{ marginTop: "16px" }}>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: theme.colors.text.muted,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          marginBottom: "8px",
                        }}
                      >
                        Key Features
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                        }}
                      >
                        {project.keyFeatures.map((feature, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "baseline",
                              gap: "8px",
                              fontSize: "0.8125rem",
                              color: theme.colors.text.secondary,
                            }}
                          >
                            <span
                              style={{
                                color: theme.colors.accent.blue,
                                fontSize: "0.5rem",
                              }}
                            >
                              ●
                            </span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Full Tech Stack */}
                    <div style={{ marginTop: "16px" }}>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: theme.colors.text.muted,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          marginBottom: "8px",
                        }}
                      >
                        Tech Stack
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          flexWrap: "wrap",
                        }}
                      >
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              padding: "3px 10px",
                              fontSize: "0.6875rem",
                              borderRadius: theme.borderRadius.full,
                              backgroundColor: theme.colors.bg.tertiary,
                              color: theme.colors.text.secondary,
                              border: `1px solid ${theme.colors.border.default}`,
                              fontFamily: theme.typography.fontFamily.mono,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Legacy Badge */}
                    {project.isMigration && project.legacySystem && (
                      <div
                        style={{
                          marginTop: "12px",
                          padding: "8px 12px",
                          borderRadius: theme.borderRadius.sm,
                          backgroundColor: `${theme.colors.accent.blue}10`,
                          border: `1px solid ${theme.colors.accent.blue}20`,
                          fontSize: "0.75rem",
                          color: theme.colors.accent.blue,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        🔄 {project.legacySystem}
                      </div>
                    )}

                    {/* Gallery Thumbnail */}
                    {project.galleryAssets?.thumbnail && (
                      <img
                        src={`${import.meta.env.BASE_URL}${project.galleryAssets.thumbnail}`}
                        alt={`${project.title} screenshot`}
                        className={styles.projectThumbnail}
                        loading="lazy"
                      />
                    )}

                    {/* Gallery Screenshots */}
                    {project.galleryAssets?.screenshots && project.galleryAssets.screenshots.length > 1 && (
                      <div className={styles.projectThumbnails}>
                        {project.galleryAssets.screenshots.map((shot, idx) => (
                          <img
                            key={idx}
                            src={`${import.meta.env.BASE_URL}${shot}`}
                            alt={`${project.title} screen ${idx + 1}`}
                            loading="lazy"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
