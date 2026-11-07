import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "../../styles/theme";
import { useLanguage } from "../../i18n";

const NAV_ITEMS = [
  { label: "Home", href: "#hero", i18nKey: "home" as const },
  { label: "About", href: "#about", i18nKey: "about" as const },
  { label: "Skills", href: "#skills", i18nKey: "skills" as const },
  { label: "Projects", href: "#projects", i18nKey: "projects" as const },
  { label: "Journey", href: "#journey", i18nKey: "journey" as const },
  {
    label: "Portfolio",
    href: "#portfolio-showcase",
    i18nKey: "portfolio" as const,
  },
  { label: "Gallery", href: "#gallery", i18nKey: "gallery" as const },
  { label: "Contact", href: "#contact", i18nKey: "contact" as const },
] as const;

export const NavBar: React.FC = () => {
  const { theme, mode, toggleTheme } = useTheme();
  const { t, language, toggleLanguage, languageFlags } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    NAV_ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      id="navbar"
      role="navigation"
      aria-label="Main navigation"
      className="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? theme.colors.bg.primary : "transparent",
        borderBottom: scrolled
          ? `1px solid ${theme.colors.border.default}`
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 200ms ease",
      }}
    >
      <div
        className="navbar-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
        }}
      >
        {/* Logo / Name */}
        <a
          href="#hero"
          className="navbar-logo"
          style={{
            fontWeight: 700,
            fontSize: theme.typography.fontSize.sm,
            color: theme.colors.text.primary,
            textDecoration: "none",
            letterSpacing: "-0.01em",
            flexShrink: 0,
          }}
        >
          Ali Akhmad Fauzie
          <span style={{ color: theme.colors.accent.blue, marginLeft: "6px" }}>
            ·
          </span>
          <span
            className="navbar-subtitle"
            style={{
              color: theme.colors.text.muted,
              marginLeft: "6px",
              fontWeight: 400,
            }}
          >
            {t.nav.portfolioSub}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="navbar-links" style={{ alignItems: "center", gap: "4px" }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                padding: "6px 12px",
                borderRadius: theme.borderRadius.md,
                fontSize: theme.typography.fontSize.xs,
                fontWeight: active === item.href.slice(1) ? 600 : 400,
                color:
                  active === item.href.slice(1)
                    ? theme.colors.text.primary
                    : theme.colors.text.muted,
                backgroundColor:
                  active === item.href.slice(1)
                    ? theme.colors.bg.secondary
                    : "transparent",
                textDecoration: "none",
                transition: "all 150ms ease",
              }}
            >
              {t.nav[item.i18nKey]}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            aria-label={`${t.common.switchLang} (${language === "en" ? "Bahasa Indonesia" : "English"})`}
            title={`${t.common.switchLang}: ${language === "en" ? "English → Bahasa Indonesia" : "Bahasa Indonesia → English"}`}
            style={{
              marginLeft: "4px",
              padding: "6px 10px",
              fontSize: theme.typography.fontSize.xs,
              fontFamily: theme.typography.fontFamily.mono,
              backgroundColor: theme.colors.bg.secondary,
              color: theme.colors.text.secondary,
              border: `1px solid ${theme.colors.border.default}`,
              borderRadius: theme.borderRadius.md,
              cursor: "pointer",
              transition: theme.transitions.fast,
            }}
          >
            {languageFlags[language]}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch theme (current: ${mode})`}
            title={`Switch theme`}
            style={{
              marginLeft: "8px",
              padding: "6px 10px",
              fontSize: theme.typography.fontSize.xs,
              fontFamily: theme.typography.fontFamily.mono,
              backgroundColor: theme.colors.bg.secondary,
              color: theme.colors.text.secondary,
              border: `1px solid ${theme.colors.border.default}`,
              borderRadius: theme.borderRadius.md,
              cursor: "pointer",
              transition: theme.transitions.fast,
            }}
          >
            {mode === "dark" ? "🌙" : mode === "light" ? "☀️" : "⚡"}
          </button>
        </div>

        {/* Hamburger + Mobile Controls */}
        <div className="navbar-mobile-controls" style={{ alignItems: "center", gap: "6px" }}>
          <button
            onClick={toggleLanguage}
            aria-label={`${t.common.switchLang}`}
            style={{
              padding: "6px 8px",
              fontSize: theme.typography.fontSize.xs,
              fontFamily: theme.typography.fontFamily.mono,
              backgroundColor: theme.colors.bg.secondary,
              color: theme.colors.text.secondary,
              border: `1px solid ${theme.colors.border.default}`,
              borderRadius: theme.borderRadius.md,
              cursor: "pointer",
            }}
          >
            {languageFlags[language]}
          </button>
          <button
            onClick={toggleTheme}
            aria-label={`Switch theme`}
            style={{
              padding: "6px 8px",
              fontSize: theme.typography.fontSize.xs,
              fontFamily: theme.typography.fontFamily.mono,
              backgroundColor: theme.colors.bg.secondary,
              color: theme.colors.text.secondary,
              border: `1px solid ${theme.colors.border.default}`,
              borderRadius: theme.borderRadius.md,
              cursor: "pointer",
            }}
          >
            {mode === "dark" ? "🌙" : mode === "light" ? "☀️" : "⚡"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="hamburger"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              width: "40px",
              height: "40px",
              padding: "8px",
              backgroundColor: theme.colors.bg.secondary,
              border: `1px solid ${theme.colors.border.default}`,
              borderRadius: theme.borderRadius.md,
              cursor: "pointer",
              marginLeft: "2px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "18px",
                height: "2px",
                backgroundColor: theme.colors.text.primary,
                borderRadius: "2px",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "2px",
                backgroundColor: theme.colors.text.primary,
                borderRadius: "2px",
                transition: "opacity 0.2s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "2px",
                backgroundColor: theme.colors.text.primary,
                borderRadius: "2px",
                transition: "transform 0.2s ease",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className="navbar-mobile-drawer"
        style={{
          display: menuOpen ? "block" : "none",
          backgroundColor: theme.colors.bg.primary,
          borderBottom: `1px solid ${theme.colors.border.default}`,
          padding: "0 24px 16px",
          maxHeight: "calc(100vh - 56px)",
          overflowY: "auto",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            style={{
              display: "block",
              padding: "12px 16px",
              borderRadius: theme.borderRadius.md,
              fontSize: theme.typography.fontSize.md,
              fontWeight: active === item.href.slice(1) ? 600 : 400,
              color:
                active === item.href.slice(1)
                  ? theme.colors.text.primary
                  : theme.colors.text.secondary,
              backgroundColor:
                active === item.href.slice(1)
                  ? theme.colors.bg.secondary
                  : "transparent",
              textDecoration: "none",
              transition: "background-color 150ms ease",
            }}
          >
            {t.nav[item.i18nKey]}
          </a>
        ))}
      </div>
    </nav>
  );
};
