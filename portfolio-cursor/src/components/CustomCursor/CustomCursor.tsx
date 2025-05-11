'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // Usando useCallback para otimizar a performance
  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);
  
  const updateCursorOnHover = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Verificar se o elemento ou seus pais têm o atributo data-cursor-text
    let cursorTextValue = '';
    let element: HTMLElement | null = target;
    
    while (element && !cursorTextValue) {
      if (element.dataset.cursorText) {
        cursorTextValue = element.dataset.cursorText;
        break;
      }
      element = element.parentElement;
    }
    
    // Verificar se o elemento é clicável
    const isClickable = 
      target.tagName === 'BUTTON' || 
      target.tagName === 'A' || 
      target.closest('button') || 
      target.closest('a') ||
      target.classList.contains('clickable') || 
      target.dataset.cursorTrigger === 'true' ||
      target.hasAttribute('role') && target.getAttribute('role') === 'button' ||
      (target.parentElement && (
        target.parentElement.dataset.cursorTrigger === 'true' ||
        target.parentElement.hasAttribute('role') && target.parentElement.getAttribute('role') === 'button'
      ));
    
    setIsHovering(isClickable);
    setCursorText(cursorTextValue);
  }, []);
  
  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
  }, []);
  
  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);
  
  // Adicionar evento para esconder o cursor quando ele sair da janela
  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);
  
  useEffect(() => {
    // Evitar usar requestAnimationFrame para melhorar performance
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', updateCursorOnHover, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    
    // Mostrar o cursor quando o componente montar
    setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateCursorOnHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [updateMousePosition, updateCursorOnHover, handleMouseDown, handleMouseUp, handleMouseLeave]);
  
  // Ocultar cursor em dispositivos móveis
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }
  
  return (
    <motion.div 
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        width: cursorText ? 80 : (isHovering ? 24 : 40),
        height: cursorText ? 80 : (isHovering ? 24 : 40),
        x: '-50%',
        y: '-50%',
        scale: isClicking ? 0.8 : 1,
      }}
      transition={{ 
        duration: 0.15,
        ease: "easeOut",
        scale: {
          duration: 0.1
        }
      }}
    >
      <motion.div
        className="w-full h-full rounded-full flex items-center justify-center"
        style={{
          backgroundColor: cursorText ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.4)',
          boxShadow: isHovering ? '0 0 15px rgba(59, 130, 246, 0.3)' : 'none',
        }}
      >
        {cursorText && (
          <span className="text-xs font-light text-white">
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;