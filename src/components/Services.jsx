import React from 'react';
import { Code, ShoppingCart, Cpu, Bot, Palette, Wrench, ArrowUpRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const servicesList = [
    {
      id: 'web-dev',
      icon: Code,
      badge: 'ACTIVE',
      title: 'Web Development',
      description: 'High-performance frontend architectures and scalable backend APIs built for modern browsers and demanding workloads.',
      tags: ['React', 'Node.js', 'AWS'],
      actionText: 'Explore Code',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      badge: '',
      title: 'E-commerce',
      description: 'Custom storefronts, complex inventory integrations, and frictionless checkout flows optimized for high-volume transactions.',
      tags: ['Shopify Plus', 'Stripe'],
      actionText: 'Explore Code',
    },
    {
      id: 'custom-sw',
      icon: Cpu,
      badge: '',
      title: 'Custom Software',
      description: 'Bespoke internal tools, complex data pipelines, and specialized software tailored precisely to unique operational requirements.',
      tags: ['Python', 'Go', 'PostgreSQL'],
      actionText: 'Explore Code',
    },
    {
      id: 'ai-solutions',
      icon: Bot,
      badge: 'BETA',
      title: 'AI Solutions',
      description: 'Integration of LLMs, custom machine learning models, and automated reasoning pipelines into existing product ecosystems.',
      tags: ['TensorFlow', 'OpenAI API'],
      actionText: 'Explore Code',
    },
    {
      id: 'ui-ux',
      icon: Palette,
      badge: '',
      title: 'UI/UX Design',
      description: 'Systematic, brutally efficient interface design focused on cognitive clarity, technical precision, and component reusability.',
      tags: ['Figma', 'Design Systems'],
      actionText: 'Explore Specs',
    },
    {
      id: 'devops',
      icon: Wrench,
      badge: '',
      title: 'Maintenance',
      description: 'Continuous deployment oversight, legacy system refactoring, and proactive security patching for mission-critical infrastructure.',
      tags: ['CI/CD', 'Docker', 'Kubernetes'],
      actionText: 'Explore Code',
    },
  ];

  return (
    <section className="w-full py-8">
      {/* Terminal Header */}
      <div className="w-full mb-8">
        <span className="font-space text-xs uppercase text-[#9CA3AF] tracking-widest block mb-1">
          SYS.SERVICES.MAP
        </span>
        <div className="terminal-divider my-2"></div>
        <h2 className="font-space text-3xl sm:text-5xl font-extrabold uppercase text-[#e4e2e1] mt-4">
          Engineering <span className="text-[#C8FF3D]">Scale</span>.
        </h2>
        <p className="font-sans-body text-base text-[#9CA3AF] max-w-2xl mt-3 leading-relaxed">
          We architect and deploy robust, high-performance technical solutions designed for modern scale and relentless efficiency.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((service) => {
          const IconComp = service.icon;
          return (
            <div
              key={service.id}
              className="bg-[#1A1A1A] p-6 card-high-emphasis flex flex-col justify-between group transition-all duration-300 shadow-[4px_4px_0px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_0px_#C8FF3D]"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-[#0A0A0A] brutalist-border text-[#C8FF3D] group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>
                  {service.badge && (
                    <span className="bg-[#C8FF3D] text-[#0A0A0A] font-space text-[10px] font-bold px-2 py-0.5 uppercase">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-space text-2xl font-bold text-[#e4e2e1] mb-2 group-hover:text-[#C8FF3D] transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans-body text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tech Tags */}
                <div className="flex gap-2 flex-wrap mb-6">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs text-[#9CA3AF] border border-[#444748] bg-[#0A0A0A] px-2 py-1 uppercase font-mono-code"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service)}
                className="w-full bg-transparent border border-[#F5F5F0] text-[#F5F5F0] font-space text-xs uppercase py-3 px-4 flex items-center justify-center gap-2 group-hover:bg-[#F5F5F0] group-hover:text-[#0A0A0A] group-hover:font-bold transition-all cursor-pointer"
              >
                <span>{service.actionText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
