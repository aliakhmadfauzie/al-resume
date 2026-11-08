import { ProjectGalleryItem, ProjectItem, MigrationSlice } from '../types';

export const GALLERY_STORAGE_KEY = 'al_portfolio_gallery_overrides_v1';

/**
 * Tailored 3-screen gallery specifications for every portfolio project and migration slice.
 * Users can either:
 * 1. Drop image files directly into `/public/assets/gallery/<project-id>/01.png` (auto-detected on load), OR
 * 2. Upload / paste images directly in the UI (persisted in localStorage and exportable as JSON).
 */
export const PROJECT_GALLERY_MAP: Record<string, ProjectGalleryItem[]> = {
  'ats-automation': [
    {
      id: 'ats-auto-1',
      title: 'ATS Command Center & Subprocess Progress Stream',
      caption: 'Zero-dependency ThreadingHTTPServer dashboard showing 0–100% live tailoring pipeline stages and Tri-Engine RPM/RPD quota bars.',
      expectedPath: '/assets/gallery/ats-automation/01-command-center.png',
      imageUrl: '/assets/gallery/ats-automation/01-command-center.png'
    },
    {
      id: 'ats-auto-2',
      title: '10-Gate PDF Governance Scorecard (Q1–Q10)',
      caption: 'Automated verification report checking selectable text, URI annotations, SSOT regex metric parity, and page count budgets.',
      expectedPath: '/assets/gallery/ats-automation/02-governance-gates.png',
      imageUrl: '/assets/gallery/ats-automation/02-governance-gates.png'
    },
    {
      id: 'ats-auto-3',
      title: 'Workday Bot v6.0 & Multi-Portal Profile Sync',
      caption: 'Playwright persistent Chromium session resolving Workday ARIA listboxes, hidden file inputs, and SHA-256 response cache hits.',
      expectedPath: '/assets/gallery/ats-automation/03-workday-bot.png',
      imageUrl: '/assets/gallery/ats-automation/03-workday-bot.png'
    }
  ],
  'power-platform-portfolio': [
    {
      id: 'ppp-1',
      title: 'Executive Modernization Hero & Telemetry Matrix',
      caption: 'High-contrast telemetry overview highlighting 365+ migrated Lotus Domino databases, 28+ BUs, and 878 Power Apps screens.',
      expectedPath: '/assets/gallery/power-platform-portfolio/01-executive-hero.png',
      imageUrl: '/assets/gallery/power-platform-portfolio/01-executive-hero.png'
    },
    {
      id: 'ppp-2',
      title: '6-Slice Domino Migration Explorer & Consolidation Matrix',
      caption: 'Interactive domain filter across Slices A–F displaying 314 unique app groups and Dataverse schema consolidations.',
      expectedPath: '/assets/gallery/power-platform-portfolio/02-migration-slices.png',
      imageUrl: '/assets/gallery/power-platform-portfolio/02-migration-slices.png'
    },
    {
      id: 'ppp-3',
      title: '7 Embedded Live Enterprise Simulators',
      caption: 'Interactive browser sandbox running the Tasek 7-component rebate engine, FinOps portal, and AI Builder SOP classifier.',
      expectedPath: '/assets/gallery/power-platform-portfolio/03-live-simulators.png',
      imageUrl: '/assets/gallery/power-platform-portfolio/03-live-simulators.png'
    }
  ],
  'ioi-acidchem-she-platform': [
    {
      id: 'ioi-she-1',
      title: 'Executive SHE Telemetry & 5×5 DOSH Risk Heatmap',
      caption: 'Real-time safety dashboard across Penang Acidchem and Johor Pan-Century plants with 482 Safe Work Days and interactive L×S matrix.',
      expectedPath: '/assets/gallery/ioi-acidchem-she-platform/01-she-dashboard.png',
      imageUrl: '/assets/gallery/ioi-acidchem-she-platform/01-she-dashboard.png'
    },
    {
      id: 'ioi-she-2',
      title: 'HIRADC Risk Register & 5-Tier Hierarchy of Controls',
      caption: 'Chemical hazard assessment workbench for 240°C fatty acid sampling and 50% NaOH unloading with live L×S sliders.',
      expectedPath: '/assets/gallery/ioi-acidchem-she-platform/02-hiradc-register.png',
      imageUrl: '/assets/gallery/ioi-acidchem-she-platform/02-hiradc-register.png'
    },
    {
      id: 'ioi-she-3',
      title: '5-Whys Incident Investigation (SHEAI/SHEICAR) & PPE Stock',
      caption: 'Structured causal chain workbench paired with multi-plant SIRIM/DOSH PPE minimum threshold reorder alerts.',
      expectedPath: '/assets/gallery/ioi-acidchem-she-platform/03-incident-capa.png',
      imageUrl: '/assets/gallery/ioi-acidchem-she-platform/03-incident-capa.png'
    }
  ],
  'putri-garmenthub-erp': [
    {
      id: 'putri-1',
      title: '3-Step SPK Batch Pipeline & Multi-Color Size Curves',
      caption: 'Live production tracking across Dipotong, Sedang Dijahit, and Selesai stages with XS–XXL Lusin breakdowns and unit HPP.',
      expectedPath: '/assets/gallery/putri-garmenthub-erp/01-spk-pipeline.png',
      imageUrl: '/assets/gallery/putri-garmenthub-erp/01-spk-pipeline.png'
    },
    {
      id: 'putri-2',
      title: 'Arus Kas 4 Kantong & Role-Isolated Profit Ledger',
      caption: 'Segregated multi-pocket financial dashboard (Kas Bahan, Kas Operasional, Kas Iklan, and Owner-only Kas Profit) with SVG donut analytics.',
      expectedPath: '/assets/gallery/putri-garmenthub-erp/02-four-pocket-ledger.png',
      imageUrl: '/assets/gallery/putri-garmenthub-erp/02-four-pocket-ledger.png'
    },
    {
      id: 'putri-3',
      title: 'Partial Tailor Drop Intake & QC Defect Deduction Sheet',
      caption: 'Bottom-sheet calculator deducting BS Fatal and BS Repair quantities and generating 1-tap WhatsApp wage slips.',
      expectedPath: '/assets/gallery/putri-garmenthub-erp/03-qc-drop-settlement.png',
      imageUrl: '/assets/gallery/putri-garmenthub-erp/03-qc-drop-settlement.png'
    }
  ],
  'jastip-cross-border': [
    {
      id: 'jastip-1',
      title: 'Belanja Live Mall Triage & Store-Scoped Deck',
      caption: 'One-handed 480px mobile workspace grouping orders by physical Bangkok/KL/Tokyo store and 4-state triage status.',
      expectedPath: '/assets/gallery/jastip-cross-border/01-mall-triage.png',
      imageUrl: '/assets/gallery/jastip-cross-border/01-mall-triage.png'
    },
    {
      id: 'jastip-2',
      title: 'Gemini 2.5 Flash Multimodal Receipt OCR Verification',
      caption: 'Camera capture and structured JSON extraction of foreign-script merchant names, receipt numbers, VAT, and native currency totals.',
      expectedPath: '/assets/gallery/jastip-cross-border/02-gemini-receipt-ocr.png',
      imageUrl: '/assets/gallery/jastip-cross-border/02-gemini-receipt-ocr.png'
    },
    {
      id: 'jastip-3',
      title: 'Cuan Margin & Foreign Exchange Arbitrage Ledger',
      caption: 'Segmented capital vs. net profit bar separating direct Fee Jastip markup from foreign currency spread arbitrage (+Rp/THB).',
      expectedPath: '/assets/gallery/jastip-cross-border/03-cuan-fx-ledger.png',
      imageUrl: '/assets/gallery/jastip-cross-border/03-cuan-fx-ledger.png'
    }
  ],
  'dlab-night-match': [
    {
      id: 'dlab-1',
      title: '"The Elimination Game" 10-Second Olfactory Assessment',
      caption: '4-column animated 53-flacon backdrop paired with 3-step intensity/aura triage delivering >=90% confidence in-stock matches.',
      expectedPath: '/assets/gallery/dlab-night-match/01-elimination-quiz.png',
      imageUrl: '/assets/gallery/dlab-night-match/01-elimination-quiz.png'
    },
    {
      id: 'dlab-2',
      title: '93-SKU Obsidian & Gold Catalog + Weekly Top 10 Leaderboard',
      caption: '6-dimensional facet filtering across 10ml/30ml/40ml extraits, synergy roles, and sillage projection with NUL-indexed 60fps search.',
      expectedPath: '/assets/gallery/dlab-night-match/02-atelier-catalog.png',
      imageUrl: '/assets/gallery/dlab-night-match/02-atelier-catalog.png'
    },
    {
      id: 'dlab-3',
      title: 'Custom Flacon Monogramming & Cloud Admin Console',
      caption: 'Commissioned checkout drawer with 3-character gold-leaf engraving (+$20) and Google-Auth-protected Firestore inventory CRUD.',
      expectedPath: '/assets/gallery/dlab-night-match/03-monogram-checkout.png',
      imageUrl: '/assets/gallery/dlab-night-match/03-monogram-checkout.png'
    }
  ],
  'saltdistribute-b2b-logistics': [
    {
      id: 'salt-1',
      title: 'Admin Kanban Dispatch & Weighted-Average COGS Dashboard',
      caption: 'Material 3 Emerald industrial console tracking B2B salt tonnage, 24h lazy stock expiration, and real-time gross margin.',
      expectedPath: '/assets/gallery/saltdistribute-b2b-logistics/01-admin-dispatch.png',
      imageUrl: '/assets/gallery/saltdistribute-b2b-logistics/01-admin-dispatch.png'
    },
    {
      id: 'salt-2',
      title: 'Seller-Exclusive Live GNSS Haversine Proximity Radar',
      caption: 'Interactive CARTO/Esri satellite radar tracking live buyer coordinates, <=150m meeting point lock, ground speed, and WakeLock.',
      expectedPath: '/assets/gallery/saltdistribute-b2b-logistics/02-gnss-live-radar.png',
      imageUrl: '/assets/gallery/saltdistribute-b2b-logistics/02-gnss-live-radar.png'
    },
    {
      id: 'salt-3',
      title: 'Dual-Mode Buyer & Ephemeral Guest Quick Order Flow',
      caption: 'Zero-registration purchase calculator (by exact gram weight or target IDR budget) with automated PII redaction upon completion.',
      expectedPath: '/assets/gallery/saltdistribute-b2b-logistics/03-guest-quick-order.png',
      imageUrl: '/assets/gallery/saltdistribute-b2b-logistics/03-guest-quick-order.png'
    }
  ],
  'barbershop-power-code-app': [
    {
      id: 'barber-1',
      title: 'Smart Barber Desk & Auto-Shift Queue Timeline',
      caption: 'Two-zone floor console showing active barber chairs, 10-minute grace late detection, and 60-second transactional undo banner.',
      expectedPath: '/assets/gallery/barbershop-power-code-app/01-smart-barber-desk.png',
      imageUrl: '/assets/gallery/barbershop-power-code-app/01-smart-barber-desk.png'
    },
    {
      id: 'barber-2',
      title: 'Staff-Assisted QR Check-In Kiosk & Token Resolver',
      caption: 'Reception tablet scanner resolving deterministic check-in tokens (e.g. 35e84374-budi) and alerting assigned barbers in real time.',
      expectedPath: '/assets/gallery/barbershop-power-code-app/02-qr-checkin-kiosk.png',
      imageUrl: '/assets/gallery/barbershop-power-code-app/02-qr-checkin-kiosk.png'
    },
    {
      id: 'barber-3',
      title: 'Executive Operations, Outlier Expense & Recipe POS',
      caption: 'Dataverse/SharePoint governance hub flagging >2x outlier expenses and auto-deducting backbar consumables per service recipe.',
      expectedPath: '/assets/gallery/barbershop-power-code-app/03-executive-pos.png',
      imageUrl: '/assets/gallery/barbershop-power-code-app/03-executive-pos.png'
    }
  ],
  'lewi-house-syariah-pms': [
    {
      id: 'lewi-1',
      title: '4-Floor 17-Room Interactive Kosan & Guesthouse Grid',
      caption: 'Real-time occupancy dashboard across Units K-101 to K-404 (Tipe A VIP, Tipe B Superior, Tipe C Standard) and PLN kWh meters.',
      expectedPath: '/assets/gallery/lewi-house-syariah-pms/01-room-grid-pms.png',
      imageUrl: '/assets/gallery/lewi-house-syariah-pms/01-room-grid-pms.png'
    },
    {
      id: 'lewi-2',
      title: 'Date & Budget Multi-OTA Deep-Link Booking Router',
      caption: 'Public hospitality modal enforcing Syariah policy acknowledgment and routing guests to Agoda, Traveloka, Booking.com, or WhatsApp.',
      expectedPath: '/assets/gallery/lewi-house-syariah-pms/02-ota-booking-modal.png',
      imageUrl: '/assets/gallery/lewi-house-syariah-pms/02-ota-booking-modal.png'
    },
    {
      id: 'lewi-3',
      title: 'Self-Service Tenant Portal & Multi-Admin Collision Chat',
      caption: 'Resident billing & complaint portal paired with cursor-paginated Firestore chat and multi-admin presence indicators.',
      expectedPath: '/assets/gallery/lewi-house-syariah-pms/03-tenant-chat-hub.png',
      imageUrl: '/assets/gallery/lewi-house-syariah-pms/03-tenant-chat-hub.png'
    }
  ],
  'warung-dewasa-pwa': [
    {
      id: 'wd-1',
      title: 'Asymmetric Hero & 30fps Idle-Deferred WebGL Crystal Mesh',
      caption: 'High-conversion Medan storefront with live 45–90 minute courier availability pulse and #1 Winner Spotlight ribbon.',
      expectedPath: '/assets/gallery/warung-dewasa-pwa/01-storefront-hero.png',
      imageUrl: '/assets/gallery/warung-dewasa-pwa/01-storefront-hero.png'
    },
    {
      id: 'wd-2',
      title: 'Direct COD Checkout Sheet with OpenStreetMap Geocoding',
      caption: 'Material 3 bottom sheet featuring 1-tap Medan district presets, GPS reverse geocoding, and 350ms debounced Nominatim search.',
      expectedPath: '/assets/gallery/warung-dewasa-pwa/02-cod-nominatim-modal.png',
      imageUrl: '/assets/gallery/warung-dewasa-pwa/02-cod-nominatim-modal.png'
    },
    {
      id: 'wd-3',
      title: 'Code-Split Merchant Hub & Inventory Health Bento Grid',
      caption: 'Lazy-loaded admin console for 167-SKU CRUD, COD status progression, merchant usage tips, and live M3 theme customization.',
      expectedPath: '/assets/gallery/warung-dewasa-pwa/03-merchant-hub.png',
      imageUrl: '/assets/gallery/warung-dewasa-pwa/03-merchant-hub.png'
    }
  ],
  'ats-flow-resume': [
    {
      id: 'atsflow-1',
      title: 'Split-Pane 8-Tab Editor & Sandboxed A4 Live Preview',
      caption: 'Structured form workspace paired with a 300ms debounced <iframe srcDoc> preview guaranteeing zero Tailwind style bleed.',
      expectedPath: '/assets/gallery/ats-flow-resume/01-split-pane-editor.png',
      imageUrl: '/assets/gallery/ats-flow-resume/01-split-pane-editor.png'
    },
    {
      id: 'atsflow-2',
      title: 'Opt-In Anonymous Cloud Sync & Public Recruiter Share Dialog',
      caption: 'Firebase anonymous auth + 2000ms debounced Firestore auto-sync with security-rule-enforced public PDF share links.',
      expectedPath: '/assets/gallery/ats-flow-resume/02-cloud-share-dialog.png',
      imageUrl: '/assets/gallery/ats-flow-resume/02-cloud-share-dialog.png'
    },
    {
      id: 'atsflow-3',
      title: 'Deterministic Single-Column A4 PDF Output',
      caption: '1:1 headless Chromium PDF output from @ats-resume/pdf-service with clickable E.164/URI links and break-inside: avoid pagination.',
      expectedPath: '/assets/gallery/ats-flow-resume/03-deterministic-pdf.png',
      imageUrl: '/assets/gallery/ats-flow-resume/03-deterministic-pdf.png'
    }
  ],
  'resumeforge-nextjs': [
    {
      id: 'rf-1',
      title: '4-Stage Tailoring Wizard & SVG Radial ATS Score Gauge',
      caption: 'Next.js 14 diagnostic dashboard showing prominence-weighted composite ATS score and matched vs. missing required JD keywords.',
      expectedPath: '/assets/gallery/resumeforge-nextjs/01-ats-score-dashboard.png',
      imageUrl: '/assets/gallery/resumeforge-nextjs/01-ats-score-dashboard.png'
    },
    {
      id: 'rf-2',
      title: 'Fact-Locked AI Rewrite DiffViewer Cards',
      caption: 'Side-by-side red/green diff comparison with Facts Locked badge protecting employer names, job titles, and dates.',
      expectedPath: '/assets/gallery/resumeforge-nextjs/02-fact-locked-diff.png',
      imageUrl: '/assets/gallery/resumeforge-nextjs/02-fact-locked-diff.png'
    },
    {
      id: 'rf-3',
      title: '3-Pane Live Resume Editor & Real-Time JD Re-Scorer',
      caption: 'Interactive editor recalculating calculateMatch(resume, jd) on every keystroke alongside a live scaled A4 preview.',
      expectedPath: '/assets/gallery/resumeforge-nextjs/03-three-pane-editor.png',
      imageUrl: '/assets/gallery/resumeforge-nextjs/03-three-pane-editor.png'
    }
  ],
  'altech-job-llm-suite': [
    {
      id: 'jobllm-1',
      title: 'Interactive 5-Layer Mermaid Architecture Explorer',
      caption: 'Clickable SVG system topology (Presentation, Integration, Data, Enterprise, DevOps) with 60fps HTML5 Canvas particle network.',
      expectedPath: '/assets/gallery/altech-job-llm-suite/01-mermaid-explorer.png',
      imageUrl: '/assets/gallery/altech-job-llm-suite/01-mermaid-explorer.png'
    },
    {
      id: 'jobllm-2',
      title: 'Multi-Provider Instructor Pipeline & TF-IDF Alignment Metrics',
      caption: 'AutoApplyModel console benchmarking Jaccard, Overlap, and TF-IDF Cosine similarity across OpenAI, Gemini, and Ollama.',
      expectedPath: '/assets/gallery/altech-job-llm-suite/02-similarity-benchmarks.png',
      imageUrl: '/assets/gallery/altech-job-llm-suite/02-similarity-benchmarks.png'
    },
    {
      id: 'jobllm-3',
      title: '3-Database Relational Notion CRM Sync & LaTeX Output',
      caption: 'Automated Notion workspace provisioning (Jobs, Resumes, Applications) and custom \\BLOCK/\\VAR Jinja2 LaTeX PDF output.',
      expectedPath: '/assets/gallery/altech-job-llm-suite/03-notion-crm-latex.png',
      imageUrl: '/assets/gallery/altech-job-llm-suite/03-notion-crm-latex.png'
    }
  ],
  'altech-stitch-mcp': [
    {
      id: 'stitch-1',
      title: 'Screen 1 — Executive Portfolio & 15-Project Showcase Grid',
      caption: 'Google Stitch MCP obsidian canvas (#0c0e0f) with 2×2 tabular telemetry ledger and browser-framed project cards.',
      expectedPath: '/assets/gallery/altech-stitch-mcp/01-stitch-portfolio-grid.png',
      imageUrl: '/assets/gallery/altech-stitch-mcp/01-stitch-portfolio-grid.png'
    },
    {
      id: 'stitch-2',
      title: 'Screen 2 — Split-Pane Case Study & Code Audit Reader',
      caption: 'Deep-dive technical dossier reader with 4-KPI strip, sticky 15-project audit switcher, and dynamic Mermaid v10 topologies.',
      expectedPath: '/assets/gallery/altech-stitch-mcp/02-stitch-audit-reader.png',
      imageUrl: '/assets/gallery/altech-stitch-mcp/02-stitch-audit-reader.png'
    },
    {
      id: 'stitch-3',
      title: 'Embedded Client Sandbox Kernels (4-Pocket & DOSH 5×5)',
      caption: 'Interactive Architecture Sandbox modal running deterministic financial sharding and chemical hazard risk calculations.',
      expectedPath: '/assets/gallery/altech-stitch-mcp/03-stitch-sandbox-modal.png',
      imageUrl: '/assets/gallery/altech-stitch-mcp/03-stitch-sandbox-modal.png'
    }
  ],
  'fandy-geophysical-portfolio': [
    {
      id: 'fandy-1',
      title: 'Wadati Diagram Least-Squares QC & Vp/Vs Regression Lab',
      caption: 'Interactive seismic arrival time plot computing live ordinary least-squares slope, Vp/Vs ratio, R², and residual outlier flags.',
      expectedPath: '/assets/gallery/fandy-geophysical-portfolio/01-wadati-regression-lab.png',
      imageUrl: '/assets/gallery/fandy-geophysical-portfolio/01-wadati-regression-lab.png'
    },
    {
      id: 'fandy-2',
      title: '3D Joint Hypocenter Determination (JHD) Fault Relocation',
      caption: 'Plan X-Y and Depth X-Z SVG visualizer showing Geiger epicenters collapsing onto the NW–SE Telomoyo Fault Plane (-89.5% RMS).',
      expectedPath: '/assets/gallery/fandy-geophysical-portfolio/02-jhd-fault-relocation.png',
      imageUrl: '/assets/gallery/fandy-geophysical-portfolio/02-jhd-fault-relocation.png'
    },
    {
      id: 'fandy-3',
      title: 'Res2Dinv 2D Resistivity Pseudosection & Bilingual Admin CMS',
      caption: 'Wenner/Schlumberger/Dipole geoelectrical inversion contour grid paired with the session-authenticated JSON-portable CMS.',
      expectedPath: '/assets/gallery/fandy-geophysical-portfolio/03-res2dinv-admin-cms.png',
      imageUrl: '/assets/gallery/fandy-geophysical-portfolio/03-res2dinv-admin-cms.png'
    }
  ],
  'al-resume-interview-prep': [
    {
      id: 'alres-1',
      title: 'Guided 7-Step Hiring Manager Walkthrough & Ask Ali Assistant',
      caption: 'Interactive interview companion stepping through Career Journey, Flagship Delivery, 90-Day Plan, and intent-routed Q&A.',
      expectedPath: '/assets/gallery/al-resume-interview-prep/01-guided-interview-mode.png',
      imageUrl: '/assets/gallery/al-resume-interview-prep/01-guided-interview-mode.png'
    },
    {
      id: 'alres-2',
      title: 'Multi-Persona Editorial Switcher & 12-Tile SVG Impact Dashboard',
      caption: 'Real-time profile mode switcher (Full | Architecture | Operations) with custom SVG Track Mix Donut and Speed Wins bars.',
      expectedPath: '/assets/gallery/al-resume-interview-prep/02-persona-impact-dashboard.png',
      imageUrl: '/assets/gallery/al-resume-interview-prep/02-persona-impact-dashboard.png'
    },
    {
      id: 'alres-3',
      title: '3-in-1 Print A4, ATS Plain-Text & vCard 3.0 (.vcf) Studio',
      caption: 'Multi-format resume modal serializing persona-scoped career data into clean ASCII ATS text and downloadable .vcf contacts.',
      expectedPath: '/assets/gallery/al-resume-interview-prep/03-ats-vcard-exporter.png',
      imageUrl: '/assets/gallery/al-resume-interview-prep/03-ats-vcard-exporter.png'
    }
  ]
};

