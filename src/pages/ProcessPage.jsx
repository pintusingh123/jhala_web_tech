import React from 'react';
import TerminalHeader from '../components/TerminalHeader';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import { useContact } from '../context/ContactContext';

export default function ProcessPage() {
  const { openContact } = useContact();

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="ENGINEERING_METHODOLOGY" />
      <Process onOpenContact={() => openContact()} />
      <FAQ onOpenContact={() => openContact()} />
    </div>
  );
}
