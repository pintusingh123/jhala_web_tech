import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TerminalHeader from './components/TerminalHeader';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

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
      <main id="main-content" tabIndex="-1" className="flex-grow flex flex-col w-full max-w-[1440px] mx-auto px-4 md:px-12 py-6 gap-8 outline-none">
        {/* Active Tab rendering */}
        {activeTab === 'home' && (
          <>
            <TerminalHeader label="HOME" />
            <Hero 
              onExploreServices={() => setActiveTab('services')} 
              onOpenContact={() => handleOpenContact()} 
            />
            <Stats />
            <Services onSelectService={handleSelectService} />
            <Portfolio onOpenContact={() => handleOpenContact()} />
            <About onOpenContact={() => handleOpenContact()} />
          </>
        )}

        {activeTab === 'services' && (
          <>
            <TerminalHeader label="SERVICES" />
            <Services onSelectService={handleSelectService} />
          </>
        )}

        {activeTab === 'work' && (
          <>
            <TerminalHeader label="WORK" />
            <Portfolio onOpenContact={() => handleOpenContact()} />
          </>
        )}

        {activeTab === 'about' && (
          <>
            <TerminalHeader label="ABOUT" />
            <About onOpenContact={() => handleOpenContact()} />
          </>
        )}

        {activeTab === 'contact' && (
          <>
            <TerminalHeader label="CONTACT" />
            <div className="my-12 p-12 bg-[#0E0E0E] brutalist-border-active text-center flex flex-col items-center justify-center max-w-2xl mx-auto shadow-[8px_8px_0px_0px_#C8FF3D]">
              <span className="font-mono-code text-xs text-[#C8FF3D] uppercase tracking-widest mb-2 block">
                TERMINAL STATUS: READY
              </span>
              <h2 className="font-space text-3xl md:text-4xl font-extrabold uppercase text-[#e4e2e1] mb-4">
                START YOUR PROJECT WITH <span className="text-[#C8FF3D]">JHALALABS</span>
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
