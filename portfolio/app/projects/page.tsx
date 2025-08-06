"use client";

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Image } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";
import { Card } from "@heroui/react";
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LattesIcon, LinkedInIcon } from "@/components/icons";
import ScrollToTop from "@/components/scroll-to-top";

export default function Projects() {
  return (
    // <section className="flex flex-col items-center justify-center gap-4 py-16 md:py-24 ">
    <section className="flex flex-col items-center justify-center">
      {/* Hero Section - Full Viewport */}
      <div className="min-h-screen w-full p-16 p- flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-teal-900/5 to-indigo-900/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]"></div>

        {/* Gradiente de transição para o preto (dark) e para o claro (light) */}
        <div className="block dark:hidden pointer-events-none absolute bottom-0 left-0 w-full h-20 z-20" style={{ background: 'linear-gradient(to bottom, transparent, #fff 90%)' }} />
        <div className="hidden dark:block pointer-events-none absolute bottom-0 left-0 w-full h-20 z-20" style={{ background: 'linear-gradient(to bottom, transparent, #000 90%)' }} />

        <motion.div className="w-full mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}>

          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div
              className="w-full max-w-7xl mx-auto px-6 relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}>

              <div className="text-center mb-20">
                <motion.p
                  className="text-sm uppercase tracking-widest text-default-500 mb-4 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}>
                  Portfólio
                </motion.p>
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-default-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}>
                  Página em Construção
                </motion.h2>
                <motion.p
                  className="text-lg text-default-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}>
                  Uma seleção de alguns dos meus trabalhos
                </motion.p>
              </div>
            </motion.div>
            </div>
        </motion.div>
      </div>
      <motion.div className="w-full max-w-6xl mt-24 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-default-50/50 to-transparent"></div>
        <ScrollToTop />
      </motion.div>
    </section >
  );
}
