import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../../styles/theme";
import styles from "./Gallery.module.css";

// ============================================================
// Types
// ============================================================
interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  platformId?: string;
}

interface FlowCard {
  name: string;
  phase: string;
  dept: string;
  formCodes: string[];
  trigger: string;
  connectors: string[];
  stages: number;
  accent: string;
  desc: string;
}

interface PlatformScreenshot {
  file: string;
  alt: string;
}

interface Platform {
  id: string;
  name: string;
  department: string;
  description: string;
  color: string;
  screenshots: PlatformScreenshot[];
}

interface LegacyItem {
  file: string;
  alt: string;
  department: string;
}

interface GalleryData {
  platforms: Platform[];
  legacyDashboards: LegacyItem[];
  legacyScreenshots: LegacyItem[];
  flows: FlowCard[];
}

// ============================================================
// Data loading
// ============================================================
const BASE = import.meta.env.BASE_URL;

function buildImages(data: GalleryData): GalleryImage[] {
  const images: GalleryImage[] = [];

  // Platform screenshots (from extracted subfolders)
  for (const platform of data.platforms ?? []) {
    for (const shot of platform.screenshots ?? []) {
      images.push({
        src: `${BASE}gallery/${platform.id}/${shot.file}`,
        alt: `${platform.name} — ${shot.alt}`,
        category: platform.department,
        platformId: platform.id,
      });
    }
  }

  // Legacy dashboards (flat in gallery root)
  for (const item of data.legacyDashboards ?? []) {
    images.push({
      src: `${BASE}gallery/${item.file}`,
      alt: item.alt,
      category: item.department,
    });
  }

  // Legacy screenshots (flat in gallery root)
  for (const item of data.legacyScreenshots ?? []) {
    images.push({
      src: `${BASE}gallery/${item.file}`,
      alt: item.alt,
      category: item.department,
    });
  }

  return images;
}

// ============================================================
// Sub-components
// ============================================================

