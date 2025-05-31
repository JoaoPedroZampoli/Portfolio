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
import { Card } from "@heroui/react";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-16 md:py-24 ">
      <motion.div className="w-full flex flex-col md:flex-row items-center gap-8 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.1 }}>
        
        <motion.div className="flex-shrink-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            isBlurred
            alt="João Pedro Zampoli"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:h-100 object-cover"
            src="/MyPhoto.jpg"
            radius="lg"
          />
        </motion.div>
        <motion.div className="flex-1 text-center md:text-left">
          <motion.div>
            <h1 className={title({ class: "text-center md:text-left" })}>
              Sobre Mim
            </h1>
            <h2 className={subtitle({ class: "text-center md:text-left text-wrap" })}>
              João Pedro da Silva Zampoli
              <span className="hidden sm:inline"> - </span>
              <span className="block sm:inline">Desenvolvedor</span>
            </h2>
          </motion.div>
          {/* <div className="space-y-4 text-default-600 text-lg leading-relaxed">
            <p>
              Estudante de Ciência e Tecnologia com ênfase em Ciência da Computação na Unifesp, 
              apaixonado por tecnologia e desenvolvimento de software.
            </p>
            <p>
              Participando ativamente de alguns projetos de extensão universitária como o <Link href="https://www.codelab-unifesp.org/projetos" className="font-bold text-yellow-500">CodeLab Dev</Link> e o <Link href="https://www.codelab-unifesp.org/codelab-teen" className="font-bold text-teal-500">CodeLab Teen Arduino</Link>.
            </p>
            <p>
              Formado como <span className="text-danger font-medium">Técnico em Desenvolvimento de Sistemas</span> pela Etec de Poá, 
              com experiência prática em desenvolvimento web e projetos acadêmicos.
            </p>
          </div> */}
          <motion.div className="space-y-4">
            <Card className="bg-default-50 p-4 rounded-lg shadow-sm border border-default-200">
              
            </Card>

          </motion.div>
          
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <Link isExternal href={siteConfig.links.github} aria-label="GitHub">
              <div className="flex items-center gap-2">
                <GithubIcon size={24} className="text-default-600" />
                <span className="text-sm font-medium text-default-600">GitHub</span>
              </div>
            </Link>
            <Link isExternal href={siteConfig.links.linkedin} aria-label="LinkedIn">
              <div className="flex items-center gap-2">
                <LinkedInIcon size={24} className="text-default-600" />
                <span className="text-sm font-medium text-default-600">LinkedIn</span>
              </div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
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
      <motion.div className="w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >      
          <Card className="w-full p-8 text-center">
            <motion.div className="mb-6">
              <h2 className={title({ size: "md", class: "mb-4" })}>
                Vamos Trabalhar Juntos?
              </h2>
              <p className="text-lg text-default-600 max-w-2xl mx-auto">
                Estou sempre aberto a novas oportunidades e projetos desafiadores. 
                Entre em contato e vamos criar algo incrível!
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                as={Link}
                href="/projects"
                size="lg"
                color="primary"
                variant="flat"
                className="font-medium"
              >
                Ver Projetos
              </Button>
              <Button
                as={Link}
                href={siteConfig.links.github}
                isExternal
                size="lg"
                color="secondary"
                variant="flat"
                startContent={<GithubIcon size={20} />}
                className="font-medium"
              >
                Contato
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      <ScrollToTop />
    </section>
  );
}
