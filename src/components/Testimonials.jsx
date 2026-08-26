import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "JhalaWebTech re-architected our trading frontend to sub-8ms response times. Their technical depth and speed of delivery are unlike any agency we've collaborated with.",
      author: "Marcus Vance",
      role: "CTO, Apex Capital International",
      metric: "50k req/sec // Zero Lag",
      verified: "Fintech Platform",
    },
    {
      quote: "The autonomous agent workflows built by JWT automated 70% of our complex data extraction pipeline within 3 weeks. Complete game-changer for our engineering velocity.",
      author: "Elena Rostova",
      role: "VP of Engineering, NeuroTech AI",
      metric: "10x Automation Speedup",
      verified: "AI Enterprise",
    },
    {
      quote: "Our headless e-commerce store conversion jumped by +42% immediately following their edge deployment. Clean code, rock-solid stability, zero downtime.",
      author: "David Chen",
      role: "Founder & CEO, Vanguard Retail",
      metric: "+42% Conversion Boost",
      verified: "Headless Commerce",
    },
  ];

  return (
    <section className="w-full py-8">
      {/* Header */}
      <div className="mb-8">
        <span className="font-space text-xs uppercase text-[#9CA3AF] tracking-widest block mb-1">
          SYS.TRUST // VERIFIED_IMPACT
        </span>
        <div className="terminal-divider my-2"></div>
        <h2 className="font-space text-3xl sm:text-5xl font-extrabold uppercase text-[#e4e2e1] mt-4">
          CLIENT <span className="text-[#C8FF3D]">VALIDATION & REVIEWS</span>
        </h2>
        <p className="font-sans-body text-base text-[#9CA3AF] max-w-2xl mt-2 leading-relaxed">
          Read what venture-backed founders and enterprise CTOs say about engineering with JhalaWebTech.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-[#1A1A1A] p-6 card-high-emphasis flex flex-col justify-between group shadow-[4px_4px_0px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_0px_#C8FF3D] transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-[#262626] mb-4">
                <div className="flex gap-1 text-[#C8FF3D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] font-mono-code text-[#C8FF3D] bg-[#0A0A0A] px-2 py-0.5 border border-[#262626] flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3 h-3 text-[#C8FF3D]" />
                  {t.verified}
                </span>
              </div>

              <p className="font-sans-body text-sm text-[#e4e2e1] leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#262626]">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-space text-sm font-bold text-[#e4e2e1]">
                    {t.author}
                  </h3>
                  <p className="font-mono-code text-xs text-[#9CA3AF]">
                    {t.role}
                  </p>
                </div>
                <span className="font-mono-code text-[11px] text-[#C8FF3D] font-bold">
                  {t.metric}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
