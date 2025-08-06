"use client";

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedInIcon } from "@/components/icons";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full p-8 pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-teal-900/10 to-indigo-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(120,119,198,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(59,130,246,0.08),transparent_60%)]"></div>
      <div
        className="block dark:hidden pointer-events-none absolute bottom-0 left-0 w-full h-20 z-20"
        style={{
          background: "linear-gradient(to bottom, transparent, #fff 90%)",
        }}
      />
      <div
        className="hidden dark:block pointer-events-none absolute bottom-0 left-0 w-full h-20 z-20"
        style={{
          background: "linear-gradient(to bottom, transparent, #000 90%)",
        }}
      />

      <motion.div
        className="w-full mx-auto px-6 flex flex-col items-center gap-10 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-sm uppercase tracking-widest text-default-500 font-medium">
            Contato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-default-900 ">Vamos conversar!</span>
          </h1>
          <p className="text-lg text-default-600 max-w-xl mx-auto">
            Tem uma ideia, projeto ou oportunidade? Preencha o formulário ou me
            encontre nas redes abaixo.
          </p>
        </motion.div>

        <div className="w-full space-y-12 max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-default-500 max-w-2xl mx-auto text-lg">
              Essas são algumas das formas para entrar em contato comigo
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* GitHub Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group cursor-pointer"
              onClick={() => window.open(siteConfig.links.github, "_blank")}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-gray-600 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-gray-900/20">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                      <GithubIcon size={32} className="text-gray-900" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">GitHub</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Explore meus repositórios e projetos open source
                    </p>
                  </div>
                  <div className="w-full pt-4 border-t border-gray-800">
                    <div className="flex items-center justify-center text-gray-400 group-hover:text-white transition-colors duration-300">
                      <span className="text-sm font-medium">Ver Projetos</span>
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group cursor-pointer"
              onClick={() => window.open(siteConfig.links.linkedin, "_blank")}
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-900/30">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                      <LinkedInIcon size={32} className="text-blue-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Conecte-se comigo para oportunidades profissionais
                    </p>
                  </div>
                  <div className="w-full pt-4 border-t border-blue-500/30">
                    <div className="flex items-center justify-center text-blue-100 group-hover:text-white transition-colors duration-300">
                      <span className="text-sm font-medium">Conectar</span>
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:joaopedro.zampoli@gmail.com")
              }
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-3xl border border-emerald-400/30 hover:border-emerald-300/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-emerald-900/30">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors duration-300">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="text-emerald-600"
                      >
                        <path
                          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline
                          points="22,6 12,13 2,6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-xs text-white font-bold">!</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">E-mail</h3>
                    <p className="text-emerald-100 text-sm leading-relaxed">
                      Envie um e-mail direto para contato imediato
                    </p>
                  </div>
                  <div className="w-full pt-4 border-t border-emerald-400/30">
                    <div className="flex items-center justify-center text-emerald-100 group-hover:text-white transition-colors duration-300">
                      <span className="text-sm font-medium">Escrever</span>
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Formulário Section */}
          <motion.div
            id="contact-form"
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                Envie uma mensagem
              </h3>
              <p className="text-default-500 max-w-xl mx-auto">
                Preencha o formulário abaixo e entrarei em contato o mais breve
                possível
              </p>
            </div>

            <Card className="relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 dark:text-white transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 dark:text-white transition-colors"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    placeholder="Conte-me sobre seu projeto, ideia ou oportunidade..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 dark:text-white transition-colors resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Enviar mensagem
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
