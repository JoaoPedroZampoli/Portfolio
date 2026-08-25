export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  /** Usado em metadata e em URLs absolutas de OpenGraph. */
  url: "https://joaopedrozampoli.vercel.app",
  author: "João Pedro da Silva Zampoli",
  shortName: "João Pedro Zampoli",
  email: "joaopedro.zampoli@gmail.com",
  /** Texto exibido no rodapé e na página de contato. */
  location: {
    pt: "Jacareí / São José dos Campos — SP, Brasil",
    en: "Jacareí / São José dos Campos — SP, Brazil",
  },
  /**
   * A mesma informação em campos separados, para os dados estruturados.
   * Fica ao lado de `location` de propósito: se um mudar, o outro está à vista.
   */
  address: {
    locality: "São José dos Campos",
    region: "SP",
    country: "BR",
  },
  /** A ordem aqui define a ordem no menu e no rodapé. */
  navItems: [
    { key: "home", href: "" },
    { key: "about", href: "/about" },
    { key: "projects", href: "/projects" },
    { key: "blog", href: "/blog" },
    { key: "contact", href: "/contact" },
  ] as const,
  links: {
    github: "https://github.com/JoaoPedroZampoli",
    repo: "https://github.com/JoaoPedroZampoli/Portfolio",
    linkedin: "https://www.linkedin.com/in/joaopedrozampoli/",
    lattes: "http://lattes.cnpq.br/2122344284482660",
  },
  resume: {
    pt: "/resume/Curriculo - Online Version - JoaoPedroZampoli.pdf",
    en: "/resume/Resume - Online Version - JoaoPedroZampoli.pdf",
  },
};
