import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { useCursor } from '@/context/CursorContext';
import { Github, Linkedin, Twitter, Instagram, Send, MessageSquare, MessagesSquare, Copy, Check, Mail } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { setCursorType } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [copied, setCopied] = useState(false);

  const emailAddress = "rohandasbirbhum@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  useEffect(() => {
    if (sectionRef.current && inView) {
      gsap.fromTo(
        sectionRef.current.querySelector('.section-heading'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      if (socialLinksRef.current) {
        const socialLinks = socialLinksRef.current.querySelectorAll('.social-link');
        gsap.fromTo(
          socialLinks,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.15
          }
        );
      }
    }
  }, [inView]);

  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/RohanDas28", color: "hover:bg-zinc-800 hover:border-zinc-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://linkedin.com/in/RohanDas28", color: "hover:bg-[#0077b5] hover:border-[#0077b5]/60 hover:shadow-[0_0_20px_rgba(0,119,181,0.35)]" },
    { name: "Twitter / X", icon: <Twitter size={20} />, url: "https://twitter.com/RohanDas28", color: "hover:bg-sky-500 hover:border-sky-400/60 hover:shadow-[0_0_20px_rgba(14,165,233,0.35)]" },
    { name: "Instagram", icon: <Instagram size={20} />, url: "https://instagram.com/rohandasrd", color: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(220,39,67,0.35)]" },
    { name: "Telegram", icon: <Send size={20} />, url: "https://t.me/rohandas28", color: "hover:bg-[#0088cc] hover:border-[#0088cc]/60 hover:shadow-[0_0_20px_rgba(0,136,204,0.35)]" },
    { name: "Reddit", icon: <MessagesSquare size={20} />, url: "https://reddit.com/user/rohandas28", color: "hover:bg-[#ff4500] hover:border-[#ff4500]/60 hover:shadow-[0_0_20px_rgba(255,69,0,0.35)]" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-transparent relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-hero-pattern opacity-[0.02]"></div>
      <div className="absolute bottom-[20%] right-[10%] w-72 h-72 rounded-full bg-cyan-500/5 blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail size={13} />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg">
            Have a project in mind, want to collaborate on something exciting, or just want to say hi? Reach out anytime!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-4 sm:p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl" ref={socialLinksRef}>
            
            {/* Social Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link group flex flex-col items-center justify-center hover-target p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 ${link.color} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  onMouseEnter={() => setCursorType('button')}
                  onMouseLeave={() => setCursorType('default')}
                  aria-label={link.name}
                >
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-white mb-2 transition-all duration-200">
                    {link.icon}
                  </div>
                  <span className="text-white text-xs font-medium">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Direct Email Action Bar */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white/[0.02] p-4 sm:p-6 rounded-xl border border-white/5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <MessageSquare size={20} />
                </div>
                <div className="text-left min-w-0">
                  <span className="text-[11px] sm:text-xs text-zinc-400 block">Direct Inquiries</span>
                  <span className="text-white font-mono font-medium text-xs sm:text-sm md:text-base break-all">
                    {emailAddress}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopyEmail}
                  className="hover-target flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 text-xs font-semibold transition-all duration-200"
                  onMouseEnter={() => setCursorType('button')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  className="hover-target flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-semibold transition-all duration-200 shadow-md"
                  onMouseEnter={() => setCursorType('button')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <span>Compose Mail</span>
                  <Send size={13} />
                </a>
              </div>
            </div>

            {/* Interactive Terminal Snippet */}
            <div className="mt-6 sm:mt-8">
              <div className="code-card p-4 sm:p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 font-mono text-[11px] sm:text-xs md:text-sm overflow-x-auto scrollbar-hide">
                <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]/80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28c840]/80"></div>
                  </div>
                  <span className="text-zinc-500 text-[11px]">contact-api.ts</span>
                </div>
                <div className="space-y-1 text-zinc-300 whitespace-pre sm:whitespace-normal">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">connection</span> ={' '}
                    <span className="text-yellow-300">await</span>{' '}
                    <span className="text-cyan-400">rohan</span>.
                    <span className="text-green-400">connect</span>({`{`}
                  </div>
                  <div className="pl-4 text-zinc-400">
                    email: <span className="text-orange-300">"{emailAddress}"</span>,
                  </div>
                  <div className="pl-4 text-zinc-400">
                    role: <span className="text-orange-300">"Frontend / Full-Stack Engineer"</span>,
                  </div>
                  <div className="pl-4 text-zinc-400">
                    status: <span className="text-emerald-400">"Ready to build great software"</span>
                  </div>
                  <div>{`}`});</div>
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
