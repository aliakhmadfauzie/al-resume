import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { NavTab, ProjectItem, MigrationSlice } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
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

      {/* Top Navigation */}
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
