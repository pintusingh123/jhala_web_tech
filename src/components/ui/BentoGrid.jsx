export function BentoGrid({ children, className = '' }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 ${className}`}>
      {children}
    </div>
  );
}

export function BentoItem({ children, span = 'lg:col-span-4', className = '' }) {
  return (
    <div className={`${span} flex flex-col h-full ${className}`}>
      {children}
    </div>
  );
}
