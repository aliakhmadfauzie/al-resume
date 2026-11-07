import { createContext, useContext } from 'react';

// ============================================================
// Theme Mode
// ============================================================
export type ThemeMode = 'dark' | 'light' | 'power-apps';

// ============================================================
// Color Palette
// ============================================================
export interface ColorPalette {
  bg: {
    primary: string;
    secondary: string;
    tertiary: string;
    elevation: {
      1: string;
      2: string;
      3: string;
    };
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    inverse: string;
  };
  border: {
    default: string;
    hover: string;
    active: string;
  };
  accent: {
    blue: string;
    green: string;
    purple: string;
    orange: string;
    red: string;
    cyan: string;
  };
  status: {
    online: string;
    away: string;
    busy: string;
    offline: string;
  };
}

// ============================================================
// Typography
// ============================================================
export interface Typography {
  fontFamily: {
    sans: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
  fontWeight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
  letterSpacing: {
    tight: string;
    normal: string;
    wide: string;
    wider: string;
  };
}

// ============================================================
// Spacing
// ============================================================
export interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
}

// ============================================================
// Full Theme Interface
// ============================================================
export interface Theme {
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    glow: string;
  };
  transitions: {
    fast: string;
    base: string;
    slow: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}

// ============================================================
// Theme Definitions
// ============================================================
const baseTypography: Typography = {
  fontFamily: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
  },
};

const baseSpacing: Spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
};

const baseBorderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
};

const baseTransitions = {
  fast: '150ms ease',
  base: '300ms ease',
  slow: '500ms ease',
};

const baseBreakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const theme: Record<ThemeMode, Theme> = {
  dark: {
    colors: {
      bg: {
        primary: '#0D1117',
        secondary: '#161B22',
        tertiary: '#1C2333',
        elevation: {
          1: '#1C2333',
          2: '#2D3748',
          3: '#3D4A5F',
        },
      },
      text: {
        primary: '#F0F6FC',
        secondary: '#8B949E',
        muted: '#484F58',
        inverse: '#0D1117',
      },
      border: {
        default: '#30363D',
        hover: '#58A6FF',
        active: '#BC8CFF',
      },
      accent: {
        blue: '#58A6FF',
        green: '#3FB950',
        purple: '#BC8CFF',
        orange: '#D29922',
        red: '#F85149',
        cyan: '#79C0FF',
      },
      status: {
        online: '#3FB950',
        away: '#D29922',
        busy: '#F85149',
        offline: '#484F58',
      },
    },
    typography: baseTypography,
    spacing: baseSpacing,
    borderRadius: baseBorderRadius,
    shadows: {
      sm: '0 1px 2px rgba(0,0,0,0.3)',
      md: '0 4px 12px rgba(0,0,0,0.4)',
      lg: '0 8px 24px rgba(0,0,0,0.5)',
      xl: '0 16px 48px rgba(0,0,0,0.6)',
      glow: '0 0 30px rgba(88, 166, 255, 0.15)',
    },
    transitions: baseTransitions,
    breakpoints: baseBreakpoints,
  },

  light: {
    colors: {
      bg: {
        primary: '#FFFFFF',
        secondary: '#F6F8FA',
        tertiary: '#EEF1F5',
        elevation: {
          1: '#FFFFFF',
          2: '#F6F8FA',
          3: '#EEF1F5',
        },
      },
      text: {
        primary: '#1F2328',
        secondary: '#656D76',
        muted: '#8C959F',
        inverse: '#FFFFFF',
      },
      border: {
        default: '#D0D7DE',
        hover: '#0969DA',
        active: '#8250DF',
      },
      accent: {
        blue: '#0969DA',
        green: '#1A7F37',
        purple: '#8250DF',
        orange: '#9A6700',
        red: '#CF222E',
        cyan: '#0550AE',
      },
      status: {
        online: '#1A7F37',
        away: '#9A6700',
        busy: '#CF222E',
        offline: '#8C959F',
      },
    },
    typography: baseTypography,
    spacing: baseSpacing,
    borderRadius: baseBorderRadius,
    shadows: {
      sm: '0 1px 2px rgba(0,0,0,0.06)',
      md: '0 4px 12px rgba(0,0,0,0.08)',
      lg: '0 8px 24px rgba(0,0,0,0.1)',
      xl: '0 16px 48px rgba(0,0,0,0.12)',
      glow: '0 0 30px rgba(9, 105, 218, 0.12)',
    },
    transitions: baseTransitions,
    breakpoints: baseBreakpoints,
  },

  'power-apps': {
    colors: {
      bg: {
        primary: '#0B0E1A',
        secondary: '#13172B',
        tertiary: '#1A2040',
        elevation: {
          1: '#1A2040',
          2: '#242B55',
          3: '#2E3670',
        },
      },
      text: {
        primary: '#F0F6FC',
        secondary: '#8B949E',
        muted: '#484F58',
        inverse: '#0B0E1A',
      },
      border: {
        default: '#2E3670',
        hover: '#7C4DFF',
        active: '#B388FF',
      },
      accent: {
        blue: '#7C4DFF',
        green: '#00E676',
        purple: '#B388FF',
        orange: '#FF9100',
        red: '#FF5252',
        cyan: '#82B1FF',
      },
      status: {
        online: '#00E676',
        away: '#FF9100',
        busy: '#FF5252',
        offline: '#484F58',
      },
    },
    typography: baseTypography,
    spacing: baseSpacing,
    borderRadius: baseBorderRadius,
    shadows: {
      sm: '0 1px 2px rgba(0,0,0,0.4)',
      md: '0 4px 12px rgba(124, 77, 255, 0.2)',
      lg: '0 8px 24px rgba(124, 77, 255, 0.3)',
      xl: '0 16px 48px rgba(124, 77, 255, 0.4)',
      glow: '0 0 30px rgba(124, 77, 255, 0.2)',
    },
    transitions: baseTransitions,
    breakpoints: baseBreakpoints,
  },
};

// ============================================================
// Theme Context + Hook
// ============================================================
export interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
