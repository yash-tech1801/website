import React from 'react';
import { Cpu, TrendingUp, MapPin, CheckCircle, Zap } from 'lucide-react';
import { CULTURE_DATA } from '../data/culture';

export default function Culture() {
  return (
    <div className="w-full min-h-screen bg-[#080E21] text-white pt-32 pb-36">
      <div className="hoy-container">
        {/* Page Hero Manifesto */}
        <div className="pb-16 border-b border-[#D4AF37]/20 mb-20">
          <div className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
            EXPERTISE // [ 04 ] BEYOND THE SOLUTION
          </div>
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-tighter uppercase leading-[0.9] max-w-5xl">
            INTELLIGENCE × <br />
            <span className="text-[#D4AF37] drop-shadow-[0_0_28px_rgba(212,175,55,0.5)]">MOMENTUM.</span>
          </h1>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <p className="font-display font-bold text-2xl sm:text-3xl text-white uppercase leading-snug">
                "{CULTURE_DATA.manifesto.heroQuote}"
              </p>
            </div>
            <div className="lg:col-span-5 space-y-4 font-sans text-sm sm:text-base text-[#C5CAD6] leading-relaxed font-light">
              {CULTURE_DATA.manifesto.body.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Strategy + Tech + Marketing Convergence */}
        <div className="mb-28 p-8 sm:p-12 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/25 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-2">
              // THE CONVERGENCE MOAT
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase">
              WHY DECOUPLE STRATEGY FROM ENGINEERING AND MARKET VELOCITY?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Consultancy */}
            <div className="p-8 rounded-2xl bg-[#080E21] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-display font-black text-xl text-white uppercase">
                [ 01 ] CORPORATE CONSULTANCY
              </h3>
              <p className="font-sans text-sm text-[#C5CAD6] leading-relaxed">
                Boardroom advisory, quantitative unit economic modelling, capital efficiency audits, and M&A integration frameworks.
              </p>
              <div className="font-mono text-xs text-[#D4AF37] pt-2 font-bold">
                // VALUATION MAXIMIZATION
              </div>
            </div>

            {/* Box 2: Tech */}
            <div className="p-8 rounded-2xl bg-[#080E21] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Cpu size={24} />
              </div>
              <h3 className="font-display font-black text-xl text-white uppercase">
                [ 02 ] TECHNOLOGY SERVICES
              </h3>
              <p className="font-sans text-sm text-[#C5CAD6] leading-relaxed">
                Mission-critical distributed architectures, elastic Kubernetes clusters, custom enterprise software, and private sovereign LLM reasoning.
              </p>
              <div className="font-mono text-xs text-[#D4AF37] pt-2 font-bold">
                // 99.999% SLA RESILIENCE
              </div>
            </div>

            {/* Box 3: Marketing */}
            <div className="p-8 rounded-2xl bg-[#080E21] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Zap size={24} />
              </div>
              <h3 className="font-display font-black text-xl text-white uppercase">
                [ 03 ] MARKETING SERVICES
              </h3>
              <p className="font-sans text-sm text-[#C5CAD6] leading-relaxed">
                Data-driven performance media engines, brand positioning, and multi-channel acquisition funnels that capture global audience share.
              </p>
              <div className="font-mono text-xs text-[#D4AF37] pt-2 font-bold">
                // COMPOUNDING ROI FLYWHEEL
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Core Pillars Grid */}
        <div className="mb-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#D4AF37]/20 mb-12">
            <div>
              <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-1">
                // [ 04 ] BEYOND THE SOLUTION
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase">
                OUR OPERATING PRINCIPLES
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CULTURE_DATA.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-8 rounded-2xl bg-[#0B132B] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-[#D4AF37] font-bold">
                    {pillar.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#060A17] font-mono text-[10px] text-[#D4AF37] uppercase border border-[#D4AF37]/20 font-bold">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl text-white group-hover:text-[#D4AF37] transition-colors uppercase">
                  {pillar.title}
                </h3>
                <h4 className="font-mono text-xs text-[#C5CAD6] uppercase">
                  {pillar.subtitle}
                </h4>
                <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mixed-Media BTS Gallery */}
        <div className="mb-28">
          <div className="pb-8 border-b border-[#D4AF37]/20 mb-12">
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-1">
              // BEHIND THE SOLUTION
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase">
              EXECUTIVE WAR ROOMS & SERVER MATRIX
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE_DATA.btsMedia.map((bts) => (
              <div
                key={bts.id}
                className="group relative rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-zinc-950 aspect-[3/4]"
              >
                <img
                  src={bts.image}
                  alt={bts.title}
                  width={1376}
                  height={768}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060A17] via-[#060A17]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />

                <div className="absolute top-4 left-4 font-mono text-[10px] px-2 py-1 rounded bg-[#060A17]/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                  {bts.time}
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="font-mono text-[9px] text-[#D4AF37] tracking-widest uppercase font-bold">
                    {bts.tag}
                  </span>
                  <h4 className="font-display font-bold text-base text-white uppercase">
                    {bts.title}
                  </h4>
                  <p className="font-mono text-[11px] text-[#C5CAD6]">
                    {bts.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Leadership */}
        <div className="mb-28">
          <div className="pb-8 border-b border-[#D4AF37]/20 mb-12">
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-1">
              // MANAGING PARTNERS & DIRECTORS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase">
              EXECUTIVE LEADERSHIP
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CULTURE_DATA.team.map((member, idx) => (
              <div key={idx} className="group space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-[#0B132B] relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#060A17]/90 backdrop-blur-md font-mono text-[10px] text-[#D4AF37] border border-[#D4AF37]/30">
                    {member.specialty}
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-black text-lg text-white group-hover:text-[#D4AF37] transition-colors uppercase">
                    {member.name}
                  </h3>
                  <div className="font-mono text-xs text-[#D4AF37] uppercase mt-0.5 font-semibold">
                    {member.role}
                  </div>
                  <p className="font-sans text-xs text-[#C5CAD6] leading-relaxed mt-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Noida / Delhi NCR Corporate Headquarters Specs */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B132B] border border-[#D4AF37]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase flex items-center gap-2 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
                CORPORATE HEADQUARTERS & ADVISORY PODS
              </span>
              <h3 className="font-display font-black text-3xl text-white uppercase">
                NOIDA / DELHI NCR HQ SPECS
              </h3>
              <div className="flex items-start gap-2 text-[#C5CAD6] font-sans text-xs leading-relaxed">
                <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{CULTURE_DATA.studioSpecs.location}</span>
              </div>
              <div className="pt-2 font-mono text-xs text-[#C5CAD6] space-y-1">
                <div>TEL: <a href="tel:+919289555190" className="text-white font-bold hover:text-[#D4AF37]">+91 9289555190</a></div>
                <div>EMAIL: <a href="mailto:info@agnivridhiindia.com" className="text-white font-bold hover:text-[#D4AF37]">info@agnivridhiindia.com</a></div>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {CULTURE_DATA.studioSpecs.facilities.map((fac, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#080E21] border border-[#D4AF37]/15 font-sans text-xs text-zinc-300 flex items-start gap-2.5"
                >
                  <CheckCircle size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


