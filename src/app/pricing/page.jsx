'use client';

import { useRouter } from 'next/navigation';
import PricingSection from '../../components/PricingSection';
import FAQ from '../../components/FAQ';
import CtaBand from '../../components/CtaBand';

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <PricingSection onOpenContact={() => router.push('/contact')} />
      <FAQ onOpenContact={() => router.push('/contact')} />
      <CtaBand />
    </div>
  );
}
