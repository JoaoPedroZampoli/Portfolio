"use client";

import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

import { Link } from "@heroui/link";
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { GithubIcon, LinkedInIcon, TerminalIcon } from "@/components/icons";
import { LocaleSwitch } from "@/components/locale-switch";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { localePath } from "@/lib/navigation";

/**
 * Sublinhado do link ativo. É um `::after` em vez de `text-decoration` porque
 * sublinhado de texto não anima: aqui a linha cresce do centro (`scale-x`)
 * quando o link vira ativo e recolhe no que deixou de ser. A navbar não
 * desmonta entre páginas, então as duas transições acontecem juntas.
 */
const sublinhado = (ativo: boolean) =>
  clsx(
    "relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary dark:after:bg-primary-500",
    "after:transition-transform after:duration-300 after:ease-out",
    ativo ? "after:scale-x-100" : "after:scale-x-0",
  );

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

export function Navbar({ locale, dict }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const items = siteConfig.navItems.map((item) => ({
    href: localePath(locale, item.href),
    label: dict.nav[item.key],
  }));

  const isActive = (href: string) =>
    href === localePath(locale) ? pathname === href : pathname.startsWith(href);

  return (
    /*
      A entrada é CSS. Com o Framer Motion, o `initial` ia no HTML do servidor
      e a barra de navegação chegava com `opacity: 0` em toda página — a
      navegação do site só existia depois da hidratação.
    */
    <div className="sticky top-0 z-50" data-reveal="drop">
      <HeroUINavbar
        isBordered
        isMenuOpen={isMenuOpen}
        maxWidth="xl"
        position="sticky"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent justify="start">
          <NavbarBrand as="li" className="gap-2 max-w-fit">
            <NextLink
              className="flex items-center gap-2"
              href={localePath(locale)}
            >
              <TerminalIcon className="text-primary" size={26} />
              <span className="font-bold text-foreground whitespace-nowrap">
                {siteConfig.shortName}
              </span>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-1" justify="center">
          {items.map((item) => (
            <NavbarItem key={item.href} isActive={isActive(item.href)}>
              <NextLink
                aria-current={isActive(item.href) ? "page" : undefined}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "px-3 py-2 text-sm rounded-lg transition-colors hover:text-primary dark:hover:text-primary-500",
                  isActive(item.href) && "text-primary dark:text-primary-500 font-medium",
                )}
                href={item.href}
              >
                <span className={sublinhado(isActive(item.href))}>{item.label}</span>
              </NextLink>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex gap-2 items-center">
            <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
              <LinkedInIcon className="text-default-500 hover:text-primary dark:hover:text-primary-500 transition-colors" />
            </Link>
            <Link isExternal aria-label="GitHub" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500 hover:text-foreground transition-colors" />
            </Link>
          </NavbarItem>
          <NavbarItem className="flex gap-1 items-center">
            <LocaleSwitch label={dict.nav.changeLanguage} locale={locale} />
            <ThemeSwitch label={dict.nav.toggleTheme} />
          </NavbarItem>
          {/*
            `NavbarContent` renderiza um <ul>, e `NavbarMenuToggle` renderiza um
            <button>. Solto, ele seria um filho direto de lista que não é <li> —
            o `NavbarItem` em volta é quem fornece o <li>.
          */}
          <NavbarItem className="lg:hidden">
            <NavbarMenuToggle aria-label={dict.nav.menu} />
          </NavbarItem>
        </NavbarContent>

        {/*
          O espaçamento vem no próprio <ul> que o `NavbarMenu` renderiza. Um
          <div> em volta dos itens seria filho direto de lista sem ser <li>.
        */}
        <NavbarMenu className="w-full gap-1 px-4 pt-4">
          {items.map((item) => (
            <NavbarMenuItem key={item.href} isActive={isActive(item.href)}>
              <NextLink
                aria-current={isActive(item.href) ? "page" : undefined}
                className={clsx(
                  "block w-full py-2.5 text-lg transition-colors",
                  isActive(item.href)
                    ? "text-primary dark:text-primary-500 font-medium"
                    : "text-foreground",
                )}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={sublinhado(isActive(item.href))}>{item.label}</span>
              </NextLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </HeroUINavbar>
    </div>
  );
}

export default Navbar;
