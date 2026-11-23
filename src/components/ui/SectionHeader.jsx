import React from 'react';
import { Badge } from './Badge';

export const SectionHeader = ({
  badge,
  badgeVariant = 'blue',
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClass = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
  };

  return (
    <div className={`flex flex-col max-w-4xl mb-14 md:mb-20 ${alignClass[align]} ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5F7FC] tracking-tight leading-[1.12]">
        {title}{' '}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] via-[#7B96FF] to-[#8B5CF6] glow-text-blue">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-[#A8B1C2] leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
