import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Footer({ setActivePage, setCursorState }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    soundEngine.playClick();
    navigator.clipboard.writeText('info@agnivridhiindia.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    soundEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060A17] border-t border-[#D4AF37]/30 pt-24 pb-12 overflow-hidden select-none">
      {/* Sovereign Mountain Panorama Background - Full Image & High Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-end justify-center">
        <picture className="w-full h-full flex items-end justify-center">
          <source srcSet="/images/footer_mountains.webp" type="image/webp" />
          <img
            src="/images/footer_mountains.png"
            alt="Atmospheric Mountain Horizon"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover md:object-contain object-bottom opacity-80 filter contrast-125 saturate-[0.95]"
          />
        </picture>
        {/* Soft top gradient so image blends naturally into upper footer area */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060A17] via-[#060A17]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A17]/40 via-transparent to-transparent" />
      </div>

      {/* Background Ambience Glow */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0B132B]/50 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="hoy-container relative z-10">
        {/* Giant Kinetic Footer Header */}
        <div className="mb-16">
          <div className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase mb-4 flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
            ACCEPTING SELECT ENTERPRISE COMMISSIONS // 2025-2026
          </div>

          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl text-white tracking-tighter uppercase leading-[0.9]">
            TRANSFORM YOUR <br />
            <span className="text-[#D4AF37] drop-shadow-[0_0_28px_rgba(212,175,55,0.4)]">ENTERPRISE</span> NOW.
          </h2>
        </div>

        {/* 1-Click Magnetic Email Banner */}
        <div className="mb-20">
          <button
            onClick={handleCopyEmail}
            onMouseEnter={() => {
              soundEngine.playHover();
              setCursorState && setCursorState({ text: copied ? 'COPIED' : 'COPY', type: 'hover' });
            }}
            onMouseLeave={() => setCursorState && setCursorState({ text: '', type: 'default' })}
            className="w-full text-left py-8 sm:py-10 px-8 sm:px-12 rounded-3xl bg-[#0B132B] hover:bg-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6 group relative overflow-hidden shadow-2xl cursor-pointer"
          >
            <div className="space-y-1 relative z-10">
              <span className="font-mono text-xs text-[#C5CAD6] group-hover:text-[#060A17] tracking-widest uppercase block font-semibold transition-colors duration-300">
                EXECUTIVE DESK DIRECT INBOX (CLICK TO COPY)
              </span>
              <div className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white group-hover:text-[#060A17] tracking-tight uppercase transition-colors duration-300 break-all">
                INFO@AGNIVRIDHIINDIA.COM
              </div>
            </div>

            <div className="flex items-center gap-3 relative z-10 self-start md:self-auto px-6 py-3 rounded-full bg-white/10 group-hover:bg-[#060A17] text-white group-hover:text-[#D4AF37] transition-all duration-300 shrink-0">
              {copied ? (
                <>
                  <Check size={18} className="text-[#D4AF37]" />
                  <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#D4AF37]">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy size={18} className="group-hover:text-[#D4AF37]" />
                  <span className="font-mono text-xs uppercase tracking-wider font-bold group-hover:text-[#D4AF37]">COPY ADDRESS</span>
                </>
              )}
            </div>
          </button>
        </div>

        {/* Navigation & Detailed Institutional Coordinates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#D4AF37]/20">
          {/* Col 1: Brand & Noida Sector 62 Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div
              onClick={() => {
                soundEngine.playClick();
                setActivePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer inline-block"
            >
              <span className="font-display font-black text-2xl tracking-wider text-white hover:text-[#D4AF37] transition-colors uppercase">
                AGNIVRIDHI INDIA
              </span>
            </div>

            <p className="font-sans text-sm text-[#C5CAD6] max-w-md leading-relaxed">
              Agnivridhi India unites corporate board advisory, high-concurrency cloud engineering, and algorithmic marketing momentum to scale tier-1 enterprises.
            </p>

            <div className="space-y-3 font-mono text-xs text-zinc-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>B-750, Tower-B, IThum, Sector 62, Near Noida Electronic City Metro Station, Noida – 201301, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#D4AF37] shrink-0" />
                <a href="tel:+919289555190" className="text-white hover:text-[#D4AF37] font-bold transition-colors">+91 9289555190</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#D4AF37] shrink-0" />
                <a href="mailto:info@agnivridhiindia.com" className="text-white hover:text-[#D4AF37] transition-colors">info@agnivridhiindia.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block font-bold">
              // SERVICES
            </span>
            <ul className="space-y-2.5 font-display text-sm uppercase">
              <li>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setActivePage('consultancy');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  <span className="group-hover:text-[#D4AF37] transition-colors">01 / Corporate Consultancy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setActivePage('it');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  <span className="group-hover:text-[#D4AF37] transition-colors">02 / Technology Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setActivePage('marketing');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  <span className="group-hover:text-[#D4AF37] transition-colors">03 / Marketing Services</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Pages & Company */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block font-bold">
              // PAGES
            </span>
            <ul className="space-y-2.5 font-display text-sm uppercase">
              <li>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Firm
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setActivePage('features');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Our Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setActivePage('success-stories');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setActivePage('faq');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  FAQ & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Commission Action */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block font-bold">
              // ENGAGE
            </span>
            <button
              onClick={() => {
                soundEngine.playClick();
                setActivePage('connect');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#D4AF37] text-[#060A17] font-display font-black text-xs uppercase hover:bg-[#DFB15B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <span>INITIALIZE BRIEF</span>
              <ArrowUpRight size={14} />
            </button>

            <div className="font-mono text-[11px] text-zinc-400 space-y-1 pt-2">
              <div>AVAILABILITY: <span className="text-[#D4AF37] font-bold">Q1-Q2 2026</span></div>
              <div>RESPONSE TIME: <span className="text-white">&lt; 4 HOURS</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <div>
            © 2026 AGNIVRIDHI INDIA PRIVATE LIMITED. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundEngine.playHover()}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#D4AF37] transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
