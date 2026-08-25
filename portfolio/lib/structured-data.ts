import type { Locale } from "@/i18n/config";
import type { TimelineEntry } from "@/types";

import { siteConfig } from "@/config/site";
import { timeline } from "@/data/experience";
import { getDictionary } from "@/i18n/dictionaries";

function organizationName(entry: TimelineEntry, locale: Locale): string {
  return typeof entry.organization === "string"
    ? entry.organization
    : entry.organization[locale];
}

/**
 * Dados estruturados schema.org do site.
 *
 * O vínculo que interessa é o `sameAs`: sem ele, GitHub, LinkedIn e Lattes são
 * três páginas soltas que repetem um nome; com ele, são declaradamente a mesma
 * pessoa deste site.
 *
 * Emprego e formação saem da própria timeline para não virarem uma segunda
 * fonte de verdade que envelhece sozinha. Entram só as instituições com site
 * próprio — é o que separa uma organização real de entradas como
 * "Autodidatismo e plataformas online".
 *
 * O e-mail fica de fora de propósito: não acrescenta nada aos buscadores e
 * publicá-lo em formato legível por máquina só facilita a vida de quem coleta
 * endereços.
 */
export function structuredData(locale: Locale) {
  const dict = getDictionary(locale);

  const currentJob = timeline.find(
    (entry) => entry.kind === "work" && !entry.end,
  );
  const schools = timeline.filter(
    (entry) => entry.kind === "education" && entry.organizationUrl,
  );

  const person = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.author,
    alternateName: siteConfig.shortName,
    jobTitle: dict.meta.tagline,
    description: dict.meta.description,
    url: `${siteConfig.url}/${locale}`,
    image: `${siteConfig.url}/MyPhoto.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    ...(currentJob && {
      worksFor: {
        "@type": "Organization",
        name: organizationName(currentJob, locale),
        ...(currentJob.organizationUrl && { url: currentJob.organizationUrl }),
      },
    }),
    ...(schools.length > 0 && {
      alumniOf: schools.map((entry) => ({
        "@type": "EducationalOrganization",
        name: organizationName(entry, locale),
        url: entry.organizationUrl,
      })),
    }),
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.lattes,
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: `${siteConfig.url}/${locale}`,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: locale === "pt" ? "pt-BR" : "en-US",
    author: { "@id": `${siteConfig.url}/#person` },
  };

  return { "@context": "https://schema.org", "@graph": [person, website] };
}

/**
 * Serializa para dentro de um `<script>`. O escape de `<` impede que uma
 * string com `</script>` feche a tag antes da hora.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
