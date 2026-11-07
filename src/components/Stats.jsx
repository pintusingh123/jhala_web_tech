import { Award, Users, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import TiltCard from './3d/TiltCard';

export default function Stats() {
  const stats = [
    {
      icon: Award,
      value: '50+',
      label: 'Projects Delivered',
      desc: 'Mobile apps, custom software & web platforms deployed to live production',
      featured: true,
    },
    {
      icon: Users,
      value: '99%',
      label: 'Client Satisfaction',
      desc: 'High client retention with direct access to senior full-stack architects',
      featured: false,
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Code Ownership',
      desc: 'Clean modular codebases with full intellectual property transfer',
      featured: false,
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'SLA Support',
      desc: 'Continuous performance monitoring, zero downtime & rapid bug resolution',
      featured: false,
    },
  ];

  const domains = [
    'Quick Commerce & FoodTech',
    'FinTech & Banking Rails',
    'D2C & Headless E-Commerce',
    'HealthTech & Medical Portals',
    'Logistics & Fleet Dispatch',
    'Enterprise B2B SaaS',
  ];

  return (
    <section className="w-full my-6 sm:my-10">
      {/* 4-Column Tvisha Two-Tone Metrics Grid with 3D Depth */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <TiltCard key={stat.label} maxTilt={5} scale={1.01} className="h-full">
              <div
                className={`p-5 sm:p-6 rounded border transition-all duration-200 flex flex-col justify-between h-full group ${
                  stat.featured
                    ? 'bg-[#FDB345] text-white border-[#FDB345] shadow-sm'
                    : 'bg-white text-[#333333] border-[#E5E5E5] hover:border-[#FDB345] shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  <div className={`w-10 h-10 rounded flex items-center justify-center mb-4 transition-all ${
                    stat.featured
                      ? 'bg-white/20 text-white'
                      : 'bg-[#FFF8EE] border border-[#FDB345]/30 text-[#FDB345] group-hover:bg-[#FDB345] group-hover:text-white'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className={`font-slab text-4xl sm:text-5xl font-bold tracking-tight mb-1 ${
                    stat.featured ? 'text-white' : 'text-[#333333] group-hover:text-[#FDB345]'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 ${
                    stat.featured ? 'text-white' : 'text-[#333333]'
                  }`}>
                    {stat.label}
                  </div>
                </div>
                <p className={`font-sans-body text-xs sm:text-sm leading-relaxed ${
                  stat.featured ? 'text-white/90' : 'text-[#575C62]'
                }`}>
                  {stat.desc}
                </p>
              </div>
            </TiltCard>
          );
        })}
      </div>

      {/* Industries & Domains Trust Bar in Tvisha Two-Tone Style */}
      <div className="mt-8 py-5 px-6 bg-[#F5F5F7] rounded border border-[#E5E5E5] flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-narrow text-xs font-bold uppercase tracking-widest text-[#575C62] shrink-0">
          Domains We Specialize In:
        </span>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3">
          {domains.map((d) => (
            <span
              key={d}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#DADBDD] text-[#333333] font-narrow text-xs font-bold uppercase tracking-wide rounded shadow-2xs hover:scale-105 transition-transform"
            >
              <CheckCircle className="w-3.5 h-3.5 text-[#FDB345]" />
              <span>{d}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
