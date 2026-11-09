import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEPARTMENTAL_APPS, DepartmentalAppItem } from '../../data/powerPlatformAppsData';
import {
  Layers,
  CheckCircle2,
  Workflow,
  Code2,
  Database,
  Clock,
  Eye,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface DepartmentalAppsShowcaseProps {
  onOpenProjectDetail?: (project: any) => void;
}

interface AppScreenItem {
  key: 'login' | 'browse' | 'details' | 'edit' | 'flow';
  name: string;
  url: string;
}

export const getAppScreensList = (app: DepartmentalAppItem): AppScreenItem[] => [
  { key: 'login', name: `${app.name} — Login & Identity Gate`, url: app.screens[0].imagePath },
  { key: 'browse', name: `${app.name} — Operational Dashboard & SVG Visuals`, url: app.screens[1].imagePath },
  { key: 'details', name: `${app.name} — Details & Approval Stepper`, url: app.screens[2].imagePath },
  { key: 'edit', name: `${app.name} — Dynamic Intake Form`, url: app.screens[3].imagePath },
  { key: 'flow', name: `Power Automate: ${app.workflow.flowName}`, url: app.workflow.screenshot }
];

export const DepartmentalAppsShowcase: React.FC<DepartmentalAppsShowcaseProps> = () => {
  const [activeDepartment, setActiveDepartment] = useState<string>('all');
  const [activeScreens, setActiveScreens] = useState<Record<string, 'login' | 'browse' | 'details' | 'edit' | 'flow'>>({});
  const [expandedCode, setExpandedCode] = useState<Record<string, boolean>>({});
  const [activeLightbox, setActiveLightbox] = useState<{ appCode: string; screenIndex: number } | null>(null);

  // Keyboard accessibility, body scroll-lock, and arrow key screen navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightbox) return;
      if (e.key === 'Escape') {
        setActiveLightbox(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightbox(prev => (prev ? { ...prev, screenIndex: (prev.screenIndex + 1) % 5 } : null));
      } else if (e.key === 'ArrowLeft') {
        setActiveLightbox(prev => (prev ? { ...prev, screenIndex: (prev.screenIndex - 1 + 5) % 5 } : null));
      }
    };

    if (activeLightbox) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeLightbox]);

  const departments = [
    { id: 'all', label: 'All Departments (13)' },
    { id: 'IT', label: 'IT (2)' },
    { id: 'HR', label: 'HR (2)' },
    { id: 'Finance', label: 'Finance (2)' },
    { id: 'SHE', label: 'Safety SHE (2)' },
    { id: 'Maintenance', label: 'Maintenance (2)' },
    { id: 'QA', label: 'QA (1)' },
    { id: 'QC', label: 'QC (1)' },
    { id: 'Logistics', label: 'Logistics (1)' }
  ];

  const filteredApps = useMemo(() => {
    if (activeDepartment === 'all') return DEPARTMENTAL_APPS;
    return DEPARTMENTAL_APPS.filter(app => app.department === activeDepartment);
  }, [activeDepartment]);

  const handleScreenChange = (appCode: string, screenKey: 'login' | 'browse' | 'details' | 'edit' | 'flow') => {
    setActiveScreens(prev => ({ ...prev, [appCode]: screenKey }));
  };

  const toggleCodeSnippet = (appCode: string) => {
    setExpandedCode(prev => ({ ...prev, [appCode]: !prev[appCode] }));
  };

  return (
    <section className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] p-4 sm:p-6 md:p-8 space-y-8 shadow-[var(--shadow-card)]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-[var(--text-accent)] font-medium">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>IOI Oleochemicals Modernization Deliverables · 13 Production Applications</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-primary)] tracking-tight">
            13 Departmental Power Apps &amp; Automate Workflows
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            Core production deliverable of the 365+ Lotus Domino database decommissioning program: standardized enterprise 4-screen quadruplets (Login SSO, Operational Dashboard, Details Stepper, Dynamic Intake) with 52 client-ready 1080p screens and 13 modern Power Automate cloud workflows.
          </p>
        </div>

        {/* Telemetry Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 shrink-0 font-mono tabular-nums">
          <div className="bg-[var(--bg-primary)] p-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-center">
            <span className="text-xl font-bold text-[var(--text-accent)]">13</span>
            <p className="text-[10px] text-[var(--text-tertiary)] mt-0.5 font-sans">Flagship Apps</p>
          </div>
          <div className="bg-[var(--bg-primary)] p-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-center">
            <span className="text-xl font-bold text-[var(--text-primary)]">52</span>
            <p className="text-[10px] text-[var(--text-tertiary)] mt-0.5 font-sans">UI Mockups (1080p)</p>
          </div>
          <div className="bg-[var(--bg-primary)] p-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-center col-span-2 sm:col-span-1">
            <span className="text-xl font-bold text-emerald-400">13</span>
            <p className="text-[10px] text-[var(--text-tertiary)] mt-0.5 font-sans">Power Automate Flows</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div 
        role="tablist" 
        aria-label="Department Categories"
        className="flex flex-wrap gap-2 p-1.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] items-center"
      >
        {departments.map(dept => (
          <button
            key={dept.id}
            role="tab"
            aria-selected={activeDepartment === dept.id}
            onClick={() => setActiveDepartment(dept.id)}
            className={`min-h-[44px] sm:min-h-[36px] px-3.5 py-2 rounded-[var(--radius-sm)] text-xs font-medium transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--accent-blue)] ${
              activeDepartment === dept.id
                ? 'bg-[var(--accent-blue)] text-[#090a0d] font-bold shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            {dept.label}
          </button>
        ))}
      </div>

      {/* Applications Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredApps.map((app: DepartmentalAppItem) => {
          const currentScreenKey = activeScreens[app.code] || 'browse';
          
          let currentImagePath = '';
          let currentScreenLabel = '';

          if (currentScreenKey === 'flow') {
            currentImagePath = app.workflow.screenshot;
            currentScreenLabel = `Power Automate: ${app.workflow.flowName}`;
          } else {
            const foundScreen = app.screens.find(s => s.id === currentScreenKey);
            currentImagePath = foundScreen ? foundScreen.imagePath : app.screens[1].imagePath;
            currentScreenLabel = foundScreen ? `${app.name} — ${foundScreen.name}` : app.name;
          }

          const isCodeOpen = expandedCode[app.code] || false;

          return (
            <motion.div
              key={app.code}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-5 space-y-5 flex flex-col justify-between hover:border-[var(--border-accent)] transition-all"
            >
              {/* Card Header */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {app.code}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-secondary)]">
                      {app.departmentFullName}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium text-[var(--text-accent)] bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    {app.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[var(--text-primary)] tracking-tight">
                  {app.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {app.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-[var(--text-tertiary)] pt-1">
                  <span className="flex items-center gap-1">
                    <Database className="w-3 h-3 text-[var(--text-accent)]" />
                    {app.dataSource}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    SLA: {app.targetSLA}
                  </span>
                </div>
              </div>

              {/* Interactive Screen & Flow Switcher Tabs (48dp Mobile Touch Ergonomics) */}
              <div className="space-y-2">
                <div 
                  role="tablist"
                  aria-label={`${app.name} screen viewpoints`}
                  className="grid grid-cols-5 gap-1.5 bg-[var(--bg-surface)] p-1.5 rounded-[var(--radius-sm)] border border-[var(--border-subtle)]"
                >
                  {[
                    { key: 'login', label: 'Login' },
                    { key: 'browse', label: 'Dashboard' },
                    { key: 'details', label: 'Details' },
                    { key: 'edit', label: 'Edit' },
                    { key: 'flow', label: '⚡ Flow' }
                  ].map(tab => (
                    <button
                      key={tab.key}
                      role="tab"
                      aria-selected={currentScreenKey === tab.key}
                      onClick={() => handleScreenChange(app.code, tab.key as any)}
                      className={`min-h-[44px] sm:min-h-[36px] px-1 py-1.5 text-[11px] sm:text-xs font-mono font-medium text-center rounded transition-all select-none active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--accent-blue)] flex items-center justify-center ${
                        currentScreenKey === tab.key
                          ? 'bg-[var(--accent-blue)] text-[#090a0d] font-bold shadow-xs'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Screen Preview Container with Lightbox Trigger */}
                <div
                  onClick={() => {
                    const screenIdx = ['login', 'browse', 'details', 'edit', 'flow'].indexOf(currentScreenKey);
                    setActiveLightbox({ appCode: app.code, screenIndex: screenIdx >= 0 ? screenIdx : 1 });
                  }}
                  className="relative aspect-video rounded-[var(--radius-sm)] overflow-hidden border border-[var(--border-subtle)] bg-[#0d1117] group cursor-pointer"
                >
                  <img
                    src={currentImagePath}
                    alt={currentScreenLabel}
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-medium backdrop-blur-[2px]">
                    <Eye className="w-4 h-4" />
                    <span>Click for 1080p Full View</span>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white/90 border border-white/10 backdrop-blur-xs">
                    {currentScreenLabel}
                  </div>
                </div>
              </div>

              {/* Capabilities Checklist */}
              <div className="space-y-1.5 pt-1">
                <h4 className="text-[11px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                  Enterprise Capabilities
                </h4>
                <ul className="space-y-1">
                  {app.capabilities.slice(0, 3).map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Collapsible Power Fx YAML & Workflow Pipeline Drawer */}
              <div className="border-t border-[var(--border-subtle)] pt-3 space-y-2">
                <button
                  type="button"
                  onClick={() => toggleCodeSnippet(app.code)}
                  className="w-full flex items-center justify-between text-xs font-mono text-[var(--text-accent)] hover:text-white transition-colors py-1"
                >
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{isCodeOpen ? 'Hide Technical Architecture' : 'View Power Fx YAML & Flow Spec'}</span>
                  </span>
                  {isCodeOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <AnimatePresence>
                  {isCodeOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden space-y-3 pt-2"
                    >
                      {/* Flow Architecture Summary */}
                      <div className="p-3 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 text-xs">
                        <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-accent)]">
                          <span className="flex items-center gap-1">
                            <Zap className="w-3.5 h-3.5 text-amber-400" />
                            {app.workflow.flowName}
                          </span>
                        </div>
                        <p className="text-[11px] text-[var(--text-secondary)] font-mono">
                          Trigger: {app.workflow.trigger}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {app.workflow.integrations.map((conn, i) => (
                            <span key={i} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                              {conn}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Power Fx YAML Snippet */}
                      <pre className="p-3 rounded-[var(--radius-sm)] bg-[#0d1117] border border-[var(--border-subtle)] text-[11px] font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                        <code>{app.yamlSnippet}</code>
                      </pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal with Next / Prev and Image Titles */}
      <AnimatePresence>
        {activeLightbox && (() => {
          const currentApp = DEPARTMENTAL_APPS.find(a => a.code === activeLightbox.appCode) || filteredApps[0];
          const screens = getAppScreensList(currentApp);
          const currentScreen = screens[activeLightbox.screenIndex] || screens[0];
          const nextIdx = (activeLightbox.screenIndex + 1) % screens.length;
          const prevIdx = (activeLightbox.screenIndex - 1 + screens.length) % screens.length;
          const nextScreen = screens[nextIdx];
          const prevScreen = screens[prevIdx];

          const goToNext = () => setActiveLightbox({ ...activeLightbox, screenIndex: nextIdx });
          const goToPrev = () => setActiveLightbox({ ...activeLightbox, screenIndex: prevIdx });

          return (
            <div
              onClick={() => setActiveLightbox(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 cursor-zoom-out animate-in fade-in duration-200"
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={currentScreen.name}
                onClick={e => e.stopPropagation()}
                className="relative max-w-6xl w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] overflow-hidden shadow-2xl flex flex-col max-h-[96dvh]"
              >
                {/* Header Bar */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] gap-2">
                  <div className="min-w-0 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                      {currentApp.code} · {activeLightbox.screenIndex + 1} of {screens.length}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[var(--text-primary)] font-semibold truncate">
                      {currentScreen.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    autoFocus
                    onClick={() => setActiveLightbox(null)}
                    className="min-h-[44px] sm:min-h-[36px] px-3 py-1.5 text-xs font-mono font-medium text-[var(--text-secondary)] hover:text-white rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] transition-all flex items-center justify-center shrink-0 cursor-pointer"
                  >
                    Close (Esc)
                  </button>
                </div>

                {/* Viewport Area with Floating Left / Right Buttons displaying Next / Prev Title */}
                <div className="relative p-2 sm:p-4 bg-[#090a0d] flex-1 flex items-center justify-center overflow-hidden min-h-[360px] max-h-[72vh]">
                  {/* Previous Button with Previous Image Title */}
                  <button
                    type="button"
                    onClick={goToPrev}
                    className="absolute left-2 sm:left-4 z-20 group flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[var(--bg-surface)]/95 hover:bg-[var(--bg-surface-elevated)] text-white border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-all shadow-xl min-h-[44px] max-w-[200px] sm:max-w-[280px] cursor-pointer"
                    aria-label={`Previous: ${prevScreen.name}`}
                  >
                    <ChevronLeft className="w-5 h-5 shrink-0 text-[var(--text-accent)] group-hover:-translate-x-0.5 transition-transform" />
                    <div className="flex flex-col text-left min-w-0 hidden xs:block sm:block">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">Previous</span>
                      <span className="text-xs font-medium text-[var(--text-secondary)] truncate block">
                        {prevScreen.name}
                      </span>
                    </div>
                  </button>

                  <img
                    key={currentScreen.url}
                    src={currentScreen.url}
                    alt={currentScreen.name}
                    className="max-h-[68vh] w-auto max-w-full object-contain rounded-[var(--radius-sm)] shadow-2xl"
                  />

                  {/* Next Button with Next Image Title */}
                  <button
                    type="button"
                    onClick={goToNext}
                    className="absolute right-2 sm:right-4 z-20 group flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[var(--bg-surface)]/95 hover:bg-[var(--bg-surface-elevated)] text-white border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-all shadow-xl min-h-[44px] max-w-[200px] sm:max-w-[280px] cursor-pointer"
                    aria-label={`Next: ${nextScreen.name}`}
                  >
                    <div className="flex flex-col text-right min-w-0 hidden xs:block sm:block">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-[var(--text-accent)]">Next Screen</span>
                      <span className="text-xs font-medium text-[var(--text-primary)] truncate block">
                        {nextScreen.name}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 shrink-0 text-[var(--text-accent)] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Bottom Fast Next / Prev Navigation Bar with Titles for Mobile & Desktop */}
                <div className="px-4 py-2.5 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] flex items-center justify-between gap-3 font-mono text-xs">
                  <button
                    type="button"
                    onClick={goToPrev}
                    className="min-h-[44px] sm:min-h-[36px] px-3 py-1.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-white flex items-center gap-1.5 transition-all max-w-[45%] truncate cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4 shrink-0" />
                    <span className="truncate">Prev: {prevScreen.name}</span>
                  </button>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {screens.map((s, idx) => (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => setActiveLightbox({ ...activeLightbox, screenIndex: idx })}
                        className={`min-w-8 min-h-8 sm:min-w-7 sm:min-h-7 rounded text-[11px] font-mono flex items-center justify-center transition-colors cursor-pointer ${
                          idx === activeLightbox.screenIndex
                            ? 'bg-[var(--accent-blue)] text-[#090a0d] font-bold shadow-xs'
                            : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-white border border-[var(--border-subtle)]'
                        }`}
                        title={s.name}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={goToNext}
                    className="min-h-[44px] sm:min-h-[36px] px-3 py-1.5 rounded bg-[var(--bg-surface)] border border-[var(--border-accent)] text-[var(--text-accent)] hover:text-white flex items-center gap-1.5 transition-all max-w-[45%] font-semibold truncate cursor-pointer"
                  >
                    <span className="truncate">Next: {nextScreen.name}</span>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};
