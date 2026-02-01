import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadeInProps } from '../types';

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  duration = 0.8,
  className = "" 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 40 };
      case 'down': return { opacity: 0, y: -40 };
      case 'left': return { opacity: 0, x: 40 };
      case 'right': return { opacity: 0, x: -40 };
      default: return { opacity: 0, y: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'up': return { opacity: 1, y: 0 };
      case 'down': return { opacity: 1, y: 0 };
      case 'left': return { opacity: 1, x: 0 };
      case 'right': return { opacity: 1, x: 0 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for "luxurious" feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};