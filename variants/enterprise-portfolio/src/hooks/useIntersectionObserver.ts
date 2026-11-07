import { useState, useEffect, useRef, useCallback } from 'react';

// ============================================================
// Types
// ============================================================
export interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export interface UseIntersectionObserverReturn {
  ref: (node: Element | null) => void;
  isVisible: boolean;
  entry?: IntersectionObserverEntry;
}

// ============================================================
// Hook
// ============================================================
export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {},
): UseIntersectionObserverReturn => {
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0.1,
    triggerOnce = true,
  } = options;

  const [node, setNode] = useState<Element | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((element: Element | null) => {
    setNode(element);
  }, []);

  useEffect(() => {
    if (!node) return;

    // Clean up previous observer if node changes
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      ([observedEntry]) => {
        if (!observedEntry) return;
        setEntry(observedEntry);
        const visible = observedEntry.isIntersecting;

        if (visible && triggerOnce) {
          setIsVisible(true);
          observer.unobserve(node);
        } else if (!triggerOnce) {
          setIsVisible(visible);
        }
      },
      { root, rootMargin, threshold },
    );

    observer.observe(node);
    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [node, root, rootMargin, threshold, triggerOnce]);

  return { ref, isVisible, entry };
};
