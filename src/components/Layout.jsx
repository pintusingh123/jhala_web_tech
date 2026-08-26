import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './Navbar';
import Footer from './Footer';
import ContactModal from './ContactModal';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

export default function Layout() {
  const location = useLocation();
  const mainRef = useRef(null);
  const lenisRef = useRef(null);

  // Initialize Lenis Smooth Scrolling and sync with GSAP
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis to GSAP Ticker for 60-120fps synchronization
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

  // GSAP Animations and scroll reset on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    const ctx = gsap.context(() => {
      // Fade in main view
      gsap.from('.gsap-fade-in', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
      });

      // Scroll triggered elements
      gsap.utils.toArray('.gsap-scroll-trigger').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 35,
          duration: 0.85,
          ease: 'power3.out',
        });
      });
    }, mainRef);

    return () => {
      ctx.revert();
    };
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

      {/* Global Interactive Contact Modal */}
      <ContactModal />
    </div>
  );
}
