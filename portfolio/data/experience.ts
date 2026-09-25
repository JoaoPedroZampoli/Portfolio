import type { Localized } from "@/i18n/config";
import type { TimelineEntry } from "@/types";

/**
 * Ordem cronológica reversa — o mais recente primeiro.
 * `end` ausente significa "em andamento".
 */
export const timeline: TimelineEntry[] = [
  {
    id: "nubank",
    role: {
      pt: "Estagiário de Engenharia de Software",
      en: "Software Engineering Intern",
    },
    organization: "Nubank",
    organizationUrl: "https://nubank.com.br",
    kind: "work",
    start: "2026-01",
    bullets: {
      pt: [
        "Desenvolvimento de serviços em Clojure dentro do ecossistema de microsserviços do banco",
        "Contato com práticas de engenharia em escala: produção de código, testes e deploy contínuo",
      ],
      en: [
        "Building Clojure services inside the bank's microservice ecosystem",
        "Exposure to engineering practices at scale: writing code, testing and continuous deployment",
      ],
    },
  },
  {
    id: "daak",
    role: {
      pt: "Membro — Assuntos Estudantis",
      en: "Member — Student Affairs",
    },
    organization: "DAAK — Diretório Acadêmico Ada King",
    kind: "volunteering",
    start: "2025-02",
    bullets: {
      pt: [
        "Mediação entre corpo discente, coordenação e docentes em questões acadêmicas",
        "Apoio à comunicação institucional e à representação estudantil",
      ],
      en: [
        "Mediating between students, course coordination and faculty on academic matters",
        "Supporting institutional communication and student representation",
      ],
    },
  },
  {
    id: "codelab-teen",
    role: {
      pt: "Coordenador de Planejamento e Instrutor",
      en: "Planning Coordinator and Instructor",
    },
    organization: "CodeLab Teen Arduino — Unifesp",
    organizationUrl: "https://www.codelab-unifesp.org/",
    kind: "extension",
    start: "2024-06",
    end: "2025-12",
    bullets: {
      pt: [
        "Coordenação do planejamento das aulas junto aos instrutores e à equipe de coleta de resultados",
        "Aulas de Arduino para alunos de ensino médio das E.E. Elmano Ferreira Veloso e Olímpio Catão, em São José dos Campos",
        "Preparação das turmas para uma competição de barcos movidos a Arduino",
      ],
      en: [
        "Coordinating lesson planning with the instructors and the results-collection team",
        "Teaching Arduino to high school students at E.E. Elmano Ferreira Veloso and E.E. Olímpio Catão, in São José dos Campos",
        "Preparing the classes for an Arduino-powered boat competition",
      ],
    },
  },
  {
    id: "codelab-dev",
    role: {
      pt: "Coordenador de Time e Desenvolvedor (Bolsista PIBEX)",
      en: "Team Coordinator and Developer (PIBEX Scholar)",
    },
    organization: "CodeLab Dev — Unifesp",
    organizationUrl: "https://www.codelab-unifesp.org/",
    kind: "extension",
    start: "2024-04",
    end: "2026-06",
    bullets: {
      pt: [
        "Coordenação do time que desenvolve o VApt, software de acessibilidade no transporte público metropolitano",
        "Front-end em Vue.js, Nuxt e Vuetify, com banco PostgreSQL e ambientes em Docker",
        "Condução da reformulação completa do web app e colaboração com o time de marketing do projeto",
      ],
      en: [
        "Leading the team behind VApt, an accessibility platform for metropolitan public transport",
        "Front end in Vue.js, Nuxt and Vuetify, with a PostgreSQL database and Docker environments",
        "Driving the full rewrite of the web app and working with the project's marketing team",
      ],
    },
  },
  {
    id: "unifesp",
    role: {
      pt: "Bacharelado em Ciência e Tecnologia com ênfase em Ciência da Computação",
      en: "BSc in Science & Technology with emphasis in Computer Science",
    },
    organization: "ICT — Unifesp, São José dos Campos",
    organizationUrl: "https://www.unifesp.br",
    kind: "education",
    start: "2023-03",
    end: "2025-12",
    bullets: {
      pt: [
        "Bacharelado Interdisciplinar em Ciência e Tecnologia com ênfase em Ciência da Computação",
        "Disciplinas em compiladores, computação gráfica, inteligência artificial, banco de dados e arquitetura de computadores",
      ],
      en: [
        "Interdisciplinary BSc in Science & Technology with emphasis in Computer Science",
        "Coursework in compilers, computer graphics, artificial intelligence, databases and computer architecture",
      ],
    },
  },
  {
    id: "inprint",
    role: {
      pt: "Estagiário de Desenvolvimento Web",
      en: "Web Development Intern",
    },
    organization: "Inprint Prime",
    organizationUrl: "https://www.inprint01.com.br/",
    kind: "work",
    start: "2022-04",
    end: "2022-12",
    bullets: {
      pt: [
        "Criação e alteração de fluxos de trabalho (workflows) em sistemas web de ECM",
        "Páginas web em HTML, CSS, JavaScript, jQuery e Bootstrap, e integração de APIs",
        "Prototipação de interfaces no Figma",
      ],
      en: [
        "Building and modifying workflows in ECM web systems",
        "Web pages in HTML, CSS, JavaScript, jQuery and Bootstrap, plus API integration",
        "Interface prototyping in Figma",
      ],
    },
  },
  {
    id: "etec",
    role: {
      pt: "Técnico em Desenvolvimento de Sistemas",
      en: "Systems Development Technician",
    },
    organization: "Etec de Poá",
    organizationUrl: "https://www.cps.sp.gov.br/etecs/etec-de-poa/",
    kind: "education",
    start: "2020-02",
    end: "2022-12",
    bullets: {
      pt: [
        "Ensino médio integrado ao técnico: análise e projeto de sistemas, construção, documentação e testes",
        "Onde a programação deixou de ser hobby e virou ofício",
      ],
      en: [
        "High school integrated with technical education: systems analysis and design, building, documentation and testing",
        "Where programming stopped being a hobby and became a craft",
      ],
    },
  },
  {
    id: "inicio",
    role: {
      pt: "Primeiros passos na programação",
      en: "First steps in programming",
    },
    organization: {
      pt: "Autodidatismo e plataformas online",
      en: "Self-taught, through online platforms",
    },
    kind: "education",
    start: "2015",
    end: "2016",
    bullets: {
      pt: [
        "Primeiras tentativas de projetos na Unity 5, aprendendo por tutoriais e tentativa e erro",
      ],
      en: [
        "First attempts at building things in Unity 5, learning through tutorials and trial and error",
      ],
    },
  },
];

