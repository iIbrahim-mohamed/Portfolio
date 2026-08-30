import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:bg-cyan-400 hover:scale-110 transition-all duration-300 focus:outline-none"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 font-bold" />
    </button>
  );
};

export default ScrollToTop;
