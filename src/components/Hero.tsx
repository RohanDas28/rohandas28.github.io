
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      // Manually add the text-animate classes initially
      const textElements = containerRef.current.querySelectorAll('.text-animate');
      textElements.forEach(element => {
        element.classList.add('opacity-0', 'translate-y-10');
      });
      
      // Simple animation without ScrollTrigger to ensure it works
      setTimeout(() => {
        gsap.to('.text-animate', {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2
        });
      }, 300);
    }
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 py-16" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-[0.03]"></div>
      <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-white/5 blur-[120px]"></div>
      <div className="absolute bottom-[25%] left-[15%] w-96 h-96 rounded-full bg-white/5 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm uppercase tracking-widest text-zinc-400 mb-4 overflow-hidden">
            <div className="text-animate">Frontend Developer & NextJS Expert</div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text">
            <div className="overflow-hidden"><span className="inline-block text-animate">Hi, I'm <span className="text-gradient">Rohan Das</span></span></div>
            <div className="overflow-hidden"><span className="inline-block text-animate">I build <span className="text-gradient">interactive</span></span></div>
            <div className="overflow-hidden"><span className="inline-block text-animate">web experiences</span></div>
          </h1>
          
          <div className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto overflow-hidden mb-8">
            <p className="text-animate">Creating memorable digital experiences through clean code and innovative design with NextJS and React.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center overflow-hidden">
            <motion.div className="text-animate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <a 
                href="#projects" 
                className="btn-primary"
              >
                View My Work
              </a>
            </motion.div>
            
            <motion.div className="text-animate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <a 
                href="#contact" 
                className="btn-outline"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Positioned at the bottom of the viewport */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <span className="text-zinc-500 text-sm mb-2">Scroll Down</span>
          <div className="h-16 w-[1px] bg-white/20 relative">
            <motion.div 
              className="absolute top-0 left-0 right-0 h-1/3 bg-white"
              initial={{ top: "-10%" }}
              animate={{ top: "100%" }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "linear",
                repeatDelay: 0.2
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
