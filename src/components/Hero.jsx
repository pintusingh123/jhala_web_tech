import React from 'react';
import { Play, Code, Cpu, ShieldCheck, Terminal } from 'lucide-react';

export default function Hero({ onExploreServices, onOpenContact }) {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-12 items-center lg:items-start py-8 md:py-16 relative">
      {/* Hero Typography Content */}
      <div className="flex flex-col gap-6 w-full lg:w-2/3 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] brutalist-border w-fit text-[#C8FF3D] font-mono-code text-xs">
          <span className="w-2 h-2 rounded-full bg-[#C8FF3D] animate-pulse" aria-hidden="true"></span>
          <span>EST. 2024 // DIGITAL ARCHITECTURE & SCALABLE SYSTEMS</span>
        </div>

        <h1 className="font-space text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-[#e4e2e1] leading-tight tracking-tighter">
          We Architect <br className="hidden md:block" />
          <span className="text-[#C8FF3D] border-b-4 border-[#C8FF3D] pb-1 inline-block mt-1">
            The Digital Future
          </span>
        </h1>

        <p className="font-sans-body text-base md:text-xl text-[#9CA3AF] max-w-2xl border-l-2 border-[#262626] pl-4 leading-relaxed">
          Build. Scale. Innovate. JhalaWebTech (JWT) engineers robust, scalable systems and autonomous AI solutions for independent thinkers and technical pioneers.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <button
            onClick={onOpenContact}
            aria-label="Initialize Project with JhalaWebTech"
            className="bg-[#C8FF3D] text-[#0A0A0A] px-6 py-3.5 font-space text-xs md:text-sm font-bold uppercase hover:bg-[#bef532] transition-colors brutalist-border-active active:scale-95 flex items-center gap-2 cursor-pointer shadow-[4px_4px_0px_0px_#262626]"
          >
            <Play className="w-4 h-4 fill-current" aria-hidden="true" />
            INITIALIZE PROJECT
          </button>
          
          <button
            onClick={onExploreServices}
            aria-label="View Documentation and Capabilities"
            className="bg-transparent text-[#e4e2e1] px-6 py-3.5 font-space text-xs md:text-sm font-bold uppercase border border-[#9CA3AF] hover:bg-[#1A1A1A] hover:border-[#C8FF3D] hover:text-[#C8FF3D] transition-colors active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <Code className="w-4 h-4" aria-hidden="true" />
            VIEW DOCS
          </button>
        </div>
      </div>

      {/* Hero Visual Card */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end relative items-center min-h-[300px]">
        <div className="w-full max-w-md bg-[#131313] brutalist-border p-6 shadow-[8px_8px_0px_0px_#C8FF3D] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#C8FF3D] transition-all duration-300 relative group">
          {/* Card Terminal Header */}
          <div className="flex justify-between items-center pb-4 border-b border-[#262626] mb-4">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#9CA3AF]">
              <Terminal className="w-4 h-4 text-[#C8FF3D]" aria-hidden="true" />
              <span>JWT_CORE.SYS</span>
            </div>
            <span className="text-[10px] font-mono-code text-[#C8FF3D] bg-[#0A0A0A] px-2 py-0.5 border border-[#262626] font-bold">
              ACTIVE
            </span>
          </div>

          {/* Central Logo Box */}
          <div className="bg-[#0A0A0A] brutalist-border p-6 flex flex-col items-center justify-center my-4 group-hover:border-[#C8FF3D] transition-colors">
            <div className="w-20 h-20 bg-[#1A1A1A] brutalist-border-active flex items-center justify-center mb-4 text-[#C8FF3D] shadow-[4px_4px_0px_0px_#C8FF3D]">
              <Cpu className="w-10 h-10 animate-pulse" aria-hidden="true" />
            </div>
            <h3 className="font-space text-2xl font-bold tracking-tight text-[#e4e2e1]">
              JHALAWEBTECH
            </h3>
            <p className="font-mono-code text-xs text-[#9CA3AF] mt-1">
              JWT ENGINEERING COLLECTIVE
            </p>
          </div>

          {/* Card Features List */}
          <div className="space-y-2.5 pt-2 border-t border-[#262626] text-xs font-mono-code text-[#9CA3AF]">
            <div className="flex justify-between items-center">
              <span>SYSTEM ARCHITECTURE</span>
              <span className="text-[#C8FF3D] font-bold">99.99%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>LATENCY AVG</span>
              <span className="text-[#C8FF3D] font-bold">&lt; 24ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span>SECURITY PROTOCOL</span>
              <span className="text-[#C8FF3D] font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" /> VERIFIED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
