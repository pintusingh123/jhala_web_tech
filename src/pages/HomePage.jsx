import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import StackedProjects from '../components/StackedProjects';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
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

      {/* Interactive Technology Architecture Showcase (Tvisha Inspiration) */}
      <div className="gsap-scroll-trigger">
        <TechStack />
      </div>

      {/* Featured Production Releases Showcase */}
      <StackedProjects />

      {/* 6-Step Agile Engineering Methodology */}
      <div className="gsap-scroll-trigger">
        <Process onOpenContact={() => navigate('/contact')} />
      </div>

      {/* Why Choose Us - Engineering Differentiators */}
      <div className="gsap-scroll-trigger">
        <WhyChooseUs onOpenContact={() => navigate('/contact')} />
      </div>

      {/* Selected Work & Case Studies */}
      <div className="gsap-scroll-trigger">
        <Portfolio onOpenContact={() => navigate('/contact')} />
      </div>

      {/* Client Reviews & Validation */}
      <div className="gsap-scroll-trigger">
        <Testimonials />
      </div>

      {/* Technical Insights & Research */}
      <div className="gsap-scroll-trigger">
        <Blog />
      </div>

      {/* Frequently Asked Questions */}
      <div className="gsap-scroll-trigger">
        <FAQ onOpenContact={() => navigate('/contact')} />
      </div>

      {/* About JWT Collective & Principles */}
      <div className="gsap-scroll-trigger">
        <About onOpenContact={() => navigate('/contact')} />
      </div>

      {/* Senior Leadership & Technical Team */}
      <div className="gsap-scroll-trigger">
        <Team onOpenContact={() => navigate('/contact')} />
      </div>
    </>
  );
}
