export default function SectionHeader({
  tag,
  title,
  highlightedTitle,
  description,
  align = 'left',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 sm:mb-10 ${isCenter ? 'text-center mx-auto' : 'text-left'}`}>
      {tag && (
        <div className={`flex items-center gap-2 mb-2 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-5 h-[2px] bg-[#FDB345] inline-block" />
          <span className="font-narrow text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FDB345]">
            {tag}
          </span>
        </div>
      )}

      <h2 className="font-slab text-2xl sm:text-4xl lg:text-5xl font-bold text-[#333333] tracking-tight leading-[1.15]">
        {title}{' '}
        {highlightedTitle && (
          <span className="text-[#FDB345] inline-block font-semibold">
            {highlightedTitle}
          </span>
        )}
      </h2>

      {description && (
        <p className={`font-sans-body text-sm sm:text-base text-[#575C62] max-w-3xl mt-2.5 leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
