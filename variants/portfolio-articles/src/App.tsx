import React, { useState, lazy, Suspense } from 'react';
import { ShaderBackground } from './components/ShaderBackground';
import { MatrixRain } from './components/MatrixRain';
import { ScrollProgress } from './components/ScrollProgress';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { ImpactDashboard } from './components/ImpactDashboard';
import { ProjectsSection } from './components/ProjectsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { Footer } from './components/Footer';
import { StickyQuickDock } from './components/StickyQuickDock';
import { ProjectItem, ArticleItem, ProfileMode } from './types';
import { initialArticlesData } from './data/articlesData';
import { motion, AnimatePresence } from 'motion/react';

// Code-split below-the-fold sections and interaction-driven modals so they don't
// block the initial render (improves LCP) nor inflate the main bundle.
const ArticleDetailView = lazy(() =>
  import('./components/ArticleDetailView').then((m) => ({ default: m.ArticleDetailView }))
);
const CreateArticleModal = lazy(() =>
  import('./components/CreateArticleModal').then((m) => ({ default: m.CreateArticleModal }))
);
const ArchitectureDiagram = lazy(() =>
  import('./components/ArchitectureDiagram').then((m) => ({ default: m.ArchitectureDiagram }))
);
const TimelineSection = lazy(() =>
  import('./components/TimelineSection').then((m) => ({ default: m.TimelineSection }))
);
const TestimonialsSection = lazy(() =>
  import('./components/TestimonialsSection').then((m) => ({ default: m.TestimonialsSection }))
);
const SkillsSection = lazy(() =>
  import('./components/SkillsSection').then((m) => ({ default: m.SkillsSection }))
);
const SkillHeatmap = lazy(() =>
  import('./components/SkillHeatmap').then((m) => ({ default: m.SkillHeatmap }))
);
const CertificationsSection = lazy(() =>
  import('./components/CertificationsSection').then((m) => ({ default: m.CertificationsSection }))
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((m) => ({ default: m.ContactSection }))
);
const ProjectDetailModal = lazy(() =>
  import('./components/ProjectDetailModal').then((m) => ({ default: m.ProjectDetailModal }))
);
const ResumeModal = lazy(() =>
  import('./components/ResumeModal').then((m) => ({ default: m.ResumeModal }))
);

const STORAGE_KEY_ARTICLES = 'ali_resume_custom_articles_v1';

export default function App() {
  const [currentMode, setCurrentMode] = useState<ProfileMode>('full');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [createArticleModalOpen, setCreateArticleModalOpen] = useState<boolean>(false);

  // Articles state initialized from local storage + initial seeds
  const [articles, setArticles] = useState<ArticleItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ARTICLES);
      if (saved) {
        const customArticles: ArticleItem[] = JSON.parse(saved);
        return [...customArticles, ...initialArticlesData];
      }
    } catch (e) {
      console.warn('Failed to load custom articles from localStorage', e);
    }
    return initialArticlesData;
  });

  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const handleCreateArticle = (newArticle: ArticleItem) => {
    setArticles((prev) => {
      const updated = [newArticle, ...prev];
      try {
        const customOnly = updated.filter((a) => a.isCustom);
        localStorage.setItem(STORAGE_KEY_ARTICLES, JSON.stringify(customOnly));
      } catch (e) {
        console.warn('Failed to save article to localStorage', e);
      }
      return updated;
    });
    // Open the newly created article for previewing/reading immediately
    setSelectedArticle(newArticle);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = (sectionId?: string) => {
    setSelectedArticle(null);
    if (sectionId) {
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenContactModal = () => {
    if (selectedArticle) {
      setSelectedArticle(null);
      setTimeout(() => {
        const contactElem = document.getElementById('contact');
        if (contactElem) {
          contactElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fdfdfc] text-[#121212] selection:bg-[#dcdccb] selection:text-[#121212]">
      {/* Top Scroll Indicator & Back to Top Floating Button */}
      <ScrollProgress onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      {/* Dynamic WebGL Shader Background Canvas */}
      <ShaderBackground />
      <MatrixRain className="fixed inset-0 z-0" opacity={0.05} speed={0.9} />

      {/* Main Page Layout Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header Navigation */}
        <Header
          currentMode={currentMode}
          onSelectMode={setCurrentMode}
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenContactModal={handleOpenContactModal}
          onNavigateHome={handleNavigateHome}
        />

        {/* Main Content Sections or Individual Article Page with Smooth View Transition */}
        <main className="flex-grow pt-16 sm:pt-20 pb-20 sm:pb-24">
          <AnimatePresence mode="wait">
            {selectedArticle ? (
              /* Dedicated Individual Article Page with Smooth Entrance */
              <motion.div
                key="article-detail-page"
                initial={{ opacity: 1, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <Suspense fallback={null}>
                  <ArticleDetailView
                    article={selectedArticle}
                    allArticles={articles}
                    onBack={() => handleNavigateHome('articles')}
                    onSelectArticle={(art) => {
                      setSelectedArticle(art);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </Suspense>
              </motion.div>
            ) : (
              /* Portfolio Index & Sections with Smooth Page Load */
              <motion.div
                key="portfolio-index-page"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {/* Profile Hero & Overview */}
                <HeroSection
                  currentMode={currentMode}
                  onSelectMode={setCurrentMode}
                  onOpenResumeModal={() => setResumeModalOpen(true)}
                  onOpenContactModal={handleOpenContactModal}
                />

                {/* 30-second TL;DR for hiring managers */}
                <ExecutiveSummary currentMode={currentMode} />

                {/* Visual KPI dashboard: 12 tiles, donut, bar chart, speed wins */}
                <ImpactDashboard defaultTrack="all" />

                {/* Projects Section with Grid/List Toggle & Live Demo/Repo Links */}
                <ProjectsSection
                  currentMode={currentMode}
                  onSelectProject={setSelectedProject}
                />

                {/* Blog & Articles Section */}
                <ArticlesSection
                  articles={articles}
                  onSelectArticle={(art) => {
                    setSelectedArticle(art);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onOpenCreateModal={() => setCreateArticleModalOpen(true)}
                />

                <Suspense fallback={null}>
                  {/* Chronological Timeline */}
                  <TimelineSection currentMode={currentMode} />

                  {/* Professional Testimonials & Client Feedback Carousel */}
                  <TestimonialsSection />

                  {/* Enterprise CI/CD & Solution Architecture Pipeline */}
                  <ArchitectureDiagram />

                  {/* Skills & Competencies Breakdown */}
                  <SkillHeatmap currentMode={currentMode} />

                  {/* Certifications & Education */}
                  <CertificationsSection />

                  {/* Direct Contact & Outreach */}
                  <ContactSection />
                </Suspense>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Minimalist Footer */}
        <Footer onNavigateHome={handleNavigateHome} />
      </div>

      {/* Sticky Recruiter Quick Action Dock */}
      <StickyQuickDock
        currentMode={currentMode}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onOpenContactModal={handleOpenContactModal}
      />

      <Suspense fallback={null}>
        {/* Case Study & Deep Dive Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Interactive & Print-Ready ATS / Executive Resume Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
          initialMode={currentMode}
        />

        {/* Create New Article Dialog Modal */}
        <CreateArticleModal
          isOpen={createArticleModalOpen}
          onClose={() => setCreateArticleModalOpen(false)}
          onCreateArticle={handleCreateArticle}
        />
      </Suspense>
    </div>
  );
}
