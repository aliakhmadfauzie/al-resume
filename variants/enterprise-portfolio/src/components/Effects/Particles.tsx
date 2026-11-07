import React, { useEffect, useRef } from "react";

// ============================================================
// Types
// ============================================================
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export interface ParticlesProps {
  /** Number of particles to render */
  count?: number;
  /** Particle color (hex or rgb) */
  color?: string;
  /** Maximum particle size in pixels */
  maxSize?: number;
  /** Movement speed multiplier */
  speed?: number;
  /** Maximum particle opacity (0-1) */
  opacity?: number;
  /** Enable mouse interaction (particles avoid cursor) */
  mouseInteraction?: boolean;
  /** Connection line distance threshold */
  connectionDistance?: number;
}

// ============================================================
// Component
// ============================================================
export const Particles: React.FC<ParticlesProps> = ({
  count = 50,
  color = "#58A6FF",
  maxSize = 3,
  speed = 0.5,
  opacity = 0.3,
  mouseInteraction = true,
  connectionDistance = 120,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize handler
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      dimensionsRef.current = { width: canvas.width, height: canvas.height };
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Init particles
    const initParticles = () => {
      const { width, height } = dimensionsRef.current;
      const arr: Particle[] = [];
      for (let i = 0; i < count; i++) {
        arr.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * maxSize + 0.5,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          opacity: Math.random() * opacity + 0.1,
        });
      }
      particlesRef.current = arr;
    };

    initParticles();

    // Animation loop
    const animate = () => {
      const dpr = window.devicePixelRatio || 1;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]!;

        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Mouse interaction
        if (mouseInteraction) {
          const dx = p.x - mouseRef.current.x * dpr;
          const dy = p.y - mouseRef.current.y * dpr;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const force = (150 - distance) / 150;
            p.x += dx * force * 0.02;
            p.y += dy * force * 0.02;
          }
        }

        // Wrap around
        const { width, height } = dimensionsRef.current;
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
        if (p.y > height) p.y = 0;
        if (p.y < 0) p.y = height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]!;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = color;
            ctx.globalAlpha = (1 - distance / connectionDistance) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    let rafId = 0;
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
        rafId = 0;
      });
    };

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (mouseInteraction && !isMobile) {
      window.addEventListener("mousemove", throttledMouseMove, {
        passive: true,
      });
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", throttledMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    count,
    color,
    maxSize,
    speed,
    opacity,
    mouseInteraction,
    connectionDistance,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};
