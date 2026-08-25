"use client";

import { Button } from "@heroui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { ArrowUpIcon } from "@/components/icons";
import { scrollBehavior } from "@/lib/motion";

const SHOW_AFTER_PX = 400;

export function ScrollToTop({ label }: { label: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > SHOW_AFTER_PX);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 z-50"
          exit={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            isIconOnly
            aria-label={label}
            color="primary"
            radius="full"
            variant="shadow"
            onPress={() => {
              window.scrollTo({ top: 0, behavior: scrollBehavior() });
              // O próprio clique esconde este botão, e o foco cairia no <body>:
              // quem navega por teclado perderia a posição sem aviso nenhum.
              // Devolver o foco ao início do conteúdo espelha o que o botão faz
              // visualmente.
              document
                .getElementById("main-content")
                ?.focus({ preventScroll: true });
            }}
          >
            <ArrowUpIcon size={20} />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ScrollToTop;
