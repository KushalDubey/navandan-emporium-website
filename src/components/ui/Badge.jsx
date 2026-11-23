import React from 'react';

export const Badge = ({
  children,
  variant = 'blue',
  className = '',
  dot = true,
}) => {
  const variantStyles = {
    blue: 'bg-[#3898FF]/15 text-[#3898FF] border-[#3898FF]/35 shadow-[0_0_15px_-3px_rgba(56,152,255,0.35)]',
    violet: 'bg-[#8B5CF6]/15 text-[#A78BFA] border-[#8B5CF6]/35 shadow-[0_0_15px_-3px_rgba(139,92,246,0.35)]',
    cyan: 'bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/35 shadow-[0_0_15px_-3px_rgba(0,240,255,0.35)]',
    neutral: 'bg-white/[0.06] text-[#F5F7FC] border-white/15',
  };

  const dotColors = {
    blue: 'bg-[#3898FF] shadow-[0_0_10px_#3898FF]',
    violet: 'bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]',
    cyan: 'bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]',
    neutral: 'bg-slate-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded-full border backdrop-blur-xl font-medium ${variantStyles[variant]} ${className}`}
    >
      {dot && <span className={`w-2 h-2 rounded-full ${dotColors[variant]}`} />}
      <span>{children}</span>
    </span>
  );
};
