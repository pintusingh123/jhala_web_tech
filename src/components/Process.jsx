import React from 'react';
import { Layers, Zap, Bot, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Process({ onOpenContact }) {
  const steps = [
    {
      step: '01',
      title: 'ARCHITECTURAL BLUEPRINT',
      icon: Layers,
      desc: 'We map data contracts, microservice topologies, database schemas, and UX design tokens before writing a single line of code.',
      deliverables: 'Architecture Spec • System Flowcharts • API Contracts',
    },
    {
      step: '02',
      title: 'HIGH-VELOCITY SPRINT',
      icon: Zap,
      desc: 'Rapid bi-weekly milestone execution with automated CI/CD staging gates, test coverage suites, and live sprint previews.',
      deliverables: 'Live Staging Builds • Zero-Regression Tests',
    },
    {
      step: '03',
      title: 'AI & SYSTEM AUGMENTATION',
      icon: Bot,
      desc: 'Direct integration of autonomous multi-agent pipelines, custom vector embeddings, and deterministic tool-calling workflows.',
      deliverables: 'Fine-Tuned LLMs • Vector Indices • Autonomous Agents',
    },
    {
      step: '04',
      title: 'PRODUCTION SCALE & SLA',
      icon: ShieldCheck,
      desc: 'Zero-downtime blue-green production deployment with 24/7 telemetry monitoring, failover gates, and guaranteed enterprise SLAs.',
      deliverables: '99.999% SLA • Telemetry Dashboard • SOC2 Ready',
    },
  ];

  return (
    <section className="w-full py-8">
      {/* Header */}
      <div className="mb-8">
        <span className="font-space text-xs uppercase text-[#9CA3AF] tracking-widest block mb-1">
          SYS.EXECUTION // METHODOLOGY
        </span>
        <div className="terminal-divider my-2"></div>
        <h2 className="font-space text-3xl sm:text-5xl font-extrabold uppercase text-[#e4e2e1] mt-4">
          HOW WE <span className="text-[#C8FF3D]">ENGINEER & SCALE</span>
        </h2>
        <p className="font-sans-body text-base text-[#9CA3AF] max-w-2xl mt-2 leading-relaxed">
          Our 4-phase technical delivery framework guarantees predictable timelines, zero architectural debt, and enterprise-grade reliability.
        </p>
      </div>

      {/* Process 4-Col Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="bg-[#131313] brutalist-border p-6 flex flex-col justify-between group hover:border-[#C8FF3D] transition-all duration-300 relative shadow-[4px_4px_0px_0px_#262626] hover:shadow-[6px_6px_0px_0px_#C8FF3D]"
            >
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-[#262626] mb-4">
                  <span className="font-space text-3xl font-extrabold text-[#C8FF3D]">
                    {s.step}
                  </span>
                  <div className="p-2 bg-[#1A1A1A] brutalist-border text-[#C8FF3D] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-space text-lg font-bold text-[#e4e2e1] mb-2 group-hover:text-[#C8FF3D] transition-colors">
                  {s.title}
                </h3>

                <p className="font-sans-body text-xs text-[#9CA3AF] leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#262626]">
                <span className="font-mono-code text-[10px] text-[#C8FF3D] uppercase block mb-1">
                  DELIVERABLES:
                </span>
                <span className="font-mono-code text-xs text-[#e4e2e1] block">
                  {s.deliverables}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
