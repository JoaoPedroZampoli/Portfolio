import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import {
  GithubIcon,
  LattesIcon,
  LinkedInIcon,
  MailIcon,
  TerminalIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";
import { localePath } from "@/lib/navigation";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socials = [
    { href: siteConfig.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: siteConfig.links.github, label: "GitHub", Icon: GithubIcon },
    { href: siteConfig.links.lattes, label: "Lattes", Icon: LattesIcon },
    { href: `mailto:${siteConfig.email}`, label: "E-mail", Icon: MailIcon },
  ];

  return (
    <footer className="w-full border-t border-default-200 py-10 mt-auto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <NextLink
              className="flex items-center gap-2 mb-3"
              href={localePath(locale)}
            >
              <TerminalIcon className="text-primary" size={26} />
              <span className="font-bold text-foreground">
                {siteConfig.shortName}
              </span>
            </NextLink>
            <p className="text-sm text-default-500 max-w-xs leading-relaxed">
              {dict.meta.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">
              {dict.footer.sections}
            </h3>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.key}>
                  <NextLink
                    className="text-default-500 hover:text-primary text-sm transition-colors"
                    href={localePath(locale, item.href)}
                  >
                    {dict.nav[item.key]}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">
              {dict.footer.elsewhere}
            </h3>
            <div className="flex gap-3 mb-4">
              {socials.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  isExternal
                  aria-label={label}
                  className="text-default-500 hover:text-primary transition-colors"
                  href={href}
                >
                  <Icon size={22} />
                </Link>
              ))}
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  isExternal
                  className="text-default-500 hover:text-primary text-sm"
                  href={siteConfig.links.repo}
                >
                  {dict.footer.sourceCode}
                </Link>
              </li>
              <li>
                <Link
                  isExternal
                  className="text-default-500 hover:text-primary text-sm"
                  href={siteConfig.resume[locale]}
                >
                  {dict.footer.resume}
                </Link>
              </li>
              <li className="text-default-500 text-sm">
                {siteConfig.location[locale]}
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-default-500">
            © {currentYear} {siteConfig.author}. {dict.footer.rights}
          </p>
          <p className="text-xs text-default-500">{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
