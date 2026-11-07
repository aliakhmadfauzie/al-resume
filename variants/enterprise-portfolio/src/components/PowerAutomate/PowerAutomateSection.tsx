import React from "react";
import { useTheme } from "../../styles/theme";

interface FlowEntry {
  label: string;
  desc: string;
  trigger: string;
  actions: string;
  file: string;
}

const FLOWS: FlowEntry[] = [
  {
    label: "ITSSR Category Routing",
    desc: "Routes IT service requests to the correct department based on category selection. Automatically assigns approvers based on request type.",
    trigger: "SharePoint — Item created/modified in MainDB_IT",
    actions: "5 actions",
    file: "itssr-category-routing-flow-definition.json",
  },
  {
    label: "SR Staff Requisition Approval",
    desc: "Multi-stage approval chain for staff requisitions across HR, department heads, and management. Parallel approval branches with conditional escalation.",
    trigger: "SharePoint — Item created in MainDB_HR",
    actions: "12 actions",
    file: "sr-staff-requisition-approval-flow-definition.json",
  },
  {
    label: "QA NCR Audit Workflow",
    desc: "Non-conformance report audit workflow for Quality Assurance. Tracks corrective actions, assigns owners, and sends deadline reminders.",
    trigger: "SharePoint — Item modified in MainDB_QA",
    actions: "6 actions",
    file: "qa-johr-ncr-audit-workflow-flow-definition.json",
  },
  {
    label: "HR Universal Form Submission",
    desc: "Universal form submission flow for HR department — generates documents, sends confirmation emails, and logs submissions.",
    trigger: "SharePoint — Item created in MainDB_HR",
    actions: "8 actions",
    file: "hr-universal-form-submission-flow-definition.json",
  },
  {
    label: "EAF Engineering Approval",
    desc: "Engineering Authorization Form multi-level approval with conditional escalation to Plant Manager for high-value requests.",
    trigger: "SharePoint — Item created/modified in MainDB_Engineering",
    actions: "10 actions",
    file: "eaf-approval-flow-definition.json",
  },
  {
    label: "Hardware Inventory Audit Reminder",
    desc: "Scheduled daily reminder flow for hardware inventory audits. Sends escalating email notifications at configurable intervals.",
    trigger: "Recurrence — Daily schedule",
    actions: "4 actions",
    file: "hardware-inventory-audit-reminder-flow-definition.json",
  },
  {
    label: "PBI SOP/WI Workflow",
    desc: "Plant Business Intelligence Standard Operating Procedure workflow — routes documents for review and approval.",
    trigger: "SharePoint — Item created in MainDB_PBI",
    actions: "3 actions",
    file: "pbi-sop-wi-workflow-flow-definition.json",
  },
  {
    label: "PRF ISG Assignment",
    desc: "Purchase Requisition Form assignment to Internal Service Group — routes from requester to buyer with notifications.",
    trigger: "SharePoint — Item created in MainDB_Procurement",
    actions: "9 actions",
    file: "prf-isg-assignment-flow-definition.json",
  },
  {
    label: "SAPCR Approval Chain",
    desc: "Supplier Corrective Action Request approval chain — routes through supplier → QA → procurement with deadline tracking.",
    trigger: "SharePoint — Item created in MainDB_QC",
    actions: "11 actions",
    file: "sapcr-approval-chain-flow-definition.json",
  },
];

// ============================================================
// Component
// ============================================================
const PowerAutomateSection: React.FC = () => {
  const { theme } = useTheme();

  const getDeptColor = (flow: FlowEntry): string => {
    if (flow.file.includes("itssr")) return theme.colors.accent.blue;
    if (flow.file.includes("sr-") || flow.file.includes("hr-"))
      return theme.colors.accent.purple;
    if (flow.file.includes("qa-")) return theme.colors.accent.green;
    if (flow.file.includes("eaf")) return theme.colors.accent.orange;
    if (flow.file.includes("hardware")) return theme.colors.accent.cyan;
    if (flow.file.includes("sapcr")) return theme.colors.accent.red;
    return theme.colors.accent.blue;
  };

  const getDeptLabel = (flow: FlowEntry): string => {
    if (flow.file.includes("itssr")) return "IT";
    if (flow.file.includes("sr-") || flow.file.includes("hr-")) return "HR";
    if (flow.file.includes("qa-")) return "QA";
    if (flow.file.includes("eaf")) return "ENG";
    if (flow.file.includes("hardware")) return "IT";
    if (flow.file.includes("pbi")) return "PBI";
    if (flow.file.includes("prf")) return "PRC";
    if (flow.file.includes("sapcr")) return "QC";
    return "GEN";
  };

  return (
    <section
      id="power-automate"
      style={{
        marginTop: theme.spacing["3xl"],
        marginBottom: theme.spacing["3xl"],
      }}
    >
      <h2
        style={{
          color: theme.colors.text.primary,
          fontSize: theme.typography.fontSize["2xl"],
          fontWeight: 700,
          marginBottom: theme.spacing.sm,
          letterSpacing: theme.typography.letterSpacing.tight,
        }}
      >
        Power Automate Flows
      </h2>
      <p
        style={{
          color: theme.colors.text.secondary,
          fontSize: theme.typography.fontSize.md,
          marginBottom: theme.spacing.lg,
        }}
      >
        9 production cloud flows powering approvals, notifications, and business
        process automation across 8 departments. All built with standard
        connectors — SharePoint, Office 365 Outlook, and Office 365 Users.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "16px",
        }}
      >
        {FLOWS.map((flow, i) => {
          const accent = getDeptColor(flow);
          const dept = getDeptLabel(flow);

          return (
            <div
              key={i}
              style={{
                backgroundColor: theme.colors.bg.secondary,
                border: `1px solid ${theme.colors.border.default}`,
                borderLeft: `3px solid ${accent}`,
                borderRadius: theme.borderRadius.lg,
                padding: "20px",
                transition: theme.transitions.base,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftWidth = "4px";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftWidth = "3px";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                  gap: "8px",
                }}
              >
                <h3
                  style={{
                    fontSize: theme.typography.fontSize.md,
                    fontWeight: 700,
                    color: theme.colors.text.primary,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {flow.label}
                </h3>
                <span
                  style={{
                    display: "inline-block",
                    padding: "2px 8px",
                    borderRadius: theme.borderRadius.full,
                    fontSize: theme.typography.fontSize.xs,
                    fontWeight: 700,
                    backgroundColor: `${accent}20`,
                    color: accent,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {dept}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: theme.typography.fontSize.sm,
                  color: theme.colors.text.secondary,
                  lineHeight: 1.6,
                  margin: "0 0 14px 0",
                }}
              >
                {flow.desc}
              </p>

              {/* Meta */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  fontSize: theme.typography.fontSize.xs,
                  color: theme.colors.text.muted,
                  fontFamily: theme.typography.fontFamily.mono,
                  flexWrap: "wrap",
                }}
              >
                <span title={flow.trigger}>
                  ⚡{" "}
                  {flow.trigger.length > 50
                    ? flow.trigger.substring(0, 50) + "..."
                    : flow.trigger}
                </span>
                <span>🔧 {flow.actions}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PowerAutomateSection;
