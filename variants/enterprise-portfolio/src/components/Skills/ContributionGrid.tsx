import React, { useState, useCallback } from "react";
import type {
  ContributionGridProps,
  Skill,
  SkillLevel,
} from "../../types/design-system";
import styles from "./ContributionGrid.module.css";

// ============================================================
// Helpers
// ============================================================
const getSkillColor = (level: SkillLevel): string => {
  const opacityMap: Record<SkillLevel, number> = {
    1: 0.15,
    2: 0.3,
    3: 0.5,
    4: 0.75,
    5: 1,
  };
  return `color-mix(in srgb, var(--accent-blue) ${Math.round(opacityMap[level] * 100)}%, transparent)`;
};

const LEVEL_LABELS = [
  "",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
  "Master",
];

// ============================================================
// Tooltip
// ============================================================
const Tooltip: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className={styles.gridTooltip}>
    <span className={styles.gridTooltipName}>{skill.name}</span>
    <div className={styles.gridTooltipLevel}>{LEVEL_LABELS[skill.level]}</div>
    <div className={styles.gridTooltipBar}>
      <div
        className={styles.gridTooltipBarFill}
        style={{ width: `${(skill.level / 5) * 100}%` }}
      />
    </div>
  </div>
);

// ============================================================
// Main Component
// ============================================================
export const ContributionGrid: React.FC<ContributionGridProps> = ({
  skills,
  cellSize = "md",
  showLabels = true,
  onSkillHover,
  className = "",
  testId,
  style,
}) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleMouseEnter = useCallback(
    (skill: Skill) => {
      setHoveredSkill(skill.name);
      onSkillHover?.(skill);
    },
    [onSkillHover],
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredSkill(null);
  }, []);

  const gridClass = cellSize === "sm"
    ? styles.contributionGridSm
    : cellSize === "lg"
      ? styles.contributionGridLg
      : styles.contributionGridMd;

  const cellClass = cellSize === "sm"
    ? styles.gridCellSm
    : cellSize === "lg"
      ? styles.gridCellLg
      : styles.gridCellMd;

  return (
    <div className={className} data-testid={testId} style={style}>
      <div className={`${styles.contributionGrid} ${gridClass}`}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`${styles.gridCell} ${cellClass}`}
            style={{ backgroundColor: getSkillColor(skill.level) }}
            onMouseEnter={() => handleMouseEnter(skill)}
            onMouseLeave={handleMouseLeave}
            role="img"
            aria-label={`${skill.name}: ${LEVEL_LABELS[skill.level]}`}
          >
            {hoveredSkill === skill.name && <Tooltip skill={skill} />}
          </div>
        ))}
      </div>

      {showLabels && (
        <div className={styles.gridLabels}>
          {[1, 2, 3, 4, 5].map((level) => (
            <span key={level} className={styles.gridLabel}>
              <span
                className={styles.gridLabelDot}
                style={{ backgroundColor: getSkillColor(level as SkillLevel) }}
              />
              {LEVEL_LABELS[level]}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
