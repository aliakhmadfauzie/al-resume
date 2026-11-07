import React from 'react';

interface ShaderBackgroundProps {
  intensity?: number;
}

export const ShaderBackground: React.FC<ShaderBackgroundProps> = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        backgroundColor: '#fdfdfc',
        transition: 'opacity 0.6s ease',
      }}
    >
      {/* Subtle architectural dot grid texture across the background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: 'radial-gradient(#e0e0d8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Top-right corner architectural dot-grid accent */}
      <div
        className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none opacity-70"
        style={{
          backgroundImage: 'radial-gradient(#d4d4cc 1.2px, transparent 1.2px)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
        }}
      />
      {/* Subtle bottom-left warm ambient gradient */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #ecece4 0%, transparent 70%)',
        }}
      />
    </div>
  );
};


