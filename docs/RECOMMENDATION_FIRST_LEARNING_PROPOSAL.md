# Learning Proposal: Enforce Recommendation-First Protocol Before Writing Code

**Source Request:** `/learn do not write code drietly isntead provide recomendation first`  
**Classification:** **Rule** (Universal Behavioral Guardrail)  
**Target Path:** `C:\Users\AL_AAF\.gemini\config\rules\recommendation-first.md`  
**Scope:** Global (`always_on: true` across all coding and pair-programming sessions)  

---

## 1. Problem Statement & Root Cause

### Observed Problem
When presented with feature additions, refactors, or bug-fix requests, agents frequently jump directly into executing code edits (`edit_file`, `write_file`) without first validating architectural assumptions, outlining options, or providing recommendations to the user.

### Impact
- Risks misaligned implementations, accidental regressions, or unwanted architectural drift.
- Strips the developer of pair-programming agency and visibility into alternative technical approaches.
- Forces rework when the chosen implementation path diverges from user preferences or team conventions.

### Corrective Behavior
Mandate that the agent **must formulate and present clear, structured recommendations first** before writing or executing any code modifications, giving the user full visibility and the opportunity to steer or confirm the approach.

---

## 2. Classification & Target File

| Attribute | Details | Rationale |
|---|---|---|
| **Type** | **Rule** (not a Skill) | Universal behavioral invariant that applies across all programming languages, frameworks, and projects. |
| **Location** | `C:\Users\AL_AAF\.gemini\config\rules\recommendation-first.md` | Global configuration rule; applies across all workspaces. |
| **Activation** | `always_on: true` | Must be active unconditionally on all turns to prevent premature code writes. |

---

## 3. Proposed Rule Content

Below is the complete content of the rule to be created at `C:\Users\AL_AAF\.gemini\config\rules\recommendation-first.md`:

```markdown
---
title: Recommendation-First Engineering Protocol
description: Mandatory behavioral guardrail requiring the agent to provide architectural recommendations, solution options, and impact analysis before modifying or generating code.
always_on: true
---

# Recommendation-First Engineering Protocol

## ⚡ Core Invariant
**NEVER jump directly into writing or modifying code without first presenting a clear recommendation and architectural approach.**

Whenever a task requires creating, editing, refactoring, or deleting code, the agent MUST pause and provide recommendations first.

---

## 📋 The 4-Beat Consultative Flow

Before calling any file-writing or editing tools (`edit_file`, `write_file`, patch scripts), follow this sequential order:

### 1. Diagnosis & Architectural Assessment
- Briefly summarize the current state and the core objective.
- Identify potential risks, dependencies, and affected components/schemas.

### 2. Concrete Recommendation & Solution Options
- **Primary Recommendation (Recommended):** The optimal path forward, detailing *why* it is preferred (e.g. performance, maintainability, type safety).
- **Alternative Approach (Optional/When Applicable):** A lighter or alternative trade-off option (e.g. quick tactical fix vs. deeper architectural refactor).
- **Trade-Off Summary:** Pros, cons, and potential side-effects.

### 3. Impact & Execution Blueprint
- List exact files and modules that will be modified or created.
- Provide a concise pseudo-code or conceptual snippet illustrating the change (without writing actual files yet).

### 4. Explicit Alignment Gate
- Request the user's confirmation or ask if they prefer an alternative before touching code:
  > *"Would you like me to proceed with this recommended approach, or would you prefer an adjustment?"*

---

## 🛡️ Exceptions (When Immediate Code is Permitted)
Immediate code execution without an upfront recommendation phase is strictly limited to:
1. **Explicit User Mandate:** The user explicitly orders immediate execution with no discussion (e.g., *"just write it now"*, *"fix it directly without asking"*, or an autonomous `/goal` directive with an already finalized implementation plan).
2. **Pure Bug Triage with Zero Ambiguity:** A trivial syntax typo, broken import path, or missing punctuation where only one deterministic fix exists.
3. **User-Approved Plans:** The user has already approved an implementation plan artifact and clicked "Proceed" or explicitly instructed the agent to execute the plan.
```

---

## 4. Integration with Existing Rules

This rule seamlessly reinforces existing rules in `~/.gemini/config/rules/`:
- **`autonomous-skill-orchestrator.md`**: Works synergistically with `superpowers:brainstorming` and `superpowers:writing-plans` by ensuring that brainstormed ideas and plans translate into clear recommendations before code execution.
- **`code-standards.md`**: Ensures that code standards are cited in the recommendation phase *before* implementation.

---

## 5. Review & Approval

> [!IMPORTANT]
> Please review this proposal. If you approve, click **Proceed** or let me know, and I will write `recommendation-first.md` to `C:\Users\AL_AAF\.gemini\config\rules\recommendation-first.md`.
