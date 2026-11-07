# Al Resume Website

A modern, animation-driven personal portfolio / resume website built with **React 19**,
**TypeScript**, **Vite 6**, and **Tailwind CSS 4**.

## Tech stack

- **React 19** (`react`, `react-dom`) — UI
- **TypeScript 5.8** — type safety
- **Vite 6** — build tool and dev server
- **Tailwind CSS 4** (`@tailwindcss/vite`) — styling
- **Motion** (`motion`) — animations / scroll effects
- **Lucide React** — icons
- **React Markdown** — renders article / resume content
- **Express** — local dev API (webhooks)
- **Google GenAI** (`@google/genai`) — AI features (via `GEMINI_API_KEY`)
- **dotenv** — environment variables

## Getting started

Prerequisites: [Bun](https://bun.sh) (or npm) and Node.js.

```bash
# 1. Install dependencies
bun install

# 2. Configure environment
cp .env.example .env
# Fill in GEMINI_API_KEY and APP_URL

# 3. Start the dev server
bun run dev
```

## Scripts

| Script             | Description                                        |
|--------------------|----------------------------------------------------|
| `bun run dev`      | Start Vite dev server on port 3000                 |
| `bun run build`    | Production build to `dist/`                        |
| `bun run preview`  | Preview the production build                       |
| `bun run lint`     | Type-check with `tsc --noEmit`                     |
| `bun run clean`    | Remove `dist/` and `server.js`                     |

## Project structure

- `src/` — application source (`App.tsx`, `main.tsx`, `types.ts`)
- `src/components/` — UI components
- `src/data/` — content data (`resumeData.ts`, `articlesData.ts`)
- `.github/agents/` — custom Copilot agents (incl. `agent-orchestrator`)
- `.github/skills/` — Copilot skills (incl. `agent-orchestrator` workflow)

## Copilot orchestration

This repo includes an **Agent Orchestrator** (`.github/agents/agent-orchestrator.agent.md`)
plus the `agent-orchestrator` skill, which classify intent, delegate to specialist
sub-agents, enforce skill ordering, and gate output on type safety, architecture,
security, and performance standards. Invoke it via `@agent-orchestrator`.
