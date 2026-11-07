'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import WhatsAppFab from './ui/WhatsAppFab';

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
    <div className="min-h-screen flex flex-col bg-page text-primary selection:bg-[#FF6B2C] selection:text-white font-body pb-20 lg:pb-0">
      {children}

      {/* Floating Action Buttons: Direct Phone Call (8441992003) & WhatsApp */}
      <WhatsAppFab />
    </div>
  );
}
