"use client";

import type { CSSProperties, ReactNode } from "react";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos antes da animação começar. */
  delay?: number;
  /** Deslocamento vertical inicial, em pixels. */
  y?: number;
  /** `true` anima na montagem em vez de esperar entrar na viewport. */
  immediate?: boolean;
}

/**
 * Encapsula o padrão de entrada usado em todo o site.
 *
 * O estado de repouso é visível, e isso é o ponto. A versão anterior animava
 * pelo Framer Motion a partir de `opacity: 0`, e esse zero ia no HTML do
 * servidor: a página Sobre chegava com trinta blocos invisíveis e só aparecia
 * depois da hidratação. Sem JavaScript, ou antes dele, o conteúdo não estava
 * lá — nem para quem lê, nem para quem rastreia.
 *
 * Agora quem esconde é o próprio JavaScript, depois de montar, e só o que está
 * fora da tela. O bloco que já está visível na primeira medição fica como
 * está: além de correto, evita o pisca de esconder e reanimar acima da dobra.
 *
 * `immediate` não precisa de observador nenhum — é animação de CSS na
 * montagem, com `backwards` segurando o estado inicial durante o atraso.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (immediate) return;

    const elemento = ref.current;

    if (!elemento) return;

    let primeira = true;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          // Se já estava visível na primeira medição, não há o que animar —
          // e, principalmente, não há o que esconder.
          if (!primeira) elemento.dataset.reveal = "in";
          observador.disconnect();
        } else if (primeira) {
          // Fora da tela: dá para esconder sem ninguém ver o conteúdo sumir.
          elemento.dataset.reveal = "pending";
        }

        primeira = false;
      },
      { threshold: 0.15 },
    );

    observador.observe(elemento);

    return () => observador.disconnect();
  }, [immediate]);

  const estilo = {
    "--reveal-y": `${y}px`,
    "--reveal-delay": `${delay}s`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={className}
      data-reveal={immediate ? "in" : undefined}
      style={estilo}
    >
      {children}
    </div>
  );
}

export default Reveal;
