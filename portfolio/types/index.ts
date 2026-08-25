import type { SVGProps } from "react";

import type { Localized } from "@/i18n/config";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ProjectCategory = "web" | "games" | "data" | "systems";

export interface Project {
  /** Identificador estável, usado como key e âncora. */
  slug: string;
  name: string;
  /** Uma linha, exibida abaixo do nome. */
  tagline: Localized;
  description: Localized;
  category: ProjectCategory;
  /** Ano ou intervalo, ex.: "2024 — atual". */
  period: string;
  tech: string[];
  /** Aparece na home. */
  featured?: boolean;
  /** Caminhos em /public. Vazio => cai no fallback com monograma. */
  images: string[];
  links: {
    live?: string;
    repo?: string;
  };
  /** Par de cores Tailwind para o gradiente do card. */
  accent: { from: string; to: string };
}

export type TimelineKind = "work" | "education" | "extension" | "volunteering";

export interface TimelineEntry {
  id: string;
  role: Localized;
  /** String simples quando o nome é o mesmo nos dois idiomas. */
  organization: string | Localized;
  organizationUrl?: string;
  kind: TimelineKind;
  start: string;
  /** Ausente => em andamento. */
  end?: string;
  bullets: Localized<string[]>;
}

export interface SkillGroup {
  id: string;
  label: Localized;
  items: string[];
}

export interface LanguageSkill {
  name: Localized;
  level: Localized;
  /** 0–100, usado na barra de proficiência. */
  proficiency: number;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  readingTime: number;
  draft?: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
