import { useState, useEffect, useRef } from 'react';

// ============================================================
// Types
// ============================================================
export type CounterEasing = 'linear' | 'easeOut' | 'easeInOut';

export interface UseCounterOptions {
  /** Target number to count to */
  target: number;
  /** Duration of the animation in milliseconds */
  duration?: number;
  /** Delay before starting the animation in milliseconds */
  delay?: number;
  /** Easing function to use */
  easing?: CounterEasing;
}

export interface UseCounterReturn {
  /** Current animated value */
  current: number;
  /** Whether the animation is currently running */
  isAnimating: boolean;
  /** Whether the animation has completed */
  isComplete: boolean;
}

// ============================================================
// Easing Functions
// ============================================================
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

const easeInOutQuad = (t: number): number => {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
};

// ============================================================
// Hook
// ============================================================
export const useCounter = (options: UseCounterOptions): UseCounterReturn => {
  const { target, duration = 2000, delay = 0, easing = 'easeOut' } = options;

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Reset state when target changes
    setCurrent(0);
    setIsAnimating(false);
    setIsComplete(false);
    startTimeRef.current = null;

    // Cancel any pending animation or timeout
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsAnimating(true);
      startTimeRef.current = null;

      const animate = (timestamp: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }

        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);

        let easedProgress: number;
        switch (easing) {
          case 'easeOut':
            easedProgress = easeOutCubic(progress);
            break;
          case 'easeInOut':
            easedProgress = easeInOutQuad(progress);
            break;
          default:
            easedProgress = progress;
        }

        const value = Math.round(target * easedProgress);
        setCurrent(value);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setCurrent(target);
          setIsAnimating(false);
          setIsComplete(true);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [target, duration, delay, easing]);

  return { current, isAnimating, isComplete };
};
