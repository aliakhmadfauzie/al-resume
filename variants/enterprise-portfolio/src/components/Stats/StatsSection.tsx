import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import type { StatsSectionProps } from "../../types/design-system";
import styles from "./StatsSection.module.css";

// ============================================================
// Icon Map
// ============================================================
const ICON_MAP: Record<string, string> = {
  rocket: "◆",
  clock: "◷",
  star: "★",
  code: "⌬",
  database: "⊞",
  layout: "▦",
  users: "◉",
  check: "✓",
  shield: "⬡",
  dollar: "◇",
};

// ============================================================
// Stat Card
// ============================================================
const StatCard: React.FC<{
  metric: StatsSectionProps["metrics"][number];
  animate: boolean;
  isVisible: boolean;
}> = ({ metric, animate, isVisible }) => {
  const { current } = useCounter({
    target: metric.value,
    duration: metric.animationDuration || 2000,
    delay: 200,
    easing: "easeOut",
  });

  const displayValue = animate && isVisible ? current : metric.value;
  const icon = ICON_MAP[metric.icon] || metric.icon;

  return (
    <div className={styles.statCard}>
      <div className={styles.statCardIcon}>{icon}</div>
      <div className={styles.statCardValue}>
        {metric.prefix}
        {displayValue.toLocaleString()}
        {metric.suffix}
      </div>
      <div className={styles.statCardLabel}>{metric.label}</div>
    </div>
  );
};

// ============================================================
// Main Component
// ============================================================
export const StatsSection: React.FC<StatsSectionProps> = ({
  metrics,
  animate = true,
  gridColumns = 4,
  className = "",
  testId,
  style,
}) => {
  const { ref, isVisible } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.3,
  });

  const gridClass =
    gridColumns === 2
      ? styles.statsGrid2
      : gridColumns === 3
        ? styles.statsGrid3
        : styles.statsGrid;

  return (
    <div
      ref={ref}
      className={`${styles.statsSection} ${className}`}
      data-testid={testId}
      style={style}
    >
      <div className={`${gridClass} stagger-children`}>
        {metrics.map((metric) => (
          <StatCard
            key={metric.label}
            metric={metric}
            animate={animate}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};
