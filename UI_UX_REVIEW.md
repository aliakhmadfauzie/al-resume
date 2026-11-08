# Portfolio UI and UX review

Reviewed: 8 November 2026. Framework: UI UX Designer, Nielsen heuristics, and accessibility checks against source.

## Implementation follow-up — 8 November 2026

The original findings below are retained as the review snapshot. The following changes have now been implemented locally:

- Replaced both non-delivering forms with shared email, clipboard, phone, LinkedIn, and WhatsApp actions. The interface explains that the visitor reviews and sends the email in their email app; it no longer claims delivery.
- Simplified navigation to four primary destinations, a More group, and Contact. Added addressable views, case studies, simulator selection, and resume links, with browser history support and page titles.
- Reworked the homepage around a concise value statement, two existing leadership metrics, three projects, a career summary, selected credentials, and contact. The architecture panel loads on request; full detail remains in dedicated views.
- Added keyboard-operable case-study links, native dialogs with contained focus, Escape handling, background scroll locking, and focus restoration. Gallery lightboxes use the same dialog implementation, including nested Escape behavior.
- Connected the motion preference to the ambient background and WebGL loop, persisted the user setting, and subscribed to device preference changes. Pointer tracking now updates the spotlight directly and stops scheduling frames when idle.
- Improved orange-button text contrast, reading sizes, filter selection semantics, search labeling, touch controls, mobile dialog layout, resume download, copied-link feedback, and print layout. Visitor galleries no longer expose editing controls.
- Fixed the existing award verification URL type and Vite environment type errors.

Verification: TypeScript check and production build passed. The build retains a harmless warning about an empty `three-vendor` chunk in the existing build configuration. Twelve browser scenario groups passed in Chromium against the dedicated local preview at `http://127.0.0.1:4317`, including all seven views at 1440px and 375px, header/contact layouts at 320–1280px, keyboard and nested-dialog behavior, refresh/history, actual PDF download, live reduced-motion changes, paused WebGL drawing, resume printing, expanded architecture, and a 200% root-text-size overflow check. The browser run recorded no application runtime errors or failed HTTP responses. The text-size check is not a substitute for testing every browser's zoom implementation.

Remaining recommendations: verify the published career metrics and credential claims against their supporting evidence, test with Safari and assistive technology, and ask target recruiters to assess the first-screen message and selected projects. Contact currently uses the visitor's email app; a future hosted inquiry form requires a real delivery service and end-to-end receipt testing. No production deployment was performed.

## Verdict and evidence boundary

The portfolio has a coherent visual direction and substantial evidence of experience, but its current contact flow and interaction accessibility need correction before relying on it to generate recruiter or client inquiries.

This is a source-based review of the current working copy, including its existing uncommitted changes. It covers the seven main views, navigation, footer, project gallery, ambient background, and contact, resume, and project dialogs. No application files were changed during this review.

Vite started successfully at localhost:3000. The in-app browser timed out twice, and the separate browser launch failed before loading the page. Consequently, rendered desktop/mobile layout, actual clipping, visual balance, screen reader behavior, focus traversal, performance, and print output remain unverified. Design judgments below are based on component structure, text, styles, and event handlers, not observed screenshots or user testing. No numeric usability score is assigned without that evidence.

## Scorecard

| Area | Assessment | Basis |
| --- | --- | --- |
| Visual identity | Promising foundation | Shared copper/obsidian colors, typography tokens, consistent cards and focus styling. Rendered appearance remains unverified. |
| Primary action | Clear | “View My Work” directly opens Projects. Resume and contact are available from multiple locations. |
| Information hierarchy | Needs simplification | Nine primary navigation entries; long homepage repeats dedicated views; extensive small labels and technical terminology. |
| Contact conversion | Critical defect | Both contact forms display success without transmitting or persisting the inquiry. |
| Keyboard and dialog accessibility | Major gaps | Clickable project containers are not keyboard controls; contact/project dialogs lack semantics and focus management. |
| Motion control | Major defect | Pause state is not consumed by the active background; reduced-motion is hardcoded off. |
| Responsive usability | Unverified, with source risks | Desktop navigation begins at 1024px while keeping all nine links, identity, and CTA in one fixed-height row. |
| Recovery and feedback | Mixed | Project empty state includes Reset all filters; clipboard/upload failures lack user-facing recovery. |

