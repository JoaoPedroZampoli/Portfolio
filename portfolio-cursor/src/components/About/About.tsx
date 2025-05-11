'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

const experiences = [
  {
    year: '2023',
    title: 'Estudante de Ciência e Tecnologia',
    company: 'Universidade Federal de São Paulo (Unifesp)',
    location: 'São José dos Campos, SP',
    description: 'Cursando Ciência e Tecnologia com ênfase em Ciência da Computação, participando de projetos de extensão: CodeLab, CodeLab Teen e Interlinguando.',
    current: true,
    icon: 'academic'
  },
  {
    year: '2022',
    title: 'Estagiário de Desenvolvimento Web',
    company: 'Desenvolvimento Web',
    location: 'Jacareí, SP',
    description: 'Atuei como estagiário na área de desenvolvimento web utilizando HTML, CSS, JavaScript, jQuery e Bootstrap para criação de interfaces responsivas e interativas.',
    current: false,
    icon: 'code'
  },
  {
    year: '2021',
    title: 'Técnico em Desenvolvimento de Sistemas',
    company: 'Etec de Poá',
    location: 'Poá, SP',
    description: 'Formação técnica em desenvolvimento de sistemas com foco em programação, banco de dados e desenvolvimento de aplicações.',
    current: false,
    icon: 'education'
  },
];

const stats = [
  { label: 'Projetos no GitHub', value: '20+' },
  { label: 'Tecnologias', value: '15+' },
  { label: 'Projetos de Extensão', value: '3' },
  { label: 'Seguidores GitHub', value: '8' },
];

const About = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-emerald-500 text-transparent bg-clip-text">
            Sobre Mim
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 p-6 rounded-xl text-center"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Habilidades</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {skills.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                    activeCategory === category.category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills
                .find((category) => category.category === activeCategory)
                ?.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800/50 p-6 rounded-xl"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-12 text-center">Experiência & Formação</h3>
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:via-blue-500 before:to-emerald-500">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.year} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start group md:flex-col md:items-center"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 bg-gray-800 border-blue-500 shadow shrink-0 md:order-1 z-10">
                    {exp.icon === 'academic' ? (
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    ) : exp.icon === 'code' ? (
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                    )}
                  </div>
                  
                  <div className="min-w-0 md:w-full md:order-2 ml-4 md:ml-0 md:mt-3 p-5 rounded-lg bg-gray-800/50 backdrop-blur-sm shadow-md border-l-4 border-blue-500 hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between mb-1">
                      <div className="flex space-x-2 items-center">
                        <span className={`text-sm font-semibold inline-flex px-2 py-1 rounded-full ${exp.current ? 'text-emerald-400 bg-emerald-400/10' : 'text-blue-400 bg-blue-400/10'}`}>
                          {exp.year} {exp.current && "- Atual"}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-1">{exp.title}</h4>
                    <div className="text-blue-400 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v-1H5v1h10zm0 3v-1H5v1h10z" clipRule="evenodd" />
                      </svg>
                      {exp.company}
                    </div>
                    <div className="text-gray-400 mb-3 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {exp.location}
                    </div>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;