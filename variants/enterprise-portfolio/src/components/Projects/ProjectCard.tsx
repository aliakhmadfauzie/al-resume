import React, { useState } from "react";
import type { ProjectCardProps, Project } from "../../types/design-system";
import styles from "./ProjectCard.module.css";

// ============================================================
// Status Badge
// ============================================================
const STATUS_MAP: Record<Project["status"], { color: string; icon: string }> = {
  merged: { color: "var(--accent-green)", icon: "✓" },
  open: { color: "var(--accent-blue)", icon: "○" },
  closed: { color: "var(--accent-red)", icon: "✕" },
};

const StatusBadge: React.FC<{ status: Project["status"] }> = ({ status }) => {
  const { color, icon } = STATUS_MAP[status];
  return (
    <span
      className={styles.statusBadge}
      style={{
        backgroundColor: `color-mix(in srgb, ${color} 13%, transparent)`,
        color,
        borderColor: `color-mix(in srgb, ${color} 25%, transparent)`,
      }}
    >
      <span aria-hidden="true">{icon}</span>
      {status}
    </span>
  );
};

// ============================================================
// Main Component
// ============================================================
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  expanded: initiallyExpanded = false,
  onExpand,
  className = "",
  testId,
  style,
}) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    onExpand?.(project.id);
  };

  const bodyId = `project-card-body-${project.id}`;

  return (
    <div
      className={`${styles.projectCard} ${isExpanded ? styles.projectCardExpanded : ""} ${className}`}
      data-testid={testId}
      style={style}
    >
      <button
        type="button"
        className={`${styles.projectCardHeader} ${isExpanded ? styles.projectCardHeaderExpanded : ""}`}
        onClick={handleToggle}
        aria-expanded={isExpanded}
        aria-controls={bodyId}
      >
        <div className={styles.projectCardTitleRow}>
          <StatusBadge status={project.status} />
          <h3 className={styles.projectCardTitle}>{project.title}</h3>
          <span className={styles.projectCardId}>#{project.id}</span>
        </div>

        <div className={styles.projectCardMeta}>
          <span>{project.commits} commits</span>
          <span>{project.filesChanged} files</span>
          <span
            className={`${styles.projectCardChevron} ${isExpanded ? styles.projectCardChevronExpanded : ""}`}
            aria-hidden="true"
          >
            ▶
          </span>
        </div>
      </button>

      <div id={bodyId} className={styles.projectCardBody}>
        <p className={styles.projectCardDescription}>{project.description}</p>

        <div className={styles.projectCardMetrics}>
          {project.metrics.map((m, i) => (
            <div key={i} className={styles.metricChip}>
              <span className={styles.metricChipValue}>{m.value}</span>
              <span className={styles.metricChipLabel}>{m.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.projectCardImpact}>💰 {project.impact}</div>

        <div className={styles.projectCardTech}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.projectCardFooter}>
          <span>🕐 Merged {project.mergedDate}</span>
          {project.links?.caseStudy && (
            <a
              href={project.links.caseStudy}
              className={styles.projectCardLink}
            >
              Read Case Study →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
