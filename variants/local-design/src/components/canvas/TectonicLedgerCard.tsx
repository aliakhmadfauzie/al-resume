import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useAppMode } from '../../context/AppModeContext';

export interface TectonicLedgerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  indexCode?: string; // e.g. "[01 / 06]" or "SYS_01"
  statusBadge?: string; // e.g. "PRODUCTION" or "ACTIVE_NODE"
  accentColor?: string; // e.g. "#FF3B30", "#00dbe7", "#00FF66"
  maxTilt?: number;
  scaleOnHover?: number;
  interactive?: boolean;
}

export const TectonicLedgerCard: React.FC<TectonicLedgerCardProps> = ({
  children,
  className = '',
  indexCode,
  statusBadge,
  accentColor = '#FF3B30',
  maxTilt = 7,
  scaleOnHover = 1.012,
  interactive = true,
  onClick,
  onKeyDown,
  ...rest
}) => {
  const { shouldReduceMotion } = useAppMode();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized mouse position from -0.5 to +0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High-performance spring dynamics
  const springConfig = { stiffness: 420, damping: 28, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Spatial rotations
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Specular sheen coordinates
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY, shouldReduceMotion, interactive]);

  const handleMouseEnter = useCallback(() => {
    if (interactive) setIsHovered(true);
  }, [interactive]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const handleKeyInteraction = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onKeyDown) {
      onKeyDown(e);
      return;
    }
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick(e as any);
    }
  }, [onClick, onKeyDown]);

  // Hairline Blueprint crosshairs for corners
  const crosshair = (
    <span className="pointer-events-none select-none font-mono text-[9px] text-white/20 leading-none">
      +
    </span>
  );

  if (shouldReduceMotion) {
    return (
      <div
        ref={cardRef}
        onClick={onClick}
        onKeyDown={handleKeyInteraction}
        tabIndex={onClick ? 0 : undefined}
        role={onClick ? 'button' : undefined}
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d11] p-6 transition-colors hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30] ${className}`}
        {...(rest as any)}
      >
        {/* Top Architectural Serial Banner */}
        {(indexCode || statusBadge) && (
          <div className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-2 font-mono text-[10px] text-neutral-400">
            {indexCode && <span className="font-semibold tracking-wider text-neutral-300">{indexCode}</span>}
            {statusBadge && (
              <span className="inline-flex items-center gap-1.5 uppercase tracking-widest text-[9px] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                {statusBadge}
              </span>
            )}
          </div>
        )}
        {children}
      </div>
    );
  }

  return (
    <div style={{ perspective: 1200 }} className="relative group">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        onKeyDown={handleKeyInteraction}
        tabIndex={onClick ? 0 : undefined}
        role={onClick ? 'button' : undefined}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center'
        }}
        whileHover={{
          scale: interactive ? scaleOnHover : 1,
          transition: { type: 'spring', stiffness: 450, damping: 25 }
        }}
        whileTap={{
          scale: interactive ? 0.985 : 1,
          transition: { type: 'spring', stiffness: 500, damping: 30 }
        }}
        className={`relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0c0e13]/90 backdrop-blur-xl transition-colors duration-300 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30] will-change-transform ${className}`}
        {...(rest as any)}
      >
        {/* ── Precision Architectural Blueprint Corner Crosshairs ── */}
        <div className="pointer-events-none absolute top-1.5 left-2 z-20">{crosshair}</div>
        <div className="pointer-events-none absolute top-1.5 right-2 z-20">{crosshair}</div>
        <div className="pointer-events-none absolute bottom-1.5 left-2 z-20">{crosshair}</div>
        <div className="pointer-events-none absolute bottom-1.5 right-2 z-20">{crosshair}</div>

        {/* Dynamic Specular Sheen Layer */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle 280px at ${gx}% ${gy}%, rgba(255, 255, 255, 0.08), transparent 75%)`
            )
          }}
        />

        {/* Top Architectural Serial Banner */}
        {(indexCode || statusBadge) && (
          <div className="relative z-20 mb-4 flex items-center justify-between border-b border-white/[0.06] px-1 pb-2.5 font-mono text-[10px] text-neutral-400">
            {indexCode && (
              <span className="font-semibold tracking-wider text-neutral-300 flex items-center gap-1.5">
                <span className="text-[9px] text-neutral-500">//</span>
                <span>{indexCode}</span>
              </span>
            )}
            {statusBadge && (
              <span className="inline-flex items-center gap-1.5 uppercase tracking-widest text-[9px] text-neutral-300">
                <span
                  className="h-1.5 w-1.5 rounded-full transition-shadow duration-300"
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: isHovered ? `0 0 8px ${accentColor}` : 'none'
                  }}
                />
                {statusBadge}
              </span>
            )}
          </div>
        )}

        {/* Content Children translated slightly in Z-space */}
        <div style={{ transform: 'translateZ(1.5px)' }} className="relative z-20">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
