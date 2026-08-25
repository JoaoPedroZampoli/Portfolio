import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";

import { Link } from "@heroui/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { ChevronLeftIcon } from "@/components/icons";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { formatDate, getPost, getPostSlugs } from "@/lib/blog";
import { localePath } from "@/lib/navigation";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const params = await Promise.all(
    locales.map(async (locale) => {
      const slugs = await getPostSlugs(locale);

      return slugs.map((slug) => ({ locale, slug }));
    }),
  );

  return params.flat();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) return {};

  const post = await getPost(locale, slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

/**
 * Componentes usados pelo MDX — mantém a tipografia consistente com o site.
 *
 * As regras de a11y sobre conteúdo em headings e âncoras não se aplicam aqui:
 * `children` chega pelo spread, vindo do próprio markdown.
 */
/* eslint-disable jsx-a11y/heading-has-content, jsx-a11y/anchor-has-content */
const mdxComponents = {
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-2xl font-bold text-foreground mt-12 mb-4 tracking-tight"
      {...props}
    />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="text-default-600 leading-relaxed mb-5" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 space-y-2 mb-5 text-default-600" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 space-y-2 mb-5 text-default-600" {...props} />
  ),
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-primary underline underline-offset-4 hover:opacity-80"
      rel="noreferrer"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      {...props}
    />
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code
      className="font-mono text-[0.9em] px-1.5 py-0.5 rounded bg-default-100 text-default-700"
      {...props}
    />
  ),
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="font-mono text-sm p-4 rounded-xl bg-default-100 overflow-x-auto mb-5"
      {...props}
    />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-primary/40 pl-4 italic text-default-500 mb-5"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-default-200" />,
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
};
/* eslint-enable jsx-a11y/heading-has-content, jsx-a11y/anchor-has-content */

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);
  const post = await getPost(typedLocale, slug);

  if (!post) notFound();

  return (
    <article className="w-full max-w-3xl mx-auto px-6 py-16 md:py-24">
      <Link
        className="inline-flex items-center gap-1.5 text-sm text-default-500 hover:text-primary transition-colors mb-8"
        href={localePath(typedLocale, "/blog")}
      >
        <ChevronLeftIcon size={16} />
        {dict.blog.backToBlog}
      </Link>

      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-default-500 mb-4">
          <time dateTime={post.date}>{formatDate(post.date, typedLocale)}</time>
          <span aria-hidden="true">·</span>
          <span>
            {post.readingTime} {dict.blog.minutesRead}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-4">
          {post.title}
        </h1>

        <p className="text-lg text-default-500 leading-relaxed">{post.summary}</p>

        {post.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-default-100 text-default-600"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <div className="border-t border-default-200 pt-10">
        <MDXRemote components={mdxComponents} source={post.content} />
      </div>
    </article>
  );
}
