export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

/**
 * Rótulos usados no seletor de idioma.
 *
 * A bandeira saiu daqui: era emoji, que o Windows não desenha. Agora é um
 * componente SVG, mapeado em `locale-switch` — este módulo não importa React.
 */
export const localeNames: Record<Locale, { label: string }> = {
  pt: { label: "Português" },
  en: { label: "English" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Campo de texto disponível nos dois idiomas. Os arquivos em `data/` guardam o
 * conteúdo neste formato para que uma única fonte sirva as duas rotas.
 */
export type Localized<T = string> = Record<Locale, T>;

export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
