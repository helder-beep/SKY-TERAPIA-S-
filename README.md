# Template de Site de Serviços

Template genérico e reutilizável para sites de pequenas empresas de serviços (jardinagem, construção, etc.), com o esqueleto, layout e tipografia já prontos e todo o conteúdo real substituído por placeholders.

## 🚀 Tecnologias

- **Frontend:** React + Vite + Tailwind CSS + wouter (routing)
- **Backend:** Node.js + Express
- **Base de Dados:** Drizzle ORM (esqueleto opcional, não usado por omissão)
- **UI:** Shadcn/UI + Framer Motion + lucide-react

## 📁 Estrutura do Projeto

- `client/`: Código frontend (React)
  - `client/src/pages/`: Páginas/rotas (Home, Empresa, Contacto, Orçamento, Portfólio, Serviços, Áreas, Legal)
  - `client/src/components/home/`: Secções reutilizáveis da página inicial
  - `client/src/components/layout/`: Navbar, Footer, botão de WhatsApp
  - `client/src/components/ui/`: Componentes shadcn + `image-placeholder.tsx` (placeholder de imagem reutilizável)
- `server/`: Código backend (Express) — serve o build estático e permite adicionar redirects em `server/routes.ts`
- `shared/`: Esquemas e utilitários partilhados
- `dist/`: Build de produção (gerado após build)

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Iniciar em modo desenvolvimento
npm run dev
```

## ✏️ Como usar este template num novo projeto

1. Clonar/copiar este repositório para o novo projeto.
2. Substituir todos os textos entre `[colchetes]` pelo conteúdo real do cliente (títulos, descrições, testemunhos, FAQs, contactos).
3. Substituir os componentes `<ImagePlaceholder />` por `<img>` reais à medida que as imagens finais forem entregues.
4. Atualizar as cores da marca em `client/src/index.css` (tokens `--primary`, `--muted`, etc.) e o favicon em `client/public/`.
5. Adicionar os redirects específicos do projeto (se necessário) em `server/routes.ts`.
6. **Só no final do projeto**, quando o domínio e o conteúdo estiverem definitivos: adicionar título/meta description por página, `sitemap.xml`, `robots.txt` com sitemap, tags Open Graph/Twitter e URLs canónicas — este template propositadamente não inclui nada disso ainda.

## 📦 Deploy na Vercel

O projeto está configurado para deploy automático na Vercel.

1. Conecte o repositório à sua conta Vercel.
2. As configurações de build e routing já estão no ficheiro `vercel.json`.
3. Defina as variáveis de ambiente necessárias (se existirem).

## ✨ Funcionalidades

- Design responsivo e moderno
- Botão de WhatsApp flutuante
- Página de portfólio com galeria/lightbox
- Páginas dinâmicas de serviços e áreas de atuação
- Páginas legais (Privacidade/Termos) com estrutura de cláusulas genérica
