"use client";

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Image } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { useState, useRef, useEffect } from "react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedInIcon } from "@/components/icons";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Refs para os containers de miniaturas
  const thumbnailsRef1 = useRef(null);
  const thumbnailsRef2 = useRef(null);
  const thumbnailsRef3 = useRef(null);

  // Dados das imagens de projetos
  const projeto1Imagens = [
    "https://picsum.photos/seed/projeto1-1/1920/1080",
    "https://picsum.photos/seed/projeto1-2/1920/1080",
    "https://picsum.photos/seed/projeto1-3/1920/1080",
    "https://picsum.photos/seed/projeto1-4/1920/1080",
    "https://picsum.photos/seed/projeto1-5/1920/1080",
    "https://picsum.photos/seed/projeto1-6/1920/1080",
    "https://picsum.photos/seed/projeto1-7/1920/1080",
    "https://picsum.photos/seed/projeto1-8/1920/1080"
  ];

  const projeto2Imagens = [
    "https://picsum.photos/seed/projeto2-1/1920/1080",
    "https://picsum.photos/seed/projeto2-2/1920/1080",
    "https://picsum.photos/seed/projeto2-3/1920/1080",
    "https://picsum.photos/seed/projeto2-4/1920/1080",
    "https://picsum.photos/seed/projeto2-5/1920/1080",
    "https://picsum.photos/seed/projeto2-6/1920/1080",
    "https://picsum.photos/seed/projeto2-7/1920/1080",
    "https://picsum.photos/seed/projeto2-8/1920/1080"
  ];

  const projeto3Imagens = [
    "https://picsum.photos/seed/projeto3-1/1920/1080",
    "https://picsum.photos/seed/projeto3-2/1920/1080",
    "https://picsum.photos/seed/projeto3-3/1920/1080",
    "https://picsum.photos/seed/projeto3-4/1920/1080",
    "https://picsum.photos/seed/projeto3-5/1920/1080",
    "https://picsum.photos/seed/projeto3-6/1920/1080",
    "https://picsum.photos/seed/projeto3-7/1920/1080",
    "https://picsum.photos/seed/projeto3-8/1920/1080"
  ];

  // Estados para imagens selecionadas
  const [selectedImg1Index, setSelectedImg1Index] = useState(0);
  const [selectedImg2Index, setSelectedImg2Index] = useState(0);
  const [selectedImg3Index, setSelectedImg3Index] = useState(0);

  // Funções de navegação das galerias
  const navigateGallery = (galleryIndex, direction) => {
    if (galleryIndex === 1) {
      const nextIndex = direction === 'next' 
        ? (selectedImg1Index + 1) % projeto1Imagens.length
        : (selectedImg1Index - 1 + projeto1Imagens.length) % projeto1Imagens.length;
      setSelectedImg1Index(nextIndex);
    } else if (galleryIndex === 2) {
      const nextIndex = direction === 'next' 
        ? (selectedImg2Index + 1) % projeto2Imagens.length
        : (selectedImg2Index - 1 + projeto2Imagens.length) % projeto2Imagens.length;
      setSelectedImg2Index(nextIndex);
    } else if (galleryIndex === 3) {
      const nextIndex = direction === 'next' 
        ? (selectedImg3Index + 1) % projeto3Imagens.length
        : (selectedImg3Index - 1 + projeto3Imagens.length) % projeto3Imagens.length;
      setSelectedImg3Index(nextIndex);
    }
  };

  // Função para rolar até a miniatura selecionada
  const scrollToThumbnail = (galleryIndex, index) => {
    let thumbnailsRef;
    
    if (galleryIndex === 1) thumbnailsRef = thumbnailsRef1;
    else if (galleryIndex === 2) thumbnailsRef = thumbnailsRef2;
    else if (galleryIndex === 3) thumbnailsRef = thumbnailsRef3;
    
    if (thumbnailsRef?.current) {
      const container = thumbnailsRef.current;
      const thumbnails = container.querySelectorAll('button');
      
      if (thumbnails[index]) {
        // Rolar para a miniatura selecionada
        const thumbnail = thumbnails[index];
        container.scrollLeft = thumbnail.offsetLeft - container.offsetLeft;
      }
    }
  };

  // Efeito para rolar para a miniatura ativa quando a imagem muda
  useEffect(() => {
    scrollToThumbnail(1, selectedImg1Index);
  }, [selectedImg1Index]);

  useEffect(() => {
    scrollToThumbnail(2, selectedImg2Index);
  }, [selectedImg2Index]);

  useEffect(() => {
    scrollToThumbnail(3, selectedImg3Index);
  }, [selectedImg3Index]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-16 md:py-24">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-left md:pr-8">
          <h1 className={title({ class: "mb-4" })}>
            Olá, eu sou{" "}<br></br>
            <span className={title({ color: "blue" })}>João Pedro Zampoli</span>
          </h1>
          <p className={subtitle({ class: "mb-8 max-w-lg" })}>
            Desenvolvedor de Software apaixonado por jogos, tecnologia e mais algumas coisas.
            <br/>Criando soluções e realizando ideias em código com dedicação e criatividade.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
                size: "lg"
              })}
              onPress={onOpen}
            >
              Currículo/Resumé
            </Button>
            
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                <ModalHeader className="flex flex-col gap-1">Selecione a versão do currículo</ModalHeader>
                <ModalBody>
                  <p className="mb-4 text-default-500">
                    Escolha em qual idioma você deseja visualizar ou baixar o currículo:
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button 
                      as={Link}
                      href="/resume/cv-joao-zampoli-pt.pdf" 
                      target="_blank"
                      className={buttonStyles({
                        color: "primary",
                        variant: "flat",
                        radius: "md",
                        size: "lg",
                        fullWidth: true
                      })}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span>Português (Brasil)</span>
                        <span className="text-lg">🇧🇷</span>
                      </div>
                    </Button>
                    <Button 
                      as={Link}
                      href="/resume/cv-joao-zampoli-en.pdf" 
                      target="_blank"
                      className={buttonStyles({
                        color: "secondary",
                        variant: "flat",
                        radius: "md",
                        size: "lg",
                        fullWidth: true
                      })}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span>English (International)</span>
                        <span className="text-lg">🇺🇰</span>
                      </div>
                    </Button>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button 
                    className={buttonStyles({
                      color: "danger",
                      variant: "light",
                      radius: "md"
                    })}
                    onPress={onClose}
                  >
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            
            <Button
              as={Link}
              href="/projects"
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
                size: "lg"
              })}
            >
              Ver projetos
            </Button>
          </div>
          
          <div className="flex items-center gap-6 mt-8">
            <Link isExternal href={siteConfig.links.github} aria-label="GitHub">
              <div className="flex items-center gap-2">
                <GithubIcon size={24} className="text-default-600" />
                <span className="text-sm font-medium text-default-600">GitHub</span>
              </div>
            </Link>
            <Link isExternal href={siteConfig.links.linkedin} aria-label="LinkedIn">
              <div className="flex items-center gap-2">
                <LinkedInIcon size={24} className="text-default-600" />
                <span className="text-sm font-medium text-default-600">LinkedIn</span>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center w-full md:w-auto">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-bl from-sky-400 to-indigo-900 p-1">
            <div className="absolute inset-1 rounded-full overflow-hidden bg-background flex items-center justify-center">
              <Image
                src="https://avatars.githubusercontent.com/u/107592828?s=400&u=97107e6083eac30f35ab3b4db8fc44ed0ca64f82&v=4"
                alt="João Pedro Zampoli"
                className="w-full h-full object-cover filter brightness-90"
                width={320}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 p-6 rounded-xl bg-default-50 border border-default-200">
        <div className="flex flex-col items-center md:items-start p-4">
          <p className={title({ size: "sm", color: "violet", class: "mb-1" })}>3+</p>
          <p className="text-default-500 text-sm">Anos de experiência</p>
        </div>
        <div className="flex flex-col items-center md:items-start p-4">
          <p className={title({ size: "sm", color: "violet", class: "mb-1" })}>20+</p>
          <p className="text-default-500 text-sm">Projetos concluídos</p>
        </div>
        <div className="flex flex-col items-center md:items-start p-4">
          <p className={title({ size: "sm", color: "violet", class: "mb-1" })}>10+</p>
          <p className="text-default-500 text-sm">Tecnologias</p>
        </div>
        <div className="flex flex-col items-center md:items-start p-4">
          <p className={title({ size: "sm", color: "violet", class: "mb-1" })}>100%</p>
          <p className="text-default-500 text-sm">Comprometimento</p>
        </div>
      </div>

      <div className="w-full max-w-5xl mt-24 mb-12">
        <h2 className={title({ size: "md", class: "mb-8 text-center block" })}>Alguns Projetos</h2>
        
        <div className="space-y-16">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
            <div className="flex flex-col md:flex-row p-6 gap-8">
              <div className="flex-1 space-y-3">
                <div className="aspect-video rounded-lg overflow-hidden relative group">
                  <Image
                    src={projeto1Imagens[selectedImg1Index]}
                    alt="Screenshot do Projeto 1"
                    className="w-full h-full object-cover transition-transform duration-500"
                    width={800}
                  />
                  
                  {/* Botões de navegação */}
                  <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button 
                      onClick={() => navigateGallery(1, 'prev')}
                      className="bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                      aria-label="Imagem anterior"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    
                    <button 
                      onClick={() => navigateGallery(1, 'next')}
                      className="bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                      aria-label="Próxima imagem"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Indicador de paginação */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                    {projeto1Imagens.map((_, index) => (
                      <button 
                        key={index} 
                        onClick={() => setSelectedImg1Index(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${selectedImg1Index === index ? 'bg-white' : 'bg-white/40'}`}
                        aria-label={`Ir para imagem ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                <div 
                  ref={thumbnailsRef1}
                  className="flex overflow-x-auto space-x-2 py-1 hide-scrollbar scroll-smooth"
                >
                  {projeto1Imagens.map((imgSrc, index) => (
                    <button 
                      key={index}
                      className={`flex-shrink-0 h-14 rounded-medium overflow-hidden border-2 transition-all ${selectedImg1Index === index ? 'border-primary' : 'border-transparent opacity-70'}`}
                      onClick={() => setSelectedImg1Index(index)}
                    >
                      <Image 
                        src={imgSrc}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
                        height={56}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={title({ size: "sm", class: "mb-2" })}>Gato, o jogo</h3>
                  <p className={subtitle({ class: "mb-4 text-sm" })}>Mini-game feito em Unity</p>
                  <p className="text-default-600 mb-6 text-sm">
                  Este mini-game chamado intencionalmente de "Gato, o jogo", criado em um período curto de um mês, inspira-se em jogos clássicos de 2D plataforma (como Mario, Rayman, entre outros).
                  <br/>O jogador assume o papel de um gato à procura de seu sachê.
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-4 py-2 text-xs font-medium rounded-full bg-gray-600/20 text-gray-500">Unity</span>
                    <span className="px-4 py-2 text-xs font-medium rounded-full bg-purple-600/20 text-purple-500">C#</span>
                    <span className="px-4 py-2 text-xs font-medium rounded-full bg-yellow-600/20 text-yellow-500">Game Dev</span>
                  </div>
                  <Button 
                    as={Link}
                    href="#" 
                    className={buttonStyles({
                      color: "primary",
                      radius: "md",
                      variant: "solid",
                      size: "lg",
                      fullWidth: true
                    })}
                  >
                    Ver Projeto
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-green-500/10 to-blue-600/10 border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
            <div className="flex flex-col md:flex-row p-6 gap-8">
              <div className="flex-1 space-y-3">
                <div className="aspect-video rounded-lg overflow-hidden relative group">
                  <Image
                    src={projeto2Imagens[selectedImg2Index]}
                    alt="Screenshot do Projeto 2"
                    className="w-full h-full object-cover transition-transform duration-500"
                    width={800}
                  />
                  
                  {/* Botões de navegação */}
                  <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button 
                      onClick={() => navigateGallery(2, 'prev')}
                      className="bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                      aria-label="Imagem anterior"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    
                    <button 
                      onClick={() => navigateGallery(2, 'next')}
                      className="bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                      aria-label="Próxima imagem"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Indicador de paginação */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                    {projeto2Imagens.map((_, index) => (
                      <button 
                        key={index} 
                        onClick={() => setSelectedImg2Index(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${selectedImg2Index === index ? 'bg-white' : 'bg-white/40'}`}
                        aria-label={`Ir para imagem ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                <div 
                  ref={thumbnailsRef2}
                  className="flex overflow-x-auto space-x-2 py-1 hide-scrollbar scroll-smooth"
                >
                  {projeto2Imagens.map((imgSrc, index) => (
                    <button 
                      key={index}
                      className={`flex-shrink-0 h-14 rounded-medium overflow-hidden border-2 transition-all ${selectedImg2Index === index ? 'border-primary' : 'border-transparent opacity-70'}`}
                      onClick={() => setSelectedImg2Index(index)}
                    >
                      <Image 
                        src={imgSrc}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
                        height={56}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={title({ size: "sm", class: "mb-2" })}>VApt</h3>
                  <p className={subtitle({ class: "mb-4 text-sm" })}>Plataforma que visa a melhoria da acessibilidade em ônibus públicos</p>
                  <p className="text-default-600 mb-6 text-sm">
                  O software faz o mapeamento entre as classificações dos níveis de deficiência e as adequações necessárias para que os passageiros utilizem o sistema de transporte público da melhor forma possível.
                  <br/>Os dados e informações a serem utilizados neste projeto são da EMTU (atualmente ARTESP), parceira deste projeto de extensão.
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-4 py-2 text-xs font-medium rounded-full bg-emerald-600/20 text-emerald-500">Vue</span>
                    <span className="px-4 py-2 text-xs font-medium rounded-full bg-blue-600/20 text-blue-500">TypeScript</span>
                    <span className="px-4 py-2 text-xs font-medium rounded-full bg-yellow-600/20 text-yellow-500">Web Development</span>
                  </div>
                  <Button 
                    as={Link}
                    href="#" 
                    className={buttonStyles({
                      color: "primary",
                      radius: "md",
                      variant: "solid",
                      size: "lg",
                      fullWidth: true
                    })}
                  >
                    Ver Projeto
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-600/10 border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
            <div className="flex flex-col md:flex-row p-6 gap-8">
              <div className="flex-1 space-y-3">
                <div className="aspect-video rounded-lg overflow-hidden relative group">
                  <Image
                    src={projeto3Imagens[selectedImg3Index]}
                    alt="Screenshot do Projeto 3"
                    className="w-full h-full object-cover transition-transform duration-500"
                    width={800}
                  />
                  
                  {/* Botões de navegação */}
                  <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button 
                      onClick={() => navigateGallery(3, 'prev')}
                      className="bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                      aria-label="Imagem anterior"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    
                    <button 
                      onClick={() => navigateGallery(3, 'next')}
                      className="bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                      aria-label="Próxima imagem"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Indicador de paginação */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                    {projeto3Imagens.map((_, index) => (
                      <button 
                        key={index} 
                        onClick={() => setSelectedImg3Index(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${selectedImg3Index === index ? 'bg-white' : 'bg-white/40'}`}
                        aria-label={`Ir para imagem ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                <div 
                  ref={thumbnailsRef3}
                  className="flex overflow-x-auto space-x-2 py-1 hide-scrollbar scroll-smooth"
                >
                  {projeto3Imagens.map((imgSrc, index) => (
                    <button 
                      key={index}
                      className={`flex-shrink-0 h-14 rounded-medium overflow-hidden border-2 transition-all ${selectedImg3Index === index ? 'border-primary' : 'border-transparent opacity-70'}`}
                      onClick={() => setSelectedImg3Index(index)}
                    >
                      <Image 
                        src={imgSrc}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
                        height={56}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={title({ size: "sm", class: "mb-2" })}>Kerana: Firehose Origins</h3>
                  <p className={subtitle({ class: "mb-4 text-sm" })}>Jogo de RPG 2D feito na Unity</p>
                  <p className="text-default-600 mb-6 text-sm">
                    Protótipo de Jogo criado para a disciplina eletiva de Desenvolvimento de Jogos do ICT - Unifesp.
                    <br/> Em Kerana: Firehose Origins, você assume o papel de Kerana, uma jovem onça que, em busca de vingança, embarca em uma jornada épica para derrotar o vilão que destruiu sua vila e matou sua família.
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-4 py-2 text-xs font-medium rounded-full bg-gray-600/20 text-gray-500">Unity</span>
                    <span className="px-4 py-2 text-xs font-medium rounded-full bg-purple-600/20 text-purple-500">C#</span>
                    <span className="px-4 py-2 text-xs font-medium rounded-full bg-yellow-600/20 text-yellow-500">Game Dev</span>
                  </div>
                  <Button 
                    as={Link}
                    href="https://www.codelab-unifesp.org/project/" 
                    target="_blank"
                    className={buttonStyles({
                      color: "primary",
                      radius: "md",
                      variant: "solid",
                      size: "lg",
                      fullWidth: true
                    })}
                  >
                    Ver Projeto
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            as={Link}
            href="/projects"
            className={buttonStyles({
              color: "secondary", 
              radius: "full",
              variant: "bordered",
              size: "md"
            })}
          >
            Ver mais projetos
          </Button>
        </div>
      </div>
      
      <div className="w-full max-w-4xl mt-24 mb-12">
        <h2 className={title({ size: "md", class: "mb-8 text-center block" })}>Minha Trajetória</h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-blue-400 before:to-indigo-600">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="text-white">👨‍🏫</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default-50 p-4 rounded-large shadow-sm border border-default-200">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="font-bold text-default-900">Coordenador de Planejamento</h3>
                <time className="text-xs font-semibold text-blue-600 whitespace-nowrap">2024 - 2024</time>
              </div>
              <div className="text-default-500 text-sm">
                <p>Coordenador de Planejamento e Aplicador de Aulas de Arduino dadas para a Escola Estadual (E.E.) Elmano Ferreira Veloso em São José dos Campos</p>
                <p className="mt-2 text-xs text-cyan-500"><a href="https://www.codelab-unifesp.org/" target="_blank">CodeLab Teen Arduino - Unifesp</a></p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="text-white">👨‍💻</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default-50 p-4 rounded-large shadow-sm border border-default-200">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="font-bold text-default-900">Coordenador de Projeto (Bolsista PIBEX)</h3>
                <time className="text-xs font-semibold text-blue-600 whitespace-nowrap">2024 - Atual</time>
              </div>
              <div className="text-default-500 text-sm">
                <p>Coordenador de Projeto de Extensão para criação de software que visa a melhoria e adequação do transporte público metropolitano para usuários PcD (Pessoa com Deficiência)</p>
                <p className="mt-2 text-xs text-yellow-400"><a href="https://www.codelab-unifesp.org/" target="_blank">CodeLab Dev - Unifesp</a></p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="text-white">🎓</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default-50 p-4 rounded-large shadow-sm border border-default-200">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="font-bold text-default-900">Estudante no ICT - Unifesp</h3>
                <time className="text-xs font-semibold text-blue-600 whitespace-nowrap">2023 - Atual</time>
              </div>
              <div className="text-default-500 text-sm">
                <p>Cursando Ciência e Tecnologia com ênfase em Ciência da Computação no Instituto de Ciência e Tecnologia da Unifesp em São José dos Campos</p>
                <p className="mt-2 text-xs text-emerald-500"><a href="https://www.unifesp.br" target="_blank">Unifesp - Universidade Federal de São Paulo</a></p>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="text-white">👨‍💻</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default-50 p-4 rounded-large shadow-sm border border-default-200">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="font-bold text-default-900">Estagiário de Desenvolvimento Web</h3>
                <time className="text-xs font-semibold text-blue-600 whitespace-nowrap">2022 - 2022</time>
              </div>
              <div className="text-default-500 text-sm">
                <p>Criação e modificações de interfaces de usuário, fluxos de sistema, implementações de APIs</p>
                <p className="mt-2 text-xs text-blue-500"><a href="https://www.inprint01.com.br/" target="_blank">Inprint Prime</a></p>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="text-white">🎓</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default-50 p-4 rounded-large shadow-sm border border-default-200">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="font-bold text-default-900">Ensino Técnico em Desenvolvimento de Sistemas</h3>
                <time className="text-xs font-semibold text-blue-600 whitespace-nowrap">2020 - 2022</time>
              </div>
              <div className="text-default-500 text-sm">
                <p>Ensino Técnico integrado ao Ensino Médio.  Análise e projeto de sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação</p>
                <p className="mt-2 text-xs text-red-500"><a href="https://www.cps.sp.gov.br/etecs/etec-de-poa/" target="_blank">Etec Poá - Escola Técnica Estadual de Poá</a></p>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="text-white">💡</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-default-50 p-4 rounded-large shadow-sm border border-default-200">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="font-bold text-default-900">Início na Programação</h3>
                <time className="text-xs font-semibold text-blue-600 whitespace-nowrap">2015/2016</time>
              </div>
              <div className="text-default-500 text-sm">
                <p>Primeiras tentativas de projetos focados em Desenvolvimento de Games</p>
                <p className="mt-2 text-xs text-default-400">Autodidatismo e plataformas online</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            as={Link}
            href="/about"
            className={buttonStyles({
              color: "primary", 
              radius: "full",
              variant: "flat",
              size: "md"
            })}
          >
            Ver trajetória completa
          </Button>
        </div>
      </div>
    </section>
  );
}
