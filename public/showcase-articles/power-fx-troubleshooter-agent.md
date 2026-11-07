# Building a Power Fx Troubleshooter: A Microsoft 365 Declarative Agent

A custom **Microsoft 365 Copilot agent** that helps low-code makers debug and fix **Power Fx** formulas directly in Copilot — grounded in web search, code interpretation, and the maker's own SharePoint/OneDrive content.

> **AL**
> **Ali Akhmad Fauzie** — ALM & AI Engineering Lead

---

## Why a Declarative Agent?

Power Fx errors (delegation warnings, formula bugs, schema mismatches) are common, and answers are scattered across Learn docs and the maker's own lists. A declarative agent packages that expertise into a conversational, grounded assistant.

## How It's Built

Using the **Microsoft 365 Agents Toolkit**, the agent is a declarative definition (no custom backend — Copilot handles orchestration):

- **`declarativeAgent.json`** (v1.7 schema) defines the agent: name, description, instructions, actions, capabilities, and conversation starters.
- **`instruction.txt`** supplies the system prompt that makes the agent a Power Fx specialist.
- **`learn-plugin.json`** is an action the agent can invoke to pull in targeted reference content.

## Capabilities

| Capability | Use |
|---|---|
| **WebSearch** | Find current Power Fx / Microsoft Learn guidance |
| **CodeInterpreter** | Reason over formula snippets and sample code |
| **OneDriveAndSharePoint** | Read the maker's list **schema** to write accurate formulas |

## Conversation Starters

The agent ships with starter prompts that model real maker work:

- **"Debug a formula"** — e.g. `If(IsBlank(TextInput1.Text), "", Value(TextInput1.Text)) * PriceSlider.Value`
- **"Fix delegation warning"** — e.g. `Filter(Accounts, Name in ["Contoso", "Fabrikam"])`
- **"Check list schema"** — look up a SharePoint list schema to write correct formulas
- **"Find code samples"** — search Learn for patterns like `ForAll` with collections

## Evaluation

The project wires in the **Microsoft 365 Copilot Agent Evaluations CLI** (`@microsoft/m365-copilot-eval`) to measure and improve answer quality with AI-based scoring and result reports.

---

> **Reference**: Evidence sourced from the `Copilot` repository (`appPackage/declarativeAgent.json`, `m365agents.yml`, `evals/`).
