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
      { name: 'React Native', role: 'One codebase for both Android and iPhone (iOS)', tag: 'Core Mobile' },
      { name: 'React Native CLI & Expo', role: 'Fast app building, smooth animations & real-device testing', tag: 'Toolchain' },
      { name: 'Firebase Mobile SDK', role: 'Instant push notifications and automatic offline sync', tag: 'Cloud' },
      { name: 'UPI & Payment Gateways', role: 'Direct PhonePe, Google Pay, Paytm & card payments in app', tag: 'Payments' },
      { name: 'Google Play Store', role: 'Complete testing and publishing support on Android Play Store', tag: 'Release' },
      { name: 'Apple App Store', role: 'iOS publishing and TestFlight preview distribution', tag: 'Release' },
    ],
    frontend: [
      { name: 'React.js', role: 'Fast, interactive web applications with instant page transitions', tag: 'Core Web' },
      { name: 'Next.js 15', role: 'Top Google search ranking (SEO) and lightning-fast loading', tag: 'Core Web' },
      { name: 'HTML5 & CSS3', role: 'Clean, standard web code that looks great on every screen', tag: 'Foundation' },
      { name: 'Tailwind CSS', role: 'Modern, clean styling without bloated files or slow speeds', tag: 'Styling' },
      { name: 'JavaScript & TypeScript', role: 'Error-free, reliable code quality for smooth operations', tag: 'Reliability' },
      { name: 'Modern Build Tools', role: 'Optimized files so customer websites load in under 1 second', tag: 'Performance' },
    ],
    backend: [
      { name: 'Node.js & Express', role: 'High-speed servers that can handle thousands of users smoothly', tag: 'Server' },
      { name: 'Python & Django', role: 'Rock-solid security, powerful admin dashboards, and database controls', tag: 'Server' },
      { name: 'Firebase Cloud Functions', role: 'Automatic background tasks, email alerts, and webhook sync', tag: 'Cloud Tasks' },
      { name: 'Custom CRM Architecture', role: 'Lead management, customer orders, staff permissions & billing', tag: 'Custom CRM' },
      { name: 'Admin Dashboards (CMS)', role: 'Easy photo upload, product editing, and rate changing from phone', tag: 'Admin Panel' },
      { name: 'Live WebSockets', role: 'Real-time order status tracking and instant chat updates', tag: 'Live Updates' },
    ],
    database: [
      { name: 'PostgreSQL', role: 'Ultra-safe, tamper-proof database for payment and customer orders', tag: 'Secure SQL' },
      { name: 'Firebase Firestore', role: 'Real-time database that instantly syncs between app and website', tag: 'Real-Time' },
      { name: 'MongoDB', role: 'Fast and flexible database for products, users, and catalogs', tag: 'Database' },
      { name: 'Redis Cache', role: 'High-speed caching memory so popular pages open in milliseconds', tag: 'Speed Cache' },
    ],
    cloud: [
      { name: 'Vercel Edge Hosting', role: 'Fast global hosting ensuring your website opens instantly anywhere', tag: 'Fast Hosting' },
      { name: 'AWS Cloud Hosting', role: 'Safe cloud servers, unlimited media storage, and automatic backups', tag: 'Cloud' },
      { name: 'Docker Containers', role: 'Safe isolated server environment ensuring 99.9% uptime', tag: 'Uptime' },
      { name: 'Automated Quality Checks', role: 'Automatic testing before every release to prevent bugs', tag: 'Zero Bugs' },
    ],
  };

  return (
    <Section
      id="tech-stack"
      eyebrow="TECHNOLOGIES WE MASTER"
      title="Reliable, industry-standard modern"
      highlightWord="technologies."
      subtitle="We choose proven, world-class technologies that keep your website and app fast, secure, and easy to maintain."
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
