import React from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalHeader from '../components/TerminalHeader';
import Process from '../components/Process';
import FAQ from '../components/FAQ';

export default function ProcessPage() {
  const navigate = useNavigate();

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="ENGINEERING_METHODOLOGY" />
      <Process onOpenContact={() => navigate('/contact')} />
      <FAQ onOpenContact={() => navigate('/contact')} />
    </div>
  );
}
