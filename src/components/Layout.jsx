import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

import Navbar from './Navbar';
import Footer from './Footer';

// No GSAP imports – using Lenis for smooth scrolling only

export default function Layout() {
  const location = useLocation();
  const mainRef = useRef(null);
  const lenisRef = useRef(null);

  // Initialize Lenis Smooth Scrolling (Desktop only for 60fps native mobile performance)
  useEffect(() => {
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouch) {
      // Enable native hardware-accelerated scrolling on mobile for max Lighthouse score & zero main-thread lag
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
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#131313] text-[#e4e2e1] selection:bg-[#C8FF3D] selection:text-[#0A0A0A]">
      {/* Global Sticky Header & Floating Mobile Dock */}
      <Navbar />

      {/* Main Routed Page Container with extra bottom padding for mobile floating dock */}
      <main
        ref={mainRef}
        id="main-content"
        tabIndex="-1"
        className="flex-grow flex flex-col w-full max-w-[1440px] mx-auto px-4 md:px-12 py-6 pb-28 lg:pb-6 gap-10 outline-none"
      >
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
