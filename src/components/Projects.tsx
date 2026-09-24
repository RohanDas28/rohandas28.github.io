import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { useCursor } from '@/context/CursorContext';
import { ExternalLink, Github, ArrowUpRight, FolderGit2, Zap } from 'lucide-react';

type CategoryFilter = 'All' | 'Full Stack' | 'Automation';

const categories: CategoryFilter[] = ['All', 'Full Stack', 'Automation'];

const Projects = () => {
  const { setCursorType } = useCursor();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-24 bg-transparent relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <FolderGit2 size={13} />
            <span>Featured Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Featured Projects &amp; Creations
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Curated highlights of production web applications, real-time collaboration platforms, and AI automation.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 max-w-full px-1">
            {categories.map((category) => {
              const count = category === 'All' 
                ? projects.length 
                : projects.filter(p => p.category === category).length;
              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`hover-target relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
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
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-cyan-500/30 text-cyan-200' : 'bg-white/5 text-zinc-500'}`}>
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid - Balanced 3 Columns, Compact Proportions */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const isFlagship = project.id === 'boardly-visual-workspace';

                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className={`group relative flex flex-col rounded-xl overflow-hidden backdrop-blur-xl bg-white/[0.03] border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isFlagship
                        ? 'border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-cyan-500/15 ring-1 ring-cyan-500/20'
                        : 'border-white/10 hover:border-white/20 hover:shadow-sky-500/10'
                    }`}
                    onMouseEnter={() => setCursorType('button')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    {/* Badge */}
                    {project.badge && (
                      <div className="absolute top-2.5 right-2.5 z-20">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-zinc-950/85 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.25)] backdrop-blur-md">
                          <Zap size={10} className="text-cyan-400" />
                          {project.badge}
                        </span>
                      </div>
                    )}

                    {/* Project Image Container - Compact 16:9 Aspect */}
                    <Link to={`/project/${project.id}`} className="relative block overflow-hidden aspect-[16/9.5] bg-zinc-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                      
                      {/* View Details Overlay Cue */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 backdrop-blur-[2px]">
                        <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-white/95 text-zinc-950 flex items-center gap-1 shadow-md">
                          <span>View Details</span>
                          <ArrowUpRight size={13} />
                        </span>
                      </div>
                    </Link>

                    {/* Project Content - Compact Padding */}
                    <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Category & Dot */}
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: project.color }}
                            />
                            <span className="text-[11px] uppercase font-mono tracking-wider text-zinc-400">
                              {project.category || 'Project'}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors line-clamp-1">
                          <Link to={`/project/${project.id}`}>
                            {project.title}
                          </Link>
                        </h3>

                        {/* Description */}
                        <p className="text-zinc-400 text-xs sm:text-[13px] line-clamp-2 mb-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech Chips */}
                        <div className="flex flex-wrap gap-1 mb-3.5">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/5 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-400 font-mono">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center justify-between pt-3 border-t border-white/5">
                          <div className="flex items-center gap-1.5">
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover-target inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-md bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span>Live Demo</span>
                                <ExternalLink size={11} />
                              </a>
                            )}

                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover-target inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.05] text-zinc-300 hover:text-white hover:bg-white/[0.1] border border-white/5 transition-all duration-200"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`GitHub repo for ${project.title}`}
                              >
                                <Github size={12} />
                                <span>Code</span>
                              </a>
                            )}
                          </div>

                          <Link
                            to={`/project/${project.id}`}
                            className="hover-target text-[11px] font-medium text-zinc-400 hover:text-white flex items-center gap-0.5 transition-colors"
                          >
                            <span>Case study</span>
                            <ArrowUpRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* View More on GitHub Footer Banner */}
        <div className="text-center mt-10 sm:mt-12 px-2">
          <a
            href="https://github.com/rohandas28"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-target inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-xs font-medium transition-all duration-300 shadow-md max-w-full text-center"
            onMouseEnter={() => setCursorType('link')}
            onMouseLeave={() => setCursorType('default')}
          >
            <Github size={15} className="shrink-0" />
            <span className="hidden sm:inline">Discover more repositories &amp; open source work on GitHub</span>
            <span className="inline sm:hidden">More repositories on GitHub</span>
            <ExternalLink size={12} className="opacity-70 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

