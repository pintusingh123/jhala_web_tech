import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Smartphone, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Star,
  ChevronRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER = '8003642596';

export default function Hero({ onExploreServices }) {
  const [activeTab, setActiveTab] = useState('mobile');

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello JhalaWebTech! I visited your website and would like to discuss building a mobile app / custom software project.'
    );
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const showcaseTabs = {
    mobile: {
      badge: 'iOS & ANDROID APP DEVELOPMENT',
      title: 'High-Performance Mobile Applications',
      desc: 'Native iOS (Swift), Android (Kotlin), and cross-platform Flutter & React Native apps engineered for 60fps native performance, offline sync, and instant payment gateways.',
      stats: [
        { label: 'Store Rating', value: '4.9 ★' },
        { label: 'App Launch', value: '< 1.2s' },
        { label: 'Platforms', value: 'iOS + Android' },
      ],
      tags: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    },
    web: {
      badge: 'HIGH-CONCURRENCY ARCHITECTURE',
      title: 'Custom Software & Web Platforms',
      desc: 'Full-stack enterprise architectures with React 19, Next.js, and Node.js APIs supporting 50,000+ concurrent user sessions with sub-second response times.',
      stats: [
        { label: 'Lighthouse Score', value: '99/100' },
        { label: 'API Latency', value: '< 180ms' },
        { label: 'Uptime SLA', value: '99.99%' },
      ],
      tags: ['React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    ai: {
      badge: 'INTELLIGENT AUTOMATION',
      title: 'AI & Machine Learning Development',
      desc: 'Integrating enterprise LLMs, custom machine learning models, and automated business workflows that eliminate operational overhead and boost customer engagement.',
      stats: [
        { label: 'Task Automation', value: '75%' },
        { label: 'Processing Speed', value: 'Sub-second' },
        { label: 'Accuracy Rate', value: '99.2%' },
      ],
      tags: ['Python', 'FastAPI', 'LangGraph', 'OpenAI', 'Redis Vector'],
    },
  };

  const activeContent = showcaseTabs[activeTab];

  return (
    <section className="w-full relative pt-4 sm:pt-8 pb-10 sm:pb-16 overflow-hidden">
      {/* Two-Color Composition Header Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column (7 cols): Tvisha-Style Two-Tone Hero Content */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start w-full">
          {/* Tvisha Signature Yellow Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[3px] bg-[#FDB345] inline-block" />
            <span className="font-narrow text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FDB345]">
              Mobile App &amp; Custom Software Development Company
            </span>
          </div>

          {/* Monumental Zilla Slab Headline */}
          <h1 className="font-slab text-3xl sm:text-5xl lg:text-6xl font-bold text-[#333333] leading-[1.12] sm:leading-[1.1] tracking-tight mb-5">
            We Build{' '}
            <span className="text-[#FDB345] inline-block">
              Mobile Apps
            </span>
            ,<br />
            Custom Software &amp;{' '}
            <span className="relative inline-block text-[#333333]">
              Web Solutions
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#FDB345]"></span>
            </span>
          </h1>

          {/* Subtitle Paragraph in clean Roboto */}
          <p className="font-sans-body text-base sm:text-lg text-[#575C62] leading-relaxed mb-6 max-w-2xl">
            Ideal confluence of technical expertise and innovation. From cross-platform iOS &amp; Android mobile apps to robust enterprise software and automated web platforms, JhalaWebTech engineers digital solutions that drive measurable business ROI.
          </p>

          {/* Tvisha's Iconic Two-Color Golden Box Component */}
          <div className="w-full mb-7 p-4 sm:p-5 rounded tvisha-banner-box shadow-xs">
            <div className="flex items-center gap-3">
              <span className="font-slab text-2xl sm:text-3xl font-light text-white opacity-80">{'{'}</span>
              <p className="font-slab text-base sm:text-xl font-medium text-white tracking-wide">
                We Build Mobile Apps, Custom Software &amp; AI Solutions
              </p>
              <span className="font-slab text-2xl sm:text-3xl font-light text-white opacity-80">{'}'}</span>
            </div>
          </div>

          {/* Action Buttons in Tvisha Style */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full mb-8">
            <Link
              to="/contact"
              aria-label="Get in touch with JhalaWebTech"
              className="flex justify-center items-center gap-2 px-6 sm:px-7 py-3.5 bg-[#FDB345] hover:bg-[#F69B2E] text-white font-narrow text-sm sm:text-base font-bold uppercase tracking-wider rounded transition-all shadow-xs hover:shadow-md active:scale-95 cursor-pointer text-center"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={handleWhatsApp}
              aria-label="Direct WhatsApp consultation"
              className="flex justify-center items-center gap-2 px-6 py-3.5 bg-white border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-narrow text-sm sm:text-base font-bold uppercase tracking-wider rounded transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>WhatsApp Direct</span>
            </button>

            <button
              onClick={onExploreServices}
              aria-label="View capabilities"
              className="flex justify-center items-center gap-1.5 px-5 py-3.5 bg-[#F5F5F7] hover:bg-[#E5E5E5] text-[#333333] border border-[#DADBDD] font-narrow text-sm sm:text-base font-bold uppercase tracking-wider rounded transition-colors active:scale-95 cursor-pointer"
            >
              <span>Our Services</span>
              <ChevronRight className="w-4 h-4 text-[#FDB345]" />
            </button>
          </div>

          {/* Trust Guarantees Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-[#E5E5E5]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FDB345] shrink-0" />
              <span className="font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider text-[#333333]">
                100% On-Time Delivery
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FDB345] shrink-0" />
              <span className="font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider text-[#333333]">
                Complete Code Ownership
              </span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <Zap className="w-4 h-4 text-[#FDB345] shrink-0" />
              <span className="font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider text-[#333333]">
                24/7 SLA Support
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Two-Tone Contrasting Showcase Card */}
        <div className="lg:col-span-5 w-full flex flex-col justify-center">
          <div className="bg-[#FFFFFF] rounded border border-[#E5E5E5] shadow-md p-5 sm:p-6 relative">
            {/* Top Selector Tabs in Tvisha Two-Tone Palette */}
            <div className="flex bg-[#F5F5F7] p-1 rounded mb-5 border border-[#E5E5E5]">
              <button
                onClick={() => setActiveTab('mobile')}
                className={`flex-1 py-2 px-2 text-xs font-narrow font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'mobile'
                    ? 'bg-[#FDB345] text-white shadow-xs'
                    : 'text-[#575C62] hover:text-[#333333]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
              <button
                onClick={() => setActiveTab('web')}
                className={`flex-1 py-2 px-2 text-xs font-narrow font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'web'
                    ? 'bg-[#FDB345] text-white shadow-xs'
                    : 'text-[#575C62] hover:text-[#333333]'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Custom SW</span>
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`flex-1 py-2 px-2 text-xs font-narrow font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'ai'
                    ? 'bg-[#FDB345] text-white shadow-xs'
                    : 'text-[#575C62] hover:text-[#333333]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Tech</span>
              </button>
            </div>

            {/* Showcase Tab Content */}
            <div className="transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-narrow text-[11px] font-bold uppercase tracking-widest text-[#F69B2E] bg-[#FFF8EE] px-2.5 py-0.5 rounded border border-[#FDB345]/30">
                  {activeContent.badge}
                </span>
                <div className="flex items-center gap-1 text-[#FDB345]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <h2 className="font-slab text-xl sm:text-2xl font-bold text-[#333333] mb-2">
                {activeContent.title}
              </h2>

              <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed mb-5">
                {activeContent.desc}
              </p>

              {/* Metrics Grid with Tvisha Two-Tone borders */}
              <div className="grid grid-cols-3 gap-2.5 bg-[#F5F5F7] p-3.5 rounded border border-[#E5E5E5] mb-5">
                {activeContent.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="block font-slab text-base sm:text-xl font-bold text-[#333333]">
                      {stat.value}
                    </span>
                    <span className="font-narrow text-[11px] text-[#575C62] uppercase font-bold tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies Pills */}
              <div className="mb-5">
                <span className="font-narrow text-xs font-bold text-[#575C62] uppercase tracking-wider block mb-2">
                  Engineered With
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeContent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white border border-[#E5E5E5] text-[#333333] font-narrow text-xs font-bold uppercase rounded shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Action Link */}
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#333333] hover:bg-[#FDB345] text-white font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-colors group cursor-pointer"
              >
                <span>Request Project Estimate</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
