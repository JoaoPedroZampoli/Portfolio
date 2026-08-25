import type { Locale } from "@/i18n/config";
import type { TimelineEntry, TimelineKind } from "@/types";

import { Link } from "@heroui/link";
import { Reveal } from "@/components/reveal";

/**
 * A cor da categoria fica na borda, não no preenchimento: emoji é multicolorido
 * e some em cima de um círculo saturado. Sobre o fundo da página ele mantém o
 * contraste que o próprio desenho já tem, nos dois temas.
 */
const kindStyles: Record<TimelineKind, { border: string; emoji: string }> = {
  work: { border: "border-primary", emoji: "💼" },
  education: { border: "border-secondary", emoji: "🎓" },
  extension: { border: "border-success", emoji: "🧑‍💻" },
  volunteering: { border: "border-warning", emoji: "🤝" },
};

/** "2024-04" → "abr. 2024"; "2024" fica como está. */
function formatPeriod(entry: TimelineEntry, locale: Locale, present: string) {
  const format = (value: string) => {
    const [year, month] = value.split("-");

    if (!month) return year;

    const date = new Date(Number(year), Number(month) - 1, 1);

    return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return `${format(entry.start)} — ${entry.end ? format(entry.end) : present}`;
}

interface TimelineProps {
  entries: TimelineEntry[];
  locale: Locale;
  presentLabel: string;
}

export function Timeline({ entries, locale, presentLabel }: TimelineProps) {
  return (
    <ol className="relative border-l border-default-200 ml-4 md:ml-6 space-y-10">
      {entries.map((entry, index) => {
        const style = kindStyles[entry.kind];
        const organization =
          typeof entry.organization === "string"
            ? entry.organization
            : entry.organization[locale];

        return (
          <li key={entry.id} className="relative pl-8 md:pl-10">
            <span
              aria-hidden="true"
              className={`absolute -left-[15px] top-0.5 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-background text-sm leading-none ring-4 ring-background ${style.border}`}
            >
              {style.emoji}
            </span>

            <Reveal delay={index * 0.04}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-semibold text-foreground text-lg">
                  {entry.role[locale]}
                </h3>
                <time className="text-xs font-medium text-primary whitespace-nowrap">
                  {formatPeriod(entry, locale, presentLabel)}
                </time>
              </div>

              <p className="text-sm text-default-500 mt-0.5 mb-3">
                {entry.organizationUrl ? (
                  <Link
                    isExternal
                    className="text-sm text-default-500 hover:text-primary transition-colors"
                    href={entry.organizationUrl}
                  >
                    {organization}
                  </Link>
                ) : (
                  organization
                )}
              </p>

              <ul className="space-y-1.5">
                {entry.bullets[locale].map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-default-600 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-default-400"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}

export default Timeline;
