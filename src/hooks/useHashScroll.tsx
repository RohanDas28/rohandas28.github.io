import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    const rawHash = location.hash;
    if (rawHash) {
      const id = rawHash.replace('#', '');
      
      const scrollToTarget = () => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navHeight;

          window.scrollTo({
            top: offsetPosition > 0 ? offsetPosition : 0,
            behavior: 'smooth'
          });
          return true;
        }
        return false;
      };

      // Try scrolling immediately
      if (!scrollToTarget()) {
        // If element is not yet in DOM, retry with intervals
        const timer1 = setTimeout(scrollToTarget, 100);
        const timer2 = setTimeout(scrollToTarget, 300);
        const timer3 = setTimeout(scrollToTarget, 600);

        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
          clearTimeout(timer3);
        };
      }
    }
  }, [location.pathname, location.hash]);
};

export default useHashScroll;
