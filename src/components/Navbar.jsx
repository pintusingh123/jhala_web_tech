import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenContact }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-[#131313] border-b border-[#262626] sticky top-0 z-50 transition-all duration-200">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-12 py-3.5">
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2.5 cursor-pointer group active:scale-95 transition-transform select-none"
        >
          <div className="p-1.5 bg-[#1A1A1A] brutalist-border rounded text-[#C8FF3D] group-hover:border-[#C8FF3D] transition-colors">
            <Terminal className="w-5 h-5" />
          </div>
          <span className="font-space text-xl md:text-2xl font-bold tracking-tighter text-[#e4e2e1]">
            JhalaLabs
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono-code bg-[#1A1A1A] border border-[#262626] text-[#C8FF3D] px-2 py-0.5 rounded font-bold uppercase">
            ACTIVE
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`font-space text-xs uppercase tracking-widest transition-all duration-200 py-1 border-b-2 active:scale-95 cursor-pointer ${
                activeTab === item.id
                  ? 'text-[#C8FF3D] font-bold border-[#C8FF3D]'
                  : 'text-[#9CA3AF] hover:text-[#e4e2e1] border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="bg-[#C8FF3D] text-[#0A0A0A] px-5 py-2.5 font-space text-xs font-bold uppercase hover:bg-[#bef532] transition-colors brutalist-border-active active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#262626]"
          >
            <span>LET'S TALK</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Nav Bar Links */}
      <div className="flex md:hidden overflow-x-auto border-t border-[#262626] px-4 py-2 gap-4 text-xs font-space uppercase bg-[#0E0E0E]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`whitespace-nowrap pb-1 ${
              activeTab === item.id
                ? 'text-[#C8FF3D] font-bold border-b-2 border-[#C8FF3D]'
                : 'text-[#9CA3AF]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
