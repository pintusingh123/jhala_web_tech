import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ChevronRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import Hero3DCanvas from './3d/Hero3DCanvas';
import Interactive3DLaptop from './3d/Interactive3DLaptop';

const WHATSAPP_NUMBER = '8003642596';

export default function Hero({ onExploreServices }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello JhalaWebTech! I visited your website and would like to discuss building a React Native mobile app / website / CRM / custom software project.'
    );
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full relative pt-4 sm:pt-8 pb-10 sm:pb-16 overflow-hidden">
      {/* 3D WebGL GPU Constellation & Geometric Wireframe Background */}
      <Hero3DCanvas />

      {/* Two-Color Composition Header Strip */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column (7 cols): Tvisha-Style Two-Tone Hero Content */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start w-full">
          {/* Tvisha Signature Yellow Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[3px] bg-[#FDB345] inline-block" />
            <span className="font-narrow text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FDB345]">
              React Native Apps &bull; Custom Websites &bull; CRM &bull; CMS &bull; Backend
            </span>
          </div>

          {/* Monumental Zilla Slab Headline */}
          <h1 className="font-slab text-3xl sm:text-5xl lg:text-6xl font-bold text-[#333333] leading-[1.12] sm:leading-[1.1] tracking-tight mb-5">
            We Build{' '}
            <span className="text-[#FDB345] inline-block">
              React Native Apps
            </span>
            ,<br />
            Websites, CRM &amp;{' '}
            <span className="relative inline-block text-[#333333]">
              Custom Software
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#FDB345]"></span>
            </span>
          </h1>

          {/* Subtitle Paragraph in clean Roboto */}
          <p className="font-sans-body text-base sm:text-lg text-[#575C62] leading-relaxed mb-6 max-w-2xl">
            Ideal confluence of technical engineering and innovation. We engineer high-performance mobile apps exclusively with <strong className="text-[#333333] font-semibold">React Native</strong>, responsive websites (<strong className="text-[#333333] font-semibold">HTML, CSS, JS, Static &amp; Dynamic SPAs with React.js &amp; Next.js</strong>), scalable backends with <strong className="text-[#333333] font-semibold">Node.js, Django (Python) &amp; Firebase</strong>, and bespoke <strong className="text-[#333333] font-semibold">CRM &amp; CMS platforms</strong>.
          </p>

          {/* Tvisha's Iconic Two-Color Golden Box Component */}
          <div className="w-full mb-7 p-4 sm:p-5 rounded tvisha-banner-box shadow-xs">
            <div className="flex items-center gap-3">
              <span className="font-slab text-2xl sm:text-3xl font-light text-white opacity-80">{'{'}</span>
              <p className="font-slab text-base sm:text-xl font-medium text-white tracking-wide">
                We Build React Native Apps, Custom Websites, CRM &amp; CMS Solutions
              </p>
              <span className="font-slab text-2xl sm:text-3xl font-light text-white opacity-80">{'}'}</span>
            </div>
          </div>

          {/* Action Buttons in Tvisha Style */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full mb-8">
            <Link
              to="/contact"
              aria-label="Get in touch with JhalaWebTech"
              className="flex justify-center items-center gap-2 px-6 sm:px-7 py-3.5 bg-[#FDB345] hover:bg-[#F69B2E] text-white font-narrow text-sm sm:text-base font-bold uppercase tracking-wider rounded transition-colors shadow-xs hover:shadow-md active:scale-95 cursor-pointer text-center"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={handleWhatsApp}
              aria-label="Direct WhatsApp consultation"
              className="flex justify-center items-center gap-2 px-6 py-3.5 bg-white border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-narrow text-sm sm:text-base font-bold uppercase tracking-wider rounded transition-colors active:scale-95 cursor-pointer"
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

        {/* Right Column (5 cols): Interactive 3D Perspective Laptop Model */}
        <div className="lg:col-span-5 w-full flex flex-col justify-center">
          <Interactive3DLaptop />
        </div>
      </div>
    </section>
  );
}
