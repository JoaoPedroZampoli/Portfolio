"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, ExpandIcon } from "@/components/icons";
import { scrollBehavior } from "@/lib/motion";

const SWIPE_THRESHOLD = 50;
const MAX_DRAG_OFFSET = 100;

interface GalleryLabels {
  previous: string;
  next: string;
  goTo: string;
  imageOf: string;
  /** Liga posição e total: "Imagem 2 <de> 5". */
  imageSeparator: string;
  /** Descreve o papel do conjunto para o leitor de tela. */
  carousel: string;
  expand: string;
  close: string;
}

interface ProjectGalleryProps {
  images: string[];
  /** Nome do projeto, usado nos textos alternativos. */
  name: string;
  labels: GalleryLabels;
  /** Renderizado quando o projeto ainda não tem capturas de tela. */
  fallback?: React.ReactNode;
}

/**
 * Galeria com miniaturas, setas, indicadores e swipe no toque.
 *
 * Substitui as quatro cópias literais que existiam na home, cada uma com o seu
 * próprio conjunto de refs e estados numerados.
 */
export function ProjectGallery({
  images,
  name,
  labels,
  fallback,
}: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchEnd = useRef<{ x: number; y: number } | null>(null);

  const total = images.length;
  const position = `${labels.imageOf} ${index + 1} ${labels.imageSeparator} ${total}`;

  const navigate = useCallback(
    (direction: "next" | "prev") => {
      setIndex((current) =>
        direction === "next"
          ? (current + 1) % total
          : (current - 1 + total) % total,
      );
    },
    [total],
  );

  const expand = useCallback(() => {
    setIsExpanded(true);
    dialogRef.current?.showModal();
  }, []);

  const collapse = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  /**
   * Trava a rolagem do fundo enquanto o lightbox está aberto. O `<dialog>` torna
   * a página inerte, mas não impede o scroll — e o `scrollbar-gutter: stable` do
   * globals.css garante que a barra sumindo não desloque o conteúdo.
   */
  useEffect(() => {
    if (!isExpanded) return;

    const root = document.documentElement;
    const previous = root.style.overflow;

    root.style.overflow = "hidden";

    return () => {
      root.style.overflow = previous;
    };
  }, [isExpanded]);

  // Mantém a miniatura ativa visível ao navegar pelas setas ou pelo swipe.
  useEffect(() => {
    const container = thumbnailsRef.current;

    if (!container) return;

    const thumbnail = container.querySelectorAll("button")[index];

    if (thumbnail) {
      container.scrollTo({
        left: thumbnail.offsetLeft - container.offsetWidth / 2 + thumbnail.offsetWidth / 2,
        behavior: scrollBehavior(),
      });
    }
  }, [index]);

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.targetTouches[0];

    touchEnd.current = null;
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!touchStart.current) return;

    const touch = event.targetTouches[0];

    touchEnd.current = { x: touch.clientX, y: touch.clientY };

    const distanceX = touchStart.current.x - touch.clientX;
    const distanceY = touchStart.current.y - touch.clientY;

    // Swipe vertical é rolagem da página, não navegação da galeria.
    if (Math.abs(distanceY) > Math.abs(distanceX)) return;

    setDragOffset(
      Math.max(-MAX_DRAG_OFFSET, Math.min(MAX_DRAG_OFFSET, -distanceX * 0.5)),
    );
  };

  const handleTouchEnd = () => {
    const start = touchStart.current;
    const end = touchEnd.current;

    setDragOffset(0);
    touchStart.current = null;
    touchEnd.current = null;

    if (!start || !end) return;

    const distanceX = start.x - end.x;
    const distanceY = start.y - end.y;

    if (Math.abs(distanceY) > Math.abs(distanceX)) return;

    if (distanceX > SWIPE_THRESHOLD) navigate("next");
    if (distanceX < -SWIPE_THRESHOLD) navigate("prev");
  };

  if (total === 0) {
    return <>{fallback ?? null}</>;
  }

  return (
    <div
      aria-label={name}
      aria-roledescription={labels.carousel}
      className="space-y-3"
      role="group"
    >
      <div
        className="aspect-video rounded-xl overflow-hidden relative group bg-default-100"
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
      >
        <motion.div
          animate={{ x: dragOffset }}
          className="w-full h-full"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              animate={{ opacity: 1 }}
              className="relative w-full h-full"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <NextImage
                fill
                alt={`${name} — ${position}`}
                className="object-cover"
                // Duas colunas a partir de md; abaixo disso ocupa a largura toda.
                sizes="(min-width: 768px) 540px, 100vw"
                src={images[index]}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/*
          A imagem preenche o quadro com `fill` (absolute, z-auto), então a
          camada de clique precisa passar dela (z-20) — e as setas e
          indicadores, dela (z-30).
        */}
        <button
          aria-label={labels.expand}
          className="absolute inset-0 z-20 cursor-zoom-in outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
          type="button"
          onClick={expand}
        >
          <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
            <ExpandIcon size={18} />
          </span>
        </button>

        {total > 1 ? (
          <>
            <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity z-30 pointer-events-none">
              <button
                aria-label={labels.previous}
                className="pointer-events-auto bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                type="button"
                onClick={() => navigate("prev")}
              >
                <ChevronLeftIcon size={20} />
              </button>
              <button
                aria-label={labels.next}
                className="pointer-events-auto bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                type="button"
                onClick={() => navigate("next")}
              >
                <ChevronRightIcon size={20} />
              </button>
            </div>

            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-30">
              {images.map((image, dot) => (
                <button
                  key={image}
                  aria-current={dot === index}
                  aria-label={`${labels.goTo} ${dot + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    dot === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                  type="button"
                  onClick={() => setIndex(dot)}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <div
          ref={thumbnailsRef}
          className="flex gap-2 overflow-x-auto py-1 hide-scrollbar"
        >
          {images.map((image, thumb) => (
            <button
              key={image}
              aria-current={thumb === index}
              aria-label={`${labels.goTo} ${thumb + 1}`}
              className={`relative flex-shrink-0 h-14 w-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                thumb === index
                  ? "border-primary shadow-lg thumbnail-active"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              type="button"
              onClick={() => setIndex(thumb)}
            >
              <NextImage
                fill
                alt=""
                className="object-cover"
                sizes="96px"
                src={image}
              />
            </button>
          ))}
        </div>
      ) : null}

      {/*
        Setas, pontinhos e swipe trocam a imagem sem mudar nada que um leitor
        de tela acompanhe: o <img> que muda está fora do foco de quem apertou
        o botão. Esta região é o único retorno auditivo da navegação.
      */}
      {total > 1 ? (
        <span aria-live="polite" className="sr-only" role="status">
          {position}
        </span>
      ) : null}

      <dialog
        ref={dialogRef}
        aria-label={`${name} — ${position}`}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/90 backdrop:backdrop-blur-sm"
        onClose={() => setIsExpanded(false)}
        onKeyDown={(event) => {
          if (total < 2) return;

          if (event.key === "ArrowRight") {
            event.preventDefault();
            navigate("next");
          }

          if (event.key === "ArrowLeft") {
            event.preventDefault();
            navigate("prev");
          }
        }}
      >
        {isExpanded ? (
          <div
            className="relative flex h-full w-full items-center justify-center p-4 md:p-12"
            role="presentation"
            onClick={(event) => {
              // Clique na área vazia ao redor da imagem fecha o lightbox.
              if (event.target === event.currentTarget) collapse();
            }}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
          >
            {/*
              Aqui o <img> cru é proposital: o lightbox existe para mostrar a
              captura em tamanho cheio, e só monta quando o usuário expande.
              Com `fill` a imagem cobriria toda a área do diálogo e roubaria o
              clique no vazio que fecha o modal.
            */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={`${name} — ${position}`}
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
              src={images[index]}
            />

            <button
              aria-label={labels.close}
              className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-black/80"
              type="button"
              onClick={collapse}
            >
              <CloseIcon size={22} />
            </button>

            {total > 1 ? (
              <>
                <button
                  aria-label={labels.previous}
                  className="absolute left-2 md:left-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-black/80"
                  type="button"
                  onClick={() => navigate("prev")}
                >
                  <ChevronLeftIcon size={24} />
                </button>
                <button
                  aria-label={labels.next}
                  className="absolute right-2 md:right-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-black/80"
                  type="button"
                  onClick={() => navigate("next")}
                >
                  <ChevronRightIcon size={24} />
                </button>

                <p className="absolute bottom-5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur-sm">
                  {index + 1} / {total}
                </p>
              </>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </div>
  );
}

export default ProjectGallery;
