import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { ArrowDown, ArrowUpRight, Sparkles, Code2, Layers, Cpu } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { setCursorType } = useCursor();

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
      className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-24 sm:pt-28 pb-16 sm:pb-20"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Status Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-zinc-300">
              Available for full-time roles & freelance projects
            </span>
          </motion.div> */}

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6"
          >
            <span className="block text-zinc-300 font-light text-xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-2">
              Hello, I'm{' '}
              <span className="font-semibold text-white">Rohan Das</span>
            </span>
            <span className="bg-gradient-to-r from-white via-cyan-100 to-sky-400 bg-clip-text text-transparent">
              Frontend Engineer
            </span>{' '}
            <span className="text-zinc-500">&amp;</span>{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Creative Builder
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-zinc-400 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal px-2"
          >
            Specialized in crafting modern web applications with <span className="text-zinc-200 font-medium">Next.js</span>,{' '}
            <span className="text-zinc-200 font-medium">React</span>, and <span className="text-zinc-200 font-medium">TypeScript</span>.
          </motion.p>

          {/* Quick Callout for Boardly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-8 sm:mb-10 inline-block max-w-full px-2 sm:px-0"
          >
            <a
              href="https://useboardly.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target group flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-950/40 via-sky-950/30 to-indigo-950/40 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] max-w-full"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                <Sparkles size={14} />
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

          {/* Action CTAs */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="hover-target group w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm bg-white text-zinc-950 hover:bg-zinc-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              <span>Explore My Work</span>
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>

            <a
              href="https://useboardly.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target group w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-cyan-500 to-sky-600 text-white hover:from-cyan-400 hover:to-sky-500 transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              <span>Try Boardly Live</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={() => scrollTo('contact')}
              className="hover-target w-full sm:w-auto px-7 py-3.5 rounded-full font-medium text-sm bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-0.5"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              Contact Me
            </button>
          </motion.div> */}

          {/* Quick Metrics Strip */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center justify-center p-3 text-center">
              <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xl sm:text-2xl mb-1">
                <Sparkles size={18} />
                <span>Boardly</span>
              </div>
              <span className="text-xs text-zinc-400">Flagship SaaS Launched</span>
            </div>

            <div className="flex flex-col items-center justify-center p-3 text-center">
              <div className="flex items-center gap-1.5 text-white font-bold text-xl sm:text-2xl mb-1">
                <Code2 size={18} className="text-indigo-400" />
                <span>7+</span>
              </div>
              <span className="text-xs text-zinc-400">Full-Stack & Web Projects</span>
            </div>

            <div className="flex flex-col items-center justify-center p-3 text-center">
              <div className="flex items-center gap-1.5 text-white font-bold text-xl sm:text-2xl mb-1">
                <Layers size={18} className="text-purple-400" />
                <span>Modern</span>
              </div>
              <span className="text-xs text-zinc-400">Next.js, React & Supabase</span>
            </div>

            <div className="flex flex-col items-center justify-center p-3 text-center">
              <div className="flex items-center gap-1.5 text-white font-bold text-xl sm:text-2xl mb-1">
                <Cpu size={18} className="text-emerald-400" />
                <span>BCA</span>
              </div>
              <span className="text-xs text-zinc-400">Burdwan Raj College</span>
            </div>
          </motion.div> */}

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
