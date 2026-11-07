import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TerminalHeader({ label }) {
  const formatLabel = (str) => {
    if (!str) return 'Overview';
    return str
      .replace(/_/g, ' ')
      .replace(/SYS\./g, '')
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const readable = formatLabel(label);

  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-3 pt-2 pb-4 mb-2 border-b border-[#E5E5E5]">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#575C62]">
        <Link to="/" className="hover:text-[#FDB345] flex items-center gap-1 transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-[#DADBDD]" />
        <span className="text-[#333333] font-semibold">{readable}</span>
      </nav>

      {/* Status Pill in Tvisha Yellow */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFF8EE] border border-[#FDB345]/50 text-[#333333] text-xs font-semibold">
        <span className="w-2 h-2 rounded-full bg-[#FDB345] animate-pulse" />
        <span className="font-narrow uppercase tracking-wider text-[11px] font-bold text-[#F69B2E]">
          Ready to Build • Free Technical Estimate
        </span>
      </div>
    </div>
  );
}
