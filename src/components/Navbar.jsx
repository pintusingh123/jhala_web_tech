'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Phone
} from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';
import WhatsAppIcon from './WhatsAppIcon';
import Logo from './Logo';
import { company } from '../content/company';

const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);
  const pathname = usePathname();

  // Current month for announcement
  const currentMonth = monthFormatter.format(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'Work' },
    { to: '/process', label: 'Process' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* ================= A. ANNOUNCEMENT BAR (Section 4.A) ================= */}
      {!announcementDismissed && (
        <aside
          aria-label="Current booking availability"
          className="bg-surface-2 border-b border-subtle text-primary text-xs font-mono h-9 px-4 flex items-center justify-between z-50 relative"
        >
          <div className="w-full flex items-center justify-center gap-2 text-center truncate">
            <span className="w-2 h-2 rounded-full bg-[#3DD9B0] animate-pulse shrink-0" />
            <span className="truncate">
              Now booking development projects for <strong className="text-[#FF6B2C]">{currentMonth}</strong> &bull; Free discovery call
            </span>
          </div>
          <button
            type="button"
            onClick={() => setAnnouncementDismissed(true)}
            aria-label="Dismiss announcement banner"
            className="text-muted hover:text-primary p-1 cursor-pointer shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* ================= B. STICKY NAVBAR (Section 4.B) ================= */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-md border-b border-subtle shadow-xs py-3'
            : 'bg-page/80 backdrop-blur-xs py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Left: Brand Logo (Wordmark + Mark) */}
          <Link
            href="/"
            className="cursor-pointer group select-none shrink-0"
            aria-label="JhalaWebTech Home"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main desktop navigation"
            className="hidden lg:flex items-center gap-7 font-head text-sm font-semibold tracking-tight"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  href={link.to}
                  className={`font-head text-sm font-semibold tracking-tight transition-colors py-1 relative ${
                    isActive ? 'text-[#FF6B2C]' : 'text-muted hover:text-primary'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6B2C] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Theme Toggle (Dark / Light) */}
            <ThemeToggle />

            {/* Direct WhatsApp Callout for quick conversions */}
            <a
              href={`https://wa.me/91${company.phones.whatsappPintu}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp lead chat"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#25D366]/40 text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 font-mono text-xs font-bold uppercase transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Primary CTA Button: "Start a project" (Section 4.B) */}
            <Link
              href="/contact"
              className="bg-[#FF6B2C] hover:bg-[#FF8452] text-white px-4 sm:px-5 py-2.5 rounded-lg font-head text-xs sm:text-sm font-bold tracking-tight shadow-xs hover:shadow-md transition-[background-color,box-shadow,transform] active:scale-[0.98] flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 rounded-lg border border-subtle bg-surface text-primary hover:bg-surface-2 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE FULL-SCREEN SLIDE DRAWER ================= */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
          className="fixed inset-x-0 top-[88px] bottom-0 z-40 bg-page/98 backdrop-blur-xl border-t border-subtle flex flex-col justify-between p-6 sm:p-8 overflow-y-auto lg:hidden"
        >
          <nav className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase text-muted tracking-widest block mb-1">
              Menu Navigation
            </span>

            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  href={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`font-head text-2xl font-bold tracking-tight transition-colors py-2 flex items-center justify-between border-b border-subtle/50 ${
                    isActive ? 'text-[#FF6B2C]' : 'text-primary'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-muted" />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Bottom Actions */}
          <div className="pt-6 border-t border-subtle flex flex-col gap-3">
            <a
              href={`https://wa.me/91${company.phones.whatsappPintu}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/40 rounded-xl font-mono text-sm font-bold uppercase"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Chat with Pintu on WhatsApp</span>
            </a>

            <a
              href={`tel:+91${company.phones.callingRaw}`}
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-surface-2 text-primary border border-subtle rounded-xl font-mono text-sm font-bold uppercase"
            >
              <Phone className="w-4 h-4 text-[#FF6B2C]" />
              <span>Call: +91 8441992003</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#FF6B2C] text-white rounded-xl font-head text-base font-bold shadow-md"
            >
              <span>Get Free Technical Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
