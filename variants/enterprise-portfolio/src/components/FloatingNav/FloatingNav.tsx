import React, { useEffect, useState, useCallback } from "react";
import { useTheme } from "../../styles/theme";
import { useLanguage } from "../../i18n";

// ============================================================
// Section definitions for the floating nav
// ============================================================
interface NavSection {
  id: string;
  i18nKey: keyof (typeof import("../../i18n/translations").translations)["en"]["nav"];
  icon: string;
}

const SECTIONS: NavSection[] = [
  { id: "hero", i18nKey: "home", icon: "●" },
  { id: "about", i18nKey: "about", icon: "◎" },
  { id: "skills", i18nKey: "skills", icon: "◆" },
  { id: "projects", i18nKey: "projects", icon: "⊞" },
  { id: "journey", i18nKey: "journey", icon: "▶" },
  { id: "portfolio-showcase", i18nKey: "portfolio", icon: "⬡" },
  { id: "architecture", i18nKey: "architecture", icon: "⊟" },
  { id: "performance", i18nKey: "performance", icon: "◎" },
  { id: "testimonials", i18nKey: "testimonials", icon: "◇" },
  { id: "gallery", i18nKey: "gallery", icon: "⊡" },
  { id: "downloads", i18nKey: "downloads", icon: "⇩" },
  { id: "contact", i18nKey: "contact", icon: "✉" },
];

// ============================================================
// Component
// ============================================================
// Tour timing (ms)
const TOUR_START_DELAY = 900; // wait for slide-in animation
const TOUR_STEP_DURATION = 500; // per-button highlight

export const FloatingNav: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>("hero");

  // First-visit guided tour — sequentially pulses through each button
  const [tourIndex, setTourIndex] = useState<number>(-1);

  useEffect(() => {
    if (sessionStorage.getItem("floating-nav-tour-seen")) return;
    const start = setTimeout(() => setTourIndex(0), TOUR_START_DELAY);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (tourIndex < 0 || tourIndex >= SECTIONS.length) return;
    const timer = setTimeout(() => {
      const next = tourIndex + 1;
      if (next >= SECTIONS.length) {
        sessionStorage.setItem("floating-nav-tour-seen", "1");
      }
      setTourIndex(next);
    }, TOUR_STEP_DURATION);
    return () => clearTimeout(timer);
  }, [tourIndex]);

  // IntersectionObserver-based scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting section
        let topEntry: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (
              !topEntry ||
              entry.boundingClientRect.top < topEntry.boundingClientRect.top
            ) {
              topEntry = entry;
            }
          }
        }
        if (topEntry) {
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav
      className="floating-nav"
      aria-label="Section navigation"
      style={{
        position: "fixed",
        right: "20px",
        top: "80px",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        opacity: 1,
        pointerEvents: "auto",
      }}
    >
      {/* Label */}
      <div
        style={{
          fontSize: "0.65rem",
          fontWeight: 700,
          color: theme.colors.text.secondary,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          padding: "2px 6px 8px 6px",
          textAlign: "center",
        }}
      >
        {t.nav.jumpTo}
      </div>

      {SECTIONS.map(({ id, i18nKey, icon }, idx) => {
        const label = t.nav[i18nKey] || i18nKey;
        const isActive = activeId === id;
        const isTourHighlighted = tourIndex === idx;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={`Jump to ${label}`}
            aria-current={isActive ? "true" : undefined}
            title={label}
            className={isTourHighlighted ? "tour-highlight" : ""}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: theme.borderRadius.full,
              border: "none",
              cursor: "pointer",
              backgroundColor: isActive
                ? theme.colors.accent.blue
                : theme.colors.bg.elevation[1],
              color: isActive
                ? theme.colors.text.inverse
                : theme.colors.text.secondary,
              boxShadow: isActive
                ? `0 0 12px ${theme.colors.accent.blue}66`
                : "none",
              fontSize: "1rem",
              transition: "all 0.2s ease",
              outline: "none",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor =
                  theme.colors.bg.elevation[2];
                e.currentTarget.style.color = theme.colors.text.primary;
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor =
                  theme.colors.bg.elevation[1];
                e.currentTarget.style.color = theme.colors.text.secondary;
              }
            }}
          >
            {/* Tour callout bubble */}
            {isTourHighlighted && (
              <span className="tour-callout" aria-hidden="true">
                {label}
              </span>
            )}

            <span aria-hidden="true">{icon}</span>

            {/* Active indicator dot */}
            {isActive && (
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "-8px",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: theme.colors.accent.blue,
                  boxShadow: `0 0 6px ${theme.colors.accent.blue}`,
                }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};
