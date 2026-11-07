import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { processSteps } from '../content/process';

export default function Process({ onOpenContact }) {
  return (
    <Section
      id="process"
      eyebrow="HOW WE WORK WITH YOU"
      title="A structured, zero-fluff development"
      highlightWord="process."
      subtitle="From the first call to production launch, you have full transparency: weekly live demos, fixed milestones, and continuous communication."
    >
      {/* 5-Step Progress Timeline (Section 4.G) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 relative">
        {processSteps.map((step, idx) => (
          <Card
            key={step.step}
            className="flex flex-col justify-between p-5 sm:p-6 bg-surface hover:border-[#FF6B2C]/50 transition-colors relative"
          >
            <div>
              {/* Step Number & Duration */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-subtle">
                <span className="font-head text-2xl font-bold text-[#FF6B2C]">
                  {step.step}
                </span>
                <Badge variant="neutral" size="sm">
                  {step.duration}
                </Badge>
              </div>

              {/* Step Title */}
              <h3 className="font-head text-base sm:text-lg font-bold text-primary mb-2">
                {step.title}
              </h3>

              {/* Deliverable Callout */}
              <div className="p-2 rounded bg-surface-2 border border-subtle font-mono text-[11px] text-[#3DD9B0] mb-3">
                <span className="block font-bold text-primary">Deliverable:</span>
                <span className="truncate block">{step.deliverable}</span>
              </div>

              {/* Description */}
              <p className="font-body text-xs text-muted leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-subtle flex items-center gap-1 font-mono text-[10px] text-muted uppercase">
              <CheckCircle2 className="w-3 h-3 text-[#FF6B2C]" />
              <span>Step {idx + 1} of 5</span>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Box under Process */}
      <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-surface-2 border border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-head text-lg sm:text-xl font-bold text-primary">
            Ready to schedule Step 1?
          </h4>
          <p className="font-body text-xs sm:text-sm text-muted mt-0.5">
            Hop on a free 30-min discovery call. No sales pitch, just honest technical feedback.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          to="/contact"
          onClick={onOpenContact}
          icon={ArrowRight}
          className="shrink-0 w-full sm:w-auto"
        >
          Book Discovery Call
        </Button>
      </div>
    </Section>
  );
}
