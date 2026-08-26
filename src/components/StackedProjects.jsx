import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ArrowUpRight, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { useContact } from '../context/ContactContext';

gsap.registerPlugin(ScrollTrigger);

export default function StackedProjects() {
  const pinSectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const { openContact } = useContact();
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const projects = [
    {
      id: '01',
      title: 'HENRY CHARLES ESTATES',
      subtitle: 'Luxury Property & Investment Web Application',
      category: 'LUXURY REAL ESTATE & GLOBAL CRM',
      description: 'A high-performance luxury real estate portal engineered with multi-currency conversion, interactive villa walkthroughs, sub-second search filters, and automated investor CRM pipelines.',
      tech: ['React 19', 'Next.js', 'Tailwind v4', 'Node.js', 'PostgreSQL'],
      metric: '200k+ Active Searches • 4.9/5 Rating',
      impact: '+185% Lead Generation',
      link: 'https://henrycharlesestates.com',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '02',
      title: 'SYNAPSE AI WORKFLOW OS',
      subtitle: 'Autonomous Multi-Agent Orchestration Pipeline',
      category: 'AGENTIC AI & MULTI-LLM SYSTEMS',
      description: 'Multi-agent reasoning platform that executes deterministic data extraction, automated tool calling, and RAG vector semantic search for mission-critical enterprise operations.',
      tech: ['Python', 'LangGraph', 'FastAPI', 'OpenAI API', 'Redis Vector'],
      metric: '70% Workflow Automation • Sub-200ms Latency',
      impact: '10x Speedup',
      link: 'https://synapse-ai.jwt.io',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '03',
      title: 'NEXUS HEADLESS COMMERCE',
      subtitle: 'Next-Generation Global Edge Storefront',
      category: 'HEADLESS COMMERCE & PAYMENT RAILS',
      description: 'Sub-second headless e-commerce experience featuring edge caching, multi-currency checkout routes, automated inventory synchronization, and custom Stripe payment integrations.',
      tech: ['Next.js', 'Shopify Plus', 'Stripe Connect', 'Edge Caching', 'Redis'],
      metric: '99/100 Lighthouse Score • Zero Layout Shift',
      impact: '+42% Conversion Boost',
      link: 'https://nexus-commerce.jwt.io',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '04',
      title: 'GHAROTI SUBSCRIPTION & CRM',
      subtitle: 'End-to-End Logistics & Order Management Suite',
      category: 'SUBSCRIPTION COMMERCE & LOGISTICS',
      description: 'Enterprise subscription platform managing recurring delivery schedules, automated billing, real-time driver dispatch tracking, and centralized customer relationship management.',
      tech: ['React 19', 'Firebase', 'Node.js', 'Tailwind', 'Stripe Billing'],
      metric: '50k+ Daily Orders • 99.99% Uptime',
      impact: 'Zero Order Failure',
      link: 'https://gharoti.com',
      image: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '05',
      title: 'KINETIC TRADING ENGINE',
      subtitle: 'Sub-Millisecond Algorithmic Trading Terminal',
      category: 'FINTECH & REAL-TIME WEBSOCKETS',
      description: 'High-frequency algorithmic trading terminal delivering sub-8ms UI render loops, real-time WebSocket market streams, instant order routing, and custom portfolio risk analytics.',
      tech: ['React 19', 'WebSockets', 'Chart.js', 'Go Microservices', 'AWS'],
      metric: '< 8ms Latency • 50k Ops/sec Throughput',
      impact: '+300% Data Throughput',
      link: 'https://kinetic-trading.jwt.io',
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  useEffect(() => {
    const pinSection = pinSectionRef.current;
    const cards = cardsContainerRef.current?.children;
    if (!pinSection || !cards || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const cardArray = gsap.utils.toArray(cards);

      // Hardware Accelerated Initial Positions
      cardArray.forEach((card, index) => {
        if (index > 0) {
          gsap.set(card, {
            yPercent: 110,
            opacity: 0,
            scale: 0.96,
            force3D: true,
          });
        } else {
          gsap.set(card, {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            force3D: true,
          });
        }
      });

      // Master Pinned Timeline with Optimized GPU scrubbing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSection,
          start: 'top top+=80',
          end: () => `+=${(cardArray.length - 1) * window.innerHeight * 0.95}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * cardArray.length),
              cardArray.length - 1
            );
            setActiveCardIndex(index);
          },
        },
      });

      // Smooth 60-120fps card transitions without heavy filters
      cardArray.forEach((card, i) => {
        if (i === 0) return;
        const prevCard = cardArray[i - 1];

        // Previous card smooth scale & dim
        tl.to(
          prevCard,
          {
            scale: 0.94,
            opacity: 0.35,
            ease: 'none',
            force3D: true,
            duration: 1,
          },
          `step-${i}`
        );

        // Current card moves in from bottom smoothly
        tl.to(
          card,
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            ease: 'none',
            force3D: true,
            duration: 1,
          },
          `step-${i}`
        );
      });

      // Buffer pause on last project before smooth exit
      tl.to({}, { duration: 0.35 });
    }, pinSectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div className="w-full relative">
      {/* 1. Unpinned Header: Scrolls in naturally so pinned cards have 100% viewport space */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 pt-4">
        <div>
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#C8FF3D] uppercase tracking-widest mb-1.5">
             <span>FEATURED PRODUCTION CASE STUDIES // PINNED SHOWCASE</span>
          </div>
          <h2 className="font-space text-3xl sm:text-5xl font-extrabold uppercase text-[#e4e2e1]">
            DELIVERED <span className="text-[#C8FF3D]">SYSTEMS & PLATFORMS</span>
          </h2>
        </div>

        {/* Live Scroll Stepper */}
        <div className="flex items-center gap-2 font-mono-code text-xs bg-[#1A1A1A] brutalist-border px-4 py-2 text-[#e4e2e1]">
          <span className="text-[#C8FF3D] font-bold">PROJECT {projects[activeCardIndex].id}</span>
          <span className="text-[#9CA3AF]">/ 05</span>
          <div className="flex gap-1.5 ml-2">
            {projects.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-1.5 rounded-sm transition-all duration-300 ${
                  activeCardIndex === i ? 'bg-[#C8FF3D] w-5' : 'bg-[#444748]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 2. Pinned Stage: Dedicated to full-height cards without being squeezed */}
      <section 
        ref={pinSectionRef}
        className="w-full h-[82vh] max-h-[700px] min-h-[520px] relative flex items-center justify-center bg-[#131313] z-20"
      >
        <div 
          ref={cardsContainerRef}
          className="w-full h-full relative rounded-2xl overflow-hidden"
        >
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="absolute inset-0 w-full h-full bg-[#1A1A1A] brutalist-border-active rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[8px_8px_0px_0px_#C8FF3D] flex flex-col lg:flex-row gap-6 lg:gap-10 justify-between items-stretch overflow-hidden transform-gpu will-change-transform"
              style={{ zIndex: idx + 10 }}
            >
              {/* Left Project Info & Specs */}
              <div className="w-full lg:w-7/12 flex flex-col justify-between h-full z-10 overflow-y-auto pr-1">
                <div>
                  {/* Meta Bar */}
                  <div className="flex justify-between items-center pb-2.5 border-b border-[#262626] mb-3">
                    <span className="font-mono-code text-xs font-bold text-[#C8FF3D] uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>PROJECT {proj.id} // {proj.category}</span>
                    </span>
                    <span className="text-[10px] font-mono-code bg-[#0A0A0A] border border-[#262626] text-[#C8FF3D] px-2.5 py-0.5 font-bold uppercase">
                      {proj.impact}
                    </span>
                  </div>

                  <h3 className="font-space text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-[#e4e2e1] mb-1 leading-tight">
                    {proj.title}
                  </h3>
                  <p className="font-mono-code text-xs text-[#9CA3AF] mb-3">
                    {proj.subtitle}
                  </p>

                  <p className="font-sans-body text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Performance Metric Banner */}
                  <div className="p-2.5 bg-[#0A0A0A] brutalist-border mb-4 flex items-center gap-2 font-mono-code text-xs text-[#e4e2e1]">
                    <TrendingUp className="w-4 h-4 text-[#C8FF3D] shrink-0" />
                    <span className="text-[#9CA3AF]">PERFORMANCE METRIC:</span>
                    <span className="text-[#C8FF3D] font-bold">{proj.metric}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] sm:text-[11px] font-mono-code text-[#e4e2e1] bg-[#131313] border border-[#262626] px-2 py-0.5 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: 100% visible at card bottom */}
                <div className="flex flex-wrap gap-3 pt-2 border-t border-[#262626]/50">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#C8FF3D] text-[#0A0A0A] px-5 py-2.5 font-space text-xs font-bold uppercase hover:bg-[#bef532] transition-colors brutalist-border-active flex items-center gap-2 cursor-pointer shadow-[2px_2px_0px_0px_#262626] active:scale-95"
                  >
                    <span>VISIT LIVE SYSTEM</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => openContact({ title: `${proj.title} Architecture Blueprint` })}
                    className="bg-transparent text-[#e4e2e1] border border-[#444748] px-5 py-2.5 font-space text-xs font-bold uppercase hover:bg-[#0A0A0A] hover:border-[#C8FF3D] hover:text-[#C8FF3D] transition-colors flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>REQUEST BLUEPRINT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Project Preview Image / Visual Mockup */}
              <div className="w-full lg:w-5/12 h-44 sm:h-52 lg:h-full relative rounded-xl overflow-hidden brutalist-border group shrink-0">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70"></div>
                
                {/* Overlay System Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-[#0E0E0E]/90 backdrop-blur-md p-2.5 brutalist-border">
                  <div className="flex items-center gap-2 font-mono-code text-[11px] text-[#e4e2e1]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF3D]" />
                    <span>PRODUCTION VERIFIED</span>
                  </div>
                  <span className="font-mono-code text-[10px] text-[#C8FF3D] font-bold">
                    2026 RELEASE
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
