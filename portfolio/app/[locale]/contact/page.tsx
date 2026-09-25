import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";

import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { notFound } from "next/navigation";

import { CopyEmail } from "@/components/copy-email";
import {
  ExternalLinkIcon,
  GithubIcon,
  LattesIcon,
  LinkedInIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/config/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return { title: dict.contact.title, description: dict.contact.subtitle };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  const channels = [
    {
      id: "linkedin",
      title: "LinkedIn",
      href: siteConfig.links.linkedin,
      text: dict.contact.linkedinCardText,
      cta: dict.contact.linkedinCardCta,
      Icon: LinkedInIcon,
      accent: "from-blue-500/15 to-blue-700/15",
    },
    {
      id: "github",
      title: "GitHub",
      href: siteConfig.links.github,
      text: dict.contact.githubCardText,
      cta: dict.contact.githubCardCta,
      Icon: GithubIcon,
      accent: "from-default-300/20 to-default-500/20",
    },
    {
      id: "lattes",
      title: "Lattes",
      href: siteConfig.links.lattes,
      text: dict.contact.lattesCardText,
      cta: dict.contact.lattesCardCta,
      Icon: LattesIcon,
      accent: "from-emerald-500/15 to-teal-600/15",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
      <SectionHeader
        as="h1"
        subtitle={dict.contact.subtitle}
        title={dict.contact.title}
      />

      <Reveal immediate delay={0.2}>
        <Card className="mb-10 border border-default-200" shadow="none">
          <CardBody className="p-6 md:p-8 flex flex-col items-center gap-4 text-center">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1">
                {dict.contact.emailCardTitle}
              </h2>
              <p className="text-sm text-default-500">
                {dict.contact.emailCardText}
              </p>
            </div>
            <CopyEmail
              copiedLabel={dict.contact.copied}
              copyLabel={dict.contact.copy}
              email={siteConfig.email}
              writeLabel={dict.contact.emailCardCta}
            />
          </CardBody>
        </Card>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {channels.map((channel, index) => (
          <Reveal key={channel.id} immediate delay={0.3 + index * 0.06}>
            {/*
              O cartão inteiro é um link. Com `aria-label` o nome acessível era
              uma string à parte e o texto do cartão não era anunciado ao tabular.
              `aria-labelledby` tira o nome do próprio título visível (WCAG 2.5.3)
              e `aria-describedby` traz a descrição junto.
            */}
            <Link
              isExternal
              aria-describedby={`${channel.id}-text`}
              aria-labelledby={`${channel.id}-title`}
              className="block h-full"
              href={channel.href}
            >
              <Card
                isHoverable
                className={`h-full border border-default-200 bg-gradient-to-br ${channel.accent}`}
                shadow="none"
              >
                <CardBody className="p-6 flex flex-col items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-background/70 text-foreground">
                    <channel.Icon size={24} />
                  </div>
                  <h3
                    className="font-semibold text-foreground"
                    id={`${channel.id}-title`}
                  >
                    {channel.title}
                  </h3>
                  <p
                    className="text-sm text-default-600 leading-relaxed flex-grow"
                    id={`${channel.id}-text`}
                  >
                    {channel.text}
                  </p>
                  <span className="text-sm font-medium text-primary dark:text-primary-500 flex items-center gap-1.5">
                    {channel.cta}
                    <ExternalLinkIcon size={14} />
                  </span>
                </CardBody>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="border border-default-200" shadow="none">
            <CardBody className="p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-default-500 mb-2">
                {dict.contact.availabilityTitle}
              </h3>
              <p className="text-sm text-default-700 flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block w-2 h-2 rounded-full bg-success animate-pulse"
                />
                {dict.contact.availabilityText}
              </p>
            </CardBody>
          </Card>
          <Card className="border border-default-200" shadow="none">
            <CardBody className="p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-default-500 mb-2">
                {dict.contact.locationTitle}
              </h3>
              <p className="text-sm text-default-700">
                {siteConfig.location[typedLocale]}
              </p>
            </CardBody>
          </Card>
        </div>
      </Reveal>
    </div>
  );
}
