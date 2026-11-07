# Portfolio repository organization
The user selected **aliakhmadfauzie/al-resume** as the main portfolio on 7 November 2026.

The root is the current GitHub default site at commit 6a8aee8. Use the normal root npm commands for this site. The other portfolio implementations are collected in named folders so their designs and content can be reviewed without losing local work.

| Folder | Purpose | Source revision |
| --- | --- | --- |
| root | Default Ali portfolio from current GitHub main | 6a8aee8 |
| variants/local-design | Ali's local 3D/executive/article design, including working edits and TectonicLedgerCard | daf3cb3 |
| variants/portfolio-articles | Article portfolio with ExecutiveSummary, ImpactDashboard and SkillHeatmap | c801e55 |
| variants/portfolio-articles-alternative | Nested article portfolio with slideshow, guided tour and other interactions | See preservation inventory |
| variants/power-platform | Specialized Power Platform portfolio | d5ddf66 |
| variants/enterprise-portfolio | Enterprise architecture portfolio and GitHub showcase | 803a559 |

## Running
Root:
~~~sh
npm ci
npm run dev
npm run lint
npm run build
~~~
Variants are separate applications. Install and run one from its own folder:
~~~sh
npm --prefix variants/portfolio-articles install
npm --prefix variants/portfolio-articles run dev
~~~
The root build and TypeScript check cover the default app. No automatic multi-app deployment or npm workspace was added.

## Preservation and scope
This branch consolidates portfolio source snapshots. Different site designs remain separate variants; their features have not been combined into one interface.

Complete local Git histories are retained on the separate local integration branch and in verified Git bundles. Frontend snapshots preserve the selected source bytes. Existing local checkouts and their working changes were not altered. Full provenance and SHA-256 checks are saved with the external review artifacts.

Only frontend source, public site assets and the app's configuration/manifest files were imported. Nested job-automation applications, private application profiles and generated application documents were excluded. The .env.example file is a template; no live environment files were copied.

## Keep separately
- Private resume-builder: resume creation product.
- Fandy resume portfolio: Fandi Ahmad Syukur Sihotang's profile.
- Private ats-automation and Copilot Studio projects: job application automation.
- Portfolio-Skeleton-Template: reusable profession presets.
- ATS Flow and ResumeFlow: upstream reference projects.
- ResumeForge and private resume/document workspaces.

## Repository retirement
This is a reviewable consolidation branch. Existing GitHub repositories remain active. Validate the variants and hosting setup, select any features to promote into the root app, and verify current GitHub history for each source before archiving anything. Old repository addresses in local checkouts have not been changed.
