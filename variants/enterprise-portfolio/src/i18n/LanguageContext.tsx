import React, { createContext, useContext, useState, useCallback } from "react";
import type { Language, TranslationDict } from "./translations";
import { translations, languageNames, languageFlags } from "./translations";

// ============================================================
// Context Type
// ============================================================
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDict;
  nextLanguage: Language;
  languageNames: Record<Language, string>;
  languageFlags: Record<Language, string>;
}

const STORAGE_KEY = "portfolio-language";

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "id") return stored;
  } catch {
    // localStorage unavailable
  }
  // Detect browser language
  const browserLang = navigator.language.slice(0, 2);
  return browserLang === "id" ? "id" : "en";
}

const LanguageContext = createContext<LanguageContextType | null>(null);

// ============================================================
// Provider
// ============================================================
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === "en" ? "id" : "en";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
    nextLanguage: language === "en" ? "id" : "en",
    languageNames,
    languageFlags,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// ============================================================
// Hook
// ============================================================
export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
