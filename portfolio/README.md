# Portfólio — João Pedro Zampoli

Site pessoal bilíngue (pt-BR / en), com projetos, trajetória e blog.

## Stack

- [Next.js 15](https://nextjs.org/docs) — App Router, React 19, rotas estáticas
- [HeroUI v2](https://heroui.com/) + [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) para as animações
- [next-themes](https://github.com/pacocoursey/next-themes) para tema claro/escuro
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) + gray-matter para o blog

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm run typecheck  # tsc --noEmit
npm run lint       # eslint --fix
```

## Estrutura

```
app/
  [locale]/            todas as páginas, prefixadas pelo idioma
    layout.tsx         layout raiz (define <html lang>), metadata e OpenGraph
    page.tsx           home
    about/  projects/  blog/  contact/
  robots.ts  sitemap.ts
components/            componentes de UI, todos reutilizáveis entre as páginas
config/                site.ts (links, e-mail, navegação) e fonts.ts
content/blog/{pt,en}/  posts em MDX, um arquivo por post e por idioma
data/                  conteúdo estruturado: projects, experience, skills
i18n/                  locales, dicionários de interface e helper de tipos
lib/                   leitura dos posts (blog.ts) e rotas por idioma (navigation.ts)
middleware.ts          detecta o idioma e redireciona / → /pt ou /en
```

### Idiomas

Os textos de interface ficam em `i18n/dictionaries/{pt,en}.ts`. O dicionário `pt`
é a fonte da verdade do formato: o TypeScript exige que `en` tenha exatamente as
mesmas chaves.

Já o conteúdo (projetos, trajetória, habilidades) mora em `data/` com os dois
idiomas lado a lado:

```ts
tagline: { pt: "Acessibilidade no transporte público", en: "Accessibility for public transport" }
```

A escolha do usuário é gravada no cookie `NEXT_LOCALE` e respeitada pelo
middleware nas visitas seguintes.

### Adicionar um projeto

Acrescente uma entrada em `data/projects.ts`. Projetos com `images: []` ganham
automaticamente uma capa gerada a partir das iniciais e do gradiente em `accent`,
então não é preciso ter capturas de tela para publicar. Marque `featured: true`
para o projeto aparecer na home.

> As classes de gradiente em `accent` são lidas pelo Tailwind a partir do glob
> `./data/**/*.ts` em `tailwind.config.js`. Ao usar uma cor nova, confirme que ela
> sobrevive ao build de produção.

### Adicionar um post

Crie `content/blog/pt/meu-post.mdx` (e/ou `content/blog/en/...`) com frontmatter:

```mdx
---
title: "Título do post"
summary: "Uma ou duas frases que aparecem na listagem."
date: "2026-03-10"
tags: ["tag-um", "tag-dois"]
---

Conteúdo em Markdown/MDX.
```

O tempo de leitura é calculado automaticamente. Use `draft: true` para manter o
post visível em desenvolvimento e escondido em produção. Posts só existem no
idioma em que o arquivo existe — não há fallback entre idiomas.

## Deploy

O projeto é estático exceto pelo middleware de idioma, e roda em qualquer
plataforma com suporte a Next.js. Antes de publicar, ajuste `siteConfig.url` em
`config/site.ts` para o domínio real — ele alimenta o sitemap, o `robots.txt` e as
URLs de OpenGraph.
