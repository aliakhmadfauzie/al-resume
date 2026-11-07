import React, { useState, useEffect, useCallback } from 'react';
import { testimonialsData } from '../data/resumeData';
import { TestimonialItem } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Building2,
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const total = testimonialsData.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlaying, handleNext]);

  const current: TestimonialItem = testimonialsData[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="label-mono mb-4 block">
              05 — Executive Endorsements & Feedback
            </span>
            <h2 className="font-serif-display italic text-4xl sm:text-5xl md:text-6xl font-light text-[#121212] tracking-tight">
              Professional Testimonials
            </h2>
            <p className="text-sm sm:text-base font-light text-[#444440] max-w-2xl mt-3 leading-relaxed">
              Direct feedback from enterprise stakeholders, engineering leads, and operations directors on digital modernization, mobile architecture, and service delivery.
            </p>
          </div>

          {/* Controls: Prev, Next, Play/Pause */}
          <div className="flex items-center gap-1.5 bg-[#f7f7f0] p-1.5 border border-[#e0e0d8] self-start md:self-auto font-mono-code text-xs">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 text-[#121212] hover:bg-[#e0e0d8] transition-colors"
              title={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
              aria-label={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handlePrev}
              id="testimonial-prev-btn"
              className="p-1.5 text-[#121212] hover:bg-[#e0e0d8] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-2 text-[0.7rem] uppercase tracking-wider text-[#121212]">
              {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              onClick={handleNext}
              id="testimonial-next-btn"
              className="p-1.5 text-[#121212] hover:bg-[#e0e0d8] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Active Slide */}
        <div className="bg-[#f7f7f0] border border-[#121212] p-8 sm:p-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Quote */}
            <div className="lg:col-span-8 space-y-6">
              <div className="label-mono text-[#6b6b63]">
                Scope: {current.projectOrScope}
              </div>

              <blockquote className="font-serif-display italic text-2xl sm:text-3xl md:text-4xl font-light text-[#121212] leading-snug">
                "{current.content}"
              </blockquote>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#e0e0d8]">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#fdfdfc] text-[#444440] border border-[#e0e0d8]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Profile */}
            <div className="lg:col-span-4 bg-[#fdfdfc] border border-[#e0e0d8] p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[#e0e0d8] overflow-hidden bg-[#f7f7f0] flex-shrink-0 flex items-center justify-center font-serif-display italic text-lg text-[#121212]">
                  {current.avatar ? (
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover grayscale"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    current.name.split(' ').map((n) => n[0]).join('')
                  )}
                </div>
                <div>
                  <h4 className="font-serif-display italic text-xl font-normal text-[#121212]">
                    {current.name}
                  </h4>
                  <p className="label-mono text-[#6b6b63]">
                    {current.role}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e0e0d8] space-y-1.5 text-xs text-[#444440]">
                <div className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-[#6b6b63]" />
                  <span className="font-medium text-[#121212]">{current.company}</span>
                </div>
                {current.relationship && (
                  <div className="font-mono-code text-[0.65rem] text-[#6b6b63] uppercase tracking-wider">
                    Rel: {current.relationship}
                  </div>
                )}
                <div className="font-mono-code text-[0.65rem] text-[#6b6b63] uppercase tracking-wider">
                  Date: {current.date}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Author Selector Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {testimonialsData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleSelect(idx)}
              className={`px-3 py-1.5 border text-[0.7rem] font-mono-code uppercase tracking-wider transition-all ${
                idx === currentIndex
                  ? 'bg-[#121212] border-[#121212] text-[#fdfdfc] font-medium'
                  : 'bg-[#f7f7f0] border-[#e0e0d8] text-[#444440] hover:text-[#121212] hover:border-[#121212]'
              }`}
            >
              {item.name.split(' ')[0]} ({item.company.split(' ')[0]})
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

