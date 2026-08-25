"use client";

import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { ProjectCategory } from "@/types";

import { Button } from "@heroui/button";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { projectCategories, projects } from "@/data/projects";

type Filter = ProjectCategory | "all";

interface ProjectsExplorerProps {
  locale: Locale;
  dict: Dictionary;
}

export function ProjectsExplorer({ locale, dict }: ProjectsExplorerProps) {
  const [filter, setFilter] = useState<Filter>("all");

  // Só oferece filtros que de fato têm projetos por trás.
  const availableCategories = useMemo(
    () =>
      projectCategories.filter((category) =>
        projects.some((project) => project.category === category.id),
      ),
    [],
  );

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: dict.projects.filterAll },
    ...availableCategories.map((category) => ({
      id: category.id as Filter,
      label: category.label[locale],
    })),
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((item) => (
          <Button
            key={item.id}
            color={filter === item.id ? "primary" : "default"}
            radius="full"
            size="sm"
            variant={filter === item.id ? "solid" : "bordered"}
            onPress={() => setFilter(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-center text-default-500 py-16">
          {dict.projects.empty}
        </p>
      ) : (
        <div className="space-y-10 md:space-y-14">
          {visible.map((project, index) => (
            <ProjectCard
              key={project.slug}
              as="h2"
              dict={dict}
              locale={locale}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectsExplorer;
