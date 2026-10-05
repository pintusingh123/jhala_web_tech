import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Phone, Send, Sparkles } from 'lucide-react';

const WHATSAPP_NUMBER = '8003642596';
const CALLING_NUMBER = '8441992003';

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] w-full mt-16 border-t-2 border-[#C8FF3D]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-12 py-12">
        {/* Brand & Manifesto - 2 cols */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
            <Link to="/" className="font-space text-3xl font-extrabold text-[#C8FF3D] block mb-2 tracking-tighter hover:opacity-90 transition-opacity">
              JhalaWebTech
            </Link>
            <p className="font-mono-code text-xs text-[#9CA3AF] uppercase tracking-widest max-w-sm mt-2 leading-relaxed">
              JWT — Building high-performance custom software, AI agents, mobile apps, and scalable digital architectures.
            </p>

            {/* Direct Hotline Quick Pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={`tel:+91${CALLING_NUMBER}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#161616] hover:bg-[#202020] text-[#e4e2e1] hover:text-[#C8FF3D] brutalist-border font-mono-code text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8FF3D]" />
                <span>Call: +91 {CALLING_NUMBER}</span>
              </a>

              <a
                href={`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello JhalaWebTech! I would like to inquire about a software project.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#161616] hover:bg-[#202020] text-[#e4e2e1] hover:text-[#25D366] brutalist-border font-mono-code text-xs transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: +91 {WHATSAPP_NUMBER}</span>
              </a>
            </div>
          </div>
          <p className="font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] mt-8 md:mt-0">
            © 2026 JHALAWEBTECH (JWT). BUILD. SCALE. INNOVATE.
          </p>
        </div>

        {/* Directory - 1 col */}
        <div className="col-span-1 flex flex-col gap-2.5">
          <span className="font-mono-code text-xs text-[#e4e2e1] uppercase border-b border-[#262626] pb-1 mb-1 font-bold">
            Directory
          </span>
          <Link
            to="/services"
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            WEB ARCHITECTURE
          </Link>
          <Link
            to="/services"
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            AI & LLM SYSTEMS
          </Link>
          <Link
            to="/work"
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            CASE STUDIES
          </Link>
          <Link
            to="/process"
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            METHODOLOGY
          </Link>
          <Link
            to="/contact"
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#C8FF3D] hover:underline transition-colors cursor-pointer font-bold"
          >
            CONTACT US
          </Link>
        </div>

        {/* Connect - 1 col */}
        <div className="col-span-1 flex flex-col gap-2.5">
          <span className="font-mono-code text-xs text-[#e4e2e1] uppercase border-b border-[#262626] pb-1 mb-1 font-bold">
            Connect
          </span>
          <Link
            to="/about"
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            ABOUT JWT
          </Link>
          <Link
            to="/contact"
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            CONTACT DESK
          </Link>
          <a
            href="mailto:contact@jhalawebtech.com"
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors"
          >
            contact@jhalawebtech.com
          </a>

          <div className="flex gap-3 mt-3">
            <a
              href={`https://wa.me/91${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              aria-label="JhalaWebTech WhatsApp"
              className="p-2 bg-[#1A1A1A] brutalist-border text-[#9CA3AF] hover:text-[#25D366] hover:border-[#25D366] transition-colors"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={`tel:+91${CALLING_NUMBER}`}
              aria-label="JhalaWebTech Calling Line"
              className="p-2 bg-[#1A1A1A] brutalist-border text-[#9CA3AF] hover:text-[#C8FF3D] hover:border-[#C8FF3D] transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
