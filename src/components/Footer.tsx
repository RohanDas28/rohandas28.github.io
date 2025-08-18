
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useCursor } from '@/context/CursorContext';

const Footer = () => {
  const { setCursorType } = useCursor();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-16 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">Rohan Das</div>
            <p className="text-zinc-400 max-w-md">
              Building exceptional digital experiences through creative frontend development.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="hover-target mb-4 h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            
            <div className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} Rohan Das. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
