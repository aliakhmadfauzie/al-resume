import React, { useState, useEffect, useRef } from 'react';
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
  Check
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

interface ProjectCardGalleryPreviewProps {
  item: ProjectItem | MigrationSlice;
}

/**
 * Compact browser-framed gallery carousel displayed inside each project card
 * in ProjectsView and HomeView. Supports cycling through slides and instant upload.
 */
export const ProjectCardGalleryPreview: React.FC<ProjectCardGalleryPreviewProps> = ({ item }) => {
  const [slots, setSlots] = useState<ProjectGalleryItem[]>(() => getGalleryForItem(item));
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [brokenPaths, setBrokenPaths] = useState<Record<string, boolean>>({});
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  const handleQuickUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await compressImageFile(file);
      const updated = slots.map((s, idx) =>
        idx === activeIndex ? { ...s, imageUrl: dataUrl } : s
      );
      setSlots(updated);
      saveGalleryForItem(item.id, updated);
    } catch (err) {
      console.error('Failed to process image upload:', err);
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="rounded-[var(--radius-md)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] group-hover:border-[var(--border-focus)] overflow-hidden transition-colors">
      {/* Browser Window Top Bar */}
      <div className="px-3 py-2 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between gap-2">
        <div className="flex items-center space-x-1.5 min-w-0">
          <span className="w-2 h-2 rounded-full bg-[#262930]" />
          <span className="w-2 h-2 rounded-full bg-[#262930]" />
          <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
          <span className="text-[10px] font-mono text-[var(--text-tertiary)] truncate ml-1.5">
            {currentSlot.expectedPath}
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
                  ? 'bg-[var(--accent-blue)] text-white font-semibold'
                  : 'bg-[var(--bg-primary)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
              title={s.title}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Viewport Area (16:9 Aspect Frame) */}
      <div className="relative aspect-[16/9] w-full bg-[var(--bg-primary)] flex flex-col items-center justify-center overflow-hidden">
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

        {/* Architectural Placeholder Slot when image is not yet added */}
        {(!effectiveSrc || (brokenPaths[currentSlot.id] && !currentSlot.imageUrl)) && (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[var(--bg-primary)]">
            <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-tertiary)]">
              <span className="text-[#3b82f6] font-medium">
                GALLERY SLOT 0{activeIndex + 1} / 0{slots.length}
              </span>
              <span>16:9 PREVIEW READY</span>
            </div>

            <div className="my-auto text-center space-y-1.5 px-2">
              <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[#3b82f6] mx-auto">
                <ImageIcon className="w-4 h-4" />
              </div>
              <p className="text-xs font-medium text-[var(--text-primary)] line-clamp-1">
                {currentSlot.title}
              </p>
              <p className="text-[11px] text-[var(--text-tertiary)] line-clamp-1">
                {currentSlot.caption}
              </p>
            </div>

            <div
              className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)]"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-[10px] font-mono text-[var(--text-tertiary)] truncate max-w-[60%]">
                {currentSlot.expectedPath}
              </span>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center space-x-1 px-2 py-1 rounded-[4px] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[#3b82f6] border border-[var(--border-subtle)] text-[10px] font-mono transition-colors"
              >
                <Upload className="w-3 h-3" />
                <span>Add Image</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleQuickUpload}
              />
            </div>
          </div>
        )}

        {/* Overlay badge when an image IS present */}
        {currentSlot.imageUrl && (
          <div
            className="absolute bottom-2 right-2 flex items-center space-x-1.5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-2 py-1 rounded-[4px] bg-black/75 hover:bg-black text-white text-[10px] font-mono border border-white/15 flex items-center space-x-1 backdrop-blur-sm"
            >
              <Upload className="w-3 h-3 text-[#3b82f6]" />
              <span>Replace</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleQuickUpload}
            />
          </div>
        )}
      </div>
    </div>
  );
};

interface ProjectDetailGalleryProps {
  item: ProjectItem | MigrationSlice;
}

/**
 * Full interactive gallery workbench rendered inside ProjectDetailModal.
 * Lets the user browse slides, open a full-screen lightbox, upload local screenshots,
 * paste image URLs, or add/remove custom gallery slots.
 */
