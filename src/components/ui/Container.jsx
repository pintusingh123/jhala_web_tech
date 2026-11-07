export default function Container({ children, className = '', ...props }) {
  return (
    <div
      className={`w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
