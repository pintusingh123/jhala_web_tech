import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Home,
  Code,
  Briefcase,
  Layers,
  BookOpen,
  Info,
  Send,
  Phone,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const CALLING_NUMBER = '8441992003';
const WHATSAPP_NUMBER = '8003642596';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/services', label: 'Services', icon: Code },
    { to: '/work', label: 'Portfolio', icon: Briefcase },
    { to: '/process', label: 'Process', icon: Layers },
    { to: '/about', label: 'Company', icon: Info },
    { to: '/blog', label: 'Blog', icon: BookOpen },
    { to: '/contact', label: 'Contact', icon: Send },
  ];

  return (
    <>
      {/* Top Navbar Styled in Tvisha's Clean Light Aesthetic */}
      <header className="bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] sticky top-0 z-40 transition-colors duration-200">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-3 sm:gap-6 px-4 sm:px-6 lg:px-10 py-3">
          
          {/* Brand Logo Link with anti-overlap structure */}
          <Link
            to="/"
            className="flex items-center gap-2.5 cursor-pointer group active:scale-95 transition-transform select-none shrink-0"
          >
            <div className="w-9 h-9 rounded bg-[#FDB345] flex items-center justify-center text-white font-slab font-bold text-lg shadow-xs group-hover:bg-[#F69B2E] transition-colors shrink-0">
              J
            </div>
            <div className="flex flex-col justify-center shrink-0">
              <span className="font-slab text-xl sm:text-2xl font-bold tracking-tight text-[#333333] group-hover:text-[#FDB345] transition-colors leading-none">
                JhalaWebTech
              </span>
              <span className="text-[10px] font-narrow font-bold text-[#FDB345] uppercase tracking-widest mt-1.5 leading-none hidden sm:block">
                Software &amp; App Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Items with anti-wrap and clean spacing */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 flex-nowrap shrink-0">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `font-narrow text-sm uppercase tracking-wider font-bold whitespace-nowrap transition-colors duration-150 py-1 border-b-2 cursor-pointer ${
                    isActive
                      ? 'text-[#FDB345] border-[#FDB345]'
                      : 'text-[#333333] hover:text-[#FDB345] border-transparent'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Top CTA Buttons with shrink-0 and clean responsiveness */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Hotline (visible on xl screens to prevent overlap on 1024px-1280px) */}
            <a
              href={`tel:+91${CALLING_NUMBER}`}
              aria-label={`Call us at ${CALLING_NUMBER}`}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F5F5F7] hover:bg-[#FFF8EE] text-[#333333] hover:text-[#F69B2E] rounded border border-[#E5E5E5] text-xs font-semibold whitespace-nowrap transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#FDB345] shrink-0" />
              <span className="font-narrow text-xs font-bold">+91 {CALLING_NUMBER}</span>
            </a>

            {/* Direct WhatsApp Quick Chat */}
            <a
              href={`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello JhalaWebTech! I want to discuss a new software/app project.')}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Direct WhatsApp Chat"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded border border-[#25D366]/30 text-xs font-semibold whitespace-nowrap transition-colors shrink-0"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-[#25D366] shrink-0" />
              <span className="font-narrow text-xs font-bold">WhatsApp</span>
            </a>

            {/* Primary Get Quote CTA in Tvisha Yellow */}
            <Link
              to="/contact"
              aria-label="Get a free quote from JhalaWebTech"
              className="bg-[#FDB345] hover:bg-[#F69B2E] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-xs hover:shadow-md active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#333333] hover:text-[#FDB345] rounded hover:bg-slate-100 transition-colors shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu for Small Screens */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E5E5E5] bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded text-sm font-narrow uppercase tracking-wider font-bold transition-colors ${
                      isActive
                        ? 'bg-[#FFF8EE] text-[#FDB345]'
                        : 'text-[#333333] hover:bg-slate-50'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 text-[#FDB345] shrink-0" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
            <div className="pt-3 border-t border-[#E5E5E5] flex flex-col gap-2">
              <a
                href={`tel:+91${CALLING_NUMBER}`}
                className="flex items-center justify-center gap-2 w-full py-2 bg-[#F5F5F7] border border-[#E5E5E5] rounded text-xs font-bold font-narrow uppercase text-[#333333]"
              >
                <Phone className="w-4 h-4 text-[#FDB345]" />
                <span>Call Hotline: +91 {CALLING_NUMBER}</span>
              </a>
              <a
                href={`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello JhalaWebTech! I want to discuss a new software/app project.')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 bg-[#25D366]/10 border border-[#25D366]/30 rounded text-xs font-bold font-narrow uppercase text-[#25D366]"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating Bottom Nav for Mobile Convenience */}
      <nav
        aria-label="Mobile Navigation Dock"
        className="flex lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-md bg-white/95 backdrop-blur-xl border border-[#E5E5E5] rounded-xl shadow-xl px-2 py-1.5 items-center justify-around select-none"
      >
        {[
          { to: '/', label: 'Home', icon: Home },
          { to: '/services', label: 'Services', icon: Code },
          { to: '/work', label: 'Work', icon: Briefcase },
          { to: '/process', label: 'Process', icon: Layers },
          { to: '/contact', label: 'Quote', icon: Send },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-all ${
                  isActive
                    ? 'text-[#FDB345] font-bold bg-[#FFF8EE] scale-105'
                    : 'text-[#666666] hover:text-[#333333]'
                }`
              }
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-[10px] font-narrow tracking-tight uppercase font-bold">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}
