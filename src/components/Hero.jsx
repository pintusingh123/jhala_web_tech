import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '8003642596';

export default function Hero({ onExploreServices }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello JhalaWebTech! I visited your website and would like to discuss building a software project.');
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full relative py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
        
        {/* Left Column (8 cols): Headline & Copy */}
        <div className="lg:col-span-8 flex flex-col justify-center items-start w-full max-w-3xl">
          {/* Top Pill */}
          <div className="inline-flex flex-wrap items-center gap-2 mb-5 sm:mb-6 bg-[#1A1A1A] brutalist-border py-1.5 px-3.5 rounded-full">
            <span className="text-[10px] sm:text-xs font-mono-code font-bold tracking-widest uppercase text-[#e4e2e1]">
              Full-Stack • Custom Software • AI Systems
            </span>
            <span className="hidden sm:inline text-[#666]">|</span>
            <span className="text-[10px] sm:text-xs font-mono-code text-[#C8FF3D] font-bold">
              WhatsApp: +91 {WHATSAPP_NUMBER}
            </span>
          </div>

          {/* Monumental Headline */}
          <h1 className="font-space text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase text-[#e4e2e1] leading-[0.92] sm:leading-[0.9] tracking-tighter mb-5 sm:mb-6">
            BUILD SMARTER <br />
            <span className="text-[#C8FF3D] border-b-4 border-[#C8FF3D] pb-1 inline-block mt-1">
              DIGITAL SYSTEMS
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <div className="flex flex-col gap-6 max-w-2xl w-full">
            <p className="font-sans-body text-base md:text-xl text-[#9CA3AF] leading-relaxed border-l-2 border-[#262626] pl-4">
              JhalaWebTech designs and develops custom software, AI-powered automation systems, websites, and high-concurrency applications that help businesses operate more efficiently and grow with confidence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full pt-2">
              <Link
                to="/contact"
                aria-label="Get in touch with JhalaWebTech"
                className="flex justify-center items-center gap-2 px-7 py-4 bg-[#C8FF3D] text-[#0A0A0A] text-xs sm:text-sm font-space font-bold tracking-widest uppercase hover:bg-[#bef532] transition-all brutalist-border-active active:scale-95 shadow-[4px_4px_0px_0px_#262626] cursor-pointer w-full sm:w-auto"
              >
                <span>LET'S BUILD TOGETHER</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={handleWhatsApp}
                aria-label="Direct WhatsApp consultation"
                className="flex justify-center items-center gap-2 px-6 py-4 bg-[#1A1A1A] border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-[#0A0A0A] text-xs sm:text-sm font-space font-bold tracking-widest uppercase transition-all active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>WHATSAPP US</span>
              </button>

              <button
                onClick={onExploreServices}
                aria-label="View case studies and capabilities"
                className="flex justify-center items-center px-6 py-4 bg-transparent border border-[#444748] text-[#e4e2e1] hover:bg-[#1A1A1A] hover:border-[#C8FF3D] hover:text-[#C8FF3D] text-xs sm:text-sm font-space font-bold tracking-widest uppercase transition-all active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <span>SERVICES</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Metric Cards */}
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-start sm:justify-between items-stretch sm:items-center lg:items-end gap-6 sm:gap-8 border-t lg:border-t-0 lg:border-l border-[#262626] pt-8 lg:pt-0 lg:pl-10 w-full mt-4 lg:mt-0">
          
          {/* Card 1: 20+ Projects Delivered */}
          <div className="flex gap-4 items-start w-full sm:max-w-[340px] bg-[#1A1A1A] brutalist-border p-5 shadow-[4px_4px_0px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_0px_#C8FF3D] hover:border-[#C8FF3D] transition-all duration-300 group">
            <span className="text-2xl text-[#C8FF3D] select-none font-bold" aria-hidden="true">✦</span>
            <div className="flex flex-col">
              <span className="font-space font-bold text-xs sm:text-sm tracking-wider uppercase text-[#e4e2e1] mb-1.5 group-hover:text-[#C8FF3D] transition-colors">
                20+ PROJECTS DELIVERED
              </span>
              <span className="text-xs sm:text-sm font-sans-body text-[#9CA3AF] leading-relaxed">
                Helping startups and businesses launch, automate, and scale through modern tech.
              </span>
            </div>
          </div>

          {/* Card 2: 99% Client Satisfaction Badge */}
          <Link
            to="/contact"
            className="relative group cursor-pointer shrink-0 self-center sm:self-auto lg:self-end"
          >
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-[#0E0E0E] brutalist-border-active text-[#e4e2e1] flex flex-col items-center justify-center p-4 text-center transform hover:scale-105 hover:-rotate-3 transition-all duration-300 shadow-[6px_6px_0px_0px_#C8FF3D]">
              <span className="text-3xl sm:text-4xl md:text-5xl font-space font-extrabold leading-none tracking-tight mb-1 text-[#C8FF3D]">
                99%
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-space font-bold tracking-widest uppercase leading-tight text-[#9CA3AF] group-hover:text-[#e4e2e1]">
                CLIENT<br />SATISFACTION
              </span>
            </div>
          </Link>

          {/* Card 3: Telemetry Bar */}
          <div className="w-full sm:max-w-[340px] bg-[#0E0E0E] brutalist-border p-3.5 flex items-center justify-between font-mono-code text-xs text-[#9CA3AF]">
            <div className="flex items-center gap-2">
               <span>SUB-10MS UI FRAMEWORK</span>
            </div>
            <span className="text-[#C8FF3D] font-bold">VERIFIED</span>
          </div>

        </div>

      </div>
    </section>
  );
}
