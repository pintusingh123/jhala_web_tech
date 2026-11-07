'use client';

import { ArrowRight, ChevronRight, ShieldCheck, Zap, Users } from 'lucide-react';
import Button from './ui/Button';
import Eyebrow from './ui/Eyebrow';
import DeviceMockup from './ui/DeviceMockup';
import Container from './ui/Container';
import WhatsAppIcon from './WhatsAppIcon';
import { company } from '../content/company';

export default function Hero({ onExploreWork }) {
  const whatsappUrl = `https://wa.me/91${company.phones.whatsappPintu}?text=${encodeURIComponent(
    'Hello JhalaWebTech! I visited your website and would like to discuss a website / React Native app / CRM project.'
  )}`;

  return (
    <section className="w-full pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Strong Typography & Concrete Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Section Eyebrow (Section 4.C & 7) */}
            <Eyebrow>WEB &bull; REACT NATIVE &bull; CRM &bull; CLOUD</Eyebrow>

            {/* Specific H1 Headline (Section 4.C: Outcome + Speed) */}
            <h1 className="font-head text-3xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-primary leading-[1.12] mb-5">
              Websites and mobile apps that{' '}
              <span className="text-[#FF6B2C] inline-block">
                turn visitors into customers.
              </span>
            </h1>

            {/* 1–2 Line Subtitle (Section 4.C) */}
            <p className="font-body text-base sm:text-lg text-muted leading-relaxed max-w-2xl mb-8">
              Custom web &amp; React Native app development for startups and growing businesses. Clear fixed-price quotes, weekly live demos, launch in 4 to 6 weeks.
            </p>

            {/* CTAs: Primary "Get a free quote" · Secondary "See our work" */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full mb-8">
              <Button
                variant="primary"
                size="lg"
                to="/contact"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto text-center"
              >
                Get a free quote
              </Button>

              <Button
                variant="secondary"
                size="lg"
                to="/work"
                onClick={onExploreWork}
                icon={ChevronRight}
                iconPosition="right"
                className="w-full sm:w-auto text-center"
              >
                See our work
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp consultation"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-semibold font-head text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Micro-Trust Strip Under CTAs (Section 4.C & 7) */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full pt-6 border-t border-subtle">
              <div className="flex items-center gap-2 font-mono text-xs text-muted">
                <ShieldCheck className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-muted">
                <Zap className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <span>Weekly Live Demos</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-muted xs:col-span-2 sm:col-span-1">
                <Users className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <span>Direct Developer Access</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Real Device Mockup Stack (Laptop + Phone) */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <DeviceMockup />
          </div>

        </div>
      </Container>
    </section>
  );
}
