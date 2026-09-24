
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
  
  // Animate sections on scroll if any exist
  const sections = document.querySelectorAll('.animate-section');
  sections.forEach((section) => {
    gsap.fromTo(section, 
      { y: 35, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  ScrollTrigger.refresh();
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
