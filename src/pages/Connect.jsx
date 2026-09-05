import React, { useState } from 'react';
import { Send, Check, Copy, MapPin, Mail, Phone, Clock, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Connect({ setCursorState }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    serviceInterest: 'Technology Services (Distributed Cloud & AI)',
    budget: '₹35L — ₹75L',
    timeline: 'Immediate (Rapid Sprint)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const serviceOptions = [
    '[ 01 ] Corporate Consultancy',
    '[ 02 ] Technology Services (Cloud & AI)',
    '[ 03 ] Marketing Services & Global Reach',
    'Unified 3-Pillar Corporate Engine'
  ];

  const budgetTiers = [
    '₹15L — ₹35L',
    '₹35L — ₹75L',
    '₹75L — ₹1.5Cr',
    '₹1.5Cr+'
  ];

  const timelines = [
    'Immediate (Rapid Sprint)',
    'Within 30 Days',
    'Quarterly Transformation'
  ];

  const handleCopyEmail = () => {
    soundEngine.playClick();
    navigator.clipboard.writeText('info@agnivridhiindia.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundEngine.playImpact();
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#080E21] text-white pt-32 pb-36">
      <div className="hoy-container">
        {/* Header Title */}
        <div className="pb-12 border-b border-[#D4AF37]/20 mb-16">
          <div className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
            INITIATE ENGAGEMENT // CORPORATE ADVISORY & TECH SOLUTIONS
          </div>
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-tighter uppercase leading-[0.9]">
            START A <br />
            <span className="text-[#D4AF37] drop-shadow-[0_0_28px_rgba(212,175,55,0.5)]">TRANSFORMATION.</span>
          </h1>
          <p className="mt-6 font-sans text-base sm:text-lg text-[#C5CAD6] max-w-2xl font-light">
            Detail your enterprise parameters, architecture goals, and commercial targets. Our managing partners and principal directors respond within 3 hours.
          </p>
        </div>

        {/* Large-Type Direct Email Action Banner */}
        <div className="mb-20">
          <button
            onClick={handleCopyEmail}
            onMouseEnter={() => {
              soundEngine.playHover();
              setCursorState({ text: copiedEmail ? 'COPIED' : 'COPY', type: 'hover' });
            }}
            onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
            className="w-full group py-8 px-8 rounded-3xl bg-[#0B132B] hover:bg-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left shadow-2xl cursor-pointer"
          >
            <div>
              <span className="font-mono text-xs text-[#C5CAD6] group-hover:text-[#060A17] uppercase tracking-widest transition-colors font-semibold">
                EXECUTIVE DESK DIRECT INBOX (CLICK TO COPY)
              </span>
              <div className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white group-hover:text-[#060A17] tracking-tight mt-1 transition-colors">
                INFO@AGNIVRIDHIINDIA.COM
              </div>
            </div>

            <div className="flex items-center gap-3 self-start md:self-auto px-5 py-3 rounded-full bg-white/10 group-hover:bg-[#060A17] text-white group-hover:text-[#D4AF37] transition-colors duration-300">
              {copiedEmail ? (
                <>
                  <Check size={18} className="text-[#D4AF37] group-hover:text-[#D4AF37]" />
                  <span className="font-mono text-xs uppercase tracking-wider font-bold">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span className="font-mono text-xs uppercase tracking-wider font-bold">COPY ADDRESS</span>
                </>
              )}
            </div>
          </button>
        </div>

        {/* Two Column Layout: Inquiry Studio & Direct Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Interactive Project Inquiry Studio */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/30 relative shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#060A17] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                    <Check size={32} />
                  </div>
                  <h3 className="font-display font-black text-3xl text-white uppercase">
                    STRATEGIC BRIEF DISPATCHED
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || 'Executive Leader'}. Our Managing Partners and Principal Directors in New Delhi have received your submission and are preparing an initial engagement assessment.
                  </p>
                  <button
                    onClick={() => {
                      soundEngine.playClick();
                      setSubmitted(false);
                    }}
                    className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Service Selection */}
                  <div className="space-y-3">
                    <label className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest block font-bold">
                      01 // SERVICE PILLAR OR UNIFIED ENGINE
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {serviceOptions.map((service) => {
                        const isSelected = formData.serviceInterest === service;
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => {
                              soundEngine.playClick();
                              setFormData({ ...formData, serviceInterest: service });
                            }}
                            className={`px-4 py-2.5 rounded-xl font-sans text-xs transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#D4AF37] text-[#060A17] font-bold shadow-[0_0_15px_rgba(212,175,55,0.5)]'
                                : 'bg-[#080E21] text-zinc-300 hover:bg-white/10 border border-white/10'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Budget Bracket */}
                  <div className="space-y-3">
                    <label className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest block font-bold">
                      02 // ESTIMATED ENGAGEMENT BUDGET (INR)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {budgetTiers.map((tier) => {
                        const isSelected = formData.budget === tier;
                        return (
                          <button
                            type="button"
                            key={tier}
                            onClick={() => {
                              soundEngine.playClick();
                              setFormData({ ...formData, budget: tier });
                            }}
                            className={`px-3 py-2.5 rounded-xl font-mono text-xs text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#D4AF37] text-[#060A17] font-bold shadow-[0_0_15px_rgba(212,175,55,0.5)]'
                                : 'bg-[#080E21] text-zinc-300 hover:bg-white/10 border border-white/10'
                            }`}
                          >
                            {tier}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Timeline */}
                  <div className="space-y-3">
                    <label className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest block font-bold">
                      03 // DESIRED SPRINT TIMELINE
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {timelines.map((time) => {
                        const isSelected = formData.timeline === time;
                        return (
                          <button
                            type="button"
                            key={time}
                            onClick={() => {
                              soundEngine.playClick();
                              setFormData({ ...formData, timeline: time });
                            }}
                            className={`px-4 py-2.5 rounded-xl font-sans text-xs transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#D4AF37] text-[#060A17] font-bold shadow-[0_0_15px_rgba(212,175,55,0.5)]'
                                : 'bg-[#080E21] text-zinc-300 hover:bg-white/10 border border-white/10'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 4: Contact Details */}
                  <div className="space-y-3 pt-4 border-t border-[#D4AF37]/20">
                    <label className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest block font-bold">
                      04 // EXECUTIVE COORDINATES
                    </label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="YOUR NAME *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#080E21] border border-[#D4AF37]/20 focus:border-[#D4AF37] focus:outline-none font-sans text-sm text-white placeholder:text-zinc-500 transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="ENTERPRISE / BRAND"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#080E21] border border-[#D4AF37]/20 focus:border-[#D4AF37] focus:outline-none font-sans text-sm text-white placeholder:text-zinc-500 transition-colors"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <input
                          type="email"
                          required
                          placeholder="OFFICIAL WORK EMAIL *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#080E21] border border-[#D4AF37]/20 focus:border-[#D4AF37] focus:outline-none font-sans text-sm text-white placeholder:text-zinc-500 transition-colors"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <textarea
                          rows={4}
                          placeholder="OUTLINE YOUR STRATEGIC TARGETS, TECHNICAL STACK OR MARKET AMBITIONS..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#080E21] border border-[#D4AF37]/20 focus:border-[#D4AF37] focus:outline-none font-sans text-sm text-white placeholder:text-zinc-500 transition-colors resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => setCursorState({ text: 'DISPATCH', type: 'hover' })}
                    onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
                    className="w-full py-4 rounded-full bg-[#D4AF37] text-[#060A17] font-display font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:scale-[1.02] hover:bg-[#DFB15B] hover:shadow-[0_0_20px_rgba(212,175,55,0.8)] transition-all cursor-pointer shadow-xl"
                  >
                    <Send size={15} />
                    <span>DISPATCH STRATEGIC ENGAGEMENT BRIEF</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Coordinates */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/30 space-y-6 shadow-2xl">
              <h3 className="font-display font-black text-xl text-white uppercase tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
                CORPORATE HEADQUARTERS
              </h3>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C5CAD6] block font-semibold uppercase">NOIDA / DELHI NCR HQ</span>
                    <span className="text-white font-medium font-sans">
                      B-750, Tower-B, IThum, Sector 62, Near Noida Electronic City Metro Station, Noida – 201301, Uttar Pradesh
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C5CAD6] block font-semibold uppercase">OFFICIAL EMAIL</span>
                    <a href="mailto:info@agnivridhiindia.com" className="text-white font-bold hover:text-[#D4AF37] transition-colors">
                      info@agnivridhiindia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C5CAD6] block font-semibold uppercase">DIRECT CONTACT LINE</span>
                    <a href="tel:+919289555190" className="text-white font-bold hover:text-[#D4AF37] transition-colors">
                      +91 9289555190
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C5CAD6] block font-semibold uppercase">RESPONSE SLA</span>
                    <span className="text-white font-medium">Within 3 Hours (24/7 Priority for Enterprise Clients)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* NDA & Sovereign Guarantee Box */}
            <div className="p-8 rounded-3xl bg-[#080E21] border border-[#D4AF37]/20 space-y-3">
              <div className="flex items-center gap-2 text-[#D4AF37] font-mono text-xs uppercase font-bold">
                <ShieldCheck size={16} className="text-[#D4AF37]" />
                <span>CONFIDENTIALITY & SOVEREIGN DATA</span>
              </div>
              <h4 className="font-display font-bold text-white uppercase text-base">
                INSTANT MUTUAL NDA
              </h4>
              <p className="font-sans text-xs text-[#C5CAD6] leading-relaxed">
                All inquiries are protected under institutional mutual non-disclosure. We provide dedicated sovereign data isolation sandboxes for enterprise banking and technology audits.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


