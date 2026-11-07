export default function Badge({
  children,
  variant = 'neutral', // 'neutral' | 'accent' | 'success' | 'outline'
  size = 'sm',
  className = '',
}) {
  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  };

  const variantClasses = {
    neutral: 'bg-surface-2 text-muted border border-subtle',
    accent: 'bg-[#FF6B2C]/10 text-[#FF6B2C] border border-[#FF6B2C]/30',
    success: 'bg-[#3DD9B0]/10 text-[#3DD9B0] border border-[#3DD9B0]/30',
    outline: 'bg-transparent text-primary border border-subtle',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium uppercase tracking-wider rounded-md select-none ${sizeClasses[size] || sizeClasses.sm} ${variantClasses[variant] || variantClasses.neutral} ${className}`}
    >
      {children}
    </span>
  );
}
