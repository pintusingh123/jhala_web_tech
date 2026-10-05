import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Portfolio({ onOpenContact }) {
  const projects = [
    {
      title: 'JAY SHREE SHAM TIFFIN APP',
      client: 'Ishue Suman (Jay Shree Shyam)',
      category: 'Food Delivery & Subscriptions',
      description: 'Mobile-first food delivery and daily subscription web application featuring dynamic daily rotating menus, pure-veg thali plans (₹60–₹200), and 1-click WhatsApp order routing.',
      tech: ['Next.js', 'React', 'Tailwind', 'WhatsApp API'],
      metrics: '2x Daily Orders // 500+ Meals/Day',
      highlight: 'Live Production Web App',
    },
    {
      title: 'GHAROTI ROTI SUBSCRIPTION',
      client: 'Gharoti Technologies',
      category: 'Subscription Commerce & Food Tech',
      description: 'Mobile-first homestyle fresh roti and meal subscription platform with recurring delivery scheduling, automated dispatch routes, pure desi ghee phulkas, and real-time tracking.',
      tech: ['Next.js', 'React', 'Tailwind', 'Firebase'],
      metrics: '10k+ Rotis Delivered // 99.9% On-Time',
      highlight: 'Live Production App',
    },
    {
      title: 'NEXUS E-COMMERCE PLATFORM',
      client: 'Vanguard Retail',
      category: 'Headless E-commerce',
      description: 'Custom headless storefront with automated internationalization, dynamic caching, and instant checkout.',
      tech: ['Next.js', 'Shopify Plus', 'Stripe', 'Redis'],
      metrics: '99/100 Lighthouse // +42% Conversions',
      highlight: 'Headless Checkout',
    },
  ];

  return (
    <section className="w-full py-8">
      <SectionHeader
        tag="SYS.PORTFOLIO.MAP"
        title="SELECTED"
        highlightedTitle="WORK & CASE STUDIES"
        description="Explore real-world technical systems and digital experiences engineered by JhalaLabs."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-[#131313] p-4 sm:p-6 flex flex-col justify-between group transition-[border-color,box-shadow] duration-200 sm:brutalist-border sm:hover:border-[#C8FF3D] sm:shadow-[4px_4px_0px_0px_#262626] sm:hover:shadow-[8px_8px_0px_0px_#C8FF3D]"
          >
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-3 border-b border-[#262626] mb-4">
                <span className="font-mono-code text-xs text-[#C8FF3D] uppercase font-bold">
                  {proj.category}
                </span>
                <span className="text-[10px] font-mono-code text-[#9CA3AF] bg-[#0A0A0A] px-2 py-0.5 border border-[#262626]">
                  {proj.highlight}
                </span>
              </div>

              <h3 className="font-space text-xl sm:text-2xl font-bold text-[#e4e2e1] group-hover:text-[#C8FF3D] transition-colors mb-1">
                {proj.title}
              </h3>
              <p className="font-mono-code text-xs sm:text-sm text-[#9CA3AF] mb-4">
                CLIENT: {proj.client}
              </p>

              <p className="font-sans-body text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-6">
                {proj.description}
              </p>

              {/* Performance Metric Box */}
              <div className="p-3 bg-[#0A0A0A] brutalist-border mb-6">
                <div className="text-[11px] font-mono-code text-[#C8FF3D] flex items-center gap-1.5">
                  <span>METRIC: {proj.metrics}</span>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono-code text-[#e4e2e1] bg-[#1A1A1A] border border-[#262626] px-2 py-0.5 uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full bg-[#1A1A1A] border border-[#262626] text-[#e4e2e1] font-space text-xs uppercase py-2.5 px-4 flex items-center justify-center gap-2 group-hover:bg-[#C8FF3D] group-hover:text-[#0A0A0A] group-hover:font-bold transition-colors duration-200 cursor-pointer"
            >
              <span>REQUEST CASE STUDY</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
