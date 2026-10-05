import React from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalHeader from '../components/TerminalHeader';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import StackedProjects from '../components/StackedProjects';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import About from '../components/About';
import Team from '../components/Team';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="gsap-fade-in">
        <Hero onExploreServices={() => navigate('/services')} />
      </div>

      <div className="gsap-scroll-trigger">
        <Stats />
      </div>

      <div className="gsap-scroll-trigger">
        <Services onSelectService={() => navigate('/contact')} />
      </div>

      {/* GSAP ScrollTrigger Pinned Stacked Projects Showcase */}
      <StackedProjects />

      <div className="gsap-scroll-trigger">
        <Process onOpenContact={() => navigate('/contact')} />
      </div>

      <div className="gsap-scroll-trigger">
        <Portfolio onOpenContact={() => navigate('/contact')} />
      </div>

      <div className="gsap-scroll-trigger">
        <Testimonials />
      </div>

      <div className="gsap-scroll-trigger">
        <Blog />
      </div>

      <div className="gsap-scroll-trigger">
        <FAQ onOpenContact={() => navigate('/contact')} />
      </div>

      <div className="gsap-scroll-trigger">
        <About onOpenContact={() => navigate('/contact')} />
      </div>

      <div className="gsap-scroll-trigger">
        <Team onOpenContact={() => navigate('/contact')} />
      </div>
    </>
  );
}
