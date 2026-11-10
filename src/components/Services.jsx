import Link from 'next/link';
import { 
  Globe, 
  Smartphone, 
  Server, 
  Palette, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Check
} from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { BentoGrid, BentoItem } from './ui/BentoGrid';
import { services } from '../content/services';

const iconMap = {
  'web-development': Globe,
  'mobile-app-dev': Smartphone,
  'crm-cms': Layers,
  'backend-apis': Server,
  'ui-ux-design': Palette,
  'maintenance-speed': ShieldCheck,
};

export default function Services({ onSelectService }) {
  return (
    <Section
      id="services"
      eyebrow="WHAT WE BUILD FOR YOU"
      title="Websites and apps crafted to"
      highlightWord="grow your business."
      subtitle="From simple business websites to full online stores and mobile apps — transparent fixed pricing, live weekly updates on your phone, and direct developer support."
    >
      <BentoGrid>
        {services.map((service) => {
          const Icon = iconMap[service.id] || Globe;

          return (
            <BentoItem key={service.id} span={service.bentoSpan}>
              <Card
                variant="interactive"
                className="h-full flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header: Icon & Tags */}
                  <div className="flex items-start justify-between gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-surface-2 border border-subtle text-[#FF6B2C] flex items-center justify-center group-hover:bg-[#FF6B2C] group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                    </div>

                    <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-end">
                      {service.tags.slice(0, 2).map((t) => (
                        <Badge key={t} variant="neutral" size="sm" className="text-[10px] sm:text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Title & Outcome */}
                  <h3 className="font-head text-lg sm:text-2xl font-bold text-primary group-hover:text-[#FF6B2C] transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm font-semibold text-[#FF6B2C] mb-2 sm:mb-3">
                    {service.outcome}
                  </p>

                  <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-5 sm:mb-6">
                    {service.desc}
                  </p>

                  {/* Highlights Checkpoints */}
                  <ul className="space-y-2 mb-5 sm:mb-6">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs font-body text-primary">
                        <Check className="w-3.5 h-3.5 text-[#3DD9B0] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-3.5 sm:pt-4 border-t border-subtle flex items-center justify-between gap-2 min-w-0">
                  <div className="flex flex-wrap gap-1 min-w-0">
                    {service.tags.slice(2, 4).map((t, idx) => (
                      <span key={t} className={`font-mono text-[10px] text-muted truncate ${idx > 0 ? 'hidden xs:inline' : ''}`}>
                        #{t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    onClick={onSelectService}
                    className="inline-flex items-center gap-1 font-head text-xs sm:text-sm font-bold text-[#FF6B2C] hover:text-[#FF8452] transition-colors shrink-0"
                  >
                    <span>Request Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </BentoItem>
          );
        })}
      </BentoGrid>
    </Section>
  );
}
