import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  className?: string;
  opacity?: number;
}

// Glyph set for the "digital rain" effect (katakana + hex) — Matrix-style.
const GLYPHS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>/{}[]#$%';

export const MatrixRain: React.FC<MatrixRainProps> = ({
  className = '',
  opacity = 0.14,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];
    let last = 0;
    const fpsInterval = 1000 / 30; // cap ~30fps for perf

    const resize = () => {
      w = canvas.width = Math.floor(canvas.offsetWidth);
      h = canvas.height = Math.floor(canvas.offsetHeight);
      columns = Math.max(1, Math.floor(w / fontSize));
      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * -h) / fontSize,
      );
    };

    const paint = () => {
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < columns; i++) {
        const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        ctx.fillStyle = 'rgba(15,118,110,0.85)';
        ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < fpsInterval) return;
      last = t;
      ctx.fillStyle = 'rgba(253,253,252,0.10)';
      ctx.fillRect(0, 0, w, h);
      paint();
    };

    // Under reduced motion, paint a single faint static frame and stop.
    if (reduced) {
      resize();
      ctx.fillStyle = 'rgba(253,253,252,1)';
      ctx.fillRect(0, 0, w, h);
      paint();
      return;
    }

    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(draw);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        last = 0;
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={'pointer-events-none block w-full h-full ' + className}
      style={{ opacity }}
    />
  );
};
