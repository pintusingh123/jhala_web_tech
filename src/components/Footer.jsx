import React from 'react';
import { Terminal, Globe, Code, ArrowUpRight } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenContact }) {
  return (
    <footer className="bg-[#0E0E0E] w-full mt-16 border-t-2 border-[#C8FF3D]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-12 py-12">
        {/* Brand & Manifesto - 2 cols */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
            <span className="font-space text-3xl font-extrabold text-[#C8FF3D] block mb-2 tracking-tighter">
              JhalaLabs
            </span>
            <p className="font-mono-code text-xs text-[#9CA3AF] uppercase tracking-widest max-w-sm mt-2 leading-relaxed">
              Building the underlying architecture for the next generation of digital experiences.
            </p>
          </div>
          <p className="font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] mt-8 md:mt-0">
            © 2024 JHALALABS. BUILD. SCALE. INNOVATE.
          </p>
        </div>

        {/* Directory - 1 col */}
        <div className="col-span-1 flex flex-col gap-2.5">
          <span className="font-mono-code text-xs text-[#e4e2e1] uppercase border-b border-[#262626] pb-1 mb-1 font-bold">
            Directory
          </span>
          <button 
            onClick={() => setActiveTab('services')}
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            WEB DEV
          </button>
          <button 
            onClick={() => setActiveTab('services')}
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            AI SOLUTIONS
          </button>
          <button 
            onClick={() => setActiveTab('services')}
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            CUSTOM SOFTWARE
          </button>
          <button 
            onClick={() => setActiveTab('work')}
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            CASE STUDIES
          </button>
        </div>

        {/* Connect - 1 col */}
        <div className="col-span-1 flex flex-col gap-2.5">
          <span className="font-mono-code text-xs text-[#e4e2e1] uppercase border-b border-[#262626] pb-1 mb-1 font-bold">
            Connect
          </span>
          <button 
            onClick={() => setActiveTab('about')}
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            ABOUT US
          </button>
          <button 
            onClick={onOpenContact}
            className="text-left font-mono-code text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
          >
            CONTACT TERMINAL
          </button>
          
          <div className="flex gap-3 mt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 bg-[#1A1A1A] brutalist-border text-[#9CA3AF] hover:text-[#C8FF3D] hover:border-[#C8FF3D] transition-colors"
            >
              <Code className="w-4 h-4" />
            </a>
            <button 
              onClick={onOpenContact}
              className="p-2 bg-[#1A1A1A] brutalist-border text-[#9CA3AF] hover:text-[#C8FF3D] hover:border-[#C8FF3D] transition-colors cursor-pointer"
            >
              <Terminal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
