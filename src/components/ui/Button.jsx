import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'link'
    size = 'md', // 'sm' | 'md' | 'lg'
    to,
    href,
    loading = false,
    icon: Icon,
    iconPosition = 'right',
    className = '',
    disabled,
    ...props
  },
  ref
) {
  // Base sizing guaranteeing min 44px tap targets for mobile compliance
  const sizeClasses = {
    sm: 'min-h-[40px] px-3.5 py-1.5 text-xs font-semibold gap-1.5',
    md: 'min-h-[44px] px-5 py-2.5 text-sm font-semibold gap-2',
    lg: 'min-h-[48px] px-6 py-3 text-base font-semibold gap-2.5',
  };

  const variantClasses = {
    // Primary: Signal Orange CTA (#FF6B2C)
    primary:
      'bg-[#FF6B2C] hover:bg-[#FF8452] text-white shadow-xs hover:shadow-md active:scale-[0.98] border border-transparent',
    // Secondary: Structural Surface with Border
    secondary:
      'bg-surface-2 hover:bg-surface text-primary border border-subtle hover:border-[#FF6B2C]/50 active:scale-[0.98]',
    // Ghost: Transparent with hover highlight
    ghost:
      'bg-transparent hover:bg-surface-2 text-primary border border-transparent hover:border-subtle active:scale-[0.98]',
    // Link: Understated inline link
    link:
      'bg-transparent text-[#FF6B2C] hover:underline p-0 min-h-0 min-w-0 border-none inline-flex items-center',
  };

  const combinedClasses = `
    inline-flex items-center justify-center font-head tracking-tight rounded-md
    transition-all duration-150 cursor-pointer select-none
    disabled:opacity-50 disabled:pointer-events-none
    focus-visible:outline-2 focus-visible:outline-[#FF6B2C] focus-visible:outline-offset-2
    ${sizeClasses[size] || sizeClasses.md}
    ${variantClasses[variant] || variantClasses.primary}
    ${className}
  `.trim();

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
      {!loading && Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} ref={ref} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        ref={ref}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
});

export default Button;
