import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './Navbar';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

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

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change & trigger smooth GSAP reveals
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Allow DOM to settle, then initialize animations
    const timer = setTimeout(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const fadeEls = document.querySelectorAll('.gsap-fade-in');
      fadeEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', clearProps: 'all' }
        );
      });

      const scrollEls = document.querySelectorAll('.gsap-scroll-trigger');
      scrollEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, 50);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
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
