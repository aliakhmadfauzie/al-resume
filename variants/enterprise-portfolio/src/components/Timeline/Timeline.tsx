import React, { useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import type { TimelineProps } from "../../types/design-system";
import styles from "./Timeline.module.css";

// ============================================================
// Single Event (with expandable highlights)
// ============================================================
const TimelineItem: React.FC<{
  event: TimelineProps["events"][number];
  isLast: boolean;
  index: number;
}> = ({ event, isLast, index }) => {
  const { ref, isVisible } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [highlightsOpen, setHighlightsOpen] = useState(false);
  const hasHighlights = event.highlights && event.highlights.length > 0;
  const highlightId = `timeline-highlights-${index}`;

  return (
    <div
      ref={ref}
      className={`${styles.timelineItem} ${isVisible ? styles.timelineItemVisible : styles.timelineItemHidden} ${!isLast ? styles.timelineItemSpacer : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Timeline line */}
      {!isLast && <div className={styles.timelineLine} />}

      {/* Emoji bubble */}
      <div className={styles.timelineBubble}>{event.emoji}</div>

      {/* Content */}
      <div className={styles.timelineContent}>
        <div className={styles.timelineDate}>
          {new Date(event.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <h4 className={styles.timelineTitle}>{event.title}</h4>
        {event.description && (
          <p className={styles.timelineDescription}>{event.description}</p>
        )}
        {hasHighlights && (
          <>
            <button
              type="button"
              className={styles.timelineExpandBtn}
              onClick={() => setHighlightsOpen((prev) => !prev)}
              aria-expanded={highlightsOpen}
              aria-controls={highlightId}
            >
              <span
                className={`${styles.timelineExpandChevron} ${highlightsOpen ? styles.timelineExpandChevronOpen : ""}`}
                aria-hidden="true"
              >
                ▶
              </span>
              {event.highlights!.length} highlight
              {event.highlights!.length !== 1 ? "s" : ""}
            </button>
            <div
              id={highlightId}
              className={`${styles.timelineHighlightsWrap} ${highlightsOpen ? styles.timelineHighlightsOpen : ""}`}
            >
              <ul className={styles.timelineHighlights}>
                {event.highlights!.map((h, i) => (
                  <li key={i} className={styles.timelineHighlight}>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// ============================================================
// Main Component
// ============================================================
export const Timeline: React.FC<TimelineProps> = ({
  events,
  className = "",
  testId,
  style,
}) => {
  return (
    <div
      className={`${styles.timeline} ${className}`}
      data-testid={testId}
      style={style}
    >
      {events.map((event, i) => (
        <TimelineItem
          key={`${event.date}-${event.title}`}
          event={event}
          isLast={i === events.length - 1}
          index={i}
        />
      ))}
    </div>
  );
};
