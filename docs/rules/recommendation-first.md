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
