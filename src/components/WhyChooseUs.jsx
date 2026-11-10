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
        <div className="lg:col-span-7 space-y-4">
          {differentiators.map((d) => (
            <div
              key={d.num}
              className="p-6 sm:p-7 rounded-2xl border border-subtle bg-surface hover:border-[#FF6B2C]/40 transition-all duration-300 flex items-start gap-5 sm:gap-6 group shadow-2xs"
            >
              <div className="flex flex-col items-center shrink-0 pt-0.5">
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#FF6B2C] group-hover:scale-105 transition-transform">
                  {d.num}
                </span>
                <span className="w-4 h-0.5 bg-subtle mt-2 group-hover:bg-[#FF6B2C] transition-colors" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-head text-base sm:text-lg font-bold text-primary group-hover:text-[#FF6B2C] transition-colors">
                    {d.title}
                  </h4>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#3DD9B0] bg-[#3DD9B0]/10 px-2.5 py-0.5 rounded-full border border-[#3DD9B0]/20">
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
