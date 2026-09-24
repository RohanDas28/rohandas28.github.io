import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

const CustomCursor = () => {
  const { cursorType } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing circle
  const springX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(mediaQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsPointerDevice(e.matches);
    };

    mediaQuery.addEventListener('change', handlePointerChange);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handlePointerChange);
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isPointerDevice || !isVisible) return null;

  const isInteractive = cursorType === 'button' || cursorType === 'link';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer trailing aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isInteractive ? 54 : 32,
          height: isInteractive ? 54 : 32,
          backgroundColor: isInteractive ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
          borderColor: isInteractive ? 'rgba(56, 189, 248, 0.6)' : 'rgba(255, 255, 255, 0.25)',
          scale: isInteractive ? 1.15 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />

      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none bg-sky-400"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isInteractive ? 8 : 5,
          height: isInteractive ? 8 : 5,
          opacity: 0.9,
          backgroundColor: isInteractive ? '#38bdf8' : '#ffffff',
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};

export default CustomCursor;
