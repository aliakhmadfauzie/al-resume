import { useSyncExternalStore } from 'react';

const query = window.matchMedia('(prefers-reduced-motion: reduce)');
function subscribe(notify: () => void) {
  query.addEventListener('change', notify);
  return () => query.removeEventListener('change', notify);
}

export function useSystemReducedMotion() {
  return useSyncExternalStore(subscribe, () => query.matches, () => true);
}
