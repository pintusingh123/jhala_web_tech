import React from 'react';
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
  ArrowRight
} from 'lucide-react';

const CALLING_NUMBER = '8441992003';

export default function Navbar() {
  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/services', label: 'Services', icon: Code },
    { to: '/work', label: 'Work', icon: Briefcase },
    { to: '/process', label: 'Process', icon: Layers },
    { to: '/blog', label: 'Insights', icon: BookOpen },
    { to: '/about', label: 'About', icon: Info },
  ];

  const mobileNavItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/services', label: 'Services', icon: Code },
    { to: '/work', label: 'Work', icon: Briefcase },
    { to: '/process', label: 'Process', icon: Layers },
    { to: '/blog', label: 'Insights', icon: BookOpen },
    { to: '/contact', label: 'Contact', icon: Send },
  ];

  return (
    <>
      {/* Top Navbar */}
      <header className="bg-[#131313]/95 backdrop-blur-md border-b border-[#262626] sticky top-0 z-40 transition-colors duration-200">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-12 py-3.5">
          {/* Brand Logo Link */}
          <Link 
            to="/"
            className="flex items-center gap-2.5 cursor-pointer group active:scale-95 transition-transform select-none"
          >
            <span className="font-space text-xl md:text-2xl font-bold tracking-tighter text-[#e4e2e1]">
              JhalaWebTech
            </span>
          </Link>

          {/* Desktop Navigation Items */}
          <nav className="hidden lg:flex gap-6 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `font-space text-xs uppercase tracking-widest transition-[color,border-color,transform] duration-200 py-1 border-b-2 active:scale-95 cursor-pointer ${
                    isActive
                      ? 'text-[#C8FF3D] font-bold border-[#C8FF3D]'
                      : 'text-[#9CA3AF] hover:text-[#e4e2e1] border-transparent'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Top CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Hotline on medium screens */}
            <a
              href={`tel:+91${CALLING_NUMBER}`}
              aria-label="Direct Phone Line 8441992003"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 bg-[#1A1A1A] hover:bg-[#242424] text-[#e4e2e1] hover:text-[#C8FF3D] brutalist-border font-mono-code text-[11px] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8FF3D]" />
              <span>8441992003</span>
            </a>

            <Link
              to="/contact"
              aria-label="Contact JhalaWebTech"
              className="bg-[#C8FF3D] text-[#0A0A0A] px-4 md:px-5 py-2 md:py-2.5 font-space text-xs font-bold uppercase hover:bg-[#bef532] transition-colors brutalist-border-active active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#262626]"
            >
              <span>LET'S TALK</span>
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>

      {/* Floating Mobile Bottom Navigation Dock */}
      <nav 
        aria-label="Mobile Navigation Dock"
        className="flex lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md bg-[#0E0E0E]/95 backdrop-blur-xl border border-[#262626] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.95)] px-2 py-1.5 items-center justify-around select-none"
      >
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              style={{ WebkitTapHighlightColor: 'transparent' }}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1.5 px-2.5 rounded-xl transition-colors duration-150 cursor-pointer relative outline-none focus:outline-none select-none ${
                  isActive
                    ? 'text-[#C8FF3D] bg-[#1C1C1C] font-semibold'
                    : 'text-[#8E8E8E] hover:text-[#e4e2e1]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-5 h-5 mb-0.5 transition-colors duration-150 ${isActive ? 'text-[#C8FF3D]' : 'text-[#8E8E8E]'}`} />
                  <span className="font-space text-[10px] tracking-tight uppercase leading-none">
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}
