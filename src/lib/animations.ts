
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "framer-motion";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Initialize GSAP animations
export const initAnimations = () => {
  // Clear any existing ScrollTrigger instances first
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
  // Animate sections on scroll
  const sections = document.querySelectorAll('.animate-section');
  sections.forEach((section) => {
    gsap.fromTo(section, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Animate project cards on scroll
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    gsap.fromTo(card, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Animate tech stack items
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach((item, index) => {
    gsap.fromTo(item, 
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.3,
        delay: index * 0.05,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    );
  });
};

// Custom hook to trigger animations when element is in view
export const useAnimateOnView = (ref: React.RefObject<HTMLElement>, animation: string) => {
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (inView && ref.current) {
      ref.current.style.opacity = "1";
      ref.current.classList.add(animation);
    }
  }, [inView, ref, animation]);
  
  return inView;
};
