import WhatsAppIcon from '../WhatsAppIcon';
import { company } from '../../content/company';

export default function WhatsAppFab() {
  const whatsappUrl = `https://wa.me/91${company.phones.whatsappPintu}?text=${encodeURIComponent(
    'Hello JhalaWebTech! I would like to discuss building a website / mobile app project.'
  )}`;

  return (
    <aside
      aria-label="Direct WhatsApp consultation"
      className="hidden sm:block fixed bottom-6 right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with our lead developer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-[transform,background-color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-3"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        
        {/* Tooltip on Desktop hover */}
        <span className="hidden lg:group-hover:flex absolute right-16 px-3 py-1.5 rounded-md bg-surface text-primary text-xs font-head font-medium whitespace-nowrap shadow-md border border-subtle items-center gap-1.5 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Chat on WhatsApp</span>
        </span>
      </a>
    </aside>
  );
}
