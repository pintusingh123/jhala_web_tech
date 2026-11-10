'use client';

import { useState } from 'react';

export default function DeviceMockup({
  className = '',
}) {
  const [activeProject, setActiveProject] = useState(0);

  const previews = [
    {
      name: 'Radhika Garments',
      tag: 'E-Commerce Store & UPI',
      laptopImg: '/images/garments-showcase.jpg',
      phoneImg: '/images/jayshreeshyam-showcase.jpg',
      url: 'radhikagarments.jwt.io',
      metric: '3x Daily Orders',
      tech: 'Next.js + UPI',
    },
    {
      name: 'MotoSpares',
      tag: 'Spare Parts Store',
      laptopImg: '/images/bikeparts-showcase.jpg',
      phoneImg: '/images/gharoti-showcase.jpg',
      url: 'motospares.jwt.io',
      metric: '5,000+ Parts',
      tech: 'React 19 + Catalog',
    },
    {
      name: 'Jay Shree Shyam',
      tag: 'Tiffin Food Delivery',
      laptopImg: '/images/jayshreeshyam-showcase.jpg',
      phoneImg: '/images/gharoti-showcase.jpg',
      url: 'jayshreeshyamtiffin.jwt.io',
      metric: '500+ Daily Meals',
      tech: 'WhatsApp Checkout',
    },
  ];

  const current = previews[activeProject];

  return (
    <div className={`relative w-full max-w-[580px] mx-auto select-none py-2 ${className}`}>
      
      {/* Bespoke Project Selector Tab Bar */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface border border-subtle shadow-2xs">
          {previews.map((p, idx) => (
            <button
              type="button"
              key={p.name}
              onClick={() => setActiveProject(idx)}
              className={`px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer ${
                activeProject === idx
                  ? 'bg-[#FF6B2C] text-white shadow-2xs'
                  : 'text-muted hover:text-primary hover:bg-surface-2'
              }`}
            >
              {p.name.split(' ')[0]}
            </button>
          ))}
        </div>

        <div className="hidden xs:flex items-center gap-1.5 font-mono text-[11px] text-[#3DD9B0] bg-[#3DD9B0]/10 border border-[#3DD9B0]/20 px-2.5 py-1 rounded-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3DD9B0] animate-pulse" />
          <span>{current.metric}</span>
        </div>
      </div>

      {/* ================= STUDIO LAPTOP CONTAINER ================= */}
      <div className="relative rounded-2xl border border-subtle bg-surface shadow-xl p-2 sm:p-2.5 transition-all duration-300">
        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-subtle mb-2">
          {/* Mac window dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          </div>

          {/* Browser Address Bar */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-2 text-[11px] font-mono text-muted border border-subtle/80 max-w-[220px] sm:max-w-[280px] truncate">
            <span className="text-[#3DD9B0] shrink-0 font-bold">https://</span>
            <span className="truncate text-primary font-medium">{current.url}</span>
          </div>

          <div className="flex items-center gap-1 font-mono text-[10px] text-muted">
            <span className="w-2 h-2 rounded-full bg-[#3DD9B0]" />
            <span className="hidden sm:inline">Verified Live</span>
          </div>
        </div>

        {/* Laptop Screen Display with Real Project Screenshot */}
        <div className="relative w-full h-[200px] xs:h-[240px] sm:h-[300px] rounded-xl overflow-hidden bg-surface-2 border border-subtle group">
          <img
            key={current.laptopImg}
            src={current.laptopImg}
            alt={`${current.name} live web application`}
            className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-102"
            loading="eager"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80';
            }}
          />

          {/* Bottom Live Banner */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 flex items-end justify-between">
            <div>
              <span className="font-mono text-[10px] font-bold text-[#FF6B2C] uppercase tracking-wider block">
                {current.tag}
              </span>
              <h4 className="font-head text-white text-sm sm:text-base font-bold">
                {current.name}
              </h4>
            </div>

            <span className="font-mono text-[10px] text-white/90 bg-white/15 px-2.5 py-1 rounded-md border border-white/20 backdrop-blur-xs">
              {current.tech}
            </span>
          </div>
        </div>
      </div>

      {/* ================= OVERLAPPING SMARTPHONE FRAME ================= */}
      <div className="absolute -bottom-4 sm:-bottom-6 right-2 sm:-right-4 w-[120px] xs:w-[145px] sm:w-[180px] rounded-2xl border-2 border-subtle bg-surface shadow-2xl p-1.5 transition-transform duration-300 hover:scale-105">
        {/* Dynamic Island Pill */}
        <div className="w-10 sm:w-12 h-2.5 bg-black rounded-full mx-auto mb-1.5 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-surface-2/40 mr-1" />
        </div>

        {/* Mobile Screen Display */}
        <div className="w-full h-[160px] xs:h-[195px] sm:h-[240px] rounded-xl overflow-hidden bg-surface-2 relative border border-subtle">
          <img
            key={current.phoneImg}
            src={current.phoneImg}
            alt="Mobile UI preview"
            className="w-full h-full object-cover object-top transition-all duration-700"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80';
            }}
          />

          {/* Floating Mobile Tag */}
          <div className="absolute bottom-2 inset-x-2 p-1.5 rounded-md bg-black/80 backdrop-blur-xs border border-white/10 text-center">
            <span className="font-mono text-[9px] font-bold text-[#FF6B2C] uppercase tracking-wider block">
              Mobile App Live
            </span>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="w-10 h-0.5 bg-muted/40 rounded-full mx-auto mt-1" />
      </div>

    </div>
  );
}
