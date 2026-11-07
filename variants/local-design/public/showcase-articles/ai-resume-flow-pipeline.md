# ResumeFlow: An LLM Pipeline for Personalized Resume Generation

The **open-source ResumeFlow** pipeline (`Ztrimus/job-llm`) turns a single master resume into a **tailored resume and cover letter for any job** — published as a Python package, a web tool, and an ACM/arXiv research paper.

> **Note on attribution:** ResumeFlow is a **third-party open-source project** created by **Saurabh Zinjad, Amey Bhilegaonkar, Amrita Bhattacharjee and Huan Liu** (ASU). This article documents how it is **integrated into the ATS automation workflow** — it is not an original project authored here.

> **AL**
> **Ali Akhmad Fauzie** — ALM & AI Engineering Lead

![ResumeFlow auto job-apply pipeline](https://raw.githubusercontent.com/Ztrimus/job-llm/main/resources/auto_job_apply_workflow.jpg)

> **Live demo**: [resumeflow.streamlit.app](https://resumeflow.streamlit.app/) · **Package**: [`zlm` on PyPI](https://pypi.org/project/zlm/)

---

## The Problem

Job seekers rewrite their resume for every role, losing consistency and time. ResumeFlow automates the tailoring step with a language model while keeping a single master resume as the source of truth.

## What It Does

- **Resume + Cover Letter Pipeline** — `resume_cv_pipeline()` generates a curated resume and cover letter for a job URL.
- **Master Data Ingest** — accepts the master resume as `.pdf` or `.json` and uses it as the canonical profile.
- **Provider-Agnostic LLM** — works with **OpenAI** or **Gemini Pro**.
- **Dual Delivery** — run as a **web tool** (`resumeflow.streamlit.app`) or install as a **Python package** (`zlm` on PyPI).

## Usage

```python
from zlm import AutoApplyModel

job_llm = AutoApplyModel(
    api_key="PROVIDE_API_KEY",
    provider="gemini",          # or "openai"
    downloads_dir="downloads"
)

job_llm.resume_cv_pipeline(
    "ENTER_JOB_URL",
    "YOUR_MASTER_RESUME_DATA"   # .pdf or .json
)
```

## Publication & Distribution

- **ACM Digital Library** paper (doi: 10.1145/3626772.3657680)
- **arXiv** preprint (arXiv:2402.06221)
- **PyPI** package `zlm`
- **GitHub** source (MIT licensed, open for contributions)

---

> **Reference**: Evidence sourced from the `job-llm` repository (`README.md`, `zlm/`, `MASTER_SOURCE_OF_TRUTH.md`, `web_app.py`).
