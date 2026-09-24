import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle modern tech grid */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)',
        }}
      />

      {/* Floating ambient glow orbs */}
      <motion.div
        className="absolute -top-[10%] left-[15%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[130px]"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[35%] -right-[5%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[150px]"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.9, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-violet-500/8 blur-[140px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 35, 0],
          scale: [1, 1.05, 0.92, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Top subtle vignette */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950/80 to-transparent" />
    </div>
  );
};

export default BackgroundEffects;
