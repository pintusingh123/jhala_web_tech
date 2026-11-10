import { ArrowRight } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';
import { processSteps } from '../content/process';

export default function Process({ onOpenContact }) {
  return (
    <Section
      id="process"
      eyebrow="TRANSPARENT WORKFLOW"
      title="A structured, predictable journey from"
      highlightWord="idea to launch."
      subtitle="From your first phone consultation to final deployment, every milestone is clear: weekly live progress on your phone, fixed pricing, and direct developer communication."
    >
      {/* Editorial Timeline Container */}
      <div className="relative">
        {/* Subtle Horizontal Connecting Rail for Desktop */}
        <div className="hidden lg:block absolute top-7 left-10 right-10 h-0.5 bg-gradient-to-r from-[#FF6B2C]/20 via-[#FF6B2C]/40 to-[#3DD9B0]/40 -z-0" />

        {/* 5-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col justify-between p-6 rounded-2xl bg-surface border border-subtle hover:border-[#FF6B2C]/40 transition-all duration-300 group shadow-2xs"
            >
              <div>
                {/* Step Top Bar: Index Circle & Duration */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-subtle">
                  <div className="w-10 h-10 rounded-full bg-surface-2 border border-subtle group-hover:border-[#FF6B2C] group-hover:bg-[#FF6B2C] group-hover:text-white flex items-center justify-center font-mono text-sm font-bold text-[#FF6B2C] transition-all">
                    {step.step}
                  </div>

                  <span className="font-mono text-[11px] font-semibold text-muted bg-surface-2 px-2.5 py-1 rounded-md border border-subtle">
                    {step.duration}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-head text-base sm:text-lg font-bold text-primary group-hover:text-[#FF6B2C] transition-colors mb-2.5 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs text-muted leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              {/* Deliverable Box */}
              <div className="pt-3.5 border-t border-subtle">
                <span className="font-mono text-[10px] uppercase font-bold text-[#FF6B2C] tracking-wider block mb-1">
                  Deliverable:
                </span>
                <span className="font-mono text-[11px] text-primary font-medium block leading-snug">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box under Process */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-surface border border-subtle flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div>
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#FF6B2C] block mb-1">
            GET STARTED TODAY
          </span>
          <h4 className="font-head text-xl sm:text-2xl font-bold text-primary">
            Ready to discuss your project?
          </h4>
          <p className="font-body text-xs sm:text-sm text-muted mt-1 max-w-xl">
            Free 15-minute consultation on WhatsApp or Phone. Direct conversation with senior developers — no sales pressure, honest guidance.
          </p>
        </div>

        <Button
          variant="primary"
          size="lg"
          to="/contact"
          onClick={onOpenContact}
          icon={ArrowRight}
          className="shrink-0 w-full sm:w-auto"
        >
          Start Step 1 (Free Call)
        </Button>
      </div>
    </Section>
  );
}
