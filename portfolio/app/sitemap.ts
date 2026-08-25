import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { locales } from "@/i18n/config";
import { getPostSlugs } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = locales.flatMap((locale) =>
    siteConfig.navItems.map((item) => ({
      url: `${siteConfig.url}/${locale}${item.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: item.href === "" ? 1 : 0.7,
    })),
  );

  const postRoutes = (
    await Promise.all(
      locales.map(async (locale) => {
        const slugs = await getPostSlugs(locale);

        return slugs.map((slug) => ({
          url: `${siteConfig.url}/${locale}/blog/${slug}`,
          lastModified: new Date(),
          changeFrequency: "yearly" as const,
          priority: 0.5,
        }));
      }),
    )
  ).flat();

  return [...staticRoutes, ...postRoutes];
}
