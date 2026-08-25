import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { ProjectsExplorer } from "@/components/projects-explorer";
import { SectionHeader } from "@/components/section-header";
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

  return { title: dict.projects.title, description: dict.projects.subtitle };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
      <SectionHeader
        as="h1"
        subtitle={dict.projects.subtitle}
        title={dict.projects.title}
      />
      <ProjectsExplorer dict={dict} locale={typedLocale} />
    </div>
  );
}
