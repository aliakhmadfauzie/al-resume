import React from "react";
import { AnimatedTitle } from "../Effects/AnimatedTitle";
import { personalInfo } from "../../data/portfolio";
import type { DeveloperInfo } from "../../hooks/usePortfolio";
import styles from "./Hero.module.css";

// ============================================================
// Types
// ============================================================
export interface HeroProps {
  developer: DeveloperInfo;
}

// ============================================================
// Component
// ============================================================
export const Hero: React.FC<HeroProps> = ({ developer }) => {
  const typingPhrases = [
    "Power Platform & Dynamics 365 Architect",
    "Dataverse Data Architect",
    "Enterprise ALM & AI Automation Lead",
    "M365 Modernization Specialist",
  ];

  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.heroInner} stagger-children`}>
        {/* Avatar — glow pulse draws the eye */}
        <div className={styles.heroAvatar}>
          <img
            src={
              developer.avatar || `https://github.com/${developer.github}.png`
            }
            alt={`${developer.name} — ${developer.title}`}
            className={`${styles.heroAvatarImg} glow-pulse`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className={styles.heroContent}>
          {/* Status badge — pulse animation */}
          <div className={`${styles.heroStatus} glow-pulse`}>
            <span className={styles.heroStatusDot} />
            {developer.status}
          </div>

          {/* Name — shimmer draws attention */}
          <h1 className={`${styles.heroName} shimmer-text`}>
            {developer.name}
          </h1>

          {/* Animated title */}
          <h2 className={styles.heroTitle}>
            <AnimatedTitle
              phrases={typingPhrases}
              typingSpeed={60}
              deletingSpeed={30}
              pauseTime={2500}
            />
          </h2>

          {/* Tagline */}
          <p className={styles.heroTagline}>{personalInfo.tagline}</p>

          {/* Meta */}
          <p className={styles.heroMeta}>
            <span>📍 {developer.location}</span>
            {developer.email && (
              <a href={`mailto:${developer.email}`}>✉️ {developer.email}</a>
            )}
          </p>

          {/* CTA — hover bounce draws clicks */}
          <div className={`${styles.heroActions} stagger-children`}>
            <a href="/resume.html" className="btn btn-primary hover-bounce" target="_blank" rel="noopener noreferrer">
              📄 Download Resume
            </a>
            <a href="#case-study" className="btn btn-outline hover-bounce">
              View Case Study
            </a>
            <a href="#contact" className="btn btn-outline hover-bounce">
              Get in Touch
            </a>
            {developer.github && (
              <a
                href={`https://github.com/${developer.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline hover-bounce"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
