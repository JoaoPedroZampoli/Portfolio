"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos antes da animação começar. */
  delay?: number;
  /** Deslocamento vertical inicial, em pixels. */
  y?: number;
  /** `true` anima na montagem em vez de esperar entrar na viewport. */
  immediate?: boolean;
}

/**
 * Encapsula o padrão de entrada usado em todo o site, que antes estava repetido
 * literalmente em dezenas de `motion.div`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  immediate = false,
}: RevealProps) {
  const animation = {
    initial: { opacity: 0, y },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (immediate) {
    return (
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className={className}
        {...animation}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      viewport={{ once: true, amount: 0.15 }}
      whileInView={{ opacity: 1, y: 0 }}
      {...animation}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
