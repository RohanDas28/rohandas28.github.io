
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { useCursor } from '@/context/CursorContext';
import { Button } from './ui/button';
import { Github, ExternalLink, Award, Briefcase } from 'lucide-react';

const About = () => {
  const { setCursorType } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });
  
  useEffect(() => {
    if (sectionRef.current && inView) {
      // Animate section heading
      gsap.fromTo(
        sectionRef.current.querySelector('.section-heading'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
      
      // Animate text content
      if (textRef.current) {
        const paragraphs = textRef.current.querySelectorAll('p, div, a');
        gsap.fromTo(
          paragraphs,
          { y: 25, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.08, 
            duration: 0.6,
            ease: "power2.out",
            delay: 0.15
          }
        );
      }
      
      // Animate image card
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 0.95, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2
          }
        );
      }
    }
  }, [inView]);
  
  return (
    <section id="about" className="py-24 bg-transparent relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-hero-pattern opacity-[0.02]"></div>
      <div className="absolute top-[30%] left-[10%] w-64 h-64 rounded-full bg-white/5 blur-[120px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={textRef}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-zinc-200 text-base sm:text-lg mb-4 leading-relaxed font-normal">
              I'm <span className="text-white font-semibold">Rohan Das</span>, a Frontend Engineer specializing in building fast, scalable, and beautifully crafted web applications with <span className="text-cyan-300 font-medium">Next.js</span>, <span className="text-cyan-300 font-medium">React</span>, and <span className="text-cyan-300 font-medium">TypeScript</span>.
            </p>
            
            <p className="text-zinc-400 mb-4 leading-relaxed text-sm sm:text-base">
              Over the past 5+ years, I've designed and shipped production SaaS platforms, real-time collaborative workspaces, and high-traffic web applications. I bridge the gap between polished UI/UX design and reliable, performant frontend architecture.
            </p>
            
            <p className="text-zinc-400 mb-6 leading-relaxed text-sm sm:text-base">
              Graduated with a Bachelor of Computer Application (BCA), with end-to-end experience spanning API design, modern state management, and cloud deployments. When I'm not shipping code, I enjoy exploring emerging tech, motion design, and electronic hardware.
            </p>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Full-Stack Architecture', 'Motion & UI/UX'].map((item) => (
                <span
                  key={item}
                  className="inline-block py-1 sm:py-1.5 px-2.5 sm:px-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-lg text-zinc-300 text-xs sm:text-sm transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
            
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) {
                  const navHeight = 80;
                  const pos = el.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({ top: pos - navHeight, behavior: 'smooth' });
                  window.history.pushState(null, '', '#contact');
                }
              }}
              className="hover-target inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              <span>Let's work together</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </motion.div>
          
          {/* Interactive Code Editor / Workstation Card */}
          <motion.div 
            className="perspective px-1 sm:px-0"
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Floating Top Badge */}
              <div className="absolute -top-4 right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.2)] text-xs text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white">5+ Years</span>
                <span className="text-zinc-500">|</span>
                <span className="text-cyan-300 font-mono">50+ Shipped</span>
              </div>

              {/* Main Code Editor Card */}
              <div 
                className="rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl bg-zinc-950/80 hover:border-cyan-500/30 transition-all duration-300 group"
                onMouseEnter={() => setCursorType('text')}
                onMouseLeave={() => setCursorType('default')}
              >
                {/* Editor Header / Tab bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80 hover:opacity-100 transition-opacity" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]/80 hover:opacity-100 transition-opacity" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]/80 hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-zinc-600 text-xs ml-2 font-mono">src / core /</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-cyan-300">
                    <span className="text-blue-400 font-bold">TS</span>
                    <span>engineer.config.ts</span>
                  </div>
                </div>

                {/* Code Window Body with Line Numbers */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto scrollbar-hide text-zinc-300">
                  <div className="space-y-1">
                    <div className="flex">
                      <span className="text-zinc-600 select-none w-7 shrink-0 text-right pr-3 font-mono text-xs">1</span>
                      <span><span className="text-purple-400">import</span> <span className="text-yellow-300">{`{`}</span> <span className="text-cyan-300">Engineer</span> <span className="text-yellow-300">{`}`}</span> <span className="text-purple-400">from</span> <span className="text-orange-300">'@rohan/profile'</span>;</span>
                    </div>

                    <div className="flex">
                      <span className="text-zinc-600 select-none w-7 shrink-0 text-right pr-3 font-mono text-xs">2</span>
                      <span className="text-zinc-600">// Core developer configuration</span>
                    </div>

                    <div className="flex">
                      <span className="text-zinc-600 select-none w-7 shrink-0 text-right pr-3 font-mono text-xs">3</span>
                      <span><span className="text-purple-400">export const</span> <span className="text-blue-400 font-semibold">rohan</span>: <span className="text-cyan-300">Engineer</span> = <span className="text-yellow-300">{`{`}</span></span>
                    </div>

                    <div className="flex">
                      <span className="text-zinc-600 select-none w-7 shrink-0 text-right pr-3 font-mono text-xs">4</span>
                      <span className="pl-4"><span className="text-rose-300">name</span>: <span className="text-orange-300">'Rohan Das'</span>,</span>
                    </div>

                    <div className="flex">
                      <span className="text-zinc-600 select-none w-7 shrink-0 text-right pr-3 font-mono text-xs">5</span>
                      <span className="pl-4"><span className="text-rose-300">role</span>: <span className="text-orange-300">'Frontend &amp; Full-Stack Engineer'</span>,</span>
                    </div>

                    <div className="flex">
                      <span className="text-zinc-600 select-none w-7 shrink-0 text-right pr-3 font-mono text-xs">6</span>
                      <span className="pl-4"><span className="text-rose-300">stack</span>: <span className="text-sky-300">[</span><span className="text-orange-300">'Next.js'</span>, <span className="text-orange-300">'React'</span>, <span className="text-orange-300">'TypeScript'</span>, <span className="text-orange-300">'Tailwind'</span><span className="text-sky-300">]</span>,</span>
                    </div>

                    <div className="flex">
                      <span className="text-zinc-600 select-none w-7 shrink-0 text-right pr-3 font-mono text-xs">7</span>
                      <span className="pl-4"><span className="text-rose-300">architecture</span>: <span className="text-yellow-300">{`{`}</span></span>
                    </div>

                    <div className="flex">
                      <span className="text-zinc-600 select-none w-7 shrink-0 text-right pr-3 font-mono text-xs">8</span>
                      <span className="pl-8"><span className="text-zinc-400">pattern</span>: <span className="text-emerald-300">'Component-Driven &amp; Reactive'</span>,</span>
                    </div>

                    <div className="flex">
                      <span className="text-zinc-600 select-none w-7 shrink-0 text-right pr-3 font-mono text-xs">9</span>
                      <span className="pl-8"><span className="text-zinc-400">performance</span>: <span className="text-emerald-300">'Sub-second LCP &amp; Snappy UX'</span>,</span>
                    </div>

                    <div className="flex">
                      <span className="text-zinc-600 select-none w-7 shrink-0 text-right pr-3 font-mono text-xs">10</span>
                      <span className="pl-4"><span className="text-yellow-300">{`}`}</span>,</span>
                    </div>

                    <div className="flex">
                      <span className="text-zinc-600 select-none w-7 shrink-0 text-right pr-3 font-mono text-xs">11</span>
                      <span className="pl-4"><span className="text-rose-300">status</span>: <span className="text-emerald-400">'Ready to build impactful software'</span></span>
                    </div>

                    <div className="flex">
                      <span className="text-zinc-600 select-none w-7 shrink-0 text-right pr-3 font-mono text-xs">12</span>
                      <span><span className="text-yellow-300">{`}`}</span>;</span>
                    </div>
                  </div>
                </div>

                {/* Editor Footer Status Bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-white/[0.02] border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> UTF-8
                    </span>
                    <span>TypeScript React</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">Ready to compile</span>
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 backdrop-blur-xl shadow-xl text-xs text-zinc-300">
                <span className="text-cyan-400">⚡</span>
                <span className="text-zinc-400">Focus:</span>
                <span className="font-semibold text-white">Pixel-Perfect &amp; Performant</span>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
