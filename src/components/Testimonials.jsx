import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "JhalaWebTech engineered our daily tiffin subscription and order dispatch portal. Customers can now browse our daily menu and place orders directly via WhatsApp. Our daily delivery volume has doubled, and tracking customer payments has become completely seamless!",
      author: "Ishue Suman",
      role: "Founder, Jay Shree Shyam Tiffin Center",
      metric: "2x Daily Orders // Zero Hassle",
      verified: "Tiffin & Food Service",
    },
    {
      quote: "They developed our marble and granite business website from scratch. It loads instantly on mobile devices, and our digital product catalog is so clear that outstation clients frequently reach out via WhatsApp immediately after viewing it. Highly recommended!",
      author: "Rahul Meena",
      role: "Managing Director, Meena Marbles & Granites",
      metric: "+140% Client Inquiries",
      verified: "Marble & Minerals B2B",
    },
    {
      quote: "JhalaWebTech built our custom fashion e-commerce storefront with instant 1-click Razorpay UPI checkout and automated WhatsApp order notifications. Pintu and Abhay are always accessible via direct phone call and WhatsApp whenever we need support.",
      author: "Pooja Sharma",
      role: "Founder, Radhika Designer Boutique",
      metric: "1-Click UPI // 99.9% Uptime",
      verified: "D2C E-Commerce Store",
    },
  ];

  return (
    <section className="w-full py-8">
      {/* Header */}
      <SectionHeader
        tag="SYS.TRUST // VERIFIED_IMPACT"
        title="CLIENT"
        highlightedTitle="VALIDATION & REVIEWS"
        description="Read genuine feedback from Indian business owners and founders who trust JhalaWebTech to engineer their digital growth."
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="bg-[#1A1A1A] p-6 card-high-emphasis flex flex-col justify-between group shadow-[4px_4px_0px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_0px_#C8FF3D] transition-[box-shadow,border-color] duration-300"
          >
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-[#262626] mb-4">
                <div className="flex gap-1 text-[#C8FF3D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`star-${i}`} className="w-3.5 h-3.5 fill-current" />
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
