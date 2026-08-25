import type { Locale } from "@/i18n/config";
import type { Project, ProjectCategory } from "@/types";

export const projects: Project[] = [
  {
    slug: "vapt",
    name: "VApt",
    tagline: {
      pt: "Acessibilidade no transporte público metropolitano",
      en: "Accessibility for metropolitan public transport",
    },
    description: {
      pt: "Plataforma do CodeLab que mapeia as classificações de níveis de deficiência contra as adequações necessárias nas linhas de ônibus metropolitanas, para que passageiros PcD saibam o que esperar de cada linha. Os dados vêm da EMTU (hoje ARTESP), parceira do projeto de extensão. Coordenei o time de desenvolvimento de abril de 2024 a junho de 2026 e conduzi a reformulação do web app, que deu origem ao nome VApt.",
      en: "A CodeLab platform that maps disability classification levels against the adaptations required on metropolitan bus lines, so that passengers with disabilities know what to expect from each route. Data comes from EMTU (now ARTESP), the extension project's partner. I coordinated the development team from April 2024 to June 2026 and led the rewrite of the web app that became VApt.",
    },
    category: "web",
    period: "2024 — 2026",
    tech: ["Vue.js", "Nuxt", "Vuetify", "TypeScript", "PostgreSQL", "Docker"],
    featured: true,
    images: [
      "/projectimages/VApt1.webp",
      "/projectimages/VApt2.webp",
      "/projectimages/VApt3.webp",
      "/projectimages/VApt4.webp",
    ],
    links: {
      live: "https://www.codelab-unifesp.org/projetos",
      repo: "https://github.com/UnifespCodeLab/emtu-web",
    },
    accent: { from: "from-emerald-500/15", to: "to-sky-600/15" },
  },
  {
    slug: "memneo",
    name: "Memneo",
    tagline: {
      pt: "Plataforma de estudos por flashcards",
      en: "Flashcard-based study platform",
    },
    description: {
      pt: "Site de estudo por flashcards nascido na disciplina de Aspectos e Implementação de Banco de Dados. Usuários criam, editam e compartilham baralhos, com autenticação para acessar o material de qualquer lugar. Foi onde exercitei modelagem de dados em MongoDB e o desenho de uma API própria para o front em React.",
      en: "A flashcard study site born in the Database Aspects and Implementation course. Users create, edit and share decks, with authentication so their material follows them anywhere. This is where I practised data modelling in MongoDB and designing a bespoke API for a React front end.",
    },
    category: "web",
    period: "2025",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Vercel"],
    featured: true,
    images: [
      "/projectimages/Memneo1.webp",
      "/projectimages/Memneo2.webp",
      "/projectimages/Memneo3.webp",
      "/projectimages/Memneo4.webp",
      "/projectimages/Memneo5.webp",
      "/projectimages/Memneo6.webp",
      "/projectimages/Memneo7.webp",
      "/projectimages/Memneo8.webp",
    ],
    links: {
      live: "https://memneo.vercel.app",
      repo: "https://github.com/JoaoPedroZampoli/Memneo",
    },
    accent: { from: "from-blue-500/15", to: "to-indigo-600/15" },
  },
  {
    slug: "fake-news-analyzer",
    name: "Fake News Analyzer",
    tagline: {
      pt: "Classificação de notícias falsas com NLP",
      en: "Fake news classification with NLP",
    },
    description: {
      pt: "Trabalho final de Inteligência Artificial: um classificador que rotula notícias como verdadeiras ou falsas. Comparamos algoritmos clássicos — SVM, Naive Bayes e KNN — com um modelo baseado em BERT, cobrindo pré-processamento, vetorização e avaliação. Resultado publicado como app no Streamlit. Feito em dupla com Luiza de Souza Ferreira.",
      en: "Final project for the Artificial Intelligence course: a classifier that labels news articles as real or fake. We compared classical algorithms — SVM, Naive Bayes and KNN — against a BERT-based model, covering preprocessing, vectorisation and evaluation. Shipped as a Streamlit app. Built together with Luiza de Souza Ferreira.",
    },
    category: "data",
    period: "2025",
    tech: ["Python", "scikit-learn", "Transformers", "pandas", "Streamlit"],
    featured: true,
    images: [
      "/projectimages/FakeNewsAnalyzer1.webp",
      "/projectimages/FakeNewsAnalyzer2.webp",
      "/projectimages/FakeNewsAnalyzer3.webp",
    ],
    links: {
      live: "https://fake-news-analyzer.streamlit.app/",
      repo: "https://github.com/JoaoPedroZampoli/Fake-News-Analyzer",
    },
    accent: { from: "from-violet-500/15", to: "to-fuchsia-600/15" },
  },
  {
    slug: "kerana",
    name: "Kerana: Firehose Origins",
    tagline: {
      pt: "RPG 2D feito na Unity",
      en: "2D RPG built in Unity",
    },
    description: {
      pt: "Protótipo de jogo criado para a eletiva de Desenvolvimento de Games do ICT-Unifesp. Você joga como Kerana, uma jovem onça que embarca numa jornada de vingança contra o vilão que destruiu sua vila. Cuidei de sistemas de combate, movimentação e progressão.",
      en: "A game prototype built for the Game Development elective at ICT-Unifesp. You play as Kerana, a young jaguar on a journey of revenge against the villain who destroyed her village. I worked on the combat, movement and progression systems.",
    },
    category: "games",
    period: "2024",
    tech: ["Unity", "C#", "Game Design"],
    featured: true,
    images: ["/projectimages/Kerana1.webp"],
    links: {
      live: "https://kerana-abaete.itch.io/firehose-kerana-origins",
      repo: "https://github.com/JoaoPedroZampoli/ProjetoDG-Unifesp",
    },
    accent: { from: "from-orange-500/15", to: "to-rose-600/15" },
  },
  {
    slug: "compilador-c-minus",
    name: "Compilador C-",
    tagline: {
      pt: "Compilador completo para a linguagem C-",
      en: "A full compiler for the C- language",
    },
    description: {
      pt: "Compilador para C- (a linguagem didática do livro de Kenneth Louden), escrito em C com Flex e Bison. Cobre análise léxica, sintática e semântica, com tabela de símbolos própria e geração da AST visualizável via Graphviz. Foi o trabalho que mais me ensinou sobre como uma linguagem realmente funciona por baixo.",
      en: "A compiler for C- (the teaching language from Kenneth Louden's book), written in C with Flex and Bison. It covers lexical, syntactic and semantic analysis, with a hand-rolled symbol table and an AST you can render through Graphviz. The project that taught me the most about how a language actually works underneath.",
    },
    category: "systems",
    period: "2025",
    tech: ["C", "Flex", "Bison", "Graphviz", "Make"],
    images: [],
    links: { repo: "https://github.com/JoaoPedroZampoli/Trabalho-Comp-Unifesp" },
    accent: { from: "from-slate-500/15", to: "to-zinc-600/15" },
  },
  {
    slug: "gato-o-jogo",
    name: "Gato, o jogo",
    tagline: {
      pt: "Plataforma 2D feito em um mês",
      en: "A 2D platformer built in a month",
    },
    description: {
      pt: "Mini-game batizado — intencionalmente — de \"Gato, o jogo\", criado em cerca de um mês durante o curso do CEGI-Unifesp. Inspirado nos clássicos de plataforma 2D como Mario e Rayman, o jogador assume o papel de um gato à procura do próprio sachê.",
      en: "A mini-game deliberately named \"Gato, o jogo\" (\"Cat, the game\"), built in roughly a month during the CEGI-Unifesp course. Inspired by 2D platforming classics like Mario and Rayman, you play as a cat looking for its own food pouch.",
    },
    category: "games",
    period: "2023",
    tech: ["Unity", "C#", "Game Design"],
    images: [],
    links: { repo: "https://github.com/JoaoPedroZampoli/ProjetoCEGI" },
    accent: { from: "from-amber-500/15", to: "to-orange-600/15" },
  },
  {
    slug: "ux-nautilus",
    name: "UX Nautilus",
    tagline: {
      pt: "Pesquisa com usuários em IHC",
      en: "User research in HCI",
    },
    description: {
      pt: "Pesquisa com usuários conduzida para a disciplina de Interação Humano-Computador, publicada como site. Envolveu roteiro de entrevistas, coleta e síntese dos achados em recomendações de design.",
      en: "A user research study run for the Human-Computer Interaction course and published as a website. It covered the interview script, data collection and the synthesis of findings into design recommendations.",
    },
    category: "web",
    period: "2025",
    tech: ["HTML", "CSS", "UX Research", "HCI"],
    images: [],
    links: {
      live: "https://joaopedrozampoli.github.io/UX-Nautilus/",
      repo: "https://github.com/JoaoPedroZampoli/UX-Nautilus",
    },
    accent: { from: "from-teal-500/15", to: "to-cyan-600/15" },
  },
  {
    slug: "computacao-grafica",
    name: "Computação Gráfica",
    tagline: {
      pt: "Renderização e geometria em JavaScript",
      en: "Rendering and geometry in JavaScript",
    },
    description: {
      pt: "Conjunto de exercícios e o trabalho final da disciplina de Computação Gráfica: transformações geométricas, projeções, iluminação e rasterização implementadas em JavaScript direto no navegador.",
      en: "The exercise set and final project from the Computer Graphics course: geometric transformations, projections, lighting and rasterisation implemented in JavaScript straight in the browser.",
    },
    category: "systems",
    period: "2025",
    tech: ["JavaScript", "WebGL", "Canvas", "Linear Algebra"],
    images: [
      "/projectimages/HelloRun1.webp",
      "/projectimages/HelloRun2.webp",
      "/projectimages/HelloRun3.webp",
    ],
    links: { repo: "https://github.com/JoaoPedroZampoli/Trabalho-CG-Unifesp" },
    accent: { from: "from-pink-500/15", to: "to-purple-600/15" },
  },
  {
    slug: "credit-risk-classifier",
    name: "Credit Risk Classifier",
    tagline: {
      pt: "Classificação de risco de crédito",
      en: "Credit risk classification",
    },
    description: {
      pt: "Modelo de classificação de risco de crédito desenvolvido no IBM AI Studio, com parte do trabalho feita no Google Colab. Um exercício prático de pipeline de dados, seleção de features e avaliação de modelo.",
      en: "A credit risk classification model developed in IBM AI Studio, with part of the work done in Google Colab. A hands-on exercise in data pipelines, feature selection and model evaluation.",
    },
    category: "data",
    period: "2025",
    tech: ["Python", "IBM AI Studio", "Jupyter", "pandas"],
    images: [],
    links: { repo: "https://github.com/JoaoPedroZampoli/CreditRiskClassifier" },
    accent: { from: "from-lime-500/15", to: "to-emerald-600/15" },
  },
];

export const projectCategories: {
  id: ProjectCategory;
  label: Record<Locale, string>;
}[] = [
  { id: "web", label: { pt: "Web", en: "Web" } },
  { id: "games", label: { pt: "Games", en: "Games" } },
  { id: "data", label: { pt: "IA & Dados", en: "AI & Data" } },
  { id: "systems", label: { pt: "Sistemas", en: "Systems" } },
];

export const featuredProjects = projects.filter((project) => project.featured);
