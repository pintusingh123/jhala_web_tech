import React from 'react';
import { Terminal, ShieldCheck, Cpu, Code2, Zap } from 'lucide-react';

export default function About({ onOpenContact }) {
  const principles = [
    {
      icon: Code2,
      title: 'Architectural Rigor',
      desc: 'We write clean, modular, and mathematically structured code designed for long-term maintainability.',
    },
    {
      icon: Zap,
      title: 'Relentless Speed',
      desc: 'Zero bloat. Optimized execution loops, minimal payload sizes, and blazing-fast render cycles.',
    },
    {
      icon: Cpu,
      title: 'AI Native Stack',
      desc: 'Integrating intelligence into modern product infrastructure with local & cloud LLMs.',
    },
    {
      icon: ShieldCheck,
      title: 'Production Resilience',
      desc: 'Fail-safe architectures with end-to-end monitoring, automated CI/CD, and robust error recovery.',
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="mb-8">
        <span className="font-space text-xs uppercase text-[#9CA3AF] tracking-widest block mb-1">
          SYS.ABOUT.MAP
        </span>
        <div className="terminal-divider my-2"></div>
        <h2 className="font-space text-3xl sm:text-5xl font-extrabold uppercase text-[#e4e2e1] mt-4">
          ABOUT <span className="text-[#C8FF3D]">JHALALABS</span>
        </h2>
        <p className="font-sans-body text-base text-[#9CA3AF] max-w-3xl mt-2 leading-relaxed">
          JhalaLabs is a digital agency & software architecture collective specializing in high-performance web systems, bespoke software, and AI solutions.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left Manifesto */}
        <div className="bg-[#131313] brutalist-border p-8 flex flex-col justify-between shadow-[4px_4px_0px_0px_#262626]">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#C8FF3D] mb-4">
              <Terminal className="w-4 h-4" />
              <span>SYS.MANIFESTO</span>
            </div>
            <h3 className="font-space text-2xl md:text-3xl font-bold uppercase text-[#e4e2e1] leading-tight mb-4">
              "We don't build simple MVPs. We engineer digital infrastructure that powers enterprise growth."
            </h3>
            <p className="font-sans-body text-sm text-[#9CA3AF] leading-relaxed mb-4">
              Founded on principles of brutal efficiency and modern aesthetic precision, JhalaLabs bridges high-end design with deep technical capability.
            </p>
            <p className="font-sans-body text-sm text-[#9CA3AF] leading-relaxed">
              Whether scaling a real-time web platform, building custom AI subagents, or crafting responsive design systems, our team delivers production code that stands the test of scale.
            </p>
          </div>

          <div className="pt-6 border-t border-[#262626] mt-6 flex justify-between items-center text-xs font-mono-code text-[#C8FF3D]">
            <span>LOC: GLOBAL // REMOTE CORE</span>
            <span>STATUS: OPEN FOR NEW PROJECTS</span>
          </div>
        </div>

        {/* Right Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map((princ, pIdx) => {
            const Icon = princ.icon;
            return (
              <div
                key={pIdx}
                className="bg-[#1A1A1A] p-6 brutalist-border hover:border-[#C8FF3D] transition-all group"
              >
                <div className="p-2.5 bg-[#0A0A0A] brutalist-border w-fit text-[#C8FF3D] mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-space text-lg font-bold text-[#e4e2e1] mb-2 group-hover:text-[#C8FF3D] transition-colors">
                  {princ.title}
                </h4>
                <p className="font-sans-body text-xs text-[#9CA3AF] leading-relaxed">
                  {princ.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tech Stack Horizontal Scroll Bar */}
      <div className="bg-[#0E0E0E] brutalist-border p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-space text-xs uppercase text-[#C8FF3D] font-bold tracking-wider shrink-0">
          CORE TECH STACK:
        </span>
        <div className="flex flex-wrap gap-2 text-xs font-mono-code text-[#e4e2e1]">
          {['React', 'Node.js', 'Vite', 'Python', 'Go', 'AWS', 'Docker', 'PostgreSQL', 'Tailwind v4', 'Lucide', 'OpenAI'].map((t, idx) => (
            <span key={idx} className="bg-[#1A1A1A] border border-[#262626] px-2.5 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
