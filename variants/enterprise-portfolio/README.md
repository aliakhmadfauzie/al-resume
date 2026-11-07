# Ali Akhmad Fauzie — Enterprise Power Platform & D365 Architect Portfolio

Enterprise Power Platform & Dynamics 365 Solution Architect specializing in Dataverse-first architecture, C# Plugins, PCF Controls, enterprise ALM, and AI-enabled development with governance.

## Quick Start

```bash
npm install
npm run dev      # Development server at http://localhost:3000
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## Tech Stack

| Layer      | Technology                      |
| ---------- | ------------------------------- |
| Framework  | React 19.1                      |
| Language   | TypeScript 5.8 (strict mode)    |
| Build Tool | Vite 6.3                        |
| Styling    | CSS + inline theme system       |
| Deployment | Vercel (auto-deploy from main)  |

## Live

https://altechsolutionportofilo.vercel.app/

## Project Structure

```
src/
├── components/
│   ├── CaseStudy.tsx          # Full project case study
│   ├── Contact.tsx            # Contact links
│   ├── Footer.tsx             # Footer with copyright
│   ├── Header.tsx             # Navigation header
│   ├── Hero.tsx               # Animated hero section
│   ├── Hero/Hero.tsx          # Redesigned hero with typing animation
│   ├── Highlights.tsx         # Achievement cards
│   ├── Skills.tsx             # Skills categories
│   ├── ThemeProvider.tsx      # Dark/Light/Power-Apps theme
│   ├── Effects/
│   │   ├── AnimatedTitle.tsx  # Typewriter text effect
│   │   ├── ParallaxBackground.tsx # Mouse parallax
│   │   └── Particles.tsx      # Canvas particle network
│   ├── GitHub/
│   │   └── GitHubSection.tsx  # Live GitHub repos + profile
│   ├── Projects/
│   │   └── ProjectCard.tsx    # Expandable project cards
│   ├── Skills/
│   │   └── ContributionGrid.tsx # GitHub-style skill grid
│   ├── Stats/
│   │   └── StatsSection.tsx   # Animated counter metrics
│   ├── StatusBar/
│   │   └── StatusBar.tsx      # VS Code-style status bar
│   └── Timeline/
│       └── Timeline.tsx       # Professional journey timeline
├── data/
│   └── portfolio.ts           # Static portfolio data (fallback)
├── hooks/
│   ├── usePortfolio.ts        # Data fetching + state
│   ├── useIntersectionObserver.ts # Scroll reveal
│   ├── useCounter.ts          # Animated number counter
│   ├── useClipboard.ts        # Copy to clipboard
│   └── usePerformance.ts      # Debounce, throttle, virtual scroll
├── services/
│   ├── dataService.ts         # Singleton data service with cache
│   └── githubService.ts       # GitHub REST API client
├── styles/
│   └── theme.ts               # Theme definitions + context
├── types/
│   ├── design-system.ts       # Component prop types
│   ├── utils.ts               # Utility types + Result pattern
│   └── index.ts               # Barrel exports
├── App.tsx                    # Root app with all sections
├── main.tsx                   # React entry point
└── index.css                  # Global styles (GitHub dark theme)
```

## Features

- 🎨 **3 theme modes**: Dark (GitHub-inspired), Light, Power Apps
- ✍️ **Typing animation**: Rotating titles in hero section
- 🔢 **Animated counters**: Stats that count up on scroll
- 🗂️ **Expandable project cards**: GitHub-style PR cards
- 📊 **Contribution grid**: GitHub-style skill visualization
- 🟢 **Live status bar**: VS Code-inspired status indicator
- ✨ **Particle background**: Interactive canvas network
- 🖱️ **Parallax effect**: Mouse-driven background movement
- 📱 **Responsive**: Mobile-friendly layout
- ♿ **Accessible**: WCAG 2.2 AA compliant, keyboard navigable
- 🔗 **Live GitHub data**: Pulls real repos via GitHub API
- 📄 **ATS-optimized resume**: Printable HTML resume

## Key Achievements Featured

- **IOI Domino → M365 Migration**: 361 forms, 28+ departments, 16 production apps
- **AI Agent Ecosystem**: 50+ agents across 12 automated pipelines
- **Enterprise Governance**: WCAG 2.2 AA, OWASP Top 10, Core Web Vitals

## Deployment

Auto-deploys to GitHub Pages on push to `main` branch. Daily scheduled rebuild for fresh GitHub data. See `.github/workflows/deploy.yml`.

## License

Private portfolio — all rights reserved.
