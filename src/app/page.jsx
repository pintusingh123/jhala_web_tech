'use client';

import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  return (
    <>
      {/* C. Hero */}
      <Hero onExploreWork={() => router.push('/work')} />

      {/* D. Logo / Tech Marquee */}
      <TechMarquee />

      {/* E. Services Bento Grid */}
      <Services onSelectService={() => router.push('/contact')} />

      {/* F. Selected Work (Real Case Studies) */}
      <Portfolio onOpenContact={() => router.push('/contact')} />

      {/* G. Process (5-Step Timeline) */}
      <Process onOpenContact={() => router.push('/contact')} />

      {/* H. Why Us / Differentiators */}
      <WhyChooseUs onOpenContact={() => router.push('/contact')} />

      {/* I. Stats Strip */}
      <Stats />

      {/* J. Pricing / Packages & Interactive App Estimator */}
      <PricingSection onOpenContact={() => router.push('/contact')} />

      {/* K. Testimonials */}
      <Testimonials />

      {/* L. Tech Stack Breakdown */}
      <TechStack />

      {/* M. FAQ Accordion */}
      <FAQ onOpenContact={() => router.push('/contact')} />

      {/* N. Blog / Insights */}
      <Blog />

      {/* O. Final CTA Band */}
      <CtaBand />
    </>
  );
}
