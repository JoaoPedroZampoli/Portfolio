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

  const additionalProjects = [
    {
      title: "AED1-Unifesp",
      description: "Repositório de códigos realizados durante a disciplina de Algoritmos e Estruturas de Dados I no ICT - Unifesp",
      tech: ["C", "Algorithms", "Data Structures"],
      link: "https://github.com/JoaoPedroZampoli/AED1-Unifesp"
    },
    {
      title: "Projeto Interlinguando",
      description: "Projeto de extensão universitária focado em intercâmbio cultural e linguístico",
      tech: ["Social Impact", "Education", "Cultural Exchange"],
      link: "https://www.instagram.com/projeto.interlinguando"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-16 md:py-24">
      {/* Hero Section with Photo and Introduction */}
      <motion.div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.1 }}>
        
        <div className="flex-shrink-0">
          <Image
            isBlurred
            alt="João Pedro Zampoli"
            className="w-64 h-64 object-cover"
            src="https://avatars.githubusercontent.com/u/107592828?s=400&u=97107e6083eac30f35ab3b4db8fc44ed0ca64f82&v=4"
            radius="lg"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className={title({ class: "mb-6 text-center md:text-left" })}>
            Olá! Eu sou o João Pedro 👋
          </h1>
          <div className="space-y-4 text-default-600 text-lg leading-relaxed">
            <p>
              Estudante de <span className="text-primary font-semibold">Ciência e Tecnologia com ênfase em Ciência da Computação</span> na Unifesp, 
              apaixonado por tecnologia e desenvolvimento de software.
            </p>
            <p>
              Atualmente vivendo entre <span className="text-secondary font-medium">Jacareí e São José dos Campos</span>, 
              participo ativamente de projetos de extensão universitária focados em <span className="text-success font-medium">impacto social</span> e <span className="text-warning font-medium">educação tecnológica</span>.
            </p>
            <p>
              Formado como <span className="text-danger font-medium">Técnico em Desenvolvimento de Sistemas</span> pela Etec de Poá, 
              com experiência prática em desenvolvimento web e projetos acadêmicos.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <Button 
              as={Link}
              href="https://www.linkedin.com/in/joaopedrozampoli/"
              target="_blank"
              className={buttonStyles({ color: "primary", radius: "full", variant: "flat" })}
            >
              LinkedIn
            </Button>
            <Button 
              as={Link}
              href="https://github.com/JoaoPedroZampoli"
              target="_blank"
              className={buttonStyles({ color: "default", radius: "full", variant: "flat" })}
            >
              GitHub
            </Button>
            <Button 
              as={Link}
              href="/resume/Curriculo - Online Version - JoaoPedroZampoli.pdf"
              target="_blank"
              className={buttonStyles({ color: "secondary", radius: "full", variant: "flat" })}
            >
              Currículo
            </Button>
          </div>
        </div>
      </motion.div>

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

      {/* Additional Projects Section */}
      <motion.div className="w-full max-w-4xl mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.3 }}>
        
        <h2 className={title({ size: "md", class: "mb-8 text-center" })}>
          Outros Projetos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalProjects.map((project, index) => (
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

      {/* Achievements/Stats Section */}
      <motion.div className="w-full max-w-4xl mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.35 }}>
        
        <h2 className={title({ size: "md", class: "mb-8 text-center" })}>
          Conquistas & Estatísticas
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardBody className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-default-600">Projetos de Extensão</div>
            </CardBody>
          </Card>
          
          <Card className="text-center">
            <CardBody className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">20+</div>
              <div className="text-sm text-default-600">Repositórios GitHub</div>
            </CardBody>
          </Card>
          
          <Card className="text-center">
            <CardBody className="p-6">
              <div className="text-3xl font-bold text-success mb-2">2+</div>
              <div className="text-sm text-default-600">Anos de Experiência</div>
            </CardBody>
          </Card>
          
          <Card className="text-center">
            <CardBody className="p-6">
              <div className="text-3xl font-bold text-warning mb-2">12+</div>
              <div className="text-sm text-default-600">Tecnologias</div>
            </CardBody>
          </Card>
        </div>
      </motion.div>

      {/* Timeline Section */}
        <motion.div className="w-full max-w-4xl mt-24 mb-12" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.3 }}>
          
          <h2 className={title({ size: "md", class: "mb-8 text-center block" })}>Minha Trajetória</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-blue-400 before:to-indigo-600">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-white">👨‍🏫</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default-50 p-4 rounded-large shadow-sm border border-default-200">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-default-900">Coordenador de Planejamento</h3>
                  <time className="text-xs font-semibold text-blue-600 whitespace-nowrap">2024 - 2024</time>
                </div>
                <div className="text-default-500 text-sm">
                  <p>Coordenador de Planejamento e Aplicador de Aulas de Arduino dadas para a Escola Estadual (E.E.) Elmano Ferreira Veloso em São José dos Campos</p>
                  <p className="mt-2 text-xs text-cyan-500"><a href="https://www.codelab-unifesp.org/" target="_blank">CodeLab Teen Arduino - Unifesp</a></p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-white">👨‍💻</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default-50 p-4 rounded-large shadow-sm border border-default-200">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-default-900">Coordenador de Projeto (Bolsista PIBEX)</h3>
                  <time className="text-xs font-semibold text-blue-600 whitespace-nowrap">2024 - Atual</time>
                </div>
                <div className="text-default-500 text-sm">
                  <p>Coordenador de Projeto de Extensão para criação de software que visa a melhoria e adequação do transporte público metropolitano para usuários PcD (Pessoa com Deficiência)</p>
                  <p className="mt-2 text-xs text-yellow-400"><a href="https://www.codelab-unifesp.org/" target="_blank">CodeLab Dev - Unifesp</a></p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-white">🎓</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default-50 p-4 rounded-large shadow-sm border border-default-200">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-default-900">Estudante no ICT - Unifesp</h3>
                  <time className="text-xs font-semibold text-blue-600 whitespace-nowrap">2023 - Atual</time>
                </div>
                <div className="text-default-500 text-sm">
                  <p>Cursando Ciência e Tecnologia com ênfase em Ciência da Computação no Instituto de Ciência e Tecnologia da Unifesp em São José dos Campos</p>
                  <p className="mt-2 text-xs text-emerald-500"><a href="https://www.unifesp.br" target="_blank">Unifesp - Universidade Federal de São Paulo</a></p>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-white">👨‍💻</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default-50 p-4 rounded-large shadow-sm border border-default-200">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-default-900">Estagiário de Desenvolvimento Web</h3>
                  <time className="text-xs font-semibold text-blue-600 whitespace-nowrap">2022 - 2022</time>
                </div>
                <div className="text-default-500 text-sm">
                  <p>Criação e modificações de interfaces de usuário, fluxos de sistema, implementações de APIs</p>
                  <p className="mt-2 text-xs text-blue-500"><a href="https://www.inprint01.com.br/" target="_blank">Inprint Prime</a></p>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-white">🎓</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default-50 p-4 rounded-large shadow-sm border border-default-200">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-default-900">Ensino Técnico em Desenvolvimento de Sistemas</h3>
                  <time className="text-xs font-semibold text-blue-600 whitespace-nowrap">2020 - 2022</time>
                </div>
                <div className="text-default-500 text-sm">
                  <p>Ensino Técnico integrado ao Ensino Médio.  Análise e projeto de sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação</p>
                  <p className="mt-2 text-xs text-red-500"><a href="https://www.cps.sp.gov.br/etecs/etec-de-poa/" target="_blank">Etec Poá - Escola Técnica Estadual de Poá</a></p>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-white">💡</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default-50 p-4 rounded-large shadow-sm border border-default-200">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-default-900">Início na Programação</h3>
                  <time className="text-xs font-semibold text-blue-600 whitespace-nowrap">2015/2016</time>
                </div>
                <div className="text-default-500 text-sm">
                  <p>Primeiras tentativas de projetos focados em Desenvolvimento de Games</p>
                  <p className="mt-2 text-xs text-default-400">Autodidatismo e plataformas online</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      {/* Interests and Values Section */}
      <motion.div className="w-full max-w-4xl mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.4 }}>
        
        <h2 className={title({ size: "md", class: "mb-8 text-center" })}>
          Interesses e Valores
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardBody className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-default-900">Educação & Ensino</h3>
              </div>
              <p className="text-default-600">
                Acredito no poder transformador da educação. Através dos projetos CodeLab e CodeLab Teen, 
                trabalho para democratizar o acesso ao conhecimento tecnológico para jovens estudantes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900">
                  <span className="text-2xl">♿</span>
                </div>
                <h3 className="text-xl font-bold text-default-900">Acessibilidade</h3>
              </div>
              <p className="text-default-600">
                Comprometido com o desenvolvimento de soluções tecnológicas inclusivas, 
                especialmente focado em melhorar a mobilidade urbana para pessoas com deficiência.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-bold text-default-900">Game Development</h3>
              </div>
              <p className="text-default-600">
                Apaixonado por desenvolvimento de jogos desde 2015/2016. 
                Exploro criatividade e programação através da Unity Engine e outras ferramentas de desenvolvimento.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-red-700">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-default-900">Web Development</h3>
              </div>
              <p className="text-default-600">
                Constantemente explorando novas tecnologias web para criar experiências digitais 
                modernas, responsivas e centradas no usuário.
              </p>
            </CardBody>
          </Card>
        </div>
      </motion.div>

        <ScrollToTop />
    </section>
  );
}
