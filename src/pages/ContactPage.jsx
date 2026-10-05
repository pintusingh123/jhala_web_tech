import React from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  MapPin,
  Clock
} from 'lucide-react';
import TerminalHeader from '../components/TerminalHeader';
import FAQ from '../components/FAQ';
import { useNavigate } from 'react-router-dom';

const PINTU_WHATSAPP = '8003642596';
const ABHAY_WHATSAPP = '9509123636';
const CALLING_NUMBER = '8441992003';

export default function ContactPage() {
  const navigate = useNavigate();

  const handleWhatsAppPintu = () => {
    const text = encodeURIComponent(
      'Hello Pintu! I visited JhalaWebTech and would like to discuss a custom software requirement.'
    );
    window.open(`https://wa.me/91${PINTU_WHATSAPP}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppAbhay = () => {
    const text = encodeURIComponent(
      'Hello Abhay! I visited JhalaWebTech and would like to connect with you regarding a software project.'
    );
    window.open(`https://wa.me/91${ABHAY_WHATSAPP}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="gsap-fade-in flex flex-col gap-12">
      <TerminalHeader label="CONTACT_DESK" />

      {/* Top Direct Channels Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Channel 1: Calling & Pintu WhatsApp */}
        <div className="bg-[#131313] brutalist-border p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_#262626] group hover:border-[#C8FF3D] transition-all">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-[#0A0A0A] brutalist-border text-[#C8FF3D]">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-mono-code text-[10px] bg-[#1A1A1A] text-[#C8FF3D] px-2 py-0.5 border border-[#C8FF3D]/30 uppercase font-bold">
                DIRECT CALL & WHATSAPP
              </span>
            </div>
            <span className="font-mono-code text-xs text-[#9CA3AF] uppercase block mb-1">
              PINTU JHALA // LEAD ARCHITECT
            </span>
            <h2 className="font-space text-2xl font-bold text-[#e4e2e1] mb-1 tracking-tight">
              +91 {CALLING_NUMBER}
            </h2>
            <p className="font-mono-code text-xs text-[#25D366] mb-3">
              WhatsApp: +91 {PINTU_WHATSAPP}
            </p>
            <p className="font-sans-body text-xs text-[#9CA3AF] leading-relaxed mb-6">
              Direct technical scoping, sprint roadmap consultations, and full-stack architecture discussions.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href={`tel:+91${CALLING_NUMBER}`}
              className="w-full bg-[#1A1A1A] hover:bg-[#C8FF3D] text-[#e4e2e1] hover:text-[#0A0A0A] font-space text-xs font-bold uppercase py-2.5 px-4 brutalist-border flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL 8441992003 NOW</span>
            </a>
            <button
              onClick={handleWhatsAppPintu}
              className="w-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-[#0A0A0A] font-space text-xs font-bold uppercase py-2.5 px-4 border border-[#25D366]/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 fill-current" />
              <span>WHATSAPP PINTU ({PINTU_WHATSAPP})</span>
            </button>
          </div>
        </div>

        {/* Channel 2: Abhay Prajapati WhatsApp Desk */}
        <div className="bg-[#131313] brutalist-border p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_#262626] group hover:border-[#25D366] transition-all">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-[#0A0A0A] brutalist-border text-[#25D366]">
                <Send className="w-5 h-5 fill-current" />
              </div>
              <span className="font-mono-code text-[10px] bg-[#0E1F12] text-[#25D366] px-2 py-0.5 border border-[#25D366]/40 uppercase font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
                ONLINE ON WHATSAPP
              </span>
            </div>
            <span className="font-mono-code text-xs text-[#9CA3AF] uppercase block mb-1">
              ABHAY PRAJAPATI // SOFTWARE ENGINEER
            </span>
            <h2 className="font-space text-2xl font-bold text-[#e4e2e1] mb-1 tracking-tight">
              +91 {ABHAY_WHATSAPP}
            </h2>
            <p className="font-mono-code text-xs text-[#C8FF3D] mb-3">
              MERN Stack &amp; Frontend Engineering
            </p>
            <p className="font-sans-body text-xs text-[#9CA3AF] leading-relaxed mb-6">
              Connect directly with Abhay for React, Node.js, MERN stack development, and frontend application requirements.
            </p>
          </div>

          <button
            onClick={handleWhatsAppAbhay}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#0A0A0A] font-space text-xs font-bold uppercase py-3 px-4 brutalist-border flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0A0A0A]"
          >
            <Send className="w-3.5 h-3.5 fill-current" />
            <span>CHAT WITH ABHAY ({ABHAY_WHATSAPP})</span>
          </button>
        </div>

        {/* Channel 3: Official Email & SLA */}
        <div className="bg-[#131313] brutalist-border p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_#262626] group hover:border-[#C8FF3D] transition-all">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-[#0A0A0A] brutalist-border text-[#C8FF3D]">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-mono-code text-[10px] bg-[#1A1A1A] text-[#9CA3AF] px-2 py-0.5 border border-[#262626] uppercase font-bold">
                ENTERPRISE SLA
              </span>
            </div>
            <span className="font-mono-code text-xs text-[#9CA3AF] uppercase block mb-1">
              EMAIL INQUIRIES &amp; PROPOSALS
            </span>
            <h2 className="font-space text-xl font-bold text-[#e4e2e1] mb-2 tracking-tight truncate">
              contact@jhalawebtech.com
            </h2>
            <p className="font-sans-body text-xs text-[#9CA3AF] leading-relaxed mb-6">
              Official enterprise proposals, NDA submissions, and custom distributed software requests. Guaranteed reply within 24h.
            </p>
          </div>

          <a
            href="mailto:contact@jhalawebtech.com"
            className="w-full bg-[#1A1A1A] hover:bg-[#222] text-[#e4e2e1] hover:text-[#C8FF3D] font-space text-xs font-bold uppercase py-3 px-4 brutalist-border flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0A0A0A]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>SEND EMAIL INQUIRY</span>
          </a>
        </div>
      </div>

      {/* Info Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#0E0E0E] brutalist-border p-4 flex items-center gap-3">
          <Clock className="w-4 h-4 text-[#C8FF3D] shrink-0" />
          <div>
            <p className="font-mono-code text-xs text-[#C8FF3D] uppercase font-bold">Working Hours</p>
            <p className="font-sans-body text-xs text-[#9CA3AF] mt-0.5">Mon – Sat: 9:00 AM – 7:00 PM IST</p>
          </div>
        </div>
        <div className="bg-[#0E0E0E] brutalist-border p-4 flex items-center gap-3">
          <MapPin className="w-4 h-4 text-[#C8FF3D] shrink-0" />
          <div>
            <p className="font-mono-code text-xs text-[#C8FF3D] uppercase font-bold">Location</p>
            <p className="font-sans-body text-xs text-[#9CA3AF] mt-0.5">Rajasthan, India — Remote Worldwide</p>
          </div>
        </div>
      </div>

      <FAQ onOpenContact={() => navigate('/contact')} />
    </div>
  );
}
