
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { AlignJustify, X } from 'lucide-react';

const navLinks = [
  { title: 'Home', href: '/#hero' },
  { title: 'Projects', href: '/#projects' },
  { title: 'About', href: '/#about' },
  { title: 'Skills', href: '/#skills' },
  { title: 'Contact', href: '/#contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { setCursorType } = useCursor();
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Update active section based on hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setActiveSection(hash.replace('#', ''));
    }
  }, [window.location.hash]);
  
  // Navbar animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };
  
  // Mobile menu variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 ${scrolled ? 'backdrop-blur-xl bg-zinc-900/80' : 'bg-transparent'} transition-all duration-300`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="hover-target text-2xl font-bold text-white" onClick={() => setIsOpen(false)}>
            <span
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              &lt;RohanDas/&gt;
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className={`hover-target nav-link ${activeSection === link.href.replace('/#', '') ? 'active-nav-link' : ''}`}
                    onMouseEnter={() => setCursorType('link')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden hover-target text-white"
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setCursorType('button')}
            onMouseLeave={() => setCursorType('default')}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden fixed top-0 right-0 w-full h-screen bg-zinc-900/95 backdrop-blur-lg"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <div className="absolute top-0 right-0 p-6">
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-3xl font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
