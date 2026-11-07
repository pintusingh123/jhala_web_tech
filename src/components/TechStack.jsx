'use client';

import { useState } from 'react';
import { Smartphone, Laptop, Server, Database, Cloud } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';

export default function TechStack() {
  const [activeGroup, setActiveGroup] = useState('mobile');

  const groups = [
    { id: 'mobile', label: 'Mobile (React Native)', icon: Smartphone },
    { id: 'frontend', label: 'Frontend & SPAs', icon: Laptop },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'database', label: 'Database & Real-time', icon: Database },
    { id: 'cloud', label: 'DevOps & Deployment', icon: Cloud },
  ];

  const stackData = {
    mobile: [
      { name: 'React Native', role: 'Primary cross-platform framework for iOS & Android', tag: 'Core Mobile' },
      { name: 'React Native CLI & Expo', role: 'Rapid development, device testing & build toolchain', tag: 'Toolchain' },
      { name: 'Firebase Mobile SDK', role: 'Push notifications, crashlytics & offline cache sync', tag: 'Cloud' },
      { name: 'Razorpay UPI Mobile SDK', role: 'Native UPI, card, and netbanking checkout inside mobile apps', tag: 'Payments' },
      { name: 'Google Play Console', role: 'AAB build signing, internal testing & live store deployment', tag: 'Release' },
      { name: 'Apple App Store / TestFlight', role: 'iOS bundle submission & TestFlight beta distribution', tag: 'Release' },
    ],
    frontend: [
      { name: 'React.js SPAs', role: 'Dynamic Single Page Applications with fast client routing', tag: 'Core' },
      { name: 'Next.js 15', role: 'Server-side rendering (SSR), edge caching & optimal SEO', tag: 'Core' },
      { name: 'HTML5, CSS3 & JavaScript', role: 'Semantic markup, accessible structures adhering to WCAG', tag: 'Foundation' },
      { name: 'Tailwind CSS v4', role: 'Utility-first modern styling with zero runtime bloat', tag: 'Styling' },
      { name: 'TypeScript', role: 'Strict static type contracts across frontend and API layers', tag: 'Type Safety' },
      { name: 'Vite', role: 'Sub-second Hot Module Replacement and production bundling', tag: 'Bundler' },
    ],
    backend: [
      { name: 'Node.js & Express', role: 'Event-driven high-concurrency microservices and REST APIs', tag: 'Core' },
      { name: 'Django (Python)', role: 'Robust enterprise Python framework with ORM & admin dashboard', tag: 'Core' },
      { name: 'Firebase Cloud Functions', role: 'Serverless backend logic, webhooks, and background jobs', tag: 'Serverless' },
      { name: 'Custom CRM Architecture', role: 'Lead pipelines, user roles, audit trails & permissions', tag: 'Custom CRM' },
      { name: 'Custom CMS Systems', role: 'Dynamic content editing portals for blogs & catalogs', tag: 'Custom CMS' },
      { name: 'WebSockets', role: 'Live bidirectional streaming for real-time tracking & chat', tag: 'Real-time' },
    ],
    database: [
      { name: 'PostgreSQL', role: 'ACID-compliant relational database for transactional integrity', tag: 'Primary SQL' },
      { name: 'Firebase Firestore', role: 'Document database with real-time multi-device synchronization', tag: 'Real-time NoSQL' },
      { name: 'MongoDB', role: 'High-throughput document store for flexible schema needs', tag: 'NoSQL' },
      { name: 'Redis', role: 'In-memory caching and session store for sub-5ms responses', tag: 'Cache' },
    ],
    cloud: [
      { name: 'Vercel Edge', role: 'Global edge deployment with automated CI/CD previews', tag: 'Web Hosting' },
      { name: 'AWS (EC2, S3, RDS)', role: 'Scalable cloud computing, asset buckets, and database hosting', tag: 'Cloud' },
      { name: 'Docker Containers', role: 'Isolated reproducible runtime environments for zero-drift deploys', tag: 'DevOps' },
      { name: 'GitHub Actions', role: 'Automated test runners, linting checks, and staging pipelines', tag: 'CI/CD' },
    ],
  };

  return (
    <Section
      id="tech-stack"
      eyebrow="TECHNOLOGIES WE MASTER"
      title="Battle-tested, modern engineering"
      highlightWord="frameworks."
      subtitle="We choose frameworks with strong long-term maintenance records, zero proprietary vendor traps, and high community support."
    >
      {/* Category Tab Switcher */}
      <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-xl border border-subtle bg-surface w-fit">
        {groups.map((g) => {
          const Icon = g.icon;
          const isActive = activeGroup === g.id;

          return (
            <button
              type="button"
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-head text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#FF6B2C] text-white shadow-2xs'
                  : 'text-muted hover:text-primary hover:bg-surface-2'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{g.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tech Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {stackData[activeGroup].map((tech) => (
          <Card
            key={tech.name}
            className="p-5 bg-surface hover:border-[#FF6B2C]/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-2 mb-2">
                <h4 className="font-head text-base sm:text-lg font-bold text-primary">
                  {tech.name}
                </h4>
                <Badge variant="neutral" size="sm">
                  {tech.tag}
                </Badge>
              </div>

              <p className="font-body text-xs text-muted leading-relaxed">
                {tech.role}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
