import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Globe, Code, ArrowUpRight } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function Footer() {
  const { openContact } = useContact();

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
              JWT — Building the underlying architecture for the next generation of digital experiences.
            </p>
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
            to="/blog"
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            RESEARCH & BLOG
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
          <button 
            onClick={() => openContact()}
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#C8FF3D] hover:underline transition-all cursor-pointer font-bold mt-1"
          >
            &gt; OPEN TERMINAL
          </button>
          
          <div className="flex gap-3 mt-3">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              aria-label="JhalaWebTech GitHub Repository"
              className="p-2 bg-[#1A1A1A] brutalist-border text-[#9CA3AF] hover:text-[#C8FF3D] hover:border-[#C8FF3D] transition-colors"
            >
              <Code className="w-4 h-4" aria-hidden="true" />
            </a>
            <button 
              onClick={() => openContact()}
              aria-label="Open JhalaWebTech Contact Terminal"
              className="p-2 bg-[#1A1A1A] brutalist-border text-[#9CA3AF] hover:text-[#C8FF3D] hover:border-[#C8FF3D] transition-colors cursor-pointer"
            >
              <Terminal className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