export interface EventEntry {
  id: string;
  name: string;
  role: Localized;
  date: Localized;
  description: Localized;
}

export const events: EventEntry[] = [
  {
    id: "sbseg",
    name: "SBSeg — Simpósio Brasileiro de Segurança da Informação e de Sistemas Computacionais",
    role: { pt: "Colaborador — Time Local", en: "Volunteer — Local Team" },
    date: { pt: "Setembro de 2024", en: "September 2024" },
    description: {
      pt: "Suporte a palestrantes e a apresentadores de teses e dissertações durante o evento.",
      en: "Supporting speakers and thesis/dissertation presenters throughout the event.",
    },
  },
  {
    id: "science-days",
    name: "Science Days Brasil 2024 (8ª edição)",
    role: { pt: "Colaborador e Promotor — Estande da Unifesp", en: "Volunteer and Promoter — Unifesp booth" },
    date: { pt: "Março de 2024", en: "March 2024" },
    description: {
      pt: "Apoio a professores e estudantes na divulgação dos cursos de graduação da Unifesp para alunos de diversas escolas.",
      en: "Helping professors and students present Unifesp's undergraduate courses to students from many schools.",
    },
  },
];

/**
 * Projetos de extensão e representação de que participei. Alguns seguem em
 * andamento, outros encerraram — o tempo verbal de cada descrição acompanha o
 * `end` da entrada correspondente na timeline.
 */
export const involvements: {
  id: string;
  name: string;
  url?: string;
  description: Localized;
}[] = [
  {
    id: "codelab",
    name: "CodeLab Dev",
    url: "https://www.codelab-unifesp.org/",
    description: {
      pt: "Coordenei o time que desenvolveu o VApt, plataforma de acessibilidade no transporte público.",
      en: "I coordinated the team that built VApt, an accessibility platform for public transport.",
    },
  },
  {
    id: "codelab-teen",
    name: "CodeLab Teen",
    url: "https://www.instagram.com/codelab.unifesp/",
    description: {
      pt: "Planejei e ministrei aulas de Arduino para alunos de ensino médio da rede pública.",
      en: "I planned and taught Arduino classes to public high school students.",
    },
  },
  {
    id: "daak",
    name: "DAAK",
    url: "https://www.instagram.com/daak.unifesp/",
    description: {
      pt: "Represento os estudantes na área de Assuntos Estudantis do diretório acadêmico.",
      en: "I represent students in the Student Affairs area of the academic council.",
    },
  },
];
