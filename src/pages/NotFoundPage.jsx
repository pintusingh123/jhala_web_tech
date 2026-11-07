import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';
import TerminalHeader from '../components/TerminalHeader';

export default function NotFoundPage() {
  return (
    <div className="gsap-fade-in flex flex-col gap-8 items-center justify-center py-16 text-center">
      <TerminalHeader label="PAGE_NOT_FOUND" />

      <div className="bg-white rounded border border-[#E5E5E5] p-8 md:p-12 max-w-lg shadow-lg flex flex-col items-center">
        <div className="w-16 h-16 rounded bg-[#FFF8EE] border border-[#FDB345]/30 flex items-center justify-center text-[#FDB345] mb-6 shadow-xs">
          <AlertCircle className="w-8 h-8" />
        </div>

        <span className="font-narrow text-xs font-bold uppercase tracking-wider text-[#F69B2E] bg-[#FFF8EE] px-3 py-1 rounded border border-[#FDB345]/30 mb-3">
          Error 404 — Page Not Found
        </span>

        <h1 className="font-slab text-3xl sm:text-4xl font-bold text-[#333333] mb-3">
          Page Does Not Exist
        </h1>

        <p className="font-sans-body text-sm text-[#575C62] max-w-sm mb-8 leading-relaxed">
          The page or resource you are looking for has been moved, renamed, or is currently unavailable.
        </p>

        <Link
          to="/"
          className="bg-[#FDB345] hover:bg-[#F69B2E] text-white px-7 py-3 rounded font-narrow text-sm font-bold uppercase tracking-wider transition-all shadow-xs active:scale-95 flex items-center gap-2 cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
