
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/data/projects';
import { useCursor } from '@/context/CursorContext';
import { ArrowUpRight, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { setCursorType } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  useEffect(() => {
    if (sectionRef.current && inView) {
      // Animate section heading
      gsap.fromTo(
        sectionRef.current.querySelector('.section-heading'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
      
      // Animate project cards
      const cards = sectionRef.current.querySelectorAll('.project-card');
      gsap.fromTo(
        cards,
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power3.out",
          delay: 0.2
        }
      );
    }
  }, [inView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };
  
  return (
    <section id="projects" className="py-24 bg-zinc-950 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
            Explore my recent work across web development, interactive design, and creative coding.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card group h-full"
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              <Link to={`/project/${project.id}`} className="h-full flex flex-col">
                <div className="overflow-hidden rounded-lg">
                  <motion.div 
                    className="aspect-[16/10] bg-zinc-800 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
                      loading="lazy"
                    />
                  </motion.div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div 
                        className="h-2.5 w-2.5 rounded-full mr-2" 
                        style={{ backgroundColor: project.color }}
                      ></div>
                      <p className="text-xs uppercase tracking-wider text-zinc-400">
                        {project.technologies.slice(0, 2).join(" / ")}
                      </p>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-sm mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex space-x-3">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="inline-block text-xs py-1 px-2 bg-white/5 rounded-full text-zinc-400">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="inline-block text-xs py-1 px-2 bg-white/5 rounded-full text-zinc-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-1">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                        </a>
                      )}
                      
                      <div className="p-1.5 rounded-full text-zinc-400 group-hover:text-white transition-colors">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/rohandas28" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover-target inline-flex items-center text-zinc-400 hover:text-white transition-colors"
            onMouseEnter={() => setCursorType('link')}
            onMouseLeave={() => setCursorType('default')}
          >
            <span>View More Projects on GitHub</span>
            <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
