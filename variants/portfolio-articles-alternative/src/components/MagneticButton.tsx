import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  magneticStrength?: number; // Distance multiplier (default 0.35)
  textStrength?: number; // Inner text parallax multiplier (default 0.2)
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  id?: string;
  'aria-label'?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  magneticStrength = 0.35,
  textStrength = 0.2,
  onClick,
  href,
  id,
  'aria-label': ariaLabel,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const btn = buttonRef.current;
    const content = contentRef.current;
    if (prefersReducedMotion || !btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      // Distance from button center
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Magnetic pull translation
      gsap.to(btn, {
        x: distanceX * magneticStrength,
        y: distanceY * magneticStrength,
        rotateX: -(distanceY / rect.height) * 8,
        rotateY: (distanceX / rect.width) * 8,
        duration: 0.3,
        ease: 'power2.out',
      });

      if (content) {
        gsap.to(content, {
          x: distanceX * textStrength,
          y: distanceY * textStrength,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      // Snap back with elastic bounce
      gsap.to(btn, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.4)',
      });

      if (content) {
        gsap.to(content, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.4)',
        });
      }
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf([btn, content]);
    };
  }, [magneticStrength, textStrength]);

  const innerContent = (
    <span
      ref={contentRef}
      className="inline-flex items-center gap-2 will-change-transform transform-gpu select-none"
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <div ref={buttonRef} className="inline-block perspective-[600px] will-change-transform transform-gpu">
        <a
          href={href}
          id={id}
          aria-label={ariaLabel}
          onClick={onClick}
          className={`inline-flex items-center justify-center ${className}`}
        >
          {innerContent}
        </a>
      </div>
    );
  }

  return (
    <div ref={buttonRef} className="inline-block perspective-[600px] will-change-transform transform-gpu">
      <button
        id={id}
        aria-label={ariaLabel}
        onClick={onClick}
        type="button"
        className={`inline-flex items-center justify-center ${className}`}
      >
        {innerContent}
      </button>
    </div>
  );
};
