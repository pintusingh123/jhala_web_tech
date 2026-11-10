import { Star, CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';
import { testimonials } from '../content/testimonials';

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="CLIENT REVIEWS"
      title="What real business owners say about"
      highlightWord="working with us."
      subtitle="Genuine feedback from shop owners, founders, and managers whose websites and mobile apps we designed, built, and launched."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface border border-subtle hover:border-[#FF6B2C]/40 transition-all duration-300 shadow-2xs group"
          >
            <div>
              {/* Top Meta: Stars & Metric Pill */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-subtle">
                <div className="flex gap-1 text-[#FF6B2C]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <span className="font-mono text-[10px] uppercase font-bold text-[#3DD9B0] bg-[#3DD9B0]/10 px-2 py-0.5 rounded-full border border-[#3DD9B0]/20">
                  {t.metric}
                </span>
              </div>

              {/* Quote Body */}
              <p className="font-body text-xs sm:text-sm text-primary leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-subtle flex items-center justify-between">
              <div>
                <h4 className="font-head text-sm sm:text-base font-bold text-primary group-hover:text-[#FF6B2C] transition-colors">
                  {t.author}
                </h4>
                <p className="font-mono text-[11px] text-muted">
                  {t.role}, {t.company}
                </p>
              </div>

              <div className="flex items-center gap-1 font-mono text-[10px] text-[#3DD9B0] bg-[#3DD9B0]/10 px-2 py-0.5 rounded-full border border-[#3DD9B0]/20">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
