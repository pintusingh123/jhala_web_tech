import React from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalHeader from '../components/TerminalHeader';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';

export default function WorkPage() {
  const navigate = useNavigate();

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="CASE_STUDIES_VAULT" />
      <Portfolio onOpenContact={() => navigate('/contact')} />
      <Testimonials />
    </div>
  );
}
