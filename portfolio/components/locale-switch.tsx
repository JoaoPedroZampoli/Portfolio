"use client";

import type { Locale } from "@/i18n/config";

import { Button } from "@heroui/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import NextImage from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { localeNames, locales } from "@/i18n/config";
import { switchLocalePath } from "@/lib/navigation";

/**
 * Bandeira de cada idioma, como imagem em `public/flags`.
 *
 * Era emoji, que o Windows não desenha — a Segoe UI Emoji não traz glifo de
 * bandeira de país. Virou SVG desenhado à mão e agora é imagem de verdade, em
 * 192×128, servida pelo `next/image`.
 *
 * O inglês aponta para o Reino Unido, não para os Estados Unidos.
 */
const bandeiras: Record<Locale, { src: string; pais: string }> = {
  pt: { src: "/flags/brasil.png", pais: "Brasil" },
  en: { src: "/flags/gb.png", pais: "United Kingdom" },
};

interface LocaleSwitchProps {
  locale: Locale;
  label: string;
}

/**
 * `alt` vazio de propósito: a bandeira é decorativa. O nome do idioma está
 * escrito ao lado em cada item, e o botão já tem `aria-label` com ele — um
 * texto alternativo aqui faria o leitor de tela repetir a mesma informação.
 */
function Bandeira({ locale }: { locale: Locale }) {
  return (
    <NextImage
      alt=""
      className="shrink-0 rounded-[2px] ring-1 ring-foreground/20"
      height={14}
      src={bandeiras[locale].src}
      width={21}
    />
  );
}

export function LocaleSwitch({ locale, label }: LocaleSwitchProps) {
  const pathname = usePathname();
  const router = useRouter();

  const change = (next: Locale) => {
    // Persiste a escolha para que o middleware respeite na próxima visita.
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(switchLocalePath(pathname, next));
  };

  // `shouldBlockScroll` (padrão true no Dropdown) aplica `overflow: hidden` no
  // <html> enquanto o menu está aberto: a barra de rolagem some e o conteúdo
  // pula para o lado. O menu é pequeno e fecha no primeiro clique, então travar
  // o scroll não compra nada.
  return (
    <Dropdown placement="bottom-end" shouldBlockScroll={false}>
      <DropdownTrigger>
        <Button
          aria-label={`${label} (${localeNames[locale].label})`}
          className="text-default-500 h-8 min-w-0 gap-1.5 px-2 data-[hover=true]:text-foreground"
          size="sm"
          variant="light"
        >
          <Bandeira locale={locale} />
          <span className="text-xs font-semibold tracking-wide">
            {locale.toUpperCase()}
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label={label}
        disallowEmptySelection
        selectedKeys={[locale]}
        selectionMode="single"
        onAction={(key) => change(key as Locale)}
      >
        {locales.map((item) => (
          <DropdownItem key={item} startContent={<Bandeira locale={item} />}>
            {localeNames[item].label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default LocaleSwitch;
