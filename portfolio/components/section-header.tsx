import { Reveal } from "@/components/reveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  /**
   * Nível do título. `h2` serve para seções dentro de uma página que já tem
   * `h1`; nas páginas cujo cabeçalho É o título da página, passe `h1` — cada
   * documento precisa de exatamente um.
   */
  as?: "h1" | "h2";
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 md:mb-16 ${alignment}`}>
      <Reveal>
        <Heading className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          {title}
        </Heading>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base md:text-lg text-default-500 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export default SectionHeader;