/**
 * Generates a complete 3-slot gallery for any ProjectItem or MigrationSlice,
 * merging predefined domain slots with any user-uploaded images stored in localStorage.
 */
export function getGalleryForItem(item: ProjectItem | MigrationSlice): ProjectGalleryItem[] {
  const baseSlots: ProjectGalleryItem[] =
    item.gallery ||
    PROJECT_GALLERY_MAP[item.id] || [
      {
        id: `${item.id}-1`,
        title: `${item.title} — Primary Operational Dashboard`,
        caption: `Main workspace and real-time telemetry view for ${item.title} (${item.tools.slice(0, 3).join(' · ')}).`,
        expectedPath: `/assets/gallery/${item.id}/01-dashboard.png`
      },
      {
        id: `${item.id}-2`,
        title: `${item.title} — Workflow & Approval Architecture`,
        caption: `End-to-end process orchestration and validation state machine: ${item.solution.slice(0, 110)}...`,
        expectedPath: `/assets/gallery/${item.id}/02-workflow.png`
      },
      {
        id: `${item.id}-3`,
        title: `${item.title} — Audit Trail & Impact Telemetry`,
        caption: `Verified production outcome: ${item.impact}`,
        expectedPath: `/assets/gallery/${item.id}/03-telemetry.png`
      }
    ];

  try {
    const raw = localStorage.getItem(GALLERY_STORAGE_KEY);
    if (!raw) return baseSlots;
    const overrides: Record<string, ProjectGalleryItem[]> = JSON.parse(raw);
    const itemOverrides = overrides[item.id];
    if (!itemOverrides || !Array.isArray(itemOverrides)) return baseSlots;

    // Merge uploaded imageUrls/titles/captions by slot id, ensuring valid image sources
    const merged = baseSlots.map((slot) => {
      const found = itemOverrides.find((o) => o.id === slot.id);
      if (!found) return { ...slot, imageUrl: slot.imageUrl || slot.expectedPath };
      const validImg = found.imageUrl && typeof found.imageUrl === 'string' && found.imageUrl.trim().length > 0
        ? found.imageUrl
        : (slot.imageUrl || slot.expectedPath);
      return { ...slot, ...found, imageUrl: validImg };
    });
    const extraSlots = itemOverrides.filter((o) => !baseSlots.some((b) => b.id === o.id));
    return [...merged, ...extraSlots];
  } catch {
    return baseSlots;
  }
}

export function saveGalleryForItem(itemId: string, slots: ProjectGalleryItem[]): void {
  try {
    const raw = localStorage.getItem(GALLERY_STORAGE_KEY);
    const overrides: Record<string, ProjectGalleryItem[]> = raw ? JSON.parse(raw) : {};
    overrides[itemId] = slots;
    localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(overrides));
    window.dispatchEvent(new CustomEvent('portfolio-gallery-updated', { detail: { itemId } }));
  } catch (e) {
    console.error('Failed to persist gallery image override:', e);
  }
}
