import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Smartphone, 
  Server, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Layers,
  Sparkles
} from 'lucide-react';

export default function Interactive3DLaptop() {
  const [activeTab, setActiveTab] = useState('web');
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
      x: -(y * 12),
      y: x * 14,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  const solutions = {
    web: {
      category: 'WEBSITES & SPAS',
      title: 'Static, Dynamic & React SPAs',
      highlight: 'HTML/CSS/JS • React.js • Next.js',
      description: 'Lightning-fast responsive websites, custom storefronts, and Single Page Applications (SPAs) optimized for 99+ Lighthouse performance and sub-second loading.',
      features: [
        'Static & Dynamic Websites (HTML5, CSS3, JS)',
        'Single Page Applications (SPAs) with React.js',
        'Next.js 15 Edge SSR & SEO-Optimized Stores',
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind'],
      metric: '99/100 Lighthouse • < 0.8s Load',
    },
    mobile: {
      category: 'REACT NATIVE SPECIALIST',
      title: 'React Native Mobile Applications',
      highlight: 'iOS & Android with 60fps Native Performance',
      description: 'Cross-platform mobile applications engineered exclusively with React Native. Single clean codebase delivering native gestures, biometric auth, and instant UPI checkout.',
      features: [
        'React Native Single Codebase for iOS & Android',
        '60 FPS Smooth Gesture Animations & Native UI',
        'Offline Cache Sync & Instant Razorpay/UPI',
      ],
      tech: ['React Native', 'Expo / CLI', 'iOS', 'Android', 'Firebase', 'UPI'],
      metric: '4.9 ★ Rating • < 1.2s App Launch',
    },
    backend: {
      category: 'BACKEND, CRM & CMS',
      title: 'Node.js, Django & Custom CRM/CMS',
      highlight: 'Node.js • Django (Python) • Firebase',
      description: 'Robust server microservices, bespoke CRM platforms, custom CMS portals, and real-time databases supporting high concurrency and rock-solid business operations.',
      features: [
        'Custom CRM Systems & Admin Dashboards',
        'Custom Content Management Systems (CMS)',
        'Node.js & Django (Python) High-Speed APIs',
        'Firebase Real-Time Auth & Cloud Sync',
      ],
      tech: ['Node.js', 'Django', 'Python', 'Firebase', 'PostgreSQL', 'REST'],
      metric: '50k+ Sessions • Sub-120ms APIs',
    },
  };

  const current = solutions[activeTab];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full relative [perspective:1400px] select-none py-4 sm:py-6"
    >
      {/* 3D Laptop Container */}
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className={`w-full max-w-[560px] mx-auto [transform-style:preserve-3d] ${isHovered ? 'will-change-transform' : ''}`}
      >
        {/* ================= LAPTOP SCREEN (LID) ================= */}
        <div className="relative bg-[#1A1C23] p-2.5 sm:p-3.5 rounded-t-2xl rounded-b-sm border-2 border-[#3A3F4D] shadow-2xl [transform-style:preserve-3d]">
          {/* Subtle Ambient Screen Glow */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-[#FDB345]/15 blur-2xl rounded-full pointer-events-none" />

          {/* Top Bezel: Camera Dot & Microphone Notch */}
          <div className="flex items-center justify-between px-3 pb-2 pt-0.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-xs" />
            </div>

            {/* Central Web Camera Dot */}
            <div className="w-2 h-2 rounded-full bg-[#0C0D11] border border-[#484E5D] flex items-center justify-center">
              <span className="w-0.5 h-0.5 rounded-full bg-[#407BFF]" />
            </div>

            {/* Browser URL Pill in Tvisha Colors */}
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#272B35] text-[10px] font-mono text-[#DADBDD]">
              <span className="text-[#27C93F]">https://</span>
              <span>jhalawebtech.com</span>
            </div>
          </div>

          {/* Laptop Screen Display (White / Light Workspace) */}
          <div className="bg-[#FFFFFF] rounded-lg border border-[#E5E5E5] p-3.5 sm:p-5 shadow-inner relative [transform:translateZ(10px)] overflow-hidden">
            {/* Top Interactive Screen Tabs */}
            <div className="flex bg-[#F5F5F7] p-1 rounded-md mb-3 sm:mb-4 border border-[#E5E5E5] relative z-10">
              <button
                type="button"
                onClick={() => setActiveTab('web')}
                className={`flex-1 py-1.5 sm:py-2 px-1 text-[11px] sm:text-xs font-narrow font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer ${
                  activeTab === 'web'
                    ? 'bg-[#FDB345] text-white shadow-xs'
                    : 'text-[#575C62] hover:text-[#333333]'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span className="truncate">Web &amp; SPAs</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('mobile')}
                className={`flex-1 py-1.5 sm:py-2 px-1 text-[11px] sm:text-xs font-narrow font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer ${
                  activeTab === 'mobile'
                    ? 'bg-[#FDB345] text-white shadow-xs'
                    : 'text-[#575C62] hover:text-[#333333]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="truncate">React Native</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('backend')}
                className={`flex-1 py-1.5 sm:py-2 px-1 text-[11px] sm:text-xs font-narrow font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer ${
                  activeTab === 'backend'
                    ? 'bg-[#FDB345] text-white shadow-xs'
                    : 'text-[#575C62] hover:text-[#333333]'
                }`}
              >
                <Server className="w-3.5 h-3.5" />
                <span className="truncate">CRM &amp; Backend</span>
              </button>
            </div>

            {/* Display Body */}
            <div>
              {/* Category Pill & Rating */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5E5]">
                <span className="font-narrow text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#F69B2E] bg-[#FFF8EE] px-2 py-0.5 rounded border border-[#FDB345]/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FDB345] animate-ping" />
                  <span>{current.category}</span>
                </span>
                <div className="flex items-center gap-0.5 text-[#FDB345]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>

              {/* Title & Metric */}
              <h3 className="font-slab text-lg sm:text-xl font-bold text-[#333333] mb-0.5">
                {current.title}
              </h3>
              <p className="font-narrow text-xs uppercase font-bold text-[#FDB345] tracking-wider mb-3">
                {current.metric}
              </p>

              {/* Bullet Features */}
              <div className="space-y-1.5 mb-3.5">
                {current.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 p-1.5 sm:p-2 bg-[#F5F5F7] rounded border border-[#E5E5E5] text-xs font-medium text-[#333333]"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FDB345] shrink-0" />
                    <span className="truncate">{f}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1 mb-3.5">
                {current.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-white border border-[#DADBDD] text-[#333333] font-narrow text-[10px] sm:text-[11px] font-bold uppercase rounded shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#333333] hover:bg-[#FDB345] text-white font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-colors group cursor-pointer"
              >
                <span>Deploy with JhalaWebTech</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* ================= LAPTOP HINGE ================= */}
        <div className="h-2 sm:h-2.5 w-1/3 mx-auto bg-[#111317] rounded-b border-t border-[#3A3F4D] shadow-md relative z-10" />

        {/* ================= LAPTOP BASE & KEYBOARD CHASSIS ================= */}
        <div className="relative bg-gradient-to-b from-[#2D3139] to-[#1F2229] p-2 sm:p-3 rounded-b-xl border-x-2 border-b-4 border-[#14161C] shadow-2xl [transform:translateZ(-5px)]">
          {/* Keyboard Deck Recess */}
          <div className="bg-[#181A20] rounded border border-[#3A3F4D]/60 p-1.5 sm:p-2 shadow-inner">
            {/* Keyboard Rows Simulation */}
            <div className="grid grid-cols-12 gap-0.5 sm:gap-1 mb-1 opacity-70">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 sm:h-2.5 bg-[#2A2E38] rounded-xs border border-[#3A3F4D]/40"
                />
              ))}
            </div>

            {/* Smooth Trackpad */}
            <div className="w-24 sm:w-32 h-6 sm:h-8 mx-auto mt-1 sm:mt-1.5 rounded-sm bg-[#22262F] border border-[#3A3F4D] shadow-xs" />
          </div>

          {/* Front Opening Notch (MacBook style center thumb recess) */}
          <div className="w-12 h-1 bg-[#14161C] mx-auto mt-1 rounded-full opacity-80" />
        </div>

        {/* Ground Drop Shadow */}
        <div className="w-4/5 h-6 mx-auto bg-black/35 blur-xl rounded-full -mt-2 pointer-events-none" />

        {/* ================= FLOATING 3D METRIC BADGES ================= */}
        {/* Floating Badge 1 (Top Right) */}
        <div
          style={{ transform: 'translateZ(45px)' }}
          className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-white px-3 py-1.5 rounded shadow-xl border border-[#FDB345]/50 animate-bounce duration-1000"
        >
          <Sparkles className="w-4 h-4 text-[#FDB345]" />
          <span className="font-narrow text-xs font-bold uppercase text-[#333333] tracking-wider">
            React Native iOS &amp; Android
          </span>
        </div>

        {/* Floating Badge 2 (Bottom Left) */}
        <div
          style={{ transform: 'translateZ(40px)' }}
          className="absolute bottom-6 -left-3 hidden sm:flex items-center gap-2 bg-[#FDB345] text-white px-3 py-1.5 rounded shadow-xl"
        >
          <Zap className="w-4 h-4" />
          <span className="font-narrow text-xs font-bold uppercase tracking-wider">
            Node.js • Django • Firebase
          </span>
        </div>

        {/* Floating Badge 3 (Middle Right) */}
        <div
          style={{ transform: 'translateZ(35px)' }}
          className="absolute top-1/2 -right-4 hidden lg:flex items-center gap-1.5 bg-[#333333] text-white px-2.5 py-1 rounded shadow-lg text-[11px] font-narrow font-bold uppercase tracking-wider"
        >
          <Layers className="w-3.5 h-3.5 text-[#FDB345]" />
          <span>Custom CRM &amp; CMS</span>
        </div>
      </div>
    </div>
  );
}
