import { useState } from 'react';
import { Smartphone, Globe, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

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
      { name: 'React Native', desc: 'Cross-platform mobile apps with native UI & 60fps performance', level: 'Production Core' },
      { name: 'Flutter', desc: 'Google UI toolkit for high-performance multi-platform compiled apps', level: 'Production Core' },
      { name: 'Swift (iOS)', desc: 'Native Apple iOS applications for iPhone & iPad ecosystems', level: 'Native iOS' },
      { name: 'Kotlin (Android)', desc: 'Modern Google recommended Android native development', level: 'Native Android' },
      { name: 'Firebase', desc: 'Cloud messaging push notifications, analytics & real-time sync', level: 'Mobile Cloud' },
      { name: 'App Store / Play Store', desc: 'Automated CI/CD build distribution and store compliance', level: 'Deployment' },
    ],
    frontend: [
      { name: 'React 19', desc: 'Latest React server actions, concurrent hooks, and optimized rendering', level: 'Expert' },
      { name: 'Next.js 15', desc: 'SSR, ISR, edge caching, and high-performance web storefronts', level: 'Expert' },
      { name: 'TypeScript', desc: 'Strict static type safety across frontend and API contracts', level: 'Standard' },
      { name: 'Tailwind CSS v4', desc: 'Utility-first modern styling for responsive web interfaces', level: 'Expert' },
      { name: 'Vite', desc: 'Sub-second HMR and blazing fast modern web bundling', level: 'Standard' },
      { name: 'HTML5 & CSS3 Modern', desc: 'Accessible semantic markup adhering to WCAG 2.1 AA', level: 'Standard' },
    ],
    backend: [
      { name: 'Node.js & Express', desc: 'Event-driven high-concurrency microservices and REST APIs', level: 'Expert' },
      { name: 'Python', desc: 'Scalable backend logic, automation scripts, and ML models', level: 'Expert' },
      { name: 'Django & Django REST', desc: 'Robust batteries-included web framework with ORM & auth', level: 'Expert' },
      { name: 'FastAPI', desc: 'Modern high-speed Python framework for async API services', level: 'Advanced' },
      { name: 'REST & GraphQL APIs', desc: 'Clean, documented, versioned and secure data contracts', level: 'Standard' },
      { name: 'WebSockets', desc: 'Real-time bidirectional streams for live chat & tracking', level: 'Production' },
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

      {/* Technologies Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {technologies[activeTab].map((tech) => (
          <div
            key={tech.name}
            className="bg-white p-5 rounded border border-[#E5E5E5] shadow-xs hover:border-[#FDB345] hover:shadow-md transition-all flex flex-col justify-between group"
          >
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
        ))}
      </div>
    </section>
  );
}
