import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

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
    <div className="w-full flex flex-wrap items-center justify-between gap-3 pt-4 pb-4 mb-2 border-b border-subtle">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-muted">
        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-muted/60" />
        <span className="text-primary font-semibold">{readable}</span>
      </nav>

      {/* Status Pill in Signal Orange / Success Green */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-subtle text-primary font-mono text-xs">
        <span className="w-2 h-2 rounded-full bg-[#3DD9B0] animate-pulse" />
        <span className="text-[11px] font-semibold text-muted">
          Ready to Build &bull; Free Tech Estimate
        </span>
      </div>
    </div>
  );
}
