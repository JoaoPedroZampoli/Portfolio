import type { Locale } from "@/i18n/config";

import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { notFound } from "next/navigation";

import { Hero } from "@/components/hero";
import { ExternalLinkIcon, GithubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { LinkButton } from "@/components/link-button";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/config/site";
import { involvements } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/lib/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <>
      <Hero dict={dict} locale={typedLocale} />

      {/* Agora */}
      <section className="w-full max-w-5xl mx-auto px-6 mt-8 mb-24">
        <SectionHeader
          align="left"
          title={dict.home.nowTitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {involvements.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <Card className="h-full border border-default-200" shadow="none">
                <CardBody className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    {item.url ? (
                      <Link
                        isExternal
                        aria-label={item.name}
                        className="text-default-500 hover:text-primary transition-colors shrink-0"
                        href={item.url}
                      >
                        <ExternalLinkIcon size={16} />
                      </Link>
                    ) : null}
                  </div>
                  <p className="text-sm text-default-500 leading-relaxed">
                    {item.description[typedLocale]}
                  </p>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-24">
        <SectionHeader
          subtitle={dict.home.featuredSubtitle}
          title={dict.home.featuredTitle}
        />

        <div className="space-y-10 md:space-y-14">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              dict={dict}
              locale={typedLocale}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </div>

        <Reveal>
          <div className="flex justify-center mt-12">
            <LinkButton
              color="primary"
              href={localePath(typedLocale, "/projects")}
              radius="full"
              variant="flat"
            >
              {dict.home.allProjects}
            </LinkButton>
          </div>
        </Reveal>
      </section>

      {/* Chamada final */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-24">
        <Reveal>
          <Card className="w-full p-8 md:p-12 text-center border border-default-200" shadow="sm">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {dict.home.ctaCardTitle}
            </h2>
            <p className="text-default-600 max-w-2xl mx-auto mb-8">
              {dict.home.ctaCardText}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <LinkButton
                color="primary"
                href={localePath(typedLocale, "/contact")}
                size="lg"
                startContent={<MailIcon size={18} />}
              >
                {dict.home.ctaContact}
              </LinkButton>
              <LinkButton
                isExternal
                href={siteConfig.links.linkedin}
                size="lg"
                startContent={<LinkedInIcon size={18} />}
                variant="flat"
              >
                LinkedIn
              </LinkButton>
              <LinkButton
                isExternal
                href={siteConfig.links.github}
                size="lg"
                startContent={<GithubIcon size={18} />}
                variant="flat"
              >
                GitHub
              </LinkButton>
            </div>
          </Card>
        </Reveal>
      </section>
    </>
  );
}
