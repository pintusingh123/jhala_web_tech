export default function Card({
  children,
  variant = 'default', // 'default' | 'interactive' | 'featured'
  className = '',
  as: Component = 'div',
  ...props
}) {
  const baseClasses = 'bg-surface rounded-xl border border-subtle transition-all duration-200 overflow-hidden';

  const variantClasses = {
    default: 'p-5 sm:p-6 shadow-xs',
    interactive:
      'p-5 sm:p-6 shadow-xs hover:border-[#FF6B2C]/60 hover:bg-surface-2 hover:-translate-y-1 hover:shadow-md cursor-pointer',
    featured:
      'p-6 sm:p-8 border-[#FF6B2C]/40 bg-surface shadow-md relative',
  };

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.default} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
