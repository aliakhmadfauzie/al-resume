import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
    <div className="min-h-screen flex flex-col bg-[#111318] text-[#e2e2e8]">
      {/* Top Navigation - Sticky for CTA accessibility */}
      <div className="sticky top-0 z-50 bg-[#111318]/95 backdrop-blur-xl shadow-2xl shadow-[#111318]/50 border-b border-[#282a2e]">
        <Navbar
          currentTab={currentTab}
          onSelectTab={setCurrentTab}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </div>

      {/* Main Page View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
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
