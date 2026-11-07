import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavTab, ProjectItem, MigrationSlice } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { ProjectsView } from './components/views/ProjectsView';
import { ArticlesView } from './components/views/ArticlesView';
import { SkillsView } from './components/views/SkillsView';
import { ExperienceView } from './components/views/ExperienceView';
import { LiveDemosView } from './components/views/LiveDemosView';
import ExecutiveBriefing from './ExecutiveBriefing';

import { ResumeModal } from './components/modals/ResumeModal';
import { ContactModal } from './components/modals/ContactModal';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { VibrantAmbientBackground } from './components/canvas/VibrantAmbientBackground';
import { AppModeProvider, useAppMode } from './context/AppModeContext';

function AppContent() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | MigrationSlice | null>(null);
  const [isProjectDetailOpen, setIsProjectDetailOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [activeDemoId, setActiveDemoId] = useState<string>('finops');
  const { shouldReduceMotion } = useAppMode();

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleOpenProjectDetail = (item: ProjectItem | MigrationSlice) => {
    setSelectedProject(item);
    setIsProjectDetailOpen(true);
  };

  const handleLaunchDemo = (demoId: string) => {
    setActiveDemoId(demoId);
    setCurrentTab('demos');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020408] text-[#f5f5f7] relative selection:bg-[#00dbe7]/30 selection:text-white">
      {/* ── Vibrant Ambient Aurora & Interactive 3D WebGL Constellation ── */}
      <VibrantAmbientBackground />

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-full focus:text-xs focus:font-semibold shadow-2xl"
      >
        Skip to main content
      </a>
      
      {/* Top Navigation - Sticky Apple Frosted Bar */}
      <div className="sticky top-0 z-50">
        <Navbar
          currentTab={currentTab}
          onSelectTab={setCurrentTab}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </div>

      {/* Main Page View Container */}
      <main id="main-content" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            style={{ perspective: shouldReduceMotion ? undefined : 1400, transformStyle: shouldReduceMotion ? undefined : 'preserve-3d' }}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, rotateX: 4, scale: 0.98, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -24, rotateX: -3, scale: 0.98, filter: 'blur(6px)' }}
            transition={shouldReduceMotion ? { duration: 0.15 } : { type: 'spring', stiffness: 280, damping: 28 }}
            className="w-full will-change-transform"
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

            {currentTab === 'articles' && (
              <ArticlesView onSelectTab={setCurrentTab} />
            )}

            {currentTab === 'skills' && <SkillsView />}

            {currentTab === 'experience' && <ExperienceView />}

            {currentTab === 'demos' && <LiveDemosView initialDemo={activeDemoId} />}

            {currentTab === 'briefing' && (
              <ExecutiveBriefing
                onOpenResume={() => setIsResumeOpen(true)}
                onOpenContact={() => setIsContactOpen(true)}
                onSelectTab={setCurrentTab}
              />
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer
          onSelectTab={setCurrentTab}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </div>

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

export default function App() {
  return (
    <AppModeProvider>
      <AppContent />
    </AppModeProvider>
  );
}
