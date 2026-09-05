import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import { soundEngine } from '../utils/audio';

export default function SuccessStories({ setActivePage }) {
  const stories = [

    {
      id: "bfsi-neobank",
      client: "Tier-1 Indian Sovereign Banking Institution",
      industry: "BFSI & Fintech",
      headline: "Scalable Core Cloud Banking Architecture & ₹1,200Cr Transactions",
      metrics: {
        primary: "+340%",
        primaryLabel: "THROUGHPUT MULTIPLIER",
        secondary: "99.999%",
        secondaryLabel: "SLA UPTIME OVER 18 MO",
        tertiary: "< 8ms",
        tertiaryLabel: "P99 LATENCY THRESHOLD"
      },
      summary: "Migrated mission-critical core retail banking workflows to a dedicated air-gapped sovereign Kubernetes cluster with automated RBI-compliant data residency and zero downtime.",
      quote: "Agnivridhi India delivered a bank-grade cloud migration that set a new benchmark for transaction speed and compliance in our sector.",
      author: "Chief Information Officer, Sovereign Banking Group"
    },
    {
      id: "omnichannel-d2c",
      client: "National FMCG & Omni-Channel Retail Conglomerate",
      industry: "Retail & Consumer Tech",
      headline: "Algorithmic Growth Engine Driving ₹450Cr+ Incremental Revenue",
      metrics: {
        primary: "+280%",
        primaryLabel: "ROAS MULTIPLIER",
        secondary: "14.2M+",
        secondaryLabel: "ACTIVE REACH VECTOR",
        tertiary: "42%",
        tertiaryLabel: "CAC REDUCTION"
      },
      summary: "Engineered automated programmatic media bidding infrastructure integrated with real-time warehouse inventory telemetry across 28 Indian states.",
      quote: "Their unified approach across ad-tech algorithms and conversion optimization transformed our peak festival quarter into our highest-grossing period ever.",
      author: "Chief Marketing Officer, National Retail Conglomerate"
    },
    {
      id: "enterprise-logistics",
      client: "Pan-India Cold Chain & Industrial Freight Leader",
      industry: "Logistics & Deep Tech",
      headline: "AI-Powered Fleet Route Optimization & 22% Fuel Cost Reduction",
      metrics: {
        primary: "-22%",
        primaryLabel: "OPERATIONAL FLEET OPEX",
        secondary: "4.8/5",
        secondaryLabel: "ON-TIME SLA DELIVERY",
        tertiary: "₹85Cr+",
        tertiaryLabel: "ANNUAL COST SAVINGS"
      },
      summary: "Deployed custom edge AI models across 3,500+ freight vehicles, predicting real-time highway congestion and automated route dispatch across national freight corridors.",
      quote: "Agnivridhi India doesn't just write code; they transformed our operating margins from the ground up.",
      author: "Managing Director, Freight Logistics Group"
    }
  ];

  const overallStats = [
    { label: "CUMULATIVE VALUE DELIVERED", value: "₹4,800Cr+" },
    { label: "ENTERPRISE TRANSFORMATION PROJECTS", value: "450+" },
    { label: "AVERAGE CLIENT ROI MULTIPLIER", value: "+210%" },
    { label: "CLIENT RETENTION & EXPANSION", value: "98.4%" }
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
              <span>PROVEN CLIENT OUTCOMES // SUCCESS STORIES</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95]">
              MEASURABLE IMPACT. <br />
              <span className="text-[#D4AF37]">EXTRAORDINARY</span> RESULTS.
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#C5CAD6] leading-relaxed font-light">
              Explore how Agnivridhi India partners with industry-leading corporations to unlock structural breakthroughs, market dominance, and verifiable financial momentum.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* MACRO STATS STRIP                                    */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 bg-[#0B132B] border-b border-[#D4AF37]/20">
        <div className="hoy-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {overallStats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#080E21] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors">
                <div className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#D4AF37]">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.value.startsWith('₹') ? '₹' : stat.value.startsWith('+') ? '+' : ''}
                    suffix={stat.value.includes('Cr+') ? 'Cr+' : stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                  />
                </div>
                <div className="font-mono text-xs text-[#C5CAD6] uppercase mt-1 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* CASE STUDIES LIST                                    */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 hoy-container space-y-16">
        {stories.map((story, idx) => (
          <div
            key={story.id}
            className="p-8 sm:p-12 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/25 space-y-8 hover:border-[#D4AF37] transition-colors shadow-xl"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D4AF37]/20">
              <div>
                <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                  CASE STUDY 0{idx + 1} // {story.industry}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mt-1">
                  {story.client}
                </h3>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#080E21] border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37] font-bold self-start md:self-auto">
                VERIFIED COMMISSION
              </div>
            </div>

            {/* Headline & Summary */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-xl text-white">
                {story.headline}
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#C5CAD6] leading-relaxed">
                {story.summary}
              </p>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-6 rounded-2xl bg-[#080E21] border border-[#D4AF37]/20 text-center">
                <div className="font-display font-black text-3xl text-[#D4AF37]">
                  {story.metrics.primary}
                </div>
                <div className="font-mono text-xs text-[#C5CAD6] mt-1 uppercase">
                  {story.metrics.primaryLabel}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-[#080E21] border border-[#D4AF37]/20 text-center">
                <div className="font-display font-black text-3xl text-white">
                  {story.metrics.secondary}
                </div>
                <div className="font-mono text-xs text-[#C5CAD6] mt-1 uppercase">
                  {story.metrics.secondaryLabel}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-[#080E21] border border-[#D4AF37]/20 text-center">
                <div className="font-display font-black text-3xl text-[#DFB15B]">
                  {story.metrics.tertiary}
                </div>
                <div className="font-mono text-xs text-[#C5CAD6] mt-1 uppercase">
                  {story.metrics.tertiaryLabel}
                </div>
              </div>
            </div>

            {/* Client Quote */}
            <div className="p-6 rounded-2xl bg-[#080E21]/80 border-l-4 border-[#D4AF37] space-y-2">
              <p className="font-sans text-sm italic text-zinc-200">
                "{story.quote}"
              </p>
              <div className="font-mono text-xs text-[#D4AF37] font-semibold uppercase">
                — {story.author}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ---------------------------------------------------- */}
      {/* CTA                                                  */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 hoy-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/30 text-center space-y-6">
          <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase max-w-2xl mx-auto">
            BECOME OUR NEXT SUCCESS STORY
          </h3>
          <p className="font-sans text-sm text-[#C5CAD6] max-w-xl mx-auto">
            Schedule an executive briefing with our partners to explore custom value creation roadmaps for your enterprise.
          </p>
          <button
            onClick={() => {
              soundEngine.playClick();
              setActivePage('connect');
            }}
            className="px-8 py-4 rounded-full bg-[#D4AF37] text-[#060A17] font-display font-black text-xs tracking-wider uppercase inline-flex items-center gap-2 hover:bg-[#DFB15B] hover:shadow-[0_0_16px_rgba(212,175,55,0.7)] hover:scale-105 transition-all cursor-pointer"
          >
            <span>DISCUSS ENTERPRISE TRANSFORMATION</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
