import fs from "node:fs";
import path from "node:path";

import type { Locale } from "@/i18n/config";

const FALLBACK = "/og-pt.jpg";

/**
 * Cartão de Open Graph do idioma, com queda para o português.
 *
 * Cada idioma tem o seu cartão porque a descrição vem impressa na imagem. Os
 * arquivos são capturados à mão em `/{locale}/og-preview`, então o de um
 * idioma pode ainda não existir — nesse caso vale o cartão em português, que é
 * melhor do que anunciar uma imagem que responde 404.
 *
 * A checagem roda em tempo de build, junto da geração estática das páginas.
 */
export function ogImagePath(locale: Locale): string {
  const candidate = `/og-${locale}.jpg`;

  return fs.existsSync(path.join(process.cwd(), "public", candidate))
    ? candidate
    : FALLBACK;
}
