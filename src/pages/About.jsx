import React, { useState } from 'react';
import {
  Users,
  ArrowUpRight,
  Building2,
  Sparkles,
  ShieldCheck,
  Award,
  Zap,
  CheckCircle2,
  Layers,
  ChevronRight,
  Briefcase,
  Cpu,
  Megaphone
} from 'lucide-react';
import { soundEngine } from '../utils/audio';
import RollingButton from '../components/RollingButton';

export default function About({ setActivePage, setCursorState }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const metrics = [
    { label: "INSTITUTIONAL TRACK RECORD", value: "15+", unit: "YEARS", desc: "Decades of verified boardroom advisory and technological delivery." },
    { label: "M&A VALUE ANALYZED", value: "₹1,800Cr+", unit: "TRANSACTIONS", desc: "High-stakes corporate valuation and synergy roadmaps." },
    { label: "INFRASTRUCTURE SLA", value: "99.999%", unit: "UPTIME", desc: "Sovereign high-availability cloud and private reasoning clusters." },
    { label: "ENTERPRISE CLIENTELE", value: "40+", unit: "BOARDS", desc: "Trusted by Tier-1 Indian conglomerates and global firms." }
  ];

  const leadershipTeam = [
    {
      name: "Rahul Kumar Singh",
      role: "Owner",
      creds: "Founder & Principal Executive",
      bio: "Visionary entrepreneur and driving force behind Agnivridhi India. Steering the firm's strategic expansion across corporate consulting, sovereign tech architectures, and high-velocity digital marketing, Rahul anchors the institution's commitment to exponential client elevation, uncompromising ethical governance, and transformational business outcomes."
    }
  ];

  const values = [
    {
      number: "01",
      pillar: "BUSINESS CONSULTATION",
      title: "Strategic Business Consultation",
      tagline: "Boardroom Intelligence & Quantitative Rigor",
      icon: Briefcase,
      page: "consultancy",
      description: "We empower corporate leadership with quantitative intelligence, market entry blueprints, capital efficiency frameworks, and M&A synergy advisory. Our consulting practice eliminates subjective conjecture in favor of data-backed, decisive enterprise execution."
    },
    {
      number: "02",
      pillar: "TECHNOLOGY & SYSTEMS",
      title: "Advanced Technology & Engineering",
      tagline: "Sovereign Cloud, AI & Zero-Trust Architecture",
      icon: Cpu,
      page: "it",
      description: "We architect mission-critical digital infrastructure—from sovereign cloud clusters and bespoke enterprise software to private AI reasoning sandboxes. Engineered for 99.999% uptime, bank-grade data isolation, and continuous operational resilience."
    },
    {
      number: "03",
      pillar: "PERFORMANCE MARKETING",
      title: "Growth & Performance Marketing",
      tagline: "Algorithmic Acquisition & Global Positioning",
      icon: Megaphone,
      page: "marketing",
      description: "We catalyze exponential market presence through data-driven customer acquisition funnels, programmatic media bidding, and institutional brand repositioning—turning enterprise capability into measurable, compound revenue momentum."
    }
  ];

  return (
    <div className="w-full bg-[#060A17] text-white pt-28 pb-20 relative select-none">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <section className="relative min-h-[500px] sm:min-h-[580px] flex items-center py-20 sm:py-28 overflow-hidden bg-[#060A17] border-b border-[#D4AF37]/30">
        {/* Background Visual: Corporate City & Golden Data Waves */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src="/images/corporate_hero.webp"
            alt="Agnivridhi India Corporate Firm"
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-60 filter contrast-125 saturate-[1.1]"
          />
          {/* Readability scrims */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060A17] via-[#060A17]/80 to-transparent w-full lg:w-3/5 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060A17] via-transparent to-[#060A17]/60 z-[1]" />
        </div>

        <div className="hoy-container relative z-10 w-full">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B132B] border border-[#D4AF37]/30 font-mono text-xs text-[#D4AF37]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
              <span>CORPORATE PROFILE & ETHOS // ESTABLISHED INDIA</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95]">
              CATALYZING <span className="text-[#D4AF37]">EXPONENTIAL</span> CORPORATE ELEVATION.
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#C5CAD6] leading-relaxed font-light max-w-3xl">
              Agnivridhi India is a premier corporate consultancy, deep-tech engineering, and growth marketing powerhouse headquartered in Noida (Delhi NCR), unifying strategic boardroom intelligence with mission-critical digital execution.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* KEY TELEMETRY METRICS WITH HOVER EFFECTS             */}
      {/* ---------------------------------------------------- */}
      <section className="hoy-container py-14 border-b border-[#D4AF37]/20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              onMouseEnter={() => {
                soundEngine.playHover();
                setCursorState && setCursorState({ text: 'METRIC', type: 'hover' });
              }}
              onMouseLeave={() => setCursorState && setCursorState({ text: '', type: 'default' })}
              className="p-6 rounded-2xl bg-[#0B132B]/80 border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:bg-[#0B132B] shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:-translate-y-1.5 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group relative overflow-hidden cursor-default"
            >
              {/* Top micro light reflection */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37] transition-all duration-500" />

              <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider block font-bold mb-2">
                {m.label}
              </span>
              <div className="font-display font-black text-3xl sm:text-4xl text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                {m.value}
              </div>
              <div className="font-mono text-[11px] text-[#C5CAD6] uppercase tracking-wider mt-0.5">
                {m.unit}
              </div>
              <p className="font-sans text-xs text-zinc-400 mt-2 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* OUR PHILOSOPHY & VALUES (HOVER CARDS)                */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 hoy-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#D4AF37]/20 mb-16">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-2 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
              // TRI-PILLAR ENTERPRISE CONVERGENCE
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              OUR CORE PHILOSOPHY
            </h2>
          </div>
          <p className="font-mono text-xs text-[#C5CAD6] max-w-sm uppercase">
            CONSULTANCY • DEEP TECHNOLOGY • PERFORMANCE MARKETING
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {values.map((v) => {
            const IconComp = v.icon;
            return (
              <div
                key={v.number}
                onMouseEnter={() => {
                  soundEngine.playHover();
                  setCursorState && setCursorState({ text: v.pillar, type: 'hover' });
                }}
                onMouseLeave={() => setCursorState && setCursorState({ text: '', type: 'default' })}
                onClick={() => {
                  soundEngine.playClick();
                  setActivePage(v.page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="relative p-8 sm:p-9 rounded-3xl bg-[#0B132B]/85 border border-[#D4AF37]/25 hover:border-[#D4AF37] shadow-xl hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_35px_rgba(212,175,55,0.25)] hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                {/* 1. Ambient Golden Radial Spotlight on Hover */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#D4AF37]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* 2. Precision Corner Bracket Accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]/25 rounded-tr-3xl group-hover:border-[#D4AF37] group-hover:scale-105 transition-all duration-500 pointer-events-none" />

                <div className="space-y-5 relative z-10">
                  {/* Card Header with Index & Domain Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#D4AF37] font-bold tracking-widest px-3 py-1 rounded bg-[#060A17] border border-[#D4AF37]/35 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.4)] transition-all duration-300">
                      [ {v.number} ]
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-[#060A17] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#060A17] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300">
                      <IconComp size={18} />
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider block font-bold mb-1">
                      {v.pillar}
                    </span>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all duration-300 leading-snug">
                      {v.title}
                    </h3>
                    <div className="font-mono text-xs text-[#C5CAD6] mt-1 font-semibold uppercase tracking-wider">
                      {v.tagline}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#C5CAD6] group-hover:text-zinc-200 leading-relaxed transition-colors duration-300 font-light">
                    {v.description}
                  </p>
                </div>

                {/* Bottom Interactive Indicator */}
                <div className="relative z-10 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between font-mono text-[11px] text-zinc-400 group-hover:text-[#D4AF37] transition-all duration-300 mt-6">
                  <span className="font-bold">VIEW PRACTICE REPOSITORY</span>
                  <div className="w-6 h-6 rounded-full bg-[#060A17] border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#060A17] group-hover:translate-x-1 transition-all duration-300">
                    <ChevronRight size={13} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* LEADERSHIP & ADVISORY PODS (HOVER ENHANCED)          */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-[#060A17] border-y border-[#D4AF37]/20">
        <div className="hoy-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#D4AF37]/20 mb-16">
            <div>
              <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-2 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
                // EXECUTIVE LEADERSHIP
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                LEADERSHIP & VISION
              </h2>
            </div>
            <p className="font-mono text-xs text-[#C5CAD6] max-w-sm uppercase">
              FOUNDING STEWARDSHIP ANCHORING STRATEGY, ENGINEERING & ELEVATION
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {leadershipTeam.map((leader, idx) => (
              <div
                key={idx}
                onMouseEnter={() => {
                  soundEngine.playHover();
                  setCursorState && setCursorState({ text: 'OWNER', type: 'hover' });
                }}
                onMouseLeave={() => setCursorState && setCursorState({ text: '', type: 'default' })}
                className="relative p-8 sm:p-12 rounded-3xl bg-[#0B132B]/90 border border-[#D4AF37]/35 hover:border-[#D4AF37] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(212,175,55,0.3)] hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group overflow-hidden cursor-default space-y-6"
              >
                {/* Ambient Card Sheen */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-[#D4AF37]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]/30 rounded-tr-3xl group-hover:border-[#D4AF37] group-hover:scale-105 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  {/* Avatar Icon Box with Transform on Hover */}
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-[#080E21] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#060A17] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shrink-0">
                    <Users size={32} />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                        {leader.name}
                      </h3>
                      <span className="px-3.5 py-1 rounded-full bg-[#D4AF37] text-[#060A17] font-mono text-xs font-black uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                        {leader.role}
                      </span>
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-[#D4AF37] font-bold uppercase tracking-wider">
                      {leader.creds}
                    </div>
                  </div>
                </div>

                <p className="relative z-10 font-sans text-sm sm:text-base text-[#C5CAD6] group-hover:text-zinc-100 leading-relaxed pt-4 border-t border-[#D4AF37]/20 transition-colors duration-300 font-light">
                  {leader.bio}
                </p>

                {/* Bottom Verification Pip */}
                <div className="relative z-10 pt-4 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-zinc-400 group-hover:text-[#D4AF37] transition-colors">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#D4AF37]" />
                    <span>FOUNDER & PRINCIPAL STEWARD // AGNIVRIDHI INDIA</span>
                  </span>
                  <span className="font-bold font-mono text-[#D4AF37]">[ NOIDA SECTOR-62 HQ ]</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* CORPORATE HEADQUARTERS & CAMPUS (HOVER ELEVATED)     */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 hoy-container">
        <div
          onMouseEnter={() => {
            soundEngine.playHover();
            setCursorState && setCursorState({ text: 'HQ NOIDA', type: 'hover' });
          }}
          onMouseLeave={() => setCursorState && setCursorState({ text: '', type: 'default' })}
          className="relative p-8 sm:p-12 rounded-3xl bg-[#0B132B]/90 border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-2xl hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col lg:flex-row items-center justify-between gap-8 group overflow-hidden"
        >
          {/* Ambient Sheen */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D4AF37] px-3 py-1 rounded-full bg-[#060A17] border border-[#D4AF37]/30">
              <Building2 size={15} className="group-hover:scale-125 transition-transform duration-300" />
              <span>HEADQUARTERS // NOIDA SECTOR 62 CAMPUS</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase group-hover:text-[#D4AF37] transition-colors duration-300 tracking-tight">
              B-750, TOWER-B, ITHUM, SECTOR 62, NOIDA
            </h3>
            <p className="font-sans text-sm text-[#C5CAD6] group-hover:text-zinc-200 leading-relaxed font-light transition-colors duration-300">
              Located adjacent to the Noida Electronic City Metro Station (201301, UP), our corporate campus houses sovereign AI research labs, boardroom strategy suites, and 24/7 mission-critical operations centers.
            </p>
          </div>

          <RollingButton
            variant="primary"
            onClick={() => setActivePage('connect')}
            className="relative z-10 !px-8 !py-4 shadow-xl shrink-0"
            icon={ArrowUpRight}
          >
            REQUISITION ENGAGEMENT
          </RollingButton>
        </div>
      </section>
    </div>
  );
}

