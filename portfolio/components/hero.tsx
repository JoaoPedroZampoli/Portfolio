"use client";

import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { CSSProperties } from "react";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextImage from "next/image";
import NextLink from "next/link";

import { GithubIcon, LattesIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/config/site";
import { localePath } from "@/lib/navigation";

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: HeroProps) {
  const socials = [
    { href: siteConfig.links.github, label: "GitHub", Icon: GithubIcon },
    { href: siteConfig.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: siteConfig.links.lattes, label: "Lattes", Icon: LattesIcon },
    { href: `mailto:${siteConfig.email}`, label: "E-mail", Icon: MailIcon },
  ];

  return (
    <section className="relative w-full min-h-heroi flex items-center justify-center overflow-hidden px-6 py-16 md:py-24">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-teal-900/5 to-indigo-900/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        <div className="flex-1 text-center lg:text-left space-y-7">
          <Reveal immediate delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-foreground">{dict.home.greeting}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                {siteConfig.shortName}
              </span>
            </h1>
          </Reveal>

          <Reveal immediate delay={0.25}>
            <p className="text-base md:text-lg text-default-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {dict.home.intro}
            </p>
          </Reveal>

          <Reveal
            immediate
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            delay={0.35}
          >
            <Button
              as={NextLink}
              color="primary"
              href={localePath(locale, "/projects")}
              radius="full"
              size="lg"
              variant="shadow"
            >
              {dict.home.ctaProjects}
            </Button>
            <Button
              as={NextLink}
              href={localePath(locale, "/contact")}
              radius="full"
              size="lg"
              variant="bordered"
            >
              {dict.home.ctaContact}
            </Button>
            {siteConfig.showResume && (
              <Button
                isExternal
                as={Link}
                className="text-default-600"
                href={siteConfig.resume[locale]}
                radius="full"
                size="lg"
                variant="light"
              >
                {dict.home.ctaResume}
              </Button>
            )}
          </Reveal>

          <Reveal
            immediate
            className="flex items-center gap-3 justify-center lg:justify-start"
            delay={0.45}
          >
            {socials.map(({ href, label, Icon }) => (
              <Link
                key={label}
                isExternal
                aria-label={label}
                className="p-2.5 rounded-full bg-default-100 text-default-600 hover:bg-default-200 hover:text-foreground transition-colors"
                href={href}
              >
                <Icon size={20} />
              </Link>
            ))}
          </Reveal>
        </div>

        <div
          className="flex-shrink-0"
          data-reveal="zoom"
          style={{ "--reveal-delay": "0.2s" } as CSSProperties}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 via-teal-500 to-blue-600 p-1 shadow-2xl">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
                <NextImage
                  fill
                  priority
                  alt={siteConfig.author}
                  className="object-cover"
                  sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, 256px"
                  src="/MyPhoto.jpg"
                />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="flutua-sobe absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
            />
            <div
              aria-hidden="true"
              className="flutua-desce absolute -bottom-6 -left-6 w-16 h-16 bg-teal-500/20 rounded-full blur-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
