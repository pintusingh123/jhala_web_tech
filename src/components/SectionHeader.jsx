import React from 'react';

export default function SectionHeader({ tag, title, highlightedTitle, description }) {
  return (
    <div className="mb-8">
      <span className="font-space text-xs uppercase text-[#9CA3AF] tracking-widest block mb-1">
        {tag}
      </span>
      <div className="terminal-divider my-2" />
      <h2 className="font-space text-3xl sm:text-5xl font-extrabold uppercase text-[#e4e2e1] mt-4">
        {title} {highlightedTitle && <span className="text-[#C8FF3D]">{highlightedTitle}</span>}
      </h2>
      {description && (
        <p className="font-sans-body text-base text-[#9CA3AF] max-w-2xl mt-2 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
