import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { NavTab, ProjectItem, MigrationSlice } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WebGLBackground } from './components/WebGLBackground';
import { HomeView } from './components/views/HomeView';
import { ProjectsView } from './components/views/ProjectsView';
import { SkillsView } from './components/views/SkillsView';
import { ExperienceView } from './components/views/ExperienceView';
import { CertificationsView } from './components/views/CertificationsView';
import { LiveDemosView } from './components/views/LiveDemosView';
import { InterviewModeView } from './components/views/InterviewModeView';
import { ResumeModal } from './components/modals/ResumeModal';
import { ContactModal } from './components/modals/ContactModal';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';

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
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
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

  const handleOpenProjectDetail = (item: ProjectItem | MigrationSlice) => {
    setSelectedProject(item);
    setIsProjectDetailOpen(true);
  };

  const handleLaunchDemo = (demoId: string) => {
    setActiveDemoId(demoId);
    setCurrentTab('demos');
  };

  const isAnyModalOpen = isProjectDetailOpen || isResumeOpen || isContactOpen;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-default)] text-[var(--text-primary)] relative">
      {/* Thin Fixed Scroll-Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--border-focus)] origin-left z-[60] pointer-events-none"
      />

      {/* 3D WebGL Enterprise Constellation Layer */}
      {isWebGLActive && <WebGLBackground intensity={0.85} />}

      {/* Ambient Background Motion Layer */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute inset-x-0 top-0 h-[560px] antigravity-hero-glow" />
        <motion.div
          animate={{
            x: [0, 48, -32, 0],
            y: [0, 24, -18, 0],
            opacity: [0.45, 0.7, 0.5, 0.45]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 left-1/4 w-[520px] h-[520px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, var(--ambient-glow-primary) 0%, transparent 70%)'
          }}
        />
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, -28, 22, 0],
            opacity: [0.35, 0.6, 0.4, 0.35]
          }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-1/5 w-[460px] h-[460px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, var(--ambient-glow-secondary) 0%, transparent 70%)'
          }}
        />
      </div>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-[var(--bg-surface)] focus:text-[var(--text-primary)] focus:border focus:border-[var(--border-focus)]">
        Skip to main content
      </a>

      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

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
                onSelectTab={setCurrentTab}
                onOpenProjectDetail={handleOpenProjectDetail}
                onOpenResume={() => setIsResumeOpen(true)}
                onOpenContact={() => setIsContactOpen(true)}
                onLaunchDemo={handleLaunchDemo}
              />
            )}

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
          </motion.div>
        </AnimatePresence>
      </main>

            {/* 3D WebGL Motion Status Indicator & Toggle */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center space-x-2">
        <button
          type="button"
          onClick={() => setIsWebGLActive(!isWebGLActive)}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#0c0d12]/85 backdrop-blur-md border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] text-[10px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-accent)] shadow-lg transition-all cursor-pointer group"
          title="Toggle Three.js WebGL Enterprise Constellation"
        >
          <span className={`relative flex h-2 w-2`}>
            {isWebGLActive && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
            )}
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isWebGLActive ? 'bg-[#22c55e] shadow-[0_0_8px_#22c55e]' : 'bg-zinc-600'}`} />
          </span>
          <span className="group-hover:text-white transition-colors">
            WebGL 3D: {isWebGLActive ? 'Active (60 FPS)' : 'Paused'}
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

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isProjectDetailOpen}
        onClose={() => setIsProjectDetailOpen(false)}
        onLaunchDemo={handleLaunchDemo}
      />
    </div>
  );
}