export const ProjectDetailGallery: React.FC<ProjectDetailGalleryProps> = ({ item }) => {
  const [slots, setSlots] = useState<ProjectGalleryItem[]>(() => getGalleryForItem(item));
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [brokenPaths, setBrokenPaths] = useState<Record<string, boolean>>({});
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [showUrlInput, setShowUrlInput] = useState<boolean>(false);
  const [customUrl, setCustomUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setSlots(getGalleryForItem(item));
    setActiveIndex(0);
    setShowUrlInput(false);
  }, [item]);

  const currentSlot = slots[activeIndex] || slots[0];
  if (!currentSlot) return null;

  const hasValidImage = (slot: ProjectGalleryItem) =>
    Boolean(slot.imageUrl || !brokenPaths[slot.id]);

  const currentSrc =
    currentSlot.imageUrl ||
    (!brokenPaths[currentSlot.id] ? currentSlot.expectedPath : undefined);

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await compressImageFile(file);
      const updated = slots.map((s, idx) =>
        idx === activeIndex ? { ...s, imageUrl: dataUrl } : s
      );
      setSlots(updated);
      saveGalleryForItem(item.id, updated);
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
    setSlots(updated);
    saveGalleryForItem(item.id, updated);
    setCustomUrl('');
    setShowUrlInput(false);
  };

  const handleClearSlotImage = () => {
    const updated = slots.map((s, idx) =>
      idx === activeIndex ? { ...s, imageUrl: undefined } : s
    );
    setSlots(updated);
    saveGalleryForItem(item.id, updated);
  };

  const handleAddSlot = () => {
    const nextNum = slots.length + 1;
    const newSlot: ProjectGalleryItem = {
      id: `${item.id}-custom-${Date.now()}`,
      title: `${item.title} — Screen 0${nextNum}`,
      caption: `Additional interface view or architectural diagram for ${item.title}.`,
      expectedPath: `/assets/gallery/${item.id}/0${nextNum}-screen.png`
    };
    const updated = [...slots, newSlot];
    setSlots(updated);
    setActiveIndex(updated.length - 1);
    saveGalleryForItem(item.id, updated);
  };

  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + slots.length) % slots.length);
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % slots.length);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-xs font-mono text-[var(--text-secondary)]">
          <ImageIcon className="w-4 h-4 text-[#3b82f6]" />
          <span>00 · Interface &amp; Architecture Gallery ({slots.length} Screens)</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] hover:bg-[var(--bg-surface-elevated)] text-[#3b82f6] border border-[var(--border-subtle)] text-xs font-mono transition-colors"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Screenshot</span>
          </button>
          <button
            type="button"
            onClick={() => setShowUrlInput(!showUrlInput)}
            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-mono transition-colors"
          >
            <Link2 className="w-3.5 h-3.5" />
            <span>Paste URL</span>
          </button>
          <button
            type="button"
            onClick={handleAddSlot}
            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-mono transition-colors"
            title="Add another screenshot slot"
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

      {/* Main Active Gallery Stage */}
      <div className="rounded-[var(--radius-md)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] overflow-hidden">
        {/* Browser Frame Bar */}
        <div className="px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#262930]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#262930]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
            <span className="text-xs font-mono text-[var(--text-secondary)] truncate ml-2">
              {currentSlot.title}
            </span>
          </div>

          <div className="flex items-center space-x-1.5 shrink-0">
            {currentSlot.imageUrl && (
              <button
                type="button"
                onClick={handleClearSlotImage}
                className="p-1 rounded-[4px] bg-[var(--bg-primary)] text-[var(--text-tertiary)] hover:text-amber-400 border border-[var(--border-subtle)]"
                title="Clear uploaded image from this slot"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              type="button"
              onClick={prevSlide}
              className="p-1 rounded-[4px] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]"
              aria-label="Previous gallery slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-[var(--text-tertiary)] px-1.5 tabular-nums">
              {activeIndex + 1} / {slots.length}
            </span>
            <button
              type="button"
              onClick={nextSlide}
              className="p-1 rounded-[4px] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]"
              aria-label="Next gallery slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="p-1 rounded-[4px] bg-[var(--bg-primary)] text-[#3b82f6] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]"
              title="Expand full-screen gallery view"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 16:9 Stage Viewport */}
        <div className="relative aspect-[16/9] w-full bg-[var(--bg-primary)] flex items-center justify-center overflow-hidden">
          {currentSrc && (
            <img
              src={currentSrc}
              alt={currentSlot.title}
              onClick={() => setIsLightboxOpen(true)}
              className="w-full h-full object-contain cursor-zoom-in"
              onError={() =>
                setBrokenPaths((prev) => ({
                  ...prev,
                  [currentSlot.id]: true
                }))
              }
            />
          )}

          {(!currentSrc || (brokenPaths[currentSlot.id] && !currentSlot.imageUrl)) && (
            <div className="w-full h-full p-6 flex flex-col justify-between bg-[var(--bg-primary)]">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)]">
                <span className="text-[#3b82f6]">
                  SCREEN SLOT 0{activeIndex + 1} · AWAITING IMAGE ASSET
                </span>
                <span>1920×1080 / 16:9</span>
              </div>

              <div className="my-auto max-w-md mx-auto text-center space-y-3">
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[#3b82f6] mx-auto">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-sm font-semibold text-[var(--text-primary)]">
                    {currentSlot.title}
                  </h5>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {currentSlot.caption}
                  </p>
                </div>
                <div className="pt-1 flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-[var(--radius-sm)] bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-medium transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Screenshot Now</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-tertiary)]">
                <span>Expected File Path:</span>
                <code className="text-[var(--text-secondary)]">public{currentSlot.expectedPath}</code>
              </div>
            </div>
          )}
        </div>

        {/* Caption Bar */}
        <div className="px-4 py-3 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            {currentSlot.caption}
          </p>
          <span className="text-[11px] font-mono text-[var(--text-tertiary)] shrink-0">
            {hasValidImage(currentSlot) ? 'Asset Loaded' : 'Placeholder Ready'}
          </span>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="grid grid-cols-3 gap-2.5">
        {slots.map((slot, idx) => {
          const isSelected = idx === activeIndex;
          const thumbSrc =
            slot.imageUrl || (!brokenPaths[slot.id] ? slot.expectedPath : undefined);
          return (
            <button
              key={slot.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`p-2.5 rounded-[var(--radius-sm)] border text-left transition-colors flex flex-col justify-between space-y-1.5 ${
                isSelected
                  ? 'bg-[var(--bg-surface-elevated)] border-[var(--border-focus)]'
                  : 'bg-[var(--bg-primary)] border-[var(--border-subtle)] hover:border-[var(--text-tertiary)]'
              }`}
            >
              <div className="flex items-center justify-between w-full text-[10px] font-mono">
                <span className={isSelected ? 'text-[#3b82f6] font-semibold' : 'text-[var(--text-tertiary)]'}>
                  0{idx + 1} · Screen
                </span>
                <span className="text-[var(--text-tertiary)]">
                  {thumbSrc && (!brokenPaths[slot.id] || slot.imageUrl) ? 'IMG' : 'SLOT'}
                </span>
              </div>
              <div className="text-xs font-medium text-[var(--text-primary)] truncate w-full">
                {slot.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Full-Screen Lightbox Overlay */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs font-mono text-[#3b82f6]">
                {item.title} · Screen 0{activeIndex + 1} of 0{slots.length}
              </span>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mt-0.5">
                {currentSlot.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-white border border-[var(--border-subtle)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="flex-1 flex items-center justify-center my-4 overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 p-2.5 rounded-full bg-[var(--bg-surface)]/90 text-white border border-[var(--border-subtle)] hover:border-[var(--border-focus)] z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {currentSrc && (!brokenPaths[currentSlot.id] || currentSlot.imageUrl) ? (
              <img
                src={currentSrc}
                alt={currentSlot.title}
                className="max-h-full max-w-full object-contain rounded-[var(--radius-md)] border border-[var(--border-subtle)]"
              />
            ) : (
              <div className="max-w-lg w-full p-8 rounded-[var(--radius-md)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center space-y-4">
                <ImageIcon className="w-10 h-10 text-[#3b82f6] mx-auto" />
                <div className="space-y-1">
                  <p className="text-base font-semibold text-[var(--text-primary)]">
                    {currentSlot.title}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">{currentSlot.caption}</p>
                </div>
                <p className="text-xs font-mono text-[var(--text-tertiary)]">
                  Drop file at: <code>public{currentSlot.expectedPath}</code>
                </p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-[var(--radius-sm)] bg-[var(--accent-blue)] text-white text-xs font-medium"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Screenshot</span>
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 p-2.5 rounded-full bg-[var(--bg-surface)]/90 text-white border border-[var(--border-subtle)] hover:border-[var(--border-focus)] z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            className="border-t border-[var(--border-subtle)] pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[var(--text-secondary)]"
            onClick={(e) => e.stopPropagation()}
          >
            <span>{currentSlot.caption}</span>
            <span className="font-mono text-[var(--text-tertiary)]">{currentSlot.expectedPath}</span>
          </div>
        </div>
      )}
    </div>
  );
};
