"use client";

import type { SwitchProps } from "@heroui/switch";
import type { FC } from "react";

import { useSwitch } from "@heroui/switch";
import { useIsSSR } from "@react-aria/ssr";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

import { MoonFilledIcon, SunFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
  label?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
  label = "Toggle theme",
}) => {
  const { resolvedTheme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  // `resolvedTheme`, não `theme`: com o padrão em "system" o `theme` vale a
  // string "system", e o botão mostraria o ícone errado justamente para quem
  // nunca tocou nele.
  const isLight = resolvedTheme === "light" || isSSR;

  /**
   * Troca o tema com um crossfade da página inteira, pela View Transitions
   * API: o navegador fotografa a página antes, aplica o tema novo e funde uma
   * foto na outra (duração e curva no globals.css).
   *
   * O `flushSync` é o que faz isso funcionar. O next-themes só aplica a classe
   * no <html> num `useEffect`; renderizando de forma síncrona, o React roda
   * esse efeito antes do callback retornar, e a foto "depois" já sai com o
   * tema novo.
   *
   * Sem suporte à API ou com movimento reduzido, a troca é instantânea — o
   * bloco `prefers-reduced-motion` do CSS não alcança os pseudo-elementos da
   * transição, então a checagem precisa ser feita aqui.
   */
  const toggleTheme = () => {
    const next = isLight ? "dark" : "light";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!document.startViewTransition || reduceMotion) {
      setTheme(next);

      return;
    }

    document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    "aria-label": label,
    isSelected: isLight,
    onChange: toggleTheme,
  });

  // No servidor não se sabe o tema; o sol é o ícone neutro até hidratar.
  const showSun = !isSelected || isSSR;

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px px-0 mx-0",
            ],
            classNames?.wrapper,
          ),
        })}
      >
        {/*
          Os dois ícones ficam empilhados e se revezam: o que sai gira e
          encolhe, o que entra gira de volta ao lugar. O `theme-toggle` tira o
          botão do crossfade da página (ver globals.css) — senão a rotação
          apareceria fundida com a foto antiga do botão.
        */}
        <span className="relative block size-[22px] [view-transition-name:theme-toggle]">
          <SunFilledIcon
            className={clsx(
              "absolute inset-0 transition-[transform,opacity] duration-500 ease-out",
              showSun ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
            )}
            size={22}
          />
          <MoonFilledIcon
            className={clsx(
              "absolute inset-0 transition-[transform,opacity] duration-500 ease-out",
              showSun ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
            )}
            size={22}
          />
        </span>
      </div>
    </Component>
  );
};

export default ThemeSwitch;
