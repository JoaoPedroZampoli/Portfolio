export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "João Pedro Zampoli - Dev",
  description: "Portfólio pessoal de João Pedro Zampoli, desenvolvedor de software e entusiasta da tecnologia.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projetos",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Sobre mim",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projetos",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Sobre Mim",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/JoaoPedroZampoli",
    docs: "https://heroui.com",
    linkedin: "https://www.linkedin.com/in/joaopedrozampoli/",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
