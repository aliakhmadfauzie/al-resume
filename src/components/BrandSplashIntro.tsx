import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BrandSplashIntroProps {
  onComplete?: () => void;
  minDurationMs?: number;
}

export const BrandSplashIntro: React.FC<BrandSplashIntroProps> = ({
  onComplete,
  minDurationMs = 750
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, minDurationMs);

    return () => clearTimeout(timer);
  }, [minDurationMs, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="pwa-splash-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }}
          className="fixed inset-0 z-[99999] bg-[#090a0f] flex flex-col items-center justify-center p-6 select-none cursor-pointer overflow-hidden"
          style={{ willChange: 'opacity, transform' }}
          role="status"
          aria-live="polite"
          aria-label="Loading Ali Akhmad Fauzie Portfolio PWA"
        >
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#f97316]/15 via-[#06b6d4]/10 to-transparent blur-3xl pointer-events-none" />

          {/* Center Brand Emblem & Monogram */}
          <div className="relative flex flex-col items-center text-center space-y-6 z-10">
            {/* Animated Hexagon Logo Frame */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center"
            >
              {/* Outer Pulsing Hexagon Ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f97316] via-[#06b6d4] to-[#f97316] p-[2px] shadow-[0_0_40px_rgba(249,115,22,0.35)] animate-pulse">
                <div className="w-full h-full bg-[#0d0f17] rounded-2xl flex items-center justify-center" />
              </div>

              {/* Logo SVG Image */}
              <img
                src="/assets/branding/logo.svg"
                alt="Ali Akhmad Fauzie Logo"
                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_0_16px_rgba(249,115,22,0.6)]"
              />
            </motion.div>

            {/* Typography Lockup */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="space-y-1.5"
            >
              <div className="text-lg sm:text-xl font-extrabold tracking-widest text-white uppercase font-sans">
                ALI AKHMAD FAUZIE, B.I.B.M. (HONS.)
              </div>
              <div className="text-[11px] sm:text-xs font-mono font-medium tracking-widest text-[#f97316] uppercase">
                ENTERPRISE SOLUTION ARCHITECT
              </div>
            </motion.div>

            {/* Progress Conduit Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 140, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="w-36 h-[2px] bg-[#1a1e2b] rounded-full overflow-hidden relative"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 0.85, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#f97316] to-[#06b6d4]"
              />
            </motion.div>

            {/* Microstatus kicker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>PWA · SYSTEM INITIALIZED</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
