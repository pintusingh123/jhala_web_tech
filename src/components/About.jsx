import { ShieldCheck, Cpu, Code2, Zap, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function About() {
  const principles = [
    {
      icon: Code2,
      title: 'Architectural Rigor',
      desc: 'We write clean, modular, and mathematically structured code designed for long-term maintainability and zero tech debt.',
    },
    {
      icon: Zap,
      title: 'Relentless Speed',
      desc: 'Zero bloated libraries. Optimized execution loops, minimal payload sizes, and blazing-fast sub-second render cycles.',
    },
    {
      icon: Cpu,
      title: 'AI Native Stack',
      desc: 'Integrating intelligence into modern product infrastructure with custom LLM workflows, autonomous agents, and vector databases.',
    },
    {
      icon: ShieldCheck,
      title: 'Production Resilience',
      desc: 'Fail-safe architectures with end-to-end monitoring, automated CI/CD pipelines, and guaranteed 99.99% uptime SLAs.',
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12" id="about">
      <SectionHeader
        tag="ABOUT JHALAWEBTECH"
        title="Engineering Modern Software With"
        highlightedTitle="Passion & Precision"
        description="JhalaWebTech (JWT) is a digital engineering studio and software architecture collective specializing in high-performance mobile apps, bespoke business software, and scalable web solutions."
      />

      {/* Main Grid: Manifesto & Pillars in Tvisha Two-Tone Style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        {/* Left Manifesto Card (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded border border-[#E5E5E5] p-7 sm:p-8 flex flex-col justify-between shadow-xs">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFF8EE] border border-[#FDB345]/40 text-[#F69B2E] font-narrow text-xs font-bold uppercase tracking-wider mb-5">
              <Award className="w-3.5 h-3.5 text-[#FDB345]" />
              <span>Our Agency Philosophy</span>
            </div>

            <h3 className="font-slab text-2xl sm:text-3xl font-bold text-[#333333] leading-snug mb-4">
              "We don't build disposable prototypes. We engineer digital infrastructure that powers business longevity."
            </h3>

            <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed mb-4">
              Founded on the belief that software should be robust, fast, and elegantly engineered, JhalaWebTech bridges high-fidelity design with deep backend and mobile capability.
            </p>

            <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed">
              Whether building an iOS &amp; Android app, automating internal workflows with autonomous AI agents, or designing enterprise web applications, we treat every project like our own flagship product.
            </p>
          </div>

          <div className="pt-6 border-t border-[#E5E5E5] mt-6 flex flex-wrap items-center justify-between gap-3 font-narrow text-xs uppercase font-bold tracking-wider text-[#575C62]">
            <span className="flex items-center gap-1.5 text-[#FDB345]">
              <span className="w-2 h-2 rounded-full bg-[#FDB345]" />
              <span>Available for New Projects</span>
            </span>
            <span>Remote Worldwide Delivery</span>
          </div>
        </div>

        {/* Right Principles Grid (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white rounded border border-[#E5E5E5] p-6 shadow-xs hover:border-[#FDB345] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#FFF8EE] border border-[#FDB345]/30 text-[#FDB345] flex items-center justify-center mb-4 group-hover:bg-[#FDB345] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-slab text-base sm:text-lg font-bold text-[#333333] mb-2 group-hover:text-[#FDB345] transition-colors">
                    {p.title}
                  </h4>
                  <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
