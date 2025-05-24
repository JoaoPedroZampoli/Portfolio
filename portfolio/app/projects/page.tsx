"use client";

import { title } from "@/components/primitives";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className={title()}>Projetos</h1>
        <ProjectCard/>
    </div>
  );
}
