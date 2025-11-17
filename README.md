# 🚀 Estatic Portfolio

<div align="center">
  
  ![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  
  **Portfólio pessoal moderno e responsivo construído com Next.js 15**
  
  [Ver Demo](#) • [Reportar Bug](https://github.com/1Estatic/estatic-dev/issues) • [Solicitar Feature](https://github.com/1Estatic/estatic-dev/issues)
  
</div>

---

## 📋 Sobre o Projeto

Este é meu portfólio pessoal, desenvolvido com as mais modernas tecnologias web para mostrar meus projetos e habilidades como desenvolvedor. O site apresenta um design limpo e elegante, com animações suaves, sistema de temas e uma experiência de usuário otimizada.

### ✨ Características

- 🎨 **Design Moderno**: Interface elegante com efeitos de nebulosa e estrelas animadas
- 📱 **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Next.js 15 com React 19 para máxima performance
- 🌙 **Sistema de Temas**: Suporte para tema claro, escuro e automático (baseado no sistema)
- 🎯 **Navegação Suave**: Scroll suave entre seções com navbar flutuante
- 🔄 **Animações Interativas**: Transições e efeitos visuais modernos
- 📧 **Seção de Contato**: Formulário de contato integrado e links para redes sociais
- 🎮 **Portfolio Categorizado**: Projetos organizados em Animations, Projects e College Work
- 🖼️ **Dialogs Interativos**: Visualização expandida de projetos por categoria
- 📊 **Estatísticas Dinâmicas**: Métricas de visitas, jogadores ativos e experiência

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15.5.4**: Framework React com App Router e Server Components
- **React 19.1.0**: Biblioteca para interfaces de usuário com otimizações modernas
- **TypeScript 5.9.3**: Tipagem estática para maior confiabilidade
- **Tailwind CSS 4.1.17**: Framework CSS utilitário moderno com PostCSS

### UI Components & Libraries
- **Radix UI**: Componentes acessíveis e customizáveis
  - Dialog, Dropdown Menu, Navigation Menu, Accordion
  - Popover, Select, Tabs, Toast, Tooltip
  - Checkbox, Radio Group, Slider, Switch
  - Avatar, Progress, Separator, Scroll Area
- **Lucide React**: Ícones modernos e otimizados
- **React Icons**: Ícones de marcas (Discord, GitHub, Gmail)
- **Sonner**: Sistema de notificações toast elegante
- **Vaul**: Drawer/Sheet component para mobile
- **Embla Carousel**: Carousel performático e customizável

### Formulários & Validação
- **React Hook Form 7.66.0**: Gerenciamento de formulários performático
- **Zod 3.25.76**: Schema validation TypeScript-first
- **@hookform/resolvers 3.10.0**: Integração Zod + React Hook Form

### Data & Utilities
- **Date-fns 4.1.0**: Manipulação moderna de datas
- **Class Variance Authority 0.7.1**: Variantes de componentes
- **clsx 2.1.1 & tailwind-merge 2.6.0**: Utilitários para classes CSS
- **cmdk 1.0.4**: Command palette component

### Analytics & Monitoring
- **@vercel/analytics 1.5.0**: Analytics integrado da Vercel para métricas de performance

### Design & Estilização
- **next-themes 0.4.6**: Gerenciamento de temas (claro/escuro/sistema)
- **Geist Font 1.5.1**: Família de fontes moderna da Vercel
- **tailwindcss-animate 1.0.7**: Animações Tailwind pré-configuradas
- **Recharts 2.15.4**: Biblioteca de gráficos para visualização de dados

### Package Manager
- **pnpm 10.22.0**: Gerenciador de pacotes rápido e eficiente

### Recursos e Funcionalidades
- **App Router**: Roteamento moderno do Next.js 15
- **Server & Client Components**: Otimização de performance com renderização híbrida
- **Responsive Design**: Design adaptativo com Tailwind CSS
- **Theme Switching**: Alternância entre temas com persistência
- **Smooth Scrolling**: Navegação fluida entre seções
- **Form Validation**: Validação robusta com Zod
- **Accessibility**: Componentes Radix UI com foco em acessibilidade

## 🎨 Sistema de Temas

O portfólio suporta três modos de tema:
- **Claro**: Tema light otimizado para ambientes claros
- **Escuro**: Tema dark para reduzir fadiga visual
- **Sistema**: Sincroniza automaticamente com as preferências do sistema operacional

A troca de tema é persistida no localStorage e sincroniza com mudanças no tema do sistema.

## 📂 Estrutura do Projeto

```
estatic-dev/
├── app/
│   ├── layout.tsx          # Layout raiz com providers
│   └── page.tsx            # Página principal do portfólio
├── components/
│   ├── navigation.tsx      # Navbar com theme switcher
│   ├── footer.tsx          # Footer com links e informações
│   ├── theme-provider.tsx  # Provider para gerenciamento de temas
│   └── ui/                 # Componentes UI reutilizáveis (Radix UI)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── form.tsx
│       └── ... (50+ componentes)
├── hooks/
│   ├── use-mobile.ts       # Hook para detecção de mobile
│   └── use-toast.ts        # Hook para sistema de toast
├── lib/
│   └── utils.ts            # Utilitários e helpers
├── public/                 # Assets estáticos
├── styles/
│   └── globals.css         # Estilos globais e variáveis CSS
├── components.json         # Configuração shadcn/ui
├── next.config.mjs         # Configuração Next.js (com allowedDevOrigins)
├── tailwind.config.ts      # Configuração Tailwind CSS
├── tsconfig.json           # Configuração TypeScript
├── .gitignore              # Arquivos ignorados pelo Git
├── pnpm-lock.yaml          # Lock file do pnpm
└── package.json            # Dependências e scripts
```

## 🚀 Como Usar

### Pré-requisitos
- **Node.js** 18.x ou superior
- **pnpm 10.22.0** (recomendado) ou npm/yarn

### Instalação do pnpm (se necessário)
```bash
npm install -g pnpm
```

### Instalação do Projeto

1. Clone o repositório:
```bash
git clone https://github.com/1Estatic/estatic-dev.git
```

2. Navegue até o diretório:
```bash
cd estatic-dev
```

3. Instale as dependências:
```bash
pnpm install
```

4. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

5. Acesse no navegador:
```
http://localhost:3000
```

### Acesso via Rede Local
O projeto está configurado para aceitar conexões de dispositivos na mesma rede local. Para acessar de outros dispositivos:

1. Encontre o IP da sua máquina na rede local
2. Acesse `http://[SEU-IP]:3000` do outro dispositivo
3. Se necessário, adicione o IP em `allowedDevOrigins` no `next.config.mjs`

### Scripts Disponíveis

```bash
pnpm dev          # Inicia servidor de desenvolvimento
pnpm build        # Cria build de produção
pnpm start        # Inicia servidor de produção
pnpm lint         # Executa linter ESLint
```

## 📱 Seções do Portfólio

### 🏠 Home
- Hero section com apresentação e estatísticas
- Métricas dinâmicas: 5.7B visitas totais, 22.8K jogadores ativos, 4+ anos de experiência, 8 jogos
- Call-to-action buttons com animações
- Design com efeitos de nebulosa e estrelas animadas

### 👤 Sobre
- Informações pessoais e biografia
- Cards de conquistas: Game Dev, Self-Taught, Soft-Skilled
- Background blur e glassmorphism effects

### 💡 Skills (Technical Mastery)
- Grid de habilidades técnicas
- Cards detalhados para:
  - Lua Scripting (Roblox)
  - Game Design
  - Performance Optimization
  - Team Leadership
- Descrições expandidas com ícones Lucide

### 🎮 Portfolio
- **Categorias de Projetos**:
  - **Animations**: Animações 3D (Werewolf, Wolf, Daggers R6)
  - **Projects**: Projetos pessoais e freelance (Jogos, Portfolio)
  - **College Work**: Trabalhos acadêmicos (OOP Python, Web Dev, Certificados)
- Featured Highlights com preview de projetos
- Dialog modal para visualização expandida de projetos
- Sistema de cards interativos com hover effects

### 📬 Contato
- **Múltiplos canais de contato**:
  - Email: CorporationEstatic@gmail.com
  - Discord: @estatic.
  - GitHub: @1Estatic
- Formulário de contato funcional com validação
- Cards informativos com ícones React Icons
- Integração com redes sociais

## 🎯 Funcionalidades Principais

### Interface & Interação
- **Theme Switcher**: Alternância entre light/dark/system com ícones dinâmicos
- **Smooth Scroll**: Navegação suave entre seções com comportamento nativo
- **Responsive Navigation**: Menu adaptativo para diferentes tamanhos de tela
- **Floating Navbar**: Navbar que aparece/desaparece no scroll
- **Dialog Modals**: Visualização expandida de projetos por categoria
- **Interactive Cards**: Hover effects e transições suaves
- **Toast Notifications**: Sistema de notificações com Sonner

### Animações & Efeitos
- **Nebula Background**: Efeito de nebulosa animada no fundo
- **Stars Layer**: Camada de estrelas decorativas
- **Scroll Animations**: Elementos que aparecem durante o scroll
- **Gradient Effects**: Gradientes animados e dinâmicos
- **Glassmorphism**: Efeitos de vidro fosco (backdrop-blur)
- **Hover Transitions**: Transformações suaves em cards e botões

### Formulários
- **React Hook Form**: Gerenciamento otimizado de formulários
- **Zod Validation**: Validação de schema TypeScript-first
- **Input Validation**: Feedback visual em tempo real
- **Form Submission**: Preparado para integração com backend

### Performance
- **Next.js 15 App Router**: Roteamento otimizado e code splitting automático
- **Server Components**: Renderização no servidor para melhor performance
- **Image Optimization**: Otimização automática de imagens com next/image
- **Vercel Analytics**: Métricas de performance e Web Vitals em tempo real
- **Tailwind CSS Purge**: CSS otimizado com remoção automática de código não utilizado
- **pnpm**: Gerenciamento eficiente de dependências com cache global

## 🌐 Compatibilidade

| Navegador | Versão Mínima | Status |
|-----------|---------------|---------|
| Chrome | 100+ | ✅ Totalmente Suportado |
| Firefox | 100+ | ✅ Totalmente Suportado |
| Safari | 15.4+ | ✅ Totalmente Suportado |
| Edge | 100+ | ✅ Totalmente Suportado |
| Opera | 86+ | ✅ Totalmente Suportado |

**Requisitos de Funcionalidades Modernas:**
- CSS Container Queries
- CSS backdrop-filter
- ES2022+ JavaScript
- CSS Grid & Flexbox
- CSS Custom Properties
- React 19 features

## 📝 Personalização

Para personalizar o portfólio:

### Conteúdo
1. **Informações Pessoais**: Edite `app/page.tsx` para atualizar textos e descrições
2. **Projetos**: Modifique o array `projectCategories` em `app/page.tsx`
3. **Estatísticas**: Atualize os valores em `app/page.tsx` na seção Hero
4. **Links de Contato**: Modifique os contatos em `app/page.tsx` e `components/footer.tsx`

### Estilos
1. **Tema Global**: Configure variáveis CSS em `styles/globals.css`
2. **Tailwind Config**: Personalize cores e breakpoints em `tailwind.config.ts`
3. **Componentes UI**: Customize componentes em `components/ui/`

### Funcionalidades
1. **Adicionar Seções**: Crie novos componentes e importe em `app/page.tsx`
2. **Novos Componentes UI**: Use shadcn/ui CLI ou adicione manualmente
3. **Analytics**: Configure `@vercel/analytics` para seu domínio

### Adicionar Componentes shadcn/ui
```bash
# Exemplo de como adicionar um novo componente
pnpm dlx shadcn@latest add [component-name]
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 🚀 Deploy

### Vercel (Recomendado)
O projeto está otimizado para deploy na Vercel:

```bash
# Instale a CLI da Vercel
pnpm add -g vercel

# Deploy
vercel
```

### Outras Plataformas
- **Netlify**: Compatível com builds Next.js
- **Railway**: Suporte para SSR e APIs
- **AWS Amplify**: Deploy automático via Git
- **Cloudflare Pages**: Suporte para Next.js com Workers

### Build Local
```bash
# Criar build de produção
pnpm build

# Testar build localmente
pnpm start
```

## ⚙️ Configurações Importantes

### Next.js Config (`next.config.mjs`)
```javascript
{
  typescript: {
    ignoreBuildErrors: true  // Ignora erros de TypeScript no build
  },
  images: {
    unoptimized: true  // Imagens sem otimização (para exports estáticos)
  },
  allowedDevOrigins: [
    // IPs permitidos para acesso via rede local em desenvolvimento
    'http://26.204.26.123:3000',
    '26.204.26.123'
  ]
}
```

### .gitignore
O projeto inclui um `.gitignore` completo que ignora:
- 📁 `/.next/` - Build e cache do Next.js
- 📁 `node_modules/` - Dependências
- 🔐 `.env*` - Variáveis de ambiente
- 🗃️ Logs e arquivos temporários
- 💻 Configurações de IDE

## 📦 Componentes UI Incluídos

O projeto inclui mais de 50 componentes UI customizados baseados em Radix UI:

- ✅ Accordion, Alert, Alert Dialog
- ✅ Avatar, Badge, Breadcrumb
- ✅ Button, Button Group, Calendar
- ✅ Card, Carousel, Chart
- ✅ Checkbox, Collapsible, Command
- ✅ Context Menu, Dialog, Drawer
- ✅ Dropdown Menu, Empty State, Field
- ✅ Form, Hover Card, Input
- ✅ Input Group, Input OTP, KBD
- ✅ Label, Menubar, Navigation Menu
- ✅ Pagination, Popover, Progress
- ✅ Radio Group, Resizable, Scroll Area
- ✅ Select, Separator, Sheet
- ✅ Sidebar, Skeleton, Slider
- ✅ Sonner (Toast), Spinner, Switch
- ✅ Table, Tabs, Textarea
- ✅ Toast, Toggle, Toggle Group
- ✅ Tooltip

Todos os componentes são totalmente customizáveis via Tailwind CSS e Class Variance Authority.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

**Estatic**

- GitHub: [@1Estatic](https://github.com/1Estatic)
- Email: CorporationEstatic@gmail.com
- Discord: @estatic.
- Portfolio: [estatic-dev](https://github.com/1Estatic/estatic-dev)

## 🙏 Agradecimentos

- Inspirado no portfólio do [Stackyz](https://www.stackyz.dev)
- [shadcn/ui](https://ui.shadcn.com/) pela biblioteca de componentes
- [Radix UI](https://www.radix-ui.com/) pelos primitivos acessíveis
- [Lucide Icons](https://lucide.dev/) pelos ícones modernos
- [Vercel](https://vercel.com/) pelo hosting e analytics
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS
- Comunidade Next.js e React

## 📊 Estatísticas do Projeto

- **5.7B+** Total de visitas nos projetos
- **22.8K+** Jogadores ativos
- **4+** Anos de experiência
- **8** Jogos desenvolvidos
- **50+** Componentes UI reutilizáveis
- **3** Categorias de projetos
- **React 19** Versão mais recente do React
- **pnpm 10.22.0** Gerenciador de pacotes moderno

## 🔧 Tecnologias e Versões

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| Next.js | 15.5.4 | Framework React |
| React | 19.1.0 | Biblioteca UI |
| TypeScript | 5.9.3 | Linguagem |
| Tailwind CSS | 4.1.17 | Framework CSS |
| pnpm | 10.22.0 | Package Manager |
| Node.js | 18+ | Runtime JavaScript |

---

<div align="center">
  
  **Feito com ❤️ e ☕ por Estatic**
  
  ⭐ Se você gostou deste projeto, considere dar uma estrela!
  
  ![Next.js](https://img.shields.io/badge/Powered%20by-Next.js-black?style=flat-square&logo=next.js)
  ![React](https://img.shields.io/badge/Built%20with-React%2019-61DAFB?style=flat-square&logo=react)
  ![TypeScript](https://img.shields.io/badge/Written%20in-TypeScript-3178C6?style=flat-square&logo=typescript)
  ![pnpm](https://img.shields.io/badge/Package%20Manager-pnpm-F69220?style=flat-square&logo=pnpm)
  
</div>
