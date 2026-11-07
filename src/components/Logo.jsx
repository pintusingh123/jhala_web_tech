export default function Logo({
  variant = 'full', // 'full' | 'icon'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
}) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
  };

  const iconClass = iconSizes[size] || iconSizes.md;
  const textClass = textSizes[size] || textSizes.md;

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* SVG Icon Mark */}
      <svg
        viewBox="0 0 64 64"
        className={`${iconClass} shrink-0 drop-shadow-xs transition-transform duration-200 group-hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoJwtBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#181D28" />
            <stop offset="100%" stopColor="#0B0D12" />
          </linearGradient>

          <linearGradient id="logoJwtOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA06E" />
            <stop offset="50%" stopColor="#FF6B2C" />
            <stop offset="100%" stopColor="#E55315" />
          </linearGradient>

          <linearGradient id="logoJwtTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#55EFC4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>

          <filter id="logoJwtGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#FF6B2C" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Squircle Base Frame */}
        <rect width="64" height="64" rx="16" fill="url(#logoJwtBg)" />
        <rect x="1" y="1" width="62" height="62" rx="15" fill="none" stroke="#2B3242" strokeWidth="1.2" />

        {/* Left Code Terminal Chevron '<' (Web / Software Code Rigor) */}
        <path
          d="M22 23 L14 31 L22 39"
          fill="none"
          stroke="url(#logoJwtTeal)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Interlocking Bold 'J' Form in Signal Orange (Jhala & High-Velocity Execution) */}
        <path
          d="M43 17 L43 37 C43 44.5 37.5 49 30 49 C24 49 19.5 45.5 17.5 41"
          fill="none"
          stroke="url(#logoJwtOrange)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#logoJwtGlow)"
        />

        {/* Precision Origin Node (White Spark) */}
        <circle cx="43" cy="17" r="3.2" fill="#FFFFFF" />
      </svg>

      {/* Wordmark Typography */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className={`font-head ${textClass} font-bold tracking-tight text-primary group-hover:text-[#FF6B2C] transition-colors leading-none`}>
            Jhala<span className="text-[#FF6B2C]">WebTech</span>
          </span>
          <span className="font-mono text-[10px] text-muted tracking-wider uppercase mt-1 leading-none hidden sm:block">
            Web &bull; Mobile &bull; Cloud
          </span>
        </div>
      )}
    </div>
  );
}
