'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/JoaoPedroZampoli',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      description: 'Veja meus projetos e repositórios',
      color: 'bg-gray-900 hover:bg-gray-800',
      textColor: 'text-white',
      borderColor: 'border-gray-700',
      hoverEffect: 'hover:border-blue-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/joaopedrozampoli/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      description: 'Conecte-se comigo profissionalmente',
      color: 'bg-blue-700 hover:bg-blue-600',
      textColor: 'text-white',
      borderColor: 'border-blue-600',
      hoverEffect: 'hover:border-blue-300'
    },
    {
      name: 'Email',
      url: 'mailto:joao.zampoli@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      description: 'Entre em contato via e-mail',
      color: 'bg-emerald-700 hover:bg-emerald-600',
      textColor: 'text-white',
      borderColor: 'border-emerald-600',
      hoverEffect: 'hover:border-emerald-300'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-emerald-500 text-transparent bg-clip-text">
            Vamos Conversar
          </h2>
          
          <p className="text-gray-300 text-lg text-center mb-12 max-w-2xl mx-auto">
            Interessado em trabalhar juntos ou tem alguma pergunta? Fique à vontade para entrar em contato através de qualquer um dos canais abaixo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link 
                  href={link.url}
                  target="_blank"
                  className={`flex flex-col h-full ${link.color} ${link.textColor} p-6 rounded-xl border-2 ${link.borderColor} ${link.hoverEffect} shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`mr-3 p-3 rounded-full bg-opacity-20 bg-white`}>
                      {link.icon}
                    </div>
                    <h3 className="text-xl font-bold">{link.name}</h3>
                  </div>
                  <p className="text-sm opacity-80 mb-4">{link.description}</p>
                  <div className="mt-auto flex items-center text-sm font-semibold">
                    <span>Conectar</span>
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400">
              Atualmente disponível para oportunidades de trabalho e colaborações.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;