import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";

import NextImage from "next/image";
import { notFound } from "next/navigation";

import { TerminalIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Página temporária: renderiza cartões de Open Graph em 1200x630 para serem
 * capturados à mão e salvos como imagem estática.
 *
 * Fora do menu, fora do sitemap e marcada como noindex. Pode ser apagada assim
 * que o PNG escolhido estiver em `public/`.
 *
 * As cores aqui são literais em vez dos tokens do tema (`bg-background`,
 * `text-foreground`) de propósito: o cartão precisa sair igual na captura
 * independentemente de o site estar no tema claro ou escuro na hora.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const CARD = "relative overflow-hidden flex shrink-0 font-sans";
const CARD_SIZE = { width: 1200, height: 630 };

function Glow() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(120,119,198,0.28),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_72%,rgba(45,212,191,0.22),transparent_55%)]" />
    </div>
  );
}

export default async function OgPreviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);
  const domain = siteConfig.url.replace("https://", "");

  return (
    <div className="w-full px-6 py-12 bg-zinc-950">
      <div className="max-w-[1200px] mx-auto mb-10 text-zinc-300">
        <h1 className="text-2xl font-bold text-white mb-3">
          Cartões Open Graph — 1200×630 ({typedLocale.toUpperCase()})
        </h1>
        <p className="text-sm leading-relaxed mb-2">
          Cada moldura abaixo tem exatamente 1200×630. Para capturar sem sobra:
          botão direito no cartão → <strong>Inspecionar</strong> → no painel do
          DevTools, botão direito no elemento com{" "}
          <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-teal-300">
            data-og-card
          </code>{" "}
          → <strong>Capture node screenshot</strong>. Sai no tamanho certo, sem
          precisar recortar.
        </p>
        <p className="text-sm leading-relaxed">
          Em tela HiDPI a captura sai em 2400×1260 — pode mandar assim mesmo que
          eu redimensiono. Troque para{" "}
          <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-teal-300">
            /{typedLocale === "pt" ? "en" : "pt"}/og-preview
          </code>{" "}
          para a outra versão.
        </p>
      </div>

      <div className="flex flex-col items-start gap-12 overflow-x-auto">
        {/* ---------- A: retrato, ecoando a home ---------- */}
        <figure className="shrink-0">
          <figcaption className="text-sm font-medium text-teal-300 mb-3">
            A — Retrato
          </figcaption>
          <div
            className={`${CARD} items-center gap-14 px-[72px] bg-[#09090b]`}
            data-og-card="a"
            style={CARD_SIZE}
          >
            <Glow />
            <div className="relative flex flex-col flex-1 min-w-0">
              <p className="text-[76px] font-bold leading-[1.05] tracking-tight bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                {siteConfig.shortName}
              </p>
              <p className="mt-6 text-[26px] leading-snug text-zinc-400">
                {dict.meta.description}
              </p>
              <p className="mt-9 flex items-center gap-3 text-[21px] text-zinc-500">
                <span className="inline-block w-2 h-2 rounded-full bg-teal-300" />
                {domain}
              </p>
            </div>
            <div className="relative shrink-0 w-[312px] h-[312px] rounded-full p-[5px] bg-gradient-to-br from-blue-500 via-teal-400 to-blue-600">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#09090b]">
                <NextImage
                  fill
                  priority
                  alt=""
                  className="object-cover"
                  sizes="312px"
                  src="/MyPhoto.jpg"
                />
              </div>
            </div>
          </div>
        </figure>

        {/* ---------- B: tipográfico, sem foto ---------- */}
        <figure className="shrink-0">
          <figcaption className="text-sm font-medium text-teal-300 mb-3">
            B — Tipográfico
          </figcaption>
          <div
            className={`${CARD} flex-col justify-center px-[80px] bg-[#09090b]`}
            data-og-card="b"
            style={CARD_SIZE}
          >
            <Glow />
            <div className="relative flex items-center text-teal-300">
              <TerminalIcon size={44} />
            </div>
            <p className="relative mt-7 text-[104px] font-bold leading-[1.02] tracking-tight bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              {siteConfig.shortName}
            </p>
            <p className="relative mt-8 max-w-[900px] text-[28px] leading-snug text-zinc-400">
              {dict.meta.description}
            </p>
            <p className="relative mt-10 text-[22px] text-zinc-500">{domain}</p>
          </div>
        </figure>

        {/* ---------- C: foto sangrando à direita ---------- */}
        <figure className="shrink-0">
          <figcaption className="text-sm font-medium text-teal-300 mb-3">
            C — Editorial
          </figcaption>
          <div
            className={`${CARD} bg-[#09090b]`}
            data-og-card="c"
            style={CARD_SIZE}
          >
            <Glow />
            <div className="relative flex flex-col justify-center flex-1 min-w-0 pl-[72px] pr-10">
              <p className="text-[68px] font-bold leading-[1.05] tracking-tight text-white">
                {siteConfig.shortName}
              </p>
              <div className="mt-6 w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-400" />
              <p className="mt-6 text-[25px] leading-snug text-zinc-400">
                {dict.meta.description}
              </p>
              <p className="mt-8 text-[20px] text-zinc-500">{domain}</p>
            </div>
            <div className="relative w-[430px] h-full shrink-0">
              <NextImage
                fill
                priority
                alt=""
                className="object-cover"
                sizes="430px"
                src="/MyPhoto.jpg"
              />
              {/* Degradê que funde a foto no fundo, sem borda dura. */}
              <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#09090b] to-transparent" />
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}
