import type { Locale } from "@/i18n/config";

import { defaultLocale, isLocale, locales } from "@/i18n/config";

/** Monta um caminho já prefixado com o idioma: ("en", "/about") → "/en/about". */
export function localePath(locale: Locale, href: string = ""): string {
  const normalized = href === "/" ? "" : href;

  return `/${locale}${normalized}` || "/";
}

/** Extrai o idioma de um pathname; devolve o padrão quando não há prefixo. */
export function localeFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1] ?? "";

  return isLocale(segment) ? segment : defaultLocale;
}

/** Troca o prefixo de idioma mantendo o resto da rota atual. */
export function switchLocalePath(pathname: string, next: Locale): string {
  const segments = pathname.split("/");

  if (isLocale(segments[1] ?? "")) {
    segments[1] = next;

    return segments.join("/");
  }

  return localePath(next, pathname);
}

export { locales, defaultLocale, isLocale };
