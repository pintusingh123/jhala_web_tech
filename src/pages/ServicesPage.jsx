import React from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalHeader from '../components/TerminalHeader';
import Services from '../components/Services';
import Process from '../components/Process';
import FAQ from '../components/FAQ';

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="SERVICES_MATRIX" />
      <Services onSelectService={() => navigate('/contact')} />
      <Process onOpenContact={() => navigate('/contact')} />
      <FAQ onOpenContact={() => navigate('/contact')} />
    </div>
  );
}
