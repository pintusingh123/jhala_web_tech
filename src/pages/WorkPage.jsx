import React from 'react';
import TerminalHeader from '../components/TerminalHeader';
import StackedProjects from '../components/StackedProjects';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import { useContact } from '../context/ContactContext';

export default function WorkPage() {
  const { openContact } = useContact();

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="CASE_STUDIES_VAULT" />
      <StackedProjects />
      <Portfolio onOpenContact={() => openContact()} />
      <Testimonials />
    </div>
  );
}
