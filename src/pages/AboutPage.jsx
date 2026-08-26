import React from 'react';
import TerminalHeader from '../components/TerminalHeader';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import { useContact } from '../context/ContactContext';

export default function AboutPage() {
  const { openContact } = useContact();

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="ABOUT_JWT_COLLECTIVE" />
      <About onOpenContact={() => openContact()} />
      <Testimonials />
    </div>
  );
}
