import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function FAQ({ onOpenContact }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How quickly can JhalaWebTech initiate our software or mobile app project?',
      a: 'We kick off with a thorough Discovery & Architecture Blueprint session within 48 to 72 hours of initial agreement. Active design and development sprints begin immediately after the architecture and milestone scope are signed off.',
    },
    {
      q: 'What mobile app and software technologies do you specialize in?',
      a: 'We specialize in React Native and Flutter for mobile apps, native Swift and Kotlin, React 19 and Next.js for high-speed web apps, and Python (FastAPI/Django), Node.js, PostgreSQL, and AWS for backend microservices and databases.',
    },
    {
      q: 'Can you integrate AI or LLMs into our existing legacy software?',
      a: 'Yes, absolutely. We engineer isolated AI orchestration microservices that connect directly to your existing database, APIs, and authorization layers without disrupting your current core operations.',
    },
    {
      q: 'Do you handle the entire Apple App Store and Google Play Store submission process?',
      a: 'Yes. We manage end-to-end app store configuration, bundle signing, compliance guidelines, privacy policies, screenshot assets, and review resolution until your app is live and verified on both stores.',
    },
    {
      q: 'What post-launch SLA and maintenance guarantees do you provide?',
      a: 'We provide comprehensive post-launch SLA coverage including 24/7 server uptime telemetry, database automated backups, security patching, and direct WhatsApp / Slack access to our lead engineers.',
    },
    {
      q: 'How are development milestones, project estimates, and payments structured?',
      a: 'We operate on transparent milestone-based payments (e.g. 2 to 6 week agile milestones). You test and verify live demos on staging environments before approving milestone payouts.',
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12" id="faq">
      <SectionHeader
        tag="FREQUENTLY ASKED QUESTIONS"
        title="Everything You Need to Know About"
        highlightedTitle="Working With Us"
        description="Clear answers regarding our engineering methodology, app delivery timelines, code ownership, and support SLAs."
      />

      <div className="space-y-3.5 max-w-4xl mx-auto">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={faq.q}
              className={`rounded border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-[#FFF8EE] border-[#FDB345] shadow-xs'
                  : 'bg-white border-[#E5E5E5] hover:border-[#DADBDD]'
              }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
              >
                <span className="font-slab text-base sm:text-lg font-bold text-[#333333] flex items-center gap-3">
                  <span className="font-narrow text-xs font-bold text-[#FDB345] bg-white px-2 py-0.5 rounded border border-[#FDB345]/40">
                    0{idx + 1}
                  </span>
                  <span>{faq.q}</span>
                </span>
                <div className={`p-1.5 rounded transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#FDB345]' : 'text-[#575C62]'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#FDB345]/20">
                  <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions? */}
      <div className="mt-8 text-center">
        <p className="font-sans-body text-xs sm:text-sm text-[#575C62] mb-3">
          Have a unique question or custom technical requirement?
        </p>
        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-2 font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FDB345] hover:text-[#F69B2E] cursor-pointer"
        >
          <span>Ask Our Lead Engineers Directly</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
