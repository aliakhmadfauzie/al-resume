# ResumeForge: An ATS-Optimized Resume Tailoring Engine

A **Next.js** application that parses an uploaded resume, tailors it to a job description with an LLM, and exports an ATS-friendly document — with a Supabase backend and a full test suite.

> **AL**
> **Ali Akhmad Fauzie** — Fullstack & Enterprise Solution Architect

---

## The Goal

Produce a **job-description-tailored, ATS-optimized** resume from a single master document, without losing the original's structure.

## How It Works

- **Document Ingestion** — Parse uploaded resumes with `pdfjs-dist` (PDF) and `mammoth` (DOCX), via `react-dropzone`.
- **Tailoring Engine** — Uses **OpenAI** to rework the resume against a job description.
- **ATS Optimization** — Output is structured for applicant tracking systems.
- **Export** — Generates a **DOCX** file with the `docx` library.
- **Comparison** — `diff` is used to show changes between source and tailored output.

## Platform & Architecture

| Layer | Technology |
|---|---|
| Framework | **Next.js 14** (App Router) |
| UI | **Radix UI** + **lucide-react** + Tailwind |
| Backend | **Supabase** (SSR + Postgres, generated TypeScript types) |
| AI | **OpenAI** |
| Docs | `docx` (export), `pdfjs-dist` / `mammoth` (parse) |
| Quality | **Vitest**, **Playwright e2e**, **Prettier**, **Husky** |

## Engineering Practices

- **Type-safe database access** via `supabase gen types` → `lib/types/supabase.ts`.
- **Test coverage** with Vitest unit tests and Playwright end-to-end tests.
- **Husky** git hooks + Prettier to enforce formatting on commit.
- **Developer scripts** for DB generate / push / reset.

---

> **Reference**: Evidence sourced from the `Resume Buildder` repository (`package.json`, `app/`, `lib/`, `services/`, `supabase/`, `tests/`).
