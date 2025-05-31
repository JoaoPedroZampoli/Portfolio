"use client";

import { subtitle, title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { button as buttonStyles } from "@heroui/theme";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import ScrollToTop from "@/components/scroll-to-top";
import { Card, Chip, Divider } from "@heroui/react";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative inline-block mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <Image
                isBlurred
                alt="João Pedro Zampoli"
                className="relative w-48 h-48 object-cover border-4 border-white dark:border-gray-700 shadow-2xl"
                src="/MyPhoto.jpg"
                radius="full"
              />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4"
              variants={fadeInUp}
            >
              João Pedro
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
              variants={fadeInUp}
            >
              Desenvolvedor Full Stack & Estudante de Ciência da Computação
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-8"
              variants={fadeInUp}
            >
              <Chip color="primary" variant="flat" size="lg">🎓 Unifesp</Chip>
              <Chip color="secondary" variant="flat" size="lg">💻 Full Stack</Chip>
              <Chip color="success" variant="flat" size="lg">🚀 Projetos Extensão</Chip>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              <Button
                as={Link}
                href={siteConfig.links.github}
                isExternal
                size="lg"
                color="primary"
                variant="ghost"
                startContent={<GithubIcon size={20} />}
                className="font-medium"
              >
                GitHub
              </Button>
              <Button
                as={Link}
                href={siteConfig.links.linkedin}
                isExternal
                size="lg"
                color="secondary"
                variant="ghost"
                startContent={<LinkedInIcon size={20} />}
                className="font-medium"
              >
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-6 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</h3>
                <p className="text-gray-600 dark:text-gray-300">Anos de Experiência</p>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="p-6 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</h3>
                <p className="text-gray-600 dark:text-gray-300">Projetos Concluídos</p>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="p-6 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">2</h3>
                <p className="text-gray-600 dark:text-gray-300">Projetos de Extensão</p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Content */}
      <motion.section 
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="p-8 md:p-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-2xl">
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Olá! Sou <span className="font-semibold text-blue-600 dark:text-blue-400">João Pedro da Silva Zampoli</span>, 
                  estudante de Ciência e Tecnologia com ênfase em Ciência da Computação na 
                  <span className="font-semibold text-purple-600 dark:text-purple-400"> Unifesp</span>.
                </p>
                
                <p>
                  Minha jornada na programação começou em 2015, e desde então tenho me dedicado 
                  ao desenvolvimento de soluções tecnológicas inovadoras. Atualmente, participo 
                  ativamente de projetos de extensão universitária, incluindo o 
                  <Link href="https://www.codelab-unifesp.org/projetos" className="font-semibold text-yellow-500 hover:text-yellow-400 transition-colors">
                    CodeLab Dev
                  </Link> e o 
                  <Link href="https://www.codelab-unifesp.org/codelab-teen" className="font-semibold text-teal-500 hover:text-teal-400 transition-colors">
                    CodeLab Teen Arduino
                  </Link>.
                </p>
                
                <p>
                  Formado como <span className="font-semibold text-red-500 dark:text-red-400">
                  Técnico em Desenvolvimento de Sistemas</span> pela Etec de Poá, 
                  tenho experiência prática em desenvolvimento web e uma paixão constante 
                  por aprender novas tecnologias e resolver problemas complexos.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Tecnologias & Habilidades
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg h-full">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Chip size="sm" color="primary" variant="flat">React</Chip>
                  <Chip size="sm" color="primary" variant="flat">Next.js</Chip>
                  <Chip size="sm" color="primary" variant="flat">TypeScript</Chip>
                  <Chip size="sm" color="primary" variant="flat">Tailwind CSS</Chip>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg h-full">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Chip size="sm" color="secondary" variant="flat">Node.js</Chip>
                  <Chip size="sm" color="secondary" variant="flat">Python</Chip>
                  <Chip size="sm" color="secondary" variant="flat">APIs REST</Chip>
                  <Chip size="sm" color="secondary" variant="flat">Databases</Chip>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg h-full">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Ferramentas</h3>
                <div className="flex flex-wrap gap-2">
                  <Chip size="sm" color="success" variant="flat">Git</Chip>
                  <Chip size="sm" color="success" variant="flat">VS Code</Chip>
                  <Chip size="sm" color="success" variant="flat">Arduino</Chip>
                  <Chip size="sm" color="success" variant="flat">Figma</Chip>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
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
        
        <div className="flex justify-center mt-10">
          <Button 
            as={Link}
            href="/about"
            className={buttonStyles({
              color: "primary", 
              radius: "full",
              variant: "flat",
              size: "md"
            })}
          >
            Ver trajetória completa
          </Button>
        </div>
      </motion.div>
      {/* Timeline Section */}
      <motion.section 
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Minha Jornada
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {/* Timeline Items */}
            <motion.div className="space-y-12" variants={staggerChildren}>
              {/* 2024 - CodeLab Teen */}
              <motion.div 
                className="relative flex items-center md:justify-center"
                variants={fadeInUp}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                <div className="ml-16 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
                  <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl border-0">
                    <div className="flex items-center justify-between mb-3">
                      <Chip color="primary" size="sm">2024</Chip>
                      <span className="text-2xl">👨‍🏫</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Coordenador de Planejamento
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      CodeLab Teen Arduino - Unifesp
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Coordenação e aplicação de aulas de Arduino para estudantes do ensino médio
                    </p>
                  </Card>
                </div>
              </motion.div>

              {/* 2024 - CodeLab Dev */}
              <motion.div 
                className="relative flex items-center md:justify-center"
                variants={fadeInUp}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                <div className="ml-16 md:ml-auto md:w-5/12 md:pl-8">
                  <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl border-0">
                    <div className="flex items-center justify-between mb-3">
                      <Chip color="secondary" size="sm">2024 - Atual</Chip>
                      <span className="text-2xl">👨‍💻</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Coordenador de Projeto
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      CodeLab Dev - Unifesp (Bolsista PIBEX)
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Desenvolvimento de software para melhoria do transporte público para PcD
                    </p>
                  </Card>
                </div>
              </motion.div>

              {/* 2023 - Unifesp */}
              <motion.div 
                className="relative flex items-center md:justify-center"
                variants={fadeInUp}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-green-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                <div className="ml-16 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
                  <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl border-0">
                    <div className="flex items-center justify-between mb-3">
                      <Chip color="success" size="sm">2023 - Atual</Chip>
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Ciência e Tecnologia
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      ICT - Unifesp
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Bacharelado com ênfase em Ciência da Computação
                    </p>
                  </Card>
                </div>
              </motion.div>

              {/* 2022 - Estágio */}
              <motion.div 
                className="relative flex items-center md:justify-center"
                variants={fadeInUp}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-orange-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                <div className="ml-16 md:ml-auto md:w-5/12 md:pl-8">
                  <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl border-0">
                    <div className="flex items-center justify-between mb-3">
                      <Chip color="warning" size="sm">2022</Chip>
                      <span className="text-2xl">💼</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Estagiário Desenvolvedor Web
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      Inprint Prime
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Desenvolvimento de interfaces e implementação de APIs
                    </p>
                  </Card>
                </div>
              </motion.div>

              {/* 2020-2022 - Etec */}
              <motion.div 
                className="relative flex items-center md:justify-center"
                variants={fadeInUp}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                <div className="ml-16 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
                  <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl border-0">
                    <div className="flex items-center justify-between mb-3">
                      <Chip color="danger" size="sm">2020 - 2022</Chip>
                      <span className="text-2xl">🏫</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Técnico em Desenvolvimento
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      Etec Poá
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Ensino Técnico integrado ao Ensino Médio
                    </p>
                  </Card>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Vamos Trabalhar Juntos?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Estou sempre aberto a novas oportunidades e projetos desafiadores. 
            Entre em contato e vamos criar algo incrível!
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={fadeInUp}
          >
            <Button
              as={Link}
              href="/projects"
              size="lg"
              color="default"
              variant="solid"
              className="bg-white text-blue-600 font-semibold hover:bg-gray-100"
            >
              Ver Projetos
            </Button>
            <Button
              as={Link}
              href={siteConfig.links.github}
              isExternal
              size="lg"
              variant="bordered"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Contato
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <ScrollToTop />
    </div>
  );
}
