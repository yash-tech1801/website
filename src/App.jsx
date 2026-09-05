import React, { useState, useEffect, Suspense, lazy } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PROJECTS_DATA } from './data/projects';

// Lazy-loaded dynamic page routes
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Culture = lazy(() => import('./pages/Culture'));
const Features = lazy(() => import('./pages/Features'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Consultancy = lazy(() => import('./pages/Consultancy'));
const ITServices = lazy(() => import('./pages/ITServices'));
const MarketingServices = lazy(() => import('./pages/MarketingServices'));
const Connect = lazy(() => import('./pages/Connect'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));

// Branded Minimalist Luxury Page Loader Fallback
function PageLoader() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center py-24" aria-live="polite" aria-busy="true">
      <div className="relative flex items-center justify-center">
        {/* Ambient Gold Radial Glow */}
        <div className="absolute w-28 h-28 rounded-full bg-[#D4AF37]/10 blur-xl animate-pulse" />
        
        {/* Subtle rotating gold ring */}
        <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 border-t-[#D4AF37] animate-spin" />
        
        {/* Precision Center Gold Dot */}
        <div className="absolute w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_12px_#D4AF37]" />
      </div>
      <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-[#D4AF37]/80">
        LOADING INTERFACE
      </div>
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState('home'); 
  // 'home' | 'about' | 'consultancy' | 'it' | 'marketing' | 'culture' | 'features' | 'success-stories' | 'faq' | 'connect'
  const [selectedProject, setSelectedProject] = useState(null);
  const setCursorState = () => {};

  // Sync window URL hash for direct bookmarking/sharing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'work') {
        setActivePage('consultancy');
        return;
      }
      const validPages = [
        'home', 'about', 'consultancy', 'it', 'marketing',
        'culture', 'features', 'success-stories', 'faq', 'connect'
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#060A17] text-white selection:bg-[#D4AF37] selection:text-[#060A17] overflow-x-hidden font-sans">
        {/* Film Grain Texture Overlay */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Global Navigation Header */}
        <Navbar
          activePage={activePage}
          setActivePage={handlePageChange}
          onOpenConnect={() => handlePageChange('connect')}
          setCursorState={setCursorState}
        />

        {/* Main View Router with Suspense Code-Splitting */}
        <main className="w-full">
          <Suspense fallback={<PageLoader />}>
            {activePage === 'home' && (
              <Home
                setActivePage={handlePageChange}
                onSelectProject={setSelectedProject}
                setCursorState={setCursorState}
              />
            )}

            {activePage === 'about' && (
              <About
                setActivePage={handlePageChange}
                setCursorState={setCursorState}
              />
            )}

            {activePage === 'consultancy' && (
              <Consultancy
                setActivePage={handlePageChange}
                setCursorState={setCursorState}
              />
            )}

            {activePage === 'it' && (
              <ITServices
                setActivePage={handlePageChange}
                setCursorState={setCursorState}
              />
            )}

            {activePage === 'marketing' && (
              <MarketingServices
                setActivePage={handlePageChange}
                setCursorState={setCursorState}
              />
            )}

            {activePage === 'culture' && (
              <Culture
                setActivePage={handlePageChange}
                setCursorState={setCursorState}
              />
            )}

            {activePage === 'features' && (
              <Features
                setActivePage={handlePageChange}
                setCursorState={setCursorState}
              />
            )}

            {activePage === 'success-stories' && (
              <SuccessStories
                setActivePage={handlePageChange}
                setCursorState={setCursorState}
              />
            )}

            {activePage === 'faq' && (
              <FAQ
                setActivePage={handlePageChange}
                setCursorState={setCursorState}
              />
            )}

            {activePage === 'connect' && (
              <Connect
                setCursorState={setCursorState}
              />
            )}
          </Suspense>
        </main>

        {/* Cinema Lightbox / Case Study Modal with Suspense */}
        {selectedProject && (
          <Suspense fallback={null}>
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              onSelectProject={setSelectedProject}
              allProjects={PROJECTS_DATA}
              setCursorState={setCursorState}
            />
          </Suspense>
        )}

        {/* Global Cinematic Footer */}
        <Footer
          setActivePage={handlePageChange}
          setCursorState={setCursorState}
        />
      </div>
    </SmoothScroll>
  );
}

