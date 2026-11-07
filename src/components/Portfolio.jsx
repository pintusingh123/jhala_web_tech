import { useState, useRef, useEffect } from 'react';
import { ExternalLink, ArrowRight, X } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { projects } from '../content/projects';

export default function Portfolio({ onOpenContact }) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (selectedCaseStudy) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [selectedCaseStudy]);

  return (
    <Section
      id="work"
      eyebrow="VERIFIED CLIENT RESULTS"
      title="Selected projects engineered for"
      highlightWord="real business outcomes."
      subtitle="Explore production mobile applications, high-throughput e-commerce stores, and custom platforms shipped by JhalaWebTech."
    >
      {/* Asymmetric Alternating Project Grid (Section 4.F) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {projects.map((proj, idx) => {
          // Asymmetric layout: 1st and 4th span 7 cols, 2nd and 3rd span 5 cols
          const spanClass = idx % 3 === 0 ? 'md:col-span-12 lg:col-span-7' : 'md:col-span-12 lg:col-span-5';

          return (
            <div key={proj.id} className={`${spanClass} flex flex-col`}>
              <Card
                variant="interactive"
                className="h-full flex flex-col justify-between group p-0"
              >
                <div>
                  {/* Real Project Image Preview Container */}
                  <div className="relative h-56 sm:h-64 w-full bg-surface-2 overflow-hidden border-b border-subtle">
                    <img
                      src={proj.image}
                      alt={`${proj.title} real production platform preview`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3">
                      <Badge variant="accent" size="sm">
                        {proj.category}
                      </Badge>
                    </div>

                    {/* Result Callout Strip */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                      <span className="font-head text-white font-bold text-sm sm:text-base leading-snug">
                        {proj.result}
                      </span>
                    </div>
                  </div>

                  {/* Project Info Body */}
                  <div className="p-6">
                    <span className="font-mono text-xs text-muted block mb-1">
                      Client: {proj.client}
                    </span>

                    <h3 className="font-head text-xl sm:text-2xl font-bold text-primary mb-2 group-hover:text-[#FF6B2C] transition-colors">
                      {proj.title}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-4">
                      {proj.outcome}
                    </p>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-surface-2 rounded-lg border border-subtle mb-4">
                      {proj.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <span className="block font-head text-sm sm:text-base font-bold text-[#FF6B2C]">
                            {m.value}
                          </span>
                          <span className="font-mono text-[10px] text-muted block truncate">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-surface border border-subtle text-primary font-mono text-[10px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link & Case Study Trigger */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-subtle">
                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudy(proj)}
                    className="inline-flex items-center gap-1.5 font-head text-xs sm:text-sm font-bold text-[#FF6B2C] hover:text-[#FF8452] transition-colors cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-primary transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/* ================= CASE STUDY MODAL (Section 4.F Template) ================= */}
      <dialog
        ref={dialogRef}
        aria-labelledby="case-study-title"
        onClose={() => setSelectedCaseStudy(null)}
        className="backdrop:bg-black/60 p-0 rounded-2xl border border-subtle shadow-2xl max-w-2xl w-[92vw] max-h-[88vh] overflow-hidden bg-surface text-primary"
      >
        {selectedCaseStudy && (
          <div className="flex flex-col h-full max-h-[88vh]">
            {/* Modal Header */}
            <div className="flex justify-between items-start p-6 border-b border-subtle bg-surface-2">
              <div>
                <Badge variant="accent" size="sm">
                  {selectedCaseStudy.category}
                </Badge>
                <h3 id="case-study-title" className="font-head text-xl sm:text-2xl font-bold text-primary mt-2">
                  {selectedCaseStudy.title}
                </h3>
                <span className="font-mono text-xs text-muted">
                  Client: {selectedCaseStudy.client}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCaseStudy(null)}
                aria-label="Close Case Study"
                className="p-1.5 rounded-lg border border-subtle text-muted hover:text-primary hover:bg-surface transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-body text-sm leading-relaxed">
              {/* Problem */}
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#FF6B2C] tracking-wider block mb-1">
                  1. The Business Problem
                </span>
                <p className="text-muted">
                  {selectedCaseStudy.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#3DD9B0] tracking-wider block mb-1">
                  2. Our Architectural Solution
                </span>
                <p className="text-muted">
                  {selectedCaseStudy.solution}
                </p>
              </div>

              {/* Verified Results with Numbers */}
              <div className="p-4 bg-surface-2 rounded-xl border border-subtle">
                <span className="font-mono text-xs uppercase font-bold text-primary tracking-wider block mb-3">
                  3. Measurable Outcomes Shipped
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {selectedCaseStudy.metrics.map((m) => (
                    <div key={m.label} className="text-center p-2 rounded bg-surface border border-subtle">
                      <span className="font-head text-lg sm:text-xl font-bold text-[#FF6B2C] block">
                        {m.value}
                      </span>
                      <span className="font-mono text-[10px] text-muted block truncate">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              {selectedCaseStudy.quote && (
                <div className="p-4 rounded-xl border-l-4 border-[#FF6B2C] bg-surface-2 italic text-primary">
                  <p className="mb-2">"{selectedCaseStudy.quote.text}"</p>
                  <span className="font-mono text-xs font-semibold text-muted not-italic block">
                    — {selectedCaseStudy.quote.author}, {selectedCaseStudy.quote.role}
                  </span>
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="p-5 border-t border-subtle bg-surface-2 flex items-center justify-between">
              {selectedCaseStudy.link && (
                <a
                  href={selectedCaseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#FF6B2C] hover:underline flex items-center gap-1"
                >
                  <span>Visit Production App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <Button
                variant="primary"
                size="sm"
                to="/contact"
                onClick={() => {
                  setSelectedCaseStudy(null);
                  if (onOpenContact) onOpenContact();
                }}
              >
                Inquire Similar Project
              </Button>
            </div>
          </div>
        )}
      </dialog>
    </Section>
  );
}
