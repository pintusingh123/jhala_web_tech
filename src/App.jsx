import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import TerminalHeader from './components/TerminalHeader';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import About from './components/About';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const mainRef = useRef(null);

  // Initialize Lenis Smooth Scrolling and sync with GSAP
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis to GSAP Ticker for 60-120fps synchronization
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Initial GSAP Reveal Animations for sections
    const ctx = gsap.context(() => {
      gsap.from('.gsap-fade-in', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });

      gsap.utils.toArray('.gsap-scroll-trigger').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: 'power3.out',
        });
      });
    }, mainRef);

    // Scroll to top when active tab changes
    lenis.scrollTo(0, { immediate: true });

    return () => {
      ctx.revert();
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, [activeTab]);

  const handleOpenContact = (service = null) => {
    setSelectedService(service);
    setIsContactOpen(true);
  };

  const handleSelectService = (service) => {
    handleOpenContact(service);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#131313] text-[#e4e2e1] selection:bg-[#C8FF3D] selection:text-[#0A0A0A]">
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenContact={() => handleOpenContact()} 
      />

      {/* Main Content Area */}
      <main 
        ref={mainRef}
        id="main-content" 
        tabIndex="-1" 
        className="flex-grow flex flex-col w-full max-w-[1440px] mx-auto px-4 md:px-12 py-6 gap-12 outline-none"
      >
        {/* Tab 1: Full Home Overview */}
        {activeTab === 'home' && (
          <>
            <div className="gsap-fade-in">
              <TerminalHeader label="HOME_CORE" />
              <Hero 
                onExploreServices={() => setActiveTab('services')} 
                onOpenContact={() => handleOpenContact()} 
              />
            </div>

            <div className="gsap-scroll-trigger">
              <Stats />
            </div>

            <div className="gsap-scroll-trigger">
              <Services onSelectService={handleSelectService} />
            </div>

            <div className="gsap-scroll-trigger">
              <Process onOpenContact={() => handleOpenContact()} />
            </div>

            <div className="gsap-scroll-trigger">
              <Portfolio onOpenContact={() => handleOpenContact()} />
            </div>

            <div className="gsap-scroll-trigger">
              <Testimonials />
            </div>

            <div className="gsap-scroll-trigger">
              <Blog />
            </div>

            <div className="gsap-scroll-trigger">
              <FAQ onOpenContact={() => handleOpenContact()} />
            </div>

            <div className="gsap-scroll-trigger">
              <About onOpenContact={() => handleOpenContact()} />
            </div>
          </>
        )}

        {/* Tab 2: Services Matrix */}
        {activeTab === 'services' && (
          <div className="gsap-fade-in flex flex-col gap-10">
            <TerminalHeader label="SERVICES_MATRIX" />
            <Services onSelectService={handleSelectService} />
            <Process onOpenContact={() => handleOpenContact()} />
            <FAQ onOpenContact={() => handleOpenContact()} />
          </div>
        )}

        {/* Tab 3: Case Studies Vault */}
        {activeTab === 'work' && (
          <div className="gsap-fade-in flex flex-col gap-10">
            <TerminalHeader label="CASE_STUDIES_VAULT" />
            <Portfolio onOpenContact={() => handleOpenContact()} />
            <Testimonials />
          </div>
        )}

        {/* Tab 4: Process Methodology */}
        {activeTab === 'process' && (
          <div className="gsap-fade-in flex flex-col gap-10">
            <TerminalHeader label="ENGINEERING_METHODOLOGY" />
            <Process onOpenContact={() => handleOpenContact()} />
            <FAQ onOpenContact={() => handleOpenContact()} />
          </div>
        )}

        {/* Tab 5: Insights & Research Blog */}
        {activeTab === 'blog' && (
          <div className="gsap-fade-in flex flex-col gap-10">
            <TerminalHeader label="RESEARCH_AND_INSIGHTS" />
            <Blog />
          </div>
        )}

        {/* Tab 6: About Studio */}
        {activeTab === 'about' && (
          <div className="gsap-fade-in flex flex-col gap-10">
            <TerminalHeader label="ABOUT_JWT_COLLECTIVE" />
            <About onOpenContact={() => handleOpenContact()} />
            <Testimonials />
          </div>
        )}

        {/* Tab 7: Contact Terminal Desk */}
        {activeTab === 'contact' && (
          <div className="gsap-fade-in flex flex-col gap-10">
            <TerminalHeader label="TRANSMISSION_COMMAND" />
            <div className="my-12 p-12 bg-[#0E0E0E] brutalist-border-active text-center flex flex-col items-center justify-center max-w-2xl mx-auto shadow-[8px_8px_0px_0px_#C8FF3D]">
              <span className="font-mono-code text-xs text-[#C8FF3D] uppercase tracking-widest mb-2 block">
                JWT TERMINAL STATUS: READY
              </span>
              <h2 className="font-space text-3xl md:text-4xl font-extrabold uppercase text-[#e4e2e1] mb-4">
                START YOUR PROJECT WITH <span className="text-[#C8FF3D]">JHALAWEBTECH</span>
              </h2>
              <p className="font-sans-body text-sm text-[#9CA3AF] max-w-lg mb-8 leading-relaxed">
                Connect directly with our engineering team to discuss technical architecture, timelines, and implementation strategy.
              </p>
              <button
                onClick={() => handleOpenContact()}
                aria-label="Open Project Inquiry Terminal"
                className="bg-[#C8FF3D] text-[#0A0A0A] px-8 py-4 font-space text-sm font-bold uppercase hover:bg-[#bef532] transition-colors brutalist-border-active cursor-pointer shadow-[4px_4px_0px_0px_#262626] active:scale-95"
              >
                OPEN INQUIRY TERMINAL
              </button>
            </div>
            <FAQ onOpenContact={() => handleOpenContact()} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onOpenContact={() => handleOpenContact()} 
      />

      {/* Interactive Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        selectedService={selectedService}
      />
    </div>
  );
}
