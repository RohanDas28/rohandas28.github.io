
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { useCursor } from '@/context/CursorContext';
import { Github, Linkedin, Twitter, Instagram, Send, MessageSquare, MessagesSquare } from 'lucide-react';

const Contact = () => {
  const { setCursorType } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (sectionRef.current && inView) {
      // Animate section heading
      gsap.fromTo(
        sectionRef.current.querySelector('.section-heading'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );

      // Animate social links
      if (socialLinksRef.current) {
        const socialLinks = socialLinksRef.current.querySelectorAll('.social-link');
        gsap.fromTo(
          socialLinks,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power3.out",
            delay: 0.3
          }
        );
      }
    }
  }, [inView]);

  const socialLinks = [
    { name: "GitHub", icon: <Github size={24} />, url: "https://github.com/RohanDas28", color: "hover:bg-[#333]" },
    { name: "LinkedIn", icon: <Linkedin size={24} />, url: "https://linkedin.com/in/RohanDas28", color: "hover:bg-[#0077b5]" },
    { name: "Twitter", icon: <Twitter size={24} />, url: "https://twitter.com/RohanDas28", color: "hover:bg-[#1da1f2]" },
    { name: "Instagram", icon: <Instagram size={24} />, url: "https://instagram.com/rohandasrd", color: "hover:bg-gradient-to-r from-[#405de6] via-[#fd1d1d] to-[#ffdc80]" },
    { name: "Telegram", icon: <Send size={24} />, url: "https://t.me/rohandas28", color: "hover:bg-[#0088cc]" },
    { name: "Reddit", icon: <MessagesSquare size={24} />, url: "https://reddit.com/user/rohandas28", color: "hover:bg-[#ff4500]" },
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-900 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-hero-pattern opacity-[0.02]"></div>
      <div className="absolute bottom-[20%] right-[10%] w-72 h-72 rounded-full bg-white/5 blur-[100px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
            Let's connect! Reach out on any of these platforms.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 rounded-lg" ref={socialLinksRef}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link flex flex-col items-center justify-center hover-target p-6 rounded-lg bg-white/5 ${link.color} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  onMouseEnter={() => setCursorType('button')}
                  onMouseLeave={() => setCursorType('default')}
                  aria-label={link.name}
                >
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-3">
                    {link.icon}
                  </div>
                  <span className="text-white font-medium">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-zinc-400 mb-4">Prefer email? Reach out directly:</p>
              <a
                href="mailto:rohandas1388@gmail.com"
                className="inline-flex items-center hover-target text-white font-medium text-lg group"
                onMouseEnter={() => setCursorType('link')}
                onMouseLeave={() => setCursorType('default')}
              >
                <MessageSquare size={20} className="mr-2" />
                <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                  rohandasbirbhum@gmail.com
                </span>
              </a>
            </div>

            <div className="mt-10">
              <div className="code-card p-6 rounded-lg bg-zinc-950/50 border border-zinc-800">
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
                <div className="font-mono text-sm">
                  <div className="text-zinc-500">// Here's a joke for you 🤓</div>
                  <div><span className="text-blue-400">fetch</span>(<span className="text-orange-300">'https://official-joke-api.appspot.com/random_joke'</span>)</div>
                  <div className="pl-4 text-zinc-300">.then(res =&gt; res.json())</div>
                  <div className="pl-4 text-zinc-300">.then(data =&gt; {`{`}</div>
                  <div className="pl-8 text-zinc-300">console.log(data.setup);</div>
                  <div className="pl-8 text-zinc-300">console.log(data.punchline);</div>
                  <div className="pl-4 text-zinc-300">{`}`});</div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
