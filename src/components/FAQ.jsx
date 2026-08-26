import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ({ onOpenContact }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How fast can JhalaWebTech initiate our engineering sprint?',
      a: 'We kick off with an Architectural Blueprint session within 48-72 hours of contract execution. Active development sprints begin immediately following architecture spec sign-off.',
    },
    {
      q: 'What is your core tech stack and architectural philosophy?',
      a: 'We specialize in React 19, TypeScript, Next.js, Python (FastAPI/LangGraph), Go microservices, PostgreSQL, Redis, and Cloudflare Edge networks. We adhere strictly to zero bloat, type safety, and sub-10ms UI execution.',
    },
    {
      q: 'Can you integrate autonomous AI agents into our existing codebase?',
      a: 'Yes. We engineer isolated AI orchestration microservices that connect to your current database, APIs, and authorization layers without requiring you to rewrite your existing backend.',
    },
    {
      q: 'What SLA and post-launch maintenance guarantees do you provide?',
      a: 'We offer guaranteed 99.999% uptime SLAs with 24/7 telemetry monitoring, automated security patch cycles, and dedicated Slack/Discord communication channels with our lead architects.',
    },
    {
      q: 'How are projects scoped and billed?',
      a: 'We work through milestone-based fixed sprints (2 to 6 weeks) or dedicated engineering retainers depending on project scope and velocity requirements.',
    },
  ];

  return (
    <section className="w-full py-8">
      {/* Header */}
      <div className="mb-8">
        <span className="font-space text-xs uppercase text-[#9CA3AF] tracking-widest block mb-1">
          SYS.KNOWLEDGE // FAQS
        </span>
        <div className="terminal-divider my-2"></div>
        <h2 className="font-space text-3xl sm:text-5xl font-extrabold uppercase text-[#e4e2e1] mt-4">
          FREQUENTLY <span className="text-[#C8FF3D]">ASKED QUESTIONS</span>
        </h2>
        <p className="font-sans-body text-base text-[#9CA3AF] max-w-2xl mt-2 leading-relaxed">
          Everything you need to know about our engineering process, AI integrations, timelines, and SLAs.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 max-w-4xl">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`bg-[#131313] brutalist-border transition-all duration-200 ${
                isOpen ? 'brutalist-border-active bg-[#1A1A1A]' : 'hover:border-[#9CA3AF]'
              }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
              >
                <span className="font-space text-base md:text-lg font-bold text-[#e4e2e1] flex items-center gap-3">
                  <span className="font-mono-code text-xs text-[#C8FF3D]">0{idx + 1}.</span>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C8FF3D] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-sm font-sans-body text-[#9CA3AF] leading-relaxed border-t border-[#262626]">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
