export default function Container({ children, className = '', ...props }) {
  return (
    <div
      className={`w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
