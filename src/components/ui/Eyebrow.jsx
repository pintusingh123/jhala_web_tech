export default function Eyebrow({ children, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#FF6B2C] font-semibold mb-2.5 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] inline-block" />
      <span>{children}</span>
    </div>
  );
}
