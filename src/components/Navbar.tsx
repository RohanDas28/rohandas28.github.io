import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { AlignJustify, X, ExternalLink, Rocket } from 'lucide-react';

interface NavLink {
  title: string;
  id: string;
}

const navLinks: NavLink[] = [
  { title: 'Home', id: 'hero' },
  { title: 'Projects', id: 'projects' },
  { title: 'About', id: 'about' },
  { title: 'Skills', id: 'skills' },
  { title: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { setCursorType } = useCursor();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll listener to update active section & navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Only calculate active section if on the main page
      if (location.pathname === '/') {
        const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean) as HTMLElement[];
        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (scrollPosition >= section.offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Sync active section from URL hash if present
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const cleanHash = location.hash.replace('#', '');
      if (cleanHash) {
        setActiveSection(cleanHash);
      }
    }
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close mobile menu on resize to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: targetId === 'hero' ? 0 : (offsetPosition > 0 ? offsetPosition : 0),
          behavior: 'smooth'
        });

        window.history.pushState(null, '', `#${targetId}`);
        setActiveSection(targetId);
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      setActiveSection('hero');
    } else {
      navigate('/');
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-zinc-950/80 border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="hover-target group flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-white"
            onMouseEnter={() => setCursorType('button')}
            onMouseLeave={() => setCursorType('default')}
          >
            <span className="font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">&lt;</span>
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-200 transition-all">
              RohanDas
            </span>
            <span className="font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id && location.pathname === '/';
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`hover-target relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  onMouseEnter={() => setCursorType('link')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/15 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.title}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://useboardly.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              <Rocket size={13} className="text-cyan-400" />
              <span>Boardly Live</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hover-target px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-300 shadow-md hover:shadow-cyan-500/20"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden hover-target min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setCursorType('button')}
            onMouseLeave={() => setCursorType('default')}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-20 h-[calc(100dvh-5rem)] bg-zinc-950/95 backdrop-blur-2xl border-t border-white/10 z-40 overflow-y-auto overscroll-contain pb-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id && location.pathname === '/';
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                        isActive
                          ? 'bg-white/10 text-white border border-white/15'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.title}
                    </a>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://useboardly.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium"
                >
                  <Rocket size={16} className="text-cyan-400" />
                  <span>Check out Boardly</span>
                  <ExternalLink size={15} />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="flex items-center justify-center p-3 rounded-xl bg-white text-zinc-950 font-semibold"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