## Prioritized issues

Effort is relative implementation scope, not a delivery estimate: small = localized change; medium = shared behavior or several components.

| ID | Severity / effort | Finding and user impact | Evidence | Recommended change |
| --- | --- | --- | --- | --- |
| 1 | Critical / medium | **Contact forms falsely confirm delivery.** A visitor can submit an inquiry and reasonably expect a reply, but the message goes nowhere. The homepage additionally promises a 4–12 hour response. Heuristic: visibility of system status and error prevention. | `src/components/modals/ContactModal.tsx:29` only sets submitted state and triggers confetti; success text starts at line 92. `src/components/views/HomeView.tsx:72` does the same; line 1625 displays “Message Dispatched.” | Connect both forms to one working delivery path. Show success only after confirmed acceptance; preserve input and offer retry on failure. Until delivery exists, replace submission with a clearly labeled email action. |
| 2 | Major / medium | **Project details cannot be opened from their cards using the keyboard.** Main card actions are attached to plain divs with no focusability or keyboard activation. Heuristic: flexibility and equal access. | `src/components/views/ProjectsView.tsx:257` and `:362`. | Provide a real link or button for each project title/details action, with visible focus. Keep the simulation action separate; avoid nesting interactive controls inside a button wrapping the whole card. |
| 3 | Major / medium | **Dialog behavior is incomplete and inconsistent.** Contact and project dialogs lack dialog roles/names, initial focus, focus containment, focus restoration, and Escape handling. Resume has dialog semantics and Escape, but no focus containment/restoration. Heuristic: user control and consistency. | `src/components/modals/ContactModal.tsx:60`; `src/components/modals/ProjectDetailModal.tsx:39`; `src/components/modals/ResumeModal.tsx:31` and `:56`. | Use one accessible dialog implementation. Move focus into the dialog, keep background controls unavailable, close the topmost dialog on Escape, restore the opener, and prevent background scrolling. Test nested gallery lightboxes too. |
| 4 | Major / medium | **The motion pause control promises behavior it does not implement.** The app changes its “Active/Paused” label but the background does not consume the prop. Reduced-motion is also disabled in the active component. The pause control is hidden below the small-screen breakpoint. Heuristic: user control and truthful status. | `src/App.tsx:92` passes `isMotionActive`; `src/components/canvas/VibrantAmbientBackground.tsx:5` declares no props and line 6 sets `shouldReduceMotion = false`; the WebGL mesh is always mounted. `src/App.tsx:145` hides the toggle on small screens. | Wire a shared motion preference through the pointer animation, ambient CSS effects, and WebGL loop. Respect the system preference, expose control on mobile, and make its label reflect actual running state. The reduced-motion check in the unused `WebGLBackground.tsx` does not protect the active background. |
| 5 | Major / medium | **Navigation and resume sharing do not preserve destinations.** Views live only in React state, so refresh resets to Home and browser history cannot represent view changes. “Copy link to resume” copies the current URL without opening the resume for the recipient. Heuristic: recognition and user control. | `src/App.tsx:37`; tab handlers throughout `src/components/Navbar.tsx`; `src/components/modals/ResumeModal.tsx:46`. | Add addressable routes or hash state for views, resume, and key case studies. Restore state from the address and support browser Back/Forward. Copy the actual resume URL. |
| 6 | Major / medium | **The homepage asks visitors to process too much before choosing a path.** The hero combines two career tracks, several metrics, seven tags, and an interactive code/telemetry panel. Later sections repeat skills, projects, credentials, honors, and contact content from other views. This risks slowing a recruiter’s scan. Heuristic: minimalist design and match with user goals. | `src/components/views/HomeView.tsx:123` onward; `src/components/ArchitectureMotionHero.tsx:459` onward; dedicated Skills, Experience, and Certifications views. | Keep the dual-track positioning, but lead with one plain-language value statement, two proof points, and two actions. Show three selected case studies and a short career summary; move exhaustive inventories behind clear links. Validate the intended emphasis with target recruiters rather than assuming one career track should disappear. |
| 7 | Major / small | **Selected project filters use low-contrast text.** White on the resolved orange background is approximately 2.80:1, below the 4.5:1 threshold for this small text. The hero already uses a better dark-on-orange combination. Heuristic: readability and consistency. | `src/components/views/ProjectsView.tsx:211` and `:322`; `src/index.css:147` aliases `--accent-blue` to `--interactive-primary`, which resolves to `#f97316`. | Use the existing dark text color `#090a0d` on orange (approximately 7.06:1) or choose a sufficiently dark orange for white text. Audit hover/pressed states too. Ratios were calculated from the source colors, not sampled from a screenshot. |
| 8 | Major / small | **Forms lack dependable accessible labels.** Homepage fields rely on placeholders; modal labels have no `htmlFor`/input ID association. Project search also relies on a placeholder. Heuristic: recognition and error prevention. | `src/components/views/HomeView.tsx:1645`; `src/components/modals/ContactModal.tsx:147`; `src/components/views/ProjectsView.tsx:334`. | Add persistent visible labels linked to input IDs, useful autocomplete values, and associated validation feedback. Keep placeholders for examples. Use the labeled certification search as a local consistency reference. |
| 9 | Moderate / small–medium | **The primary navigation is dense and mixes page navigation with in-page jumps.** Nine destinations compete with identity and contact. About/Services use delayed scrolling, but Home remains the active item. The 1024px desktop breakpoint may expose a row that needs more space than available; clipping is not browser-confirmed. Heuristic: consistency and recognition. | `src/components/Navbar.tsx:25` defines nine entries; line 80 starts the desktop row. `handleNavClick` scrolls after a fixed 80ms delay. | Reduce the main row to Home, Projects, Experience, Skills, and Contact. Place credentials, simulators, and Q&A under a secondary group. Use reliable route/anchor navigation and a breakpoint based on the measured fit of the row. Add sticky-header scroll offset; none was found on the About/Services targets. |
| 10 | Moderate / small–medium | **Reading text is frequently set to 10–12px.** Descriptions, filters, metadata, and parts of the technical presentation share a compact scale, reducing the distinction between essential content and supporting details. This is a readability concern, not an automatic accessibility failure based on font size alone. | `src/components/views/ProjectsView.tsx:390` onward; `src/components/views/SkillsView.tsx:492`; `src/components/ArchitectureMotionHero.tsx:517`; certification metadata. | Use approximately 16px for primary prose and 14px for secondary copy. Reserve micro text for optional metadata; reduce labels and tags before shrinking content. Verify mobile and 200% zoom in a working browser. |
| 11 | Moderate / small | **Visitor galleries expose content-authoring controls.** Upload, URL, and Slot controls appear in the public component. They write browser-local overrides, which can look like a publishing feature even though they do not update the portfolio for other visitors. “Deliverable Placeholders” also makes the presentation feel unfinished. Heuristic: match with user expectations. | `src/components/ProjectGallery.tsx:398` and `:459`; `src/data/projectGalleries.ts:433` stores overrides in localStorage. | Keep visitor galleries focused on real images, captions, and navigation. Put editing behind an explicit owner mode. If any local preview controls remain public, label their temporary/local behavior clearly and provide reset/error feedback. |
| 12 | Minor / small | **Some action labels and feedback do not match the immediate action.** Hero “Download CV” opens a dialog rather than a download; the PDF link inside that dialog is real and the file exists. Contact cards labeled Direct Email / Phone / WhatsApp only copy text. Clipboard success is shown before its promise resolves. Heuristic: consistency and status visibility. | `src/components/views/HomeView.tsx:176`; `src/components/modals/ResumeModal.tsx:87`; `src/components/modals/ContactModal.tsx:39` and `:111`. | Either make Download CV a direct PDF link or rename it View Resume. Label copy actions explicitly; offer separate email/call/WhatsApp links. Await clipboard completion and show a helpful fallback on failure. |

