import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { useCursor } from '@/context/CursorContext';
import { ArrowUpRight, Rocket } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);
  const { setCursorType } = useCursor();

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          'scalable web applications',
          'production SaaS platforms',
          'high-performance interfaces',
          'delightful micro-interactions',
        ],
        typeSpeed: 60,
        backSpeed: 35,
        backDelay: 2000,
        startDelay: 400,
        loop: true,
        smartBackspace: false,
        showCursor: true,
        cursorChar: '|',
      });
    }

    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-transparent pt-28 sm:pt-36 pb-16 sm:pb-24"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mb-3 sm:mb-4"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 sm:mb-3">
              <span className="block text-zinc-300 font-light text-xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-2">
                Hello, I'm <span className="font-semibold text-white">Rohan Das</span>
              </span>
              <span className="bg-gradient-to-r from-white via-cyan-100 to-sky-400 bg-clip-text text-transparent">
                Frontend Engineer
              </span>{' '}
              <span className="text-zinc-500">&amp;</span>{' '}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Creative Builder
              </span>
            </h1>
          </motion.div>

          {/* Dynamic Typed.js Tagline - Fixed line height, zero layout shift */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
            className="mb-5 sm:mb-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md font-mono text-xs sm:text-sm text-zinc-300 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-zinc-400">Building</span>
              <span className="text-cyan-300 font-semibold min-w-[200px] sm:min-w-[220px] text-left">
                <span ref={typedRef} />
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal px-2"
          >
            Engineering scalable, high-performance web applications with{' '}
            <span className="text-white font-medium">Next.js</span>,{' '}
            <span className="text-white font-medium">React</span>, and{' '}
            <span className="text-white font-medium">TypeScript</span>. Focused on clean frontend architecture, snappy interactions, and shipping real-world software.
          </motion.p>

          {/* Quick Callout for Boardly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="inline-block max-w-full px-2 sm:px-0"
          >
            <a
              href="https://useboardly.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target group flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-950/40 via-sky-950/30 to-indigo-950/40 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] max-w-full"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                <Rocket size={14} />
              </div>
              <div className="text-left text-xs sm:text-sm">
                <span className="text-zinc-400">Featured Launch: </span>
                <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  Boardly <span className="text-zinc-500 font-normal">|</span> Visual Workspace for Teams
                </span>
              </div>
              <ArrowUpRight size={15} className="text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Floating Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <button
          onClick={() => scrollTo('projects')}
          className="hover-target flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity"
          onMouseEnter={() => setCursorType('button')}
          onMouseLeave={() => setCursorType('default')}
          aria-label="Scroll to projects"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-1">Scroll</span>
          <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center p-1">
            <motion.div
              className="w-1 h-2 rounded-full bg-cyan-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;


