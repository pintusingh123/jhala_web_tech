'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { 
  Smartphone, 
  Code2, 
  Sparkles, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';

export default function Interactive3DDevice() {
  const [activeTab, setActiveTab] = useState('mobile');
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const el = containerRef.current;
    if (!el) return;
    setIsHovered(true);
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -(y * 14),
      y: x * 14,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  const screens = {
    mobile: {
      type: 'NATIVE & CROSS-PLATFORM',
      title: 'iOS & Android Mobile App',
      metric: '4.9 ★ Rating • < 1.2s Launch',
      submetric: '60fps Native UI with Offline Cache',
      highlights: [
        'React Native & Flutter Multi-Platform',
        'Biometric Auth & FaceID Integration',
        'Instant Razorpay & Stripe Checkout',
      ],
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    },
    web: {
      type: 'SCALABLE CLOUD ARCHITECTURE',
      title: 'Enterprise Custom Software',
      metric: '99/100 Lighthouse • < 180ms APIs',
      submetric: '50k+ Concurrent User Sessions',
      highlights: [
        'React 19 & Next.js 15 Edge Architecture',
        'High-Throughput PostgreSQL & Redis Cache',
        'Role-Based Multi-Tenant Dashboard',
      ],
      tech: ['React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    ai: {
      type: 'INTELLIGENT REASONING ENGINE',
      title: 'Autonomous AI & Workflow OS',
      metric: '75% Automation • Sub-Second Execution',
      submetric: 'Zero Hallucination Strict Schemas',
      highlights: [
        'LangGraph Multi-Agent Orchestration',
        'Enterprise Vector RAG Semantic Search',
        'Automated Document & Invoice Extraction',
      ],
      tech: ['Python', 'FastAPI', 'LangGraph', 'OpenAI', 'Redis Vector'],
    },
  };

  const current = screens[activeTab];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full relative [perspective:1200px] select-none py-2"
    >
      {/* 3D Floating Device Container */}
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className={`w-full [transform-style:preserve-3d] ${isHovered ? 'will-change-transform' : ''}`}
      >
        {/* Device Frame */}
        <div className="bg-white rounded-2xl border-2 border-[#E5E5E5] shadow-2xl p-4 sm:p-6 relative overflow-hidden [transform-style:preserve-3d]">
          {/* Subtle Ambient Backlight in Tvisha Yellow */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#FDB345]/20 rounded-full blur-2xl pointer-events-none" />

          {/* Top 3D Interactive Tab Selectors */}
          <div className="flex bg-[#F5F5F7] p-1 rounded mb-4 border border-[#E5E5E5] relative z-10 [transform:translateZ(15px)]">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex-1 py-2 px-2 text-xs font-narrow font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'mobile'
                  ? 'bg-[#FDB345] text-white shadow-xs'
                  : 'text-[#575C62] hover:text-[#333333]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile App</span>
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`flex-1 py-2 px-2 text-xs font-narrow font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-[#FDB345] text-white shadow-xs'
                  : 'text-[#575C62] hover:text-[#333333]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Software</span>
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`flex-1 py-2 px-2 text-xs font-narrow font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'ai'
                  ? 'bg-[#FDB345] text-white shadow-xs'
                  : 'text-[#575C62] hover:text-[#333333]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Tech</span>
            </button>
          </div>

          {/* Screen Display Container */}
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E5E5] p-5 shadow-inner relative [transform:translateZ(25px)]">
            {/* Status Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E5E5]">
              <span className="font-narrow text-[11px] font-bold uppercase tracking-wider text-[#F69B2E] bg-[#FFF8EE] px-2 py-0.5 rounded border border-[#FDB345]/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FDB345] animate-ping" />
                <span>{current.type}</span>
              </span>
              <div className="flex items-center gap-1 text-[#FDB345]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            {/* Screen Title */}
            <h3 className="font-slab text-xl sm:text-2xl font-bold text-[#333333] mb-1">
              {current.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="font-narrow text-xs uppercase font-bold text-[#FDB345] tracking-wider">
                {current.metric}
              </span>
              <span className="text-[#DADBDD] text-xs">•</span>
              <span className="font-narrow text-[11px] uppercase font-bold text-[#575C62] tracking-wider">
                {current.submetric}
              </span>
            </div>

            {/* Dynamic Features List */}
            <div className="space-y-2 mb-5">
              {current.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2.5 p-2 bg-[#F5F5F7] rounded border border-[#E5E5E5] text-xs font-medium text-[#333333]"
                >
                  <ShieldCheck className="w-4 h-4 text-[#FDB345] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {current.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-white border border-[#E5E5E5] text-[#333333] font-narrow text-[11px] font-bold uppercase rounded shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Live CTA Button */}
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#333333] hover:bg-[#FDB345] text-white font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-colors group cursor-pointer"
            >
              <span>Build This Product</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Floating 3D Metric Badge 1 (Top Right) */}
          <div
            style={{ transform: 'translateZ(45px)' }}
            className="absolute -top-2 -right-2 hidden sm:flex items-center gap-2 bg-white px-3 py-1.5 rounded shadow-lg border border-[#FDB345]/40"
          >
            <Activity className="w-4 h-4 text-[#FDB345]" />
            <span className="font-narrow text-xs font-bold uppercase text-[#333333] tracking-wider">
              60 FPS Smooth
            </span>
          </div>

          {/* Floating 3D Metric Badge 2 (Bottom Left) */}
          <div
            style={{ transform: 'translateZ(40px)' }}
            className="absolute -bottom-2 -left-2 hidden sm:flex items-center gap-2 bg-[#FDB345] text-white px-3 py-1.5 rounded shadow-lg"
          >
            <Zap className="w-4 h-4" />
            <span className="font-narrow text-xs font-bold uppercase tracking-wider">
              Sub-Second Execution
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
