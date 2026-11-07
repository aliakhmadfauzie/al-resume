import React from 'react';
import type { HonorAwardItem } from '../types';

interface AwardEvidenceGalleryProps {
  images?: HonorAwardItem['evidenceImages'];
  compact?: boolean;
}

/** Only genuine supplied certificate photos belong in this gallery. */
export const AwardEvidenceGallery: React.FC<AwardEvidenceGalleryProps> = ({ images, compact = false }) => {
  if (!images?.length) return null;

  return (
    <div className="pt-2 space-y-2" aria-label="Photographic award evidence">
      <div className={`grid gap-2 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2 sm:grid-cols-3'}`}>
        {images.map((image) => (
          <a
            key={image.src}
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            title={`Open certificate photo: ${image.caption}`}
            className="block group rounded-[var(--radius-sm)] overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--border-focus)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)] bg-[var(--bg-primary)]"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className={`w-full object-contain bg-[#151418] transition-transform duration-200 group-hover:scale-[1.015] ${compact ? 'h-24' : 'h-36 sm:h-40'}`}
            />
            <span className="block px-2 py-1.5 text-[10px] leading-tight text-[var(--text-secondary)] font-mono">
              {image.caption}
            </span>
          </a>
        ))}
      </div>
      {!compact && (
        <p className="text-[11px] text-[var(--text-tertiary)]">
          Certificate photographs supplied by the award recipient. Select an image to inspect the original text.
        </p>
      )}
    </div>
  );
};
