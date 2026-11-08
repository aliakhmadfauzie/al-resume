import React from 'react';

export type OrganizationLogoId =
  | 'microsoft'
  | 'linkedin'
  | 'microsoft-linkedin'
  | 'pmi'
  | 'lark'
  | 'six-sigma'
  | 'concentrix'
  | 'accenture'
  | 'uum'
  | 'texchem'
  | 'ioi-acidchem'
  | 'nippon-paint'
  | 'tasek-cement'
  | 'ipenet'
  | 'general';

interface OrganizationLogoProps {
  logoId?: OrganizationLogoId | string;
  orgName?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  preferImage?: boolean;
}

export function resolveOrganizationLogoId(
  issuerOrOrg: string,
  explicitId?: string
): OrganizationLogoId {
  if (explicitId && isValidLogoId(explicitId)) {
    return explicitId as OrganizationLogoId;
  }

  const text = (issuerOrOrg || '').toLowerCase();

  if (text.includes('tasek') || text.includes('tasek cement')) {
    return 'tasek-cement';
  }
  if (text.includes('ipenet')) {
    return 'ipenet';
  }
  if (text.includes('texchem')) {
    return 'texchem';
  }
  if (text.includes('nippon') || text.includes('nippon paint')) {
    return 'nippon-paint';
  }
  if (text.includes('ioi') || text.includes('acidchem') || text.includes('oleochemical')) {
    return 'ioi-acidchem';
  }
  if (text.includes('microsoft') && text.includes('linkedin')) {
    return 'microsoft-linkedin';
  }
  if (text.includes('pmi') || text.includes('project management institute')) {
    return 'pmi';
  }
  if (text.includes('microsoft')) {
    return 'microsoft';
  }
  if (text.includes('linkedin')) {
    return 'linkedin';
  }
  if (text.includes('lark') || text.includes('bytedance')) {
    return 'lark';
  }
  if (text.includes('six sigma') || text.includes('enterprise quality') || text.includes('dmaic')) {
    return 'six-sigma';
  }
  if (text.includes('concentrix')) {
    return 'concentrix';
  }
  if (text.includes('accenture')) {
    return 'accenture';
  }
  if (text.includes('uum') || text.includes('universiti utara')) {
    return 'uum';
  }

  return 'general';
}

function isValidLogoId(id: string): boolean {
  return [
    'microsoft',
    'linkedin',
    'microsoft-linkedin',
    'pmi',
    'lark',
    'six-sigma',
    'concentrix',
    'accenture',
    'uum',
    'texchem',
    'ioi-acidchem',
    'nippon-paint',
    'tasek-cement',
    'ipenet',
    'general'
  ].includes(id);
}

