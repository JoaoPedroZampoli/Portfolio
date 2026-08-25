"use client";

import type { Locale } from "@/i18n/config";

import { Button } from "@heroui/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { usePathname, useRouter } from "next/navigation";

import { localeNames, locales } from "@/i18n/config";
import { switchLocalePath } from "@/lib/navigation";

interface LocaleSwitchProps {
  locale: Locale;
  label: string;
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
          <span aria-hidden="true" className="text-base leading-none">
            {localeNames[locale].flag}
          </span>
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
          <DropdownItem key={item} startContent={localeNames[item].flag}>
            {localeNames[item].label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default LocaleSwitch;
