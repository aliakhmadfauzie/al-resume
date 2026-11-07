import React, { useEffect, useState, useRef, useCallback } from 'react';

// ============================================================
// Types
// ============================================================
export interface AnimatedTitleProps {
  /** Array of phrases to cycle through */
  phrases: string[];
  /** Typing speed in ms per character */
  typingSpeed?: number;
  /** Deleting speed in ms per character */
  deletingSpeed?: number;
  /** Pause time at full phrase in ms */
  pauseTime?: number;
  /** CSS class name */
  className?: string;
}

// ============================================================
// Component
// ============================================================
export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
  className = '',
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tick = useCallback(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    if (!currentPhrase) return;

    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return;
    }

    if (!isDeleting) {
      // Typing
      if (currentText.length < currentPhrase.length) {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
      } else {
        // Finished typing — pause before deleting
        setIsPaused(true);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        setCurrentText(currentText.slice(0, currentText.length - 1));
      } else {
        // Move to next phrase
        setIsDeleting(false);
        setIsPaused(false);
        setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
      }
    }
  }, [currentText, currentPhraseIndex, isDeleting, isPaused, phrases, pauseTime]);

  useEffect(() => {
    const delay = isPaused ? pauseTime : isDeleting ? deletingSpeed : typingSpeed;
    timeoutRef.current = setTimeout(tick, delay);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [tick, isPaused, isDeleting, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className} aria-label={phrases.join(', ')}>
      {currentText}
      <span
        aria-hidden="true"
        className="animated-title-cursor"
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1em',
          backgroundColor: 'currentColor',
          marginLeft: '2px',
          verticalAlign: 'text-bottom',
          animation: 'blink 1s step-end infinite',
        }}
      />
    </span>
  );
};
