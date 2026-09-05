import React from 'react';
import { TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import MarketingHeroBg from '../components/MarketingHeroBg';

export default function MarketingServices({ setActivePage }) {
  const marketingPillars = [
    {
      title: "Algorithmic Programmatic Media Buying",
      desc: "Custom high-frequency media bidding algorithms operating across Google, Meta, DSPs, and programmatic ad exchanges with real-time ROAS optimization.",
      metrics: "+280% Average ROAS Multiplier"
    },
    {
      title: "Institutional Brand Repositioning",
      desc: "High-contrast visual design systems, luxury corporate brand guidelines, editorial narratives, and cinematic production engineered for industry authority.",
      metrics: "Global Market Reach Across 30+ Countries"
    },
    {
      title: "Multi-Touch Attribution & Telemetry",
      desc: "First-party server-side tracking, statistical econometric modeling, and real-time revenue attribution dashboards without third-party pixel leakage.",
      metrics: "100% Deterministic Attribution Tracking"
    },
    {
      title: "48-Hour Rapid Creative Production Pipeline",
      desc: "High-velocity modular video generation, 3D motion graphics, and conversion-optimized ad creatives delivered at the speed of culture and market trends.",
      metrics: "500+ High-Performance Creatives Deployed / Mo"
    }
  ];

  const channelCapabilities = [
    { title: "PERFORMANCE ADVERTISING", items: ["Google Search & Performance Max", "Meta High-Scale Funnels", "LinkedIn B2B ABM Marketing", "Programmatic DSP Networks"] },
    { title: "CREATIVE & PRODUCTION", items: ["Cinematic 4K Brand Videos", "3D Product CGI & Motion", "High-Converting Landers", "Interactive Web Visualizers"] },
    { title: "ORGANIC & AUTHORITY", items: ["Enterprise Search Engine Mastery", "Executive PR & Tier-1 Media", "B2B Thought Leadership", "Institutional Whitepapers"] },
    { title: "RETENTION & CRM ENGINES", items: ["Automated Lifecycle Flows", "Multi-Channel WhatsApp/SMS", "Dynamic Customer Segmentation", "LTV Expansion Modeling"] }
  ];

  return (
    <div className="w-full bg-[#080E21] text-white pt-28 pb-20">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <section className="relative min-h-[560px] sm:min-h-[640px] flex items-center py-20 sm:py-28 overflow-hidden bg-[#060A17] border-b border-[#D4AF37]/30">
        <MarketingHeroBg />

        <div className="hoy-container relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B132B] border border-[#D4AF37]/30 font-mono text-xs text-[#D4AF37]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
              <span>PRACTICE AREA // [ 03 ] MARKETING SERVICES</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95]">
              EXPONENTIAL REACH. <br />
              <span className="text-[#D4AF37]">DATA-DRIVEN</span> MOMENTUM.
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#C5CAD6] leading-relaxed font-light">
              We engineer algorithmic performance marketing engines, institutional brand authority, and high-velocity conversion pipelines that transform customer acquisition into a science.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* MARKETING PILLARS                                    */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 hoy-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#D4AF37]/20 mb-16">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-2 font-bold">
              // GROWTH INFRASTRUCTURE
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              CORE MARKETING SPECIALIZATIONS
            </h2>
          </div>
          <p className="font-mono text-xs text-[#C5CAD6] max-w-sm uppercase">
            SCIENTIFIC REVENUE GENERATION & BRAND DOMINANCE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketingPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/25 space-y-4 hover:border-[#D4AF37] transition-colors group shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#D4AF37] font-bold tracking-widest">
                  [ CAPABILITY 0{idx + 1} ]
                </span>
                <TrendingUp size={18} className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors" />
              </div>
              <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-[#C5CAD6] leading-relaxed">
                {pillar.desc}
              </p>
              <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center gap-2 font-mono text-xs text-[#D4AF37] font-semibold">
                <CheckCircle2 size={14} />
                <span>{pillar.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* OMNI-CHANNEL CAPABILITIES                            */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-[#060A17] border-y border-[#D4AF37]/20">
        <div className="hoy-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#D4AF37]/20 mb-16">
            <div>
              <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-2 font-bold">
                // CHANNEL MATRIX
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                FULL-FUNNEL EXECUTION
              </h2>
            </div>
            <p className="font-mono text-xs text-[#C5CAD6] max-w-sm uppercase">
              SEAMLESS CONVERGENCE ACROSS EVERY DIGITAL TOUCHPOINT
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {channelCapabilities.map((channel, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/25 space-y-4">
                <div className="font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  {channel.title}
                </div>
                <div className="space-y-2 pt-2">
                  {channel.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 font-sans text-xs text-zinc-300">
                      <CheckCircle2 size={12} className="text-[#D4AF37] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* CTA                                                  */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 hoy-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase font-bold">
              GROWTH COMMISSION
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase">
              IGNITE YOUR CORPORATE GROWTH ENGINE
            </h3>
            <p className="font-sans text-sm text-[#C5CAD6]">
              Commission a comprehensive go-to-market review, algorithmic media audit, or brand elevation campaign.
            </p>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              setActivePage('connect');
            }}
            className="px-8 py-4 rounded-full bg-[#D4AF37] text-[#060A17] font-display font-black text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-[#DFB15B] hover:shadow-[0_0_16px_rgba(212,175,55,0.7)] hover:scale-105 transition-all cursor-pointer shrink-0"
          >
            <span>LAUNCH GROWTH BRIEFING</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
