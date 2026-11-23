import React from 'react';

export const AmbientCanvas = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#090B12]">
      {/* Primary Top Electric Blue Orb */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[800px] md:w-[1100px] h-[550px] md:h-[750px] rounded-full opacity-30 md:opacity-40 blur-[140px] md:blur-[180px]"
        style={{
          background: 'radial-gradient(circle, #3898FF 0%, #1A75E8 35%, transparent 70%)',
        }}
      />
      
      {/* Secondary Violet Atmosphere Orb (Right) */}
      <div 
        className="absolute top-[25%] -right-[15%] w-[550px] md:w-[800px] h-[550px] md:h-[800px] rounded-full opacity-25 md:opacity-35 blur-[140px] md:blur-[180px]"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, #6D28D9 40%, transparent 70%)',
        }}
      />

      {/* Tertiary Cyan Pulse (Lower Left) */}
      <div 
        className="absolute top-[60%] -left-[15%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full opacity-20 md:opacity-30 blur-[130px] md:blur-[170px]"
        style={{
          background: 'radial-gradient(circle, #00F0FF 0%, #0284C7 45%, transparent 75%)',
        }}
      />

      {/* Bottom Center Violet Grounding Glow */}
      <div 
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[400px] rounded-full opacity-20 md:opacity-25 blur-[160px]"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
        }}
      />

      {/* Precision High-Tech Micro-Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Subtle Ethereal Noise / Crosshairs */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)`,
          backgroundSize: '96px 96px',
        }}
      />
    </div>
  );
};
