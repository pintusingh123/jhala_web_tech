'use client';

import { useRouter } from 'next/navigation';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CtaBand from '../components/CtaBand';

export default function WorkPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <Portfolio onOpenContact={() => router.push('/contact')} />
      <Testimonials />
      <CtaBand />
    </div>
  );
}
