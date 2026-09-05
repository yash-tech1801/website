import React, { useState } from 'react';
import { ChevronDown, Search, ArrowUpRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function FAQ({ setActivePage }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'GENERAL', 'CONSULTANCY', 'TECHNOLOGY', 'MARKETING', 'SECURITY & LEGAL'];

  const faqItems = [
    {
      category: 'GENERAL',
      question: 'What is the core value proposition of Agnivridhi India?',
      answer: 'Agnivridhi India is an elite corporate partner that merges high-level strategy consultancy, mission-critical engineering/cloud architecture, and hyper-scale growth marketing under one unified execution team. Unlike fragmented agencies or purely theoretical advisory firms, we design, build, and scale end-to-end solutions with quantitative ROI guarantees.'
    },
    {
      category: 'GENERAL',
      question: 'Where is Agnivridhi India headquartered?',
      answer: 'Our corporate headquarters and primary executive advisory boardroom are located at B-750, Tower-B, IThum, Sector 62, Near Noida Electronic City Metro Station, Noida – 201301, Uttar Pradesh (Delhi NCR), with specialized deep-tech research nodes in Bangalore and corporate desks in Mumbai and Singapore.'
    },
    {
      category: 'CONSULTANCY',
      question: 'What types of consultancy engagements do you undertake?',
      answer: 'We undertake corporate restructuring, sovereign market entry & expansion, cross-border M&A technological/financial audits, capital efficiency advisory, and unit economics optimization for mid-market to Fortune 500 enterprises.'
    },
    {
      category: 'TECHNOLOGY',
      question: 'What technologies and cloud architectures does Agnivridhi deploy?',
      answer: 'We specialize in distributed multi-cloud architectures (AWS, GCP, Azure, sovereign private clouds), Kubernetes microservices with 99.999% SLA availability, private LLM and reasoning model deployment, post-quantum encryption, and high-frequency real-time telemetry systems.'
    },
    {
      category: 'MARKETING',
      question: 'How do your marketing services differ from traditional digital agencies?',
      answer: 'Our marketing operations are purely algorithmic and performance-driven. We build proprietary programmatic bidding scripts, multi-touch attribution models, and hyper-speed creative production pipelines that minimize customer acquisition costs while driving verifiable top-line revenue.'
    },
    {
      category: 'SECURITY & LEGAL',
      question: 'How do you safeguard client intellectual property and sensitive corporate data?',
      answer: 'Every engagement begins under an institutional mutual NDA. Furthermore, all software development and data audits occur within dedicated air-gapped sovereign data isolation sandboxes adhering to SOC2 Type II, ISO 27001, and RBI data residency mandates.'
    },
    {
      category: 'GENERAL',
      question: 'What is the typical engagement turnaround and onboarding timeline?',
      answer: 'For emergency architectural reviews or strategic audits, our Managing Partners mobilize within 48 hours. Enterprise transformation roadmaps typically commence within 5 business days following mutual scoping and NDA execution.'
    }
  ];

  const toggleAccordion = (index) => {
    soundEngine.playClick();
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredItems = faqItems.filter((item) => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <span>FREQUENTLY ASKED QUESTIONS // ENTERPRISE KNOWLEDGE BASE</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95]">
              TRANSPARENCY IN <br />
              <span className="text-[#D4AF37]">EVERY ENGAGEMENT.</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#C5CAD6] leading-relaxed font-light">
              Clear, definitive answers regarding our strategic engagement models, sovereign security standards, technology stacks, and enterprise SLAs.
            </p>

            {/* Search Box */}
            <div className="pt-4 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" size={18} />
                <input
                  type="text"
                  placeholder="Search questions by keyword (e.g. security, cloud, M&A, SLA)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#0B132B] border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none font-sans text-sm text-white placeholder:text-zinc-500 shadow-xl transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* CATEGORY SELECTOR & ACCORDION                        */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 hoy-container space-y-12">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundEngine.playClick();
                setActiveCategory(cat);
              }}
              className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-[#060A17] font-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-[#0B132B] text-[#C5CAD6] border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-4xl">
          {filteredItems.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-[#0B132B] border border-[#D4AF37]/20 font-mono text-sm text-[#C5CAD6]">
              No questions found matching your search query. Try another keyword or contact us directly.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#0B132B] border-[#D4AF37] shadow-xl'
                      : 'bg-[#080E21] border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#D4AF37] font-bold">
                        [ {item.category} ]
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg text-white">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-7 sm:px-7 pt-1 font-sans text-sm sm:text-base text-[#C5CAD6] leading-relaxed border-t border-[#D4AF37]/15">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* STILL HAVE QUESTIONS BLOCK                           */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 hoy-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase font-bold">
              DIRECT EXECUTIVE INQUIRIES
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">
              HAVE A SPECIFIC STRATEGIC QUESTION?
            </h3>
            <p className="font-sans text-sm text-[#C5CAD6] max-w-xl">
              Our partners in Noida are available for confidential briefings under institutional mutual non-disclosure.
            </p>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              setActivePage('connect');
            }}
            className="px-8 py-4 rounded-full bg-[#D4AF37] text-[#060A17] font-display font-black text-xs tracking-wider uppercase inline-flex items-center gap-2 hover:bg-[#DFB15B] hover:shadow-[0_0_16px_rgba(212,175,55,0.7)] hover:scale-105 transition-all cursor-pointer shrink-0"
          >
            <span>SUBMIT CONFIDENTIAL INQUIRY</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
