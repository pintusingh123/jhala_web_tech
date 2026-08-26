import React, { useState } from 'react';
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
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import About from './components/About'

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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
      <main id="main-content" tabIndex="-1" className="flex-grow flex flex-col w-full max-w-[1440px] mx-auto px-4 md:px-12 py-6 gap-10 outline-none">
        {/* Tab 1: Full Home Overview */}
        {activeTab === 'home' && (
          <>
            <TerminalHeader label="HOME_CORE" />
            <Hero 
              onExploreServices={() => setActiveTab('services')} 
              onOpenContact={() => handleOpenContact()} 
            />
            <Stats />
            <Services onSelectService={handleSelectService} />
            <Process onOpenContact={() => handleOpenContact()} />
            <Portfolio onOpenContact={() => handleOpenContact()} />
            <Testimonials />
            <Blog />
            <FAQ onOpenContact={() => handleOpenContact()} />
            <About onOpenContact={() => handleOpenContact()} />
          </>
        )}

        {/* Tab 2: Services Matrix */}
        {activeTab === 'services' && (
          <>
            <TerminalHeader label="SERVICES_MATRIX" />
            <Services onSelectService={handleSelectService} />
            <Process onOpenContact={() => handleOpenContact()} />
            <FAQ onOpenContact={() => handleOpenContact()} />
          </>
        )}

        {/* Tab 3: Case Studies Vault */}
        {activeTab === 'work' && (
          <>
            <TerminalHeader label="CASE_STUDIES_VAULT" />
            <Portfolio onOpenContact={() => handleOpenContact()} />
            <Testimonials />
          </>
        )}

        {/* Tab 4: Process Methodology */}
        {activeTab === 'process' && (
          <>
            <TerminalHeader label="ENGINEERING_METHODOLOGY" />
            <Process onOpenContact={() => handleOpenContact()} />
            <FAQ onOpenContact={() => handleOpenContact()} />
          </>
        )}

        {/* Tab 5: Insights & Research Blog */}
        {activeTab === 'blog' && (
          <>
            <TerminalHeader label="RESEARCH_AND_INSIGHTS" />
            <Blog />
          </>
        )}

        {/* Tab 6: About Studio */}
        {activeTab === 'about' && (
          <>
            <TerminalHeader label="ABOUT_JWT_COLLECTIVE" />
            <About onOpenContact={() => handleOpenContact()} />
            <Testimonials />
          </>
        )}

        {/* Tab 7: Contact Terminal Desk */}
        {activeTab === 'contact' && (
          <>
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
          </>
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
