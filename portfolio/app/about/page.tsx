"use client";

import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { button as buttonStyles } from "@heroui/theme";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import ScrollToTop from "@/components/scroll-to-top";

export default function AboutPage() {
  const skills = [
    { name: "JavaScript", color: "warning" },
    { name: "TypeScript", color: "primary" },
    { name: "React", color: "secondary" },
    { name: "Next.js", color: "default" },
    { name: "Node.js", color: "success" },
    { name: "Python", color: "warning" },
    { name: "C/C++", color: "danger" },
    { name: "Unity (C#)", color: "secondary" },
    { name: "HTML/CSS", color: "primary" },
    { name: "SQL", color: "default" },
    { name: "Git", color: "danger" },
    { name: "Arduino", color: "success" }
  ];

  const projects = [
    {
      title: "ProjetoCEGI",
      description: "Projeto de Programação de Jogos na Unity Engine (C#) desenvolvido durante o curso do CEGI-Unifesp",
      tech: ["Unity", "C#", "Game Development"],
      link: "https://github.com/JoaoPedroZampoli/ProjetoCEGI"
    },
    {
      title: "Sistema de Transporte PcD",
      description: "Software para melhoria e adequação do transporte público metropolitano para usuários PcD",
      tech: ["Web Development", "Accessibility", "Public Transport"],
      link: "#"
    },
    {
      title: "Banco de Dados - Unifesp",
      description: "Modelos, diagramas e códigos desenvolvidos durante a disciplina de Banco de Dados",
      tech: ["SQL", "Database Design", "TypeScript"],
      link: "https://github.com/JoaoPedroZampoli/BD-Unifesp"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      {/* Hero Section - Full Viewport */}
      <div className="min-h-screen w-full p-16 flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-teal-900/5 to-indigo-900/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]"></div>

        {/* Gradiente de transição para o preto (dark) e para o claro (light) */}
        <div className="block dark:hidden pointer-events-none absolute bottom-0 left-0 w-full h-20 z-20" style={{ background: 'linear-gradient(to bottom, transparent, #fff 90%)' }} />
        <div className="hidden dark:block pointer-events-none absolute bottom-0 left-0 w-full h-20 z-20" style={{ background: 'linear-gradient(to bottom, transparent, #000 90%)' }} />

        <motion.div className="w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}>

          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>

              <motion.p
                className="text-sm uppercase tracking-widest text-default-500 mb-4 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                Desenvolvedor de Software
              </motion.p>
              
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-default-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}>
                Olá! Eu sou o<br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  João Pedro
                </span>
              </motion.h1>

              <motion.div
                className="space-y-4 text-default-600 text-lg leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                <p>
                  Estudante de <span className="text-primary font-semibold">Ciência e Tecnologia com ênfase em Ciência da Computação</span> na Unifesp, 
                  apaixonado por tecnologia e desenvolvimento de software.
                </p>
                <p>
                  Participando ativamente de projetos de extensão universitária focados em <span className="text-success font-medium">impacto social</span> e <span className="text-warning font-medium">educação tecnológica</span>.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}>
                <Button 
                  as={Link}
                  href="https://www.linkedin.com/in/joaopedrozampoli/"
                  target="_blank"
                  className={buttonStyles({ color: "primary", radius: "full", variant: "flat", size: "lg" })}
                >
                  LinkedIn
                </Button>
                <Button 
                  as={Link}
                  href="https://github.com/JoaoPedroZampoli"
                  target="_blank"
                  className={buttonStyles({ color: "default", radius: "full", variant: "flat", size: "lg" })}
                >
                  GitHub
                </Button>
                <Button 
                  as={Link}
                  href="/resume/Curriculo - Online Version - JoaoPedroZampoli.pdf"
                  target="_blank"
                  className={buttonStyles({ color: "secondary", radius: "full", variant: "flat", size: "lg" })}
                >
                  Currículo
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <Image
                isBlurred
                alt="João Pedro Zampoli"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover"
                src="https://avatars.githubusercontent.com/u/107592828?s=400&u=97107e6083eac30f35ab3b4db8fc44ed0ca64f82&v=4"
                radius="lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div className="w-full max-w-4xl mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.2 }}>
        
        <h2 className={title({ size: "md", class: "mb-8 text-center" })}>
          Habilidades Técnicas
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Chip 
                color={skill.color as any}
                variant="flat"
                size="lg"
                className="text-sm font-medium"
              >
                {skill.name}
              </Chip>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div className="w-full max-w-4xl mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.25 }}>
        
        <h2 className={title({ size: "md", class: "mb-8 text-center" })}>
          Projetos em Destaque
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardBody className="p-6">
                  <h3 className="text-lg font-bold text-default-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-default-600 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Chip 
                        key={tech}
                        size="sm" 
                        variant="dot" 
                        color="primary"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <Button
                      as={Link}
                      href={project.link}
                      target="_blank"
                      size="sm"
                      variant="light"
                      color="primary"
                    >
                      Ver Projeto →
                    </Button>
                  )}
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ScrollToTop />
    </section>
  );
}
