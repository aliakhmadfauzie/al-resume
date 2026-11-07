import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem, MigrationSlice, ProjectGalleryItem } from '../types';
import { getGalleryForItem, saveGalleryForItem } from '../data/projectGalleries';
import {
  Image as ImageIcon,
  Upload,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Plus,
  Trash2,
  Link2,
  Check,
  Grid,
  Sparkles,
  Layers,
  Activity,
  ShieldCheck
} from 'lucide-react';

/**
 * Compresses an uploaded image file via HTML5 Canvas so multiple project screenshots
 * can be stored smoothly in localStorage without exceeding browser quota.
 */
async function compressImageFile(file: File, maxWidth = 1280, quality = 0.82): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = img.width > maxWidth ? maxWidth / img.width : 1;
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/webp', quality));
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Default array of image placeholders used when no external array or project item is provided.
 */
export const DEFAULT_GALLERY_PLACEHOLDERS: ProjectGalleryItem[] = [
  {
    id: 'placeholder-1',
    title: '01 · System Architecture & Data Topology',
    caption: 'End-to-end data flow, security boundary, and connector orchestration schema.',
    expectedPath: '/assets/gallery/default/01-architecture.png'
  },
  {
    id: 'placeholder-2',
    title: '02 · Primary Operational Command Interface',
    caption: 'High-density operator view with real-time telemetry and validation controls.',
    expectedPath: '/assets/gallery/default/02-interface.png'
  },
  {
    id: 'placeholder-3',
    title: '03 · Audit Trail & Executive Telemetry',
    caption: 'Immutable compliance log and baseline-to-result KPI verification view.',
    expectedPath: '/assets/gallery/default/03-telemetry.png'
  }
];

/**
 * Renders a crisp visual wireframe schematic for an image placeholder slot
 * when a custom image file has not yet been uploaded.
 */
