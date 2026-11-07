'use client';

import { useRef, useState, useCallback } from 'react';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  glare = true,
  scale = 1.02,
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  });
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 0.1s ease-out',
      });

      if (glare) {
        setGlareStyle({
          opacity: 0.15,
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
        });
      }
    },
    [maxTilt, glare, scale]
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative will-change-transform [transform-style:preserve-3d] ${className}`}
    >
      {/* Dynamic 3D Glare Lighting Layer */}
      {glare && (
        <div
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle at ${glareStyle.x}% ${glareStyle.y}%, rgba(253, 179, 69, 0.35) 0%, transparent 60%)`,
            opacity: glareStyle.opacity,
            transition: 'opacity 0.3s ease',
          }}
          className="absolute inset-0 rounded pointer-events-none z-20 mix-blend-overlay"
        />
      )}

      {/* Card Content with 3D depth */}
      <div className="w-full h-full [transform-style:preserve-3d]">
        {children}
      </div>
    </div>
  );
}
