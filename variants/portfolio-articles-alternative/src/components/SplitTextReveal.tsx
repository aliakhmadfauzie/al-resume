import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface SplitTextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const SplitTextReveal: React.FC<SplitTextRevealProps> = ({
  text,
  className = '',
  wordClassName = '',
  delay = 0.1,
  stagger = 0.05,
  duration = 0.8,
  highlightWords = [],
  highlightClassName = 'font-normal text-[#121212]',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const words = containerRef.current?.querySelectorAll('.split-word-inner');
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          {
            yPercent: 120,
            opacity: 0,
            rotateX: -20,
          },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration,
            delay,
            stagger,
            ease: 'power3.out',
            force3D: true,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [text, delay, stagger, duration]);

  const words = text.split(' ');

  return (
    <span ref={containerRef} className={`inline-block perspective-[800px] ${className}`}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        );

        return (
          <span
            key={index}
            className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0 py-[0.05em]"
          >
            <span
              className={`split-word-inner inline-block transform-gpu will-change-transform ${wordClassName} ${
                isHighlighted ? highlightClassName : ''
              }`}
            >
              {word}
            </span>
          </span>
        );
      })}
    </span>
  );
};
