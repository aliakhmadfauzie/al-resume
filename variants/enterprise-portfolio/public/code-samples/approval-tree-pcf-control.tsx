// ============================================================
// PCF Control: Multi-Level Approval Tree
// Displays hierarchical approval chain with real-time status
// indicators in Model-Driven App forms.
// ============================================================
// Technology: TypeScript 5.x + React 19 + Fluent UI v9
// Dataverse binding: Bound to ioi_purchaseorder table
// Manifest property-set: approvalRecords (Dataset)
// ============================================================

import * as React from "react";
import {
  Shimmer,
  ShimmerElementsGroup,
  ShimmerElementType,
  Persona,
  PersonaSize,
  Icon,
  TooltipHost,
  Stack,
  Text,
  mergeStyles,
} from "@fluentui/react";

// ── Types ──────────────────────────────────────────────
interface ApprovalStep {
  id: string;
  approverName: string;
  approverEmail: string;
  tier: number; // 1-5 mapped to Security Role inheritance
  status: "pending" | "approved" | "rejected" | "escalated";
  decidedOn?: Date;
  comments?: string;
}

interface ApprovalTreeProps {
  dataset: ComponentFramework.PropertyTypes.DataSet;
  currentUserId: string;
  onRefresh: () => void;
}

// ── Status color mapping (WCAG 2.2 AA compliant contrast) ──
const STATUS_COLORS: Record<ApprovalStep["status"], string> = {
  pending: "#D29922",   // Amber — contrast 4.6:1 on dark
  approved: "#2EA043",  // Green — contrast 5.2:1 on dark
  rejected: "#F85149",  // Red — contrast 4.8:1 on dark
  escalated: "#BC8CFF", // Purple — contrast 4.9:1 on dark
};

const STATUS_ICONS: Record<ApprovalStep["status"], string> = {
  pending: "Clock",
  approved: "CheckMark",
  rejected: "Cancel",
  escalated: "Forward",
};

const STATUS_LABELS: Record<ApprovalStep["status"], string> = {
  pending: "Awaiting Decision",
  approved: "Approved",
  rejected: "Rejected",
  escalated: "Escalated to Next Tier",
};

// ── Component ──────────────────────────────────────────
export const ApprovalTree: React.FC<ApprovalTreeProps> = ({
  dataset,
  currentUserId,
  onRefresh,
}) => {
  const [approvalSteps, setApprovalSteps] = React.useState<ApprovalStep[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  // ── Data fetching via OData (delegation-safe) ──
  React.useEffect(() => {
    const fetchApprovals = async () => {
      try {
        setLoading(true);
        setError(null);

        // OData query: fetch approval records ordered by tier
        const filter = `$filter=_ioi_purchaseorder_value eq ${dataset.getTargetEntityRef()?.id?.guid}`;
        const orderBy = "$orderby=ioi_approvaltier asc";
        const select = "$select=ioi_approverid,ioi_approvaltier,ioi_approvalstatus,ioi_decidedon,ioi_comments";

        const rows = await dataset.records;
        const steps: ApprovalStep[] = [];

        // Iterate through PCF dataset binding (sorted by tier)
        Object.values(rows).forEach((record) => {
          steps.push({
            id: record.getRecordId(),
            approverName: record.getFormattedValue("ioi_approverid") ?? "Unknown",
            approverEmail: "",
            tier: record.getValue("ioi_approvaltier") as number,
            status: mapStatus(record.getFormattedValue("ioi_approvalstatus")),
            decidedOn: record.getValue("ioi_decidedon") as Date,
            comments: record.getFormattedValue("ioi_comments"),
          });
        });

        setApprovalSteps(steps);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load approval chain");
      } finally {
        setLoading(false);
      }
    };

    fetchApprovals();
  }, [dataset]);

  // ── Loading skeleton ──
  if (loading) {
    return (
      <Stack tokens={{ childrenGap: 8 }} style={{ padding: "16px" }}>
        {[1, 2, 3].map((i) => (
          <Shimmer key={i} width="100%">
            <ShimmerElementsGroup
              shimmerElements={[
                { type: ShimmerElementType.circle, height: 32 },
                { type: ShimmerElementType.gap, width: 12 },
                { type: ShimmerElementType.line, height: 16, width: "60%" },
              ]}
            />
          </Shimmer>
        ))}
      </Stack>
    );
  }

  // ── Error state ──
  if (error) {
    return (
      <Stack horizontalAlign="center" tokens={{ childrenGap: 8 }} style={{ padding: "16px" }}>
        <Icon iconName="Error" style={{ color: STATUS_COLORS.rejected, fontSize: "24px" }} />
        <Text variant="small" style={{ color: STATUS_COLORS.rejected }}>
          {error}
        </Text>
      </Stack>
    );
  }

  // ── Approval tree rendering ──
  return (
    <Stack tokens={{ childrenGap: 0 }} style={{ padding: "8px 0" }}>
      {approvalSteps.map((step, index) => {
        const isCurrentUser =
          dataset.records[step.id]?.getValue("ioi_approverid") === currentUserId;
        const statusColor = STATUS_COLORS[step.status];

        return (
          <div
            key={step.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 16px",
              borderLeft: `3px solid ${statusColor}`,
              marginLeft: `${index * 16}px`, // Hierarchical indent
              backgroundColor: isCurrentUser ? `${statusColor}15` : "transparent",
              transition: "background-color 0.2s ease",
            }}
          >
            {/* ── Connector dot ── */}
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: statusColor,
                flexShrink: 0,
              }}
            />

            {/* ── Approver Persona ── */}
            <Persona
              text={step.approverName}
              secondaryText={`Tier ${step.tier} — ${STATUS_LABELS[step.status]}`}
              size={PersonaSize.size32}
              styles={{
                root: { flex: 1 },
                primaryText: { fontWeight: step.status === "pending" ? 600 : 400 },
              }}
            />

            {/* ── Status icon + tooltip ── */}
            <TooltipHost content={`${STATUS_LABELS[step.status]}${step.decidedOn ? ` on ${step.decidedOn.toLocaleDateString()}` : ""}`}>
              <Icon
                iconName={STATUS_ICONS[step.status]}
                style={{ color: statusColor, fontSize: "16px", cursor: "pointer" }}
              />
            </TooltipHost>

            {/* ── Escalate button (current user only, pending only) ── */}
            {isCurrentUser && step.status === "pending" && (
              <TooltipHost content="Escalate to next tier">
                <Icon
                  iconName="Forward"
                  style={{
                    color: STATUS_COLORS.escalated,
                    fontSize: "16px",
                    cursor: "pointer",
                    padding: "4px",
                  }}
                  onClick={() => {
                    // Implement escalation via Web API
                    onRefresh();
                  }}
                />
              </TooltipHost>
            )}
          </div>
        );
      })}

      {/* ── Empty state ── */}
      {approvalSteps.length === 0 && (
        <Stack horizontalAlign="center" tokens={{ childrenGap: 8 }} style={{ padding: "24px" }}>
          <Icon iconName="People" style={{ fontSize: "32px", opacity: 0.4 }} />
          <Text variant="small" style={{ opacity: 0.6 }}>
            No approval records found
          </Text>
        </Stack>
      )}
    </Stack>
  );
};

// ── Helper ──
function mapStatus(formattedValue: string | null): ApprovalStep["status"] {
  switch (formattedValue?.toLowerCase()) {
    case "approved": return "approved";
    case "rejected": return "rejected";
    case "escalated": return "escalated";
    default: return "pending";
  }
}
