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

/**
 * O next-themes renderiza um <script> inline que aplica o tema antes da
 * pintura. Ele só serve no HTML do servidor: quando o React cria o mesmo
 * <script> no navegador (ao trocar de idioma o layout remonta), ele nunca
 * executa, e o React 19 avisa no console. Com `text/plain` no cliente o
 * elemento vira bloco de dados e o aviso some; no servidor continua
 * `text/javascript` e roda normalmente. A diferença de atributo na hidratação
 * não gera aviso porque o next-themes já marca o script com
 * `suppressHydrationWarning`.
 */
const themeScriptProps = {
  type: typeof window === "undefined" ? "text/javascript" : "text/plain",
};

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider scriptProps={themeScriptProps} {...themeProps}>
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
