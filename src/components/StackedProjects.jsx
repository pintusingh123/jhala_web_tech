import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import TiltCard from './3d/TiltCard';

export default function StackedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: '01',
      title: 'Jay Shree Sham Tiffin Service',
      subtitle: 'Fresh Homemade Pure Veg Tiffin & Subscription Web App',
      category: 'FoodTech & Daily Subscription App',
      description: 'Mobile-first food delivery and daily subscription web application engineered for Jay Shree Sham Tiffin Service. Features dynamic daily rotating menus, student and office meal plans (₹60–₹200), homestyle pure-veg thali customization, and instant 1-click WhatsApp order routing.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'WhatsApp Cloud API', 'Vercel Edge'],
      metric: '500+ Daily Meals Delivered',
      impact: '2x Daily Orders via WhatsApp',
      link: 'https://jayshreeshamtiffinservice.vercel.app/',
      image: '/images/jayshreeshyam-showcase.jpg',
    },
    {
      id: '02',
      title: 'Gharoti — Roti Subscription',
      subtitle: 'Home-Style Fresh Roti & Meal Subscription Platform',
      category: 'Subscription Commerce & Food Logistics',
      description: 'Mobile-first daily homestyle roti and meal subscription platform engineered for Gharoti. Features recurring delivery scheduling, multi-category cart management, automated dispatch routes, pure desi ghee phulkas, and live order tracking.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Firebase', 'Vercel Edge'],
      metric: '10,000+ Fresh Rotis Daily',
      impact: '99.9% On-Time Delivery Dispatch',
      link: 'https://www.gharoti.com/',
      image: '/images/gharoti-showcase.jpg',
    },
    {
      id: '03',
      title: 'Nexus Headless Commerce',
      subtitle: 'Next-Generation Global Edge Storefront',
      category: 'Headless E-Commerce Platform',
      description: 'Sub-second headless e-commerce experience featuring edge caching, multi-currency checkout routes, automated inventory synchronization, and custom Stripe payment integrations.',
      tech: ['Next.js', 'Shopify Plus', 'Stripe Connect', 'Edge Caching', 'Redis'],
      metric: '99/100 Lighthouse Performance',
      impact: '+42% Conversion Rate Boost',
      link: 'https://nexus-commerce.jwt.io',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '04',
      title: 'Synapse AI Workflow OS',
      subtitle: 'Autonomous Multi-Agent Orchestration Pipeline',
      category: 'Enterprise AI & Automation Platform',
      description: 'Multi-agent reasoning platform that executes deterministic data extraction, automated tool calling, and RAG vector semantic search for mission-critical enterprise operations.',
      tech: ['Python', 'LangGraph', 'FastAPI', 'OpenAI API', 'Redis Vector'],
      metric: '70% Manual Workflows Automated',
      impact: '10x Speedup in Task Resolution',
      link: 'https://synapse-ai.jwt.io',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '05',
      title: 'Kinetic Trading Engine',
      subtitle: 'Sub-Millisecond Algorithmic Trading Terminal',
      category: 'FinTech & Real-Time WebSockets',
      description: 'High-frequency algorithmic trading terminal delivering sub-8ms UI render loops, real-time WebSocket market streams, instant order routing, and custom portfolio risk analytics.',
      tech: ['React 19', 'WebSockets', 'Chart.js', 'Go Microservices', 'AWS'],
      metric: '< 8ms Render Latency Loop',
      impact: '+300% Real-Time Data Throughput',
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
    <section className="w-full py-8 sm:py-12" id="portfolio">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E5E5E5] gap-4">
        <SectionHeader
          tag="CASE STUDIES &amp; PORTFOLIO"
          title="Featured Production"
          highlightedTitle="Releases"
          description="Explore real mobile applications, high-performance web platforms, and automated software systems we have delivered for real businesses."
        />

        {/* Carousel Navigation Controls */}
        <div className="flex items-center gap-3 self-start md:self-end">
          <span className="font-narrow text-xs uppercase font-bold tracking-wider text-[#575C62]">
            Project <span className="text-[#FDB345] font-bold">{currentProject.id}</span> of 0{projects.length}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="p-2 rounded bg-white border border-[#E5E5E5] text-[#333333] hover:text-[#FDB345] hover:border-[#FDB345] transition-colors cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="p-2 rounded bg-white border border-[#E5E5E5] text-[#333333] hover:text-[#FDB345] hover:border-[#FDB345] transition-colors cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured 3D Interactive Card in Tvisha Two-Tone Style */}
      <TiltCard maxTilt={4} scale={1.005} className="w-full">
        <div className="bg-white rounded border border-[#E5E5E5] overflow-hidden shadow-md transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column (7 cols): Information & Deliverables */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Category & Badge */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-0.5 rounded font-narrow text-xs font-bold uppercase tracking-wider bg-[#FFF8EE] text-[#F69B2E] border border-[#FDB345]/30">
                    {currentProject.category}
                  </span>
                  <span className="inline-flex items-center gap-1 font-narrow text-xs font-bold uppercase tracking-wider text-[#FDB345] bg-[#F5F5F7] px-2.5 py-0.5 rounded border border-[#E5E5E5]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Live Production</span>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-slab text-2xl sm:text-3xl font-bold text-[#333333] mb-1.5 tracking-tight">
                  {currentProject.title}
                </h3>
                <p className="font-sans text-sm sm:text-base font-semibold text-[#FDB345] mb-4">
                  {currentProject.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Verified Metrics Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-[#F5F5F7] p-4 rounded border border-[#E5E5E5]">
                  <div>
                    <span className="font-narrow text-[11px] font-bold text-[#575C62] uppercase tracking-wider block mb-0.5">
                      Performance Metric
                    </span>
                    <span className="font-slab text-sm sm:text-base font-bold text-[#333333]">
                      {currentProject.metric}
                    </span>
                  </div>
                  <div>
                    <span className="font-narrow text-[11px] font-bold text-[#575C62] uppercase tracking-wider block mb-0.5">
                      Business Impact
                    </span>
                    <span className="font-slab text-sm sm:text-base font-bold text-[#FDB345]">
                      {currentProject.impact}
                    </span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="mb-6">
                  <span className="font-narrow text-xs font-bold text-[#575C62] uppercase tracking-wider block mb-2">
                    Technologies Deployed
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-white border border-[#E5E5E5] text-[#333333] font-narrow text-xs font-bold uppercase rounded shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Link Button */}
              <div className="pt-5 border-t border-[#E5E5E5] flex flex-wrap items-center gap-3">
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FDB345] hover:bg-[#F69B2E] text-white font-narrow text-sm font-bold uppercase tracking-wider rounded shadow-xs transition-colors cursor-pointer"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 font-narrow text-sm font-bold uppercase tracking-wider text-[#333333] hover:text-[#FDB345] rounded transition-colors"
                >
                  <span>Request Similar App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column (5 cols): Visual Preview with 3D floating tag */}
            <div className="lg:col-span-5 bg-[#F5F5F7] relative min-h-[280px] lg:min-h-[460px] flex items-center justify-center p-4 sm:p-6 overflow-hidden border-t lg:border-t-0 lg:border-l border-[#E5E5E5]">
              <img
                key={currentProject.id}
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover rounded shadow-md border border-[#E5E5E5] hover:scale-102 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80';
                }}
              />
              <div className="absolute top-8 right-8 bg-white px-3 py-1.5 rounded shadow-sm border border-[#E5E5E5] font-narrow text-xs font-bold uppercase tracking-wider text-[#333333] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FDB345]" />
                <span>Verified Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>

      {/* Quick Project Selectors Carousel Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4">
        {projects.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setCurrentIndex(idx)}
            className={`p-3 rounded border text-left transition-all cursor-pointer ${
              currentIndex === idx
                ? 'bg-[#FFF8EE] border-[#FDB345] shadow-xs'
                : 'bg-white border-[#E5E5E5] hover:border-[#DADBDD]'
            }`}
          >
            <span className="font-narrow text-[11px] font-bold text-[#FDB345] uppercase tracking-wider block">
              Case 0{idx + 1}
            </span>
            <span className="font-slab text-xs font-bold text-[#333333] truncate block">
              {p.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
