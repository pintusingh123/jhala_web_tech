import { useState } from 'react';
import { Smartphone, Globe, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import TiltCard from './3d/TiltCard';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('mobile');

  const stackTabs = [
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'frontend', label: 'Frontend & Web', icon: Globe },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'database', label: 'Database & Cloud', icon: Database },
    { id: 'ai', label: 'AI & Machine Learning', icon: Sparkles },
  ];

  const technologies = {
    mobile: [
      { name: 'React Native', desc: 'Single codebase cross-platform iOS & Android mobile apps with native 60fps UI', level: 'Primary Mobile' },
      { name: 'React Native CLI & Expo', desc: 'Universal native runtime with rapid development workflows and OTA updates', level: 'Production' },
      { name: 'Firebase Mobile SDK', desc: 'Push notifications, real-time database, auth & mobile crashlytics telemetry', level: 'Mobile Cloud' },
      { name: 'Google Play Store', desc: 'Complete APK/AAB build signing, testing track deployment, and store compliance', level: 'Deployment' },
      { name: 'Apple App Store', desc: 'TestFlight beta distribution, Apple developer guidelines, and production release', level: 'Deployment' },
      { name: 'Razorpay UPI Mobile SDK', desc: 'Instant native UPI, cards, and netbanking checkout inside mobile apps', level: 'Fintech' },
    ],
    frontend: [
      { name: 'React.js & SPAs', desc: 'Modern Single Page Applications (SPAs) with stateful routing and clean UI', level: 'Expert' },
      { name: 'Next.js 15', desc: 'High-performance SSR, ISR, edge caching, and SEO-optimized storefronts', level: 'Expert' },
      { name: 'HTML5, CSS3 & Modern JS', desc: 'Accessible, responsive static and dynamic web structures adhering to WCAG', level: 'Expert' },
      { name: 'Tailwind CSS v4', desc: 'Utility-first responsive modern styling with minimal runtime overhead', level: 'Expert' },
      { name: 'Static & Dynamic Web', desc: 'Landing pages, corporate portals, and dynamic content-driven websites', level: 'Expert' },
      { name: 'Vite & TypeScript', desc: 'Sub-second modern bundling with strict static type safety across contracts', level: 'Standard' },
    ],
    backend: [
      { name: 'Node.js & Express', desc: 'Event-driven high-concurrency microservices, REST APIs, and authentication', level: 'Expert' },
      { name: 'Django (Python)', desc: 'Robust enterprise Python framework with ORM, security middleware & admin portal', level: 'Expert' },
      { name: 'Firebase Backend', desc: 'Real-time database sync, Firestore, cloud functions, and instant user auth', level: 'Expert' },
      { name: 'Custom CRM Systems', desc: 'Lead tracking, customer communications, pipeline automation & role access', level: 'Bespoke CRM' },
      { name: 'Custom CMS Platforms', desc: 'Bespoke content management systems for dynamic catalogs, blogs & media', level: 'Custom CMS' },
      { name: 'REST APIs & WebSockets', desc: 'Documented JSON API endpoints and live bidirectional WebSocket streams', level: 'Standard' },
    ],
    database: [
      { name: 'PostgreSQL', desc: 'Enterprise relational database with ACID guarantees', level: 'Primary DB' },
      { name: 'MongoDB', desc: 'Document store for flexible schemas and high read throughput', level: 'NoSQL DB' },
      { name: 'MySQL', desc: 'Reliable relational database management system', level: 'Relational' },
      { name: 'Redis', desc: 'In-memory caching and session management for sub-5ms access', level: 'Cache / Queue' },
      { name: 'Amazon Web Services (AWS)', desc: 'EC2, S3, RDS, CloudFront, Lambda scalable cloud infrastructure', level: 'Cloud Host' },
      { name: 'Docker & Containers', desc: 'Containerized reproducible environments for zero-drift deploys', level: 'DevOps' },
    ],
    ai: [
      { name: 'OpenAI API & Claude', desc: 'Commercial LLM integration with structured JSON outputs', level: 'LLM Native' },
      { name: 'LangGraph & LangChain', desc: 'Multi-agent orchestration and deterministic reasoning loops', level: 'Agentic AI' },
      { name: 'Vector Databases', desc: 'Pinecone, pgvector & Redis Vector for RAG semantic search', level: 'Retrieval' },
      { name: 'Data Pipeline Automation', desc: 'Automated data ingestion, ETL cleaning, and normalization', level: 'Pipelines' },
      { name: 'WhatsApp Cloud API', desc: 'Automated conversational commerce, bot replies & alerts', level: 'Messaging' },
      { name: 'Razorpay & Stripe APIs', desc: 'Zero-friction payment rails, UPI, and recurring billing', level: 'Fintech' },
    ],
  };

  return (
    <section className="w-full py-8 sm:py-12 bg-[#F5F5F7] p-6 sm:p-10 rounded border border-[#E5E5E5]" id="technologies">
      <SectionHeader
        tag="TECHNOLOGIES WE MASTER"
        title="Proven Modern Tech"
        highlightedTitle="Frameworks"
        description="We build with modern, scalable, and battle-tested frameworks that guarantee maximum security, execution speed, and long-term maintainability."
      />

      {/* Stack Navigation Tabs with Tvisha Yellow */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-1.5 rounded border border-[#E5E5E5] w-fit shadow-2xs">
        {stackTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#FDB345] text-white shadow-xs'
                  : 'text-[#575C62] hover:text-[#333333] hover:bg-[#F5F5F7]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Technologies Cards Grid with 3D Tilt */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {technologies[activeTab].map((tech) => (
          <TiltCard key={tech.name} maxTilt={5} scale={1.01} className="h-full">
            <div className="bg-white p-5 rounded border border-[#E5E5E5] shadow-xs hover:border-[#FDB345] hover:shadow-md transition-[border-color,box-shadow] duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-slab text-lg font-bold text-[#333333] group-hover:text-[#FDB345] transition-colors">
                    {tech.name}
                  </h4>
                  <span className="font-narrow text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FFF8EE] text-[#F69B2E] border border-[#FDB345]/30">
                    {tech.level}
                  </span>
                </div>
                <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed mb-4">
                  {tech.desc}
                </p>
              </div>

              <div className="flex items-center gap-1.5 font-narrow text-xs uppercase tracking-wider font-bold text-[#FDB345] pt-3 border-t border-[#E5E5E5]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Production Tested</span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
