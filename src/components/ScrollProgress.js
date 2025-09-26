'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

// Throttle utility function
const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef(null);

  const updateScrollProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
    setScrollProgress(scrollPercent * 100);
  }, []);

  // Throttled scroll handler using requestAnimationFrame
  const throttledUpdateScrollProgress = useCallback(
    throttle(() => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateScrollProgress);
    }, 16), // ~60fps
    [updateScrollProgress]
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledUpdateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial call
    return () => {
      window.removeEventListener('scroll', throttledUpdateScrollProgress);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [throttledUpdateScrollProgress, updateScrollProgress]);

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
