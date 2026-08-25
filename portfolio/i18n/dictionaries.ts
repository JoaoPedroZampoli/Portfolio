import type { Locale } from "./config";

import en from "./dictionaries/en";
import pt from "./dictionaries/pt";

export type Dictionary = typeof pt;

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
