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
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/JoaoPedroZampoli",
    docs: "https://heroui.com",
    linkedin: "https://www.linkedin.com/in/joaopedrozampoli/",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
