import { CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';
import { differentiators } from '../content/differentiators';

export default function WhyChooseUs() {
  return (
    <Section
      id="why-us"
      eyebrow="WHY WORK WITH US"
      title="Honest, high-quality development without agency"
      highlightWord="headaches."
      subtitle="Direct developer communication, fixed transparent pricing, and on-time delivery for growing businesses."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Sticky Column (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-subtle shadow-xs">
            <span className="font-mono text-xs uppercase font-bold text-[#FF6B2C] tracking-wider block mb-2">
              Our Development Promise
            </span>

            <h3 className="font-head text-2xl sm:text-3xl font-bold text-primary mb-4 leading-tight">
              "We don't overcharge or delay. We deliver fast, beautiful software that grows your sales."
            </h3>

            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-6">
              Most agency projects fail due to hidden charges, missed deadlines, and unhelpful support. At JhalaWebTech, you get fixed pricing, weekly live demos on your phone, and direct WhatsApp access to the developer working on your code.
            </p>

            <div className="space-y-3 pt-6 border-t border-subtle font-mono text-xs text-primary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3DD9B0] shrink-0" />
                <span>NDA signed before discovery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3DD9B0] shrink-0" />
                <span>Direct WhatsApp developer access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3DD9B0] shrink-0" />
                <span>Complete IP &amp; repository handover</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Stacked Numbers List (7 cols) */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          {differentiators.map((d) => (
            <div
              key={d.num}
              className="p-6 rounded-xl border border-subtle bg-surface hover:border-[#FF6B2C]/50 transition-colors flex items-start gap-5 sm:gap-6 group"
            >
              <span className="font-head text-3xl sm:text-4xl font-bold text-muted group-hover:text-[#FF6B2C] transition-colors shrink-0 leading-none pt-1">
                {d.num}
              </span>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h4 className="font-head text-base sm:text-lg font-bold text-primary group-hover:text-[#FF6B2C] transition-colors">
                    {d.title}
                  </h4>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#3DD9B0] bg-[#3DD9B0]/10 px-2 py-0.5 rounded">
                    {d.highlight}
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
