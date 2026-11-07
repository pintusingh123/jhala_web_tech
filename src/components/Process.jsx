import { 
  Compass, 
  Palette, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Headphones, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Process({ onOpenContact }) {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Requirement Blueprint',
      icon: Compass,
      desc: 'We analyze your business goals, target audience, technical feasibility, and map out complete data models and API contracts before coding begins.',
      deliverables: 'Architecture Blueprint • Scope & Timeline • Tech Stack Selection',
    },
    {
      step: '02',
      title: 'UI/UX Wireframing & Prototyping',
      icon: Palette,
      desc: 'Our design team creates intuitive user journeys, wireframes, and clickable high-fidelity Figma prototypes so you can experience the product upfront.',
      deliverables: 'Figma Interactive Mockups • Design System • User Journey Flows',
    },
    {
      step: '03',
      title: 'Agile Full-Stack Engineering',
      icon: Code2,
      desc: 'We develop in structured 2-week agile sprints. You receive weekly live demo staging links to test real progress in real-time.',
      deliverables: 'Live Staging Demos • Clean Modular Code • Bi-Weekly Sprint Demos',
    },
    {
      step: '04',
      title: 'Rigorous QA & Security Testing',
      icon: ShieldCheck,
      desc: 'Every endpoint and mobile screen undergoes end-to-end unit tests, cross-device screen responsiveness verification, and vulnerability scanning.',
      deliverables: 'Zero-Regression Tests • Device Compatibility • Security Audit',
    },
    {
      step: '05',
      title: 'Cloud Deployment & Store Launch',
      icon: Rocket,
      desc: 'We configure scalable cloud hosting (AWS / Vercel), manage domain routing, and handle complete Apple App Store and Google Play Store submission.',
      deliverables: 'App Store / Play Store Live • Zero-Downtime CI/CD • Production SSL',
    },
    {
      step: '06',
      title: '24/7 Ongoing SLA Support & Scale',
      icon: Headphones,
      desc: 'Our relationship continues post-launch with 24/7 technical monitoring, database backups, performance tuning, and direct developer communication.',
      deliverables: 'Dedicated SLA Channels • Telemetry Monitoring • Feature Iterations',
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12" id="process">
      {/* Header matching Tvisha's exact styling */}
      <SectionHeader
        tag="HOW WE DEVELOP MOBILE APPS & SOFTWARE"
        title="Synchronized Processes for"
        highlightedTitle="World-Class Quality"
        description="We collaborate and deliver faultless, easy-to-use technology solutions backed up with an agile delivery framework and 24/7 support system."
      />

      {/* 6-Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.step}
              className="bg-white rounded border border-[#E5E5E5] p-6 sm:p-7 shadow-xs hover:border-[#FDB345] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Step Header */}
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#E5E5E5]">
                  <span className="font-slab text-3xl sm:text-4xl font-bold text-[#FDB345]">
                    {s.step}
                  </span>
                  <div className="p-2.5 rounded bg-[#FFF8EE] border border-[#FDB345]/30 text-[#FDB345] group-hover:bg-[#FDB345] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-slab text-lg sm:text-xl font-bold text-[#333333] mb-2 group-hover:text-[#FDB345] transition-colors">
                  {s.title}
                </h3>

                <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed mb-5">
                  {s.desc}
                </p>
              </div>

              {/* Deliverables Box */}
              <div className="pt-3 border-t border-[#E5E5E5] bg-[#F5F5F7] -mx-6 -mb-6 p-4 rounded-b">
                <span className="font-narrow text-[10px] font-bold text-[#575C62] uppercase tracking-wider block mb-1">
                  Key Deliverables
                </span>
                <span className="text-xs font-semibold text-[#333333] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FDB345] shrink-0" />
                  <span>{s.deliverables}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Process CTA Banner in Tvisha Two-Color Split */}
      <div className="mt-10 p-6 sm:p-8 bg-[#333333] rounded text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-narrow text-xs font-bold uppercase tracking-widest text-[#FDB345] block mb-1">
            LET'S TALK BUSINESS
          </span>
          <h3 className="font-slab text-xl sm:text-2xl font-bold mb-1">
            Have a project in mind? Let's build your technical blueprint.
          </h3>
          <p className="font-sans-body text-xs sm:text-sm text-slate-300 max-w-xl">
            Book a 30-minute discovery consultation with our lead software architects. No commitments, 100% free scoping.
          </p>
        </div>
        <button
          onClick={onOpenContact}
          className="px-6 py-3 bg-[#FDB345] hover:bg-[#F69B2E] text-white font-narrow text-sm font-bold uppercase tracking-wider rounded transition-colors shrink-0 flex items-center gap-2 cursor-pointer active:scale-95"
        >
          <span>Schedule Free Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
