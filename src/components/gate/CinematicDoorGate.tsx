import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Workflow, Sparkles, ArrowRight, X, Cpu, Users } from 'lucide-react';

export type PersonaType = 'software' | 'operations' | 'both';

export interface CinematicDoorGateProps {
  onSelectPersona: (persona: PersonaType) => void;
  onSkip: () => void;
  isMotionActive?: boolean;
}

export const CinematicDoorGate: React.FC<CinematicDoorGateProps> = ({
  onSelectPersona,
  onSkip,
  isMotionActive = true,
}) => {
  // Gate animation phases: 'closed' -> 'cracked' -> 'opening' -> 'complete'
  const [phase, setPhase] = useState<'closed' | 'cracked' | 'opening' | 'skipping'>('closed');
  const [chosenPersona, setChosenPersona] = useState<PersonaType | null>(null);

  // Transition from closed to cracked after a brief cinematic pause
  useEffect(() => {
    if (!isMotionActive) {
      // Reduced motion: open crack immediately
      setPhase('cracked');
      return;
    }
    const timer = setTimeout(() => {
      setPhase('cracked');
    }, 280);
    return () => clearTimeout(timer);
  }, [isMotionActive]);

  const handleChoose = useCallback((persona: PersonaType) => {
    if (phase === 'opening' || phase === 'skipping') return; // Prevent double-trigger
    setChosenPersona(persona);

    if (!isMotionActive) {
      // Reduced motion: immediately commit without 3D animation
      onSelectPersona(persona);
      return;
    }

    setPhase('opening');
    // Swing doors wide open, then hand off to parent
    const timer = setTimeout(() => {
      onSelectPersona(persona);
    }, 720);
    return () => clearTimeout(timer);
  }, [phase, isMotionActive, onSelectPersona]);

  const handleFastSkip = useCallback(() => {
    if (phase === 'opening' || phase === 'skipping') return;
    setPhase('skipping');
    setTimeout(() => {
      onSkip();
    }, 150);
  }, [phase, onSkip]);

  // Keyboard accessibility: ESC key to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleFastSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFastSkip]);

  // CSS 3D Rotation values for the door leaves
  // 34% visual gap: -32deg on left, +32deg on right
  const getLeftDoorRotation = () => {
    if (!isMotionActive) return 0;
    if (phase === 'closed') return 0;
    if (phase === 'cracked') return -32;
    if (phase === 'opening') return -95;
    return 0;
  };

  const getRightDoorRotation = () => {
    if (!isMotionActive) return 0;
    if (phase === 'closed') return 0;
    if (phase === 'cracked') return 32;
    if (phase === 'opening') return 95;
    return 0;
  };

  const doorTransition = isMotionActive
    ? { duration: phase === 'opening' ? 0.72 : 0.65, ease: [0.16, 1, 0.3, 1] }
    : { duration: 0 };

  return (
    <AnimatePresence>
      {phase !== 'skipping' && (
        <motion.div
          key="cinematic-door-gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[99999] bg-[#07090e] flex items-center justify-center select-none overflow-hidden"
          style={{ perspective: '1200px' }}
          role="dialog"
          aria-modal="true"
          aria-label="Welcome to Ali Akhmad Fauzie's Portfolio - Select Perspective"
        >
          {/* Ambient Radial Core Light leaking through center seam */}
          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${
              phase === 'cracked' ? 'opacity-80' : 'opacity-10'
            }`}
          >
            <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-orange-500/15 to-transparent blur-3xl" />
          </div>

          {/* =========================================================================
              LEFT DOOR PANEL (Software Developer persona motif)
              ========================================================================= */}
          <motion.div
            animate={{
              rotateY: getLeftDoorRotation(),
              opacity: phase === 'opening' ? 0.35 : 1,
            }}
            transition={doorTransition}
            style={{
              transformOrigin: 'left center',
              willChange: 'transform, opacity',
            }}
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-br from-[#0c0f17] via-[#090b11] to-[#04060a] border-r-2 border-cyan-500/60 shadow-[10px_0_40px_rgba(0,0,0,0.85)] z-10 flex flex-col justify-between p-6 sm:p-12 overflow-hidden"
          >
            {/* Subtle background tech circuit lines */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            {/* Top brand monogram watermark */}
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/50 tracking-widest uppercase">
              <Code2 size={15} className="text-cyan-400" />
              <span>Track 01 // Engineering</span>
            </div>

            {/* Door Leaf Handle & Persona Watermark */}
            <div className="self-end my-auto text-right pr-2 sm:pr-6 space-y-2 opacity-60">
              <div className="w-1.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent rounded-full ml-auto shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Software</p>
              <p className="text-sm sm:text-base font-bold text-slate-200">Developer</p>
            </div>

            <div className="text-[10px] font-mono text-slate-600">
              SEC.DEV // ARCHITECTURE
            </div>
          </motion.div>

          {/* =========================================================================
              RIGHT DOOR PANEL (Operations Team Manager persona motif)
              ========================================================================= */}
          <motion.div
            animate={{
              rotateY: getRightDoorRotation(),
              opacity: phase === 'opening' ? 0.35 : 1,
            }}
            transition={doorTransition}
            style={{
              transformOrigin: 'right center',
              willChange: 'transform, opacity',
            }}
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-bl from-[#0c0f17] via-[#090b11] to-[#04060a] border-l-2 border-orange-500/60 shadow-[-10px_0_40px_rgba(0,0,0,0.85)] z-10 flex flex-col justify-between p-6 sm:p-12 overflow-hidden"
          >
            {/* Subtle background industrial grid */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            {/* Top operational badge */}
            <div className="self-end flex items-center gap-2 text-xs font-mono text-orange-400/50 tracking-widest uppercase">
              <span>Track 02 // Leadership</span>
              <Workflow size={15} className="text-orange-400" />
            </div>

            {/* Door Leaf Handle & Persona Watermark */}
            <div className="self-start my-auto text-left pl-2 sm:pl-6 space-y-2 opacity-60">
              <div className="w-1.5 h-16 bg-gradient-to-b from-orange-400 to-transparent rounded-full shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
              <p className="text-xs font-mono text-orange-400 uppercase tracking-widest">Operations</p>
              <p className="text-sm sm:text-base font-bold text-slate-200">Team Manager</p>
            </div>

            <div className="self-end text-[10px] font-mono text-slate-600">
              SEC.OPS // PROCESS & ERP
            </div>
          </motion.div>

          {/* =========================================================================
              SELECTION HUD MODAL (Floating at z-20 in front of the door crack)
              ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{
              opacity: phase === 'cracked' ? 1 : 0,
              scale: phase === 'cracked' ? 1 : phase === 'opening' ? 1.05 : 0.94,
              y: phase === 'cracked' ? 0 : phase === 'opening' ? -12 : 12,
            }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`relative z-20 max-w-xl w-[92%] sm:w-full mx-auto flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#0b0e17]/85 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] ${
              phase !== 'cracked' ? 'pointer-events-none' : ''
            }`}
          >
            {/* Fast Skip Button (Top Right) */}
            <button
              onClick={handleFastSkip}
              className="absolute top-4 right-4 text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 py-1 px-2.5 rounded-md hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500"
              aria-label="Skip entrance gate and enter overview"
            >
              <span>Skip</span>
              <X size={14} />
            </button>

            {/* Header Lockup */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                <Sparkles size={12} className="text-orange-400 animate-pulse" />
                <span>DUAL PROFESSIONAL PROFILE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Which perspective would you like to explore?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                Ali brings high-leverage expertise across software engineering and operational leadership.
              </p>
            </div>

            {/* Choice Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-5">
              {/* Card 1: Software Developer */}
              <button
                onClick={() => handleChoose('software')}
                className={`group relative text-left p-5 rounded-xl transition-all duration-200 border flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer ${
                  chosenPersona === 'software'
                    ? 'bg-cyan-950/40 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)]'
                    : 'bg-gradient-to-b from-[#101524] to-[#0a0d18] border-cyan-500/30 hover:border-cyan-400/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                      <Cpu size={20} />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      CODE & CLOUD
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Software Developer
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    React 19, TypeScript, Cloud Functions, AI logic & high-performance enterprise platforms.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-cyan-500/15 flex items-center justify-between text-xs font-semibold text-cyan-400">
                  <span>Explore Engineering</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Card 2: Operations Team Manager */}
              <button
                onClick={() => handleChoose('operations')}
                className={`group relative text-left p-5 rounded-xl transition-all duration-200 border flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer ${
                  chosenPersona === 'operations'
                    ? 'bg-orange-950/40 border-orange-400 shadow-[0_0_25px_rgba(249,115,22,0.4)]'
                    : 'bg-gradient-to-b from-[#1b1411] to-[#0d0a08] border-orange-500/30 hover:border-orange-400/80 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/40 flex items-center justify-center text-orange-400">
                      <Users size={20} />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/10 text-orange-300 border border-orange-500/20">
                      PROCESS & ERP
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-orange-300 transition-colors">
                    Operations Team Manager
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Process optimization, SOPs, Lean Six Sigma, ERP migrations & cross-functional leadership.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-orange-500/15 flex items-center justify-between text-xs font-semibold text-orange-400">
                  <span>Explore Leadership</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Hybrid / Both Track Secondary Link */}
            <div className="flex items-center justify-between w-full pt-3 border-t border-white/5 text-xs">
              <button
                onClick={() => handleChoose('both')}
                className="text-slate-400 hover:text-slate-200 font-mono transition-colors focus:outline-none underline decoration-slate-600 underline-offset-4"
              >
                Explore Both Perspectives Simultaneously →
              </button>

              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                [ESC to skip]
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
