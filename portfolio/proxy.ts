import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

import { defaultLocale, isLocale, locales } from "@/i18n/config";

/**
 * Resolve o idioma na ordem: cookie escolhido pelo usuário → cabeçalho
 * Accept-Language → padrão.
 */
function resolveLocale(request: NextRequest) {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;

  if (cookie && isLocale(cookie)) return cookie;

  const header = request.headers.get("accept-language") ?? "";
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0].trim().split("-")[0].toLowerCase());

  return preferred.find(isLocale) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();

  url.pathname = `/${resolveLocale(request)}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  // Deixa passar arquivos estáticos, rotas internas do Next e assets com extensão.
  matcher: ["/((?!api|_next/static|_next/image|.*\\.).*)"],
};