const ArchitecturalPlaceholderPreview: React.FC<{
  slot: ProjectGalleryItem;
  index: number;
  projectTitle: string;
  compact?: boolean;
}> = ({ slot, index, projectTitle, compact = false }) => {
  const variant = index % 3;

  if (compact) {
    return (
      <div className="w-full h-full bg-[var(--bg-recessed)] relative flex flex-col justify-between p-1.5 overflow-hidden select-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--border-subtle) 1px, transparent 1px), linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)',
            backgroundSize: '8px 8px'
          }}
        />
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[8px] font-mono font-bold text-[var(--text-accent)]">0{index + 1}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-info-fg)]" />
        </div>
        <div className="relative z-10 flex items-center justify-center gap-1 my-auto">
          {variant === 0 && (
            <>
              <div className="w-3 h-2.5 rounded-[2px] border border-[var(--interactive-subtle-border)] bg-[var(--interactive-subtle-bg)]" />
              <div className="w-2 h-[1px] bg-[var(--border-focus)]" />
              <div className="w-3.5 h-3 rounded-[2px] border border-[var(--status-info-border)] bg-[var(--status-info-bg)]" />
              <div className="w-2 h-[1px] bg-[var(--status-info-fg)]" />
              <div className="w-3 h-2.5 rounded-[2px] border border-[var(--status-success-border)] bg-[var(--status-success-bg)]" />
            </>
          )}
          {variant === 1 && (
            <div className="w-full px-1 space-y-1">
              <div className="h-1.5 w-3/4 rounded-[1px] bg-[var(--interactive-subtle-border)]" />
              <div className="grid grid-cols-3 gap-0.5">
                <div className="h-2 rounded-[1px] bg-[var(--bg-surface)] border border-[var(--interactive-subtle-border)]" />
                <div className="h-2 rounded-[1px] bg-[var(--bg-surface)] border border-[var(--status-info-border)]" />
                <div className="h-2 rounded-[1px] bg-[var(--bg-surface)] border border-[var(--interactive-subtle-border)]" />
              </div>
            </div>
          )}
          {variant === 2 && (
            <div className="flex items-end space-x-1 h-4">
              <div className="w-1.5 h-2 bg-[var(--border-focus)]/50 rounded-t-[1px]" />
              <div className="w-1.5 h-3 bg-[var(--border-focus)]/80 rounded-t-[1px]" />
              <div className="w-1.5 h-2.5 bg-[var(--status-info-fg)]/60 rounded-t-[1px]" />
              <div className="w-1.5 h-4 bg-[var(--status-info-fg)] rounded-t-[1px]" />
            </div>
          )}
        </div>
        <div className="relative z-10 text-[7px] font-mono text-[var(--text-tertiary)] truncate">
          {slot.title}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[var(--bg-recessed)] relative flex flex-col justify-between p-5 sm:p-6 overflow-hidden select-none">
      {/* Subtle Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border-subtle) 1px, transparent 1px), linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[var(--ambient-glow-primary)] blur-3xl pointer-events-none" />

      {/* Top Schematic Header */}
      <div className="relative z-10 flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] text-[10px] font-mono font-semibold text-[var(--text-accent)]">
            PLACEHOLDER 0{index + 1}
          </span>
          <span className="text-[11px] font-mono text-[var(--text-tertiary)] truncate max-w-[240px] sm:max-w-xs">
            {projectTitle}
          </span>
        </div>
        <span className="text-[10px] font-mono text-[var(--text-tertiary)]">1920×1080 · 16:9</span>
      </div>

      {/* Center Visual Wireframe Illustration (Matching Reference Featured Project Previews) */}
      <div className="relative z-10 my-auto py-2 flex flex-col items-center justify-center w-full">
        {variant === 0 && (
          <div className="w-full rounded-lg bg-[#11131a] border border-[var(--border-subtle)] p-3 space-y-2.5">
            <div className="grid grid-cols-4 gap-1.5 text-[9px] font-mono">
              <div className="p-1.5 rounded bg-[#0b0c10] border border-[var(--border-subtle)]">
                <div className="text-[var(--text-tertiary)]">RECORDS</div>
                <div className="text-[var(--text-primary)] font-bold">365+ DBs</div>
              </div>
              <div className="p-1.5 rounded bg-[#0b0c10] border border-[var(--border-subtle)]">
                <div className="text-[var(--text-tertiary)]">SAVINGS</div>
                <div className="text-[var(--text-accent)] font-bold">$960K/yr</div>
              </div>
              <div className="p-1.5 rounded bg-[#0b0c10] border border-[var(--border-subtle)]">
                <div className="text-[var(--text-tertiary)]">UPTIME</div>
                <div className="text-[#4ade80] font-bold">99.98%</div>
              </div>
              <div className="p-1.5 rounded bg-[#0b0c10] border border-[var(--border-subtle)]">
                <div className="text-[var(--text-tertiary)]">LATENCY</div>
                <div className="text-[var(--text-primary)] font-bold">15ms</div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 items-center pt-1">
              <div className="col-span-8 h-12">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 160 44">
                  <defs>
                    <linearGradient id="projAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 36 L25 30 L50 33 L78 20 L105 24 L132 10 L160 4 L160 44 L0 44 Z"
                    fill="url(#projAreaGrad)"
                  />
                  <path
                    d="M0 36 L25 30 L50 33 L78 20 L105 24 L132 10 L160 4"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="col-span-4 flex justify-center">
                <svg className="w-11 h-11 -rotate-90" viewBox="0 0 44 44">
                  <circle cx="22" cy="22" r="16" stroke="#232632" strokeWidth="5" fill="none" />
                  <circle
                    cx="22"
                    cy="22"
                    r="16"
                    stroke="#f97316"
                    strokeWidth="5"
                    strokeDasharray="100.5"
                    strokeDashoffset="22"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {variant === 1 && (
          <div className="w-full rounded-lg bg-[#11131a] border border-[var(--border-subtle)] p-3 space-y-2">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
              <span className="text-[10px] font-mono text-[var(--text-primary)] font-semibold">
                API &amp; WORKFLOW ENDPOINTS
              </span>
              <span className="text-[9px] font-mono text-[#4ade80]">● ACTIVE</span>
            </div>
            <div className="space-y-1.5 text-[9px] font-mono">
              <div className="flex items-center justify-between px-2 py-1 rounded bg-[#0b0c10] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-secondary)]">/api/v1/maindb/sync</span>
                <span className="px-1.5 py-0.5 rounded bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)]">POST</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1 rounded bg-[#0b0c10] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-secondary)]">/api/v1/ssot/verify-gates</span>
                <span className="px-1.5 py-0.5 rounded bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)]">GET</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1 rounded bg-[#0b0c10] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-secondary)]">/api/v1/rebate/ceiling</span>
                <span className="px-1.5 py-0.5 rounded bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)]">PUT</span>
              </div>
            </div>
          </div>
        )}

        {variant === 2 && (
          <div className="w-full rounded-lg bg-[#11131a] border border-[var(--border-subtle)] p-3 space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-[var(--text-primary)]">COMPLIANCE &amp; TELEMETRY MATRIX</span>
              <span className="text-[var(--text-accent)]">100% AUDIT READY</span>
            </div>
            <div className="flex items-end space-x-2 h-12 pt-2 px-2">
              {[45, 65, 55, 80, 72, 92, 100].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-[var(--interactive-primary)] to-[var(--status-info-fg)]"
                    style={{ height: `${Math.round((val / 100) * 40)}px` }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-2.5 space-y-0.5 max-w-lg px-2">
          <h5 className="text-xs font-semibold text-[var(--text-primary)] line-clamp-1">{slot.title}</h5>
          <p className="text-[11px] text-[var(--text-tertiary)] line-clamp-1">{slot.caption}</p>
        </div>
      </div>

      {/* Bottom Expected Path Footer */}
      <div className="relative z-10 flex items-center justify-between border-t border-[var(--border-subtle)] pt-2.5 text-[10px] font-mono text-[var(--text-tertiary)]">
        <span className="truncate max-w-[65%]">Slot: public{slot.expectedPath}</span>
        <span className="text-[var(--text-accent)] font-medium">Click to open Lightbox →</span>
      </div>
    </div>
  );
};

export interface ProjectGalleryProps {
  /** Array of image placeholders / project deliverables to showcase */
  images?: ProjectGalleryItem[];
  /** Optional project or migration slice for automatic slot resolution and persistence */
  item?: ProjectItem | MigrationSlice;
  /** Title displayed in the lightbox header */
  projectTitle?: string;
  /** Initial active slide index */
  initialIndex?: number;
  /** Controlled lightbox open state (optional) */
  isOpen?: boolean;
  /** Callback when controlled lightbox closes */
  onClose?: () => void;
  /** Callback when user updates/uploads images in the gallery */
  onUpdateImages?: (updated: ProjectGalleryItem[]) => void;
}

/**
 * ProjectGallery Component
 * Uses an array of image placeholders and implements a full-screen Lightbox Modal
 * with thumbnail navigation to visualize project work. Integrates directly with ProjectDetailModal.
 */
export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images,
  item,
  projectTitle,
  initialIndex = 0,
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  onUpdateImages
}) => {
  const resolveSlots = useCallback((): ProjectGalleryItem[] => {
    if (images && images.length > 0) return images;
    if (item) return getGalleryForItem(item);
    return DEFAULT_GALLERY_PLACEHOLDERS;
  }, [images, item]);

  const [slots, setSlots] = useState<ProjectGalleryItem[]>(resolveSlots);
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);
  const [brokenPaths, setBrokenPaths] = useState<Record<string, boolean>>({});
  const [internalLightboxOpen, setInternalLightboxOpen] = useState<boolean>(false);
  const [showUrlInput, setShowUrlInput] = useState<boolean>(false);
  const [customUrl, setCustomUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isLightboxOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalLightboxOpen;
  const setLightboxOpen = useCallback(
    (open: boolean) => {
      if (controlledIsOpen !== undefined) {
        if (!open && controlledOnClose) controlledOnClose();
      } else {
        setInternalLightboxOpen(open);
      }
    },
    [controlledIsOpen, controlledOnClose]
  );

  useEffect(() => {
    setSlots(resolveSlots());
    setActiveIndex(initialIndex);
  }, [resolveSlots, initialIndex]);

  useEffect(() => {
    if (!item) return;
    const handleSync = (e: Event) => {
      const custom = e as CustomEvent<{ itemId: string }>;
      if (!custom.detail || custom.detail.itemId === item.id) {
        setSlots(getGalleryForItem(item));
      }
    };
    window.addEventListener('portfolio-gallery-updated', handleSync);
    return () => window.removeEventListener('portfolio-gallery-updated', handleSync);
  }, [item]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slots.length) % slots.length);
  }, [slots.length]);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slots.length);
  }, [slots.length]);

  // Keyboard navigation inside the Lightbox Modal
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, prevSlide, nextSlide, setLightboxOpen]);

  const currentSlot = slots[activeIndex] || slots[0];
  if (!currentSlot) return null;

  const displayTitle = projectTitle || item?.title || 'Project Deliverables';

  const getSlotSrc = (slot: ProjectGalleryItem) =>
    slot.imageUrl || (!brokenPaths[slot.id] ? slot.expectedPath : undefined);

  const currentSrc = getSlotSrc(currentSlot);
  const isCurrentLoaded = Boolean(currentSrc && (!brokenPaths[currentSlot.id] || currentSlot.imageUrl));

  const persistUpdatedSlots = (updated: ProjectGalleryItem[]) => {
    setSlots(updated);
    if (item) {
      saveGalleryForItem(item.id, updated);
    }
    if (onUpdateImages) {
      onUpdateImages(updated);
    }
  };

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await compressImageFile(file);
      const updated = slots.map((s, idx) =>
        idx === activeIndex ? { ...s, imageUrl: dataUrl } : s
      );
      persistUpdatedSlots(updated);
    } catch (err) {
      console.error('Error uploading screenshot:', err);
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleSaveCustomUrl = () => {
    if (!customUrl.trim()) return;
    const updated = slots.map((s, idx) =>
      idx === activeIndex ? { ...s, imageUrl: customUrl.trim() } : s
    );
    persistUpdatedSlots(updated);
    setCustomUrl('');
    setShowUrlInput(false);
  };

  const handleClearSlotImage = () => {
    const updated = slots.map((s, idx) =>
      idx === activeIndex ? { ...s, imageUrl: undefined } : s
    );
    persistUpdatedSlots(updated);
  };

  const handleAddSlot = () => {
    const nextNum = slots.length + 1;
    const baseId = item?.id || 'deliverable';
    const newSlot: ProjectGalleryItem = {
      id: `${baseId}-custom-${Date.now()}`,
      title: `${displayTitle} — Deliverable 0${nextNum}`,
      caption: `Architectural deliverable view or operational screenshot 0${nextNum} for ${displayTitle}.`,
      expectedPath: `/assets/gallery/${baseId}/0${nextNum}-deliverable.png`
    };
    const updated = [...slots, newSlot];
    persistUpdatedSlots(updated);
    setActiveIndex(updated.length - 1);
  };

  return (
    <div className="space-y-3">
      {/* Gallery Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-xs font-mono text-[var(--text-secondary)]">
          <ImageIcon className="w-4 h-4 text-[var(--text-accent)]" />
          <span>Project Gallery · {slots.length} Deliverable Placeholders</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--interactive-subtle-bg)] hover:bg-[var(--interactive-subtle-hover)] text-[var(--text-accent)] border border-[var(--interactive-subtle-border)] text-xs font-mono font-medium transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Lightbox View</span>
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--bg-default)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-accent)] border border-[var(--border-subtle)] text-xs font-mono transition-colors"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload</span>
          </button>
          <button
            type="button"
            onClick={() => setShowUrlInput(!showUrlInput)}
            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-mono transition-colors"
          >
            <Link2 className="w-3.5 h-3.5" />
            <span>URL</span>
          </button>
          <button
            type="button"
            onClick={handleAddSlot}
            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-mono transition-colors"
            title="Add another image placeholder"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Slot</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUploadImage}
          />
        </div>
      </div>

      {/* Optional Paste Image URL Bar */}
      {showUrlInput && (
        <div className="flex items-center gap-2 p-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-focus)]">
          <input
            type="text"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="Paste image path or URL (e.g. /assets/gallery/... or https://...)"
            className="flex-1 bg-transparent text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none"
          />
          <button
            type="button"
            onClick={handleSaveCustomUrl}
            className="px-3 py-1 rounded-[4px] bg-[var(--accent-blue)] text-white text-xs font-mono flex items-center space-x-1"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Save</span>
          </button>
        </div>
      )}

      {/* Main Active Deliverable Stage */}
      <div className="rounded-[var(--radius-md)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] overflow-hidden">
        {/* Browser Frame Bar */}
        <div className="px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-subtle)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-subtle)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-focus)]" />
            <span className="text-xs font-mono text-[var(--text-secondary)] truncate ml-2">
              {currentSlot.title}
            </span>
          </div>

          <div className="flex items-center space-x-1.5 shrink-0">
            {currentSlot.imageUrl && (
              <button
                type="button"
                onClick={handleClearSlotImage}
                className="p-1 rounded-[4px] bg-[var(--bg-default)] text-[var(--text-tertiary)] hover:text-[var(--status-warning-fg)] border border-[var(--border-subtle)]"
                title="Reset to placeholder"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              type="button"
              onClick={prevSlide}
              className="p-1 rounded-[4px] bg-[var(--bg-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-[var(--text-tertiary)] px-1.5 tabular-nums">
              {activeIndex + 1} / {slots.length}
            </span>
            <button
              type="button"
              onClick={nextSlide}
              className="p-1 rounded-[4px] bg-[var(--bg-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="p-1 rounded-[4px] bg-[var(--bg-default)] text-[var(--text-accent)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]"
              title="Open Lightbox Modal"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 16:9 Stage Viewport */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="relative aspect-[16/9] w-full bg-[var(--bg-primary)] flex items-center justify-center overflow-hidden cursor-zoom-in group"
        >
          {currentSrc && (
            <img
              src={currentSrc}
              alt={currentSlot.title}
              className="w-full h-full object-contain"
              onError={() =>
                setBrokenPaths((prev) => ({
                  ...prev,
                  [currentSlot.id]: true
                }))
              }
            />
          )}

          {!isCurrentLoaded && (
            <ArchitecturalPlaceholderPreview
              slot={currentSlot}
              index={activeIndex}
              projectTitle={displayTitle}
            />
          )}
        </div>

        {/* Caption Bar */}
        <div className="px-4 py-2.5 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            {currentSlot.caption}
          </p>
          <span className="text-[11px] font-mono text-[var(--text-tertiary)] shrink-0">
            {isCurrentLoaded ? 'Custom Image Loaded' : 'Interactive Placeholder'}
          </span>
        </div>
      </div>

      {/* Thumbnail Navigation Strip */}
      <div className="grid grid-cols-3 gap-2.5">
        {slots.map((slot, idx) => {
          const isSelected = idx === activeIndex;
          const thumbSrc = getSlotSrc(slot);
          const isImageLoaded = Boolean(thumbSrc && (!brokenPaths[slot.id] || slot.imageUrl));
          return (
            <button
              key={slot.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`p-2 rounded-[var(--radius-sm)] border text-left transition-all flex items-center space-x-2.5 ${
                isSelected
                  ? 'bg-[var(--bg-surface-elevated)] border-[var(--border-focus)] ring-1 ring-[var(--interactive-subtle-border)]'
                  : 'bg-[var(--bg-default)] border-[var(--border-subtle)] hover:border-[var(--border-default)]'
              }`}
            >
              <div className="w-14 h-9 rounded-[4px] bg-[var(--bg-recessed)] border border-[var(--border-subtle)] overflow-hidden shrink-0">
                {isImageLoaded ? (
                  <img src={thumbSrc} alt={slot.title} className="w-full h-full object-cover" />
                ) : (
                  <ArchitecturalPlaceholderPreview
                    slot={slot}
                    index={idx}
                    projectTitle={displayTitle}
                    compact
                  />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-mono text-[var(--text-accent)] font-semibold">
                  0{idx + 1} · View
                </div>
                <div className="text-xs font-medium text-[var(--text-primary)] truncate">
                  {slot.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Full-Screen Lightbox Modal with Thumbnail Navigation */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-8"
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${displayTitle} Lightbox Modal`}
          >
            {/* Top Lightbox Header Bar */}
            <div
              className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-accent)] font-mono text-xs font-semibold">
                  0{activeIndex + 1}
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-[var(--text-accent)]">
                    <Grid className="w-3.5 h-3.5" />
                    <span>
                      {displayTitle} · Deliverable {activeIndex + 1} of {slots.length}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mt-0.5">
                    {currentSlot.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-accent)] border border-[var(--border-subtle)] text-xs font-mono transition-colors"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Image</span>
                </button>
                <button
                  type="button"
                  onClick={handleAddSlot}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-white border border-[var(--border-subtle)] text-xs font-mono transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Placeholder</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-white border border-[var(--border-subtle)] transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Center Deliverable Stage with Prev/Next Controls */}
            <div
              className="flex-1 flex items-center justify-center my-4 overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-[var(--bg-surface)]/90 text-white border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors z-20 shadow-lg"
                aria-label="Previous deliverable"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <motion.div
                key={currentSlot.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.16 }}
                className="w-full max-w-4xl max-h-full flex flex-col items-center justify-center px-12 sm:px-16"
              >
                {isCurrentLoaded ? (
                  <div className="relative w-full flex flex-col items-center">
                    <img
                      src={currentSrc}
                      alt={currentSlot.title}
                      className="max-h-[56vh] w-auto max-w-full object-contain rounded-[var(--radius-md)] border border-[var(--border-subtle)] shadow-2xl bg-[var(--bg-primary)]"
                    />
                    <div className="mt-3 text-center max-w-2xl">
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                        {currentSlot.caption}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full aspect-[16/9] max-h-[56vh] rounded-[var(--radius-lg)] border border-[var(--border-subtle)] overflow-hidden shadow-2xl">
                    <ArchitecturalPlaceholderPreview
                      slot={currentSlot}
                      index={activeIndex}
                      projectTitle={displayTitle}
                    />
                  </div>
                )}
              </motion.div>

              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-[var(--bg-surface)]/90 text-white border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors z-20 shadow-lg"
                aria-label="Next deliverable"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Lightbox Thumbnail Navigation Dock */}
            <div
              className="border-t border-[var(--border-subtle)] pt-4 space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[var(--text-tertiary)]">
                <span className="flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--text-accent)]" />
                  <span>THUMBNAIL NAVIGATION · CLICK ANY THUMBNAIL OR USE ← / → KEYS</span>
                </span>
                <span>{currentSlot.expectedPath}</span>
              </div>

              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {slots.map((slot, idx) => {
                  const isSelected = idx === activeIndex;
                  const thumbSrc = getSlotSrc(slot);
                  const hasImg = Boolean(thumbSrc && (!brokenPaths[slot.id] || slot.imageUrl));

                  return (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`group relative flex items-center space-x-3 p-2 rounded-[var(--radius-sm)] border transition-all shrink-0 min-w-[220px] max-w-[260px] text-left ${
                        isSelected
                          ? 'bg-[var(--bg-surface-elevated)] border-[var(--border-focus)] ring-1 ring-[var(--interactive-subtle-border)]'
                          : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] opacity-75 hover:opacity-100 hover:border-[var(--border-default)]'
                      }`}
                    >
                      {/* Miniature 16:9 Thumbnail Preview Box */}
                      <div className="w-16 h-10 rounded-[4px] bg-[var(--bg-recessed)] border border-[var(--border-subtle)] overflow-hidden shrink-0">
                        {hasImg ? (
                          <img
                            src={thumbSrc}
                            alt={slot.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <ArchitecturalPlaceholderPreview
                            slot={slot}
                            index={idx}
                            projectTitle={displayTitle}
                            compact
                          />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className={isSelected ? 'text-[var(--text-accent)] font-semibold' : 'text-[var(--text-tertiary)]'}>
                            Slide 0{idx + 1}
                          </span>
                          <span className="text-[9px] text-[var(--text-tertiary)]">
                            {hasImg ? 'IMG' : 'WIRE'}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-[var(--text-primary)] truncate mt-0.5">
                          {slot.title}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ProjectCardGalleryPreviewProps {
  item: ProjectItem | MigrationSlice;
}

/**
 * Compact browser-framed gallery carousel displayed inside each project card
 * in ProjectsView and HomeView.
 */
export const ProjectCardGalleryPreview: React.FC<ProjectCardGalleryPreviewProps> = ({ item }) => {
  const [slots, setSlots] = useState<ProjectGalleryItem[]>(() => getGalleryForItem(item));
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [brokenPaths, setBrokenPaths] = useState<Record<string, boolean>>({});
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  useEffect(() => {
    setSlots(getGalleryForItem(item));
    const handleSync = (e: Event) => {
      const custom = e as CustomEvent<{ itemId: string }>;
      if (!custom.detail || custom.detail.itemId === item.id) {
        setSlots(getGalleryForItem(item));
      }
    };
    window.addEventListener('portfolio-gallery-updated', handleSync);
    return () => window.removeEventListener('portfolio-gallery-updated', handleSync);
  }, [item]);

  const currentSlot = slots[activeIndex] || slots[0];
  if (!currentSlot) return null;

  const effectiveSrc =
    currentSlot.imageUrl ||
    (!brokenPaths[currentSlot.id] ? currentSlot.expectedPath : undefined);
  const isLoaded = Boolean(effectiveSrc && (!brokenPaths[currentSlot.id] || currentSlot.imageUrl));

  return (
    <>
      <div className="rounded-[var(--radius-md)] bg-[var(--bg-recessed)] border border-[var(--border-subtle)] group-hover:border-[var(--border-focus)] overflow-hidden transition-colors">
        {/* Browser Window Top Bar */}
        <div className="px-3 py-2 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between gap-2">
          <div className="flex items-center space-x-1.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[var(--border-subtle)]" />
            <span className="w-2 h-2 rounded-full bg-[var(--border-subtle)]" />
            <span className="w-2 h-2 rounded-full bg-[var(--border-focus)]" />
            <span className="text-[10px] font-mono text-[var(--text-tertiary)] truncate ml-1.5">
              {currentSlot.title}
            </span>
          </div>

          <div className="flex items-center space-x-1 shrink-0" onClick={(e) => e.stopPropagation()}>
            {slots.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`w-4 h-4 rounded-[3px] font-mono text-[9px] flex items-center justify-center transition-colors ${
                  idx === activeIndex
                    ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold'
                    : 'bg-[var(--bg-default)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
                title={s.title}
              >
                {idx + 1}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="w-5 h-4 rounded-[3px] bg-[var(--bg-default)] text-[var(--text-accent)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center transition-colors ml-0.5"
              title="Open Lightbox Modal"
            >
              <Maximize2 className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>

        {/* Viewport Area (16:9 Aspect Frame) */}
        <div
          className="relative aspect-[16/9] w-full bg-[var(--bg-primary)] flex flex-col items-center justify-center overflow-hidden"
          onClick={(e) => {
            e.stopPropagation();
            setIsLightboxOpen(true);
          }}
        >
          {effectiveSrc && (
            <img
              src={effectiveSrc}
              alt={currentSlot.title}
              className="w-full h-full object-cover"
              onError={() =>
                setBrokenPaths((prev) => ({
                  ...prev,
                  [currentSlot.id]: true
                }))
              }
            />
          )}

          {!isLoaded && (
            <ArchitecturalPlaceholderPreview
              slot={currentSlot}
              index={activeIndex}
              projectTitle={item.title}
            />
          )}
        </div>
      </div>

      {isLightboxOpen && (
        <div onClick={(e) => e.stopPropagation()}>
          <ProjectGallery
            item={item}
            images={slots}
            projectTitle={item.title}
            initialIndex={activeIndex}
            isOpen={isLightboxOpen}
            onClose={() => setIsLightboxOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export const ProjectDetailGallery: React.FC<{ item: ProjectItem | MigrationSlice }> = ({ item }) => (
  <ProjectGallery item={item} images={item.gallery} projectTitle={item.title} />
);

export default ProjectGallery;
