import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, FolderKanban } from 'lucide-react';
import { useCursor } from '@/context/CursorContext';
import BackgroundEffects from '@/components/BackgroundEffects';

const NotFound = () => {
  const { setCursorType } = useCursor();
  
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-zinc-950 text-white p-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundEffects />
      <div className="glass-card p-6 sm:p-10 md:p-12 rounded-2xl max-w-lg w-full text-center relative z-10 border border-white/10 shadow-2xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-7xl sm:text-9xl font-black mb-4 bg-gradient-to-r from-white via-cyan-200 to-sky-500 bg-clip-text text-transparent">
            404
          </div>
          <div className="h-0.5 w-16 bg-cyan-500/50 mx-auto mb-6"></div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-white">Page Not Found</h2>
          <p className="text-zinc-400 mb-8 max-w-sm mx-auto text-sm sm:text-base leading-relaxed">
            The page you are looking for doesn't exist or has moved. Explore the portfolio or return to the main page.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/" 
              className="hover-target inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all duration-200 shadow-md w-full sm:w-auto"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              <Home size={15} />
              <span>Back to Home</span>
            </Link>

            <Link 
              to="/#projects" 
              className="hover-target inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10 font-medium text-xs sm:text-sm transition-all duration-200 w-full sm:w-auto"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              <FolderKanban size={15} />
              <span>View Projects</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
