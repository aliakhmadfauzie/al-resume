import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppModeContextType {
  isSkimMode: boolean;
  toggleSkimMode: () => void;
  setSkimMode: (val: boolean) => void;
  prefersReducedMotion: boolean;
  shouldReduceMotion: boolean;
}

const AppModeContext = createContext<AppModeContextType>({
  isSkimMode: false,
  toggleSkimMode: () => {},
  setSkimMode: () => {},
  prefersReducedMotion: false,
  shouldReduceMotion: false,
});

export const AppModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSkimMode, setIsSkimModeState] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'skim' || urlParams.get('fasttrack') === 'true') {
      return true;
    }
    const stored = localStorage.getItem('al_portfolio_skim_mode');
    return stored === 'true';
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const setSkimMode = (val: boolean) => {
    setIsSkimModeState(val);
    if (typeof window !== 'undefined') {
      localStorage.setItem('al_portfolio_skim_mode', String(val));
    }
  };

  const toggleSkimMode = () => {
    setSkimMode(!isSkimMode);
  };

  const shouldReduceMotion = prefersReducedMotion || isSkimMode;

  return (
    <AppModeContext.Provider
      value={{
        isSkimMode,
        toggleSkimMode,
        setSkimMode,
        prefersReducedMotion,
        shouldReduceMotion,
      }}
    >
      {children}
    </AppModeContext.Provider>
  );
};

export const useAppMode = () => useContext(AppModeContext);
