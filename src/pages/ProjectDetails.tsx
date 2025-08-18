
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { useCursor } from '@/context/CursorContext';
import { gsap } from 'gsap';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setCursorType } = useCursor();
  
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    if (!project) {
      navigate('/not-found');
      return;
    }
    
    // Initialize animations
    gsap.fromTo(
      '.project-content > *',
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3
      }
    );
    
    // Clean up ScrollTrigger on component unmount
    return () => {
      gsap.killTweensOf('.project-content > *');
    };
  }, [project, navigate]);
  
  if (!project) return null;
  
  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="bg-zinc-950 text-white min-h-screen pt-20 pb-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="hover-target inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-8"
          onMouseEnter={() => setCursorType('link')}
          onMouseLeave={() => setCursorType('default')}
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Home</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 project-content">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map(tech => (
                  <span key={tech} className="inline-block text-xs py-1 px-2 bg-white/5 rounded-full text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mb-8">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover-target btn-outline inline-flex items-center"
                    onMouseEnter={() => setCursorType('button')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    <Github size={18} className="mr-2" />
                    GitHub Repo
                  </a>
                )}
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover-target btn-primary inline-flex items-center"
                    onMouseEnter={() => setCursorType('button')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            
            <motion.div 
              className="rounded-lg overflow-hidden mb-10 glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto" 
                loading="lazy"
              />
            </motion.div>
            
            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-semibold text-white">Project Overview</h2>
              <p>{project.fullDescription || project.description}</p>
              
              <h2 className="text-2xl font-semibold text-white">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Interactive user interface with smooth animations and transitions</li>
                <li>Responsive design that works seamlessly across all devices</li>
                <li>High performance optimization for fast loading times</li>
                <li>Modern architecture following best practices</li>
                <li>Carefully crafted user experience with attention to detail</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-white">Technology Stack</h2>
              <p>
                This project was built using {project.technologies.join(', ')}.
                Each technology was carefully selected to meet the specific requirements of the project
                and to ensure the best possible performance and user experience.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">Challenges & Solutions</h2>
              <p>
                One of the major challenges was implementing the interactive elements while maintaining 
                high performance. I solved this by optimizing render cycles and using efficient animation 
                techniques such as GPU-accelerated transforms and opacity changes.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">Lessons Learned</h2>
              <p>
                This project helped me deepen my understanding of state management and performance 
                optimization in complex interactive applications. I also improved my skills in 
                creating accessible UI components that work across all devices.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="glass-card p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Project Details
                <span className="absolute -bottom-2 left-0 h-0.5 w-16 bg-white/30"></span>
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-zinc-400 text-sm">Project Type</p>
                  <p className="text-white">Application</p>
                </div>
                
                <div>
                  <p className="text-zinc-400 text-sm">Role</p>
                  <p className="text-white">Frontend Developer</p>
                </div>
                
                <div>
                  <p className="text-zinc-400 text-sm">Timeline</p>
                  <p className="text-white">1-3 weeks</p>
                </div>
              </div>
              
              <h4 className="font-medium text-white mb-3">Other Projects</h4>
              
              <div className="space-y-4">
                {projects
                  .filter(p => p.id !== id)
                  .slice(0, 3)
                  .map(p => (
                    <Link 
                      key={p.id} 
                      to={`/project/${p.id}`}
                      className="hover-target block p-3 rounded-md hover:bg-white/5 transition-colors"
                      onMouseEnter={() => setCursorType('link')}
                      onMouseLeave={() => setCursorType('default')}
                    >
                      <h5 className="font-medium text-white">{p.title}</h5>
                      <p className="text-sm text-zinc-400 line-clamp-1">{p.description}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
