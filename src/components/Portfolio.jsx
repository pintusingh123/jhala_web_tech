import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import TiltCard from './3d/TiltCard';

export default function Portfolio({ onOpenContact }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'commerce', label: 'E-Commerce & Garments' },
    { id: 'auto', label: 'Bike Parts & Auto' },
    { id: 'foodtech', label: 'FoodTech & Tiffin' },
  ];

  const projects = [
    {
      id: 'jayshreesham',
      category: 'foodtech',
      title: 'Jay Shree Sham Tiffin App',
      client: 'Ishue Suman (Jay Shree Shyam)',
      categoryLabel: 'Food Delivery & Subscriptions',
      description: 'Mobile-first food delivery and daily subscription web application featuring dynamic daily rotating menus, pure-veg thali plans (₹60–₹200), and 1-click WhatsApp order routing.',
      tech: ['Next.js', 'React', 'Tailwind', 'WhatsApp API'],
      metrics: '2x Daily Orders • 500+ Meals/Day',
      highlight: 'Live Production Web App',
      link: 'https://jayshreeshamtiffinservice.vercel.app/',
      image: '/images/jayshreeshyam-showcase.jpg',
    },
    {
      id: 'gharoti',
      category: 'foodtech',
      title: 'Gharoti Roti Subscription',
      client: 'Gharoti Technologies',
      categoryLabel: 'Subscription Commerce & Food Logistics',
      description: 'Mobile-first homestyle fresh roti and meal subscription platform with recurring delivery scheduling, automated dispatch routes, pure desi ghee phulkas, and real-time tracking.',
      tech: ['Next.js', 'React', 'Tailwind', 'Firebase'],
      metrics: '10k+ Rotis Delivered • 99.9% On-Time',
      highlight: 'Live Production App',
      link: 'https://www.gharoti.com/',
      image: '/images/gharoti-showcase.jpg',
    },
    {
      id: 'nexus',
      category: 'commerce',
      title: 'Nexus E-Commerce Platform',
      client: 'Vanguard Retail',
      categoryLabel: 'Headless E-Commerce',
      description: 'Custom headless storefront with automated internationalization, dynamic edge caching, and sub-second checkout.',
      tech: ['Next.js', 'Shopify Plus', 'Stripe', 'Redis'],
      metrics: '99/100 Lighthouse • +42% Conversions',
      highlight: 'Edge Storefront',
      link: 'https://nexus-commerce.jwt.io',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'garments-store',
      category: 'commerce',
      title: 'Radhika Garments & Fashion Store',
      client: 'Radhika Garments & Apparel',
      categoryLabel: 'Garments & Fashion E-Commerce',
      description: 'Mobile-first online garments and clothing boutique web platform with interactive catalog browsing, size & fabric filters, festive discount coupons, 1-click Razorpay UPI checkout, and automated WhatsApp order notifications.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Razorpay UPI', 'Node.js'],
      metrics: '3x Online Orders • 1-Click UPI',
      highlight: 'Live Garments Store',
      link: 'https://radhikagarments.jwt.io',
      image: '/images/garments-showcase.jpg',
    },
    {
      id: 'bike-parts-store',
      category: 'auto',
      title: 'MotoSpares — Bike Spare Parts Online Store',
      client: 'MotoSpares Auto Components',
      categoryLabel: 'Automotive E-Commerce & Bike Spares',
      description: 'Dedicated online e-commerce marketplace for motorcycle and bike spare parts. Features bike model compatibility search (make, model, year), real-time inventory management, pan-India courier dispatch, and secure digital payments.',
      tech: ['React 19', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Razorpay'],
      metrics: '5,000+ Spare Parts • Pan-India Delivery',
      highlight: 'Auto Spare Parts Store',
      link: 'https://motospares.jwt.io',
      image: '/images/bikeparts-showcase.jpg',
    },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <section className="w-full py-8 sm:py-12" id="work">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E5E5E5] gap-4">
        <SectionHeader
          tag="SELECTED WORK &amp; CASE STUDIES"
          title="Digital Products Engineered for"
          highlightedTitle="Growth"
          description="Explore real-world technical systems and digital experiences engineered by JhalaWebTech for ambitious clients."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1 p-1 bg-[#F5F5F7] rounded border border-[#E5E5E5] self-start md:self-end">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-3 py-1.5 font-narrow text-xs uppercase tracking-wider font-bold rounded transition-colors cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#FDB345] text-white shadow-xs'
                  : 'text-[#575C62] hover:text-[#333333]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid with 3D Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <TiltCard key={proj.title} maxTilt={6} scale={1.01} className="h-full">
            <div className="bg-white rounded border border-[#E5E5E5] overflow-hidden shadow-xs hover:border-[#FDB345] hover:shadow-lg transition-[border-color,box-shadow] duration-300 flex flex-col justify-between h-full group">
              <div>
                {/* Image Preview Container */}
                <div className="relative h-48 w-full bg-[#F5F5F7] overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="font-narrow text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-white text-[#F69B2E] shadow-2xs border border-[#FDB345]/40">
                      {proj.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Text Info */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-narrow text-xs font-bold uppercase tracking-wider text-[#575C62]">
                      Client: {proj.client}
                    </span>
                  </div>

                  <h3 className="font-slab text-xl font-bold text-[#333333] mb-2 group-hover:text-[#FDB345] transition-colors">
                    {proj.title}
                  </h3>

                  <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Metrics Chip */}
                  <div className="inline-block px-3 py-1 bg-[#FFF8EE] border border-[#FDB345]/30 text-[#F69B2E] font-narrow text-xs font-bold uppercase tracking-wider rounded mb-4">
                    {proj.metrics}
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-[#F5F5F7] border border-[#DADBDD] text-[#333333] font-narrow text-[11px] font-bold uppercase rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#E5E5E5]">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FDB345] hover:text-[#F69B2E] transition-colors cursor-pointer"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenContact}
                  className="font-narrow text-xs font-bold uppercase tracking-wider text-[#575C62] hover:text-[#333333] transition-colors cursor-pointer"
                >
                  Inquire Similar
                </button>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