const PlatformSection: React.FC<{ platform: Platform; theme: any }> = ({
  platform,
  theme,
}) => (
  <div
    style={{
      gridColumn: "1 / -1",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      paddingTop:
        platform.id === (platform as any)._first ? "0" : theme.spacing.lg,
      marginBottom: theme.spacing.xs,
    }}
  >
    <div
      style={{
        width: "4px",
        height: "20px",
        borderRadius: "2px",
        backgroundColor: platform.color,
        flexShrink: 0,
      }}
    />
    <div>
      <span
        style={{
          fontWeight: 700,
          fontSize: theme.typography.fontSize.lg,
          color: theme.colors.text.primary,
        }}
      >
        {platform.name}
      </span>
      <span
        style={{
          marginLeft: "8px",
          fontSize: "0.65rem",
          fontWeight: 600,
          color: platform.color,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {platform.department}
      </span>
    </div>
    <span
      style={{
        marginLeft: "auto",
        fontSize: theme.typography.fontSize.xs,
        color: theme.colors.text.muted,
      }}
    >
      {platform.screenshots.length} screens
    </span>
  </div>
);

// ============================================================
// Lightbox Component
// ============================================================
const Lightbox: React.FC<{
  image: GalleryImage;
  onClose: () => void;
}> = ({ image, onClose }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className={styles.lightbox}
      onClick={onClose}
      role="dialog"
      aria-label="Image preview"
      aria-modal="true"
    >
      <button
        className={styles.lightboxClose}
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className={styles.lightboxImage}
        onClick={(e) => e.stopPropagation()}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <div className={styles.lightboxCaption}>{image.alt}</div>
      <div className={styles.lightboxHint}>Press ESC to close</div>
    </div>
  );
};

// ============================================================
// Gallery Component
// ============================================================
const Gallery: React.FC = () => {
  const { theme } = useTheme();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [flows, setFlows] = useState<FlowCard[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE}data/gallery.json`)
      .then((r) => r.json())
      .then((data: GalleryData) => {
        setImages(buildImages(data));
        setFlows(data.flows);
        setPlatforms(data.platforms);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="gallery" style={{ marginTop: "64px", marginBottom: "64px" }}>
        <p style={{ color: theme.colors.text.muted }}>Loading gallery…</p>
      </section>
    );
  }

  return (
    <section
      id="gallery"
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
        Project Gallery
      </h2>
      <p
        style={{
          color: theme.colors.text.secondary,
          fontSize: theme.typography.fontSize.md,
          marginBottom: theme.spacing.lg,
        }}
      >
        Screenshots from the Enterprise Digital Transformation — 12 departments,
        {platforms.length} application platforms, {images.length} screens,{" "}
        {flows.length} automated workflows.
      </p>

      {/* Masonry Grid */}
      <div className={styles.galleryGrid}>
        {images.map((img, i) => {
          // Inject platform section headers before first screenshot of each platform
          const platform = platforms.find((p) => p.id === img.platformId);
          const isFirstOfPlatform =
            platform &&
            images.findIndex((x) => x.platformId === platform.id) === i;

          return (
            <React.Fragment key={i}>
              {isFirstOfPlatform && (
                <PlatformSection
                  platform={{ ...platform!, _first: true } as any}
                  theme={theme}
                />
              )}
              <button
                className={styles.galleryItem}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={styles.galleryItemImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className={styles.galleryItemBody}>
                  <span className={styles.galleryItemCategory}>
                    {img.category}
                  </span>
                  <span className={styles.galleryItemAlt}>{img.alt}</span>
                </div>
              </button>
            </React.Fragment>
          );
        })}
      </div>

      {/* Power Automate Cloud Flows */}
      <h2
        style={{
          color: theme.colors.text.primary,
          fontSize: theme.typography.fontSize.xl,
          fontWeight: 700,
          marginTop: theme.spacing["2xl"],
          marginBottom: theme.spacing.sm,
          letterSpacing: theme.typography.letterSpacing.tight,
        }}
      >
        ⚡ Business Process Automation
      </h2>
      <p
        style={{
          color: theme.colors.text.secondary,
          fontSize: theme.typography.fontSize.sm,
          marginBottom: theme.spacing.lg,
        }}
      >
        {flows.length} automated workflows replacing manual approval chains and
        email-based processes — built with Microsoft Power Automate using
        standard Microsoft 365 tools
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "14px",
        }}
      >
        {flows.map((flow, i) => (
          <div
            key={`flow-${i}`}
            style={{
              backgroundColor: theme.colors.bg.secondary,
              border: `1px solid ${theme.colors.border.default}`,
              borderLeft: `3px solid ${flow.accent}`,
              borderRadius: theme.borderRadius.lg,
              padding: "16px 20px",
              transition: theme.transitions.base,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderLeftWidth = "4px";
              e.currentTarget.style.transform = "translateX(2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderLeftWidth = "3px";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: theme.typography.fontSize.sm,
                  color: theme.colors.text.primary,
                  lineHeight: 1.4,
                }}
              >
                {flow.name}
              </span>
              <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
                <span
                  style={{
                    padding: "2px 6px",
                    borderRadius: theme.borderRadius.full,
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    backgroundColor: `${flow.accent}20`,
                    color: flow.accent,
                    whiteSpace: "nowrap",
                  }}
                >
                  {flow.dept}
                </span>
                <span
                  style={{
                    padding: "2px 6px",
                    borderRadius: theme.borderRadius.full,
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    backgroundColor: theme.colors.bg.tertiary,
                    color: theme.colors.text.muted,
                    whiteSpace: "nowrap",
                  }}
                >
                  P{flow.phase}
                </span>
              </div>
            </div>

            {/* Stage pipeline */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
                height: "6px",
                borderRadius: "3px",
                overflow: "hidden",
                backgroundColor: theme.colors.bg.tertiary,
              }}
            >
              {Array.from({ length: flow.stages }).map((_, s) => (
                <div
                  key={s}
                  style={{
                    flex: 1,
                    height: "100%",
                    backgroundColor:
                      s === 0
                        ? flow.accent
                        : s === flow.stages - 1
                          ? theme.colors.accent.green
                          : `${flow.accent}${Math.round(
                              40 + (s / flow.stages) * 40,
                            )
                              .toString(16)
                              .padStart(2, "0")}`,
                    marginLeft: s > 0 ? "1px" : "0",
                  }}
                />
              ))}
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: theme.typography.fontSize.xs,
                color: theme.colors.text.secondary,
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {flow.desc}
            </p>

            {/* Connector badges */}
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {flow.connectors.map((c) => (
                <span
                  key={c}
                  style={{
                    padding: "2px 7px",
                    borderRadius: "3px",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    backgroundColor: theme.colors.bg.tertiary,
                    color: theme.colors.text.muted,
                    border: `1px solid ${theme.colors.border.default}`,
                    fontFamily: theme.typography.fontFamily.mono,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Trigger line */}
            <div
              style={{
                fontSize: "0.6rem",
                color: theme.colors.text.muted,
                fontFamily: theme.typography.fontFamily.mono,
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span style={{ color: flow.accent }}>⚡</span> {flow.trigger}
            </div>

            {/* Scale indicator */}
            <div
              style={{
                fontSize: "0.55rem",
                color: theme.colors.text.muted,
                fontFamily: theme.typography.fontFamily.mono,
              }}
            >
              {flow.formCodes.length > 3
                ? `Handles ${flow.formCodes.length} different form types`
                : `${flow.stages}-stage workflow · ${flow.formCodes.length} form type${flow.formCodes.length !== 1 ? "s" : ""}`}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal — portal to body so position:fixed escapes parallax */}
      {selectedImage &&
        createPortal(
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />,
          document.body,
        )}
    </section>
  );
};

export default Gallery;
