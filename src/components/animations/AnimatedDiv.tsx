import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface AnimatedDivProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = ""
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay,
        duration,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;