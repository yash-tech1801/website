import React from 'react';
import { 
  ArrowUpRight, 
  ArrowDown, 
  Activity, 
  MapPin 
} from 'lucide-react';
import RollingButton from './RollingButton';
import CyberHeroBackground from './CyberHeroBackground';
import { HeadlineTextRoll } from './Skiper58';
import { soundEngine } from '../utils/audio';

export default function HeroSection({
  setActivePage,
  setCursorState
}) {
  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#060A17]">
      {/* Stitch Cyber-Executive Background System: WebGL Shader + Node Constellation + Cyber Grid */}
      <CyberHeroBackground />

      {/* Top Status & HUD Badge Bar */}
      <div className="hoy-container relative z-10 pt-2 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Live Status Pill with Glowing Ring */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-[#D4AF37]/35 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <div className="relative flex items-center justify-center w-3 h-3">
              <div className="absolute w-full h-full rounded-full bg-[#D4AF37] status-pulse-ring" />
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
            </div>
            <span className="font-mono text-xs text-[#D4AF37] font-bold tracking-wider uppercase">
              [ CORPORATE CONSULTANCY • TECH SERVICES • MARKETING ]
            </span>
          </div>

          {/* Coordinate & HQ Telemetry */}
          <div className="flex items-center gap-4 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060A17]/80 border border-white/10 backdrop-blur-md">
              <MapPin size={13} className="text-[#D4AF37]" />
              <span>HQ_COORD: 28.6280° N, 77.3649° E</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060A17]/80 border border-[#D4AF37]/20 text-[#D4AF37]">
              <Activity size={13} className="animate-pulse" />
              <span>LIVE SYSTEM STATUS: OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Kinetic Hero Core */}
      <div 
        className="hoy-container relative z-10 my-auto py-10"
        onMouseLeave={() => setCursorState && setCursorState({ text: '', type: 'default' })}
      >
        {/* Kinetic Oversized Headline */}
        <h1 
          className="select-none"
          onMouseLeave={() => setCursorState && setCursorState({ text: '', type: 'default' })}
        >
          <HeadlineTextRoll
            lines={[
              "TRANSFORMING CORPORATE",
              "STRATEGY & TECHNOLOGY AT",
              "THE SPEED OF BUSINESS."
            ]}
            lineClassName="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.92] uppercase text-white"
            rollColorClass="text-[#D4AF37]"
            initialColorClass="text-white"
            onHover={() => {
              soundEngine.playHover();
              setCursorState && setCursorState({ text: 'ROLL', type: 'hover' });
            }}
            onHoverEnd={() => {
              setCursorState && setCursorState({ text: '', type: 'default' });
            }}
          />
        </h1>

        {/* Subtitle & Action Trigger Bar */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-8 border-t border-[#D4AF37]/20">
          <div className="space-y-2 max-w-2xl">
            <p className="font-mono text-base sm:text-lg text-white uppercase tracking-wider font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Agnivridhi India. Unified solutions for exponential growth.
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#C5CAD6] leading-relaxed">
              The premier cyber-executive firm uniting boardroom M&A strategy, sovereign tier-4 cloud architectures, and algorithmic global marketing momentum.
            </p>
          </div>

          {/* Action Button Group */}
          <div className="flex flex-wrap items-center gap-4">
            <RollingButton
              variant="primary"
              onClick={() => {
                soundEngine.playClick();
                setActivePage('connect');
              }}
              icon={ArrowUpRight}
            >
              EXPLORE SOLUTIONS
            </RollingButton>

            <RollingButton
              variant="secondary"
              onClick={() => {
                soundEngine.playClick();
                const servElem = document.getElementById('services-section');
                if (servElem) {
                  servElem.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setActivePage('consultancy');
                }
              }}
            >
              OUR SERVICES
            </RollingButton>
          </div>
        </div>
      </div>

      {/* Bottom Footer HUD Bar / Scroll Lead */}
      <div className="hoy-container relative z-10 flex items-center justify-between pt-6 border-t border-[#D4AF37]/15 font-mono text-xs text-zinc-400">
        <div className="flex items-center gap-2 text-[#D4AF37]">
          <ArrowDown size={14} className="text-[#D4AF37] animate-bounce" />
          <span className="tracking-wider">SCROLL TO EXPLORE</span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-zinc-400">
          <span>NOIDA HQ</span>
          <span className="text-[#D4AF37]">•</span>
          <span>MUMBAI</span>
          <span className="text-[#D4AF37]">•</span>
          <span>BANGALORE</span>
          <span className="text-[#D4AF37]">•</span>
          <span>SINGAPORE</span>
        </div>
      </div>
    </section>
  );
}
