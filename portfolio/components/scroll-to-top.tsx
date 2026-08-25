"use client";

import { Button } from "@heroui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { ArrowUpIcon } from "@/components/icons";

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
            onPress={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUpIcon size={20} />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ScrollToTop;