## What to preserve

- The dark-and-copper identity and shared semantic color tokens. Focus outlines already exist for buttons and links in `src/index.css:340`.
- The primary “View My Work” action and project descriptions organized around challenge, solution, tools, and impact.
- Project filtering with an explicit empty state and a Reset all filters action (`ProjectsView.tsx:442`).
- Descriptive labels on several icon controls, profile image alt text, and semantic headings.
- Local PDF resume assets and external credential/profile links. Their existence was checked locally; external destinations were not individually verified.
- The simulator view already introduces itself as interactive simulations (`LiveDemosView.tsx:211`). Retain that clarity; add a concise per-demo note that actions affect sample data and reset on reload where relevant.
- Lazy loading of secondary views and dialogs. Do not infer measured performance from that alone.

## Five quick wins

1. Replace the non-delivering forms with an honest email action until the shared submission flow is working.
2. Add a real keyboard-operable “View case study” link/button to every project card.
3. Change orange selected filters to dark text and use the same accessible token for related states.
4. Add visible, associated labels to contact fields and project search.
5. Make Download CV download the existing PDF directly; keep View Resume as a distinct action if useful.

Then address shared dialog behavior and motion controls before cosmetic refinements.

## Proposed information structure

Primary flow: understand Ali’s value → inspect relevant case study → review career evidence → download resume or contact.

