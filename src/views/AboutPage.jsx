'use client';

import { useRouter } from 'next/navigation';
import TerminalHeader from '../components/TerminalHeader';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-10">
      <TerminalHeader label="ABOUT_JHALAWEBTECH" />
      <About onOpenContact={() => router.push('/contact')} />
      <WhyChooseUs onOpenContact={() => router.push('/contact')} />
      <Team onOpenContact={() => router.push('/contact')} />
      <Testimonials />
    </div>
  );
}
