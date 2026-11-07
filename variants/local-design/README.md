# Al Resume — Interactive Portfolio

[![Live Demo](https://img.shields.io/badge/Live-al--resume.vercel.app-000?style=flat-square&logo=vercel)](https://al-resume.vercel.app/)
[![Firebase](https://img.shields.io/badge/Firebase-aliakhmadfauzie--resume-FFCA28?style=flat-square&logo=firebase)](https://aliakhmadfauzie.my.id/)

An interactive, single-page portfolio website for **Ali Akhmad Fauzie** — Power Platform & Dynamics 365 Solution Architect. Built with React, Vite, and Tailwind CSS, featuring animated tab navigation, live project demos, an AI-powered interview mode, and responsive design.

---

## ✨ Features

- **Home** — Hero section with key impact metrics (361 forms catalogued, 16 production apps, 28+ departments modernized, $960K/yr license cost avoided)
- **Projects** — Showcase of core enterprise projects (PulseTrack, SmartFlow, CS Resolver) with detailed modals showing problem → solution → impact
- **Skills** — Visual skill proficiencies across Power Platform, Dynamics 365, Azure, and enterprise architecture
- **Experience** — Timeline of professional experience and certifications
- **Live Demos** — Interactive embedded demos for FinOps, IT Service, and more
- **Hiring Manager Experience** — A guided 10-minute experience for hiring managers: career journey, flagship delivery portfolio (Situation → Approach → Architecture → Outcome → Lessons), solution design methodology, leadership operating system, AI & automation stack, a concrete first-90-days plan, and an **Ask Ali** AI assistant
- **Resume & Contact Modals** — Quick-access modals for resume download and contact info
- **Responsive Design** — Optimized for desktop (1440px) and mobile (390px) viewports
- **Smooth Animations** — Page transitions and micro-interactions via Framer Motion

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Motion (Framer Motion) |
| **Icons** | Lucide React |
| **AI** | Ask Ali — intent-routed knowledge assistant (portfolio-grounded answers) |
| **Effects** | Canvas Confetti |
| **Hosting** | Firebase Hosting + Vercel |

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** or **bun**

### Install & Run

```bash
# Clone the repository
git clone https://github.com/gradiuzz2009/Al-resume.git
cd Al-resume

# Install dependencies
npm install

# Start the dev server (port 3000)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

## 📁 Project Structure

```
src/
├── App.tsx                    # Root component with tab routing & modals
├── main.tsx                   # Entry point
├── index.css                  # Global styles (Tailwind)
├── types.ts                   # TypeScript interfaces
├── components/
│   ├── Navbar.tsx             # Top navigation bar
│   ├── Footer.tsx             # Site footer
│   ├── views/
│   │   ├── HomeView.tsx       # Hero + metrics + featured projects
│   │   ├── ProjectsView.tsx   # Full project gallery
│   │   ├── SkillsView.tsx     # Skill categories & proficiencies
│   │   ├── ExperienceView.tsx # Work history timeline
│   │   ├── LiveDemosView.tsx  # Embedded interactive demos
│   │   ├── InterviewModeView.tsx # Hiring Manager Experience (guided + explore + Ask Ali)
│   │   └── interview/          # Section components for the experience
│   └── modals/
│       ├── ContactModal.tsx   # Contact information modal
│       ├── ResumeModal.tsx    # Resume viewer modal
│       └── ProjectDetailModal.tsx # Project deep-dive modal
└── data/
    └── portfolioData.ts       # All portfolio content & metrics
```

## 🌐 Deployment

The site is deployed on two platforms:

- **Vercel** — Primary: [al-resume.vercel.app](https://al-resume.vercel.app/)
- **Firebase Hosting** — Custom domain: [aliakhmadfauzie.my.id](https://aliakhmadfauzie.my.id/)

### Deploy to Firebase

```bash
npm run build
firebase deploy --only hosting
```

## 📄 License

This project is private. All content © Ali Akhmad Fauzie.

---

Built with ❤️ using React + Vite + Tailwind CSS
