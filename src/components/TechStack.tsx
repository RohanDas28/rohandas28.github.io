
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { useCursor } from '@/context/CursorContext';

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
      { name: "Lua (basic scripting)", level: 50 }
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
      { name: "Git/GitHub", level: 90 },
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


const TechStack = () => {
  const { setCursorType } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  useEffect(() => {
    if (sectionRef.current && inView) {
      // Animate section heading
      gsap.fromTo(
        sectionRef.current.querySelector('.section-heading'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
      
      // Animate skill categories
      const categories = sectionRef.current.querySelectorAll('.skill-category');
      gsap.fromTo(
        categories,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 0.8,
          ease: "power3.out",
          delay: 0.3
        }
      );
      
      // Animate skill bars with staggered delay
      const skillBars = sectionRef.current.querySelectorAll('.skill-progress-bar');
      skillBars.forEach((bar, index) => {
        const progress = bar.getAttribute('data-progress') || "0";
        gsap.fromTo(
          bar,
          { width: 0 },
          { 
            width: `${progress}%`,
            duration: 1,
            ease: "power2.out",
            delay: 0.6 + (index * 0.1)
          }
        );
      });
    }
  }, [inView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js","Tailwind", "Bulma",
    "GSAP", "Three.js", "WebGL", "Node.js", "Firebase",
    "Git", "Docker", "Figma", "Adobe XD","Photoshop","Premiere Pro", "After Effects", "Framer Motion", "OpenAI",
  ];
  
  return (
    <section id="skills" className="py-24 bg-zinc-950 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Tech Stack</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
            My toolkit for building modern, interactive web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {techStacks.map((stack, index) => (
            <div 
              key={stack.category} 
              className="glass-card p-6 rounded-lg skill-category"
              onMouseEnter={() => setCursorType('text')}
              onMouseLeave={() => setCursorType('default')}
            >
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                {stack.category}
                <span className="absolute -bottom-2 left-0 h-0.5 w-16 bg-white/30"></span>
              </h3>
              
              <div className="space-y-4">
                {stack.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full">
                      <div 
                        className="h-1.5 rounded-full bg-white skill-progress-bar" 
                        data-progress={skill.level}
                        style={{ width: 0 }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              className="tech-item px-4 py-2 glass-card rounded-full text-zinc-300 text-sm hover-target cursor-pointer"
              variants={techItemVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.2 } 
              }}
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
