import React, { useEffect } from 'react';
import { X, Trophy, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function ProjectModal({
  project,
  onClose,
  onSelectProject,
  allProjects,
  setCursorState
}) {
  useEffect(() => {
    if (project) {
      soundEngine.playImpact();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Find next project in line
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      data-lenis-prevent="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          soundEngine.playClick();
          onClose();
        }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#060A17]/95 backdrop-blur-2xl overflow-y-auto animate-fadeIn"
    >
      {/* Top Floating Bar */}
      <div className="fixed top-0 left-0 w-full z-[110] px-6 py-5 flex items-center justify-between pointer-events-none bg-gradient-to-b from-[#060A17]/90 to-transparent">
        <div className="flex items-center gap-3 pointer-events-auto">
          <span className="px-3.5 py-1 rounded-full bg-[#D4AF37] text-[#060A17] font-display font-black text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(212,175,55,0.6)]">
            {project.category}
          </span>
          <span className="font-mono text-xs text-[#C5CAD6]">
            CASE SPECIFICATION #{project.year} // AGNIVRIDHI INDIA
          </span>
        </div>

        <button
          onClick={() => {
            soundEngine.playClick();
            onClose();
          }}
          onMouseEnter={() => setCursorState({ text: 'CLOSE', type: 'hover' })}
          onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
          className="pointer-events-auto p-3 rounded-full bg-[#0B132B] text-white hover:bg-[#D4AF37] hover:text-[#060A17] border border-[#D4AF37]/30 transition-colors duration-300 group cursor-pointer"
          aria-label="Close Case Study"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Modal Scroll Content */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-24 min-h-screen">
        {/* Cinema Image/Visual Container */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#D4AF37]/25 shadow-2xl bg-[#0B132B] mb-12">
          <img
            src={project.thumbnail}
            alt={project.title}
            width={1376}
            height={768}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter contrast-110"
          />
        </div>

        {/* Hero Title & Client Accolades */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D4AF37]/20 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#D4AF37] font-mono text-xs uppercase tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-gold" />
              <span>{project.client}</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
              {project.title}
            </h1>
            <p className="font-mono text-lg text-[#D4AF37] uppercase tracking-wide">
              {project.subtitle}
            </p>
          </div>

          {project.award && (
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0B132B] border border-[#D4AF37]/30 backdrop-blur-md">
              <Trophy className="text-[#D4AF37] shrink-0" size={24} />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider font-bold">ACCOLADE</span>
                <span className="font-sans text-xs font-semibold text-white">{project.award}</span>
              </div>
            </div>
          )}
        </div>

        {/* Metrics Strip */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-4 mb-14">
            <div className="p-6 rounded-2xl bg-[#0B132B] border border-[#D4AF37]/20 text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#D4AF37]">
                {project.metrics.views}
              </div>
              <div className="font-mono text-xs text-[#C5CAD6] mt-1 uppercase">SCALE / THROUGHPUT</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#0B132B] border border-[#D4AF37]/20 text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-white">
                {project.metrics.engagement}
              </div>
              <div className="font-mono text-xs text-[#C5CAD6] mt-1 uppercase">SLA & ROI MULTIPLIER</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#0B132B] border border-[#D4AF37]/20 text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#DFB15B]">
                {project.metrics.shares}
              </div>
              <div className="font-mono text-xs text-[#C5CAD6] mt-1 uppercase">LATENCY / VELOCITY</div>
            </div>
          </div>
        )}

        {/* Deep Dive Narrative (Challenge & Approach) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h3 className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest mb-3 font-bold">
                // EXECUTIVE SUMMARY
              </h3>
              <p className="font-sans text-lg sm:text-xl text-[#C5CAD6] leading-relaxed font-light">
                {project.summary}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="space-y-2">
                <h4 className="font-display font-bold text-white uppercase text-sm tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  THE CHALLENGE
                </h4>
                <p className="font-sans text-sm text-[#C5CAD6] leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-[#D4AF37] uppercase text-sm tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  THE AGNIVRIDHI APPROACH
                </h4>
                <p className="font-sans text-sm text-[#C5CAD6] leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            {project.deliverables && (
              <div className="pt-6 border-t border-white/10">
                <h4 className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest mb-4 font-bold">
                  ARCHITECTURAL & STRATEGIC DELIVERABLES
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-[#080E21] border border-[#D4AF37]/20 font-sans text-xs text-white flex items-center gap-2"
                    >
                      <CheckCircle2 size={13} className="text-[#D4AF37]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Credits Sidebar */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-[#0B132B] border border-[#D4AF37]/20 h-fit space-y-6">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider pb-3 border-b border-white/10 flex items-center gap-2">
              <Terminal size={14} className="text-[#D4AF37]" />
              PROJECT LEADERSHIP
            </h3>
            <div className="space-y-4 font-mono text-xs">
              <div className="flex flex-col">
                <span className="text-[#C5CAD6]">LEAD STRATEGIST / PARTNER</span>
                <span className="text-white font-semibold">{project.credits?.leadArchitect || project.credits?.leadPartner || project.credits?.creativeDirector || 'Agnivridhi Managing Partner'}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#C5CAD6]">TECHNOLOGY LEAD</span>
                <span className="text-white font-semibold">{project.credits?.cloudLead || project.credits?.dataDirector || project.credits?.performanceLead || 'New Delhi & Bangalore Tech Lab'}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#C5CAD6]">SECURITY & COMPLIANCE</span>
                <span className="text-white font-semibold">{project.credits?.securityAuditor || project.credits?.aiResearchLead || 'Tier-4 Audit Sandbox'}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#C5CAD6]">DELIVERY HUB</span>
                <span className="text-white font-semibold">Agnivridhi Corporate Headquarters, New Delhi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Project Navigator */}
        <div className="border-t border-[#D4AF37]/20 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#C5CAD6] uppercase tracking-widest">NEXT CASE STUDY</span>
            <h4 className="font-display font-black text-2xl text-white mt-1">{nextProject.title}</h4>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onSelectProject(nextProject);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onMouseEnter={() => setCursorState({ text: 'NEXT', type: 'hover' })}
            onMouseLeave={() => setCursorState({ text: '', type: 'default' })}
            className="px-6 py-3 rounded-full bg-[#D4AF37] text-[#060A17] font-display font-black text-xs tracking-wider uppercase flex items-center gap-2 hover:shadow-[0_0_16px_rgba(212,175,55,0.6)] hover:bg-[#DFB15B] hover:scale-105 transition-all cursor-pointer"
          >
            <span>VIEW NEXT CASE STUDY</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}


