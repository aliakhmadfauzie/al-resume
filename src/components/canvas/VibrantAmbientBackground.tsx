import React, { useEffect, useState, useRef } from 'react';
// Zero-dependency motion check
import { AppleWebGLMesh } from './AppleWebGLMesh';

export const VibrantAmbientBackground: React.FC = () => {
  const shouldReduceMotion = false;
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let rafId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (currentX === -1000) {
        currentX = targetX;
        currentY = targetY;
      }
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMousePos({ x: Math.round(currentX), y: Math.round(currentY) });
      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(rafId);
    };
  }, [shouldReduceMotion]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#020408]"
      aria-hidden="true"
    >
      {/* â”€â”€ Dynamic Vibrant Aurora Nebulae â”€â”€ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Orb 1: Electric Azure / Cyan Glow (Top-Left) */}
        <div 
          className={`absolute -top-32 -left-32 w-[680px] h-[680px] rounded-full blur-[130px] opacity-35 mix-blend-screen transition-transform duration-1000 ${
            shouldReduceMotion ? '' : 'animate-aurora-drift-1'
          }`}
          style={{
            background: 'radial-gradient(circle, #00dbe7 0%, #0078d4 45%, rgba(0, 40, 100, 0) 70%)'
          }}
        />

        {/* Orb 2: Royal Violet / Vivid Fuchsia Bloom (Top-Right / Center) */}
        <div 
          className={`absolute top-10 right-[-10%] w-[760px] h-[760px] rounded-full blur-[140px] opacity-30 mix-blend-screen transition-transform duration-1000 ${
            shouldReduceMotion ? '' : 'animate-aurora-drift-2'
          }`}
          style={{
            background: 'radial-gradient(circle, #b5179e 0%, #7209b7 40%, rgba(50, 0, 80, 0) 70%)'
          }}
        />

        {/* Orb 3: Radiant Apple Blue & Indigo Depth (Center-Mid) */}
        <div 
          className={`absolute top-[35%] left-[20%] w-[820px] h-[820px] rounded-full blur-[160px] opacity-25 mix-blend-screen transition-transform duration-1000 ${
            shouldReduceMotion ? '' : 'animate-aurora-drift-3'
          }`}
          style={{
            background: 'radial-gradient(circle, #2563eb 0%, #1e1b4b 50%, rgba(10, 10, 40, 0) 75%)'
          }}
        />

        {/* Orb 4: Warm Solar Amber / Ember Highlight (Mid-Bottom Right) */}
        <div 
          className={`absolute bottom-[-10%] right-[15%] w-[620px] h-[620px] rounded-full blur-[140px] opacity-20 mix-blend-screen transition-transform duration-1000 ${
            shouldReduceMotion ? '' : 'animate-aurora-drift-4'
          }`}
          style={{
            background: 'radial-gradient(circle, #f59e0b 0%, #d97706 40%, rgba(120, 50, 0, 0) 70%)'
          }}
        />

        {/* Orb 5: Deep Emerald / Mint Accent (Bottom-Left) */}
        <div 
          className={`absolute -bottom-20 -left-20 w-[640px] h-[640px] rounded-full blur-[150px] opacity-20 mix-blend-screen transition-transform duration-1000 ${
            shouldReduceMotion ? '' : 'animate-aurora-drift-1'
          }`}
          style={{
            background: 'radial-gradient(circle, #30d158 0%, #059669 45%, rgba(0, 50, 30, 0) 70%)'
          }}
        />
      </div>

      {/* â”€â”€ Perspective Floating Architectural Blueprint Panels in Background â”€â”€ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Panel 1: Top-Right Enterprise M365 Rebuild Showcase */}
        <div 
          className={`absolute -top-12 right-[-10%] sm:right-[-6%] w-[580px] sm:w-[720px] lg:w-[860px] aspect-[16/10] rounded-3xl overflow-hidden pointer-events-none transition-transform duration-1000 ${
            shouldReduceMotion ? '' : 'animate-float-panel-1'
          }`}
          style={{
            transform: shouldReduceMotion ? 'perspective(1400px) rotateX(12deg) rotateY(-14deg) scale(0.92)' : undefined,
            boxShadow: '0 0 90px rgba(0, 219, 231, 0.16)',
            border: '1px solid rgba(0, 219, 231, 0.22)',
            maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 35%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 35%, transparent 95%)'
          }}
        >
          <img 
            src="/showcase-articles/enterprise-m365-ioi/portfolio-ui-screenshot.png"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover object-top opacity-35 filter brightness-110 contrast-125 saturate-125"
          />
          {/* Cyan/Azure Rim Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0078d4]/20 via-transparent to-[#00dbe7]/30 pointer-events-none" />
        </div>

        {/* Panel 2: Bottom-Left Power Platform & Dataverse Topology */}
        <div 
          className={`absolute bottom-[-16%] left-[-12%] sm:left-[-7%] w-[540px] sm:w-[680px] lg:w-[820px] aspect-[16/10] rounded-3xl overflow-hidden pointer-events-none transition-transform duration-1000 ${
            shouldReduceMotion ? '' : 'animate-float-panel-2'
          }`}
          style={{
            transform: shouldReduceMotion ? 'perspective(1400px) rotateX(-10deg) rotateY(12deg) scale(0.9)' : undefined,
            boxShadow: '0 0 90px rgba(168, 85, 247, 0.16)',
            border: '1px solid rgba(168, 85, 247, 0.22)',
            maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 35%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 35%, transparent 95%)'
          }}
        >
          <img 
            src="/showcase-articles/power-platform-portfolio/portfolio-ui-screenshot.png"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover object-top opacity-30 filter brightness-110 contrast-125 saturate-125"
          />
          {/* Violet/Indigo Rim Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-bl from-[#7209b7]/25 via-transparent to-[#2563eb]/25 pointer-events-none" />
        </div>

        {/* Panel 3: Mid-Right AI & ATS Automation Interface */}
        <div 
          className="hidden xl:block absolute top-[42%] right-[-14%] w-[680px] aspect-[16/10] rounded-3xl overflow-hidden pointer-events-none opacity-22 filter brightness-105 contrast-120"
          style={{
            transform: 'perspective(1400px) rotateX(8deg) rotateY(-20deg) scale(0.85)',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 90%)',
            border: '1px solid rgba(255, 255, 255, 0.14)'
          }}
        >
          <img 
            src="/showcase-articles/ai-and-tools/portfolio-ui-screenshot.png"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-[#bf5af2]/15 pointer-events-none" />
        </div>

      </div>

      {/* â”€â”€ Interactive Pointer Spotlight Aura Follower â”€â”€ */}
      {!shouldReduceMotion && mousePos.x !== -1000 && (
        <div
          className="absolute w-[560px] h-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 opacity-25 mix-blend-screen"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle, rgba(0, 219, 231, 0.45) 0%, rgba(168, 85, 247, 0.25) 40%, rgba(0, 0, 0, 0) 70%)'
          }}
        />
      )}

      {/* â”€â”€ Luminous 3D WebGL Constellation Canvas â”€â”€ */}
      <div className="absolute inset-0">
        <AppleWebGLMesh className="w-full h-full" opacity={0.65} />
      </div>

      {/* â”€â”€ Subtle Cybernetic Precision Micro-Grid Pattern â”€â”€ */}
      <div 
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 90%)'
        }}
      />

      {/* â”€â”€ Soft Edge Vignette for Focus & Contrast â”€â”€ */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(2, 4, 8, 0.35) 60%, rgba(2, 4, 8, 0.88) 100%)'
        }}
      />
    </div>
  );
};
