import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { Layout, Server, Cloud, Palette, Sparkles, Terminal } from 'lucide-react';

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  accent: string;
  borderHover: string;
  glowColor: string;
  description: string;
  skills: string[];
}

const techCategories: TechCategory[] = [
  {
    title: 'Frontend',
    icon: <Layout size={20} className="text-cyan-400" />,
    accent: 'from-cyan-500/20 to-sky-500/5',
    borderHover: 'hover:border-cyan-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    description: 'Building fast, accessible, and reactive user interfaces',
    skills: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend',
    icon: <Server size={20} className="text-indigo-400" />,
    accent: 'from-indigo-500/20 to-purple-500/5',
    borderHover: 'hover:border-indigo-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
    description: 'Architecting robust APIs, databases, and authentication systems',
    skills: ['Node.js', 'Express', 'MongoDB', 'Strapi', 'Supabase']
  },
  {
    title: 'Infrastructure',
    icon: <Cloud size={20} className="text-sky-400" />,
    accent: 'from-sky-500/20 to-blue-500/5',
    borderHover: 'hover:border-sky-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]',
    description: 'Deploying, containerizing, and scaling web infrastructure',
    skills: ['Docker', 'Linux', 'Git', 'Cloudflare', 'Vercel', 'DigitalOcean']
  },
  {
    title: 'Creative',
    icon: <Palette size={20} className="text-pink-400" />,
    accent: 'from-pink-500/20 to-rose-500/5',
    borderHover: 'hover:border-pink-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
    description: 'Crafting design systems, motion graphics, and media assets',
    skills: ['Figma', 'Photoshop', 'Premiere Pro', 'After Effects']
  }
];

const secondaryTechnologies = [
  'WordPress', 'WooCommerce', 'Firebase', 'GSAP', 'Three.js', 'PHP', 'Python', 'C', 'Java'
];

const TechStack = () => {
  const { setCursorType } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 bg-transparent relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Terminal size={13} />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            What I Work With
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Modern technologies, frameworks, and engineering tools I rely on daily to ship performant web applications.
          </p>
        </div>

        {/* 4-Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`group relative rounded-2xl p-6 sm:p-7 backdrop-blur-xl bg-white/[0.02] border border-white/10 ${category.borderHover} ${category.glowColor} transition-all duration-300 flex flex-col justify-between`}
              onMouseEnter={() => setCursorType('text')}
              onMouseLeave={() => setCursorType('default')}
            >
              {/* Subtle gradient background glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-zinc-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skill Badges / Tags */}
                <div className="flex flex-wrap gap-2 pt-4 mt-2 border-t border-white/5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border border-white/10 hover:border-white/20 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary Also Worked With Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center pt-4"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 px-4 sm:px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-zinc-400">
            <span className="text-zinc-500 font-medium flex items-center gap-1.5">
              <Sparkles size={13} className="text-zinc-400" />
              Also worked with:
            </span>
            <span className="text-zinc-300 font-mono">
              {secondaryTechnologies.join(' · ')}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;

