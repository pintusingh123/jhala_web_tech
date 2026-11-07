import { useState } from 'react';
import { 
  Smartphone, 
  Code, 
  Globe, 
  Bot, 
  ShoppingCart, 
  Palette, 
  Cloud, 
  ArrowRight,
  Check
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import TiltCard from './3d/TiltCard';

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'software', label: 'Custom Software' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI & Cloud' },
  ];

  const servicesList = [
    {
      id: 'mobile-app-dev',
      category: 'mobile',
      icon: Smartphone,
      badge: 'FEATURED',
      title: 'Mobile App Development',
      description: 'Native iOS (Swift), Android (Kotlin), and cross-platform Flutter & React Native applications built for smooth gestures, offline capabilities, and high conversion.',
      points: [
        'React Native & Flutter Cross-Platform',
        'Native iOS (Swift) & Android (Kotlin)',
        'Biometric Auth & Payment Gateways',
        'Google Play Store & App Store Deployment'
      ],
      tags: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    },
    {
      id: 'custom-software',
      category: 'software',
      icon: Code,
      badge: 'ENTERPRISE',
      title: 'Custom Software Development',
      description: 'Bespoke enterprise management systems, custom ERPs, CRM platforms, and high-concurrency microservices engineered to fit your exact operational workflows.',
      points: [
        'Custom ERP & CRM Platforms',
        'High-Throughput REST & GraphQL APIs',
        'Role-Based Access & Multi-Tenancy',
        'Automated Workflow Pipelines'
      ],
      tags: ['Python', 'Node.js', 'PostgreSQL', 'Docker', 'Go'],
    },
    {
      id: 'web-development',
      category: 'web',
      icon: Globe,
      badge: 'HIGH SPEED',
      title: 'Website Design & Development',
      description: 'Modern, responsive web applications engineered with React 19, Next.js, and edge caching for sub-second speeds, SEO optimization, and 99+ Core Web Vitals.',
      points: [
        'React 19 & Next.js Web Storefronts',
        'Sub-Second Page Loads & 99+ Lighthouse',
        'Custom Admin Dashboards & Analytics',
        'Complete SEO & Mobile Optimization'
      ],
      tags: ['React 19', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    },
    {
      id: 'ai-solutions',
      category: 'ai',
      icon: Bot,
      badge: 'AI NATIVE',
      title: 'AI & Machine Learning Development',
      description: 'Production-ready AI integration, autonomous reasoning agent workflows, custom RAG vector search, and intelligent document parsing to automate business operations.',
      points: [
        'Autonomous Multi-Agent Systems',
        'Enterprise RAG & Semantic Vector Search',
        'Intelligent Document & Data Extraction',
        'Custom OpenAI & Claude Fine-Tuning'
      ],
      tags: ['Python', 'LangGraph', 'FastAPI', 'OpenAI', 'Redis Vector'],
    },
    {
      id: 'ecommerce-solutions',
      category: 'web',
      icon: ShoppingCart,
      badge: 'COMMERCE',
      title: 'E-Commerce Solutions',
      description: 'Scalable digital storefronts, custom checkout funnels, automated WhatsApp order integrations, and high-frequency real-time inventory management.',
      points: [
        'Custom Storefronts & Shopify Plus',
        '1-Click Razorpay UPI & Stripe Connect',
        'Automated WhatsApp Order Dispatch',
        'Real-Time Inventory Synchronization'
      ],
      tags: ['Shopify Plus', 'Stripe', 'Razorpay', 'Next.js', 'GraphQL'],
    },
    {
      id: 'ui-ux-design',
      category: 'web',
      icon: Palette,
      badge: 'DESIGN',
      title: 'UI/UX Design Services',
      description: 'User-centric product architecture, user journeys, clickable interactive Figma prototypes, and complete enterprise design systems.',
      points: [
        'User Journey Mapping & Wireframing',
        'High-Fidelity Interactive Figma Mockups',
        'Scalable Reusable Design Tokens',
        'Design-to-Code Translation'
      ],
      tags: ['Figma', 'Design Systems', 'WCAG A11y', 'Tailwind', 'Prototyping'],
    },
    {
      id: 'cloud-devops',
      category: 'ai',
      icon: Cloud,
      badge: 'CLOUD',
      title: 'Cloud Architecture & DevOps',
      description: 'Scalable cloud infrastructure setup on AWS, zero-downtime CI/CD deployment pipelines, automated backups, and 24/7 telemetry monitoring.',
      points: [
        'AWS & Google Cloud Setup',
        'Docker & Kubernetes Containerization',
        'Zero-Downtime Blue-Green Deploys',
        'Proactive Security & SLA Monitoring'
      ],
      tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesList
    : servicesList.filter((s) => s.category === activeCategory);

  return (
    <section className="w-full py-8 sm:py-12" id="services">
      {/* Header with Tvisha Two-Tone Composition */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E5E5E5] gap-4">
        <SectionHeader
          tag="OUR CORE SERVICES"
          title="Mobile App & Custom"
          highlightedTitle="Software Solutions"
          description="We take your business idea from concept and architecture to production deployment, providing transparent communication, milestone delivery, and guaranteed performance."
        />

        {/* Category Filter Pills in Tvisha Style */}
        <div className="flex flex-wrap gap-1 p-1 bg-[#F5F5F7] rounded border border-[#E5E5E5] self-start md:self-end">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 font-narrow text-xs uppercase tracking-wider font-bold rounded transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#FDB345] text-white shadow-xs'
                  : 'text-[#575C62] hover:text-[#333333]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid with 3D Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const IconComp = service.icon;
          return (
            <TiltCard key={service.id} maxTilt={6} scale={1.01} className="h-full">
              <div className="bg-white rounded border border-[#E5E5E5] p-6 sm:p-7 shadow-xs hover:border-[#FDB345] hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded bg-[#FFF8EE] border border-[#FDB345]/30 text-[#FDB345] flex items-center justify-center group-hover:bg-[#FDB345] group-hover:text-white transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="font-narrow text-[11px] font-bold uppercase tracking-wider text-[#F69B2E] bg-[#FFF8EE] px-2.5 py-0.5 rounded border border-[#FDB345]/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-slab text-xl font-bold text-[#333333] mb-2.5 group-hover:text-[#FDB345] transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Bullet Points with Yellow Checks */}
                  <ul className="space-y-2 mb-6">
                    {service.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-medium text-[#333333]">
                        <Check className="w-4 h-4 text-[#FDB345] mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Tech Tags & Quote Trigger */}
                <div className="pt-4 border-t border-[#E5E5E5]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-[#F5F5F7] border border-[#DADBDD] text-[#575C62] font-narrow text-[11px] font-bold uppercase rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onSelectService}
                    className="w-full flex items-center justify-between text-xs sm:text-sm font-narrow uppercase tracking-wider font-bold text-[#FDB345] hover:text-[#F69B2E] py-2 group/btn cursor-pointer"
                  >
                    <span>Request Project Estimate</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
