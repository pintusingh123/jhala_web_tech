import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials';
import TechStack from '../components/TechStack';
import FAQ from '../components/FAQ';
import Blog from '../components/Blog';
import CtaBand from '../components/CtaBand';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* C. Hero */}
      <Hero onExploreWork={() => navigate('/work')} />

      {/* D. Logo / Tech Marquee */}
      <TechMarquee />

      {/* E. Services Bento Grid */}
      <Services onSelectService={() => navigate('/contact')} />

      {/* F. Selected Work (Real Case Studies) */}
      <Portfolio onOpenContact={() => navigate('/contact')} />

      {/* G. Process (5-Step Timeline) */}
      <Process onOpenContact={() => navigate('/contact')} />

      {/* H. Why Us / Differentiators */}
      <WhyChooseUs onOpenContact={() => navigate('/contact')} />

      {/* I. Stats Strip */}
      <Stats />

      {/* J. Pricing / Packages & Interactive App Estimator */}
      <PricingSection onOpenContact={() => navigate('/contact')} />

      {/* K. Testimonials */}
      <Testimonials />

      {/* L. Tech Stack Breakdown */}
      <TechStack />

      {/* M. FAQ Accordion */}
      <FAQ onOpenContact={() => navigate('/contact')} />

      {/* N. Blog / Insights */}
      <Blog />

      {/* O. Final CTA Band */}
      <CtaBand />
    </>
  );
}
