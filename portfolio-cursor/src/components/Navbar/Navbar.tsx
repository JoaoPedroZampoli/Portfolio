'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Detectar rolagem para modificar a aparência da barra de navegação
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Fechar menu ao navegar
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  // Navegação suave para links dentro da mesma página
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Se estamos na página inicial
    if (pathname === '/') {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (!target) return;
      
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const links = [
    { href: '/#hero', label: 'Início', id: 'hero' },
    { href: '/#about', label: 'Sobre', id: 'about' },
    { href: '/#projects', label: 'Projetos', id: 'projects' },
    { href: '/#contact', label: 'Contato', id: 'contact' }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-gray-900/80 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-bold text-xl tracking-tight"
            data-cursor-text="home"
          >
            <span className="text-blue-500">{'<'}</span>
            <span className="text-blue-400">JP</span>
            <span className="text-blue-500">{'/>'}</span>
          </Link>
          
          {/* Menu para desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`relative text-sm font-medium tracking-wide transition-colors hover:text-blue-400 ${
                  pathname === link.href ? 'text-blue-400' : 'text-gray-300'
                }`}
                data-cursor-text={link.label.toLowerCase()}
                data-cursor-trigger="true"
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-300 ${
                  pathname === link.href ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}></span>
              </Link>
            ))}
            
            <ThemeToggle />
            
            <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors duration-300"
              data-cursor-text="contato"
              data-cursor-trigger="true"
            >
              Contate-me
            </Link>
          </nav>
          
          {/* Botão de menu para dispositivos móveis */}
          <motion.button
            type="button"
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            data-cursor-trigger="true"
          >
            <span className="sr-only">{isMenuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
            <div className="w-6 h-6 flex flex-col justify-between items-center">
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </motion.button>
        </div>
      </div>
      
      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-gray-900 z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 4rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4 overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className={`text-xl font-medium ${
                    pathname === link.href ? 'text-blue-400' : 'text-gray-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <Link
                href="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-md text-lg font-medium"
              >
                Contate-me
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;