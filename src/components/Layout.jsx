import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const mainRef = useRef(null);
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
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#333333] selection:bg-[#FDB345] selection:text-white font-sans-body">
      {/* Global Sticky Header */}
      <Navbar />

      {/* Main Routed Page Container */}
      <main
        ref={mainRef}
        id="main-content"
        tabIndex="-1"
        className="flex-grow flex flex-col w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6 pb-24 lg:pb-12 gap-12 sm:gap-16 outline-none"
      >
        <Outlet />
      </main>

      {/* Global Corporate Footer */}
      <Footer />
    </div>
  );
}
