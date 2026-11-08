import React, { useState, useEffect, Suspense, lazy } from 'react';
import { CORE_PROJECTS, MIGRATION_SLICES } from './data/portfolioData';
import { navigate, useRoute } from './navigation';
import { motion, AnimatePresence, useScroll, useSpring, MotionConfig } from 'motion/react';
import { useSystemReducedMotion } from './motionPreference';
import { ArrowUp } from 'lucide-react';
import { NavTab, ProjectItem, MigrationSlice } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VibrantAmbientBackground } from './components/canvas/VibrantAmbientBackground';
import { HomeView } from './components/views/HomeView';
import { CinematicDoorGate, PersonaType } from './components/gate/CinematicDoorGate';

// Code-split non-home views to minimize initial JavaScript bundle & maximize LCP/TTFB
const ProjectsView = lazy(() => import('./components/views/ProjectsView').then(m => ({ default: m.ProjectsView })));
const SkillsView = lazy(() => import('./components/views/SkillsView').then(m => ({ default: m.SkillsView })));
const ExperienceView = lazy(() => import('./components/views/ExperienceView').then(m => ({ default: m.ExperienceView })));
const CertificationsView = lazy(() => import('./components/views/CertificationsView').then(m => ({ default: m.CertificationsView })));
const LiveDemosView = lazy(() => import('./components/views/LiveDemosView').then(m => ({ default: m.LiveDemosView })));
const InterviewModeView = lazy(() => import('./components/views/InterviewModeView').then(m => ({ default: m.InterviewModeView })));

// Lazy-load modals (only downloaded when opened by user)
const ResumeModal = lazy(() => import('./components/modals/ResumeModal').then(m => ({ default: m.ResumeModal })));
const ContactModal = lazy(() => import('./components/modals/ContactModal').then(m => ({ default: m.ContactModal })));
const ProjectDetailModal = lazy(() => import('./components/modals/ProjectDetailModal').then(m => ({ default: m.ProjectDetailModal })));

// Lightweight view suspense fallback
const ViewLoader: React.FC = () => (
  <div className="py-28 flex flex-col items-center justify-center space-y-4">
    <div className="relative w-10 h-10">
      <div className="w-10 h-10 rounded-full border-2 border-orange-500/20 border-t-orange-500 animate-spin" />
    </div>
    <p className="text-xs font-mono text-[var(--text-accent)] uppercase tracking-wider">
      Loading page…
    </p>
  </div>
);