Suggested header: Home · Projects · Experience · Skills · More · Contact. More contains Credentials, Simulators, and Architecture Q&A.

Suggested homepage order:

1. Identity, one-sentence dual-track value proposition, two selected proof points, View Work, and Download Resume.
2. Three selected case studies, each with role, problem, outcome, and a clear details link.
3. Short career timeline with links to technical and operations experience.
4. A small set of relevant credentials/testimonials with links to the full evidence.
5. A working contact action with clear expectations.

Keep the interactive architecture panel as optional depth after the main proposition. Candidate section labels such as “Career story” and “Architecture decisions” are easier to scan than “Four-Beat Narrative Arc,” “Architectural Odyssey,” and “Technical Defense.” These are editorial recommendations to validate, not findings from user research.

## Verification and release checks

`npm run lint` failed with 17 existing TypeScript errors: 16 `verificationUrl` properties missing from the `HonorAwardItem` type in `src/data/portfolioData.ts:3006` onward, and `ImportMeta.env` typing in `src/main.tsx:7`. No fixes were attempted because this request was a review. A production build was not run; the development server starting does not establish release readiness.

Before approval for publication:

- Submit a test inquiry end to end and verify actual receipt, failure recovery, and duplicate-submit prevention.
- Navigate every view and project using keyboard alone; test dialog entry, Tab/Shift+Tab, Escape, nested lightboxes, and focus return.
- Check layouts at 320, 375, 768, 1024, 1280, and 1440px and at 200% zoom. Inspect the header, contact dialog, long role labels, and simulator controls for clipping.
- Confirm addressable views, refresh, browser Back/Forward, copied resume links, PDF download, and print output.
- Enable system reduced-motion and toggle motion off on desktop/mobile. Confirm that CSS, pointer tracking, and WebGL motion actually stop.
- Test with assistive technology and perform rendered contrast/target-size checks. This review is not a full accessibility conformance audit.

## Reference standards

- [W3C dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) supports focus placement, containment, Escape, and return behavior.
- [W3C WCAG 2.2 understanding documents](https://www.w3.org/WAI/WCAG22/understanding/) provide the keyboard, labeling, contrast, and motion criteria relevant to follow-up verification.
- [W3C status messages guidance](https://w3c.github.io/wcag/understanding/status-messages) supports programmatically announced submission/copy feedback.
