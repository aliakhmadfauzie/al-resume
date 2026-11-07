import React, { useState, useEffect } from "react";
import type {
  StatusBarProps,
  StatusBarStatus,
} from "../../types/design-system";
import { useTheme } from "../../styles/theme";
import { useLanguage } from "../../i18n";

// ============================================================
// Status Dot
// ============================================================
const STATUS_COLORS: Record<StatusBarStatus, string> = {
  online: "#3FB950",
  away: "#D29922",
  busy: "#F85149",
  offline: "#484F58",
};

const StatusDot: React.FC<{ status: StatusBarStatus }> = ({ status }) => (
  <span
    role="status"
    aria-label={`Status: ${status}`}
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
    }}
  >
    <span
      style={{
        display: "inline-block",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: STATUS_COLORS[status],
        flexShrink: 0,
        boxShadow: `0 0 6px ${STATUS_COLORS[status]}80`,
      }}
    />
  </span>
);

// ============================================================
// Main Component
// ============================================================
export const StatusBar: React.FC<StatusBarProps> = ({
  status = "online",
  branch = "main",
  message,
  lastUpdated,
  className = "",
  testId,
}) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const containerStyle: React.CSSProperties = {
    backgroundColor: theme.colors.bg.secondary,
    borderBottom: `1px solid ${theme.colors.border.default}`,
    padding: "6px 16px",
    fontSize: theme.typography.fontSize.xs,
    fontFamily: theme.typography.fontFamily.mono,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.colors.text.secondary,
    flexWrap: "wrap",
    gap: "8px",
  };

  const sectionStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
  };

  return (
    <div className={className} data-testid={testId} style={containerStyle}>
      <div className="status-bar-left" style={sectionStyle}>
        <StatusDot status={status} />
        <span className="status-bar-message" style={{ color: theme.colors.text.primary }}>
          ● <strong>{t.status.powerPlatformArchitect}</strong> —{" "}
          {message || t.status.availableMessage}
        </span>
      </div>

      <div className="status-bar-right" style={sectionStyle}>
        <span>
          <span style={{ color: theme.colors.accent.blue }}>⎇</span> {branch}
        </span>
        {lastUpdated && (
          <span>
            {t.status.lastUpdated}: {new Date(lastUpdated).toLocaleDateString()}
          </span>
        )}
        <span>
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};
