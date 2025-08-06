"use client";

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Image } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImg1Index, setSelectedImg1Index] = useState(0);
  const [selectedImg2Index, setSelectedImg2Index] = useState(0);
  const [selectedImg3Index, setSelectedImg3Index] = useState(0);

  // Estados para touch/drag
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [currentDragGallery, setCurrentDragGallery] = useState<number | null>(
    null,
  );
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(
    null,
  );

  // Refs para os containers de miniaturas
  const thumbnailsRef1 = useRef<HTMLDivElement>(null);
  const thumbnailsRef2 = useRef<HTMLDivElement>(null);
  const thumbnailsRef3 = useRef<HTMLDivElement>(null);

  // Arrays de imagens dos projetos
  const projeto1Imagens = [
    "https://picsum.photos/seed/projeto1-1/1920/1080",
    "https://picsum.photos/seed/projeto1-2/1920/1080",
    "https://picsum.photos/seed/projeto1-3/1920/1080",
    "https://picsum.photos/seed/projeto1-4/1920/1080",
  ];

  const projeto2Imagens = [
    "https://picsum.photos/seed/projeto2-1/1920/1080",
    "https://picsum.photos/seed/projeto2-2/1920/1080",
    "https://picsum.photos/seed/projeto2-3/1920/1080",
  ];

  const projeto3Imagens = [
    "https://picsum.photos/seed/projeto3-1/1920/1080",
    "https://picsum.photos/seed/projeto3-2/1920/1080",
    "https://picsum.photos/seed/projeto3-3/1920/1080",
    "https://picsum.photos/seed/projeto3-4/1920/1080",
    "https://picsum.photos/seed/projeto3-5/1920/1080",
  ];

  // Funções de navegação
  const navigateGallery = (
    galleryIndex: number,
    direction: "next" | "prev",
  ) => {
    if (galleryIndex === 1) {
      const maxIndex = projeto1Imagens.length - 1;
      if (direction === "next") {
        setSelectedImg1Index((prev) => (prev >= maxIndex ? 0 : prev + 1));
      } else {
        setSelectedImg1Index((prev) => (prev <= 0 ? maxIndex : prev - 1));
      }
    } else if (galleryIndex === 2) {
      const maxIndex = projeto2Imagens.length - 1;
      if (direction === "next") {
        setSelectedImg2Index((prev) => (prev >= maxIndex ? 0 : prev + 1));
      } else {
        setSelectedImg2Index((prev) => (prev <= 0 ? maxIndex : prev - 1));
      }
    } else if (galleryIndex === 3) {
      const maxIndex = projeto3Imagens.length - 1;
      if (direction === "next") {
        setSelectedImg3Index((prev) => (prev >= maxIndex ? 0 : prev + 1));
      } else {
        setSelectedImg3Index((prev) => (prev <= 0 ? maxIndex : prev - 1));
      }
    }
  };

  // Funções de touch
  const handleTouchStart = (e: React.TouchEvent, galleryIndex: number) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
    setCurrentDragGallery(galleryIndex);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || !isDragging) return;

    const currentTouch = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };

    const distanceX = touchStart.x - currentTouch.x;
    const distanceY = touchStart.y - currentTouch.y;

    // Verificar se é um movimento mais vertical que horizontal
    const isVerticalSwipe = Math.abs(distanceY) > Math.abs(distanceX);

    // Se for swipe vertical, não fazer nada
    if (isVerticalSwipe) {
      return;
    }

    // Calcular offset para preview do movimento
    const maxOffset = 100;
    const offset = Math.max(-maxOffset, Math.min(maxOffset, -distanceX * 0.5));
    setDragOffset(offset);
  };

  const handleTouchEnd = (galleryIndex: number) => {
    if (!touchStart || !touchEnd) {
      // Se não temos touchEnd, vamos usar a posição final do drag
      setIsDragging(false);
      setCurrentDragGallery(null);
      setDragOffset(0);
      return;
    }

    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;

    const isLeftSwipe = distanceX > 50;
    const isRightSwipe = distanceX < -50;

    if (isLeftSwipe) {
      navigateGallery(galleryIndex, "next");
    } else if (isRightSwipe) {
      navigateGallery(galleryIndex, "prev");
    }

    setIsDragging(false);
    setCurrentDragGallery(null);
    setDragOffset(0);
  };

  const handleThumbnailClick = (galleryIndex: number, index: number) => {
    let thumbnailsRef;

    if (galleryIndex === 1) {
      setSelectedImg1Index(index);
      thumbnailsRef = thumbnailsRef1;
    } else if (galleryIndex === 2) {
      setSelectedImg2Index(index);
      thumbnailsRef = thumbnailsRef2;
    } else if (galleryIndex === 3) {
      setSelectedImg3Index(index);
      thumbnailsRef = thumbnailsRef3;
    }

    // Rolar para a miniatura selecionada
    if (thumbnailsRef?.current) {
      const container = thumbnailsRef.current;
      const thumbnails = container.children;
      if (thumbnails[index]) {
        const thumbnail = thumbnails[index] as HTMLElement;
        container.scrollLeft = thumbnail.offsetLeft - container.offsetLeft;
      }
    }
  };

  // Efeito para rolar para a miniatura ativa quando a imagem muda
  useEffect(() => {
    handleThumbnailClick(1, selectedImg1Index);
  }, [selectedImg1Index]);

  useEffect(() => {
    handleThumbnailClick(2, selectedImg2Index);
  }, [selectedImg2Index]);

  useEffect(() => {
    handleThumbnailClick(3, selectedImg3Index);
  }, [selectedImg3Index]);

  return (
    <section className="min-h-screen flex flex-col">
      {/* Hero Section - Full Viewport */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-indigo-900/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]"></div>

        <motion.div
          className="w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-sm uppercase tracking-widest text-default-500 mb-4 font-medium">
                Desenvolvedor de Software
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-default-900">Olá, eu sou</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  João Pedro
                </span>
                <br />
                <span className="text-default-700">Zampoli</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-default-600 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transformo ideias em experiências digitais excepcionais.
              Especializado em desenvolvimento web, jogos e soluções inovadoras
              que conectam tecnologia e criatividade.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                as={Link}
                href="/about"
                className={buttonStyles({
                  color: "primary",
                  variant: "shadow",
                  radius: "full",
                  size: "lg",
                })}
              >
                Sobre Mim
              </Button>

              <Button
                as={Link}
                href="/projects"
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                  size: "lg",
                })}
              >
                Ver Projetos
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                isExternal
                href={siteConfig.links.github}
                aria-label="GitHub"
              >
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-default-100 group-hover:bg-default-200 transition-colors">
                    <GithubIcon size={20} className="text-default-700" />
                  </div>
                  <span className="text-sm font-medium text-default-600 group-hover:text-default-900 transition-colors">
                    GitHub
                  </span>
                </div>
              </Link>
              <Link
                isExternal
                href={siteConfig.links.linkedin}
                aria-label="LinkedIn"
              >
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-default-100 group-hover:bg-default-200 transition-colors">
                    <LinkedInIcon size={20} className="text-default-700" />
                  </div>
                  <span className="text-sm font-medium text-default-600 group-hover:text-default-900 transition-colors">
                    LinkedIn
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="flex-1 flex justify-center w-full lg:w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                  <Image
                    src="/MyPhoto.jpg"
                    alt="João Pedro Zampoli"
                    className="w-full h-full object-cover"
                    width={384}
                    height={384}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Projects Section */}
      <div className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-default-50/50 to-transparent"></div>

        <motion.div
          className="w-full max-w-7xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20">
            <motion.p
              className="text-sm uppercase tracking-widest text-default-500 mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Portfólio
            </motion.p>
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-default-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Projetos em Destaque
            </motion.h2>
            <motion.p
              className="text-lg text-default-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Uma seleção dos meus trabalhos mais recentes e impactantes
            </motion.p>
          </div>

          <div className="space-y-32">
            {/* Projeto 1 - Gato, o jogo */}
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      Game Development
                    </span>
                    <span className="text-sm text-default-500">2024</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-default-900">
                    Gato, o jogo
                  </h3>
                  <p className="text-lg text-default-600 leading-relaxed">
                    Mini-game 2D criado em Unity inspirado em clássicos de
                    plataforma. O jogador controla um gato em busca de seu
                    sachê, navegando por diferentes níveis com mecânicas de pulo
                    e coleta.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                    Unity
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
                    C#
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
                    Game Design
                  </span>
                </div>

                <Button
                  as={Link}
                  href="#"
                  className={buttonStyles({
                    color: "primary",
                    radius: "md",
                    variant: "flat",
                    size: "lg",
                  })}
                >
                  Ver Projeto →
                </Button>
              </div>

              <div className="space-y-4">
                <div
                  className="aspect-video rounded-2xl overflow-hidden relative group bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                  onTouchStart={(e) => handleTouchStart(e, 1)}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={() => handleTouchEnd(1)}
                >
                  <motion.div
                    animate={{
                      x:
                        isDragging && currentDragGallery === 1 ? dragOffset : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: isDragging ? 0 : 400,
                      damping: isDragging ? 0 : 30,
                    }}
                  >
                    <Image
                      src={projeto1Imagens[selectedImg1Index]}
                      alt="Screenshot do Gato, o jogo"
                      className="w-full h-full object-cover"
                      width={800}
                      height={450}
                    />
                  </motion.div>

                  {/* Navigation buttons */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => navigateGallery(1, "prev")}
                      className="bg-black/70 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => navigateGallery(1, "next")}
                      className="bg-black/70 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      →
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {projeto1Imagens.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImg1Index(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          selectedImg1Index === index
                            ? "bg-white scale-125"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div
                  ref={thumbnailsRef1}
                  className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar"
                >
                  {projeto1Imagens.map((imgSrc, index) => (
                    <button
                      key={index}
                      className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImg1Index === index
                          ? "border-blue-500 scale-105"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                      onClick={() => setSelectedImg1Index(index)}
                    >
                      <Image
                        src={imgSrc}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover"
                        width={80}
                        height={48}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Projeto 2 - VApt */}
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4 lg:order-2">
                <div
                  className="aspect-video rounded-2xl overflow-hidden relative group bg-gradient-to-br from-green-500/10 to-blue-500/10"
                  onTouchStart={(e) => handleTouchStart(e, 2)}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={() => handleTouchEnd(2)}
                >
                  <motion.div
                    animate={{
                      x:
                        isDragging && currentDragGallery === 2 ? dragOffset : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: isDragging ? 0 : 400,
                      damping: isDragging ? 0 : 30,
                    }}
                  >
                    <Image
                      src={projeto2Imagens[selectedImg2Index]}
                      alt="Screenshot do VApt"
                      className="w-full h-full object-cover"
                      width={800}
                      height={450}
                    />
                  </motion.div>

                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => navigateGallery(2, "prev")}
                      className="bg-black/70 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => navigateGallery(2, "next")}
                      className="bg-black/70 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      →
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {projeto2Imagens.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImg2Index(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          selectedImg2Index === index
                            ? "bg-white scale-125"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div
                  ref={thumbnailsRef2}
                  className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar"
                >
                  {projeto2Imagens.map((imgSrc, index) => (
                    <button
                      key={index}
                      className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImg2Index === index
                          ? "border-green-500 scale-105"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                      onClick={() => setSelectedImg2Index(index)}
                    >
                      <Image
                        src={imgSrc}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover"
                        width={80}
                        height={48}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6 lg:order-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      Web Development
                    </span>
                    <span className="text-sm text-default-500">2024</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-default-900">
                    VApt
                  </h3>
                  <p className="text-lg text-default-600 leading-relaxed">
                    Plataforma que visa melhorar a acessibilidade em transportes
                    públicos. O sistema mapeia níveis de deficiência e sugere
                    adequações necessárias para melhor utilização do transporte
                    metropolitano.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                    React
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                    Node.js
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700">
                    PostgreSQL
                  </span>
                </div>

                <Button
                  as={Link}
                  href="#"
                  className={buttonStyles({
                    color: "primary",
                    radius: "md",
                    variant: "flat",
                    size: "lg",
                  })}
                >
                  Ver Projeto →
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              as={Link}
              href="/projects"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "bordered",
                size: "lg",
              })}
            >
              Ver Todos os Projetos →
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <ScrollToTop />
    </section>
  );
}
