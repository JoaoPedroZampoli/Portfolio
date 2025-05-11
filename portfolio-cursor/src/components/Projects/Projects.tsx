'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'E-commerce Platform',
    description: 'Uma plataforma de e-commerce completa com carrinho de compras, pagamentos integrados e painel administrativo.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
    color: 'from-blue-600/20 to-blue-800/20'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Dashboard interativo para análise de métricas de redes sociais com gráficos em tempo real e relatórios personalizados.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: '#',
    github: '#',
    color: 'from-purple-600/20 to-purple-800/20'
  },
  {
    title: 'Mobile Fitness App',
    description: 'Aplicativo móvel para acompanhamento de exercícios, dieta e progresso com integração de wearables.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80',
    technologies: ['React Native', 'Firebase', 'Redux'],
    link: '#',
    github: '#',
    color: 'from-emerald-600/20 to-emerald-800/20'
  },
];

// Componente para números de seção inspirado em v7.usestate.org
const SectionNumber = ({ num }: { num: string }) => (
  <div className="absolute left-4 md:left-8 top-4 md:top-8 text-7xl md:text-8xl font-bold text-white/5 select-none z-0">
    {num}
  </div>
);

// Componente para o card de projeto inspirado em allies.studio
const ProjectCard = ({ project, index }: { project: typeof featuredProjects[0], index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  return (
    <motion.div 
      ref={ref}
      className="min-h-screen w-full relative flex items-center justify-center px-4 py-16 md:py-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Numeração de seção */}
      <SectionNumber num={`0${index + 1}`} />
      
      {/* Container do projeto com efeito 3D */}
      <motion.div
        className={`relative w-full max-w-5xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-lg overflow-hidden border border-gray-800/50 shadow-xl ${isHovering ? 'shadow-blue-900/10' : ''}`}
        style={{ y, scale }}
        whileHover={{ scale: 1.02 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Efeito de luz de fundo */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-lg opacity-50 z-0`}
          style={{
            x: isHovering ? mousePosition.x * 0.02 : 0,
            y: isHovering ? mousePosition.y * 0.02 : 0,
          }}
          animate={isHovering ? { opacity: 0.8 } : { opacity: 0.3 }}
        />
        
        <div className="grid md:grid-cols-2 gap-4 p-4 md:p-8 relative z-10">
          {/* Imagem do projeto */}
          <motion.div 
            className="relative h-[260px] md:h-[400px] overflow-hidden rounded-lg group"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              x: isHovering ? mousePosition.x * 0.01 : 0,
              y: isHovering ? mousePosition.y * 0.01 : 0,
            }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/10" />
            </div>
          </motion.div>
          
          {/* Conteúdo do projeto */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              x: isHovering ? mousePosition.x * -0.01 : 0,
              y: isHovering ? mousePosition.y * -0.01 : 0,
            }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white tracking-tight">
              {project.title}
            </h3>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="py-1 px-3 text-sm bg-gray-800/70 text-gray-300 rounded-full border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 mt-auto">
              <Link
                href={project.link}
                className="group relative px-5 py-2 overflow-hidden font-medium text-gray-100 bg-gray-800 border border-gray-700 rounded-sm inline-flex items-center"
              >
                <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center space-x-2">
                  <span>Ver Projeto</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
              <Link
                href={project.github}
                className="group relative px-5 py-2 overflow-hidden font-medium text-gray-300 border border-gray-700 rounded-sm inline-flex items-center"
              >
                <span className="absolute top-0 left-0 w-0 h-full bg-gray-700 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative">GitHub</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative bg-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.5),rgba(30,41,59,0))]"></div>
      
      <div className="relative py-12 md:py-20">
        <motion.div 
          className="container mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block">
            <motion.span 
              className="inline-block mr-2 text-gray-400"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              (
            </motion.span>
            <motion.span 
              className="inline-block text-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              PROJETOS
            </motion.span>
            <motion.span 
              className="inline-block ml-2 text-gray-400"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              )
            </motion.span>
          </h2>
          <motion.div 
            className="h-px w-16 bg-blue-500 mx-auto my-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Seleção de projetos destacados que demonstram minhas habilidades em desenvolvimento web e design.
          </motion.p>
        </motion.div>

        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
        
        <motion.div
          className="flex justify-center mt-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="group relative px-8 py-3 overflow-hidden font-medium text-white border border-gray-700 rounded-sm inline-flex items-center"
          >
            <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative flex items-center">
              <span className="mr-2">Ver todos os projetos</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;