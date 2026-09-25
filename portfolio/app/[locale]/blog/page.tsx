import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";

import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { notFound } from "next/navigation";
import NextLink from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { formatDate, getPosts } from "@/lib/blog";
import { localePath } from "@/lib/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return { title: dict.blog.title, description: dict.blog.subtitle };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);
  const posts = await getPosts(typedLocale);

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24">
      <SectionHeader
        as="h1"
        subtitle={dict.blog.subtitle}
        title={dict.blog.title}
      />

      {posts.length === 0 ? (
        <Reveal immediate delay={0.2}>
          <p className="text-center text-default-500 py-16">{dict.blog.empty}</p>
        </Reveal>
      ) : (
        <div className="space-y-5">
          {posts.map((post, index) => (
            // Os primeiros entram junto com o cabeçalho; os de baixo, ao rolar.
            <Reveal
              key={post.slug}
              delay={index < 3 ? 0.2 + index * 0.06 : index * 0.06}
              immediate={index < 3}
            >
              <NextLink
                className="block"
                href={localePath(typedLocale, `/blog/${post.slug}`)}
              >
                <Card
                  isHoverable
                  className="border border-default-200"
                  shadow="none"
                >
                  <CardBody className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-default-500 mb-3">
                      <time dateTime={post.date}>
                        {formatDate(post.date, typedLocale)}
                      </time>
                      <span aria-hidden="true">·</span>
                      <span>
                        {post.readingTime} {dict.blog.minutesRead}
                      </span>
                      {post.draft ? (
                        <Chip color="warning" size="sm" variant="flat">
                          draft
                        </Chip>
                      ) : null}
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 tracking-tight">
                      {post.title}
                    </h2>
                    <p className="text-default-600 text-sm leading-relaxed mb-4">
                      {post.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-default-100 text-default-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </NextLink>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
