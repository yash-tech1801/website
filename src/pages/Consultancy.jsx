import React from 'react';
import { Briefcase, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import ConsultancyHeroBg from '../components/ConsultancyHeroBg';

export default function Consultancy({ setActivePage }) {
  const practiceAreas = [
    {
      title: "Sovereign Market Entry & Scale",
      desc: "Comprehensive market viability analysis, regulatory compliance, capital structuring, and strategic localization roadmaps for pan-India and APAC expansion.",
      metrics: "Average 14-Month Market Leadership Acceleration"
    },
    {
      title: "M&A Strategy & Post-Merger Synergy",
      desc: "Forensic technological audits, quantitative synergy evaluation, due diligence, and seamless organizational integration for high-stakes acquisitions.",
      metrics: "₹1,800Cr+ Cumulative M&A Transaction Value Analyzed"
    },
    {
      title: "Unit Economics & Capital Efficiency",
      desc: "Granular cost decomposition, operating margin optimization, cash flow restructuring, and capital runway maximization for growth-stage enterprises.",
      metrics: "+34% Average EBITDA Margin Improvement"
    },
    {
      title: "Executive Board Advisory & Governance",
      desc: "Direct confidential advisory for CXOs and Board of Directors on disruptive technologies, corporate risk mitigation, and generational growth strategies.",
      metrics: "Trusted by 40+ Corporate Boards Across India"
    }
  ];

  const methodology = [
    { step: "01", title: "Diagnostic Forensic Audit", desc: "Granular audit of balance sheets, operating pipelines, cost-centers, and sovereign competitive advantages." },
    { step: "02", title: "Strategic Roadmap Formulation", desc: "Developing mathematical models, risk assessment matrices, and clear quarterly execution milestones." },
    { step: "03", title: "Execution Pod Deployment", desc: "Embedding senior Agnivridhi advisory partners directly into executive workflows for frictionless delivery." },
    { step: "04", title: "Quantifiable Value Realization", desc: "Tracking EBITDA expansion, regulatory compliance milestones, and market capital lift." }
  ];

  return (
    <div className="w-full bg-[#080E21] text-white pt-28 pb-20">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <section className="relative min-h-[560px] sm:min-h-[640px] flex items-center py-20 sm:py-28 overflow-hidden bg-[#060A17] border-b border-[#D4AF37]/30">
        <ConsultancyHeroBg />

        <div className="hoy-container relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B132B] border border-[#D4AF37]/30 font-mono text-xs text-[#D4AF37]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
              <span>PRACTICE AREA // [ 01 ] CORPORATE CONSULTANCY</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95]">
              STRATEGIC CLARITY. <br />
              <span className="text-[#D4AF37]">DECISIVE</span> EXECUTION.
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#C5CAD6] leading-relaxed font-light">
              We empower corporate leadership and boardrooms with rigorous quantitative intelligence, market entry blueprints, capital efficiency frameworks, and M&A synergy advisory.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* PRACTICE AREAS                                       */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 hoy-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#D4AF37]/20 mb-16">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-2 font-bold">
              // ADVISORY SPECIALIZATIONS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              CORE CONSULTANCY DOMAINS
            </h2>
          </div>
          <p className="font-mono text-xs text-[#C5CAD6] max-w-sm uppercase">
            STRUCTURED INTERVENTIONS FOR TIER-1 CORPORATIONS AND CONGLOMERATES
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practiceAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/25 space-y-4 hover:border-[#D4AF37] transition-colors group shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#D4AF37] font-bold tracking-widest">
                  [ PRACTICE AREA 0{idx + 1} ]
                </span>
                <Briefcase size={16} className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors" />
              </div>
              <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">
                {area.title}
              </h3>
              <p className="font-sans text-sm text-[#C5CAD6] leading-relaxed">
                {area.desc}
              </p>
              <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center gap-2 font-mono text-xs text-[#D4AF37] font-semibold">
                <CheckCircle2 size={14} />
                <span>{area.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* METHODOLOGY                                          */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-[#060A17] border-y border-[#D4AF37]/20">
        <div className="hoy-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#D4AF37]/20 mb-16">
            <div>
              <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-2 font-bold">
                // EXECUTION PIPELINE
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                HOW WE ADVISE & DELIVER
              </h2>
            </div>
            <p className="font-mono text-xs text-[#C5CAD6] max-w-sm uppercase">
              TRANSPARENT 4-PHASE STRATEGY IMPLEMENTATION PROTOCOL
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step) => (
              <div key={step.step} className="p-8 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/25 space-y-4">
                <div className="font-mono text-xl font-bold text-[#D4AF37]">
                  [ {step.step} ]
                </div>
                <h3 className="font-display font-bold text-lg text-white uppercase">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-[#C5CAD6] leading-relaxed">
                  {step.desc}
                </p>
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
              BOARDROOM COMMISSION
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase">
              REQUISITION A STRATEGIC CONSULTANCY BRIEFING
            </h3>
            <p className="font-sans text-sm text-[#C5CAD6]">
              Mobilize our Managing Partners in Noida (Delhi NCR) for a confidential advisory audit under mutual institutional NDA.
            </p>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              setActivePage('connect');
            }}
            className="px-8 py-4 rounded-full bg-[#D4AF37] text-[#060A17] font-display font-black text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-[#DFB15B] hover:shadow-[0_0_16px_rgba(212,175,55,0.7)] hover:scale-105 transition-all cursor-pointer shrink-0"
          >
            <span>SCHEDULE STRATEGY SESSION</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
