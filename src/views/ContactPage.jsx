'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import Container from '../components/ui/Container';
import Eyebrow from '../components/ui/Eyebrow';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import WhatsAppIcon from '../components/WhatsAppIcon';
import FAQ from '../components/FAQ';
import { company } from '../content/company';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'React Native Mobile App',
    budget: '₹45k – ₹1.2L',
    message: '',
    honeypot: '', // spam prevention trap
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // bot detected

    const formattedMessage = `*New Project Inquiry via JhalaWebTech Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*Budget Range:* ${formData.budget}\n` +
      `*Message:* ${formData.message || 'None provided'}`;

    const encoded = encodeURIComponent(formattedMessage);
    window.open(`https://wa.me/91${company.phones.whatsappPintu}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <div className="w-full py-10 sm:py-16">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Eyebrow>START YOUR PROJECT</Eyebrow>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-[1.15] mb-4">
            Get a fixed-price technical quote{' '}
            <span className="text-[#FF6B2C]">in 24 hours.</span>
          </h1>
          <p className="font-body text-base text-muted leading-relaxed">
            Tell us what you want to build. We will review your requirements, assess technical feasibility, and send a detailed milestone estimate. No spam, no sales push.
          </p>
        </div>

        {/* 2-Column Form & Direct Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 bg-surface">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#3DD9B0]/15 text-[#3DD9B0] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-head text-2xl font-bold text-primary">
                    Inquiry Routed to Lead Developer!
                  </h3>
                  <p className="font-body text-sm text-muted max-w-md mx-auto">
                    Your project details have been forwarded directly to our Lead Architect on WhatsApp. We typically respond within 2 to 4 business hours.
                  </p>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field (hidden for users, bots fill it) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_url"
                      tabIndex={-1}
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block font-mono text-xs uppercase font-bold text-primary mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full px-4 py-3 rounded-lg border border-subtle bg-surface-2 text-primary font-body text-sm focus:border-[#FF6B2C] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block font-mono text-xs uppercase font-bold text-primary mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg border border-subtle bg-surface-2 text-primary font-body text-sm focus:border-[#FF6B2C] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block font-mono text-xs uppercase font-bold text-primary mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-subtle bg-surface-2 text-primary font-body text-sm focus:border-[#FF6B2C] outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-project-type" className="block font-mono text-xs uppercase font-bold text-primary mb-1.5">
                        Project Type *
                      </label>
                      <select
                        id="contact-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-subtle bg-surface-2 text-primary font-body text-sm focus:border-[#FF6B2C] outline-none transition-colors cursor-pointer"
                      >
                        <option value="React Native Mobile App">React Native Mobile App (iOS &amp; Android)</option>
                        <option value="Website / Web App Development">Website / Single Page App (React/Next.js)</option>
                        <option value="E-Commerce Storefront">E-Commerce Storefront &amp; Payments</option>
                        <option value="Custom CRM / CMS Platform">Custom CRM / CMS Software Platform</option>
                        <option value="Backend APIs & Node/Django">Backend APIs (Node.js / Django / Firebase)</option>
                        <option value="UI/UX Product Design">UI/UX Design &amp; Figma Prototype</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-budget" className="block font-mono text-xs uppercase font-bold text-primary mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        id="contact-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-subtle bg-surface-2 text-primary font-body text-sm focus:border-[#FF6B2C] outline-none transition-colors cursor-pointer"
                      >
                        <option value="₹18k – ₹45k (Starter Website)">₹18,000 – ₹45,000 (Starter)</option>
                        <option value="₹45k – ₹1.2L (Business Web/App)">₹45,000 – ₹1,20,000 (Business)</option>
                        <option value="₹1.2L – ₹3L (Custom App/CRM)">₹1,20,000 – ₹3,00,000 (Custom Platform)</option>
                        <option value="₹3L+ (Enterprise Architecture)">₹3,00,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block font-mono text-xs uppercase font-bold text-primary mb-1.5">
                      Project Details &bull; What are you building?
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your project, desired features, timeline, or any reference websites/apps..."
                      className="w-full px-4 py-3 rounded-lg border border-subtle bg-surface-2 text-primary font-body text-sm focus:border-[#FF6B2C] outline-none transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    icon={Send}
                  >
                    Send Inquiry &amp; Open WhatsApp Chat
                  </Button>

                  <div className="flex items-center justify-center gap-2 font-mono text-[11px] text-muted text-center pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3DD9B0]" />
                    <span>NDA available upon request &bull; No spam guaranteed</span>
                  </div>
                </form>
              )}
            </Card>
          </div>

          {/* Direct Contact Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-surface border border-subtle">
              <span className="font-mono text-xs uppercase font-bold text-[#FF6B2C] tracking-wider block mb-2">
                FAST TRACK CONSULTATION
              </span>
              <h3 className="font-head text-xl font-bold text-primary mb-3">
                Need an immediate answer?
              </h3>
              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-6">
                Our lead developers Pintu and Abhay are accessible directly via WhatsApp for quick architectural questions and project feasibility checks.
              </p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/91${company.phones.whatsappPintu}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                    <div>
                      <span className="font-head text-sm font-bold block">Chat with Pintu Jhala</span>
                      <span className="font-mono text-[10px] text-muted">Principal Software Architect</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold uppercase">&rarr;</span>
                </a>

                <a
                  href={`https://wa.me/91${company.phones.whatsappAbhay}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                    <div>
                      <span className="font-head text-sm font-bold block">Chat with Abhay Prajapati</span>
                      <span className="font-mono text-[10px] text-muted">Lead Full-Stack Engineer</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold uppercase">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Office & Details Card */}
            <div className="p-6 rounded-2xl bg-surface border border-subtle space-y-4">
              <span className="font-mono text-xs uppercase font-bold text-primary tracking-wider block">
                Office &amp; Communication Details
              </span>

              <div className="space-y-3 font-mono text-xs text-muted">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FF6B2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-body">Location</strong>
                    <span>Rajasthan, India (Serving Global Clients)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#FF6B2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-body">Working Hours</strong>
                    <span>Mon – Sat: 9:00 AM – 8:00 PM ({company.timezone})</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#FF6B2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-body">Direct Hotline</strong>
                    <a href={`tel:+91${company.phones.callingRaw}`} className="text-primary hover:text-[#FF6B2C]">
                      {company.phones.calling}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#FF6B2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-body">Email</strong>
                    <a href={`mailto:${company.email}`} className="text-primary hover:text-[#FF6B2C]">
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />
      </Container>
    </div>
  );
}
