import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function StackedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: '01',
      title: 'JAY SHREE SHAM TIFFIN SERVICE',
      subtitle: 'Fresh Homemade Pure Veg Tiffin & Subscription Web App',
      category: 'FOOD DELIVERY & SUBSCRIPTION WEB APP',
      description: 'Mobile-first food delivery and daily subscription web application engineered for Jay Shree Sham Tiffin Service. Features dynamic daily rotating menus, student and office meal plans (₹60–₹200), homestyle pure-veg thali customization, and instant 1-click WhatsApp order routing.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'WhatsApp Cloud API', 'Vercel Edge'],
      metric: '500+ Daily Meals • Instant WhatsApp Booking',
      impact: '2x Daily Orders',
      link: 'https://jayshreeshamtiffinservice.vercel.app/',
      image: '/images/jayshreeshyam-showcase.jpg',
    },
    {
      id: '02',
      title: 'GHAROTI - ROTI SUBSCRIPTION',
      subtitle: 'Home-Style Fresh Roti & Meal Subscription Platform',
      category: 'FOOD TECH & SUBSCRIPTION COMMERCE',
      description: 'Mobile-first daily homestyle roti and meal subscription platform engineered for Gharoti. Features recurring delivery scheduling, multi-category cart management, automated dispatch routes, pure desi ghee phulkas, and live order tracking.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Firebase', 'Vercel Edge'],
      metric: '10k+ Fresh Rotis Delivered Daily • 99.9% On-Time Delivery',
      impact: 'Sub-Second Ordering',
      link: 'https://www.gharoti.com/',
      image: '/images/gharoti-showcase.jpg',
    },
    {
      id: '03',
      title: 'NEXUS HEADLESS COMMERCE',
      subtitle: 'Next‑Generation Global Edge Storefront',
      category: 'HEADLESS COMMERCE & PAYMENT RAILS',
      description: 'Sub‑second headless e‑commerce experience featuring edge caching, multi‑currency checkout routes, automated inventory synchronization, and custom Stripe payment integrations.',
      tech: ['Next.js', 'Shopify Plus', 'Stripe Connect', 'Edge Caching', 'Redis'],
      metric: '99/100 Lighthouse Score • Zero Layout Shift',
      impact: '+42% Conversion Boost',
      link: 'https://nexus-commerce.jwt.io',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '04',
      title: 'SYNAPSE AI WORKFLOW OS',
      subtitle: 'Autonomous Multi‑Agent Orchestration Pipeline',
      category: 'AGENTIC AI & MULTI‑LLM SYSTEMS',
      description: 'Multi‑agent reasoning platform that executes deterministic data extraction, automated tool calling, and RAG vector semantic search for mission‑critical enterprise operations.',
      tech: ['Python', 'LangGraph', 'FastAPI', 'OpenAI API', 'Redis Vector'],
      metric: '70% Workflow Automation • Sub‑200ms Latency',
      impact: '10x Speedup',
      link: 'https://synapse-ai.jwt.io',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '05',
      title: 'KINETIC TRADING ENGINE',
      subtitle: 'Sub‑Millisecond Algorithmic Trading Terminal',
      category: 'FINTECH & REAL‑TIME WEBSOCKETS',
      description: 'High‑frequency algorithmic trading terminal delivering sub‑8ms UI render loops, real‑time WebSocket market streams, instant order routing, and custom portfolio risk analytics.',
      tech: ['React 19', 'WebSockets', 'Chart.js', 'Go Microservices', 'AWS'],
      metric: '< 8ms Latency • 50k Ops/sec Throughput',
      impact: '+300% Data Throughput',
      link: 'https://kinetic-trading.jwt.io',
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#131313]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#262626] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C8FF3D] animate-pulse" />
              <span className="font-mono-code text-xs text-[#C8FF3D] tracking-widest uppercase font-semibold">
                SYS.PROJECTS.SHOWCASE // 05 PRODUCTION RELEASES
              </span>
            </div>
            <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#e4e2e1] tracking-tight">
              DELIVERED <span className="text-[#C8FF3D]">SYSTEMS & PLATFORMS</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono-code text-xs text-[#9CA3AF]">
              PROJECT <span className="text-[#C8FF3D] font-bold text-sm">{currentProject.id}</span> OF 05
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#262626] text-[#e4e2e1] flex items-center justify-center hover:bg-[#C8FF3D] hover:text-[#0A0A0A] hover:border-[#C8FF3D] transition-[background-color,color,border-color,transform] duration-200 cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next project"
                className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#262626] text-[#e4e2e1] flex items-center justify-center hover:bg-[#C8FF3D] hover:text-[#0A0A0A] hover:border-[#C8FF3D] transition-[background-color,color,border-color,transform] duration-200 cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Card: Responsive Layout (Mobile: Column, Desktop: Left Image & Right Details) */}
        <div className="bg-[#181818] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl transition-shadow duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Left Side: Image Showcase */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[520px] bg-[#0A0A0A] border-b lg:border-b-0 lg:border-r border-[#262626] overflow-hidden group">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Right Side: Project Details, Metrics, Tech Stack & Action Links */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-[#161616]">
              <div>
                {/* Micro Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#262626] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#0A0A0A] border border-[#262626] text-[#C8FF3D] font-mono-code text-[11px] font-bold rounded">
                      PROJECT {currentProject.id}
                    </span>
                    <span className="font-mono-code text-[11px] text-[#9CA3AF] uppercase tracking-wider">
                      {currentProject.category}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#1C260D] border border-[#C8FF3D]/30 text-[#C8FF3D] font-mono-code text-[11px] rounded font-semibold">
                    {currentProject.impact}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-space text-2xl sm:text-3xl font-extrabold text-[#e4e2e1] uppercase tracking-tight mb-2">
                  {currentProject.title}
                </h3>
                <p className="font-mono-code text-xs text-[#C8FF3D] mb-4">
                  {currentProject.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans-body text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Performance Metric Box */}
                <div className="p-3.5 bg-[#0D0D0D] border border-[#262626] rounded-lg mb-6">
                  <div className="text-[11px] font-mono-code text-[#6B7280] uppercase tracking-wider mb-1">
                    PERFORMANCE & IMPACT METRIC
                  </div>
                  <div className="font-mono-code text-xs sm:text-sm text-[#e4e2e1] font-medium">
                    {currentProject.metric}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono-code text-[#6B7280] uppercase tracking-wider mb-2.5">
                    CORE TECH STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-[#202020] border border-[#2d2d2d] text-[#e4e2e1] font-mono-code text-xs rounded hover:border-[#C8FF3D] transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions & Arrow Controls */}
              <div className="pt-5 border-t border-[#262626] mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C8FF3D] text-[#0A0A0A] font-space text-xs font-bold uppercase tracking-wider hover:bg-[#bef532] transition-colors rounded-lg cursor-pointer"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    to="/contact"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-transparent border border-[#333333] text-[#e4e2e1] font-space text-xs uppercase tracking-wider hover:border-[#C8FF3D] hover:text-[#C8FF3D] transition-colors rounded-lg cursor-pointer"
                  >
                    <span>BLUEPRINT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Mobile Arrow Navigation */}
                <div className="flex sm:hidden items-center justify-between pt-2 border-t border-[#262626]">
                  <span className="font-mono-code text-xs text-[#9CA3AF]">
                    {currentProject.id} / 05
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous project"
                      className="p-2 rounded-lg bg-[#0A0A0A] border border-[#262626] text-[#e4e2e1] hover:bg-[#C8FF3D] hover:text-[#0A0A0A]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next project"
                      className="p-2 rounded-lg bg-[#0A0A0A] border border-[#262626] text-[#e4e2e1] hover:bg-[#C8FF3D] hover:text-[#0A0A0A]"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Quick Project Switcher Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mt-8">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3.5 sm:px-4 py-2 rounded-lg font-mono-code text-xs transition-[background-color,color,border-color,transform] duration-200 cursor-pointer flex items-center gap-2 ${
                currentIndex === idx
                  ? 'bg-[#C8FF3D] text-[#0A0A0A] font-bold shadow-lg shadow-[#C8FF3D]/10 scale-105'
                  : 'bg-[#181818] border border-[#262626] text-[#9CA3AF] hover:text-[#e4e2e1] hover:border-[#444]'
              }`}
            >
              <span>{proj.id}</span>
              <span className="hidden sm:inline text-[11px] truncate max-w-[140px]">
                {proj.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
