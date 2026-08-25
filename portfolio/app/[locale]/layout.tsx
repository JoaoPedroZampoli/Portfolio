import type { Locale } from "@/i18n/config";
import type { Metadata, Viewport } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import { notFound } from "next/navigation";

import "@/styles/globals.css";

import { Providers } from "../providers";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";
import { fontMono, fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ogImagePath } from "@/lib/og-image";
import { serializeJsonLd, structuredData } from "@/lib/structured-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);
  const ogImage = ogImagePath(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${dict.meta.title} — ${dict.meta.tagline}`,
      template: `%s — ${dict.meta.title}`,
    },
    description: dict.meta.description,
    authors: [{ name: siteConfig.author, url: siteConfig.links.github }],
    keywords: [
      "João Pedro Zampoli",
      "desenvolvedor de software",
      "software developer",
      "Unifesp",
      "CodeLab",
      "portfólio",
      "portfolio",
    ],
    icons: {
      // O .ico atende o pedido automático do navegador em /favicon.ico; o SVG
      // é o que browsers modernos preferem, e escala sem borrar em telas HiDPI.
      icon: [
        { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((item) => [item === "pt" ? "pt-BR" : "en-US", `/${item}`]),
      ),
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      url: `${siteConfig.url}/${locale}`,
      siteName: dict.meta.title,
      title: `${dict.meta.title} — ${dict.meta.tagline}`,
      description: dict.meta.description,
      // Cartão 1200x630 capturado da página `/og-preview`, na proporção que o
      // `summary_large_image` espera.
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.author} — ${dict.meta.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.meta.title} — ${dict.meta.tagline}`,
      description: dict.meta.description,
      images: [ogImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <html
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      lang={typedLocale === "pt" ? "pt-BR" : "en"}
    >
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(structuredData(typedLocale)),
          }}
          type="application/ld+json"
        />
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            {/*
              Antes do conteúdo há uma dezena de elementos focáveis na navbar.
              Este link fica invisível até receber foco, e é a primeira parada
              do Tab em qualquer página.
            */}
            <a
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:font-medium focus:text-primary-foreground"
              href="#main-content"
            >
              {dict.common.skipToContent}
            </a>
            <Navbar dict={dict} locale={typedLocale} />
            <main className="flex-grow" id="main-content">
              {children}
            </main>
            <Footer dict={dict} locale={typedLocale} />
            <ScrollToTop label={dict.common.backToTop} />
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
