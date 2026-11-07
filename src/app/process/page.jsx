'use client';

import { useRouter } from 'next/navigation';
import Process from '../../components/Process';
import WhyChooseUs from '../../components/WhyChooseUs';
import FAQ from '../../components/FAQ';
import CtaBand from '../../components/CtaBand';

export default function ProcessPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <Process onOpenContact={() => router.push('/contact')} />
      <WhyChooseUs onOpenContact={() => router.push('/contact')} />
      <FAQ onOpenContact={() => router.push('/contact')} />
      <CtaBand />
    </div>
  );
}
