import { Phone } from 'lucide-react';
import WhatsAppIcon from '../WhatsAppIcon';
import { company } from '../../content/company';

export default function WhatsAppFab() {
  const callingNumber = '8441992003';
  const whatsappUrl = `https://wa.me/91${company.phones.whatsappPintu}?text=${encodeURIComponent(
    'Hello JhalaWebTech! I visited your website and would like to discuss building a website / mobile app project.'
  )}`;

  return (
    <aside
      aria-label="Direct Call and WhatsApp consultation"
      className="fixed bottom-[74px] right-3.5 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2.5 items-end select-none"
    >
      {/* 1. Direct Calling Button (Calling number: 8441992003) */}
      <a
        href={`tel:+91${callingNumber}`}
        aria-label="Direct Phone Call to 8441992003"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 bg-[#FF6B2C] hover:bg-[#FF8452] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-[transform,background-color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-[#FF6B2C] focus-visible:outline-offset-3"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />

        {/* Tooltip on Desktop hover */}
        <span className="hidden lg:group-hover:flex absolute right-16 px-3 py-1.5 rounded-md bg-surface text-primary text-xs font-head font-medium whitespace-nowrap shadow-md border border-subtle items-center gap-1.5 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#FF6B2C] animate-pulse" />
          <span>Call: +91 {callingNumber}</span>
        </span>
      </a>

      {/* 2. Direct WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with our lead developer"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-[transform,background-color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-3"
      >
        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />

        {/* Tooltip on Desktop hover */}
        <span className="hidden lg:group-hover:flex absolute right-16 px-3 py-1.5 rounded-md bg-surface text-primary text-xs font-head font-medium whitespace-nowrap shadow-md border border-subtle items-center gap-1.5 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Chat on WhatsApp</span>
        </span>
      </a>
    </aside>
  );
}
