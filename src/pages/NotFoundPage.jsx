import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, AlertTriangle, ArrowLeft } from 'lucide-react';
import TerminalHeader from '../components/TerminalHeader';

export default function NotFoundPage() {
  return (
    <div className="gsap-fade-in flex flex-col gap-10 items-center justify-center py-16 text-center">
      <TerminalHeader label="ERROR_404 // ROUTE_NOT_FOUND" />

      <div className="bg-[#0E0E0E] brutalist-border-active p-8 md:p-12 max-w-xl shadow-[8px_8px_0px_0px_#C8FF3D] flex flex-col items-center">
        <div className="w-16 h-16 bg-[#1A1A1A] brutalist-border-active flex items-center justify-center text-[#C8FF3D] mb-6 shadow-[4px_4px_0px_0px_#C8FF3D]">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <span className="font-mono-code text-xs text-[#C8FF3D] uppercase tracking-widest mb-2 block font-bold">
          EXCEPTION: STATUS 404
        </span>

        <h1 className="font-space text-4xl sm:text-5xl font-extrabold uppercase text-[#e4e2e1] mb-4">
          ENDPOINT NOT FOUND
        </h1>

        <p className="font-sans-body text-sm text-[#9CA3AF] max-w-md mb-8 leading-relaxed">
          The technical route or directory you requested does not exist in the JhalaWebTech network cluster.
        </p>

        <Link
          to="/"
          className="bg-[#C8FF3D] text-[#0A0A0A] px-8 py-4 font-space text-sm font-bold uppercase hover:bg-[#bef532] transition-colors brutalist-border-active cursor-pointer shadow-[4px_4px_0px_0px_#262626] active:scale-95 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO HOME_CORE</span>
        </Link>
      </div>
    </div>
  );
}
