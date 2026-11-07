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
}) {
  return (
    <section
      id={id}
      className={`w-full py-14 sm:py-20 lg:py-24 border-t border-subtle ${className}`}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || subtitle) && (
          <div
            className={`mb-10 sm:mb-14 ${
              align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'
            }`}
          >
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

            {title && (
              <h2 className="font-head text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-[1.2] mt-1 mb-3">
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
              <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}
