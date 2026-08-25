"use client";

import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { Project } from "@/types";

import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { CodeIcon, ExternalLinkIcon } from "@/components/icons";
import { ProjectGallery } from "@/components/project-gallery";
import { Reveal } from "@/components/reveal";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  /** Alterna o lado da galeria para criar ritmo numa lista vertical. */
  reversed?: boolean;
  /**
   * Nível do nome do projeto. Na home os cards ficam sob um `h2` de seção, na
   * página de projetos ficam direto sob o `h1` — sem isso um dos dois casos
   * pularia um nível.
   */
  as?: "h2" | "h3";
}

/** Capa gerada para projetos sem capturas de tela — evita placeholders genéricos. */
function GeneratedCover({ project }: { project: Project }) {
  const initials = project.name
    .split(/[\s:]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`aspect-video rounded-xl overflow-hidden relative flex items-center justify-center bg-gradient-to-br ${project.accent.from} ${project.accent.to} border border-default-200`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.14),transparent_55%)]" />
      <span className="relative text-6xl md:text-7xl font-bold text-foreground/25 tracking-tighter select-none">
        {initials}
      </span>
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-medium px-2 py-1 rounded-md bg-background/70 text-default-600 backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  locale,
  dict,
  reversed = false,
  as: Heading = "h3",
}: ProjectCardProps) {
  const { links } = project;

  return (
    <Reveal>
      <article
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.accent.from} ${project.accent.to} border border-default-200 backdrop-blur-sm`}
        id={project.slug}
      >
        <div
          className={`flex flex-col gap-6 md:gap-8 p-5 md:p-7 ${
            reversed ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="flex-1 min-w-0">
            <ProjectGallery
              fallback={<GeneratedCover project={project} />}
              images={project.images}
              labels={{
                previous: dict.projects.previous,
                next: dict.projects.next,
                goTo: dict.projects.goTo,
                imageOf: dict.projects.imageOf,
                expand: dict.projects.expand,
                close: dict.projects.close,
              }}
              name={project.name}
            />
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <Heading className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  {project.name}
                </Heading>
                <Chip radius="sm" size="sm" variant="flat">
                  {project.period}
                </Chip>
              </div>

              <p className="text-default-500 text-base mb-4">
                {project.tagline[locale]}
              </p>

              <p className="text-default-600 text-sm leading-relaxed">
                {project.description[locale]}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-default-100 text-default-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {links.live ? (
                  <Button
                    isExternal
                    as={Link}
                    color="primary"
                    href={links.live}
                    startContent={<ExternalLinkIcon size={16} />}
                    variant="solid"
                  >
                    {dict.projects.viewLive}
                  </Button>
                ) : null}
                {links.repo ? (
                  <Button
                    isExternal
                    as={Link}
                    href={links.repo}
                    startContent={<CodeIcon size={16} />}
                    variant="bordered"
                  >
                    {dict.projects.viewCode}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default ProjectCard;
