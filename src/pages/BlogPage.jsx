import React from 'react';
import TerminalHeader from '../components/TerminalHeader';
import Blog from '../components/Blog';

export default function BlogPage() {
  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="RESEARCH_AND_INSIGHTS" />
      <Blog />
    </div>
  );
}
