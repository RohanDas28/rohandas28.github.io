
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCursor } from '@/context/CursorContext';

const NotFound = () => {
  const { setCursorType } = useCursor();
  
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-zinc-950 text-white p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-card p-12 rounded-lg max-w-md text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-8xl font-bold mb-4 text-white">404</h1>
          <div className="h-0.5 w-16 bg-white/30 mx-auto mb-6"></div>
          <p className="text-xl text-zinc-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
          
          <Link 
            to="/" 
            className="hover-target btn-primary inline-flex items-center"
            onMouseEnter={() => setCursorType('button')}
            onMouseLeave={() => setCursorType('default')}
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
