import { ShieldCheck, Cpu, Code2, Zap } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';

export default function About() {
  const principles = [
    {
      icon: Code2,
      title: 'Clean & High-Quality Code',
      desc: 'We write clean, well-tested code that runs smoothly without bugs, so your website or app works reliably for years.',
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Mobile Speed',
      desc: 'Websites and apps that open instantly even on slow mobile data. No long loading times, no lag, maximum customer retention.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Always Online',
      desc: 'Safe payments, daily cloud backups, and high uptime so your website or mobile app never goes down when customers visit.',
    },
    {
      icon: Cpu,
      title: 'Direct Developer Access',
      desc: 'You communicate directly with the developers writing your code via WhatsApp and call. Zero middlemen, zero miscommunication.',
    },
  ];

  return (
    <Section
      id="about"
      eyebrow="ABOUT JHALAWEBTECH"
      title="Building digital solutions with"
      highlightWord="care & commitment."
      subtitle="JhalaWebTech is a web and mobile app development agency based in Rajasthan, India. We build fast business websites, iOS/Android mobile apps, and custom software that help your business grow."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-stretch">
        {/* Left Manifesto Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <Card className="h-full p-6 sm:p-8 bg-surface flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="accent">Our Promise to You</Badge>
              </div>

              <h3 className="font-head text-2xl sm:text-3xl font-bold text-primary leading-snug mb-4">
                "We don't just deliver websites or apps — we build digital tools that bring real customers and revenue to your business."
              </h3>

              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-4">
                Founded on the belief that digital technology should be affordable, fast, and transparent, JhalaWebTech gives business owners premium web and mobile app solutions at honest prices.
              </p>

              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                Whether you need a simple 5-page business website, a complete online store with UPI payments, or a custom mobile application, we treat your project with personal care and commitment.
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
