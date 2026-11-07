import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';

interface ScrollProgressProps {
  onScrollToTop?: () => void;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ onScrollToTop }) => {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowTopBtn(latest > 350);
    });
  }, [scrollY]);

  const handleScrollTop = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Page Scroll Indicator Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#009de0] via-[#8aceff] to-[#009de0] origin-left z-50 shadow-sm shadow-[#009de0]/50"
        style={{ scaleX }}
      />

      {/* Floating Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={
          showTopBtn
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.8, y: 20 }
        }
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={handleScrollTop}
        id="scroll-to-top-btn"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#18181d]/90 hover:bg-[#009de0] text-neutral-300 hover:text-white border border-white/15 hover:border-[#009de0] shadow-2xl backdrop-blur-md transition-colors group ${
          showTopBtn ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-label="Scroll to top of page"
        title="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
      </motion.button>
    </>
  );
};
