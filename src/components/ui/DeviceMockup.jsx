'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function DeviceMockup({
  laptopImage = '/images/garments-showcase.jpg',
  phoneImage = '/images/jayshreeshyam-showcase.jpg',
  className = '',
}) {
  const [activeProject, setActiveProject] = useState(0);

  const previews = [
    {
      name: 'Radhika Garments',
      type: 'E-Commerce Store',
      laptopImg: '/images/garments-showcase.jpg',
      phoneImg: '/images/jayshreeshyam-showcase.jpg',
      stat: '3x Online Orders',
    },
    {
      name: 'MotoSpares',
      type: 'Bike Parts Store',
      laptopImg: '/images/bikeparts-showcase.jpg',
      phoneImg: '/images/gharoti-showcase.jpg',
      stat: '5,000+ Parts Listed',
    },
  ];

  const current = previews[activeProject];

  return (
    <div className={`relative w-full max-w-[580px] mx-auto select-none py-4 ${className}`}>
      {/* Ambient Backlight in Signal Orange */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FF6B2C]/15 blur-3xl rounded-full pointer-events-none" />

      {/* ================= LAPTOP MOCKUP FRAME ================= */}
      <div className="relative rounded-2xl border-2 border-subtle bg-surface shadow-2xl p-2 sm:p-2.5 transition-transform duration-300">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-2.5 pb-2 pt-1 border-b border-subtle/60 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>

          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full bg-surface-2 text-[10px] font-mono text-muted border border-subtle max-w-[130px] xs:max-w-[200px] sm:max-w-none truncate">
            <span className="text-[#3DD9B0] shrink-0">https://</span>
            <span className="truncate">jhalawebtech.com/work/{current.name.toLowerCase().replace(/\s+/g, '-')}</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3DD9B0] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted font-bold hidden sm:inline">
              Live
            </span>
          </div>
        </div>

        {/* Laptop Screen Display with Real Project Screenshot */}
        <div className="relative w-full h-[190px] xs:h-[230px] sm:h-[300px] rounded-lg overflow-hidden bg-surface-2 border border-subtle">
          <img
            src={current.laptopImg || laptopImage}
            alt={`${current.name} real production web application`}
            className="w-full h-full object-cover object-top transition-opacity duration-500"
            loading="eager"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80';
            }}
          />

          {/* Project Overlay Strip */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 sm:p-4 flex items-end justify-between">
            <div>
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#FF6B2C] uppercase tracking-wider block">
                {current.type}
              </span>
              <h4 className="font-head text-white text-xs sm:text-base font-bold">
                {current.name}
              </h4>
            </div>

            <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#3DD9B0] bg-black/60 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-[#3DD9B0]/30 backdrop-blur-xs">
              {current.stat}
            </span>
          </div>
        </div>

        {/* Laptop Bottom Lip / Hinge */}
        <div className="w-1/3 h-1.5 mx-auto bg-border rounded-b-md mt-1" />
      </div>

      {/* ================= OVERLAPPING PHONE MOCKUP FRAME ================= */}
      <div className="absolute -bottom-3 sm:-bottom-6 right-1 sm:-right-4 w-[110px] xs:w-[135px] sm:w-[170px] rounded-2xl border-2 border-subtle bg-surface shadow-2xl p-1 sm:p-1.5 transition-transform duration-300 hover:scale-105">
        {/* Phone Speaker Notch */}
        <div className="w-8 sm:w-10 h-1 bg-border rounded-full mx-auto mb-1" />

        {/* Phone Screen with Real App Screenshot */}
        <div className="w-full h-[150px] xs:h-[185px] sm:h-[230px] rounded-xl overflow-hidden bg-surface-2 relative border border-subtle">
          <img
            src={current.phoneImg || phoneImage}
            alt="React Native Mobile App UI preview"
            className="w-full h-full object-cover object-top"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80';
            }}
          />

          <div className="absolute top-2 left-2 right-2 flex justify-between items-center">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/70 text-[#FF6B2C] border border-[#FF6B2C]/40">
              React Native
            </span>
          </div>
        </div>

        {/* Home Indicator bar */}
        <div className="w-10 h-0.5 bg-border rounded-full mx-auto mt-1" />
      </div>

      {/* Floating Trust Badge: Verified Delivery */}
      <div className="absolute -top-3 -left-2 sm:-left-4 hidden sm:flex items-center gap-2 bg-surface px-3 py-1.5 rounded-lg shadow-xl border border-subtle">
        <CheckCircle2 className="w-4 h-4 text-[#3DD9B0]" />
        <span className="font-mono text-xs font-semibold text-primary">
          Production Shipped
        </span>
      </div>

      {/* Quick Project Switcher Pills */}
      <div className="flex items-center justify-center gap-2 mt-4 pt-1">
        {previews.map((p, idx) => (
          <button
            type="button"
            key={p.name}
            onClick={() => setActiveProject(idx)}
            className={`px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider rounded-md border transition-all cursor-pointer ${
              activeProject === idx
                ? 'bg-[#FF6B2C] text-white border-[#FF6B2C]'
                : 'bg-surface text-muted border-subtle hover:text-primary hover:bg-surface-2'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}
