import React from 'react';
import { Terminal, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import TerminalHeader from '../components/TerminalHeader';
import FAQ from '../components/FAQ';
import { useContact } from '../context/ContactContext';

export default function ContactPage() {
  const { openContact } = useContact();

  return (
    <div className="gsap-fade-in flex flex-col gap-12">
      <TerminalHeader label="TRANSMISSION_COMMAND" />

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 bg-[#131313] brutalist-border p-8 flex flex-col justify-between shadow-[4px_4px_0px_0px_#262626]">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#C8FF3D] mb-4">
              <Terminal className="w-4 h-4" aria-hidden="true" />
              <span>SYS.CHANNELS // DIRECT_LINE</span>
            </div>

            <h2 className="font-space text-3xl font-extrabold uppercase text-[#e4e2e1] mb-4">
              CONNECT WITH OUR LEAD ARCHITECTS
            </h2>

            <p className="font-sans-body text-sm text-[#9CA3AF] leading-relaxed mb-8">
              Whether you require a custom AI subagent pipeline, a high-concurrency web architecture, or an enterprise refactor, our engineering team is available for technical discussions.
            </p>

            <div className="space-y-4 text-xs font-mono-code text-[#e4e2e1]">
              <div className="flex items-center gap-3 p-3 bg-[#1A1A1A] brutalist-border">
                <Mail className="w-4 h-4 text-[#C8FF3D]" />
                <div>
                  <span className="text-[#9CA3AF] block text-[10px]">EMAIL INQUIRIES</span>
                  <a href="mailto:contact@jhalawebtech.com" className="font-bold hover:text-[#C8FF3D]">
                    contact@jhalawebtech.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#1A1A1A] brutalist-border">
                <Clock className="w-4 h-4 text-[#C8FF3D]" />
                <div>
                  <span className="text-[#9CA3AF] block text-[10px]">RESPONSE WINDOW</span>
                  <span className="font-bold text-[#C8FF3D]">Within 24 Hours (Guaranteed SLA)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#1A1A1A] brutalist-border">
                <MapPin className="w-4 h-4 text-[#C8FF3D]" />
                <div>
                  <span className="text-[#9CA3AF] block text-[10px]">CORE OPERATION</span>
                  <span>Global Distributed Engineering Labs</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#262626] mt-8 text-xs font-mono-code text-[#C8FF3D]">
            <span>STATUS: SPRINT SLOTS OPEN FOR Q3</span>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Box */}
        <div className="lg:col-span-7 bg-[#0E0E0E] brutalist-border-active p-8 md:p-12 flex flex-col justify-center items-center text-center shadow-[8px_8px_0px_0px_#C8FF3D]">
          <div className="w-16 h-16 bg-[#1A1A1A] brutalist-border-active flex items-center justify-center text-[#C8FF3D] mb-6 shadow-[4px_4px_0px_0px_#C8FF3D]">
            <MessageSquare className="w-8 h-8" />
          </div>

          <span className="font-mono-code text-xs text-[#C8FF3D] uppercase tracking-widest mb-2 block font-bold">
            JWT INQUIRY TERMINAL PROTOCOL
          </span>

          <h2 className="font-space text-3xl md:text-4xl font-extrabold uppercase text-[#e4e2e1] mb-4">
            START YOUR SPRINT WITH <span className="text-[#C8FF3D]">JHALAWEBTECH</span>
          </h2>

          <p className="font-sans-body text-sm text-[#9CA3AF] max-w-lg mb-8 leading-relaxed">
            Click below to initialize the interactive technical specification console. Our system will log your project details and route them to our principal architects.
          </p>

          <button
            onClick={() => openContact()}
            aria-label="Open Project Inquiry Terminal"
            className="bg-[#C8FF3D] text-[#0A0A0A] px-8 py-4 font-space text-sm font-bold uppercase hover:bg-[#bef532] transition-colors brutalist-border-active cursor-pointer shadow-[4px_4px_0px_0px_#262626] active:scale-95 flex items-center gap-2"
          >
            <span>LAUNCH INQUIRY TERMINAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <FAQ onOpenContact={() => openContact()} />
    </div>
  );
}
