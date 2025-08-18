
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
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  useEffect(() => {
    if (sectionRef.current && inView) {
      // Animate section heading
      gsap.fromTo(
        sectionRef.current.querySelector('.section-heading'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
      
      // Animate text content
      if (textRef.current) {
        const paragraphs = textRef.current.querySelectorAll('p');
        gsap.fromTo(
          paragraphs,
          { y: 40, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.15, 
            duration: 0.8,
            ease: "power3.out",
            delay: 0.3
          }
        );
      }
      
      // Animate image
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 0.9, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 1,
            ease: "power3.out",
            delay: 0.2
          }
        );
      }
    }
  }, [inView]);
  
  return (
    <section id="about" className="py-24 bg-zinc-900 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-hero-pattern opacity-[0.02]"></div>
      <div className="absolute top-[30%] left-[10%] w-64 h-64 rounded-full bg-white/5 blur-[120px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="animate-section"
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-zinc-300 mb-4 leading-relaxed">
              Hi there! I'm Rohan Das, a Frontend Developer with expertise in NextJS and ReactJS. Dedicated to innovation, I showcase my commitment through freelance projects and creative coding endeavors.
            </p>
            
            <p className="text-zinc-400 mb-4 leading-relaxed">
              My professional journey includes working in various companies as a Frontend Developer, where I've built seamless integrations with NextJS, developed e-commerce platforms, and created responsive interfaces.
            </p>
            
            <p className="text-zinc-400 mb-6 leading-relaxed">
              I've earned my Bachelor of Computer Application (BCA) from Burdwan Raj College. When I'm not coding, I enjoy anime, watching movies & TV series, and tinkering with electronic devices.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8 cursor-pointer">
              <span className="inline-block py-1.5 px-3 bg-white/5 hover:bg-white/10 rounded-md text-zinc-300 text-sm">NextJS</span>
              <span className="inline-block py-1.5 px-3 bg-white/5 hover:bg-white/10 rounded-md text-zinc-300 text-sm">ReactJS</span>
              <span className="inline-block py-1.5 px-3 bg-white/5 hover:bg-white/10 rounded-md text-zinc-300 text-sm">MongoDB</span>
              <span className="inline-block py-1.5 px-3 bg-white/5 hover:bg-white/10 rounded-md text-zinc-300 text-sm">JavaScript</span>
              <span className="inline-block py-1.5 px-3 bg-white/5 hover:bg-white/10 rounded-md text-zinc-300 text-sm">Generative AI</span>
              <span className="inline-block py-1.5 px-3 bg-white/5 hover:bg-white/10 rounded-md text-zinc-300 text-sm">WordPress</span>
            </div>
            
            <a 
              href="#contact"
              className="hover-target inline-flex items-center text-white font-medium"
              onMouseEnter={() => setCursorType('link')}
              onMouseLeave={() => setCursorType('default')}
            >
              <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Let's work together</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </motion.div>
          
          <motion.div 
            className="perspective"
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-sm lg:max-w-full perspective preserve-3d">
              <div className="rounded-lg overflow-hidden glass-card">
                <img 
                  src="/uploads/logo.png"
                  alt="Rohan Das" 
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute -bottom-5 -right-5 w-48 h-48 rounded-lg glass-card p-4 transform -rotate-6 backface-hidden">
                <div className="text-sm text-zinc-300">
                  <div className="mb-1 font-medium">Experience</div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full mb-2">
                    <div className="h-1.5 rounded-full bg-white" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>5+ years</span>
                    <span>Professional</span>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-zinc-300">
                  <div className="mb-1 font-medium">Projects</div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs text-zinc-400">Completed projects</div>
                </div>
              </div>
              
              <div className="absolute -top-5 -left-5 p-4 glass-card rounded-lg transform rotate-3 backface-hidden">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
                
                <div className="mt-3 text-xs font-mono text-zinc-400">
                  <div className="mb-1">// Developer Info</div>
                  <div><span className="text-blue-400">const</span> <span className="text-green-400">developer</span> = {`{`}</div>
                  <div className="ml-4"><span className="text-purple-400">name</span>: <span className="text-orange-300">'Rohan Das'</span>,</div>
                  <div className="ml-4"><span className="text-purple-400">location</span>: <span className="text-orange-300">'India'</span>,</div>
                  <div className="ml-4"><span className="text-purple-400">expertise</span>: <span className="text-orange-300">'NextJS & React'</span></div>
                  <div>{`}`};</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
