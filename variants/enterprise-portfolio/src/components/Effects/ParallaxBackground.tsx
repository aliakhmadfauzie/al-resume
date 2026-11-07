import React, { useEffect, useRef, useState, useCallback } from 'react';

// ============================================================
// Types
// ============================================================
export interface ParallaxBackgroundProps {
  children: React.ReactNode;
  /** Parallax movement speed (0 = none, higher = more movement) */
  speed?: number;
  className?: string;
}

// ============================================================
// Component
// ============================================================
export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children,
  speed = 0.05,
  className = '',
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      targetRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    },
    [],
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth animation loop
    const animate = () => {
      setOffset(prev => ({
        x: prev.x + (targetRef.current.x * speed * 40 - prev.x) * 0.08,
        y: prev.y + (targetRef.current.y * speed * 40 - prev.y) * 0.08,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [speed, handleMouseMove]);

  return (
    <div
      className={className}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
