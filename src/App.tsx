import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { NavTab, ProjectItem, MigrationSlice } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VibrantAmbientBackground } from './components/canvas/VibrantAmbientBackground';
import { HomeView } from './components/views/HomeView';

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
      Loading view modules...
    </p>
  </div>
);

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | MigrationSlice | null>(null);
  const [isProjectDetailOpen, setIsProjectDetailOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [activeDemoId, setActiveDemoId] = useState<string>('finops');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [isWebGLActive, setIsWebGLActive] = useState<boolean>(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProjectDetail = (project: ProjectItem | MigrationSlice) => {
    setSelectedProject(project);
    setIsProjectDetailOpen(true);
  };

  const handleLaunchDemo = (demoId?: string) => {
    if (demoId) setActiveDemoId(demoId);
    setCurrentTab('demos');
  };

  const isAnyModalOpen = isProjectDetailOpen || isResumeOpen || isContactOpen;

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] flex flex-col relative selection:bg-[var(--interactive-primary)] selection:text-[#090a0d] overflow-x-hidden">
      {/* Scroll Progress Bar (Top Edge) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#00dbe7] origin-left z-50 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
        style={{ scaleX }}
      />

      {/* Hardware-Accelerated 3D Ambient Background Layer */}
      <VibrantAmbientBackground isMotionActive={isWebGLActive} />

      {/* Sticky Global Top Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Page View Container */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-28 sm:pb-32 overflow-x-hidden">
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
                onSelectTab={setCurrentTab}
                onOpenProjectDetail={handleOpenProjectDetail}
                onOpenResume={() => setIsResumeOpen(true)}
                onOpenContact={() => setIsContactOpen(true)}
                onLaunchDemo={handleLaunchDemo}
              />
            )}

            <Suspense fallback={<ViewLoader />}>
              {currentTab === 'projects' && (
                <ProjectsView
                  onOpenProjectDetail={handleOpenProjectDetail}
                  onLaunchDemo={handleLaunchDemo}
                />
              )}

              {currentTab === 'skills' && <SkillsView />}

              {currentTab === 'experience' && <ExperienceView />}

              {currentTab === 'certifications' && <CertificationsView />}

              {currentTab === 'demos' && <LiveDemosView initialDemo={activeDemoId} />}

              {currentTab === 'interview' && <InterviewModeView />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3D WebGL Motion Status Indicator & Toggle */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center space-x-2">
        <button
          type="button"
          onClick={() => setIsWebGLActive(!isWebGLActive)}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#0c0d12]/85 backdrop-blur-md border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] text-[10px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-accent)] shadow-lg transition-all cursor-pointer group"
          title="Toggle Interactive 3D WebGL Aurora & Constellation"
        >
          <span className={`relative flex h-2 w-2`}>
            {isWebGLActive && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
            )}
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isWebGLActive ? 'bg-[#22c55e] shadow-[0_0_8px_#22c55e]' : 'bg-zinc-600'}`} />
          </span>
          <span className="group-hover:text-white transition-colors">
            3D Ambient: {isWebGLActive ? 'Active' : 'Paused'}
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
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Lazy-Loaded Modals */}
      <Suspense fallback={null}>
        {isResumeOpen && (
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {isContactOpen && (
          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        )}

        {isProjectDetailOpen && (
          <ProjectDetailModal
            project={selectedProject}
            isOpen={isProjectDetailOpen}
            onClose={() => setIsProjectDetailOpen(false)}
            onLaunchDemo={handleLaunchDemo}
          />
        )}
      </Suspense>
    </div>
  );
}
