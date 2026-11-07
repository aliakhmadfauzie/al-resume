import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useAppMode } from '../../context/AppModeContext';

interface AppleCard3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  maxTilt?: number;
  scaleOnHover?: number;
}

export const AppleCard3D: React.FC<AppleCard3DProps> = ({
  children,
  className = '',
  glareColor = 'rgba(255, 255, 255, 0.12)',
  maxTilt = 8,
  scaleOnHover = 1.015,
  onClick,
  ...rest
}) => {
  const { shouldReduceMotion } = useAppMode();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates normalized from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for Apple-like natural weight & responsiveness
  const springConfig = { stiffness: 350, damping: 25, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D rotation transforms
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Dynamic glare coordinates (percentage 0% to 100%)
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY, shouldReduceMotion]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  if (shouldReduceMotion) {
    return (
      <div
        ref={cardRef}
        onClick={onClick}
        className={`relative overflow-hidden transition-all duration-200 ${className}`}
        {...(rest as any)}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      style={{ perspective: 1200 }}
      className="relative"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center'
        }}
        whileHover={{
          scale: scaleOnHover,
          transition: { type: 'spring', stiffness: 400, damping: 25 }
        }}
        whileTap={{
          scale: 0.985,
          transition: { type: 'spring', stiffness: 500, damping: 30 }
        }}
        className={`relative overflow-hidden will-change-transform ${className}`}
        {...(rest as any)}
      >
        {/* Dynamic Specular Glare Sheen Overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle 320px at ${gx}% ${gy}%, ${glareColor}, transparent 75%)`
            )
          }}
        />

        {/* Inner Card Children with slight 3D depth pop */}
        <div style={{ transform: 'translateZ(1px)' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};
