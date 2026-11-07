import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Send,
  CheckCircle2
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import TerminalHeader from '../components/TerminalHeader';
import SectionHeader from '../components/SectionHeader';
import FAQ from '../components/FAQ';
import { useNavigate } from 'react-router-dom';

const PINTU_WHATSAPP = '8003642596';
const ABHAY_WHATSAPP = '9509123636';
const CALLING_NUMBER = '8441992003';

export default function ContactPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Mobile App Development',
    budget: '₹1.5L – ₹5L',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleWhatsAppPintu = () => {
    const text = encodeURIComponent(
      'Hello Pintu! I visited JhalaWebTech and would like to discuss a custom software/app requirement.'
    );
    window.open(`https://wa.me/91${PINTU_WHATSAPP}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppAbhay = () => {
    const text = encodeURIComponent(
      'Hello Abhay! I visited JhalaWebTech and would like to connect with you regarding a software project.'
    );
    window.open(`https://wa.me/91${ABHAY_WHATSAPP}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const inquiryText = encodeURIComponent(
      `*New Project Inquiry via JhalaWebTech*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Service:* ${formData.serviceType}\n*Budget:* ${formData.budget}\n*Project Details:* ${formData.message}`
    );
    window.open(`https://wa.me/91${PINTU_WHATSAPP}?text=${inquiryText}`, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="CONTACT_AND_ESTIMATES" />

      {/* Main Page Header */}
      <SectionHeader
        tag="LET'S TALK BUSINESS"
        title="Start Your Project With"
        highlightedTitle="A Free Technical Estimate"
        description="Whether you need a full-scale mobile app, a custom enterprise software platform, or modern web architecture, we provide free technical scoping and fast estimates."
      />

      {/* Interactive Consultation Form + Direct Contact Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 cols): Consultation Form */}
        <div className="lg:col-span-7 bg-white rounded border border-[#E5E5E5] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-6">
            <div>
              <h3 className="font-slab text-xl sm:text-2xl font-bold text-[#333333]">
                Request a Free Quote
              </h3>
              <p className="font-sans-body text-xs text-[#575C62] mt-0.5">
                Guaranteed response within 2 business hours. NDA provided upon request.
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#FFF8EE] text-[#F69B2E] font-narrow text-xs font-bold uppercase tracking-wider border border-[#FDB345]/30">
              <span className="w-2 h-2 rounded-full bg-[#FDB345] animate-pulse" />
              <span>Available Now</span>
            </span>
          </div>

          {formSubmitted ? (
            <div className="bg-[#FFF8EE] border border-[#FDB345]/40 rounded p-6 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#FDB345] mx-auto mb-3" />
              <h4 className="font-slab text-lg font-bold text-[#333333] mb-1">
                Inquiry Forwarded Successfully!
              </h4>
              <p className="font-sans-body text-xs sm:text-sm text-[#575C62] max-w-md mx-auto mb-4">
                Your project brief has been routed to our Lead Architects on WhatsApp. We will review your requirements and respond shortly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-4 py-2 bg-[#FDB345] text-white rounded font-narrow text-xs font-bold uppercase tracking-wider hover:bg-[#F69B2E] transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-narrow text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 rounded border border-[#E5E5E5] text-sm focus:border-[#FDB345] focus:bg-white bg-[#F5F5F7] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-narrow text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 9876543210"
                    className="w-full px-3.5 py-2.5 rounded border border-[#E5E5E5] text-sm focus:border-[#FDB345] focus:bg-white bg-[#F5F5F7] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-narrow text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@company.com"
                    className="w-full px-3.5 py-2.5 rounded border border-[#E5E5E5] text-sm focus:border-[#FDB345] focus:bg-white bg-[#F5F5F7] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-narrow text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[#E5E5E5] text-sm focus:border-[#FDB345] focus:bg-white bg-[#F5F5F7] outline-none transition-colors"
                  >
                    <option value="Mobile App Development">Mobile App Development (iOS & Android)</option>
                    <option value="Custom Software Development">Custom Software Development / ERP</option>
                    <option value="Website Design & Development">Website Design & Development</option>
                    <option value="AI & Machine Learning Development">AI & Machine Learning Solutions</option>
                    <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                    <option value="UI/UX Design Services">UI/UX Design Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-narrow text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                  Estimated Budget Range
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['₹50k – ₹1.5L', '₹1.5L – ₹5L', '₹5L – ₹15L', 'Enterprise (₹15L+)'].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 px-2.5 font-narrow text-xs font-bold uppercase tracking-wider rounded border text-center transition-all cursor-pointer ${
                        formData.budget === b
                          ? 'bg-[#FDB345] border-[#FDB345] text-white shadow-2xs'
                          : 'bg-white border-[#E5E5E5] text-[#575C62] hover:bg-[#F5F5F7]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-narrow text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                  Project Scope &amp; Key Features
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your business goals, target platforms, timeline, or reference links..."
                  className="w-full px-3.5 py-2.5 rounded border border-[#E5E5E5] text-sm focus:border-[#FDB345] focus:bg-white bg-[#F5F5F7] outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#FDB345] hover:bg-[#F69B2E] text-white font-narrow text-sm font-bold uppercase tracking-wider rounded shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Submit &amp; Connect on WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Right Column (5 cols): Direct Contacts & Hotlines */}
        <div className="lg:col-span-5 space-y-4">
          {/* Card 1: Direct Hotline & Pintu Jhala */}
          <div className="bg-white rounded border border-[#E5E5E5] p-6 shadow-xs hover:border-[#FDB345] transition-all">
            <div className="flex justify-between items-start mb-3">
              <div className="w-10 h-10 rounded bg-[#FFF8EE] border border-[#FDB345]/30 text-[#FDB345] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-narrow text-[10px] font-bold uppercase tracking-wider text-[#F69B2E] bg-[#FFF8EE] px-2.5 py-0.5 rounded border border-[#FDB345]/30">
                Direct Call &amp; WhatsApp
              </span>
            </div>
            <span className="font-narrow text-xs font-bold text-[#575C62] uppercase tracking-wider block mb-1">
              Lead Architect // Pintu Jhala
            </span>
            <div className="font-slab text-xl sm:text-2xl font-bold text-[#333333] mb-1">
              +91 {CALLING_NUMBER}
            </div>
            <p className="font-sans-body text-xs text-[#575C62] mb-4">
              Direct technical scoping, sprint architecture, and full-stack feasibility consultations.
            </p>
            <div className="flex gap-2">
              <a
                href={`tel:+91${CALLING_NUMBER}`}
                className="flex-1 py-2 px-3 bg-[#F5F5F7] hover:bg-[#FFF8EE] text-[#333333] hover:text-[#F69B2E] font-narrow text-xs font-bold uppercase tracking-wider rounded text-center transition-colors flex items-center justify-center gap-1.5 border border-[#E5E5E5]"
              >
                <Phone className="w-3.5 h-3.5 text-[#FDB345]" />
                <span>Call Now</span>
              </a>
              <button
                onClick={handleWhatsAppPintu}
                className="flex-1 py-2 px-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] font-narrow text-xs font-bold uppercase tracking-wider rounded text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-[#25D366]/40"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-[#25D366]" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Card 2: Abhay Prajapati MERN Desk */}
          <div className="bg-white rounded border border-[#E5E5E5] p-6 shadow-xs hover:border-[#25D366] transition-all">
            <div className="flex justify-between items-start mb-3">
              <div className="w-10 h-10 rounded bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center">
                <WhatsAppIcon className="w-5 h-5 fill-current" />
              </div>
              <span className="font-narrow text-[10px] font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-2.5 py-0.5 rounded border border-[#25D366]/30">
                Online on WhatsApp
              </span>
            </div>
            <span className="font-narrow text-xs font-bold text-[#575C62] uppercase tracking-wider block mb-1">
              Software Engineer // Abhay Prajapati
            </span>
            <div className="font-slab text-xl sm:text-2xl font-bold text-[#333333] mb-1">
              +91 {ABHAY_WHATSAPP}
            </div>
            <p className="font-sans-body text-xs text-[#575C62] mb-4">
              Connect for React 19, Node.js, MERN stack web applications, and frontend UI requirements.
            </p>
            <button
              onClick={handleWhatsAppAbhay}
              className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-narrow text-xs font-bold uppercase tracking-wider rounded text-center transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>Chat with Abhay on WhatsApp</span>
            </button>
          </div>

          {/* Card 3: Email & Location Info */}
          <div className="bg-[#F5F5F7] rounded border border-[#E5E5E5] p-5 space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#FDB345] shrink-0" />
              <div>
                <span className="font-narrow text-[11px] font-bold text-[#575C62] uppercase tracking-wider block">Official Email</span>
                <a href="mailto:contact@jhalawebtech.com" className="text-xs font-semibold text-[#333333] hover:text-[#FDB345]">
                  contact@jhalawebtech.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2 border-t border-[#DADBDD]">
              <Clock className="w-4 h-4 text-[#FDB345] shrink-0" />
              <div>
                <span className="font-narrow text-[11px] font-bold text-[#575C62] uppercase tracking-wider block">Response Time</span>
                <span className="text-xs font-semibold text-[#333333]">Within 2 Business Hours</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2 border-t border-[#DADBDD]">
              <MapPin className="w-4 h-4 text-[#FDB345] shrink-0" />
              <div>
                <span className="font-narrow text-[11px] font-bold text-[#575C62] uppercase tracking-wider block">Offshore &amp; Global Delivery</span>
                <span className="text-xs font-semibold text-[#333333]">Rajasthan, India — Serving Clients Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQ onOpenContact={() => navigate('/contact')} />
    </div>
  );
}
