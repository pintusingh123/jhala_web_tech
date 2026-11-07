export default function Marquee({
  items,
  speed = '40s',
  pauseOnHover = true,
  className = '',
}) {
  return (
    <div
      className={`relative w-full overflow-hidden select-none ${className}`}
      aria-label="Technologies and frameworks we work with"
    >
      <div
        className={`flex w-max items-center gap-8 sm:gap-12 animate-marquee ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
        style={{ animationDuration: speed }}
      >
        {items.concat(items).map((item, idx) => (
          <div
            key={`${item.name || item}-${idx}`}
            className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-medium text-muted hover:text-[#FF6B2C] transition-colors py-2 whitespace-nowrap cursor-default"
          >
            {item.icon && <span className="opacity-80">{item.icon}</span>}
            <span>{item.name || item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
