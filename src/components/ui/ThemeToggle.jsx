'use client';

import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || 'dark';
    }
    return 'dark';
  });

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next);
    }
    try {
      localStorage.setItem('jhala-color-theme', next);
    } catch {
      // ignore
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`p-2 rounded-lg border border-subtle bg-surface text-primary hover:bg-surface-2 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-[#FF6B2C]" />
      ) : (
        <Moon className="w-4 h-4 text-primary" />
      )}
    </button>
  );
}
