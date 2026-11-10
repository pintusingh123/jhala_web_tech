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

const serviceIndices = {
  'web-development': '01',
  'mobile-app-dev': '02',
  'crm-cms': '03',
  'backend-apis': '04',
  'ui-ux-design': '05',
  'maintenance-speed': '06',
};

export default function Services({ onSelectService }) {
  return (
    <Section
      id="services"
      eyebrow="OUR CORE CAPABILITIES"
      title="Websites and apps crafted to"
      highlightWord="grow your business."
      subtitle="From simple business websites to full online stores and mobile apps — transparent fixed pricing, live weekly updates on your phone, and direct developer support."
      headerRight={
        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-primary bg-surface border border-subtle px-3.5 py-1.5 rounded-xl shadow-2xs">
          <span className="text-[#FF6B2C] font-bold">Fixed Upfront Quotes</span>
          <span className="text-muted">&bull; Zero Hidden Costs</span>
        </div>
      }
    >
      <BentoGrid>
        {services.map((service) => {
          const Icon = iconMap[service.id] || Globe;
          const indexNum = serviceIndices[service.id] || '01';

          return (
            <BentoItem key={service.id} span={service.bentoSpan}>
              <Card
                variant="interactive"
                className="h-full flex flex-col justify-between group p-6 sm:p-8 hover:border-[#FF6B2C]/40 transition-all duration-300"
              >
                <div>
                  {/* Top Header: Index & Tags */}
                  <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-subtle">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-sm font-bold text-[#FF6B2C]">
                        {indexNum}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-muted/40" />
                      <div className="flex items-center gap-1.5 text-muted group-hover:text-primary transition-colors">
                        <Icon className="w-4 h-4 stroke-[1.75]" />
                        <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                          {service.id.replace(/-/g, ' ')}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {service.tags.slice(0, 2).map((t) => (
                        <Badge key={t} variant="neutral" size="sm" className="text-[10px] font-mono">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Title & Outcome */}
                  <h3 className="font-head text-xl sm:text-2xl font-bold text-primary group-hover:text-[#FF6B2C] transition-colors mb-2.5 leading-snug">
                    {service.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm font-semibold text-[#FF6B2C] mb-3">
                    {service.outcome}
                  </p>

                  <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Highlights Checkpoints */}
                  <ul className="space-y-2.5 mb-6">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-primary">
                        <Check className="w-4 h-4 text-[#3DD9B0] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-subtle flex items-center justify-between gap-2 min-w-0">
                  <div className="flex flex-wrap gap-1.5 min-w-0">
                    {service.tags.slice(2, 4).map((t, idx) => (
                      <span key={t} className={`font-mono text-[11px] text-muted truncate ${idx > 0 ? 'hidden xs:inline' : ''}`}>
                        #{t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    onClick={onSelectService}
                    className="inline-flex items-center gap-1.5 font-head text-xs sm:text-sm font-bold text-[#FF6B2C] hover:text-[#FF8452] transition-colors shrink-0 group-hover:translate-x-0.5"
                  >
                    <span>Discuss Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
