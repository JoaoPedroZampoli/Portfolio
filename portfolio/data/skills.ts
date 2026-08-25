import type { LanguageSkill, SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: { pt: "Linguagens", en: "Languages" },
    items: ["TypeScript", "JavaScript", "Python", "C", "Java", "C#", "Clojure", "PHP", "SQL"],
  },
  {
    id: "frontend",
    label: { pt: "Front-end", en: "Front end" },
    items: ["React", "Next.js", "Vue.js", "Nuxt", "Tailwind CSS", "Vuetify", "HTML & CSS"],
  },
  {
    id: "backend",
    label: { pt: "Back-end e dados", en: "Back end and data" },
    items: ["Node.js", "PostgreSQL", "MongoDB", "Datomic", "REST APIs", "pandas", "scikit-learn"],
  },
  {
    id: "tools",
    label: { pt: "Ferramentas e práticas", en: "Tools and practices" },
    items: ["Git", "Docker", "Linux", "Figma", "Agile & Scrum", "Unity", "Arduino"],
  },
];

export const languages: LanguageSkill[] = [
  {
    name: { pt: "Português", en: "Portuguese" },
    level: { pt: "Nativo", en: "Native" },
    proficiency: 100,
  },
  {
    name: { pt: "Inglês", en: "English" },
    level: { pt: "Avançado — B2/C1", en: "Advanced — B2/C1" },
    proficiency: 85,
  },
  {
    name: { pt: "Espanhol", en: "Spanish" },
    level: { pt: "Básico — A2", en: "Basic — A2" },
    proficiency: 40,
  },
];
