import React from 'react';
import { Cpu, Activity, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Features({ setActivePage }) {
  const featureGroups = [
    {
      category: "ENTERPRISE STRATEGY & ADVISORY",
      icon: Layers,
      items: [
        {
          title: "Sovereign Market Entry & Expansion",
          desc: "Data-driven regulatory, capital efficiency, and supply chain modeling for Tier-1 domestic and cross-border expansion."
        },
        {
          title: "Quantitative M&A Valuation Matrix",
          desc: "Algorithmic synergy modeling, forensic technological audits, and post-merger integration roadmaps."
        },
        {
          title: "Unit Economics Restructuring",
          desc: "Granular cost-center decomposition and margin optimization frameworks engineered for hyper-scale enterprises."
        }
      ]
    },
    {
      category: "MISSION-CRITICAL TECHNOLOGY & CLOUD",
      icon: Cpu,
      items: [
        {
          title: "Sovereign Data Isolation Sandboxes",
          desc: "Tier-4 secure multi-tenant air-gapped enclaves designed specifically for BFSI, healthcare, and enterprise data security."
        },
        {
          title: "99.999% SLA Distributed Cloud Architecture",
          desc: "Automated multi-region Kubernetes clusters with zero-downtime rolling updates and sub-10ms latency thresholds."
        },
        {
          title: "Private LLM & Reasoning Engines",
          desc: "On-premise and VPC-isolated generative AI models trained strictly on proprietary enterprise intellectual property."
        }
      ]
    },
    {
      category: "HYPER-SCALE MARKETING & INTELLIGENCE",
      icon: Activity,
      items: [
        {
          title: "Algorithmic Media & Growth Engine",
          desc: "Automated programmatic bidding and omni-channel acquisition algorithms operating across global media networks."
        },
        {
          title: "Real-Time Telemetry & Attribution",
          desc: "Multi-touch econometric modeling and live ROAS dashboards with zero pixel leakage or third-party dependency."
        },
        {
          title: "48-Hour Rapid Campaign Deployment",
          desc: "Institutional creative production pipelines delivering high-converting campaign assets at the speed of culture."
        }
      ]
    }
  ];

  const technicalSpecs = [
    { label: "SLA AVAILABILITY", value: "99.999%" },
    { label: "LATENCY THRESHOLD", value: "< 12ms" },
    { label: "DATA ENCRYPTION", value: "AES-256-GCM / Post-Quantum" },
    { label: "AUDIT COMPLIANCE", value: "SOC2 Type II / ISO 27001" },
    { label: "DEPLOYMENT VELOCITY", value: "48-Hour Pipeline" },
    { label: "AVERAGE VALUE LIFT", value: "+210% ROI Multiplier" }
  ];

  return (
    <div className="w-full bg-[#080E21] text-white pt-28 pb-20">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-[#060A17] border-b border-[#D4AF37]/20">
        <div className="hoy-container relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B132B] border border-[#D4AF37]/30 font-mono text-xs text-[#D4AF37]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
              <span>ENTERPRISE ARCHITECTURE // OUR FEATURES</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95]">
              ENGINEERED FOR <span className="text-[#D4AF37]">PRECISION</span> & SCALE.
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#C5CAD6] leading-relaxed font-light">
              Explore the technical capabilities, security frameworks, and strategic engines that power Agnivridhi India's unified consultancy and computing ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* TECHNICAL TELEMETRY STRIP                            */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 bg-[#0B132B] border-b border-[#D4AF37]/20">
        <div className="hoy-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {technicalSpecs.map((spec, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#080E21] border border-[#D4AF37]/20">
                <div className="font-display font-black text-lg sm:text-xl text-[#D4AF37]">
                  {spec.value}
                </div>
                <div className="font-mono text-[10px] text-[#C5CAD6] uppercase mt-1">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* CAPABILITY CATEGORIES                                */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 hoy-container space-y-20">
        {featureGroups.map((group, idx) => {
          const IconComponent = group.icon;
          return (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-[#D4AF37]/20">
                <div className="p-2.5 rounded-xl bg-[#0B132B] border border-[#D4AF37]/40 text-[#D4AF37]">
                  <IconComponent size={20} />
                </div>
                <h2 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider">
                  {group.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/25 space-y-4 hover:border-[#D4AF37] transition-colors group"
                  >
                    <div className="flex items-center gap-2 text-[#D4AF37] font-mono text-xs font-bold">
                      <CheckCircle2 size={15} />
                      <span>SPECIFICATION #{i + 1}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white uppercase group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-[#C5CAD6] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ---------------------------------------------------- */}
      {/* CTA SECTION                                          */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 hoy-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/30 text-center space-y-6">
          <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase max-w-2xl mx-auto">
            DEPLOY AGNIVRIDHI INDIA'S ENTERPRISE CAPABILITIES
          </h3>
          <p className="font-sans text-sm text-[#C5CAD6] max-w-xl mx-auto">
            Discuss your technical architecture or corporate strategy requirements directly with our Managing Partners.
          </p>
          <button
            onClick={() => {
              soundEngine.playClick();
              setActivePage('connect');
            }}
            className="px-8 py-4 rounded-full bg-[#D4AF37] text-[#060A17] font-display font-black text-xs tracking-wider uppercase inline-flex items-center gap-2 hover:bg-[#DFB15B] hover:shadow-[0_0_16px_rgba(212,175,55,0.7)] hover:scale-105 transition-all cursor-pointer"
          >
            <span>REQUEST SYSTEM SPECIFICATION</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
