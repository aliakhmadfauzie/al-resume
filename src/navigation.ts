import { useSyncExternalStore } from 'react';
import type { NavTab } from './types';

const tabs: NavTab[] = ['home', 'projects', 'skills', 'experience', 'certifications', 'demos', 'interview'];

export function readRoute(hash: string) {
  const [path, query = ''] = hash.replace(/^#\/?/, '').split('?');
  const [section, detail] = path.split('/');
  const params = new URLSearchParams(query);
  const modal = params.get('modal');
  const overlay = section === 'resume' || section === 'contact' ? section : modal === 'resume' || modal === 'contact' ? modal : null;
  const tab: NavTab = tabs.includes(section as NavTab) ? section as NavTab : 'home';
  let decodedDetail = '';
  try { decodedDetail = decodeURIComponent(detail || ''); } catch { /* Ignore malformed shared URLs. */ }
  return {
    tab, overlay,
    projectId: tab === 'projects' ? decodedDetail : '',
    anchor: tab === 'home' && ['about', 'services', 'contact'].includes(decodedDetail) ? decodedDetail : '',
    demoId: params.get('demo') || 'finops',
  };
}

export function navigate(path: string) {
  const hash = `#/${path}`;
  if (window.location.hash !== hash) window.location.hash = hash;
}

function subscribe(notify: () => void) {
  window.addEventListener('hashchange', notify);
  return () => window.removeEventListener('hashchange', notify);
}

export function useRoute() {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => '#/home');
  return readRoute(hash);
}
