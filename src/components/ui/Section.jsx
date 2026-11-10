import Container from './Container';
import Eyebrow from './Eyebrow';

export default function Section({
  id,
  eyebrow,
  title,
  highlightWord,
  subtitle,
  children,
  className = '',
  containerClassName = '',
  align = 'left', // 'left' | 'center'
  headerRight,
}) {
  return (
    <section
      id={id}
      className={`w-full py-10 sm:py-14 lg:py-16 border-t border-subtle ${className}`}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || subtitle || headerRight) && (
          <div
            className={`mb-6 sm:mb-8 ${
              headerRight
                ? 'flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-8'
                : align === 'center'
                ? 'text-center mx-auto max-w-2xl'
                : 'max-w-3xl'
            }`}
          >
            <div className={headerRight ? 'max-w-2xl' : ''}>
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

              {title && (
                <h2 className="font-head text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-[1.2] mt-1 mb-2">
                  {title}
                  {highlightWord && (
                    <>
                      {' '}
                      <span className="text-[#FF6B2C]">{highlightWord}</span>
                    </>
                  )}
                </h2>
              )}

              {subtitle && (
                <p className="font-body text-xs sm:text-sm md:text-base text-muted leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            {headerRight && (
              <div className="shrink-0 flex items-center">
                {headerRight}
              </div>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}
