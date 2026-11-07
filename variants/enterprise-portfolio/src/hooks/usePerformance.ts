import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// ============================================================
// Debounce Hook
// ============================================================
export const useDebounce = <T>(value: T, delay: number = 300): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// ============================================================
// Throttle Hook
// ============================================================
export const useThrottle = <T>(value: T, limit: number = 300): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef<number>(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};

// ============================================================
// Lazy Load Hook (Intersection Observer wrapper)
// ============================================================
export const useLazyLoad = <T extends HTMLElement>(): [React.RefObject<T | null>, boolean] => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([observedEntry]) => {
        if (!observedEntry) return;
        if (observedEntry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

// ============================================================
// Performance Measurement Hook
// ============================================================
export const usePerformanceMeasure = (name: string): void => {
  useEffect(() => {
    performance.mark(`${name}-start`);

    return () => {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);

      const measures = performance.getEntriesByName(name);
      const measure = measures[measures.length - 1];

      if (measure) {
        console.log(`⏱️ ${name}: ${measure.duration.toFixed(2)}ms`);
      }
    };
  }, [name]);
};

// ============================================================
// Virtual Scroll Hook (for large lists)
// ============================================================
export interface VirtualScrollReturn<T> {
  visibleItems: {
    items: T[];
    offset: number;
    startIndex: number;
    endIndex: number;
  };
  onScroll: (event: React.UIEvent<HTMLElement>) => void;
  totalHeight: number;
}

export const useVirtualScroll = <T>(
  items: T[],
  containerHeight: number,
  itemHeight: number,
): VirtualScrollReturn<T> => {
  const [scrollTop, setScrollTop] = useState(0);

  const visibleItems = useMemo(() => {
    const overscan = 2;
    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const end = Math.min(
      start + Math.ceil(containerHeight / itemHeight) + overscan + 1,
      items.length,
    );

    return {
      items: items.slice(start, end),
      offset: start * itemHeight,
      startIndex: start,
      endIndex: end,
    };
  }, [items, scrollTop, containerHeight, itemHeight]);

  const onScroll = useCallback((event: React.UIEvent<HTMLElement>) => {
    setScrollTop(event.currentTarget.scrollTop);
  }, []);

  return {
    visibleItems,
    onScroll,
    totalHeight: items.length * itemHeight,
  };
};

// ============================================================
// Memoized Component Factory
// ============================================================
import React from 'react';

export const createMemoizedComponent = <P extends object>(
  Component: React.ComponentType<P>,
): React.MemoExoticComponent<React.ComponentType<P>> => {
  return React.memo(Component);
};
