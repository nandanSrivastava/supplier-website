'use client';

import { useState, useEffect, useCallback } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
    setScrollProgress(scrollPercent * 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial call
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, [updateScrollProgress]);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-1 bg-blue-600 z-50 transition-all duration-150 ease-out origin-left"
      style={{ 
        transform: `scaleX(${scrollProgress / 100})`,
        transformOrigin: 'left'
      }}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Page scroll progress"
    />
  );
};

export default ScrollProgress;
