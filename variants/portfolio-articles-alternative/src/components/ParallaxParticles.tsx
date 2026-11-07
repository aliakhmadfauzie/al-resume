import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface ParallaxParticlesProps {
  className?: string;
  count?: number;
}

interface Particle {
  id: number;
  x: number; // percentage
  y: number; // percentage
  size: number; // px
  opacity: number;
  speed: number;
  floatOffset: number;
  depth: number;
  type: 'circle' | 'cross' | 'square';
}

export const ParallaxParticles: React.FC<ParallaxParticlesProps> = ({
  className = 'absolute inset-0 pointer-events-none overflow-hidden z-0',
  count = 24,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  if (particlesRef.current.length === 0) {
    particlesRef.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: 5 + (i * 92) / count + (Math.sin(i * 3.7) * 4),
      y: 8 + ((i * 88) % 84) + (Math.cos(i * 2.3) * 6),
      size: i % 4 === 0 ? 6 : i % 3 === 0 ? 4 : 2.5,
      opacity: 0.12 + ((i % 5) * 0.04),
      speed: 2 + (i % 4) * 0.8,
      floatOffset: 12 + (i % 6) * 4,
      depth: 0.2 + (i % 4) * 0.25, // parallax depth factor
      type: i % 5 === 0 ? 'cross' : i % 3 === 0 ? 'square' : 'circle',
    }));
  }

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Continuous harmonic bobbing for each particle element
      particlesRef.current.forEach((particle) => {
        const el = containerRef.current?.querySelector(`.particle-${particle.id}`);
        if (el) {
          gsap.to(el, {
            y: `+=${particle.floatOffset}`,
            x: `+=${particle.floatOffset * 0.4 * (particle.id % 2 === 0 ? 1 : -1)}`,
            rotation: particle.type !== 'circle' ? 180 : 0,
            duration: particle.speed,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: (particle.id % 7) * 0.3,
          });
        }
      });

      // Mouse Parallax listener on window
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Normalized coordinates from -1 to 1 relative to center
        const relX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const relY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

        particlesRef.current.forEach((particle) => {
          const el = containerRef.current?.querySelector(`.particle-layer-${particle.id}`);
          if (el) {
            gsap.to(el, {
              x: relX * 25 * particle.depth,
              y: relY * 20 * particle.depth,
              duration: 1.2,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          }
        });
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, [count]);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      {particlesRef.current.map((p) => (
        <div
          key={p.id}
          className={`particle-layer-${p.id} absolute will-change-transform`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
        >
          <div
            className={`particle-${p.id} flex items-center justify-center`}
            style={{ opacity: p.opacity }}
          >
            {p.type === 'circle' && (
              <span
                className="rounded-full bg-[#121212]"
                style={{ width: `${p.size}px`, height: `${p.size}px` }}
              />
            )}
            {p.type === 'square' && (
              <span
                className="bg-[#1d4ed8] rotate-45"
                style={{ width: `${p.size}px`, height: `${p.size}px` }}
              />
            )}
            {p.type === 'cross' && (
              <span
                className="font-mono-code text-[10px] text-[#0f766e] font-bold select-none"
              >
                +
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
