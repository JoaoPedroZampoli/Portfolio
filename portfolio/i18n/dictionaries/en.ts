import type pt from "./pt";

/**
 * Tipado a partir do dicionário em português: se uma chave for adicionada lá e
 * esquecida aqui, o TypeScript acusa.
 */
const en: typeof pt = {
  meta: {
    title: "João Pedro Zampoli",
    tagline: "Software Developer",
    description:
      "Portfolio of João Pedro Zampoli — software developer, software engineering intern at Nubank and a graduate in Science & Technology from Unifesp.",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
    menu: "Menu",
    toggleTheme: "Toggle theme",
    changeLanguage: "Change language",
  },
  home: {
    greeting: "Hi, I'm",
    intro:
      "Software developer focused on web and data, software engineering intern at Nubank and a graduate of Unifesp, where I coordinated teams at CodeLab building free software with social impact.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    ctaResume: "Résumé",
    featuredTitle: "Featured projects",
    featuredSubtitle: "A selection of what I've built inside and outside university",
    allProjects: "See all projects",
    nowTitle: "What I've been part of",
    ctaCardTitle: "Let's work together?",
    ctaCardText:
      "I'm open to opportunities, collaborations and challenging projects. Drop me a message.",
  },
  about: {
    title: "A bit of my journey",
    bio: [
      "I'm João Pedro, a software developer born in Itaquaquecetuba and raised in Poá, both in the São Paulo metropolitan area, later moving to Jacareí, in the countryside of São Paulo, in my early adult years. I started messing with programming around 2015, trying to build games in Unity 5 without understanding much of anything — and that's part of what got me here.",
      "I graduated as a Systems Development Technician from Etec de Poá, and in Science and Technology with an emphasis on Computer Science from ICT — Unifesp, in São José dos Campos.",
      "At university I coordinated a development team at CodeLab, an extension program that builds free software for social causes, and helped plan and teach Arduino classes to high school students at CodeLab Teen. I was also part of Interlinguando and represented students at the DAAK student council.",
      "Today I'm a software engineering intern at Nubank, building Clojure services inside the bank's microservice ecosystem. It's where I'm learning first-hand what changes when software runs at scale: writing code, testing and continuous deployment are part of the routine.",
      "I like working close to the product: understanding the problem, designing the flow, writing the code and seeing someone actually use it. Away from the keyboard, I'm a games enthusiast — both playing and building them.",
    ],
    timelineTitle: "Timeline",
    skillsTitle: "Some things I've used and built with",
    languagesTitle: "Languages",
    volunteeringTitle: "Volunteering and events",
    resumeCta: "Download résumé (PDF)",
    present: "Present",
  },
  projects: {
    title: "Projects",
    subtitle:
      "Academic, extension and personal projects. Some are live, others live on GitHub.",
    filterAll: "All",
    filterLabel: "Filter by category",
    resultsSingular: "project found",
    resultsPlural: "projects found",
    viewCode: "Code",
    viewLive: "Open",
    empty: "No projects in this category yet.",
    imageOf: "Image",
    imageSeparator: "of",
    carousel: "carousel",
    previous: "Previous image",
    next: "Next image",
    goTo: "Go to image",
    expand: "Expand image",
    close: "Close",
  },
  blog: {
    title: "Blog",
    subtitle: "Notes on development, university and whatever I'm learning.",
    empty: "No posts published in this language yet.",
    backToBlog: "Back to the blog",
    minutesRead: "min read",
  },
  contact: {
    title: "Let's talk!",
    subtitle:
      "Got an idea, project or opportunity? Reach out through any of the channels below.",
    emailCardTitle: "Email",
    emailCardText: "The most direct way to reach me.",
    emailCardCta: "Write",
    githubCardText: "My repositories and open source projects.",
    githubCardCta: "See repositories",
    linkedinCardText: "For opportunities and professional connections.",
    linkedinCardCta: "Connect",
    lattesCardText: "Academic CV on the CNPq platform.",
    lattesCardCta: "Open Lattes",
    locationTitle: "Location",
    availabilityTitle: "Availability",
    availabilityText: "Open to opportunities and collaborations.",
    copy: "Copy",
    copied: "Copied!",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js, HeroUI and Tailwind CSS",
    sourceCode: "Source code",
    sections: "Sections",
    elsewhere: "Find me elsewhere",
    resume: "Résumé",
  },
  common: {
    skipToContent: "Skip to content",
    backToTop: "Back to top",
    error: "Something went wrong",
    errorText: "This page could not be loaded.",
    tryAgain: "Try again",
    notFound: "Page not found",
    notFoundText: "The address you visited doesn't exist (or doesn't anymore).",
    goHome: "Go home",
  },
};

export default en;
