import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Check,
  Send,
  Sparkles,
  Flame,
  Target,
  ShieldCheck,
  Layers,
  Clock,
  Cpu,
  CheckCircle2,
  X,
  ChevronRight,
  Activity,
  Award
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import RollingButton from '../components/RollingButton';
import TextReveal from '../components/TextReveal';
import HeroSection from '../components/HeroSection';
import { SERVICES_GRID } from '../data/projects';
import { CULTURE_DATA } from '../data/culture';
import { soundEngine } from '../utils/audio';

export default function Home({
  setActivePage,
  setCursorState
}) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(1); // Default to Technology Services
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

  // Quick inquiry form state
  const [briefService, setBriefService] = useState('Technology Services');
  const [briefBudget, setBriefBudget] = useState('₹35L — ₹75L');
  const [briefSubmitted, setBriefSubmitted] = useState(false);

  // Work Qualities of Agnivridhi India with Dedicated High-Res Background Images and Deep Details
  const workQualities = [
    {
      id: '01',
      tag: 'ETHOS // VALUE CREATION',
      title: 'Sovereign Strategic Elevation',
      subtitle: 'Radical Value Creation & Boardroom Foresight',
      icon: Flame,
      image: '/images/boardroom_consultancy.webp',
      desc: 'Rooted in the Sanskrit philosophy of Agni (transformative energy) and Vridhi (sustainable elevation), we do not merely optimize—we catalyze structural, compounding market dominance.',
      guarantee: '100% High-Conviction Value Creation',
      details: [
        'End-to-end organizational alignment: Dismantling bureaucratic friction and replacing legacy operational structures with sovereign agile execution pods.',
        'Cross-border M&A advisory and sovereign market entry roadmaps calibrated specifically for Indian and APAC corporate expansion.',
        'Direct board-level governance advisory and quantitative capital efficiency modeling.'
      ],
      deliverables: ['Boardroom Strategy Matrix', 'M&A Due Diligence', 'Capital Restructuring'],
      stats: '₹1,800Cr+ Cumulative M&A Analyzed'
    },
    {
      id: '02',
      tag: 'RIGOR // PRECISION',
      title: 'Quantitative & Mathematical Rigor',
      subtitle: 'Algorithmic Attribution & Empirical Decision Models',
      icon: Target,
      image: '/images/marketing_analytics.webp',
      desc: 'Every engagement is anchored in measurable ROI multipliers, verified unit economics, and audited latency SLAs. We completely eliminate guesswork in favor of data supremacy.',
      guarantee: 'Auditable Financial & Uptime SLAs',
      details: [
        'Deterministic econometric modeling and first-party multi-touch attribution tracking without third-party pixel leakage.',
        'Granular unit economics decomposition: Operating margin maximization, CAC reduction curves, and capital efficiency stress-testing.',
        'Continuous statistical benchmarking against industry leaders and global category champions.'
      ],
      deliverables: ['Econometric Attribution Engine', 'Margin Decomposition Model', 'Live ROI Dashboard'],
      stats: '+34% Average EBITDA Lift'
    },
    {
      id: '03',
      tag: 'SECURITY // SOVEREIGNTY',
      title: 'Bank-Grade Data Confidentiality',
      subtitle: 'Air-Gapped Sovereign Sandboxes & Post-Quantum Encryption',
      icon: ShieldCheck,
      image: '/images/server_matrix_tech.webp',
      desc: 'Dedicated air-gapped sovereign VPC sandboxes and ironclad mutual NDAs guarantee that your proprietary algorithms, M&A blueprints, and customer data remain strictly protected.',
      guarantee: 'SOC2 Type II / ISO 27001 / RBI Standards',
      details: [
        'Strict mutual institutional non-disclosure agreements executed before strategic discovery begins.',
        'Dedicated air-gapped VPC enclaves ensuring that proprietary client training data and codebases never leak to public models.',
        'Comprehensive compliance with SOC2 Type II, ISO 27001, and Reserve Bank of India (RBI) data localization mandates.'
      ],
      deliverables: ['Isolated VPC Sandboxes', 'Cryptographic Audit Logs', 'Mutual Institutional NDA'],
      stats: 'Zero Data Leakage Guarantee'
    },
    {
      id: '04',
      tag: 'ARCHITECTURE // SPEED',
      title: 'Full-Stack Convergence Pods',
      subtitle: 'Unified Management Consulting, Deep Tech & Market Momentum',
      icon: Layers,
      image: '/images/tech_blueprint.webp',
      desc: 'We dissolve silos by deploying cross-functional pods uniting boardroom M&A strategists, Tier-4 cloud engineers, and growth directors under a single rapid-delivery umbrella.',
      guarantee: 'Zero Silos • Direct Partner Immersion',
      details: [
        'Eliminating vendor fragmentation: Strategy, distributed cloud architecture, and growth marketing operate as one synchronized unit.',
        'Dedicated managing partner immersion: Senior partners actively direct architecture reviews and board milestones.',
        'Seamless transition from strategy decks to production Kubernetes clusters and global media distribution within days.'
      ],
      deliverables: ['Cross-Functional Pod Deployment', 'Unified Tech & GTM Roadmap', 'CXO Governance'],
      stats: '3x Velocity Multiplier'
    },
    {
      id: '05',
      tag: 'VELOCITY // SPRINT PROTOCOL',
      title: 'Hyper-Velocity Execution Speed',
      subtitle: '48-Hour Rapid Sprints & Sub-4-Hour Executive SLA',
      icon: Clock,
      image: '/images/corporate_hero.webp',
      desc: 'Rapid 48-hour discovery-to-deployment pipelines and sub-4-hour executive response SLAs ensure your enterprise moves at the absolute speed of market opportunities.',
      guarantee: '< 4hr SLA Response • 48hr Sprint Launch',
      details: [
        'Compressed execution cycles: Discovery to production-ready architecture blueprints delivered within 48 hours.',
        '24/7 Priority Emergency Support for enterprise clients with guaranteed sub-4-hour executive partner response.',
        'Rapid creative and technical iteration loops that keep your enterprise ahead of fast-shifting market and technology cycles.'
      ],
      deliverables: ['Rapid Sprint Playbooks', '24/7 Executive Desk Line', 'Continuous Delivery CI/CD'],
      stats: '< 4hr SLA Response'
    },
    {
      id: '06',
      tag: 'RELIABILITY // MISSION-CRITICAL',
      title: 'High-Concurrency Fault Tolerance',
      subtitle: '99.999% SLA Uptime & Distributed Multi-Region Resilience',
      icon: Cpu,
      image: '/images/agnivridhi_tech_blueprint_1787635311309.webp',
      desc: 'Distributed multi-region Kubernetes architectures, automated disaster failover, and post-quantum encryption engineered to withstand extreme institutional throughput.',
      guarantee: '99.999% Availability & Zero Downtime',
      details: [
        'Elastic multi-cloud Kubernetes clusters with automated autoscaling, zero-downtime rolling updates, and sub-10ms latency thresholds.',
        'Active-active multi-region disaster recovery protocols ensuring seamless failover without transaction drops.',
        'Rigorous load-testing under peak stress conditions designed to handle millions of simultaneous concurrent requests.'
      ],
      deliverables: ['Multi-Region Kubernetes Clusters', 'Automated Failover Matrix', 'SIEM Monitoring'],
      stats: '99.999% SLA Guarantee'
    }
  ];

  return (
    <div className="w-full bg-[#060A17] text-white relative">
      {/* ==================================================== */}
      {/* HERO SECTION (CYBER-EXECUTIVE WEBGL SYSTEM)          */}
      {/* ==================================================== */}
      <HeroSection
        setActivePage={setActivePage}
        setCursorState={setCursorState}
      />

      {/* ==================================================== */}
      {/* SECTION 1: ENTERPRISE SERVICES                      */}
      {/* ==================================================== */}
      <section id="services-section" className="py-24 hoy-container relative z-10 border-t border-[#D4AF37]/20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#D4AF37]/20 mb-12">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-1 font-bold">
              // PRACTICE AREAS • ENTERPRISE CAPABILITIES
            </span>
            <TextReveal as="h2" className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              OUR SERVICES.
            </TextReveal>
          </div>

          <p className="font-mono text-xs text-[#C5CAD6] max-w-sm uppercase">
            SELECT TO ENGAGE PRACTICE SPECIFICATIONS AND CASE METRICS
          </p>
        </div>

        {/* 3 Dedicated Full-Impact Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICES_GRID.map((service, idx) => {
            const isSelected = activeServiceIndex === idx;
            const pageMap = {
              'corporate-consultancy': 'consultancy',
              'technology-services': 'it',
              'marketing-services': 'marketing'
            };

            return (
              <div
                key={service.id}
                onMouseEnter={() => {
                  setHoveredServiceIndex(idx);
                  soundEngine.playHover();
                  setCursorState && setCursorState({ text: 'VIEW', type: 'hover' });
                }}
                onMouseLeave={() => {
                  setHoveredServiceIndex(null);
                  setCursorState && setCursorState({ text: '', type: 'default' });
                }}
                onClick={() => {
                  setActiveServiceIndex(idx);
                  soundEngine.playClick();
                  setActivePage(pageMap[service.id] || 'consultancy');
                }}
                className={`p-6 sm:p-8 rounded-3xl transition-all duration-500 border cursor-pointer relative overflow-hidden group flex flex-col justify-between min-h-[420px] shadow-2xl ${isSelected
                    ? 'bg-[#0B132B] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.35)] scale-[1.01]'
                    : 'bg-[#0B132B]/80 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:scale-[1.01]'
                  }`}
              >
                {/* Background Thumbnail/Reel */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-3xl">
                  <img
                    src={service.thumbnail || service.posterUrl}
                    alt={service.title}
                    width={1376}
                    height={768}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-35 group-hover:opacity-60 group-hover:scale-105 transition-[transform,opacity] duration-700 filter contrast-125 brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060A17]/95 via-[#080E21]/60 to-[#080E21]/35" />
                </div>

                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D4AF37] shadow-[0_0_20px_#D4AF37] z-10" />
                )}

                {/* Card Top Content */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#D4AF37] bg-[#060A17]/90 px-3 py-1 rounded-full border border-[#D4AF37]/30 backdrop-blur-md">
                      <span className="font-bold">{service.number}</span>
                      <span className="text-zinc-500">•</span>
                      <span>{service.category}</span>
                    </div>

                    <span className={`px-3 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase transition-colors backdrop-blur-md ${isSelected ? 'bg-[#D4AF37] text-[#060A17] font-bold shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'bg-[#060A17]/90 text-[#D4AF37] border border-[#D4AF37]/40'
                      }`}>
                      {isSelected ? 'ACTIVE' : 'EXPLORE'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-black text-2xl text-white tracking-tight uppercase group-hover:text-[#D4AF37] transition-colors leading-[1.08]">
                      {service.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Deliverables & Metrics */}
                <div className="relative z-10 pt-4 border-t border-[#D4AF37]/20 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {(service.tags || service.deliverables || []).slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-[#060A17]/90 border border-[#D4AF37]/20 font-mono text-[10px] text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="font-mono text-xs text-[#D4AF37] font-bold">
                      {service.stats?.primary} {service.stats?.secondary}
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#060A17] border border-[#D4AF37]/40 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#060A17] flex items-center justify-center transition-colors">
                      <ArrowUpRight size={15} className="stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 2: QUANTITATIVE IMPACT & MACRO METRICS      */}
      {/* ==================================================== */}
      <section className="py-24 bg-[#080E21] border-y border-[#D4AF37]/20">
        <div className="hoy-container space-y-12">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
              // INSTITUTIONAL METRICS • PROVEN MOMENTUM
            </span>
            <TextReveal as="h2" className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.08] uppercase max-w-4xl">
              AT AGNIVRIDHI INDIA, TAILORED INTELLIGENCE CATALYZES MOMENTUM. FROM STRATEGIC AUDITS TO END-TO-END IMPLEMENTATION.
            </TextReveal>

            <div className="mt-6 grid sm:grid-cols-2 gap-6 text-[#C5CAD6] font-sans text-xs sm:text-base leading-relaxed max-w-4xl">
              <p>
                In an era where technology cycles shift exponentially, legacy business models collapse without deep computational intelligence and architectural foresight.
              </p>
              <p className="text-white">
                We empower boards, founders, and enterprise executives to achieve category leadership through institutional precision, multi-region cloud resilience, and compounding market reach.
              </p>
            </div>
          </div>

          {/* Animated Metric Counter Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#D4AF37]/20">
            {CULTURE_DATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-[border-color,transform] duration-300 text-center space-y-2 group shadow-xl hover:scale-[1.02]"
              >
                <div className="font-display font-black text-3xl sm:text-5xl text-[#D4AF37] tracking-tight drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                    prefix={stat.value.startsWith('+') ? '+' : ''}
                  />
                </div>
                <div className="font-display font-bold text-xs uppercase tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                  {stat.label}
                </div>
                <div className="font-mono text-[11px] text-[#C5CAD6] max-w-xs mx-auto">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 3: WORK QUALITIES & POPUP INSPECTION SYSTEM  */}
      {/* ==================================================== */}
      <section className="py-24 hoy-container space-y-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#D4AF37]/20">
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase mb-2 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
              // CORE WORK ETHOS • STANDARDS OF EXCELLENCE
            </span>
            <TextReveal as="h2" className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              UNCOMPROMISING WORK QUALITIES.
            </TextReveal>
            <p className="font-sans text-xs sm:text-sm text-[#C5CAD6] mt-3 leading-relaxed">
              Hover over any capability card to reveal its strategic methodology, operational protocols, and verified institutional deliverables.
            </p>
          </div>

          <div className="font-mono text-xs text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-2 rounded-full bg-[#0B132B] hidden md:flex items-center gap-2">
            <Sparkles size={13} className="text-[#D4AF37]" />
            <span>HOVER TO REVEAL SPECIFICATIONS</span>
          </div>
        </div>

        {/* 6 Work Qualities Cards: Picture & Heading on Rest -> Slips up to reveal Text Details on Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workQualities.map((item) => {
            const IconComp = item.icon;

            return (
              <div
                key={item.id}
                onMouseEnter={() => {
                  soundEngine.playHover();
                  setCursorState && setCursorState({ text: 'EXPLORE', type: 'hover' });
                }}
                onMouseLeave={() => {
                  setCursorState && setCursorState({ text: '', type: 'default' });
                }}
                className="group relative h-[420px] w-full rounded-3xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37] shadow-xl hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] hover:-translate-y-1 bg-[#080E21] cursor-default select-none"
              >
                {/* 1. THE PICTURE (Clear and full-bleed in resting state) */}
                <img
                  src={item.image}
                  alt={item.title}
                  width={1376}
                  height={768}
                  loading="lazy"
                  decoding="async"
                  className="card-image-transition absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.85] contrast-110 group-hover:scale-105"
                />

                {/* Dark Vignette Scrim (Ensures heading is crisp at resting state) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060A17] via-[#060A17]/35 to-transparent transition-opacity duration-700 group-hover:opacity-90" />

                {/* 2. THE HEADING (Default resting state view at bottom of card) */}
                <div className="card-heading-transition absolute bottom-0 left-0 right-0 p-6 z-10 transform group-hover:opacity-0 group-hover:-translate-y-2 pointer-events-none">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-[#D4AF37] font-bold px-2.5 py-0.5 rounded bg-[#060A17]/85 border border-[#D4AF37]/35 backdrop-blur-md">
                      [ {item.id} ]
                    </span>
                    <span className="font-mono text-[10px] text-[#C5CAD6] uppercase px-2.5 py-0.5 rounded bg-[#060A17]/85 border border-white/10 backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider mt-1 font-semibold drop-shadow">
                    {item.subtitle}
                  </p>
                </div>

                {/* 3. THE SLIP DRAWER (Slips up smoothly on hover to show all text details) */}
                <div className="card-slip-drawer absolute inset-0 z-20 p-6 sm:p-7 flex flex-col justify-between bg-[#080E21]/95 backdrop-blur-xl border-t border-[#D4AF37]/35 transform translate-y-full group-hover:translate-y-0">
                  <div className="space-y-3.5">
                    {/* Header in slip drawer */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#D4AF37] font-bold px-2.5 py-1 rounded bg-[#060A17] border border-[#D4AF37]/40">
                        [ {item.id} ]
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#060A17] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                        <IconComp size={18} />
                      </div>
                    </div>

                    {/* Heading */}
                    <div>
                      <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-tight text-[#D4AF37]">
                        {item.title}
                      </h3>
                      <p className="font-mono text-[11px] text-zinc-300 uppercase tracking-wider font-semibold mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Text Details Description */}
                    <p className="font-sans text-xs text-zinc-200 leading-relaxed font-light">
                      {item.desc}
                    </p>

                    {/* Core Deliverables Badges */}
                    <div className="pt-1">
                      <span className="font-mono text-[9px] text-[#D4AF37] uppercase font-bold tracking-wider block mb-1.5">
                        CORE DELIVERABLES
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.deliverables.map((deliv, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-[#060A17] border border-[#D4AF37]/30 font-mono text-[10px] text-white"
                          >
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Guarantee & Verified Benchmark */}
                  <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                      <CheckCircle2 size={13} className="shrink-0" />
                      <span className="truncate max-w-[170px] sm:max-w-none text-[11px]">{item.guarantee}</span>
                    </div>
                    <span className="font-display font-black text-white text-xs">{item.stats}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ==================================================== */}
      {/* SECTION 4: INITIALIZE BRIEF & DIRECT INQUIRY        */}
      {/* ==================================================== */}
      <section className="py-24 bg-[#080E21] border-t border-[#D4AF37]/20">
        <div className="hoy-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Contact Info & Statement */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B132B] border border-[#D4AF37]/30 font-mono text-xs text-[#D4AF37]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
                <span>INITIALIZE ENGAGEMENT // DIRECT LAUNCH</span>
              </div>

              <TextReveal as="h2" className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-[0.95]">
                BUILD YOUR NEXT CATEGORY LEADER WITH US.
              </TextReveal>

              <p className="font-sans text-sm text-[#C5CAD6] max-w-lg leading-relaxed">
                Whether you need boardroom strategy, sovereign cloud engineering, or algorithmic marketing velocity, our senior partners are ready to engage under mutual institutional NDA.
              </p>

              {/* Coordinates */}
              <div className="p-6 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/25 space-y-3 font-mono text-xs shadow-xl">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-500">HEADQUARTERS:</span>
                  <span className="text-white text-right">B-750, Tower-B, IThum, Sector 62, Noida</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-500">DIRECT LINE:</span>
                  <a href="tel:+919289555190" className="text-[#D4AF37] hover:underline font-bold">+91 9289555190</a>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-500">INSTITUTIONAL MAIL:</span>
                  <a href="mailto:info@agnivridhiindia.com" className="text-white hover:text-[#D4AF37]">info@agnivridhiindia.com</a>
                </div>
              </div>
            </div>

            {/* Right: Quick Interactive Commission Card */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/35 shadow-2xl space-y-5">
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                  EXECUTIVE COMMISSION LAUNCHER
                </h3>

                {briefSubmitted ? (
                  <div className="p-8 rounded-2xl bg-[#080E21] border border-[#D4AF37] text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#060A17] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                      <Check size={24} className="stroke-[3]" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white uppercase">
                      COMMISSION PROTOCOL INITIALIZED
                    </h4>
                    <p className="font-sans text-xs text-[#C5CAD6]">
                      Our managing partners in Noida Sector 62 have received your brief. Expect a secure institutional response within 4 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      soundEngine.playImpact();
                      setBriefSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block font-mono text-[11px] text-[#D4AF37] uppercase tracking-wider mb-1.5 font-bold">
                        SELECT PRIMARY DOMAIN
                      </label>
                      <select
                        value={briefService}
                        onChange={(e) => setBriefService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#080E21] border border-[#D4AF37]/20 text-white font-sans text-xs focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Corporate Consultancy">Corporate Consultancy & M&A</option>
                        <option value="Technology Services">Deep Tech & Cloud Architectures</option>
                        <option value="Marketing Services">Algorithmic Marketing & Growth</option>
                        <option value="Full Stack Convergence">Full Stack Sovereign Elevation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-[#D4AF37] uppercase tracking-wider mb-1.5 font-bold">
                        CAPITAL ALLOCATION BAND
                      </label>
                      <select
                        value={briefBudget}
                        onChange={(e) => setBriefBudget(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#080E21] border border-[#D4AF37]/20 text-white font-sans text-xs focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="₹15L — ₹35L">₹15L — ₹35L (Initial Strategy Sprint)</option>
                        <option value="₹35L — ₹75L">₹35L — ₹75L (Enterprise Architecture)</option>
                        <option value="₹75L — ₹2Cr+">₹75L — ₹2Cr+ (Full Category Domination)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-[#D4AF37] uppercase tracking-wider mb-1.5 font-bold">
                        OFFICIAL EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="executive@yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#080E21] border border-[#D4AF37]/20 text-white font-sans text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <RollingButton
                      type="submit"
                      variant="primary"
                      className="w-full !py-4 text-center text-xs mt-2"
                      icon={Send}
                    >
                      TRANSMIT EXECUTIVE BRIEF
                    </RollingButton>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
