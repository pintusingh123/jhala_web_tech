import React from 'react';
import TerminalHeader from '../components/TerminalHeader';
import Services from '../components/Services';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import { useContact } from '../context/ContactContext';

export default function ServicesPage() {
  const { openContact } = useContact();

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="SERVICES_MATRIX" />
      <Services onSelectService={(service) => openContact(service)} />
      <Process onOpenContact={() => openContact()} />
      <FAQ onOpenContact={() => openContact()} />
    </div>
  );
}
