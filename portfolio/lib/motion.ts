/**
 * O bloco `prefers-reduced-motion` do globals.css zera animações e transições
 * do CSS, e troca o `scroll-behavior` do <html> para `auto`. Rolagem
 * programática não passa por ali: um `behavior: "smooth"` explícito no
 * `scrollTo` tem precedência sobre a declaração do CSS, então quem pediu menos
 * movimento continuaria recebendo a página inteira deslizando. Toda rolagem
 * animada do site decide o comportamento por aqui.
 */
export function prefersReducedMotion(): boolean {
  // Chamado dentro de handlers e efeitos, mas o guarda mantém o módulo seguro
  // caso alguma rolagem passe a ser calculada durante o render no servidor.
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Comportamento a passar para `scrollTo`, respeitando a preferência do sistema. */
export function scrollBehavior(): ScrollBehavior {
  return prefersReducedMotion() ? "auto" : "smooth";
}
