'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  
  // Cursor personalizado que segue o mouse corretamente
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Manipulador de scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  };

  // Efeito de letras para "João Pedro" inspirado no v7.usestate.org
  const nameLetters = "João Pedro".split("");
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Cursor personalizado com transformação CSS corrigida e comportamento de hover */}
      <motion.div 
        className="hidden md:block fixed w-[40px] h-[40px] rounded-full bg-blue-500/10 border border-blue-500/30 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          width: cursorText ? 80 : (isHovering ? 20 : 40),
          height: cursorText ? 80 : (isHovering ? 20 : 40),
          opacity: isHovering ? 0.7 : 1,
        }}
        transition={{ 
          duration: 0.15,
          ease: "easeOut" 
        }}
      >
        {cursorText && (
          <span className="absolute inset-0 flex items-center justify-center text-xs font-light text-white opacity-80">
            {cursorText}
          </span>
        )}
      </motion.div>
      
      {/* Background gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-800 to-gray-900"></div>
      
      {/* Linhas de grid - inspirado no arqui9.com */}
      <div className="absolute inset-0 flex justify-between" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.span 
            key={i} 
            className="h-full w-px bg-white/5"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col justify-between" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.span 
            key={i} 
            className="w-full h-px bg-white/5"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Partículas de fundo - reduzido para melhorar a performance */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-500/30"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: ['-10%', '110%'],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              y: { 
                repeat: Infinity, 
                duration: Math.random() * 10 + 15, 
                ease: 'linear' 
              },
              opacity: { 
                repeat: Infinity, 
                duration: Math.random() * 5 + 3, 
                repeatType: 'reverse' 
              },
              scale: { 
                repeat: Infinity, 
                duration: Math.random() * 4 + 2, 
                repeatType: 'reverse' 
              }
            }}
          />
        ))}
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Coluna esquerda - Conteúdo principal */}
            <motion.div 
              className="w-full md:w-7/12 md:pr-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex flex-wrap">
                {nameLetters.map((letter, index) => (
                  <motion.div
                    key={index}
                    className="relative inline-block mr-[0.05em] text-4xl sm:text-5xl md:text-7xl font-bold"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.65,
                      delay: 0.05 * index,
                      ease: [0.215, 0.61, 0.355, 1]
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                    {index === nameLetters.length - 1 && (
                      <span className="inline-block ml-2 text-blue-400">Zampoli</span>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="h-0.5 w-20 bg-blue-500 my-6"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              
              <motion.div 
                className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 h-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Typewriter
                  options={{
                    strings: [
                      'Desenvolvedor Full Stack',
                      'Especialista em React',
                      'Entusiasta de UI/UX',
                      'Apaixonado por Tecnologia',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                  }}
                />
              </motion.div>

              <motion.p 
                className="text-gray-400 text-lg mb-10 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Transformando ideias em experiências digitais impactantes. Desenvolvimento web com foco em design, performance e experiência do usuário.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <motion.a
                  href="#projects"
                  onClick={(e) => handleSmoothScroll(e, 'projects')}
                  className="px-8 py-3 border border-gray-700 text-white font-medium rounded-sm relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => {
                    setCursorText('ver');
                    setIsHovering(true);
                  }}
                  onMouseLeave={() => {
                    setCursorText('');
                    setIsHovering(false);
                  }}
                >
                  <span className="relative z-10">Ver Projetos</span>
                  <motion.span 
                    className="absolute inset-0 bg-blue-600"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                
                <motion.a
                  href="/cv.pdf"
                  download
                  className="px-8 py-3 bg-transparent border border-gray-700 text-gray-300 rounded-sm font-medium relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => {
                    setCursorText('download');
                    setIsHovering(true);
                  }}
                  onMouseLeave={() => {
                    setCursorText('');
                    setIsHovering(false);
                  }}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors">Download CV</span>
                  <motion.span 
                    className="absolute inset-0 bg-blue-600"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Coluna direita - Elemento visual */}
            <motion.div 
              className="w-full md:w-5/12 mt-12 md:mt-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative">
                <svg 
                  viewBox="0 0 200 200" 
                  className="w-full max-w-xs md:max-w-md drop-shadow-xl"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))' }}
                >
                  <motion.path
                    d="M 0, 70 C 0, 56 56, 0 70, 0 S 140, 56 140, 70 84, 140 70, 140 0, 84 0, 70"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: 1,
                      rotate: 360
                    }}
                    transition={{ 
                      pathLength: { duration: 2, ease: "easeInOut" },
                      opacity: { duration: 0.5 },
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                    transform="translate(30, 30)"
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="50"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: 1.5, 
                      opacity: 1,
                    }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1,
                      rotate: 360
                    }}
                    transition={{ 
                      scale: { duration: 1 },
                      opacity: { duration: 0.5 },
                      rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                    }}
                  />
                </svg>
                
                {/* Círculos flutuantes */}
                {[...Array(3)].map((_, i) => (
                  <motion.span 
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-blue-500"
                    style={{ 
                      left: `${50 + (i * 15)}%`, 
                      top: `${30 + (i * 20)}%`,
                      filter: 'blur(1px)'
                    }}
                    animate={{ 
                      y: [0, -15, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 3 + i, 
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        onClick={(e) => handleSmoothScroll(e, 'about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors duration-300"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        onMouseEnter={() => {
          setCursorText('scroll');
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setCursorText('');
          setIsHovering(false);
        }}
      >
        <span className="mb-2">Scroll</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.a>
    </section>
  );
};

export default Hero;