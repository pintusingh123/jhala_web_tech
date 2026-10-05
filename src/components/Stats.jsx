import React from 'react';

export default function Stats() {
  const stats = [
    { value: '10+', label: 'SHIPPED', desc: 'Production-ready web & AI platforms' },
    { value: '10+', label: 'CLIENTS', desc: 'Global startups & enterprise partners' },
    { value: '100%', label: 'TECHNICAL', desc: 'High-precision architecture & zero bloat' },
  ];

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 my-8 border-y border-[#262626] py-8">
      {stats.map((stat, idx) => (
        <div 
          key={stat.label}
          className={`flex flex-col items-start p-6 bg-[#0E0E0E] brutalist-border group hover:bg-[#131313] transition-colors duration-200 ${
            idx === 0 ? 'brutalist-border-active' : ''
          }`}
        >
          <span className={`font-space text-5xl font-extrabold transition-transform origin-left group-hover:scale-105 ${
            idx === 0 ? 'text-[#C8FF3D]' : 'text-[#e4e2e1] group-hover:text-[#C8FF3D]'
          }`}>
            {stat.value}
          </span>
          <span className="font-space text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mt-3 flex items-center gap-2">
            <span className={`w-2 h-2 inline-block ${
              idx === 0 ? 'bg-[#C8FF3D]' : 'bg-[#e4e2e1] group-hover:bg-[#C8FF3D]'
            }`}></span>
            {stat.label}
          </span>
          <p className="font-mono-code text-xs text-[#9CA3AF] mt-1">
            {stat.desc}
          </p>
        </div>
      ))}
    </section>
  );
}