export default function App() {
  const route = useRoute();
  const currentTab = route.tab;
  const selectedProject = [...CORE_PROJECTS, ...MIGRATION_SLICES].find(item => item.id === route.projectId) || null;
  const isProjectDetailOpen = Boolean(selectedProject);
  const isResumeOpen = route.overlay === 'resume';
  const isContactOpen = route.overlay === 'contact';
  const activeDemoId = route.demoId;
  const setCurrentTab = (tab: NavTab) => navigate(tab);
  const closeOverlay = () => navigate(currentTab === 'demos' ? `demos?demo=${encodeURIComponent(activeDemoId)}` : currentTab);
  const openOverlay = (modal: 'resume' | 'contact') => navigate(`${currentTab}?modal=${modal}${currentTab === 'demos' ? `&demo=${encodeURIComponent(activeDemoId)}` : ''}`);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activePersona, setActivePersona] = useState<PersonaType>(() => {
    try {
      const saved = sessionStorage.getItem('portfolio-persona');
      if (saved === 'software' || saved === 'operations' || saved === 'both') {
        return saved;
      }
    } catch {
      /* Safe fallback in private browsing */
    }
    return 'both';
  });

  const [showDoorGate, setShowDoorGate] = useState(() => {
    try {
      const href = typeof window !== 'undefined' ? window.location.href.toLowerCase() : '';
      if (href.includes('gate') || href.includes('door')) {
        return true;
      }
      const dismissed = sessionStorage.getItem('door-gate-dismissed') === 'true';
      return !dismissed && route.tab === 'home' && !route.projectId && !route.overlay;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handleUrlGateCheck = () => {
      const href = window.location.href.toLowerCase();
      if (href.includes('gate=true') || href.includes('door=true') || href.includes('#/gate') || href.includes('#gate')) {
        setShowDoorGate(true);
      }
    };
    handleUrlGateCheck();
    window.addEventListener('hashchange', handleUrlGateCheck);
    return () => window.removeEventListener('hashchange', handleUrlGateCheck);
  }, []);

  const handleSelectPersona = (persona: PersonaType) => {
    setActivePersona(persona);
    setShowDoorGate(false);
    try {
      sessionStorage.setItem('portfolio-persona', persona);
      sessionStorage.setItem('door-gate-dismissed', 'true');
    } catch {
      /* Safe fallback in private browsing */
    }
    if (window.location.hash.toLowerCase().includes('gate')) {
      navigate('home');
    }
  };

  const handlePersonaChange = (persona: PersonaType) => {
    setActivePersona(persona);
    try {
      sessionStorage.setItem('portfolio-persona', persona);
    } catch {
      /* Safe fallback in private browsing */
    }
  };

  const handleSkipDoorGate = () => {
    setShowDoorGate(false);
    try {
      sessionStorage.setItem('door-gate-dismissed', 'true');
    } catch {
      /* Safe fallback in private browsing */
    }
    if (window.location.hash.toLowerCase().includes('gate')) {
      navigate('home');
    }
  };

  const [motionEnabled, setMotionEnabled] = useState(() => {
    try { return localStorage.getItem('portfolio-motion') !== 'paused'; } catch { return true; }
  });
  const systemReducedMotion = useSystemReducedMotion();
  const isMotionActive = motionEnabled && !systemReducedMotion;
  useEffect(() => {
    document.documentElement.dataset.motion = isMotionActive ? 'active' : 'paused';
    try { localStorage.setItem('portfolio-motion', motionEnabled ? 'active' : 'paused'); } catch { /* Preference is optional. */ }
  }, [isMotionActive, motionEnabled]);

  useEffect(() => {
    const titles: Record<NavTab, string> = { home: 'Portfolio', projects: 'Projects', skills: 'Skills', experience: 'Experience', certifications: 'Credentials', demos: 'Simulators', interview: 'Architecture Q&A' };
    document.title = titles[currentTab] + ' · Ali Akhmad Fauzie';
  }, [currentTab]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (!route.anchor) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.getElementById('main-content')?.focus({ preventScroll: true });
    }
  }, [currentTab]);

  useEffect(() => {
    if (route.anchor) document.getElementById(`section-${route.anchor}`)?.scrollIntoView({ behavior: isMotionActive ? 'smooth' : 'instant' });
  }, [route.anchor, isMotionActive]);

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB once user scrolls past the initial hero section (~520px)
      setShowScrollTop(window.scrollY > 520);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: isMotionActive ? 'smooth' : 'instant' });
  };

  const handleOpenProjectDetail = (project: ProjectItem | MigrationSlice) => navigate(`projects/${encodeURIComponent(project.id)}`);
  const handleLaunchDemo = (demoId = 'finops') => navigate(`demos?demo=${encodeURIComponent(demoId)}`);

  const isAnyModalOpen = isProjectDetailOpen || isResumeOpen || isContactOpen;

  return (
    <MotionConfig reducedMotion={isMotionActive ? "never" : "always"}>
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] flex flex-col relative selection:bg-[var(--interactive-primary)] selection:text-[#090a0d] overflow-x-hidden">
      <a href="#main-content" onClick={event => { event.preventDefault(); document.getElementById('main-content')?.focus(); }} className="skip-link">Skip to content</a>
      {/* Scroll Progress Bar (Top Edge) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#00dbe7] origin-left z-50 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
        style={{ scaleX }}
      />

      {/* Hardware-Accelerated 3D Ambient Background Layer */}
      <VibrantAmbientBackground isMotionActive={isMotionActive} />

      {/* Sticky Global Top Navigation */}
      <Navbar
        currentTab={currentTab}
        onOpenResume={() => openOverlay('resume')}
        onOpenContact={() => openOverlay('contact')}
        onOpenDoorGate={() => setShowDoorGate(true)}
      />

      {route.projectId && !selectedProject && <div role="status" className="max-w-7xl mx-auto p-4 text-sm">This case study could not be found. <a href="#/projects" className="underline text-[var(--text-accent)]">Browse all projects</a></div>}
      {/* Main Page View Container */}
      <main id="main-content" tabIndex={-1} className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-28 sm:pb-32 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {currentTab === 'home' && (
              <HomeView
                onOpenProjectDetail={handleOpenProjectDetail}
                onOpenResume={() => openOverlay('resume')}
                onLaunchDemo={handleLaunchDemo}
                activePersona={activePersona}
                onPersonaChange={handlePersonaChange}
                onOpenDoorGate={() => setShowDoorGate(true)}
              />
            )}

            <Suspense fallback={<ViewLoader />}>
              {currentTab === 'projects' && (
                <ProjectsView
                  onLaunchDemo={handleLaunchDemo}
                />
              )}

              {currentTab === 'skills' && <SkillsView />}

              {currentTab === 'experience' && <ExperienceView />}

              {currentTab === 'certifications' && <CertificationsView />}

              {currentTab === 'demos' && <LiveDemosView key={activeDemoId} initialDemo={activeDemoId} />}

              {currentTab === 'interview' && <InterviewModeView />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3D WebGL Motion Status Indicator & Toggle */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex items-center space-x-2">
        <button
          type="button"
          onClick={() => setMotionEnabled(!motionEnabled)}
          aria-pressed={isMotionActive}
          disabled={Boolean(systemReducedMotion)}
          className="inline-flex items-center space-x-2 min-h-11 px-3 py-2 rounded-full bg-[#0c0d12]/85 backdrop-blur-md border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] text-[10px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-accent)] shadow-lg transition-all cursor-pointer group"
          title={systemReducedMotion ? "Motion paused by your device preference" : "Pause or enable decorative motion"}
        >
          <span className={`relative flex h-2 w-2`}>
            {isMotionActive && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
            )}
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isMotionActive ? 'bg-[#22c55e] shadow-[0_0_8px_#22c55e]' : 'bg-zinc-600'}`} />
          </span>
          <span className="group-hover:text-white transition-colors">
            Motion: {isMotionActive ? 'On' : 'Paused'}{systemReducedMotion ? ' (device)' : ''}
          </span>
        </button>
      </div>

      {/* Scroll-to-Top Floating Action Button */}
      <AnimatePresence>
        {showScrollTop && !isAnyModalOpen && (
          <motion.button
            id="scroll-to-top-fab"
            type="button"
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
            style={{ boxShadow: 'var(--fab-shadow)' }}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[var(--fab-bg)] hover:bg-[var(--fab-bg-hover)] active:bg-[var(--btn-primary-bg-active)] text-[var(--fab-fg)] border border-[var(--fab-border)] flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer
        onSelectTab={setCurrentTab}
        onOpenResume={() => openOverlay('resume')}
        onOpenContact={() => openOverlay('contact')}
      />

      {/* Cinematic 3D Doorway Entrance Gate */}
      {showDoorGate && (
        <CinematicDoorGate
          onSelectPersona={handleSelectPersona}
          onSkip={handleSkipDoorGate}
          isMotionActive={isMotionActive}
        />
      )}

      {/* Lazy-Loaded Modals */}
      <Suspense fallback={null}>
        {isResumeOpen && (
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={closeOverlay}
            onOpenContact={() => openOverlay('contact')}
          />
        )}

        {isContactOpen && (
          <ContactModal
            isOpen={isContactOpen}
            onClose={closeOverlay}
          />
        )}

        {isProjectDetailOpen && (
          <ProjectDetailModal
            project={selectedProject}
            isOpen={isProjectDetailOpen}
            onClose={closeOverlay}
            onLaunchDemo={handleLaunchDemo}
          />
        )}
      </Suspense>
    </div>
    </MotionConfig>
  );
}
