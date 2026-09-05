import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles, Layers, Trophy, HelpCircle, Briefcase, Cpu, TrendingUp } from 'lucide-react';
import RollingButton from './RollingButton';
import { soundEngine } from '../utils/audio';


export default function Navbar({
  activePage,
  setActivePage,
  onOpenConnect,
  setCursorState
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  const servicesRef = useRef(null);
  const pagesRef = useRef(null);

  // Header scroll appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
      if (pagesRef.current && !pagesRef.current.contains(e.target)) {
        setPagesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page) => {
    soundEngine.playClick();
    setActivePage(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPagesDropdownOpen(false);
    setCursorState({ text: '', type: 'default' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceOptions = [
    {
      id: 'consultancy',
      label: 'CONSULTANCY',
      desc: 'M&A valuation, unit economics & corporate strategy',
      icon: Briefcase
    },
    {
      id: 'it',
      label: 'IT SERVICES',
      desc: 'Sovereign cloud, private AI & custom microservices',
      icon: Cpu
    },
    {
      id: 'marketing',
      label: 'MARKETING',
      desc: 'Algorithmic media bidding & brand dominance',
      icon: TrendingUp
    }
  ];

  const dropdownPages = [
    {
      id: 'features',
      label: 'OUR FEATURES',
      desc: 'Enterprise architecture, security sandboxes & cloud specs',
      icon: Layers
    },
    {
      id: 'success-stories',
      label: 'SUCCESS STORIES',
      desc: 'Verified enterprise transformations & ROI metrics',
      icon: Trophy
    },
    {
      id: 'faq',
      label: 'FAQ',
      desc: 'Frequently asked questions & engagement models',
      icon: HelpCircle
    }
  ];

  const isServicesActive = ['consultancy', 'it', 'marketing'].includes(activePage);
  const isPagesActive = ['features', 'success-stories', 'faq'].includes(activePage);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#060A17]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-[0_8px_32px_rgba(0,0,0,0.85)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="hoy-container flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            onMouseEnter={() => {
              soundEngine.playHover();
              setCursorState({ text: '', type: 'hover' });
            }}
            onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none text-left"
            aria-label="Agnivridhi India Corporate Home"
          >
            {/* Animated Golden Flame Emblem */}
            <div className="w-10 h-10 rounded-xl bg-[#0B132B] border border-[#D4AF37]/30 flex items-center justify-center p-2 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 relative overflow-hidden">
              <img
                src="/images/agnivridhi_logo.png"
                alt="Agnivridhi India Emblem"
                width={32}
                height={32}
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D4AF37]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="flex flex-col">
              <div className="font-display font-black text-lg sm:text-xl tracking-tight text-white uppercase group-hover:text-[#D4AF37] transition-colors leading-none flex items-center gap-1.5">
                <span>AGNIVRIDHI</span>
                <span className="text-[#D4AF37]">INDIA</span>
              </div>
              <span className="font-mono text-[8.5px] sm:text-[9.5px] tracking-widest text-[#C5CAD6] uppercase mt-1">
                CONSULTANCY • TECH • MARKETING
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* HOME */}
            <button
              onClick={() => handleNavClick('home')}
              onMouseEnter={() => {
                soundEngine.playHover();
                setCursorState({ text: '', type: 'hover' });
              }}
              onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
              className={`px-3.5 py-2 font-display text-xs tracking-widest uppercase transition-all duration-300 relative rounded-full focus:outline-none cursor-pointer flex items-center gap-1.5 border ${
                activePage === 'home'
                  ? 'text-[#D4AF37] font-bold bg-[#0B132B] border-[#D4AF37]/40 shadow-[0_0_16px_rgba(212,175,55,0.25)]'
                  : 'text-[#C5CAD6] border-transparent hover:text-[#D4AF37] hover:bg-[#0B132B] hover:border-[#D4AF37]/35 hover:shadow-[0_0_16px_rgba(212,175,55,0.2)]'
              }`}
            >
              <span>HOME</span>
              {activePage === 'home' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
              )}
            </button>

            {/* ABOUT */}
            <button
              onClick={() => handleNavClick('about')}
              onMouseEnter={() => {
                soundEngine.playHover();
                setCursorState({ text: '', type: 'hover' });
              }}
              onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
              className={`px-3.5 py-2 font-display text-xs tracking-widest uppercase transition-all duration-300 relative rounded-full focus:outline-none cursor-pointer flex items-center gap-1.5 border ${
                activePage === 'about'
                  ? 'text-[#D4AF37] font-bold bg-[#0B132B] border-[#D4AF37]/40 shadow-[0_0_16px_rgba(212,175,55,0.25)]'
                  : 'text-[#C5CAD6] border-transparent hover:text-[#D4AF37] hover:bg-[#0B132B] hover:border-[#D4AF37]/35 hover:shadow-[0_0_16px_rgba(212,175,55,0.2)]'
              }`}
            >
              <span>ABOUT</span>
              {activePage === 'about' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
              )}
            </button>

            {/* SERVICES DROPDOWN */}
            <div
              ref={servicesRef}
              className="relative z-[100]"
              onMouseEnter={() => {
                setServicesDropdownOpen(true);
                setPagesDropdownOpen(false);
              }}
              onMouseLeave={() => {
                setServicesDropdownOpen(false);
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  soundEngine.playClick();
                  setServicesDropdownOpen((prev) => !prev);
                  setPagesDropdownOpen(false);
                }}
                onMouseEnter={() => {
                  soundEngine.playHover();
                  setCursorState({ text: '', type: 'hover' });
                }}
                onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
                className={`px-3.5 py-2 font-display text-xs tracking-widest uppercase transition-all duration-300 relative rounded-full focus:outline-none cursor-pointer flex items-center gap-1.5 border ${
                  isServicesActive || servicesDropdownOpen
                    ? 'text-[#D4AF37] font-bold bg-[#0B132B] border-[#D4AF37]/40 shadow-[0_0_16px_rgba(212,175,55,0.25)]'
                    : 'text-[#C5CAD6] border-transparent hover:text-[#D4AF37] hover:bg-[#0B132B] hover:border-[#D4AF37]/35 hover:shadow-[0_0_16px_rgba(212,175,55,0.2)]'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>SERVICES</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 text-[#D4AF37] ${
                    servicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
                {isServicesActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
                )}
              </button>

              {/* Services Dropdown Panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-80 z-[120] transition-[opacity,transform] duration-200 ${
                  servicesDropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="p-3 rounded-2xl bg-[#080E21] border border-[#D4AF37]/40 shadow-[0_12px_36px_rgba(0,0,0,0.95)] space-y-1.5">
                  <div className="px-3 py-1.5 font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold border-b border-[#D4AF37]/20 flex items-center justify-between">
                    <span>PRACTICE AREAS</span>
                    <Sparkles size={12} className="text-[#D4AF37]" />
                  </div>

                  {serviceOptions.map((opt) => {
                    const IconComp = opt.icon;
                    const isOptActive = activePage === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleNavClick(opt.id)}
                        onMouseEnter={() => {
                          soundEngine.playHover();
                          setCursorState({ text: '', type: 'hover' });
                        }}
                        onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
                        className={`w-full p-3 rounded-xl text-left transition-all duration-300 flex items-start gap-3 cursor-pointer group/item border ${
                          isOptActive
                            ? 'bg-[#0B132B] border-[#D4AF37]/50 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                            : 'border-transparent text-white hover:bg-[#0B132B] hover:border-[#D4AF37]/35 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${isOptActive ? 'bg-[#D4AF37] text-[#060A17]' : 'bg-[#060A17] text-[#D4AF37] group-hover/item:bg-[#D4AF37] group-hover/item:text-[#060A17] border border-[#D4AF37]/20 group-hover/item:border-[#D4AF37] group-hover/item:shadow-[0_0_12px_rgba(212,175,55,0.5)]'} transition-all duration-300 shrink-0 mt-0.5`}>
                          <IconComp size={15} />
                        </div>
                        <div>
                          <div className="font-display font-bold text-xs uppercase tracking-wider group-hover/item:text-[#D4AF37] transition-colors">
                            {opt.label}
                          </div>
                          <p className="font-sans text-[11px] text-[#C5CAD6] leading-snug mt-0.5">
                            {opt.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* EXPERTISE */}
            <button
              onClick={() => handleNavClick('culture')}
              onMouseEnter={() => {
                soundEngine.playHover();
                setCursorState({ text: '', type: 'hover' });
              }}
              onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
              className={`px-3.5 py-2 font-display text-xs tracking-widest uppercase transition-all duration-300 relative rounded-full focus:outline-none cursor-pointer flex items-center gap-1.5 border ${
                activePage === 'culture'
                  ? 'text-[#D4AF37] font-bold bg-[#0B132B] border-[#D4AF37]/40 shadow-[0_0_16px_rgba(212,175,55,0.25)]'
                  : 'text-[#C5CAD6] border-transparent hover:text-[#D4AF37] hover:bg-[#0B132B] hover:border-[#D4AF37]/35 hover:shadow-[0_0_16px_rgba(212,175,55,0.2)]'
              }`}
            >
              <span>EXPERTISE</span>
              {activePage === 'culture' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
              )}
            </button>

            {/* PAGES DROPDOWN */}
            <div
              ref={pagesRef}
              className="relative z-[100]"
              onMouseEnter={() => {
                setPagesDropdownOpen(true);
                setServicesDropdownOpen(false);
              }}
              onMouseLeave={() => {
                setPagesDropdownOpen(false);
              }}
            >
              <button
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                onMouseEnter={() => {
                  soundEngine.playHover();
                  setCursorState({ text: '', type: 'hover' });
                }}
                onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
                className={`px-3.5 py-2 font-display text-xs tracking-widest uppercase transition-all duration-300 relative rounded-full focus:outline-none cursor-pointer flex items-center gap-1.5 border ${
                  isPagesActive || pagesDropdownOpen
                    ? 'text-[#D4AF37] font-bold bg-[#0B132B] border-[#D4AF37]/40 shadow-[0_0_16px_rgba(212,175,55,0.25)]'
                    : 'text-[#C5CAD6] border-transparent hover:text-[#D4AF37] hover:bg-[#0B132B] hover:border-[#D4AF37]/35 hover:shadow-[0_0_16px_rgba(212,175,55,0.2)]'
                }`}
                aria-expanded={pagesDropdownOpen}
              >
                <span>PAGES</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 text-[#D4AF37] ${
                    pagesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
                {isPagesActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
                )}
              </button>

              {/* Pages Dropdown Floating Panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-80 z-[120] transition-[opacity,transform] duration-200 ${
                  pagesDropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="p-3 rounded-2xl bg-[#080E21] border border-[#D4AF37]/40 shadow-[0_12px_36px_rgba(0,0,0,0.95)] space-y-1.5">
                  <div className="px-3 py-1.5 font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold border-b border-[#D4AF37]/20 flex items-center justify-between">
                    <span>EXPLORE PLATFORM</span>
                    <Sparkles size={12} className="text-[#D4AF37]" />
                  </div>

                  {dropdownPages.map((page) => {
                    const IconComponent = page.icon;
                    const isPageActive = activePage === page.id;
                    return (
                      <button
                        key={page.id}
                        onClick={() => handleNavClick(page.id)}
                        onMouseEnter={() => {
                          soundEngine.playHover();
                          setCursorState({ text: '', type: 'hover' });
                        }}
                        onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
                        className={`w-full p-3 rounded-xl text-left transition-all duration-300 flex items-start gap-3 cursor-pointer group/item border ${
                          isPageActive
                            ? 'bg-[#0B132B] border-[#D4AF37]/50 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                            : 'border-transparent text-white hover:bg-[#0B132B] hover:border-[#D4AF37]/35 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${isPageActive ? 'bg-[#D4AF37] text-[#060A17]' : 'bg-[#060A17] text-[#D4AF37] group-hover/item:bg-[#D4AF37] group-hover/item:text-[#060A17] border border-[#D4AF37]/20 group-hover/item:border-[#D4AF37] group-hover/item:shadow-[0_0_12px_rgba(212,175,55,0.5)]'} transition-all duration-300 shrink-0 mt-0.5`}>
                          <IconComponent size={15} />
                        </div>
                        <div>
                          <div className="font-display font-bold text-xs uppercase tracking-wider group-hover/item:text-[#D4AF37] transition-colors">
                            {page.label}
                          </div>
                          <p className="font-sans text-[11px] text-[#C5CAD6] leading-snug mt-0.5">
                            {page.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <button
              onClick={() => handleNavClick('connect')}
              onMouseEnter={() => {
                soundEngine.playHover();
                setCursorState({ text: '', type: 'hover' });
              }}
              onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
              className={`px-3.5 py-2 font-display text-xs tracking-widest uppercase transition-all duration-300 relative rounded-full focus:outline-none cursor-pointer flex items-center gap-1.5 border ${
                activePage === 'connect'
                  ? 'text-[#D4AF37] font-bold bg-[#0B132B] border-[#D4AF37]/40 shadow-[0_0_16px_rgba(212,175,55,0.25)]'
                  : 'text-[#C5CAD6] border-transparent hover:text-[#D4AF37] hover:bg-[#0B132B] hover:border-[#D4AF37]/35 hover:shadow-[0_0_16px_rgba(212,175,55,0.2)]'
              }`}
            >
              <span>CONTACT</span>
              {activePage === 'connect' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
              )}
            </button>

            {/* Gold Action CTA with Rolling Label */}
            <RollingButton
              variant="primary"
              onClick={() => handleNavClick('connect')}
              className="ml-3 !px-5 !py-2.5 shadow-lg"
              icon={ArrowUpRight}
            >
              ENGAGE FIRM
            </RollingButton>
          </nav>


          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => {
                soundEngine.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2.5 rounded-xl bg-[#0B132B] border border-[#D4AF37]/40 text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} className="text-[#D4AF37]" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#060A17]/98 backdrop-blur-lg flex flex-col justify-between p-6 sm:p-8 pt-24 lg:hidden transition-[opacity,transform] duration-500 overflow-y-auto ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-6'
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#D4AF37]/20">
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest font-bold">NAVIGATION</span>
            <span className="font-mono text-[10px] text-[#C5CAD6]">NOIDA SEC-62 HQ</span>
          </div>

          {/* HOME */}
          <button
            onClick={() => handleNavClick('home')}
            onMouseEnter={() => soundEngine.playHover()}
            className={`text-left font-display font-black text-2xl tracking-tight uppercase transition-all duration-300 py-1 cursor-pointer hover:translate-x-1.5 ${
              activePage === 'home' ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
            }`}
          >
            HOME
          </button>

          {/* ABOUT */}
          <button
            onClick={() => handleNavClick('about')}
            onMouseEnter={() => soundEngine.playHover()}
            className={`text-left font-display font-black text-2xl tracking-tight uppercase transition-all duration-300 py-1 cursor-pointer hover:translate-x-1.5 ${
              activePage === 'about' ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
            }`}
          >
            ABOUT
          </button>

          {/* MOBILE SERVICES ACCORDION */}
          <div className="border-y border-[#D4AF37]/20 py-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              onMouseEnter={() => soundEngine.playHover()}
              className="w-full flex items-center justify-between font-display font-black text-2xl tracking-tight uppercase text-white py-2 cursor-pointer hover:text-[#D4AF37] transition-all duration-300"
            >
              <span className={isServicesActive ? 'text-[#D4AF37]' : ''}>SERVICES</span>
              <ChevronDown
                size={20}
                className={`text-[#D4AF37] transition-transform duration-300 ${
                  mobileServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 space-y-2.5 pt-2 pb-2">
                {serviceOptions.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleNavClick(s.id)}
                      onMouseEnter={() => soundEngine.playHover()}
                      className={`w-full text-left flex items-center gap-3 py-1.5 font-display text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer hover:translate-x-1.5 ${
                        activePage === s.id ? 'text-[#D4AF37] font-bold' : 'text-[#C5CAD6] hover:text-[#D4AF37]'
                      }`}
                    >
                      <IconComp size={14} className="text-[#D4AF37]" />
                      <span>{s.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* EXPERTISE */}
          <button
            onClick={() => handleNavClick('culture')}
            onMouseEnter={() => soundEngine.playHover()}
            className={`text-left font-display font-black text-2xl tracking-tight uppercase transition-all duration-300 py-1 cursor-pointer hover:translate-x-1.5 ${
              activePage === 'culture' ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
            }`}
          >
            EXPERTISE
          </button>

          {/* MOBILE PAGES ACCORDION */}
          <div className="border-b border-[#D4AF37]/20 pb-2">
            <button
              onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
              onMouseEnter={() => soundEngine.playHover()}
              className="w-full flex items-center justify-between font-display font-black text-2xl tracking-tight uppercase text-white py-2 cursor-pointer hover:text-[#D4AF37] transition-all duration-300"
            >
              <span className={isPagesActive ? 'text-[#D4AF37]' : ''}>PAGES</span>
              <ChevronDown
                size={20}
                className={`text-[#D4AF37] transition-transform duration-300 ${
                  mobilePagesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobilePagesOpen && (
              <div className="pl-4 space-y-2.5 pt-2 pb-2">
                {dropdownPages.map((p) => {
                  const IconComp = p.icon;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleNavClick(p.id)}
                      onMouseEnter={() => soundEngine.playHover()}
                      className={`w-full text-left flex items-center gap-3 py-1.5 font-display text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer hover:translate-x-1.5 ${
                        activePage === p.id ? 'text-[#D4AF37] font-bold' : 'text-[#C5CAD6] hover:text-[#D4AF37]'
                      }`}
                    >
                      <IconComp size={14} className="text-[#D4AF37]" />
                      <span>{p.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* CONTACT */}
          <button
            onClick={() => handleNavClick('connect')}
            onMouseEnter={() => soundEngine.playHover()}
            className={`text-left font-display font-black text-2xl tracking-tight uppercase transition-all duration-300 py-1 cursor-pointer hover:translate-x-1.5 ${
              activePage === 'connect' ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
            }`}
          >
            CONTACT
          </button>
        </div>

        {/* Mobile Drawer Bottom Contact Block */}
        <div className="border-t border-[#D4AF37]/20 pt-5 mt-6 flex flex-col gap-3.5">
          <div className="font-mono text-xs text-[#C5CAD6] space-y-1 bg-[#0B132B] p-3.5 rounded-xl border border-[#D4AF37]/20">
            <div>TEL: <a href="tel:+919289555190" className="text-white font-bold hover:text-[#D4AF37]">+91 9289555190</a></div>
            <div>MAIL: <a href="mailto:info@agnivridhiindia.com" className="text-white font-bold hover:text-[#D4AF37]">info@agnivridhiindia.com</a></div>
          </div>
          <button
            onClick={() => handleNavClick('connect')}
            className="w-full py-3.5 rounded-full bg-[#D4AF37] text-[#060A17] font-display font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_16px_rgba(212,175,55,0.6)] cursor-pointer"
          >
            <span>SCHEDULE STRATEGY CONSULTATION</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </>
  );
}
