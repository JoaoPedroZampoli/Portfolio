import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import type { Locale } from "@/i18n/config";
import type { BlogPost, BlogPostMeta } from "@/types";

const CONTENT_ROOT = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 220;

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function parse(slug: string, raw: string): BlogPost {
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: data.draft === true,
    readingTime: estimateReadingTime(content),
    content,
  };
}

async function readDirectory(locale: Locale): Promise<string[]> {
  try {
    const entries = await fs.readdir(path.join(CONTENT_ROOT, locale));

    return entries.filter((entry) => entry.endsWith(".mdx"));
  } catch {
    // Idioma ainda sem pasta de posts: trata como vazio em vez de quebrar a build.
    return [];
  }
}

export async function getPost(
  locale: Locale,
  slug: string,
): Promise<BlogPost | null> {
  // Evita path traversal a partir do parâmetro de rota.
  if (!/^[a-z0-9-]+$/i.test(slug)) return null;

  try {
    const raw = await fs.readFile(
      path.join(CONTENT_ROOT, locale, `${slug}.mdx`),
      "utf8",
    );
    const post = parse(slug, raw);

    return post.draft && process.env.NODE_ENV === "production" ? null : post;
  } catch {
    return null;
  }
}

/** Posts publicados, do mais recente para o mais antigo. */
export async function getPosts(locale: Locale): Promise<BlogPostMeta[]> {
  const files = await readDirectory(locale);

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = await fs.readFile(
        path.join(CONTENT_ROOT, locale, file),
        "utf8",
      );
      const { content: _content, ...meta } = parse(slug, raw);

      return meta;
    }),
  );

  return posts
    .filter((post) => !post.draft || process.env.NODE_ENV !== "production")
    .sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Slugs publicados. Deriva de `getPosts` para herdar o filtro de rascunho —
 * senão o sitemap e o `generateStaticParams` anunciariam URLs que `getPost`
 * recusa em produção.
 */
export async function getPostSlugs(locale: Locale): Promise<string[]> {
  const posts = await getPosts(locale);

  return posts.map((post) => post.slug);
}

export function formatDate(date: string, locale: Locale): string {
  const parsed = new Date(`${date}T12:00:00Z`);

  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}
