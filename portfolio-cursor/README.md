# Portfolio

Este é um projeto de portfolio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Estrutura do Projeto

```
portfolio/
├── src/
│   ├── app/                 # Páginas e layouts da aplicação
│   │   └── page.tsx       # Página principal do portfolio
│   ├── components/          # Componentes React reutilizáveis
│   │   └── Projects/        # Componentes relacionados aos projetos
│   │       ├── index.ts     # Exportação do componente principal
│   │       ├── Projects.tsx # Componente principal de projetos
│   │       └── ProjectCard.tsx # Card de projeto individual
│   ├── config/             # Configurações da aplicação
│   │   └── languages.ts    # Configuração das linguagens de programação
│   ├── services/           # Serviços e APIs
│   │   └── github.ts       # Serviço de integração com GitHub
│   ├── types/              # Definições de tipos TypeScript
│   │   └── github.ts       # Tipos relacionados ao GitHub
│   └── utils/              # Utilitários e funções auxiliares
│       └── languageUtils.ts # Utilitários para linguagens
├── public/                 # Arquivos estáticos
├── package.json           # Dependências e scripts
└── README.md             # Documentação do projeto
```

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- Motion One (para animações)
- GitHub API

## Funcionalidades

- Exibição de projetos do GitHub em um carrossel
- Animações suaves de transição
- Design responsivo
- Suporte a múltiplas linguagens de programação
- Integração com a API do GitHub

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3000`

## Configuração

Para configurar o projeto com seu próprio usuário do GitHub:

1. Abra `src/services/github.ts`
2. Substitua a constante `USERNAME` pelo seu nome de usuário do GitHub

## Contribuição

Sinta-se à vontade para contribuir com o projeto através de pull requests.

## Licença

Este projeto está sob a licença MIT.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
