import React from 'react';
import { soundEngine } from '../utils/audio';

/**
 * RollingButton: Inspired by houseofyellow.nl button hover physics.
 * Features a vertical rolling flip label that slides up on hover while
 * duplicate text slides in from bottom with cubic-bezier transition.
 */
export default function RollingButton({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'dark'
  className = '',
  icon: Icon = null,
  type = 'button'
}) {
  const baseClasses = "group relative inline-flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 select-none cursor-pointer font-display font-black text-xs tracking-wider uppercase";

  const variantClasses = {
    primary: "bg-[#D4AF37] text-[#060A17] hover:bg-[#DFB15B] hover:shadow-[0_0_18px_rgba(212,175,55,0.7)] px-7 py-4",
    secondary: "bg-[#0B132B] text-white hover:bg-white/10 border border-[#D4AF37]/35 px-7 py-4",
    outline: "bg-transparent text-white border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 px-6 py-3.5",
    dark: "bg-[#060A17] text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-[#060A17] px-6 py-3.5"
  }[variant];

  return (
    <button
      type={type}
      onClick={(e) => {
        soundEngine.playClick();
        if (onClick) onClick(e);
      }}
      onMouseEnter={(e) => {
        soundEngine.playHover();
        if (onMouseEnter) onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        if (onMouseLeave) onMouseLeave(e);
      }}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {/* Rolling Label Container */}
      <span className="relative inline-block h-4 overflow-hidden leading-4">
        {/* Top original label */}
        <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
          {children}
        </span>
        {/* Bottom duplicate label (slides in from bottom) */}
        <span className="absolute left-0 top-full inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full" aria-hidden="true">
          {children}
        </span>
      </span>

      {/* Optional Trailing Icon */}
      {Icon && (
        <span className="ml-2 inline-flex items-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <Icon size={14} className="stroke-[3]" />
        </span>
      )}
    </button>
  );
}
