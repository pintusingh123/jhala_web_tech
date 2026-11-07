import { ShieldCheck, Cpu, Code2, Zap } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';

export default function About() {
  const principles = [
    {
      icon: Code2,
      title: 'Architectural Rigor',
      desc: 'We write clean, modular, and mathematically structured code designed for long-term maintainability and zero technical debt.',
    },
    {
      icon: Zap,
      title: 'Relentless Execution Speed',
      desc: 'Zero bloated dependencies. Optimized execution loops, minimal bundle payloads, and blazing-fast sub-second render cycles.',
    },
    {
      icon: ShieldCheck,
      title: 'Production Resilience',
      desc: 'Fail-safe architectures with end-to-end monitoring, automated CI/CD pipelines, and guaranteed 99.99% uptime SLAs.',
    },
    {
      icon: Cpu,
      title: 'Direct Senior Access',
      desc: 'You communicate directly with the lead software architects designing your database and shipping your features.',
    },
  ];

  return (
    <Section
      id="about"
      eyebrow="ABOUT JHALAWEBTECH"
      title="Engineering software with"
      highlightWord="passion & precision."
      subtitle="JhalaWebTech (JWT) is a digital engineering studio based in Rajasthan, India. We engineer custom websites, React Native mobile apps, and scalable business backends for ambitious companies worldwide."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-stretch">
        {/* Left Manifesto Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <Card className="h-full p-6 sm:p-8 bg-surface flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="accent">Our Agency Philosophy</Badge>
              </div>

              <h3 className="font-head text-2xl sm:text-3xl font-bold text-primary leading-snug mb-4">
                "We don't build disposable prototypes. We engineer digital infrastructure that powers business longevity."
              </h3>

              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-4">
                Founded on the belief that software should be robust, fast, and transparently delivered, JhalaWebTech bridges high-fidelity UI design with deep full-stack backend and mobile capability.
              </p>

              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                Whether deploying a React Native app for iOS &amp; Android, automating internal workflows with a bespoke CRM, or designing an e-commerce platform, we treat every project like our own flagship product.
              </p>
            </div>

            <div className="pt-6 border-t border-subtle mt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted">
              <span className="flex items-center gap-1.5 text-[#3DD9B0]">
                <span className="w-2 h-2 rounded-full bg-[#3DD9B0]" />
                <span>Available for New Projects</span>
              </span>
              <span>Rajasthan &bull; Global Delivery</span>
            </div>
          </Card>
        </div>

        {/* Right Principles Grid (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <Card
                key={p.title}
                className="p-6 bg-surface hover:border-[#FF6B2C]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface-2 border border-subtle text-[#FF6B2C] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-head text-base sm:text-lg font-bold text-primary mb-2">
                    {p.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
