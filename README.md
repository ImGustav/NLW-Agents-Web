# NLW Agents - O Front-end

Este repositório contém o código do front-end que desenvolvi durante o **NLW Agents** da **Rocketseat**. O objetivo foi criar a interface web para consumir a API de agentes inteligentes que construí na trilha de back-end.

## 🚀 Tecnologias que Aprendi e Utilizei

Nesta etapa do projeto, tive contato com o que há de mais moderno no ecossistema React. A stack que utilizei foi:

- **React 19.1** - Biblioteca para interfaces de usuário
- **TypeScript 5.8** - Superset JavaScript com tipagem estática
- **Vite 7.0** - Build tool e servidor de desenvolvimento
- **TailwindCSS 4.1** - Framework CSS utility-first
- **React Router Dom 7.6** - Biblioteca de roteamento
- **TanStack React Query 5.8** - Gerenciamento de estado servidor e cache
- **Radix UI** - Componentes primitivos acessíveis
- **Shadcn/ui** - Sistema de componentes
- **Lucide React** - Biblioteca de ícones

## 📂 Padrões de Projeto que Apliquei

Seguindo as aulas, procurei aplicar diversos padrões de projeto para deixar o código mais organizado e escalável:

- **Component-based Architecture** - Arquitetura baseada em componentes React
- **File-based Routing** - Roteamento baseado em arquivos com React Router
- **Server State Management** - Gerenciamento de estado servidor com React Query
- **Variant-based Components** - Componentes com variantes usando CVA
- **Composition Pattern** - Padrão de composição com Radix Slot
- **Path Aliasing** - Alias de caminhos (`@/` aponta para `src/`)

## ⚙️ Minha Configuração do Projeto

Estes são os passos para quem quiser rodar o meu projeto.

### Pré-requisitos

-   Node.js (versão 18 ou superior)
-   npm ou yarn

### Instalação

1.  Primeiro, clonei o repositório:
2.  Depois, instalei as dependências:
    ```bash
    npm install
    ```
3.  Para rodar o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  A aplicação ficou disponível em `http://localhost:5173`.

### Scripts Disponíveis

Deixei alguns scripts prontos no `package.json`:

-   `npm run dev` - Roda o servidor de desenvolvimento com Vite.
-   `npm run build` - Gera os arquivos finais para colocar a aplicação em produção.
-   `npm run preview` - Permite visualizar a build de produção localmente.

### Backend

**Importante:** Este front-end foi feito para consumir a [API do back-end](<link-para-seu-repo-backend>). É essencial que o servidor do back-end esteja rodando na porta `3333` para que a interface funcione corretamente.

## 🛠️ Estrutura do Projeto
```
src/
├── components/ui/    # Componentes de interface
├── pages/           # Páginas da aplicação
├── lib/             # Utilitários e configurações
└── app.tsx          # Componente raiz
``` 