import React, { useState, useCallback, useMemo, useEffect } from "react";
import type { ThemeMode } from "../styles/theme";
import { theme, ThemeContext } from "../styles/theme";
import "../styles/theme.css";

// ============================================================
// Theme Provider
//
// Syncs the CSS custom-property layer ([data-theme="…"]) with the
// React state so components can use var(--*) in CSS modules
// instead of reading `theme.colors.*` in inline style objects.
// ============================================================
export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
}

const STORAGE_KEY = "portfolio-theme";

function getInitialMode(defaultMode: ThemeMode): ThemeMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light" || stored === "power-apps") {
      return stored;
    }
  } catch {
    /* localStorage unavailable */
  }
  return defaultMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultMode = "dark",
}) => {
  const [mode, setMode] = useState<ThemeMode>(() =>
    getInitialMode(defaultMode),
  );

  // Apply data-theme attribute to <html> so CSS vars update globally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((prev) => {
      if (prev === "dark") return "light";
      if (prev === "light") return "power-apps";
      return "dark";
    });
  }, []);

  const setTheme = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
  }, []);

  const contextValue = useMemo(
    () => ({
      theme: theme[mode],
      mode,
      toggleTheme,
      setTheme,
    }),
    [mode, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
