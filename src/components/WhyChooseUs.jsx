import { 
  Users, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Clock, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import TiltCard from './3d/TiltCard';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Direct Access to Senior Engineers',
      desc: 'No middleman account managers or communication silos. You collaborate directly with experienced lead architects who understand code, systems, and product strategy.',
      stat: 'Zero Communication Lag',
    },
    {
      icon: ShieldCheck,
      title: '100% Code & IP Ownership',
      desc: 'You own every line of source code, design asset, and database schema from day one. No vendor lock-in, no proprietary licensing traps.',
      stat: 'Full IP Rights Transfer',
    },
    {
      icon: Zap,
      title: 'Fast-Track Agile Delivery',
      desc: 'We launch production-ready MVPs and apps in 4 to 8 weeks through structured 2-week sprints, automated CI/CD staging, and live demo checkpoints.',
      stat: '2x Faster Time to Market',
    },
    {
      icon: Code2,
      title: 'Clean, Scalable Architecture',
      desc: 'Built with modern stacks like React 19, Next.js, Flutter, and Node.js. Our architectures are engineered to scale smoothly to hundreds of thousands of users.',
      stat: 'Sub-Second Latency',
    },
    {
      icon: Clock,
      title: 'Reliable 24/7 Support & Maintenance',
      desc: 'We stand behind our code with guaranteed uptime SLAs, routine security patches, automated backups, and instant WhatsApp/phone response.',
      stat: '99.99% Uptime Guarantee',
    },
    {
      icon: Sparkles,
      title: 'AI-Native Integration Capabilities',
      desc: 'Future-proof your application with custom AI agents, automated workflow reasoning, and intelligent document parsing built right into your core product.',
      stat: 'Smart Automation',
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12" id="why-choose-us">
      <SectionHeader
        tag="WHY CHOOSE JHALAWEBTECH"
        title="Why Choose Us as Your"
        highlightedTitle="Software Development Company"
        description="We are a tech-cocktail entity enabling fast-track digital solutions powered with a perfect balance of engineering rigor, modern aesthetics, and direct communication."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r) => {
          const Icon = r.icon;
          return (
            <TiltCard key={r.title} maxTilt={6} scale={1.01} className="h-full">
              <div className="bg-white rounded border border-[#E5E5E5] p-6 sm:p-7 shadow-xs hover:border-[#FDB345] hover:shadow-lg transition-[border-color,box-shadow] duration-300 flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 rounded bg-[#FFF8EE] border border-[#FDB345]/30 text-[#FDB345] flex items-center justify-center mb-5 group-hover:bg-[#FDB345] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="inline-block px-2.5 py-0.5 rounded font-narrow text-[11px] font-bold uppercase tracking-wider bg-[#FFF8EE] text-[#F69B2E] border border-[#FDB345]/30 mb-2.5">
                    {r.stat}
                  </div>

                  <h3 className="font-slab text-lg sm:text-xl font-bold text-[#333333] mb-2 group-hover:text-[#FDB345] transition-colors">
                    {r.title}
                  </h3>

                  <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5E5E5] flex items-center gap-1.5 font-narrow text-xs uppercase tracking-wider font-bold text-[#FDB345]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Client Guarantee</span>
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
