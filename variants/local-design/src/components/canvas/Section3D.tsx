import React from 'react';
import { motion } from 'motion/react';
import { useAppMode } from '../../context/AppModeContext';

interface Section3DProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  initialRotateX?: number;
  initialY?: number;
  id?: string;
}

export const Section3D: React.FC<Section3DProps> = ({
  children,
  className = '',
  delay = 0,
  initialRotateX = 5,
  initialY = 32,
  id,
  ...rest
}) => {
  const { shouldReduceMotion } = useAppMode();

  if (shouldReduceMotion) {
    return (
      <motion.section
        id={id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.18 }}
        className={`w-full ${className}`}
        {...(rest as any)}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <div style={{ perspective: 1400 }} className="w-full">
      <motion.section
        id={id}
        initial={{
          opacity: 0,
          y: initialY,
          rotateX: initialRotateX,
          scale: 0.97
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1
        }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          type: 'spring',
          stiffness: 240,
          damping: 26,
          delay
        }}
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform, opacity'
        }}
        className={className}
        {...(rest as any)}
      >
        {children}
      </motion.section>
    </div>
  );
};
