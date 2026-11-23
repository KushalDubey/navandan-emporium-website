import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  onClick,
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold tracking-tight transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#090B12] disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 shadow-lg',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#3898FF] via-[#4F75FF] to-[#8B5CF6] text-[#F5F7FC] hover:shadow-[0_0_35px_rgba(56,152,255,0.55)] border border-blue-300/30 hover:border-white/50 focus:ring-[#3898FF]',
    secondary: 'bg-[#141B2B] hover:bg-[#1C253B] text-[#F5F7FC] border border-white/12 hover:border-[#3898FF]/60 backdrop-blur-xl shadow-sm hover:shadow-[0_0_25px_-5px_rgba(56,152,255,0.3)] focus:ring-blue-400',
    ghost: 'text-[#A8B1C2] hover:text-[#F5F7FC] hover:bg-white/[0.06] border border-transparent focus:ring-slate-500',
    outline: 'border border-[#3898FF]/50 text-[#3898FF] hover:text-[#F5F7FC] hover:bg-[#3898FF]/15 hover:border-[#3898FF] shadow-[0_0_20px_-3px_rgba(56,152,255,0.3)] focus:ring-[#3898FF]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {/* Subtle Light-Sweep Hover Overlay */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
