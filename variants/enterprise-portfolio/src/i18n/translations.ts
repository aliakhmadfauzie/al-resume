// ============================================================
// i18n Translations — English (en) ↔ Bahasa Indonesia (id)
// ============================================================

export type Language = "en" | "id";

export interface TranslationDict {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    journey: string;
    portfolio: string;
    gallery: string;
    contact: string;
    architecture: string;
    performance: string;
    testimonials: string;
    downloads: string;
    portfolioSub: string;
    jumpTo: string;
  };
  status: {
    powerPlatformArchitect: string;
    availableMessage: string;
    branch: string;
    lastUpdated: string;
  };
  hero: {
    available: string;
    viewCaseStudy: string;
    getInTouch: string;
    github: string;
  };
  common: {
    loading: string;
    error: string;
    switchTheme: string;
    switchLang: string;
  };
}

const en: TranslationDict = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    journey: "Journey",
    portfolio: "Portfolio",
    gallery: "Gallery",
    contact: "Contact",
    architecture: "Architecture",
    performance: "Performance",
    testimonials: "Testimonials",
    downloads: "Downloads",
    portfolioSub: "Portfolio",
    jumpTo: "Jump To",
  },
  status: {
    powerPlatformArchitect: "Enterprise Power Platform & Dynamics 365 Solution Architect",
    availableMessage: "Open to senior architecture & AI leadership roles",
    branch: "main",
    lastUpdated: "Last updated",
  },
  hero: {
    available: "Open to senior architecture & AI leadership roles",
    viewCaseStudy: "View Case Study",
    getInTouch: "Get in Touch",
    github: "GitHub",
  },
  common: {
    loading: "Loading portfolio...",
    error: "Error loading portfolio data.",
    switchTheme: "Switch theme",
    switchLang: "Switch language",
  },
};

const id: TranslationDict = {
  nav: {
    home: "Beranda",
    about: "Tentang",
    skills: "Keahlian",
    projects: "Proyek",
    journey: "Perjalanan",
    portfolio: "Portofolio",
    gallery: "Galeri",
    contact: "Kontak",
    architecture: "Arsitektur",
    performance: "Kinerja",
    testimonials: "Testimoni",
    downloads: "Unduhan",
    portfolioSub: "Portofolio",
    jumpTo: "Loncat Ke",
  },
  status: {
    powerPlatformArchitect: "Arsitek Power Platform",
    availableMessage: "Tersedia untuk arsitektur enterprise & konsultasi AI",
    branch: "utama",
    lastUpdated: "Terakhir diperbarui",
  },
  hero: {
    available: "Tersedia untuk arsitektur enterprise & konsultasi AI",
    viewCaseStudy: "Lihat Studi Kasus",
    getInTouch: "Hubungi Saya",
    github: "GitHub",
  },
  common: {
    loading: "Memuat portofolio...",
    error: "Gagal memuat data portofolio.",
    switchTheme: "Ganti tema",
    switchLang: "Ganti bahasa",
  },
};

export const translations: Record<Language, TranslationDict> = { en, id };

export const languageNames: Record<Language, string> = {
  en: "English",
  id: "Bahasa Indonesia",
};

export const languageFlags: Record<Language, string> = {
  en: "🇬🇧",
  id: "🇮🇩",
};
