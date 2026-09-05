import React from 'react';
import { Cpu, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import ITHeroBg from '../components/ITHeroBg';

export default function ITServices({ setActivePage }) {
  const itPillars = [
    {
      title: "Sovereign Cloud & Kubernetes Clusters",
      desc: "Multi-cloud high-availability architectures (AWS, GCP, Azure, Sovereign On-Prem) engineered with 99.999% SLA uptime, automated autoscaling, and zero-downtime CI/CD pipelines.",
      specs: ["Sub-10ms Global Latency", "Multi-Region Redundancy", "Infrastructure-as-Code (Terraform)"]
    },
    {
      title: "Private LLM & Enterprise AI Reasoning",
      desc: "VPC-isolated fine-tuned foundation models, retrieval-augmented generation (RAG) engines, and real-time decision cores trained strictly on proprietary client data.",
      specs: ["Air-Gapped Training Sandboxes", "Zero Third-Party Data Leakage", "Deterministic Inference Guardrails"]
    },
    {
      title: "Custom Enterprise Software & Microservices",
      desc: "High-concurrency distributed backend systems, event-driven reactive microservices, and modern web application frontends built with React, Next.js, Node, Go, and Python.",
      specs: ["Event-Driven Kafka Architecture", "GraphQL & RESTful Federation", "Strict Microservices Isolation"]
    },
    {
      title: "Zero-Trust Cybersecurity & Tier-4 Audits",
      desc: "Post-quantum cryptographic protocols, automated vulnerability scanning, SIEM integration, and comprehensive compliance auditing for SOC2 Type II, ISO 27001, and RBI guidelines.",
      specs: ["AES-256-GCM Hardware Security Modules", "Continuous Penetration Testing", "Role-Based Micro-Segmentation"]
    }
  ];

  const techStack = [
    { category: "INFRASTRUCTURE & CLOUD", tools: "Kubernetes, Docker, Terraform, AWS, Google Cloud, Azure, Cloudflare" },
    { category: "BACKEND & ARCHITECTURE", tools: "Go, Python, Node.js, Rust, Kafka, Redis, PostgreSQL, MongoDB" },
    { category: "AI & INTELLIGENCE", tools: "PyTorch, Hugging Face, vLLM, LangChain, Milvus Vector DB, Ollama" },
    { category: "SECURITY & COMPLIANCE", tools: "HashiCorp Vault, Falco, SonarQube, OpenTelemetry, Istio Service Mesh" }
  ];

  return (
    <div className="w-full bg-[#080E21] text-white pt-28 pb-20">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <section className="relative min-h-[560px] sm:min-h-[640px] flex items-center py-20 sm:py-28 overflow-hidden bg-[#060A17] border-b border-[#D4AF37]/30">
        <ITHeroBg />

        <div className="hoy-container relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B132B] border border-[#D4AF37]/30 font-mono text-xs text-[#D4AF37]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
              <span>PRACTICE AREA // [ 02 ] IT & TECHNOLOGY SERVICES</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95]">
              MISSION-CRITICAL <br />
              <span className="text-[#D4AF37]">DEEP TECH</span> & CLOUD.
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#C5CAD6] leading-relaxed font-light">
              From distributed Kubernetes clusters and sovereign data isolation sandboxes to enterprise AI reasoning engines and custom high-throughput software ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* CORE IT PILLARS                                      */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 hoy-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#D4AF37]/20 mb-16">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-2 font-bold">
              // ENGINEERING CAPABILITIES
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              CORE IT ARCHITECTURES
            </h2>
          </div>
          <p className="font-mono text-xs text-[#C5CAD6] max-w-sm uppercase">
            HIGH-CONCURRENCY COMPUTING & ENTERPRISE SECURITY
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {itPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/25 space-y-5 hover:border-[#D4AF37] transition-colors shadow-xl group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#D4AF37] font-bold tracking-widest">
                  [ ARCHITECTURE 0{idx + 1} ]
                </span>
                <Cpu size={18} className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors" />
              </div>
              <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-[#C5CAD6] leading-relaxed">
                {pillar.desc}
              </p>
              <div className="space-y-2 pt-2">
                {pillar.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <CheckCircle2 size={13} className="text-[#D4AF37]" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* TECHNOLOGY STACK MATRIX                              */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-[#060A17] border-y border-[#D4AF37]/20">
        <div className="hoy-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#D4AF37]/20 mb-16">
            <div>
              <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-2 font-bold">
                // ENTERPRISE STACK
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                TECHNOLOGY ECOSYSTEM
              </h2>
            </div>
            <p className="font-mono text-xs text-[#C5CAD6] max-w-sm uppercase">
              BATTLE-TESTED OPEN SOURCE & SOVEREIGN CLOUD COMPONENTS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/25 space-y-4">
                <div className="font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  {stack.category}
                </div>
                <p className="font-mono text-xs text-white leading-relaxed font-medium">
                  {stack.tools}
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
              SYSTEM REQUISITION
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase">
              DEPLOY AGNIVRIDHI IT ARCHITECTURE
            </h3>
            <p className="font-sans text-sm text-[#C5CAD6]">
              Request a custom cloud infrastructure audit, private LLM sandbox setup, or microservices re-engineering blueprint.
            </p>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              setActivePage('connect');
            }}
            className="px-8 py-4 rounded-full bg-[#D4AF37] text-[#060A17] font-display font-black text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-[#DFB15B] hover:shadow-[0_0_16px_rgba(212,175,55,0.7)] hover:scale-105 transition-all cursor-pointer shrink-0"
          >
            <span>SCHEDULE ARCHITECTURE REVIEW</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
