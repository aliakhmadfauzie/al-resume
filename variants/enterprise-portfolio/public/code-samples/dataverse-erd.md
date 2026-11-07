# Dataverse Target Architecture — Entity-Relationship Diagram

> **Phase 2 Blueprint** — Enterprise-grade production data layer replacing SharePoint Online staging.
> Rendered via [Mermaid](https://mermaid.js.org). Copy the diagram blocks into any Mermaid-compatible viewer,
> or render directly in GitHub Markdown / VS Code with the Mermaid extension.

---

## 1. Core Data Model — MainDB with Polymorphic Child Tables

```mermaid
erDiagram
    %% ── Business Unit Hierarchy ──
    BUSINESSUNIT {
        guid businessunitid PK
        string name "e.g. IOI PalmnOil, IOI Oleo, IOI Property"
        guid parentbusinessunitid FK "Self-referencing hierarchy"
        bool isdisabled
    }

    %% ── MainDB Parent Table (one per department) ──
    MAINDB_DEPT {
        guid ioi_maindbid PK
        guid owningbusinessunit FK "Departmental data isolation"
        string ioi_formcode "Discriminator: ITSSR, EAF, SAPCR, PRF..."
        string ioi_title
        int ioi_status "Draft→Submitted→Approved→Rejected→Completed"
        guid ioi_requestor FK "systemuser"
        guid ioi_owninguser FK "systemuser"
        datetime ioi_submittedon
        datetime createdon
        guid createdby FK
        datetime modifiedon
        guid modifiedby FK
    }

    %% ── Task (polymorphic child via Regarding lookup) ──
    TASK {
        guid activityid PK
        guid regardingobjectid "Polymorphic → MainDB_{Dept}"
        string regardingobjectidtype "Table discriminator"
        string subject
        string description
        guid ownerid FK "systemuser"
        datetime scheduledend
        int prioritycode "0=Low 1=Normal 2=High"
        int statecode "0=Open 1=Completed 2=Canceled"
    }

    %% ── Comment/Note (polymorphic via Regarding) ──
    ANNOTATION {
        guid annotationid PK
        guid objectid "Polymorphic → MainDB_{Dept}"
        string objectidtypecode "Table discriminator"
        string subject
        string notetext "Rich text body"
        bool isdocument "true if file attachment"
        string filename
        string mimetype
        guid owninguser FK
    }

    %% ── Approval Matrix (5-tier) ──
    IOI_APPROVALMATRIX {
        guid ioi_approvalmatrixid PK
        guid ioi_maindbid FK "Parent record — N:1"
        int ioi_tier "1=Requestor 2=LineMgr 3=Finance 4=Compliance 5=Executive"
        guid ioi_approver FK "systemuser"
        int ioi_status "0=Pending 1=Approved 2=Rejected 3=Escalated"
        datetime ioi_decidedon
        string ioi_comments
    }

    %% ── CIP Budget (ERP-aligned alternate key) ──
    IOI_CIPBUDGET {
        guid ioi_cipbudgetid PK
        string ioi_cipbudgetcode AK "Alternate Key — Oracle ERP sync"
        string ioi_budgetname
        money ioi_totalbudget "Currency: MYR"
        money ioi_committed
        money ioi_actuals
        int ioi_fiscalyear
        string ioi_costcenter
        guid owningbusinessunit FK "BusinessUnit"
    }

    %% ── Relationship Section ──
    MAINDB_DEPT ||--o{ TASK : "Regarding (polymorphic)"
    MAINDB_DEPT ||--o{ ANNOTATION : "Regarding (polymorphic)"
    MAINDB_DEPT ||--o{ IOI_APPROVALMATRIX : "Parent Record"
    BUSINESSUNIT ||--o{ MAINDB_DEPT : "owningbusinessunit"
    BUSINESSUNIT ||--o{ IOI_CIPBUDGET : "owningbusinessunit"
```

---

## 2. Security Model — Business Unit Hierarchy & Role Inheritance

```mermaid
graph TD
    subgraph ROOT_BU["🌐 Root Business Unit<br/>IOI Corporation Berhad"]
        PALM["🏭 IOI Palm Oil<br/>Penang + Johor"]
        OLEO["🧪 IOI Oleochemicals"]
        PROP["🏗️ IOI Properties"]
    end

    subgraph PALM_DEPT["IOI Palm Oil — Departments"]
        IT["💻 IT & Technical Services"]
        HR["👥 HR & People Operations"]
        PROC["📦 Procurement"]
        FIN["💰 Finance"]
        QA["✅ Quality Assurance"]
        ENG["⚙️ Engineering"]
        SHE["🛡️ Safety Health & Environment"]
        MKT["📣 Marketing & Sales"]
        LOG["🚚 Logistics"]
    end

    subgraph ROLES["🔐 Security Roles (Inheritance)"]
        direction LR
        SR_ADMIN["System Admin<br/>All BU, All Data"]
        SR_EXEC["Executive Approver<br/>BU: PalmOil — Read All"]
        SR_MGR["Department Manager<br/>BU: PalmOil — Dept Only"]
        SR_ANALYST["Business Analyst<br/>BU: PalmOil — Dept Only, Read"]
        SR_REQUESTOR["Requestor<br/>Own Records Only + Create"]
    end

    subgraph FIELD_SEC["🛡️ Field Security Profiles"]
        FSP_PII["PII Profile<br/>ioi_requestorname, ioi_nric"]
        FSP_FIN["Financial Profile<br/>ioi_totalamount, ioi_ponumber"]
        FSP_BUDGET["Budget Profile<br/>ioi_cipbudgetcode, ioi_committed"]
    end

    ROOT_BU --> PALM
    ROOT_BU --> OLEO
    ROOT_BU --> PROP
    PALM --> PALM_DEPT

    SR_ADMIN -->|"Organization-wide"| ROOT_BU
    SR_EXEC -->|"Parent:Child BU"| PALM
    SR_MGR -->|"Business Unit"| PALM_DEPT
    SR_ANALYST -->|"Business Unit"| PALM_DEPT
    SR_REQUESTOR -->|"User-level"| PALM_DEPT

    FSP_PII -.->|"Protects"| MAINDB_DEPT["MainDB_{Dept}"]
    FSP_FIN -.->|"Protects"| MAINDB_DEPT
    FSP_BUDGET -.->|"Protects"| IOI_CIPBUDGET["IOI_CIPBudget"]
```

---

## 3. End-to-End Data Flow — Canvas App → Dataverse → Oracle ERP

```mermaid
sequenceDiagram
    actor User as 👤 Department User
    participant Canvas as 🖥️ Canvas App
    participant FX as ⚡ Power Fx (Patch/SubmitForm)
    participant DV as 🗄️ Dataverse
    participant Plugin as 🔌 C# Plugin (Pre-Op)
    participant PA as 🔁 Power Automate
    participant ERP as 🏢 Oracle PowerBiz

    Note over Canvas,ERP: ===== PR Creation Flow =====

    User->>Canvas: Fill PR form + Submit
    Canvas->>FX: SubmitForm(MainDB_PROC)
    FX->>DV: POST /api/data/v9.2/ioi_maindb_proc
    DV->>Plugin: Pre-Operation Create trigger

    Plugin->>ERP: GET /finance/cip-budget/{cipCode}
    ERP-->>Plugin: { available: 48200 }

    alt Budget Available
        Plugin-->>DV: Validation passed — allow commit
        DV-->>FX: 201 Created (ioi_maindbid)
        FX-->>Canvas: Success — navigate to detail
        DV->>PA: Dataverse Trigger — On Create
        PA->>ERP: POST /procurement/purchase-requisitions
        ERP-->>PA: { prNumber: "PR-2026-000142" }
        PA->>DV: PATCH ioi_prnumber = "PR-2026-000142"
    else Budget Exceeded
        Plugin-->>DV: InvalidPluginExecutionException — abort
        DV-->>FX: 400 — Budget exceeded
        FX-->>Canvas: Error notification
    end

    Note over Canvas,ERP: ===== ERP Status Sync (Scheduled) =====

    PA->>ERP: GET /procurement/purchase-requisitions/{prNumber}
    ERP-->>PA: { status: "Approved", approvalHistory: [...] }
    PA->>DV: PATCH status = "Approved"
    PA-->>User: Teams notification — "PR Approved"

    Note over Canvas,ERP: ===== PO + GRN Flow =====

    User->>Canvas: Convert PR → PO
    Canvas->>FX: Patch(iopurchaseorder, ...)
    DV->>Plugin: Pre-Operation Create
    Plugin->>ERP: POST /procurement/purchase-orders
    ERP-->>Plugin: { poNumber: "PO-2026-000317" }
    Plugin-->>DV: Allow commit — PO created
    DV-->>Canvas: Success
    DV->>PA: On Create — Notify vendors

    Note over User,ERP: Later: Goods Received
    User->>Canvas: Create GRN
    Canvas->>ERP: POST /procurement/goods-receipts
    ERP-->>Canvas: 3-way match: { matchStatus: "Matched" }
```

---

## 4. Solution Segmentation — ALM Component Boundaries

```mermaid
graph LR
    subgraph DEV["🔧 Dev — Unmanaged"]
        DIR1["ioi_CoreEntities<br/>Tables + Columns + Keys"]
        DIR2["ioi_BusinessLogic<br/>Plugins + Workflows + BPF"]
        DIR3["ioi_UIComponents<br/>Canvas Apps + PCF + MDA"]
        DIR4["ioi_Shared<br/>ConnectionRefs + EnvVars + ChoiceLists"]
    end

    subgraph BUILD["📦 Build — Export + Segment"]
        HOLDING["ioi_Holding<br/>Unmanaged → All-in-One"]
    end

    subgraph SEGMENT["🧩 Solution Segmentation"]
        MGD_CORE["ioi_CoreEntities<br/>Managed"]
        MGD_LOGIC["ioi_BusinessLogic<br/>Managed"]
        MGD_UI["ioi_UIComponents<br/>Managed"]
    end

    subgraph DEPLOY["🚀 Environment Promotion"]
        TEST["Test Env<br/>Managed Import<br/>+ Test Settings"]
        PROD["Prod Env<br/>Managed Import<br/>+ Prod Settings"]
    end

    DEV --> BUILD
    BUILD --> HOLDING
    HOLDING -->|"pac solution pack"| SEGMENT
    SEGMENT -->|"pac solution import"| TEST
    TEST -->|"Promote"| PROD

    TEST -.->|"Solution Checker<br/>Quality Gate"| SEGMENT
    PROD -.->|"Smoke Test<br/>Post-Deploy"| PROD
```

---

## 5. Environment Strategy — Dev → Build → Test → Prod

```mermaid
graph TD
    subgraph DEV_ENV["🛠️ Dev Environment (Unmanaged)"]
        DEV_MAKER["Makers — Click-to-configure"]
        DEV_SOLUTION["Unmanaged Solutions"]
        DEV_PLUGIN["Plugin Assembly (Debug)"]
    end

    subgraph BUILD_ENV["🏗️ Build Environment (CI)"]
        BUILD_SOURCE["GitHub Actions / Azure DevOps"]
        BUILD_PACK["pac solution pack"]
        BUILD_CHECK["Solution Checker"]
        BUILD_ARTIFACT["Managed .zip"]
    end

    subgraph TEST_ENV["🧪 Test Environment (UAT)"]
        TEST_IMPORT["Managed Import"]
        TEST_VARS["Test Env Variables"]
        TEST_CONN["Test Connection Refs"]
        TEST_SMOKE["Automated Smoke Tests"]
    end

    subgraph PROD_ENV["🚀 Production Environment"]
        PROD_IMPORT["Managed Import"]
        PROD_VARS["Prod Env Variables"]
        PROD_CONN["Prod Connection Refs"]
        PROD_MONITOR["App Insights + Audit"]
    end

    DEV_ENV -->|"git push → PR"| BUILD_ENV
    BUILD_ENV -->|"Build Artifact"| TEST_ENV
    TEST_ENV -->|"Release Approval"| PROD_ENV
    BUILD_ENV -.->|"PR → Solution Checker"| DEV_ENV
    PROD_MONITOR -.->|"Telemetry"| BUILD_ENV
```

---

*Generated as part of the Dataverse Migration Blueprint — Phase 2 target architecture.*
