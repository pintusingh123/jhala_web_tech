import React from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalHeader from '../components/TerminalHeader';
import About from '../components/About';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="ABOUT_JWT_COLLECTIVE" />
      <About onOpenContact={() => navigate('/contact')} />
      <Team onOpenContact={() => navigate('/contact')} />
      <Testimonials />
    </div>
  );
}
