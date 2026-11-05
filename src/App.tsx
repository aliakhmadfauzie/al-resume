import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { NavTab, ProjectItem, MigrationSlice } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { ProjectsView } from './components/views/ProjectsView';
import { SkillsView } from './components/views/SkillsView';
import { ExperienceView } from './components/views/ExperienceView';
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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

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
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] relative">
      {/* Thin Fixed Scroll-Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#3b82f6] origin-left z-[60] pointer-events-none"
      />

      {/* Top Radial Accent Glow */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[520px] antigravity-hero-glow z-0" />

      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Page View Container */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-x-hidden">
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

            {currentTab === 'demos' && <LiveDemosView initialDemo={activeDemoId} />}

            {currentTab === 'interview' && <InterviewModeView />}
          </motion.div>
        </AnimatePresence>
      </main>

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
