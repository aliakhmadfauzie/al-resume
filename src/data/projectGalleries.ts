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
      title: 'Executive Modernization Hero & Live Production Portal',
      caption: 'Live operational dashboard of IOI Acidchem Enterprise Platform (v2) with persistent modular navigation and 1,428 active transactional tickets across Penang and Johor facilities.',
      expectedPath: '/assets/gallery/power-platform-portfolio/01-executive-hero.png',
      imageUrl: '/assets/gallery/power-platform-portfolio/01-executive-hero.png'
    },
    {
      id: 'ppp-2',
      title: 'Screen 1: Entra ID Single Sign-On Gateway & Plant Facility Selector',
      caption: 'Corporate authentication gateway with multi-plant facility scope (Penang Complex vs. Johor Pasir Gudang), IOIP-04 compliance notice, and 99.98% SLA telemetry.',
      expectedPath: '/assets/gallery/power-platform-portfolio/02-login-sso-gateway.png',
      imageUrl: '/assets/gallery/power-platform-portfolio/02-login-sso-gateway.png'
    },
    {
      id: 'ppp-3',
      title: 'Screen 2: High-Density Transactional Browse Gallery & KPI Telemetry',
      caption: '4-metric operational KPI strip, dynamic multi-state filter bar (All, My Requests, Pending Sign-off), status chips, and quick-action dossier triggers.',
      expectedPath: '/assets/gallery/power-platform-portfolio/03-browse-transaction-gallery.png',
      imageUrl: '/assets/gallery/power-platform-portfolio/03-browse-transaction-gallery.png'
    },
    {
      id: 'ppp-4',
      title: 'Screen 3: Two-Column Dossier & Interactive 4-Stage Approval Stepper',
      caption: 'Enterprise split layout (65% problem scope & quotation attachments / 35% approval timeline) featuring cryptographic SHA-256 audit seal.',
      expectedPath: '/assets/gallery/power-platform-portfolio/04-details-approval-stepper.png',
      imageUrl: '/assets/gallery/power-platform-portfolio/04-details-approval-stepper.png'
    },
    {
      id: 'ppp-5',
      title: 'Screen 4: 4-Step Transactional Intake Wizard & Dynamic Category Matrix',
      caption: 'Stepped wizard intake with cascading category dropdowns, severity radio card matrix, auto-filling asset lookup, and drag-and-drop diagnostic evidence zone.',
      expectedPath: '/assets/gallery/power-platform-portfolio/05-edit-intake-wizard.png',
      imageUrl: '/assets/gallery/power-platform-portfolio/05-edit-intake-wizard.png'
    },
    {
      id: 'ppp-6',
      title: 'Power Automate: Modern UI Designer & Multi-Tier Approval Flow',
      caption: 'Event-driven cloud workflow on SharePoint MainDB_IT_Ext_Support with addHours SLA deadline math, dual-tier approvals, and Scope-Catch exception resilience.',
      expectedPath: '/assets/gallery/power-platform-portfolio/06-power-automate-modern-designer.png',
      imageUrl: '/assets/gallery/power-platform-portfolio/06-power-automate-modern-designer.png'
    }
  ],
  'saltdistribute-b2b-logistics': [
    {
      id: 'salt-1',
      title: 'Distributor Authentication & Keychain (Screen 1)',
      caption: 'Mobile OTP & PIN login with offline cryptographic keychain and role-based permissions.',
      expectedPath: '/assets/gallery/saltdistribute-b2b-logistics/01_login.png',
      imageUrl: '/assets/gallery/saltdistribute-b2b-logistics/01_login.png'
    },
    {
      id: 'salt-2',
      title: 'Logistics & Dispatch Cockpit (Screen 2)',
      caption: 'Real-time tonnage telemetry (450t) & Kanban shipment pipeline with zero-polling reactive Firestore stream updates.',
      expectedPath: '/assets/gallery/saltdistribute-b2b-logistics/02_dashboard.png',
      imageUrl: '/assets/gallery/saltdistribute-b2b-logistics/02_dashboard.png'
    },
    {
      id: 'salt-3',
      title: 'Bulk Order & Tier Calculation (Screen 3)',
      caption: 'Interactive tonnage stepper with dynamic tiered bulk pricing (1–5t, 5–20t, 20t+) and regional freight tariff calculations.',
      expectedPath: '/assets/gallery/saltdistribute-b2b-logistics/03_form.png',
      imageUrl: '/assets/gallery/saltdistribute-b2b-logistics/03_form.png'
    },
    {
      id: 'salt-4',
      title: 'Distributor Profile & Quotas (Screen 4)',
      caption: 'NET-30 credit limit, warehouse address, automated COGS accounting, and biometric security settings.',
      expectedPath: '/assets/gallery/saltdistribute-b2b-logistics/04_profile.png',
      imageUrl: '/assets/gallery/saltdistribute-b2b-logistics/04_profile.png'
    },
    {
      id: 'salt-5',
      title: 'Pantura Fleet GPS & Canvas Proof Downsampling (Screen 5)',
      caption: 'Live GNSS Haversine proximity radar with Screen Wake Lock and client-side canvas downsampling (< 500KB) for remote coastal uploads.',
      expectedPath: '/assets/gallery/saltdistribute-b2b-logistics/05_additional_features.png',
      imageUrl: '/assets/gallery/saltdistribute-b2b-logistics/05_additional_features.png'
    }
  ],
  'lewi-house-syariah-pms': [
    {
      id: 'lewi-1',
      title: 'Front Desk Room Occupancy Matrix (Screen 1)',
      caption: 'Real-time 17-room 4-floor status grid (Available, Occupied, Cleaning) with Edge-to-Edge Android insets.',
      expectedPath: '/assets/gallery/lewi-house-syariah-pms/01-room-grid-pms.png',
      imageUrl: '/assets/gallery/lewi-house-syariah-pms/01-room-grid-pms.png'
    },
    {
      id: 'lewi-2',
      title: 'Check-in & Syariah Verification Modal (Screen 2)',
      caption: 'KTP document verification, multi-OTA booking deep-link integration, and automated QRIS deposit generation.',
      expectedPath: '/assets/gallery/lewi-house-syariah-pms/02-ota-booking-modal.png',
      imageUrl: '/assets/gallery/lewi-house-syariah-pms/02-ota-booking-modal.png'
    },
    {
      id: 'lewi-3',
      title: 'Mobile Housekeeping & FCM Push Triggers (Screen 3)',
      caption: 'Attendant task assignment stepper, sub-120ms FCM push notifications on checkout, and bounded cursor-paginated chat.',
      expectedPath: '/assets/gallery/lewi-house-syariah-pms/03-tenant-chat-hub.png',
      imageUrl: '/assets/gallery/lewi-house-syariah-pms/03-tenant-chat-hub.png'
    }
  ],
  'jastip-cross-border': [
    {
      id: 'jastip-1',
      title: 'Traveler Trip Authentication & Vault Sync (Screen 1)',
      caption: 'Trip token BKK-NOV26 synchronization with offline credential vault and single-tap biometric access.',
      expectedPath: '/assets/gallery/jastip-cross-border/01_Login_Portal_Kredensial_dan_Akses_1_Tap.png',
      imageUrl: '/assets/gallery/jastip-cross-border/01_Login_Portal_Kredensial_dan_Akses_1_Tap.png'
    },
    {
      id: 'jastip-2',
      title: 'Active Sourcing Trip Cockpit (Screen 2)',
      caption: 'Real-time luggage weight gauge (23.4kg / 30kg) and THB/IDR live margin tracking with animated SVG status telemetry.',
      expectedPath: '/assets/gallery/jastip-cross-border/03_Beranda_Seksi_1_Hero_Trip_Aktif_dan_Kuota_Bagasi.png',
      imageUrl: '/assets/gallery/jastip-cross-border/03_Beranda_Seksi_1_Hero_Trip_Aktif_dan_Kuota_Bagasi.png'
    },
    {
      id: 'jastip-3',
      title: 'In-Store Purchase & Barcode Scanner Form (Screen 3)',
      caption: 'Fast item logging, retail store tags, foreign currency converter, and continuous HTML5 barcode scanner with haptic confirmation.',
      expectedPath: '/assets/gallery/jastip-cross-border/10_Belanja_Seksi_1_Pencarian_dan_Filter_Toko_Kategori.png',
      imageUrl: '/assets/gallery/jastip-cross-border/10_Belanja_Seksi_1_Pencarian_dan_Filter_Toko_Kategori.png'
    },
    {
      id: 'jastip-4',
      title: 'Traveler Profile & Luggage Tiers (Screen 4)',
      caption: 'Baggage limits, multi-currency balance ledgers, and automated payout account binding across THB/MYR/SGD/JPY.',
      expectedPath: '/assets/gallery/jastip-cross-border/27_Modal_Profil_Jastiper_dan_Status_Lisensi.png',
      imageUrl: '/assets/gallery/jastip-cross-border/27_Modal_Profil_Jastiper_dan_Status_Lisensi.png'
    },
    {
      id: 'jastip-5',
      title: 'Web Bluetooth 58mm Thermal Print Console (Screen 5)',
      caption: 'Direct browser Web Bluetooth connection to 58mm ESC/POS mini thermal printers with pre-rendered 384-dot label previews.',
      expectedPath: '/assets/gallery/jastip-cross-border/18_Kirim_Seksi_2_Daftar_Paket_dan_Aksi_Cetak_Thermal.png',
      imageUrl: '/assets/gallery/jastip-cross-border/18_Kirim_Seksi_2_Daftar_Paket_dan_Aksi_Cetak_Thermal.png'
    },
    {
      id: 'jastip-6',
      title: 'Cuan Analytics & FX Arbitrage Ledger (Screen 6)',
      caption: 'Real-time financial dashboard displaying gross sales, foreign currency expenditures, locked exchange margins, and Cuan Bersih.',
      expectedPath: '/assets/gallery/jastip-cross-border/21_Cuan_Seksi_1_Hero_Laba_Bersih_dan_Margin_Finansial.png',
      imageUrl: '/assets/gallery/jastip-cross-border/21_Cuan_Seksi_1_Hero_Laba_Bersih_dan_Margin_Finansial.png'
    }
  ],
  'pelatihku-pro-athletic-os': [
    {
      id: 'pelatih-1',
      title: 'Coach Authentication & NSCA Verification (Screen 1)',
      caption: 'High-contrast Pitch Obsidian OLED interface with NSCA credential verification and sub-1.8s quick biometric / 6-digit PIN login.',
      expectedPath: '/assets/gallery/pelatihku-pro-athletic-os/01_login.png',
      imageUrl: '/assets/gallery/pelatihku-pro-athletic-os/01_login.png'
    },
    {
      id: 'pelatih-2',
      title: 'Athlete Readiness Telemetry & HRV Monitor (Screen 2)',
      caption: 'Heart Rate Variability (78ms), resting heart rate, and central nervous system (CNS) fatigue telemetry on gym floors.',
      expectedPath: '/assets/gallery/pelatihku-pro-athletic-os/02_dashboard.png',
      imageUrl: '/assets/gallery/pelatihku-pro-athletic-os/02_dashboard.png'
    },
    {
      id: 'pelatih-3',
      title: 'Rapid Workout Builder & 52dp RPE Stepper (Screen 3)',
      caption: 'One-handed gym-floor logging (< 45s rest interval) with oversized 52dp numeric steppers for sweaty hands and velocity %1RM math.',
      expectedPath: '/assets/gallery/pelatihku-pro-athletic-os/03_form.png',
      imageUrl: '/assets/gallery/pelatihku-pro-athletic-os/03_form.png'
    },
    {
      id: 'pelatih-4',
      title: 'Coach Profile & Hypertrophy Periodization (Screen 4)',
      caption: 'CSCS certification master profile, multi-week volume load curves, and active meso-cycle periodization tracking.',
      expectedPath: '/assets/gallery/pelatihku-pro-athletic-os/04_profile.png',
      imageUrl: '/assets/gallery/pelatihku-pro-athletic-os/04_profile.png'
    },
    {
      id: 'pelatih-5',
      title: 'Sports Science 1RM Formula Engine (Screen 5)',
      caption: 'Client-side deterministic calculation matrix comparing Brzycki, Epley, and Lombardi formulas for instant Personal Record verification.',
      expectedPath: '/assets/gallery/pelatihku-pro-athletic-os/05_additional_features.png',
      imageUrl: '/assets/gallery/pelatihku-pro-athletic-os/05_additional_features.png'
    },
    {
      id: 'pelatih-6',
      title: 'Member 360 Biometrics & Body Composition (Screen 6)',
      caption: 'Body fat %, visceral fat rating, lean muscle mass progress curves, and multi-angle physique documentation records.',
      expectedPath: '/assets/gallery/pelatihku-pro-athletic-os/06_Member_Detail_Profil_Dan_Biometrik.png',
      imageUrl: '/assets/gallery/pelatihku-pro-athletic-os/06_Member_Detail_Profil_Dan_Biometrik.png'
    },
    {
      id: 'pelatih-7',
      title: 'Movement Screening & PAR-Q Medical Restrictions (Screen 7)',
      caption: 'Injury prevention guardrails and structured PAR-Q screening flags that persist across all subsequent compound barbell sessions.',
      expectedPath: '/assets/gallery/pelatihku-pro-athletic-os/11_Member_Detail_Movement_Screening_Dan_Medis.png',
      imageUrl: '/assets/gallery/pelatihku-pro-athletic-os/11_Member_Detail_Movement_Screening_Dan_Medis.png'
    }
  ],
  'putri-garmenthub-erp': [
    {
      id: 'putri-1',
      title: 'Factory Operator Sign-In & Plant Authorization (Screen 1)',
      caption: 'Departmental single sign-on and shift supervisor PIN access with offline-first localStorage hydration.',
      expectedPath: '/assets/gallery/putri-garmenthub-erp/01_login.png',
      imageUrl: '/assets/gallery/putri-garmenthub-erp/01_login.png'
    },
    {
      id: 'putri-2',
      title: 'Master Production Telemetry & Active Volume (Screen 2)',
      caption: '14,850 dozens active volume, cutting table velocity, and fabric roll inventory across 3-step SPK progression.',
      expectedPath: '/assets/gallery/putri-garmenthub-erp/02_dashboard.png',
      imageUrl: '/assets/gallery/putri-garmenthub-erp/02_dashboard.png'
    },
    {
      id: 'putri-3',
      title: 'SPK Cutting & Order Entry Form (Screen 3)',
      caption: 'Lot tracking, wholesale Dozen (1 Lusin = 12 pcs) fractional math, spreading length calculation, and seamstress assignment.',
      expectedPath: '/assets/gallery/putri-garmenthub-erp/03_form.png',
      imageUrl: '/assets/gallery/putri-garmenthub-erp/03_form.png'
    },
    {
      id: 'putri-4',
      title: 'Plant Director Profile & Permission Matrix (Screen 4)',
      caption: 'Full factory authority, digital sign-off, and segregated Kas Profit visibility restricted exclusively to owner roles.',
      expectedPath: '/assets/gallery/putri-garmenthub-erp/04_profile.png',
      imageUrl: '/assets/gallery/putri-garmenthub-erp/04_profile.png'
    },
    {
      id: 'putri-5',
      title: 'Dynamic Wholesale Pricing & QC Defect Engine (Screen 5)',
      caption: 'Tiered volume discounts (Lusin / Kodi / Container), BS Fatal vs BS Repair penalty deduction, and 70/30 investor profit splits.',
      expectedPath: '/assets/gallery/putri-garmenthub-erp/05_additional_features.png',
      imageUrl: '/assets/gallery/putri-garmenthub-erp/05_additional_features.png'
    }
  ],
  'dlab-night-match': [
    {
      id: 'dlab-1',
      title: 'VIP Privé Concierge Login & 18+ Age Gate (Screen 1)',
      caption: 'Gold-on-obsidian biometric access to private luxury formulation vault with high-contrast typography rhythm.',
      expectedPath: '/assets/gallery/dlab-night-match/01_Age_Verification_Gateway.png',
      imageUrl: '/assets/gallery/dlab-night-match/01_Age_Verification_Gateway.png'
    },
    {
      id: 'dlab-2',
      title: 'Olfactory Catalog & 10-Second Assessment (Screen 2)',
      caption: '93 bespoke Extrait de Parfum formulations with note compatibility scores and 60fps NUL-delimited pre-computed search.',
      expectedPath: '/assets/gallery/dlab-night-match/02_Storefront_Hero_and_Direct_Assessment_Quiz.png',
      imageUrl: '/assets/gallery/dlab-night-match/02_Storefront_Hero_and_Direct_Assessment_Quiz.png'
    },
    {
      id: 'dlab-3',
      title: 'Bespoke Diagnostic Formulation Customizer (Screen 3)',
      caption: 'Sillage projection slider, 35% concentration selector, and custom bottle gold-leaf monogramming preview (+$20).',
      expectedPath: '/assets/gallery/dlab-night-match/09_Night_Match_Diagnostic_Finder_Questions.png',
      imageUrl: '/assets/gallery/dlab-night-match/09_Night_Match_Diagnostic_Finder_Questions.png'
    },
    {
      id: 'dlab-4',
      title: 'Olfactory Persona Profile & Scent Archive (Screen 4)',
      caption: 'Scent DNA preference mapping (Oud, Iris Absolu, Ambergris) & bespoke formulation purchase history.',
      expectedPath: '/assets/gallery/dlab-night-match/11_Olfactory_Archive_Index.png',
      imageUrl: '/assets/gallery/dlab-night-match/11_Olfactory_Archive_Index.png'
    },
    {
      id: 'dlab-5',
      title: 'Interactive Olfactory Match Telemetry (Screen 5)',
      caption: 'Algorithmic scent matching results delivering >=90% in-stock match confidence with zero layout shift.',
      expectedPath: '/assets/gallery/dlab-night-match/10_Night_Match_Diagnostic_Finder_Result.png',
      imageUrl: '/assets/gallery/dlab-night-match/10_Night_Match_Diagnostic_Finder_Result.png'
    },
    {
      id: 'dlab-6',
      title: 'Commissioned Concierge WhatsApp Checkout (Screen 6)',
      caption: 'Structured multi-item invoice with free shipping threshold calculation and public-create / admin-read Firestore rules.',
      expectedPath: '/assets/gallery/dlab-night-match/19_Modal_Discreet_WhatsApp_Checkout.png',
      imageUrl: '/assets/gallery/dlab-night-match/19_Modal_Discreet_WhatsApp_Checkout.png'
    }
  ],
  'ioi-acidchem-she-platform': [
    {
      id: 'ioi-she-1',
      title: 'Microsoft Entra ID Corporate Login & Azure MFA (Screen 1)',
      caption: 'Enterprise single sign-on gateway with plant facility scope (Penang Acidchem vs Johor Pan-Century) and IOIP-04 compliance notice.',
      expectedPath: '/assets/gallery/ioi-acidchem-she-platform/01_login.png',
      imageUrl: '/assets/gallery/ioi-acidchem-she-platform/01_login.png'
    },
    {
      id: 'ioi-she-2',
      title: 'Plantation & Plant Operations Command Center (Screen 2)',
      caption: '361 migrated Domino forms, 7,878 Canvas screens, 482 Safe Work Days, and Single MainDB SharePoint partitioned architecture ($960K/yr saved).',
      expectedPath: '/assets/gallery/ioi-acidchem-she-platform/02_dashboard.png',
      imageUrl: '/assets/gallery/ioi-acidchem-she-platform/02_dashboard.png'
    },
    {
      id: 'ioi-she-3',
      title: 'CapEx Multi-Tier Requisition Form (Screen 3)',
      caption: 'Turbine overhaul CapEx intake wizard with cascading category dropdowns, severity matrix, and digital signature boxes.',
      expectedPath: '/assets/gallery/ioi-acidchem-she-platform/03_form.png',
      imageUrl: '/assets/gallery/ioi-acidchem-she-platform/03_form.png'
    },
    {
      id: 'ioi-she-4',
      title: 'Group Executive Director Profile & Delegations (Screen 4)',
      caption: 'Board approval delegations, Dataverse roles, and PKI digital signature audit logs with cryptographic SHA-256 seals.',
      expectedPath: '/assets/gallery/ioi-acidchem-she-platform/04_profile.png',
      imageUrl: '/assets/gallery/ioi-acidchem-she-platform/04_profile.png'
    },
    {
      id: 'ioi-she-5',
      title: 'Domino DXL to Canvas YAML AST Compiler (Screen 5)',
      caption: 'Automated Python AST toolchain (_validate_pa.py) converting legacy Lotus Domino DXL formulas into modern Power Apps Canvas YAML.',
      expectedPath: '/assets/gallery/ioi-acidchem-she-platform/05_additional_features.png',
      imageUrl: '/assets/gallery/ioi-acidchem-she-platform/05_additional_features.png'
    }
  ],
  'webcamoid-video-engine': [
    {
      id: 'cam-1',
      title: 'Studio Overview & Multi-Source Main Workspace (Screen 1)',
      caption: 'High-performance video studio console in C++20 and Qt 6 supporting 68 languages and multi-camera inputs.',
      expectedPath: '/assets/gallery/webcamoid-video-engine/01_Webcamoid_Studio_Overview_Main_Workspace.png',
      imageUrl: '/assets/gallery/webcamoid-video-engine/01_Webcamoid_Studio_Overview_Main_Workspace.png'
    },
    {
      id: 'cam-2',
      title: 'Zone A Hardware Telemetry & Audio Monitor (Screen 2)',
      caption: 'Real-time GPU shader load profiling, frame buffer latency (< 30ms glass-to-glass), and multichannel ASIO audio monitor.',
      expectedPath: '/assets/gallery/webcamoid-video-engine/02_Zone_A_Global_Header_and_Hardware_Telemetry_Strip.png',
      imageUrl: '/assets/gallery/webcamoid-video-engine/02_Zone_A_Global_Header_and_Hardware_Telemetry_Strip.png'
    },
    {
      id: 'cam-3',
      title: 'Zone B 4K 60FPS Camera Viewfinder & Canvas (Screen 3)',
      caption: 'Hardware-accelerated NV12 viewfinder workspace featuring Rule of Thirds framing grids, crosshairs, and sensor bypass inspection.',
      expectedPath: '/assets/gallery/webcamoid-video-engine/03_Zone_B_Camera_Viewfinder_and_Canvas_Workspace.png',
      imageUrl: '/assets/gallery/webcamoid-video-engine/03_Zone_B_Camera_Viewfinder_and_Canvas_Workspace.png'
    },
    {
      id: 'cam-4',
      title: 'Zone C Studio Parameter Control Dock & LUT Color Stack (Screen 4)',
      caption: 'Chained OpenGL FBO fragment shaders for exposure, color grading LUTs, convolutions, and AI facial tracking.',
      expectedPath: '/assets/gallery/webcamoid-video-engine/06_Zone_C_Studio_Parameter_Control_Dock.png',
      imageUrl: '/assets/gallery/webcamoid-video-engine/06_Zone_C_Studio_Parameter_Control_Dock.png'
    },
    {
      id: 'cam-5',
      title: 'Zone D Master Broadcast, RTMP Dispatcher & Disk Recorder (Screen 5)',
      caption: 'Multi-destination streaming encoder simulcasting to YouTube, Twitch, Kick, and zero-dependency local LAN HTTP endpoints.',
      expectedPath: '/assets/gallery/webcamoid-video-engine/10_Zone_D_Master_Broadcast_and_Pipeline_Deck.png',
      imageUrl: '/assets/gallery/webcamoid-video-engine/10_Zone_D_Master_Broadcast_and_Pipeline_Deck.png'
    },
    {
      id: 'cam-6',
      title: 'Zone D Virtual Camera Driver Emulation Active (Screen 6)',
      caption: 'Virtual video driver emulation exposing enhanced feeds seamlessly to third-party clients (Zoom, Teams, OBS, Discord).',
      expectedPath: '/assets/gallery/webcamoid-video-engine/12_Zone_D_Virtual_Camera_Broadcasting_Active.png',
      imageUrl: '/assets/gallery/webcamoid-video-engine/12_Zone_D_Virtual_Camera_Broadcasting_Active.png'
    }
  ],
  'barbershop-power-code-app': [
    {
      id: 'barber-1',
      title: 'Stylist Quick-Access PIN Login (Screen 1)',
      caption: 'Station selector (Chair #3) and quick 4-digit PIN authentication for fast front-desk and stylist station switching.',
      expectedPath: '/assets/gallery/barbershop-power-code-app/01_login.png',
      imageUrl: '/assets/gallery/barbershop-power-code-app/01_login.png'
    },
    {
      id: 'barber-2',
      title: 'Salon Operations & Queue Cockpit (Screen 2)',
      caption: 'Automated 10-minute grace auto-shift queue engine with 60-second transactional undo window across 5 chairs.',
      expectedPath: '/assets/gallery/barbershop-power-code-app/02_dashboard.png',
      imageUrl: '/assets/gallery/barbershop-power-code-app/02_dashboard.png'
    },
    {
      id: 'barber-3',
      title: 'Booking & Service Treatment Form (Screen 3)',
      caption: 'Deluxe haircut packages, automated backbar consumable recipe deduction (blades, gel), and cashier checkout.',
      expectedPath: '/assets/gallery/barbershop-power-code-app/03_form.png',
      imageUrl: '/assets/gallery/barbershop-power-code-app/03_form.png'
    },
    {
      id: 'barber-4',
      title: 'Master Barber Profile & Commission Ledger (Screen 4)',
      caption: 'Multi-tier service vs retail commission accounting (Junior, Senior, Master) with daily tip pool tracking.',
      expectedPath: '/assets/gallery/barbershop-power-code-app/04_profile.png',
      imageUrl: '/assets/gallery/barbershop-power-code-app/04_profile.png'
    },
    {
      id: 'barber-5',
      title: 'Cash Reconciliation & WhatsApp Cloud POS (Screen 5)',
      caption: 'Drawer cash balance reconciliation and automated paperless receipt dispatch via Meta WhatsApp Graph API v20.0.',
      expectedPath: '/assets/gallery/barbershop-power-code-app/05_additional_features.png',
      imageUrl: '/assets/gallery/barbershop-power-code-app/05_additional_features.png'
    }
  ],
  'altech-job-llm-suite': [
    {
      id: 'jobllm-1',
      title: 'Candidate Sign-In & GitHub OAuth Gateway (Screen 1)',
      caption: 'Academic AI researcher authentication and OAuth workspace gateway for Job-LLM / ResumeFlow.',
      expectedPath: '/assets/gallery/altech-job-llm-suite/01_login.png',
      imageUrl: '/assets/gallery/altech-job-llm-suite/01_login.png'
    },
    {
      id: 'jobllm-2',
      title: 'Application Pipeline & 94.8% ATS Match (Screen 2)',
      caption: 'Real-time ATS scoring, cosine embedding similarity telemetry, and active interview status pipeline.',
      expectedPath: '/assets/gallery/altech-job-llm-suite/02_dashboard.png',
      imageUrl: '/assets/gallery/altech-job-llm-suite/02_dashboard.png'
    },
    {
      id: 'jobllm-3',
      title: 'Job Description Ingestion & Latent Skill Extraction (Screen 3)',
      caption: 'Dual-strategy web scraping (Firecrawl / Jina Reader) extracting role requirements with Pydantic JSON validation.',
      expectedPath: '/assets/gallery/altech-job-llm-suite/03_form.png',
      imageUrl: '/assets/gallery/altech-job-llm-suite/03_form.png'
    },
    {
      id: 'jobllm-4',
      title: 'Engineering Candidate Master Profile (Screen 4)',
      caption: 'Automated Notion CV ingestion, Google XYZ bullet repository, and collision-free Jinja2 LaTeX compilation.',
      expectedPath: '/assets/gallery/altech-job-llm-suite/04_profile.png',
      imageUrl: '/assets/gallery/altech-job-llm-suite/04_profile.png'
    },
    {
      id: 'jobllm-5',
      title: 'Semantic Vector Gap Analysis (Screen 5)',
      caption: 'Cosine similarity matrix highlighting missing keywords and injected metrics (ACM Paper doi:10.1145/3626772.3657680).',
      expectedPath: '/assets/gallery/altech-job-llm-suite/05_additional_features.png',
      imageUrl: '/assets/gallery/altech-job-llm-suite/05_additional_features.png'
    }
  ],
  'warung-dewasa-pwa': [
    {
      id: 'warung-1',
      title: 'Discreet Passwordless Magic Link Login (Screen 1)',
      caption: 'Zero-behavioral-tracking magic link OTP login ensuring 100% privacy for sensitive wellness procurement.',
      expectedPath: '/assets/gallery/warung-dewasa-pwa/01_login.png',
      imageUrl: '/assets/gallery/warung-dewasa-pwa/01_login.png'
    },
    {
      id: 'warung-2',
      title: 'Curated 167-SKU Showcase & Sub-1.1s LCP (Screen 2)',
      caption: 'High-density 1:1 catalog grid with progressive 16-SKU batching and requestIdleCallback-deferred 30fps Three.js background.',
      expectedPath: '/assets/gallery/warung-dewasa-pwa/02_dashboard.png',
      imageUrl: '/assets/gallery/warung-dewasa-pwa/02_dashboard.png'
    },
    {
      id: 'warung-3',
      title: 'Express One-Step COD Checkout & Packaging Toggle (Screen 3)',
      caption: 'Discreet plain-cardboard packaging toggle, OpenStreetMap Nominatim reverse geocoding, and QRIS instant payment.',
      expectedPath: '/assets/gallery/warung-dewasa-pwa/03_form.png',
      imageUrl: '/assets/gallery/warung-dewasa-pwa/03_form.png'
    },
    {
      id: 'warung-4',
      title: 'Customer Account & Privacy History (Screen 4)',
      caption: 'Encrypted order logs, masked phone numbers, and stealth courier tracking without sensitive product names.',
      expectedPath: '/assets/gallery/warung-dewasa-pwa/04_profile.png',
      imageUrl: '/assets/gallery/warung-dewasa-pwa/04_profile.png'
    },
    {
      id: 'warung-5',
      title: 'Offline Service Worker & Edge Cart Caching (Screen 5)',
      caption: '4-tier Workbox Service Worker caching guaranteeing complete offline storefront browsing and cart persistence.',
      expectedPath: '/assets/gallery/warung-dewasa-pwa/05_additional_features.png',
      imageUrl: '/assets/gallery/warung-dewasa-pwa/05_additional_features.png'
    }
  ],
  'ats-flow-resume': [
    {
      id: 'ats-flow-1',
      title: '8-Tab Split-Pane Visual Resume Editor',
      caption: 'Real-time JSON resume state editing with 300ms debounced sandboxed <iframe srcDoc> compilation.',
      expectedPath: '/assets/gallery/ats-flow-resume/01-split-pane-editor.png',
      imageUrl: '/assets/gallery/ats-flow-resume/01-split-pane-editor.png'
    },
    {
      id: 'ats-flow-2',
      title: 'Anonymous Firestore Cloud Sync & Recruiter Share Link',
      caption: 'Opt-in public recruiter URL generation with zero-login security rules and 1-click cloud sync.',
      expectedPath: '/assets/gallery/ats-flow-resume/02-cloud-share-dialog.png',
      imageUrl: '/assets/gallery/ats-flow-resume/02-cloud-share-dialog.png'
    },
    {
      id: 'ats-flow-3',
      title: '1:1 Deterministic A4 PDF Service & Redis Telemetry',
      caption: 'Dockerized Puppeteer Core rendering matching exact print stylesheets with Upstash Redis telemetry.',
      expectedPath: '/assets/gallery/ats-flow-resume/03-deterministic-pdf.png',
      imageUrl: '/assets/gallery/ats-flow-resume/03-deterministic-pdf.png'
    }
  ],
  'resumeforge-nextjs': [
    {
      id: 'rf-1',
      title: 'Weighted Composite ATS Score Dashboard',
      caption: '40/30/20/10 scoring formula with abbreviation root resolution (K8s -> Kubernetes) and prominent keyword gauges.',
      expectedPath: '/assets/gallery/resumeforge-nextjs/01-ats-score-dashboard.png',
      imageUrl: '/assets/gallery/resumeforge-nextjs/01-ats-score-dashboard.png'
    },
    {
      id: 'rf-2',
      title: 'Granular Fact-Locked Diff Approval Cards',
      caption: 'Strict boundary locks on company names, titles, and dates during gpt-4o-mini keyword optimization.',
      expectedPath: '/assets/gallery/resumeforge-nextjs/02-fact-locked-diff.png',
      imageUrl: '/assets/gallery/resumeforge-nextjs/02-fact-locked-diff.png'
    },
    {
      id: 'rf-3',
      title: '3-Pane Live Editor & Deterministic Fallback Engine',
      caption: 'Client pdfjs-dist web worker text extraction with instant offline heuristic rewriter fallback.',
      expectedPath: '/assets/gallery/resumeforge-nextjs/03-three-pane-editor.png',
      imageUrl: '/assets/gallery/resumeforge-nextjs/03-three-pane-editor.png'
    }
  ],
  'altech-stitch-mcp': [
    {
      id: 'stitch-1',
      title: 'Google Stitch MCP Swiss Editorial Design System',
      caption: 'Programmatic Emerald & Obsidian palette tokens and typography rhythm compiled via Stitch MCP.',
      expectedPath: '/assets/gallery/altech-stitch-mcp/01-stitch-portfolio-grid.png',
      imageUrl: '/assets/gallery/altech-stitch-mcp/01-stitch-portfolio-grid.png'
    },
    {
      id: 'stitch-2',
      title: '15-Dossier Architectural Reader & Vector Topologies',
      caption: 'Dynamic marked.js Markdown parser with on-demand mermaid.run() vector topology diagram rendering.',
      expectedPath: '/assets/gallery/altech-stitch-mcp/02-stitch-audit-reader.png',
      imageUrl: '/assets/gallery/altech-stitch-mcp/02-stitch-audit-reader.png'
    },
    {
      id: 'stitch-3',
      title: 'Interactive Client Sandboxes & KPI Impact Strip',
      caption: 'Embedded deterministic client sandboxes for GarmentHub Cash Sharding and IOI 5×5 DOSH Risk Matrix.',
      expectedPath: '/assets/gallery/altech-stitch-mcp/03-stitch-sandbox-modal.png',
      imageUrl: '/assets/gallery/altech-stitch-mcp/03-stitch-sandbox-modal.png'
    }
  ],
  'fandy-geophysical-portfolio': [
    {
      id: 'fandy-1',
      title: 'Real-Time Least-Squares Wadati Vp/Vs QC Lab',
      caption: 'Interactive seismic outlier filtering with live ordinary least-squares slope and R² regression.',
      expectedPath: '/assets/gallery/fandy-geophysical-portfolio/01-wadati-regression-lab.png',
      imageUrl: '/assets/gallery/fandy-geophysical-portfolio/01-wadati-regression-lab.png'
    },
    {
      id: 'fandy-2',
      title: '3D JHD Hypocenter Relocation & Fault Vector Migration',
      caption: '89.5% RMS decay simulation with SVG fault plane vectors and 1,000+ microearthquake event catalog.',
      expectedPath: '/assets/gallery/fandy-geophysical-portfolio/02-jhd-fault-relocation.png',
      imageUrl: '/assets/gallery/fandy-geophysical-portfolio/02-jhd-fault-relocation.png'
    },
    {
      id: 'fandy-3',
      title: 'Res2Dinv Inversion Lab & Bilingual JSON Admin CMS',
      caption: '2D geoelectrical pseudosection contouring paired with zero-backend timestamped JSON export/restore.',
      expectedPath: '/assets/gallery/fandy-geophysical-portfolio/03-res2dinv-admin-cms.png',
      imageUrl: '/assets/gallery/fandy-geophysical-portfolio/03-res2dinv-admin-cms.png'
    }
  ],
  'al-resume-interview-prep': [
    {
      id: 'al-res-1',
      title: 'Guided 7-Step Hiring Manager Enterprise Walkthrough',
      caption: 'High-signal executive briefing deck with deterministic "Ask Ali" keyword intent router.',
      expectedPath: '/assets/gallery/al-resume-interview-prep/01-guided-interview-mode.png',
      imageUrl: '/assets/gallery/al-resume-interview-prep/01-guided-interview-mode.png'
    },
    {
      id: 'al-res-2',
      title: 'Editorial Multi-Persona Impact Dashboard',
      caption: '12-tile SVG metric grid and 30fps CPU-safe MatrixRain background with prefers-reduced-motion support.',
      expectedPath: '/assets/gallery/al-resume-interview-prep/02-persona-impact-dashboard.png',
      imageUrl: '/assets/gallery/al-resume-interview-prep/02-persona-impact-dashboard.png'
    },
    {
      id: 'al-res-3',
      title: 'Persona-Scoped 3-in-1 Resume & vCard Blob Exporter',
      caption: 'A4 print CSS, clean ASCII ATS plain-text, and RFC-2426 vCard 3.0 (.vcf) serializer.',
      expectedPath: '/assets/gallery/al-resume-interview-prep/03-ats-vcard-exporter.png',
      imageUrl: '/assets/gallery/al-resume-interview-prep/03-ats-vcard-exporter.png'
    }
  ],
  'pulsetrack': [
    {
      id: 'pulsetrack-screen-1',
      title: 'Live Floor Telemetry & Pod Matrix',
      caption: 'Real-time production floor headcount, time-in-state stopwatches, and spatial seat occupancy across ASEAN delivery pods.',
      imageUrl: '/assets/projects/pulsetrack/live-floor-telemetry.png',
      expectedPath: '/assets/projects/pulsetrack/live-floor-telemetry.png'
    },
    {
      id: 'pulsetrack-screen-2',
      title: 'Absence & Leave Intake Hub',
      caption: 'Standardized Microsoft Forms intake with digital MC validation and automated write-back to SharePoint Online.',
      imageUrl: '/assets/projects/pulsetrack/absence-leave-intake.png',
      expectedPath: '/assets/projects/pulsetrack/absence-leave-intake.png'
    },
    {
      id: 'pulsetrack-screen-3',
      title: 'Agent Self-Service Status Portal',
      caption: 'Desktop portal allowing associates to submit real-time schedule adjustments and sick notices without unauthorized messaging apps.',
      imageUrl: '/assets/projects/pulsetrack/agent-self-service-portal.png',
      expectedPath: '/assets/projects/pulsetrack/agent-self-service-portal.png'
    }
  ],
  'smartflow': [
    {
      id: 'smartflow-screen-1',
      title: 'Executive RAG Readiness Dashboard & Critical Path',
      caption: 'Real-time Red/Amber/Green departmental readiness matrix, T-minus milestone pacing, and active MercadoPay Global 10-agent scale progression.',
      imageUrl: '/assets/projects/smartflow/executive-rag-matrix.png',
      expectedPath: '/assets/projects/smartflow/executive-rag-matrix.png'
    },
    {
      id: 'smartflow-screen-2',
      title: 'Dynamic Intake Portal & Multi-Department Request Builder',
      caption: 'Guided 3-step structured configuration flow capturing headcount scaling, CEFR language requirements, shift differentials, and instant OPEX impact.',
      imageUrl: '/assets/projects/smartflow/dynamic-intake-portal.png',
      expectedPath: '/assets/projects/smartflow/dynamic-intake-portal.png'
    },
    {
      id: 'smartflow-screen-3',
      title: 'Departmental Execution Hub & Parallel Workbenches',
      caption: 'Parallel workbenches for Operations seating, Finance billing ledgers, Recruitment pipeline, and Training SME overload rebalancing.',
      imageUrl: '/assets/projects/smartflow/departmental-execution-hub.png',
      expectedPath: '/assets/projects/smartflow/departmental-execution-hub.png'
    },
    {
      id: 'smartflow-screen-4',
      title: 'Compliance Audit Trail & Microsoft Teams Telemetry',
      caption: 'Immutable SHA-256 transaction journal, Microsoft Graph webhook latency monitors (18ms), and interactive Teams bot escalation cards.',
      imageUrl: '/assets/projects/smartflow/compliance-audit-teams-log.png',
      expectedPath: '/assets/projects/smartflow/compliance-audit-teams-log.png'
    },
    {
      id: 'smartflow-screen-5',
      title: 'Dynamic Request Builder & Financial Impact Simulation',
      caption: 'Live calculation engine simulating monthly OPEX ($41,200), gross margin (+36.4%), hardware thin-client requirements, and workstation allocation.',
      imageUrl: '/assets/projects/smartflow/dynamic-intake-request-builder.png',
      expectedPath: '/assets/projects/smartflow/dynamic-intake-request-builder.png'
    }
  ],
  'document-finder': [
    {
      id: 'docfinder-screen-1',
      title: 'SOP Search & Intelligent Semantic Retrieval Engine',
      caption: 'Sub-50ms semantic query retrieval (98.4% match), token highlight blocks, and 1-tap direct action routing to Lark Chat and L3 escalation.',
      imageUrl: '/assets/projects/docfinder/01-sop-search-retrieval.png',
      expectedPath: '/assets/projects/docfinder/01-sop-search-retrieval.png'
    },
    {
      id: 'docfinder-screen-2',
      title: 'Policy Library & Comparative Split-Diff Engine',
      caption: 'Synchronized dual-pane split diff with line-by-line gutter numbering, CR governance tagging (CR-2025-0891), and redline compliance audit export.',
      imageUrl: '/assets/projects/docfinder/02-policy-library-diff.png',
      expectedPath: '/assets/projects/docfinder/02-policy-library-diff.png'
    },
    {
      id: 'docfinder-screen-3',
      title: 'Frictionless Delivery & Grounded Action Dispatch',
      caption: 'Real-time clause citation extraction with direct Lark Chat push, deep-linked Lark Base SOP navigation, and legal attribution.',
      imageUrl: '/assets/projects/docfinder/03-frictionless-lark-dispatch.png',
      expectedPath: '/assets/projects/docfinder/03-frictionless-lark-dispatch.png'
    }
  ],
  'docfinder': [
    {
      id: 'docfinder-screen-1',
      title: 'SOP Search & Intelligent Semantic Retrieval Engine',
      caption: 'Sub-50ms semantic query retrieval (98.4% match), token highlight blocks, and 1-tap direct action routing to Lark Chat and L3 escalation.',
      imageUrl: '/assets/projects/docfinder/01-sop-search-retrieval.png',
      expectedPath: '/assets/projects/docfinder/01-sop-search-retrieval.png'
    },
    {
      id: 'docfinder-screen-2',
      title: 'Policy Library & Comparative Split-Diff Engine',
      caption: 'Synchronized dual-pane split diff with line-by-line gutter numbering, CR governance tagging (CR-2025-0891), and redline compliance audit export.',
      imageUrl: '/assets/projects/docfinder/02-policy-library-diff.png',
      expectedPath: '/assets/projects/docfinder/02-policy-library-diff.png'
    },
    {
      id: 'docfinder-screen-3',
      title: 'Frictionless Delivery & Grounded Action Dispatch',
      caption: 'Real-time clause citation extraction with direct Lark Chat push, deep-linked Lark Base SOP navigation, and legal attribution.',
      imageUrl: '/assets/projects/docfinder/03-frictionless-lark-dispatch.png',
      expectedPath: '/assets/projects/docfinder/03-frictionless-lark-dispatch.png'
    }
  ],
  'tasek-cement-rebate': [
    {
      id: 'rebate-screen-1',
      title: 'Workspace Single Sign-On & Facility Context (Screen 1)',
      caption: 'Corporate authentication gateway with multi-plant facility selector, role-based security group validation, and active audit session initiation.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/01_login.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/01_login.png'
    },
    {
      id: 'rebate-screen-2',
      title: 'Rebate Operations Overview & Executive KPI Strip (Screen 2)',
      caption: 'Real-time operational dashboard tracking consignment cycle turnaround (15 min vs 3-day baseline), active approval pipelines, and statutory ceiling adherence.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/02_dashboard.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/02_dashboard.png'
    },
    {
      id: 'rebate-screen-3',
      title: 'Rebate Master Consignment Workspace (Screen 3)',
      caption: 'Consignment claim intake with customer master lookup, credit limits, volume tier parameters, and automated PO balance validation.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/03_form.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/03_form.png'
    },
    {
      id: 'rebate-screen-4',
      title: 'Financial Authority Limit & Approval Delegation Matrix (Screen 4)',
      caption: 'Hierarchical signature matrix matching corporate financial delegation rules (Sales Lead → Finance Reviewer → Group COO sign-off).',
      imageUrl: '/assets/gallery/tasek-cement-rebate/04_profile.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/04_profile.png'
    },
    {
      id: 'rebate-screen-5',
      title: 'Order-to-Rebate Reconciliation & ERP Validation (Screen 5)',
      caption: 'Automated purchase order cross-validation against SAP MM/SD and Oracle 19c staging tables without creating unauthorized ERP commitments.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/05_additional_features.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/05_additional_features.png'
    },
    {
      id: 'rebate-screen-6',
      title: '7-Component Calculation Engine & Hard Cap Ceiling (Screen 6)',
      caption: 'Deterministic calculation engine: Base Rate + Volume Tier + Distance + Special Terms + Seasonal Adj + Tax - Credit Deductions with hard statutory RM 0.20/t ceiling.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/06_calculator.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/06_calculator.png'
    },
    {
      id: 'rebate-screen-7',
      title: 'Multi-Tier Review & Triage Queue (Screen 7)',
      caption: 'Priority-sorted pending approval queue with SLA timers, consignment metric summaries, and automated escalation notifications.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/07_approval_queue.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/07_approval_queue.png'
    },
    {
      id: 'rebate-screen-8',
      title: 'Approval Result Dossier & Cryptographic Audit Seal (Screen 8)',
      caption: 'Dual-authorization sign-off screen capturing immutable SHA-256 digital signature hashes and timestamped Dataverse audit records.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/08_approval_detail.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/08_approval_detail.png'
    },
    {
      id: 'rebate-screen-9',
      title: 'Oracle ERP Staging Sync & Exception Telemetry (Screen 9)',
      caption: 'Real-time read-only OData bridge telemetry synchronizing rebate approval records into Oracle 19c financial staging tables with error containment.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/09_sync_exceptions.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/09_sync_exceptions.png'
    },
    {
      id: 'rebate-screen-10',
      title: 'Rebate Reporting, Lineage & Compliance Ledger (Screen 10)',
      caption: 'GxP and ISO compliant financial audit reports, historical consignment trend analysis, and one-click regulatory evidence export.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/10_reporting.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/10_reporting.png'
    }
  ],
  'e_rebate': [
    {
      id: 'rebate-screen-1',
      title: 'Workspace Single Sign-On & Facility Context (Screen 1)',
      caption: 'Corporate authentication gateway with multi-plant facility selector, role-based security group validation, and active audit session initiation.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/01_login.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/01_login.png'
    },
    {
      id: 'rebate-screen-2',
      title: 'Rebate Operations Overview & Executive KPI Strip (Screen 2)',
      caption: 'Real-time operational dashboard tracking consignment cycle turnaround (15 min vs 3-day baseline), active approval pipelines, and statutory ceiling adherence.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/02_dashboard.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/02_dashboard.png'
    },
    {
      id: 'rebate-screen-3',
      title: 'Rebate Master Consignment Workspace (Screen 3)',
      caption: 'Consignment claim intake with customer master lookup, credit limits, volume tier parameters, and automated PO balance validation.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/03_form.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/03_form.png'
    },
    {
      id: 'rebate-screen-4',
      title: 'Financial Authority Limit & Approval Delegation Matrix (Screen 4)',
      caption: 'Hierarchical signature matrix matching corporate financial delegation rules (Sales Lead → Finance Reviewer → Group COO sign-off).',
      imageUrl: '/assets/gallery/tasek-cement-rebate/04_profile.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/04_profile.png'
    },
    {
      id: 'rebate-screen-5',
      title: 'Order-to-Rebate Reconciliation & ERP Validation (Screen 5)',
      caption: 'Automated purchase order cross-validation against SAP MM/SD and Oracle 19c staging tables without creating unauthorized ERP commitments.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/05_additional_features.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/05_additional_features.png'
    },
    {
      id: 'rebate-screen-6',
      title: '7-Component Calculation Engine & Hard Cap Ceiling (Screen 6)',
      caption: 'Deterministic calculation engine: Base Rate + Volume Tier + Distance + Special Terms + Seasonal Adj + Tax - Credit Deductions with hard statutory RM 0.20/t ceiling.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/06_calculator.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/06_calculator.png'
    },
    {
      id: 'rebate-screen-7',
      title: 'Multi-Tier Review & Triage Queue (Screen 7)',
      caption: 'Priority-sorted pending approval queue with SLA timers, consignment metric summaries, and automated escalation notifications.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/07_approval_queue.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/07_approval_queue.png'
    },
    {
      id: 'rebate-screen-8',
      title: 'Approval Result Dossier & Cryptographic Audit Seal (Screen 8)',
      caption: 'Dual-authorization sign-off screen capturing immutable SHA-256 digital signature hashes and timestamped Dataverse audit records.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/08_approval_detail.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/08_approval_detail.png'
    },
    {
      id: 'rebate-screen-9',
      title: 'Oracle ERP Staging Sync & Exception Telemetry (Screen 9)',
      caption: 'Real-time read-only OData bridge telemetry synchronizing rebate approval records into Oracle 19c financial staging tables with error containment.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/09_sync_exceptions.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/09_sync_exceptions.png'
    },
    {
      id: 'rebate-screen-10',
      title: 'Rebate Reporting, Lineage & Compliance Ledger (Screen 10)',
      caption: 'GxP and ISO compliant financial audit reports, historical consignment trend analysis, and one-click regulatory evidence export.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/10_reporting.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/10_reporting.png'
    }
  ],
  'rebate': [
    {
      id: 'rebate-screen-1',
      title: 'Workspace Single Sign-On & Facility Context (Screen 1)',
      caption: 'Corporate authentication gateway with multi-plant facility selector, role-based security group validation, and active audit session initiation.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/01_login.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/01_login.png'
    },
    {
      id: 'rebate-screen-2',
      title: 'Rebate Operations Overview & Executive KPI Strip (Screen 2)',
      caption: 'Real-time operational dashboard tracking consignment cycle turnaround (15 min vs 3-day baseline), active approval pipelines, and statutory ceiling adherence.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/02_dashboard.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/02_dashboard.png'
    },
    {
      id: 'rebate-screen-3',
      title: 'Rebate Master Consignment Workspace (Screen 3)',
      caption: 'Consignment claim intake with customer master lookup, credit limits, volume tier parameters, and automated PO balance validation.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/03_form.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/03_form.png'
    },
    {
      id: 'rebate-screen-4',
      title: 'Financial Authority Limit & Approval Delegation Matrix (Screen 4)',
      caption: 'Hierarchical signature matrix matching corporate financial delegation rules (Sales Lead → Finance Reviewer → Group COO sign-off).',
      imageUrl: '/assets/gallery/tasek-cement-rebate/04_profile.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/04_profile.png'
    },
    {
      id: 'rebate-screen-5',
      title: 'Order-to-Rebate Reconciliation & ERP Validation (Screen 5)',
      caption: 'Automated purchase order cross-validation against SAP MM/SD and Oracle 19c staging tables without creating unauthorized ERP commitments.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/05_additional_features.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/05_additional_features.png'
    },
    {
      id: 'rebate-screen-6',
      title: '7-Component Calculation Engine & Hard Cap Ceiling (Screen 6)',
      caption: 'Deterministic calculation engine: Base Rate + Volume Tier + Distance + Special Terms + Seasonal Adj + Tax - Credit Deductions with hard statutory RM 0.20/t ceiling.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/06_calculator.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/06_calculator.png'
    },
    {
      id: 'rebate-screen-7',
      title: 'Multi-Tier Review & Triage Queue (Screen 7)',
      caption: 'Priority-sorted pending approval queue with SLA timers, consignment metric summaries, and automated escalation notifications.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/07_approval_queue.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/07_approval_queue.png'
    },
    {
      id: 'rebate-screen-8',
      title: 'Approval Result Dossier & Cryptographic Audit Seal (Screen 8)',
      caption: 'Dual-authorization sign-off screen capturing immutable SHA-256 digital signature hashes and timestamped Dataverse audit records.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/08_approval_detail.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/08_approval_detail.png'
    },
    {
      id: 'rebate-screen-9',
      title: 'Oracle ERP Staging Sync & Exception Telemetry (Screen 9)',
      caption: 'Real-time read-only OData bridge telemetry synchronizing rebate approval records into Oracle 19c financial staging tables with error containment.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/09_sync_exceptions.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/09_sync_exceptions.png'
    },
    {
      id: 'rebate-screen-10',
      title: 'Rebate Reporting, Lineage & Compliance Ledger (Screen 10)',
      caption: 'GxP and ISO compliant financial audit reports, historical consignment trend analysis, and one-click regulatory evidence export.',
      imageUrl: '/assets/gallery/tasek-cement-rebate/10_reporting.png',
      expectedPath: '/assets/gallery/tasek-cement-rebate/10_reporting.png'
    }
  ]
};

/**
 * Generates a complete gallery for any ProjectItem or MigrationSlice.
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
