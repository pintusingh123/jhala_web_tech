import { Star, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "JhalaWebTech engineered our daily tiffin subscription and order dispatch portal. Customers can now browse our daily menu and place orders directly via WhatsApp. Our daily delivery volume has doubled, and tracking customer payments has become completely seamless!",
      author: "Ishue Suman",
      role: "Founder, Jay Shree Shyam Tiffin Center",
      metric: "2x Daily Orders via WhatsApp",
      verified: "FoodTech & Subscription App",
      rating: 5,
    },
    {
      quote: "They developed our marble and granite business website from scratch. It loads instantly on mobile devices, and our digital product catalog is so clear that outstation clients frequently reach out via WhatsApp immediately after viewing it. Highly recommended team!",
      author: "Rahul Meena",
      role: "Managing Director, Meena Marbles & Granites",
      metric: "+140% Client Inquiries",
      verified: "B2B Industrial & Export Portal",
      rating: 5,
    },
    {
      quote: "JhalaWebTech built our custom fashion e-commerce storefront with instant 1-click Razorpay UPI checkout and automated WhatsApp order notifications. Pintu and Abhay are always accessible via direct phone call and WhatsApp whenever we need support.",
      author: "Pooja Sharma",
      role: "Founder, Radhika Designer Boutique",
      metric: "1-Click UPI • 99.9% Uptime",
      verified: "D2C E-Commerce Store",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12" id="testimonials">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E5E5E5] gap-4">
        <SectionHeader
          tag="CLIENT REVIEWS &amp; TESTIMONIALS"
          title="What Clients Say About"
          highlightedTitle="Our Solutions"
          description="Read genuine feedback from Indian business owners and founders who trust JhalaWebTech to engineer their digital growth."
        />

        {/* Rating summary badge */}
        <div className="flex items-center gap-3 p-3 bg-[#F5F5F7] rounded border border-[#E5E5E5] self-start md:self-end">
          <div className="flex text-[#FDB345]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-narrow text-xs font-bold uppercase tracking-wider text-[#333333]">
            4.9 / 5.0 Average Client Rating
          </span>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="bg-white rounded border border-[#E5E5E5] p-6 sm:p-7 shadow-xs hover:border-[#FDB345] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Star Rating & Verified Pill */}
              <div className="flex justify-between items-center pb-4 border-b border-[#E5E5E5] mb-4">
                <div className="flex gap-0.5 text-[#FDB345]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-narrow text-[11px] font-bold uppercase tracking-wider text-[#F69B2E] bg-[#FFF8EE] px-2.5 py-0.5 rounded border border-[#FDB345]/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FDB345]" />
                  <span>{t.verified}</span>
                </span>
              </div>

              {/* Quote text in Zilla Slab style */}
              <p className="font-slab text-sm sm:text-base text-[#333333] leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
            </div>

            {/* Author info & Metric */}
            <div className="pt-4 border-t border-[#E5E5E5] flex flex-col gap-2">
              <div>
                <h4 className="font-slab text-base sm:text-lg font-bold text-[#333333] group-hover:text-[#FDB345] transition-colors">
                  {t.author}
                </h4>
                <p className="font-sans-body text-xs text-[#575C62]">
                  {t.role}
                </p>
              </div>

              <div className="inline-block mt-1 self-start px-2.5 py-0.5 rounded bg-[#FFF8EE] text-[#F69B2E] font-narrow text-[11px] font-bold uppercase tracking-wider border border-[#FDB345]/30">
                Impact: {t.metric}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
