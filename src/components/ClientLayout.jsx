'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Lenis from 'lenis';
import { ArrowRight } from 'lucide-react';
import WhatsAppFab from './ui/WhatsAppFab';
import WhatsAppIcon from './WhatsAppIcon';
import { company } from '../content/company';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  // Initialize Lenis Smooth Scrolling (Desktop only for native mobile performance)
  useEffect(() => {
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouch) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let animId;
    const raf = (time) => {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    };
    animId = requestAnimationFrame(raf);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-page text-primary selection:bg-[#FF6B2C] selection:text-white font-body pb-20 sm:pb-0">
      {children}

      {/* Floating WhatsApp Action Button (Desktop & Tablet only) */}
      <WhatsAppFab />

      {/* Mobile Sticky Bottom CTA Bar (Section 6) */}
      <aside
        aria-label="Mobile quick actions"
        className="fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-md border-t border-subtle px-4 py-2.5 flex items-center gap-3 sm:hidden shadow-lg"
      >
        <a
          href={`https://wa.me/91${company.phones.whatsappPintu}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold uppercase shadow-xs active:scale-95 transition-[background-color,transform]"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-3 rounded-lg bg-[#FF6B2C] hover:bg-[#FF8452] text-white font-head text-xs font-bold tracking-tight shadow-xs active:scale-95 text-center transition-[background-color,transform]"
        >
          <span>Get Free Quote</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </Link>
      </aside>
    </div>
  );
}
