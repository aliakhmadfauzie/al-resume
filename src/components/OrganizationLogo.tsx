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
  | 'general';

interface OrganizationLogoProps {
  logoId?: OrganizationLogoId | string;
  orgName?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export function resolveOrganizationLogoId(
  issuerOrOrg: string,
  explicitId?: string
): OrganizationLogoId {
  if (explicitId && isValidLogoId(explicitId)) {
    return explicitId as OrganizationLogoId;
  }

  const text = (issuerOrOrg || '').toLowerCase();

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
    'general'
  ].includes(id);
}

export const OrganizationLogo: React.FC<OrganizationLogoProps> = ({
  logoId,
  orgName = '',
  size = 'sm',
  className = ''
}) => {
  const resolvedId = resolveOrganizationLogoId(orgName, logoId);

  // Size mapping
  const sizeMap = {
    xs: { icon: 'w-3.5 h-3.5', box: 'w-4 h-4' },
    sm: { icon: 'w-4 h-4', box: 'w-5 h-5' },
    md: { icon: 'w-5 h-5', box: 'w-6 h-6' },
    lg: { icon: 'w-7 h-7', box: 'w-8 h-8' }
  };

  const { icon: iconSize } = sizeMap[size] || sizeMap.sm;

  switch (resolvedId) {
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
          {/* Microsoft 4-square */}
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
          {/* LinkedIn 'in' */}
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
          {/* Official PMI 4-Quadrant Geometric Brand Emblem */}
          <rect width="24" height="24" rx="4" fill="#181528" />
          {/* Top-Left Quadrant: Coral / Orange Circle Sector */}
          <path d="M4 11h7V4A7 7 0 004 11z" fill="#FF5800" />
          {/* Top-Right Quadrant: Purple Tile with White Disc */}
          <rect x="12" y="4" width="8" height="7" rx="1" fill="#4F2683" />
          <circle cx="16" cy="7.5" r="2" fill="#FFFFFF" />
          {/* Bottom-Left Quadrant: Teal Chevron / Cross */}
          <rect x="4" y="12" width="7" height="8" rx="1" fill="#009A9B" />
          <path d="M5.5 13.5l4 5M9.5 13.5l-4 5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          {/* Bottom-Right Quadrant: Magenta / Pink Diamond */}
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
          {/* Official Lark Origami Bird Motif */}
          {/* Cyan Wing */}
          <path
            d="M3.5 14.5L12 4l-2.5 12-6-1.5z"
            fill="url(#lark-cyan-grad)"
          />
          {/* Cobalt Blue Body & Tail */}
          <path
            d="M12 4l8.5 7.5-11 4.5 2.5-12z"
            fill="url(#lark-blue-grad)"
          />
          {/* Cyan-Blue Underwing Accent */}
          <path
            d="M9.5 16l4 4.5 7-9-11 4.5z"
            fill="#00D6B9"
          />
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
          {/* Hexagonal Quality Seal */}
          <rect width="24" height="24" rx="4.5" fill="#062E20" stroke="#059669" strokeWidth="1" />
          {/* Greek Sigma Symbol (6σ) in Premium Gold */}
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

    case 'concentrix':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${iconSize} shrink-0 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Concentrix official logo"
          role="img"
        >
          <title>Concentrix</title>
          <rect width="24" height="24" rx="4.5" fill="#08182B" />
          {/* Concentrix Concentric Multi-Arc Telemetry Rings */}
          <circle cx="12" cy="12" r="8" stroke="#0284C7" strokeWidth="1.8" strokeDasharray="18 8" />
          <circle cx="12" cy="12" r="5" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="12 5" />
          <circle cx="12" cy="12" r="2.2" fill="#F97316" />
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
          <rect width="24" height="24" rx="4.5" fill="#0F1117" />
          {/* Iconic Accenture Greater-Than Arrow */}
          <path
            d="M8 6.5l7 5.5-7 5.5"
            stroke="#A100FF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
          {/* Academic Crest Shield in Navy & Gold */}
          <path
            d="M12 4l6 2.5v5.5c0 4.5-3 8-6 9-3-1-6-4.5-6-9V6.5L12 4z"
            fill="#1E3A8A"
            stroke="#F59E0B"
            strokeWidth="1.2"
          />
          {/* Academic Torch & Laurel Book Symbol */}
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
