"use client";

import type { ButtonProps } from "@heroui/button";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";

export interface LinkButtonProps extends Omit<ButtonProps, "as" | "href"> {
  href: string;
  /** Abre em nova aba e usa o anchor do HeroUI em vez do roteador do Next. */
  isExternal?: boolean;
}

/**
 * Botão que navega. Existe porque `as={NextLink}` só pode ser passado dentro de
 * um Client Component — um Server Component não consegue serializar a função.
 */
export function LinkButton({ href, isExternal, ...props }: LinkButtonProps) {
  if (isExternal) {
    return <Button {...props} isExternal as={Link} href={href} />;
  }

  return <Button {...props} as={NextLink} href={href} />;
}
