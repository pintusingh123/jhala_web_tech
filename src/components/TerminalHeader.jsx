import React from 'react';

export default function TerminalHeader({ label }) {
  return (
    <div className="w-full flex items-center gap-3 my-4 opacity-70">
      <span className="font-mono-code text-xs text-[#C8FF3D] uppercase tracking-widest">
        SYS.INIT: {label}
      </span>
      <div className="terminal-divider"></div>
    </div>
  );
}
