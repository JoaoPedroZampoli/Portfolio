import React from "react";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  LinkedInIcon,
  HeartFilledIcon,
  Logo,
} from "@/components/icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-default-200 py-8 mt-auto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-1">
            <NextLink href="/" className="flex items-center gap-2 mb-4">
              <Logo size={30} />
              <p className="font-bold text-inherit">João Pedro Zampoli</p>
            </NextLink>
            <p className="text-sm text-default-500 mb-4">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <Link isExternal href={siteConfig.links.linkedin} aria-label="LinkedIn">
                <LinkedInIcon className="text-default-500 hover:text-primary transition-colors" />
              </Link>
              <Link isExternal href={siteConfig.links.github} aria-label="GitHub">
                <GithubIcon className="text-default-500 hover:text-black dark:hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <NextLink 
                    href={item.href}
                    className="text-default-500 hover:text-primary text-sm transition-colors"
                  >
                    {item.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href={siteConfig.links.docs} isExternal className="text-default-500 hover:text-primary text-sm">
                  Documentação
                </Link>
              </li>
              <li>
                <Link href="#" className="text-default-500 hover:text-primary text-sm">
                  Tutoriais
                </Link>
              </li>
              <li>
                <Link href="#" className="text-default-500 hover:text-primary text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={siteConfig.links.sponsor} isExternal className="flex items-center gap-1 text-default-500 hover:text-primary text-sm">
                  <span>Patrocinar</span>
                  <HeartFilledIcon size={14} className="text-danger" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:contato@exemplo.com" className="text-default-500 hover:text-primary text-sm">
                  joaopedro.zampoli@gmail.com
                </Link>
              </li>
              {/* <li className="text-default-500 text-sm">
                
              </li> */}
              <li className="text-default-500 text-sm">
                Jacareí, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-default-500">
            &copy; {currentYear} - Feito por João Pedro Zampoli
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-default-500 hover:text-primary text-sm">
              Termos de Serviço
            </Link>
            <Link href="#" className="text-default-500 hover:text-primary text-sm">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;