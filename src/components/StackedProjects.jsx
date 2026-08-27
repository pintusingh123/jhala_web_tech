import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function StackedProjects() {
  const { openContact } = useContact();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: '01',
      title: 'HENRY CHARLES ESTATES',
      subtitle: 'Luxury Property & Investment Web Application',
      category: 'LUXURY REAL ESTATE & GLOBAL CRM',
      description: 'High‑performance luxury real‑estate portal with multi‑currency conversion, interactive villa walkthroughs, sub‑second search filters, and automated investor CRM pipelines.',
      tech: ['React 19', 'Next.js', 'Tailwind v4', 'Node.js', 'PostgreSQL'],
      metric: '200k+ Active Searches • 4.9/5 Rating',
      impact: '+185% Lead Generation',
      link: 'https://henrycharlesestates.com',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '02',
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
      title: 'GHAROTI SUBSCRIPTION & CRM',
      subtitle: 'End‑to‑End Logistics & Order Management Suite',
      category: 'SUBSCRIPTION COMMERCE & LOGISTICS',
      description: 'Enterprise subscription platform managing recurring delivery schedules, automated billing, real‑time driver dispatch tracking, and centralized customer relationship management.',
      tech: ['React 19', 'Firebase', 'Node.js', 'Tailwind', 'Stripe Billing'],
      metric: '50k+ Daily Orders • 99.99% Uptime',
      impact: 'Zero Order Failure',
      link: 'https://gharoti.com',
      image: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=1200&q=80',
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
                className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#262626] text-[#e4e2e1] flex items-center justify-center hover:bg-[#C8FF3D] hover:text-[#0A0A0A] hover:border-[#C8FF3D] transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next project"
                className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#262626] text-[#e4e2e1] flex items-center justify-center hover:bg-[#C8FF3D] hover:text-[#0A0A0A] hover:border-[#C8FF3D] transition-all cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Card: Responsive Layout (Mobile: Column, Desktop: Left Image & Right Details) */}
        <div className="bg-[#181818] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Left Side: Image Showcase */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[520px] bg-[#0A0A0A] border-b lg:border-b-0 lg:border-r border-[#262626] overflow-hidden group">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Image Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/20 to-black/40 pointer-events-none" />

              {/* Floating Badges on Top */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1.5 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#262626] text-[#C8FF3D] font-mono-code text-xs font-semibold uppercase tracking-wider rounded-md">
                  SYS.ID {currentProject.id}
                </span>
                <span className="px-3 py-1.5 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#262626] text-[#e4e2e1] font-mono-code text-xs rounded-md">
                  {currentProject.impact}
                </span>
              </div>

              {/* Category Pill at Bottom of Image */}
              <div className="absolute bottom-4 left-4 pointer-events-none">
                <span className="px-3.5 py-1.5 bg-[#C8FF3D] text-[#0A0A0A] font-space text-xs font-bold uppercase tracking-wider rounded-md shadow-lg">
                  {currentProject.category}
                </span>
              </div>
            </div>

            {/* Right Side: Project Details, Metrics, Tech Stack & Action Links */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-[#161616]">
              <div>
                {/* Micro Header */}
                <div className="flex items-center justify-between border-b border-[#262626] pb-3 mb-4">
                  <span className="font-mono-code text-xs text-[#9CA3AF] uppercase tracking-wider">
                    PRODUCTION RELEASE
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#C8FF3D] font-mono-code font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>VERIFIED ARCHITECTURE</span>
                  </div>
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
                    {currentProject.tech.map((t, idx) => (
                      <span
                        key={idx}
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
                  <button
                    onClick={() => openContact({ title: `${currentProject.title} Architecture Blueprint` })}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-transparent border border-[#333333] text-[#e4e2e1] font-space text-xs uppercase tracking-wider hover:border-[#C8FF3D] hover:text-[#C8FF3D] transition-colors rounded-lg cursor-pointer"
                  >
                    <span>BLUEPRINT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
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
              className={`px-3.5 sm:px-4 py-2 rounded-lg font-mono-code text-xs transition-all cursor-pointer flex items-center gap-2 ${
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
