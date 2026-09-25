import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";

import { Card, CardBody } from "@heroui/card";
import { Progress } from "@heroui/progress";
import NextImage from "next/image";
import { notFound } from "next/navigation";

import { ExternalLinkIcon } from "@/components/icons";
import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { siteConfig } from "@/config/site";
import { events, timeline } from "@/data/experience";
import { languages, skillGroups } from "@/data/skills";
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

  return { title: dict.nav.about, description: dict.about.bio[0] };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <div className="w-full">
      {/* Apresentação */}
      <section className="relative w-full px-6 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_45%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_45%,transparent)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(120,119,198,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(59,130,246,0.1),transparent_55%)]" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14 relative z-10">
          <Reveal className="shrink-0" immediate>
            <NextImage
              priority
              alt={siteConfig.author}
              className="w-56 h-56 md:w-64 md:h-64 rounded-large object-cover"
              height={256}
              sizes="256px"
              src="/about-me.jpg"
              width={256}
            />
          </Reveal>

          <div className="flex-1 text-center md:text-left">
            <Reveal immediate>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                {dict.about.title}
              </h1>
            </Reveal>

            <div className="space-y-4">
              {dict.about.bio.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06} immediate>
                  <p className="text-default-600 leading-relaxed">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3} immediate>
              <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
                {siteConfig.showResume && (
                  <LinkButton
                    isExternal
                    color="primary"
                    href={siteConfig.resume[typedLocale]}
                    radius="full"
                  >
                    {dict.about.resumeCta}
                  </LinkButton>
                )}
                <LinkButton
                  isExternal
                  href={siteConfig.links.lattes}
                  radius="full"
                  startContent={<ExternalLinkIcon size={16} />}
                  variant="bordered"
                >
                  Lattes
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section className="w-full max-w-4xl mx-auto px-6 mb-24">
        <SectionHeader align="left" title={dict.about.timelineTitle} />
        <Timeline
          entries={timeline}
          kindLabels={dict.about.kinds}
          locale={typedLocale}
          presentLabel={dict.about.present}
        />
      </section>

      {/* Habilidades */}
      <section className="w-full max-w-4xl mx-auto px-6 mb-24">
        <SectionHeader align="left" title={dict.about.skillsTitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.06}>
              <Card className="h-full border border-default-200" shadow="none">
                <CardBody className="p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-default-500 mb-3">
                    {group.label[typedLocale]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-default-100 text-default-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Idiomas */}
      <section className="w-full max-w-4xl mx-auto px-6 mb-24">
        <SectionHeader align="left" title={dict.about.languagesTitle} />
        <div className="space-y-6">
          {languages.map((language, index) => (
            <Reveal key={language.name.pt} delay={index * 0.06}>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-medium text-foreground">
                    {language.name[typedLocale]}
                  </span>
                  <span className="text-sm text-default-500">
                    {language.level[typedLocale]}
                  </span>
                </div>
                <Progress
                  aria-label={language.name[typedLocale]}
                  color="primary"
                  size="sm"
                  value={language.proficiency}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Voluntariado e eventos */}
      <section className="w-full max-w-4xl mx-auto px-6 pb-24">
        <SectionHeader align="left" title={dict.about.volunteeringTitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event, index) => (
            <Reveal key={event.id} delay={index * 0.06}>
              <Card className="h-full border border-default-200" shadow="none">
                <CardBody className="p-5">
                  <p className="text-xs font-medium text-primary dark:text-primary-500 mb-2">
                    {event.date[typedLocale]}
                  </p>
                  <h3 className="font-semibold text-foreground mb-1 leading-snug">
                    {event.name}
                  </h3>
                  <p className="text-sm text-default-500 mb-3">
                    {event.role[typedLocale]}
                  </p>
                  <p className="text-sm text-default-600 leading-relaxed">
                    {event.description[typedLocale]}
                  </p>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
