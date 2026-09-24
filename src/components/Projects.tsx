import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects, Project } from '@/data/projects';
import { useCursor } from '@/context/CursorContext';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Filter } from 'lucide-react';

type CategoryFilter = 'All' | 'Full Stack' | 'Web Apps' | 'Automation';

const categories: CategoryFilter[] = ['All', 'Full Stack', 'Web Apps', 'Automation'];

const Projects = () => {
  const { setCursorType } = useCursor();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-zinc-950 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Featured Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects &amp; Creations
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            A showcase of production web applications, collaborative tools, full-stack systems, and automation scripts.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 max-w-full px-1">
            {categories.map((category) => {
              const count = category === 'All' 
                ? projects.length 
                : projects.filter(p => p.category === category).length;
              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`hover-target relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200 bg-white/[0.02] border border-white/5 hover:bg-white/[0.05]'
                  }`}
                  onMouseEnter={() => setCursorType('button')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-sky-500/20 rounded-full border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {category}
                    <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-cyan-500/30 text-cyan-200' : 'bg-white/5 text-zinc-500'}`}>
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isFlagship = project.id === 'boardly-visual-workspace';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className={`group relative flex flex-col rounded-2xl overflow-hidden backdrop-blur-xl bg-white/[0.03] border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                    isFlagship
                      ? 'border-cyan-500/30 hover:border-cyan-400/70 hover:shadow-cyan-500/20 ring-1 ring-cyan-500/20'
                      : 'border-white/10 hover:border-white/20 hover:shadow-sky-500/10'
                  }`}
                  onMouseEnter={() => setCursorType('button')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {/* Flagship Badge */}
                  {project.badge && (
                    <div className="absolute top-3.5 right-3.5 z-20">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.35)] backdrop-blur-md">
                        <Sparkles size={11} className="text-cyan-400" />
                        {project.badge}
                      </span>
                    </div>
                  )}

                  {/* Project Image Container */}
                  <Link to={`/project/${project.id}`} className="relative block overflow-hidden aspect-[16/10] bg-zinc-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* View Details Overlay Cue */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <span className="px-4 py-2 rounded-full text-xs font-semibold bg-white/90 text-zinc-950 flex items-center gap-1.5 shadow-lg">
                        <span>View Project Details</span>
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </Link>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category & Status */}
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: project.color }}
                          />
                          <span className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                            {project.category || 'Project'}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        <Link to={`/project/${project.id}`}>
                          {project.title}
                        </Link>
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-400 font-mono">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover-target inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Live App</span>
                              <ExternalLink size={12} />
                            </a>
                          )}

                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover-target inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.05] text-zinc-300 hover:text-white hover:bg-white/[0.1] border border-white/5 transition-all duration-200"
                              onClick={(e) => e.stopPropagation()}
                              aria-label={`GitHub repo for ${project.title}`}
                            >
                              <Github size={13} />
                              <span>Code</span>
                            </a>
                          )}
                        </div>

                        <Link
                          to={`/project/${project.id}`}
                          className="hover-target text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                        >
                          <span>Case study</span>
                          <ArrowUpRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View More on GitHub Footer Banner */}
        <div className="text-center mt-12 sm:mt-16 px-2">
          <a
            href="https://github.com/rohandas28"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-target inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-lg max-w-full text-center"
            onMouseEnter={() => setCursorType('link')}
            onMouseLeave={() => setCursorType('default')}
          >
            <Github size={16} className="shrink-0" />
            <span className="hidden sm:inline">Discover more repositories &amp; open source work on GitHub</span>
            <span className="inline sm:hidden">More repositories on GitHub</span>
            <ExternalLink size={13} className="opacity-70 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
