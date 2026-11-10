import { Phone, Mail, ArrowRight } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';
import WhatsAppIcon from './WhatsAppIcon';
import { company } from '../content/company';

export default function CtaBand() {
  const whatsappUrl = `https://wa.me/91${company.phones.whatsappPintu}?text=${encodeURIComponent(
    'Hello JhalaWebTech! I have a project requirement and would like to discuss a free technical estimate.'
  )}`;

  return (
    <section className="w-full py-10 sm:py-12 lg:py-14 bg-surface border-t border-subtle relative overflow-hidden">
      {/* Subtle grid line texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,107,44,0.08)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase font-bold text-[#FF6B2C] tracking-widest block mb-3">
            START YOUR PROJECT
          </span>

          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-[1.15] mb-4">
            Have a project in mind? Let's talk.
          </h2>

          <p className="font-body text-sm sm:text-base text-muted leading-relaxed mb-8 max-w-xl mx-auto">
            Get a clear, fixed-price proposal and timeline within 24 hours. Free consultation with direct developer guidance and zero obligation.
          </p>

          {/* Primary Action Button Cluster */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
            <Button
              variant="primary"
              size="lg"
              to="/contact"
              icon={ArrowRight}
              className="w-full sm:w-auto text-center"
            >
              Get a free quote in 24 hours
            </Button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-head text-base font-semibold shadow-xs transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Direct Contacts Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-subtle font-mono text-xs text-muted">
            <a
              href={`tel:+91${company.phones.callingRaw}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6B2C]" />
              <span>{company.phones.calling}</span>
            </a>

            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF6B2C]" />
              <span>{company.email}</span>
            </a>

            <span className="text-muted">
              📍 {company.location}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
