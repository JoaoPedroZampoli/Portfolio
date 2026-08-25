"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { MotionConfig } from "framer-motion";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        {/*
          O bloco `prefers-reduced-motion` do globals.css só alcança animações
          e transições do CSS. Todo o movimento do site vem do Framer Motion,
          que anima por JavaScript e passa longe daquelas regras — quem pediu
          menos movimento continuaria recebendo tudo. `reducedMotion="user"`
          faz os `motion.*` seguirem a preferência do sistema: descarta
          deslocamento e escala, preserva as transições de opacidade.
        */}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
