'use client'

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const smoothScrollToTop = () => {
    const scrollY = window.pageYOffset;
    const scrollStep = Math.max(10, Math.floor(scrollY / 20));
    
    if (scrollY > 0) {
      window.scrollBy(0, -scrollStep);
      requestAnimationFrame(smoothScrollToTop);
    }
  };

  return (
    <>
      {isVisible && (
        <div className='rounded-full'>
          <Button name='to-top'
            onClick={smoothScrollToTop}
            className="fixed bottom-[80px] right-5 z-50 p-3 rounded-full bg-gradient-to-r bg-black text-white shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="animate-bounce" />
          </Button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;