export const OrganizationLogo: React.FC<OrganizationLogoProps> = ({
  logoId,
  orgName = '',
  size = 'sm',
  className = '',
  preferImage = true
}) => {
  const resolvedId = resolveOrganizationLogoId(orgName, logoId);

  // Size mapping
  const sizeMap = {
    xs: { icon: 'w-3.5 h-3.5', box: 'w-4 h-4' },
    sm: { icon: 'w-4 h-4', box: 'w-5 h-5' },
    md: { icon: 'w-5 h-5', box: 'w-6 h-6' },
    lg: { icon: 'w-7 h-7', box: 'w-8 h-8' },
    xl: { icon: 'w-9 h-9', box: 'w-10 h-10' }
  };

  const { icon: iconSize } = sizeMap[size] || sizeMap.sm;

  // For the official corporate/client assets uploaded by user:
  if (preferImage) {
    switch (resolvedId) {
      case 'concentrix':
        return (
          <div className={`${iconSize} shrink-0 flex items-center justify-center overflow-hidden rounded-[var(--radius-sm)] ${className}`}>
            <img
              src="/assets/logos/concentrix.png"
              alt="Concentrix Official Logo"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        );

      case 'accenture':
        return (
          <div className={`${iconSize} shrink-0 flex items-center justify-center overflow-hidden rounded-[var(--radius-sm)] ${className}`}>
            <img
              src="/assets/logos/accenture.png"
              alt="Accenture Official Logo"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        );

      case 'texchem':
        return (
          <div className={`${iconSize} shrink-0 flex items-center justify-center overflow-hidden rounded-[var(--radius-sm)] bg-white/95 p-0.5 ${className}`}>
            <img
              src="/assets/logos/texchem.png"
              alt="Texchem Official Logo"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        );

      case 'ioi-acidchem':
        return (
          <div className={`${iconSize} shrink-0 flex items-center justify-center overflow-hidden rounded-[var(--radius-sm)] bg-white/95 p-0.5 ${className}`}>
            <img
              src="/assets/logos/ioi-acidchem.png"
              alt="IOI Acidchem / Oleochemical Logo"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        );

      case 'nippon-paint':
        return (
          <div className={`${iconSize} shrink-0 flex items-center justify-center overflow-hidden rounded-[var(--radius-sm)] ${className}`}>
            <img
              src="/assets/logos/nippon-paint.png"
              alt="Nippon Paint Official Logo"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        );

      case 'tasek-cement':
        return (
          <div className={`${iconSize} shrink-0 flex items-center justify-center overflow-hidden rounded-[var(--radius-sm)] bg-[#FA6F38] p-0.5 ${className}`}>
            <img
              src="/assets/logos/tasek-cement.png"
              alt="Tasek Cement (Hong Leong Asia)"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        );

      case 'ipenet':
        return (
          <div className={`${iconSize} shrink-0 flex items-center justify-center overflow-hidden rounded-[var(--radius-sm)] bg-white/95 p-0.5 ${className}`}>
            <img
              src="/assets/logos/ipenet.png"
              alt="IPENET Official Logo"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        );
    }
  }

  // Vector SVG Renderers (High-fidelity SVGs)
  switch (resolvedId) {
    case 'concentrix':
      return (
        <svg
          viewBox="0 0 28 20"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Concentrix official logo"
          role="img"
        >
          <title>Concentrix</title>
          <rect width="28" height="20" rx="10" fill="#00D9AF" />
          <circle cx="18" cy="10" r="7.5" fill="#FFFFFF" />
          <path
            d="M20.5 7.5a4 4 0 00-4 0 4 4 0 000 5 4 4 0 004 0"
            stroke="#042838"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'accenture':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Accenture official logo"
          role="img"
        >
          <title>Accenture</title>
          <rect width="24" height="24" rx="4" fill="#0F1117" />
          <path
            d="M6.5 4.5l11 7.5-11 7.5"
            stroke="#A100FF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'texchem':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Texchem official logo"
          role="img"
        >
          <title>Texchem</title>
          <rect width="24" height="24" rx="4" fill="#FFFFFF" />
          <circle cx="12" cy="7.5" r="4.2" fill="#E61D2B" />
          <circle cx="16.5" cy="12" r="4.2" fill="#E61D2B" />
          <circle cx="12" cy="16.5" r="4.2" fill="#E61D2B" />
          <circle cx="7.5" cy="12" r="4.2" fill="#E61D2B" />
        </svg>
      );

    case 'ioi-acidchem':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="IOI Oleochemical / Acidchem official logo"
          role="img"
        >
          <title>IOI Acidchem</title>
          <rect width="24" height="24" rx="4" fill="#FFFFFF" />
          <circle cx="12" cy="12" r="8.5" fill="#1F4E99" />
          <circle cx="12" cy="12" r="4" fill="#FFFFFF" />
          <rect x="10.8" y="3.5" width="2.4" height="17" fill="#FFFFFF" />
        </svg>
      );

    case 'nippon-paint':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Nippon Paint official logo"
          role="img"
        >
          <title>Nippon Paint</title>
          <rect width="24" height="24" rx="5" fill="#00479E" />
          <path
            d="M6.5 7h4v2.5a4.5 4.5 0 017.5 3.5V18h-4v-4.5c0-1.2-.8-2-2-2s-2 .8-2 2V18h-3.5V7z"
            fill="#E61C24"
            stroke="#FFFFFF"
            strokeWidth="1.2"
          />
        </svg>
      );

    case 'tasek-cement':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Tasek Cement official logo"
          role="img"
        >
          <title>Tasek Cement</title>
          <rect width="24" height="24" rx="4" fill="#FA6F38" />
          <circle cx="5.5" cy="11.5" r="2.2" fill="#FFF5EB" />
          <path d="M8 17v-4.5l3.5-3.5H16v4h-3.5l-2.5 2.5V17H8z" fill="#2E1C2B" />
        </svg>
      );

    case 'ipenet':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="IPENET official logo"
          role="img"
        >
          <title>IPENET</title>
          <rect width="24" height="24" rx="4" fill="#FFFFFF" />
          <path d="M7 7.5l1.5-2v8l-1.5 2z" fill="#78BE20" />
          <path d="M11 5h2.5l4 4.5-4 4.5H11v4h-2V5h2zm2.5 6.5l2-2-2-2v4z" fill="#4A4A4F" />
        </svg>
      );

    case 'microsoft':
      return (
        <svg
          viewBox="0 0 20 20"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Microsoft official logo"
          role="img"
        >
          <title>Microsoft</title>
          <rect x="1" y="1" width="8.5" height="8.5" fill="#F25022" rx="0.5" />
          <rect x="10.5" y="1" width="8.5" height="8.5" fill="#7FBA00" rx="0.5" />
          <rect x="1" y="10.5" width="8.5" height="8.5" fill="#00A4EF" rx="0.5" />
          <rect x="10.5" y="10.5" width="8.5" height="8.5" fill="#FFB900" rx="0.5" />
        </svg>
      );

    case 'linkedin':
      return (
        <svg
          viewBox="0 0 20 20"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="LinkedIn official logo"
          role="img"
        >
          <title>LinkedIn</title>
          <rect width="20" height="20" rx="4" fill="#0A66C2" />
          <path
            fill="#FFFFFF"
            d="M5.5 8H3.2v7h2.3V8zm-1.15-3.3a1.35 1.35 0 100 2.7 1.35 1.35 0 000-2.7zM16.8 11.2c0-2-1.1-2.9-2.5-2.9-1.1 0-1.7.6-2 1V8h-2.3v7h2.3v-3.9c0-1 .2-2 1.5-2 1.2 0 1.2 1.1 1.2 2v3.9H16.8v-3.8z"
          />
        </svg>
      );

    case 'microsoft-linkedin':
      return (
        <div
          className={`inline-flex items-center gap-1 shrink-0 ${className}`}
          title="Microsoft & LinkedIn"
          aria-label="Microsoft & LinkedIn official logos"
        >
          <svg
            viewBox="0 0 20 20"
            className={size === 'xs' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-3.5 h-3.5'}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <rect x="1" y="1" width="8.5" height="8.5" fill="#F25022" rx="0.5" />
            <rect x="10.5" y="1" width="8.5" height="8.5" fill="#7FBA00" rx="0.5" />
            <rect x="1" y="10.5" width="8.5" height="8.5" fill="#00A4EF" rx="0.5" />
            <rect x="10.5" y="10.5" width="8.5" height="8.5" fill="#FFB900" rx="0.5" />
          </svg>
          <span className="text-[10px] text-zinc-500 font-bold leading-none">&amp;</span>
          <svg
            viewBox="0 0 20 20"
            className={size === 'xs' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-3.5 h-3.5'}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <rect width="20" height="20" rx="3.5" fill="#0A66C2" />
            <path
              fill="#FFFFFF"
              d="M5.5 8H3.2v7h2.3V8zm-1.15-3.3a1.35 1.35 0 100 2.7 1.35 1.35 0 000-2.7zM16.8 11.2c0-2-1.1-2.9-2.5-2.9-1.1 0-1.7.6-2 1V8h-2.3v7h2.3v-3.9c0-1 .2-2 1.5-2 1.2 0 1.2 1.1 1.2 2v3.9H16.8v-3.8z"
            />
          </svg>
        </div>
      );

    case 'pmi':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Project Management Institute (PMI) official logo"
          role="img"
        >
          <title>Project Management Institute (PMI)</title>
          <rect width="24" height="24" rx="4" fill="#181528" />
          <path d="M4 11h7V4A7 7 0 004 11z" fill="#FF5800" />
          <rect x="12" y="4" width="8" height="7" rx="1" fill="#4F2683" />
          <circle cx="16" cy="7.5" r="2" fill="#FFFFFF" />
          <rect x="4" y="12" width="7" height="8" rx="1" fill="#009A9B" />
          <path d="M5.5 13.5l4 5M9.5 13.5l-4 5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 12l4 4-4 4-4-4 4-4z" fill="#E31B23" />
        </svg>
      );

    case 'lark':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Lark (ByteDance) official logo"
          role="img"
        >
          <title>Lark (ByteDance)</title>
          <rect width="24" height="24" rx="4.5" fill="#0B132B" />
          <path d="M3.5 14.5L12 4l-2.5 12-6-1.5z" fill="url(#lark-cyan-grad)" />
          <path d="M12 4l8.5 7.5-11 4.5 2.5-12z" fill="url(#lark-blue-grad)" />
          <path d="M9.5 16l4 4.5 7-9-11 4.5z" fill="#00D6B9" />
          <defs>
            <linearGradient id="lark-cyan-grad" x1="3.5" y1="4" x2="12" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00E5BE" />
              <stop offset="1" stopColor="#00A3FF" />
            </linearGradient>
            <linearGradient id="lark-blue-grad" x1="12" y1="4" x2="20.5" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'six-sigma':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Six Sigma Green Belt official logo"
          role="img"
        >
          <title>Six Sigma (EQM)</title>
          <rect width="24" height="24" rx="4.5" fill="#062E20" stroke="#059669" strokeWidth="1" />
          <text
            x="12"
            y="16.5"
            textAnchor="middle"
            fill="#FBBF24"
            fontFamily="serif"
            fontSize="14"
            fontWeight="bold"
            fontStyle="italic"
          >
            6σ
          </text>
        </svg>
      );

    case 'uum':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Universiti Utara Malaysia official crest"
          role="img"
        >
          <title>Universiti Utara Malaysia (UUM)</title>
          <rect width="24" height="24" rx="4.5" fill="#0A1E3F" />
          <path
            d="M12 4l6 2.5v5.5c0 4.5-3 8-6 9-3-1-6-4.5-6-9V6.5L12 4z"
            fill="#1E3A8A"
            stroke="#F59E0B"
            strokeWidth="1.2"
          />
          <path d="M12 7.5v6M10 11h4M9.5 15.5c1.2-.5 3.8-.5 5 0" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 20 20"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Issuing organization badge"
          role="img"
        >
          <rect width="20" height="20" rx="4" fill="#1C1E26" stroke="#333846" strokeWidth="1" />
          <path
            d="M10 5l4 2.5v4c0 3-2 5-4 6-2-1-4-3-4-6v-4l4-2.5z"
            fill="#272A37"
            stroke="#F97316"
            strokeWidth="1"
          />
        </svg>
      );
  }
};
