'use client';

import React, { createContext, useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type TransitionContextType = {
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  isAnimating: false,
  setIsAnimating: () => {},
});

export const useTransition = () => useContext(TransitionContext);

// Variantes para a transição de página
const pageVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
};

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();
  
  return (
    <TransitionContext.Provider value={{ isAnimating, setIsAnimating }}>
      {/* Conteúdo da página */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          transition={{ 
            type: 'tween', 
            ease: 'easeInOut',
            duration: 0.3,
          }}
          className="relative min-h-screen"
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => {
            setIsAnimating(false);
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};