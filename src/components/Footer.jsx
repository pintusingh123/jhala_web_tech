'use client';

import Link from 'next/link';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import Container from './ui/Container';
import WhatsAppIcon from './WhatsAppIcon';
import Logo from './Logo';
import { company } from '../content/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface border-t border-subtle pt-14 pb-8 sm:pt-16 sm:pb-10 font-body text-muted text-xs sm:text-sm">
      <Container>
        {/* 4 Columns Grid (Section 4.Q) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-subtle">
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="mb-3 group w-fit block" aria-label="JhalaWebTech Home">
              <Logo size="sm" />
            </Link>

            <p className="font-body text-xs text-muted leading-relaxed mb-5 max-w-sm">
              Web and React Native mobile app development agency based in Rajasthan, India. We build fast, reliable websites and apps with transparent pricing and direct developer support.
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href={company.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="w-8 h-8 rounded-lg border border-subtle bg-surface-2 flex items-center justify-center text-primary hover:text-[#FF6B2C] hover:border-[#FF6B2C] transition-colors"
              >
                <span className="font-mono text-xs font-bold">GH</span>
              </a>

              <a
                href={`https://wa.me/91${company.phones.whatsappPintu}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp Chat"
                className="w-8 h-8 rounded-lg border border-subtle bg-surface-2 flex items-center justify-center text-[#25D366] hover:border-[#25D366] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>

              <span className="font-mono text-[11px] text-muted">
                Rajasthan &bull; Global Delivery
              </span>
            </div>
          </div>

          {/* Column 2: Services (3 cols) */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase font-bold text-primary tracking-wider block mb-4">
              What We Build
            </span>
            <ul className="space-y-2.5 text-xs font-body">
              <li>
                <Link href="/services" className="hover:text-[#FF6B2C] transition-colors">
                  React Native Mobile Apps (iOS &amp; Android)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF6B2C] transition-colors">
                  Website Design &amp; React.js SPAs
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF6B2C] transition-colors">
                  Next.js 15 E-Commerce Storefronts
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF6B2C] transition-colors">
                  Custom CRM Platforms &amp; Dashboards
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF6B2C] transition-colors">
                  Node.js &amp; Django (Python) Backends
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF6B2C] transition-colors">
                  Firebase Real-Time DB &amp; Auth
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Process (2 cols) */}
          <div className="lg:col-span-2">
            <span className="font-mono text-xs uppercase font-bold text-primary tracking-wider block mb-4">
              Company
            </span>
            <ul className="space-y-2.5 text-xs font-body">
              <li>
                <Link href="/work" className="hover:text-[#FF6B2C] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-[#FF6B2C] transition-colors">
                  5-Step Process
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#FF6B2C] transition-colors">
                  Pricing &amp; Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF6B2C] transition-colors">
                  About Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF6B2C] transition-colors">
                  Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase font-bold text-primary tracking-wider block mb-4">
              Get in Touch
            </span>
            <ul className="space-y-3 text-xs font-mono">
              <li>
                <a
                  href={`tel:+91${company.phones.callingRaw}`}
                  className="flex items-center gap-2 hover:text-[#FF6B2C] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF6B2C] shrink-0" />
                  <span>{company.phones.calling}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/91${company.phones.whatsappPintu}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-[#25D366] shrink-0" />
                  <span>WhatsApp: +91 {company.phones.whatsappPintu}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 hover:text-[#FF6B2C] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF6B2C] shrink-0" />
                  <span className="truncate">{company.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B2C] shrink-0 mt-0.5" />
                <span>Rajasthan, India &bull; {company.timezone}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center sm:text-left">
            <span>&copy; {currentYear} {company.legalName}. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center gap-1.5 text-muted hover:text-[#FF6B2C] transition-colors cursor-pointer p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
