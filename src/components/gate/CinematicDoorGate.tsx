import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Workflow, Sparkles, ArrowRight, X, Cpu, Users } from 'lucide-react';

export type PersonaType = 'software' | 'operations' | 'both';

export interface CinematicDoorGateProps {
  onSelectPersona: (persona: PersonaType) => void;
  onSkip: () => void;
  isMotionActive?: boolean;
}

/**
 * Exploding debris particles rendered when the unchosen track card shatters
 */
const ShatterDebris: React.FC<{ color: string }> = ({ color }) => {
  const fragments = [
    { x: -55, y: -35, r: -65, w: 14, h: 8 },
    { x: 50, y: -45, r: 55, w: 10, h: 12 },
    { x: -70, y: 10, r: -35, w: 16, h: 6 },
    { x: 65, y: 25, r: 75, w: 9, h: 14 },
    { x: -25, y: -60, r: -90, w: 18, h: 6 },
    { x: 30, y: 55, r: 45, w: 12, h: 10 },
    { x: -40, y: 45, r: -70, w: 14, h: 7 },
    { x: 55, y: -15, r: 40, w: 8, h: 14 },
    { x: -10, y: 65, r: -30, w: 12, h: 8 },
    { x: 15, y: -55, r: 80, w: 10, h: 10 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-visible flex items-center justify-center">
      {fragments.map((frag, idx) => (
        <motion.div
          key={idx}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
          animate={{
            x: frag.x * 1.6,
            y: frag.y * 1.6,
            opacity: 0,
            scale: 0.1,
            rotate: frag.r * 2.5,
          }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="absolute rounded"
          style={{
            width: frag.w,
            height: frag.h,
            backgroundColor: color,
            boxShadow: `0 0 12px ${color}`,
          }}
        />
      ))}
    </div>
  );
};

export const CinematicDoorGate: React.FC<CinematicDoorGateProps> = ({
  onSelectPersona,
  onSkip,
  isMotionActive = true,
}) => {
  // Gate animation phases:
  // 'closed' -> 'cracked' -> 'shattering' -> 'opening' -> 'skipping'
  const [phase, setPhase] = useState<'closed' | 'cracked' | 'shattering' | 'opening' | 'skipping'>('closed');
  const [chosenPersona, setChosenPersona] = useState<PersonaType | null>(null);

  const animTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (animTimerRef.current) clearTimeout(animTimerRef.current);
      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
    };
  }, []);

  // Transition from closed to cracked after a brief pause
  useEffect(() => {
    if (!isMotionActive) {
      setPhase('cracked');
      return;
    }
    const timer = setTimeout(() => {
      setPhase('cracked');
    }, 240);
    return () => clearTimeout(timer);
  }, [isMotionActive]);

  const handleChoose = useCallback(
    (persona: PersonaType) => {
      if (phase !== 'cracked') return; // Only allow click when waiting at the door
      setChosenPersona(persona);

      if (!isMotionActive) {
        onSelectPersona(persona);
        return;
      }

      // Step 1: Unchosen card shatters & chosen card flies back inward through the door (340ms)
      setPhase('shattering');

      // Step 2: Double doors swing 100% wide open
      animTimerRef.current = setTimeout(() => {
        setPhase('opening');
      }, 340);

      // Step 3: Complete entrance into tailored home screen
      finishTimerRef.current = setTimeout(() => {
        onSelectPersona(persona);
      }, 920);
    },
    [phase, isMotionActive, onSelectPersona]
  );

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
    if (phase === 'cracked' || phase === 'shattering') return -32;
    if (phase === 'opening') return -95;
    return 0;
  };

  const getRightDoorRotation = () => {
    if (!isMotionActive) return 0;
    if (phase === 'closed') return 0;
    if (phase === 'cracked' || phase === 'shattering') return 32;
    if (phase === 'opening') return 95;
    return 0;
  };

  const doorTransition = isMotionActive
    ? { duration: phase === 'opening' ? 0.7 : 0.6, ease: [0.16, 1, 0.3, 1] }
    : { duration: 0 };

  return (
    <AnimatePresence>
      {phase !== 'skipping' && (
        <motion.div
          key="cinematic-door-gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[99999] bg-[#05070c] flex items-center justify-center select-none overflow-hidden"
          style={{ perspective: '1200px' }}
          role="dialog"
          aria-modal="true"
          aria-label="Select Portfolio Perspective"
        >
          {/* Ambient Core Portal Light leaking through center seam */}
          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${
              phase === 'cracked' || phase === 'shattering' ? 'opacity-90' : 'opacity-10'
            }`}
          >
            <div className="w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-cyan-500/25 via-orange-500/20 to-transparent blur-3xl animate-pulse" />
          </div>

          {/* =========================================================================
              LEFT DOOR PANEL (Software Developer persona motif)
              ========================================================================= */}
          <motion.div
            animate={{
              rotateY: getLeftDoorRotation(),
              opacity: phase === 'opening' ? 0.2 : 1,
            }}
            transition={doorTransition}
            style={{
              transformOrigin: 'left center',
              willChange: 'transform, opacity',
            }}
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-br from-[#0b0e16] via-[#080a10] to-[#030508] border-r-2 border-cyan-500/70 shadow-[12px_0_45px_rgba(0,0,0,0.9)] z-10 flex flex-col justify-between p-6 sm:p-12 overflow-hidden"
          >
            {/* Subtle background tech circuit lines */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/50 tracking-widest uppercase">
              <Code2 size={15} className="text-cyan-400" />
              <span>Track 01 // Code</span>
            </div>

            {/* Door Leaf Handle Accent */}
            <div className="self-end my-auto text-right pr-2 sm:pr-6 space-y-2 opacity-50">
              <div className="w-1.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent rounded-full ml-auto shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
              <p className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">Software</p>
              <p className="text-sm font-bold text-slate-300">Developer</p>
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
              opacity: phase === 'opening' ? 0.2 : 1,
            }}
            transition={doorTransition}
            style={{
              transformOrigin: 'right center',
              willChange: 'transform, opacity',
            }}
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-bl from-[#0b0e16] via-[#080a10] to-[#030508] border-l-2 border-orange-500/70 shadow-[-12px_0_45px_rgba(0,0,0,0.9)] z-10 flex flex-col justify-between p-6 sm:p-12 overflow-hidden"
          >
            {/* Subtle background industrial grid */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="self-end flex items-center gap-2 text-xs font-mono text-orange-400/50 tracking-widest uppercase">
              <span>Track 02 // Ops</span>
              <Workflow size={15} className="text-orange-400" />
            </div>

            {/* Door Leaf Handle Accent */}
            <div className="self-start my-auto text-left pl-2 sm:pl-6 space-y-2 opacity-50">
              <div className="w-1.5 h-16 bg-gradient-to-b from-orange-400 to-transparent rounded-full shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
              <p className="text-[11px] font-mono text-orange-400 uppercase tracking-widest">Operations</p>
              <p className="text-sm font-bold text-slate-300">Team Manager</p>
            </div>

            <div className="self-end text-[10px] font-mono text-slate-600">
              SEC.OPS // PROCESS & ERP
            </div>
          </motion.div>

          {/* =========================================================================
              COMPACT RECTANGULAR PORTAL HUD
              "datang dr dalam terus nunggu di pintu"
              Snug fit in doorway (~300px), edges almost touch the cracked doors
              ========================================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.25,
              y: 35,
              filter: 'blur(16px)',
            }}
            animate={{
              opacity: phase === 'closed' ? 0 : 1,
              scale: phase === 'closed' ? 0.25 : 1,
              y: phase === 'closed' ? 35 : 0,
              filter: phase === 'closed' ? 'blur(16px)' : 'blur(0px)',
            }}
            transition={{
              duration: 0.68,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-20 w-[285px] sm:w-[315px] flex flex-col items-center select-none"
          >
            {/* Top Minimalist Eyebrow Badge */}
            <div className="mb-3 px-3 py-1 rounded-full bg-[#080b12]/90 border border-white/10 text-[10px] font-mono text-slate-300 tracking-widest uppercase flex items-center gap-1.5 shadow-lg backdrop-blur-md">
              <Sparkles size={11} className="text-orange-400 animate-pulse" />
              <span>CHOOSE PERSPECTIVE</span>
            </div>

            {/* Stack of Two Compact Rectangular Bars */}
            <div className="flex flex-col gap-2.5 w-full">
              {/* CARD 1: Software Developer */}
              <div className="relative w-full">
                <motion.button
                  type="button"
                  onClick={() => handleChoose('software')}
                  disabled={phase !== 'cracked'}
                  animate={
                    chosenPersona === 'software'
                      ? {
                          // Selected card flies inward back into the portal room
                          scale: 0.2,
                          y: -35,
                          opacity: 0,
                          filter: 'blur(8px)',
                          transition: { duration: 0.45, ease: 'easeIn' },
                        }
                      : chosenPersona && chosenPersona !== 'software'
                      ? {
                          // Unselected card shatters & crumbles before doors open
                          scale: [1, 1.06, 0.65],
                          x: [0, -5, 6, -4, 0],
                          rotate: [0, -4, 5, -2, 0],
                          opacity: [1, 0.9, 0],
                          filter: ['blur(0px)', 'brightness(2.2) blur(3px)', 'blur(12px)'],
                          transition: { duration: 0.32, ease: 'easeOut' },
                        }
                      : { scale: 1, opacity: 1 }
                  }
                  className="group relative w-full px-3.5 py-3 rounded-xl bg-[#080d1a]/95 backdrop-blur-xl border border-cyan-500/50 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.55)] transition-all text-left flex items-center justify-between cursor-pointer focus:outline-none focus:ring-1 focus:ring-cyan-400"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                      <Cpu size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-cyan-400 tracking-wider uppercase">
                        Track 01 // Code
                      </div>
                      <div className="text-xs sm:text-[13px] font-bold text-white group-hover:text-cyan-200 transition-colors">
                        Software Developer
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0" />
                </motion.button>

                {/* Explosive Debris if Software Developer is unchosen */}
                {chosenPersona && chosenPersona !== 'software' && (
                  <ShatterDebris color="#06b6d4" />
                )}
              </div>

              {/* CARD 2: Operations Team Manager */}
              <div className="relative w-full">
                <motion.button
                  type="button"
                  onClick={() => handleChoose('operations')}
                  disabled={phase !== 'cracked'}
                  animate={
                    chosenPersona === 'operations'
                      ? {
                          // Selected card flies inward back into the portal room
                          scale: 0.2,
                          y: -35,
                          opacity: 0,
                          filter: 'blur(8px)',
                          transition: { duration: 0.45, ease: 'easeIn' },
                        }
                      : chosenPersona && chosenPersona !== 'operations'
                      ? {
                          // Unselected card shatters & crumbles before doors open
                          scale: [1, 1.06, 0.65],
                          x: [0, 5, -6, 4, 0],
                          rotate: [0, 4, -5, 2, 0],
                          opacity: [1, 0.9, 0],
                          filter: ['blur(0px)', 'brightness(2.2) blur(3px)', 'blur(12px)'],
                          transition: { duration: 0.32, ease: 'easeOut' },
                        }
                      : { scale: 1, opacity: 1 }
                  }
                  className="group relative w-full px-3.5 py-3 rounded-xl bg-[#140c08]/95 backdrop-blur-xl border border-orange-500/50 hover:border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:shadow-[0_0_30px_rgba(249,115,22,0.55)] transition-all text-left flex items-center justify-between cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-400"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/50 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform shrink-0">
                      <Users size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-orange-400 tracking-wider uppercase">
                        Track 02 // Ops
                      </div>
                      <div className="text-xs sm:text-[13px] font-bold text-white group-hover:text-orange-200 transition-colors">
                        Operations Team Manager
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-orange-400 group-hover:translate-x-1 transition-transform shrink-0" />
                </motion.button>

                {/* Explosive Debris if Operations Team Manager is unchosen */}
                {chosenPersona && chosenPersona !== 'operations' && (
                  <ShatterDebris color="#f97316" />
                )}
              </div>
            </div>

            {/* Bottom Actions: Hybrid & Skip */}
            <motion.div
              animate={{
                opacity: phase === 'shattering' || phase === 'opening' ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="mt-3 flex items-center justify-between w-full px-1 text-[11px] font-mono text-slate-400"
            >
              <button
                type="button"
                onClick={() => handleChoose('both')}
                disabled={phase !== 'cracked'}
                className="hover:text-slate-200 underline decoration-slate-600 underline-offset-4 transition-colors cursor-pointer"
              >
                Both (Hybrid) →
              </button>

              <button
                type="button"
                onClick={handleFastSkip}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                aria-label="Skip entrance gate"
              >
                <span>Skip [ESC]</span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
