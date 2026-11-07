'use client';

import { useRouter } from 'next/navigation';
import Services from '../../components/Services';
import TechStack from '../../components/TechStack';
import WhyChooseUs from '../../components/WhyChooseUs';
import Process from '../../components/Process';
import FAQ from '../../components/FAQ';
import CtaBand from '../../components/CtaBand';

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <Services onSelectService={() => router.push('/contact')} />
      <TechStack />
      <WhyChooseUs onOpenContact={() => router.push('/contact')} />
      <Process onOpenContact={() => router.push('/contact')} />
      <FAQ onOpenContact={() => router.push('/contact')} />
      <CtaBand />
    </div>
  );
}
