import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER = '8003642596';
const CALLING_NUMBER = '8441992003';

export default function Footer() {
  return (
    <footer className="bg-[#191D29] text-slate-300 w-full mt-16 border-t border-white/10 font-sans-body">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-2.5 mb-4 group inline-flex">
                <div className="w-9 h-9 rounded bg-[#FDB345] flex items-center justify-center text-white font-slab font-bold text-lg shadow-xs">
                  J
                </div>
                <span className="font-slab text-2xl font-bold text-white tracking-tight group-hover:text-[#FDB345] transition-colors">
                  JhalaWebTech
                </span>
              </Link>

              <p className="font-sans-body text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
                Mobile app and custom software development company. We engineer high-performance iOS &amp; Android applications, custom enterprise platforms, and scalable web solutions for growing businesses.
              </p>

              {/* Direct Hotlines in Tvisha Style */}
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={`tel:+91${CALLING_NUMBER}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 hover:bg-[#FDB345] hover:text-[#191D29] text-white rounded text-xs font-narrow font-bold uppercase tracking-wider border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FDB345]" />
                  <span>Call: +91 {CALLING_NUMBER}</span>
                </a>

                <a
                  href={`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello JhalaWebTech! I want to discuss a new software/app project.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] rounded text-xs font-narrow font-bold uppercase tracking-wider border border-[#25D366]/40 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] fill-current" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="font-narrow text-xs font-bold uppercase tracking-widest text-[#FDB345] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-sans-body">
              <li>
                <Link to="/services" className="hover:text-[#FDB345] transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FDB345] transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FDB345] transition-colors">
                  Website Design and Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FDB345] transition-colors">
                  AI &amp; Machine Learning Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FDB345] transition-colors">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FDB345] transition-colors">
                  UI/UX Design Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-narrow text-xs font-bold uppercase tracking-widest text-[#FDB345] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-sans-body">
              <li>
                <Link to="/about" className="hover:text-[#FDB345] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#FDB345] transition-colors">
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#FDB345] transition-colors">
                  How We Develop
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#FDB345] transition-colors">
                  Tech Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors font-bold text-[#FDB345]">
                  Get Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Office & Guarantees */}
          <div>
            <h4 className="font-narrow text-xs font-bold uppercase tracking-widest text-[#FDB345] mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-slate-400 font-sans-body">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FDB345] mt-0.5 shrink-0" />
                <span>Rajasthan, India (Delivering Worldwide)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FDB345] shrink-0" />
                <a href="mailto:contact@jhalawebtech.com" className="hover:text-white transition-colors">
                  contact@jhalawebtech.com
                </a>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-[#FDB345] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-narrow text-xs font-bold uppercase tracking-wider">
                  100% On-Time Delivery Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 bg-[#14161F] -mx-4 sm:-mx-6 lg:-mx-10 -mb-12 p-6 mt-6">
          <div>
            © {new Date().getFullYear()} JhalaWebTech (JWT). All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-narrow uppercase tracking-wider font-bold">
            <Link to="/services" className="hover:text-[#FDB345] transition-colors">
              Services
            </Link>
            <Link to="/work" className="hover:text-[#FDB345] transition-colors">
              Portfolio
            </Link>
            <Link to="/contact" className="hover:text-[#FDB345] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
