import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { useCursor } from '@/context/CursorContext';
import { Terminal } from 'lucide-react';

const techStacks = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "Bulma", level: 75 },
      { name: "Jekyll", level: 70 }
    ]
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 90 },
      { name: "PHP", level: 70 },
      { name: "C", level: 75 },
      { name: "Java", level: 60 },
      { name: "Lua (scripting)", level: 50 }
    ]
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Firebase", level: 85 },
      { name: "Strapi", level: 80 },
      { name: "Docker", level: 65 },
      { name: "Git / GitHub", level: 90 },
      { name: "Linux", level: 90 }
    ]
  },
  {
    category: "Creative Development",
    skills: [
      { name: "GSAP", level: 70 },
      { name: "Adobe Photoshop", level: 85 },
      { name: "Adobe Premiere Pro", level: 95 },
      { name: "Adobe After Effects", level: 70 },
      { name: "Sony Vegas", level: 90 }
    ]
  },
  {
    category: "CMS & Web Tools",
    skills: [
      { name: "WordPress", level: 90 },
      { name: "Elementor", level: 85 },
      { name: "Divi Builder", level: 80 },
      { name: "WooCommerce", level: 75 }
    ]
  },
  {
    category: "Generative AI Tools",
    skills: [
      { name: "ChatGPT", level: 95 },
      { name: "Gemini", level: 90 },
      { name: "Claude", level: 85 },
      { name: "OpenAI API", level: 85 }
    ]
  }
];

const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  "Framer Motion", "GSAP", "Node.js", "Python", "Docker",
  "Git", "Firebase", "Supabase", "OpenAI API", "Photoshop", "Linux"
];

const TechStack = () => {
  const { setCursorType } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });
  
  useEffect(() => {
    if (sectionRef.current && inView) {
      // Animate skill categories with smooth stagger
      const categories = sectionRef.current.querySelectorAll('.skill-category');
      gsap.fromTo(
        categories,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.6,
          ease: "power2.out",
          delay: 0.1
        }
      );
      
      // Animate skill bars
      const skillBars = sectionRef.current.querySelectorAll('.skill-progress-bar');
      skillBars.forEach((bar, index) => {
        const progress = bar.getAttribute('data-progress') || "0";
        gsap.fromTo(
          bar,
          { width: "0%" },
          { 
            width: `${progress}%`,
            duration: 0.85,
            ease: "power2.out",
            delay: 0.3 + (index * 0.04)
          }
        );
      });
    }
  }, [inView]);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-transparent relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Terminal size={13} />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Tech Stack &amp; Skills
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Modern tools, frameworks, and programming languages I use to bring ideas to life.
          </p>
        </div>
        
        {/* Compact Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {techStacks.map((stack) => (
            <div 
              key={stack.category} 
              className="glass-card p-4 sm:p-5 rounded-xl skill-category border border-white/10 hover:border-white/20 transition-all duration-300"
              onMouseEnter={() => setCursorType('text')}
              onMouseLeave={() => setCursorType('default')}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-white/5">
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                  {stack.category}
                </h3>
                <span className="text-[10px] font-mono text-zinc-500">
                  {stack.skills.length} skills
                </span>
              </div>
              
              {/* Tight Skill Rows */}
              <div className="space-y-2.5">
                {stack.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs sm:text-[13px] mb-1">
                      <span className="text-zinc-300 font-medium">{skill.name}</span>
                      <span className="text-zinc-400 font-mono text-[10px] sm:text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 skill-progress-bar shadow-[0_0_8px_rgba(56,189,248,0.35)]" 
                        data-progress={skill.level}
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Compact Technology Pills */}
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="px-3 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-zinc-300 hover:text-white text-xs font-medium hover-target transition-all duration-200 cursor-pointer"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

