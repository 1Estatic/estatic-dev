# 🚀 Estatic Portfolio

<div align="center">
  
  ![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  
  **Modern and responsive personal portfolio built with Next.js 15**
  
  [View Demo](#) • [Report Bug](https://github.com/1Estatic/estatic-dev/issues) • [Request Feature](https://github.com/1Estatic/estatic-dev/issues)
  
</div>

---

## 📋 About the Project

This is my personal portfolio, developed with the most modern web technologies to showcase my projects and skills as a developer. The site features a clean and elegant design, with smooth animations, theme system, and an optimized user experience.

### ✨ Features

- 🎨 **Modern Design**: Elegant interface with immersive galactic background
- ✨ **Diagonal Moving Stars**: Canvas-based star system with diagonal movement (bottom-left to top-right)
- 🌟 **Pulsing Animation**: Grok.com-style star pulsing with individual speeds and glow effects
- 🌌 **Nebula Effect**: Animated black holes with dynamic radial gradients
- 📱 **Fully Responsive**: Adapted for desktop, tablet, and mobile with adaptive text ("Scroll down" / "Swipe down")
- ⚡ **Optimized Performance**: Next.js 15 with React 19 for maximum performance
- 🌙 **Theme System**: Support for light, dark, and automatic themes with persistent preferences
- 🎯 **Smooth Navigation**: Smooth scroll between sections with floating navbar
- 🔄 **Interactive Animations**: HTML5 Canvas for stars with requestAnimationFrame
- 💎 **Glassmorphism Cards**: Transparent cards with backdrop-blur effects (40% opacity)
- 🎭 **Interactive Elements**: Scale effects on hover (105%) and click (95%) with cancel detection
- 📧 **Contact Section**: Integrated contact form and social media links
- 🎮 **Categorized Portfolio**: Projects organized in Animations, Projects, and College Work
- 🖼️ **Expanded Dialogs**: Large responsive dialogs (up to 5xl on desktop) for project viewing
- 📊 **Dynamic Statistics**: Metrics for visits, active players, and experience
- ↑ **Scroll to Top**: Glassmorphism floating button with slide-up animation and fade effect
- 🎨 **Enhanced Contrast**: Optimized colors for light theme with better readability

## 🛠️ Technologies Used

### Frontend
- **Next.js 15.5.4**: React framework with App Router and Server Components
- **React 19.1.0**: UI library with modern optimizations
- **TypeScript 5.9.3**: Static typing for greater reliability
- **Tailwind CSS 4.1.17**: Modern utility-first CSS framework with PostCSS

### UI Components & Libraries
- **Radix UI**: Accessible and customizable components
  - Dialog, Dropdown Menu, Navigation Menu, Accordion
  - Popover, Select, Tabs, Toast, Tooltip
  - Checkbox, Radio Group, Slider, Switch
  - Avatar, Progress, Separator, Scroll Area
- **Lucide React**: Modern and optimized icons
- **React Icons**: Brand icons (Discord, GitHub, Gmail)
- **Sonner**: Elegant toast notification system
- **Vaul**: Drawer/Sheet component for mobile
- **Embla Carousel**: Performant and customizable carousel

### Forms & Validation
- **React Hook Form 7.66.0**: Performant form management
- **Zod 3.25.76**: TypeScript-first schema validation
- **@hookform/resolvers 3.10.0**: Zod + React Hook Form integration

### Data & Utilities
- **Date-fns 4.1.0**: Modern date manipulation
- **Class Variance Authority 0.7.1**: Component variants
- **clsx 2.1.1 & tailwind-merge 2.6.0**: CSS class utilities
- **cmdk 1.0.4**: Command palette component

### Analytics & Monitoring
- **@vercel/analytics 1.5.0**: Vercel's integrated analytics for performance metrics

### Design & Styling
- **next-themes 0.4.6**: Theme management (light/dark/system)
- **Geist Font 1.5.1**: Modern Vercel font family
- **tailwindcss-animate 1.0.7**: Pre-configured Tailwind animations
- **Recharts 2.15.4**: Chart library for data visualization

### Package Manager
- **pnpm 10.22.0**: Fast and efficient package manager

### Features & Functionalities
- **App Router**: Modern Next.js 15 routing
- **Server & Client Components**: Performance optimization with hybrid rendering
- **Responsive Design**: Adaptive design with Tailwind CSS
- **Theme Switching**: Theme toggling with persistence
- **Smooth Scrolling**: Fluid navigation between sections
- **Form Validation**: Robust validation with Zod
- **Accessibility**: Radix UI components focused on accessibility

## 🎨 Theme System

The portfolio supports three theme modes:
- **Light**: Light theme optimized for bright environments
- **Dark**: Dark theme to reduce eye strain
- **System**: Automatically syncs with operating system preferences

Theme switching is persisted in localStorage and syncs with system theme changes.

## 📂 Project Structure

```
estatic-dev/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Main portfolio page
├── components/
│   ├── navigation.tsx      # Navbar with theme switcher
│   ├── footer.tsx          # Footer with links and information
│   ├── theme-provider.tsx  # Provider for theme management
│   ├── starfield.tsx       # Pulsing stars system with Canvas
│   └── ui/                 # Reusable UI components (Radix UI)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── form.tsx
│       └── ... (50+ components)
├── hooks/
│   ├── use-mobile.ts       # Hook for mobile detection
│   └── use-toast.ts        # Hook for toast system
├── lib/
│   └── utils.ts            # Utilities and helpers
├── public/                 # Static assets
├── styles/
│   └── globals.css         # Global styles and CSS variables
├── components.json         # shadcn/ui configuration
├── next.config.mjs         # Next.js configuration (with allowedDevOrigins)
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── .gitignore              # Files ignored by Git
├── pnpm-lock.yaml          # pnpm lock file
└── package.json            # Dependencies and scripts
```

## 🚀 How to Use

### Prerequisites
- **Node.js** 18.x or higher
- **pnpm 10.22.0** (recommended) or npm/yarn

### Installing pnpm (if needed)
```bash
npm install -g pnpm
```

### Project Installation

1. Clone the repository:
```bash
git clone https://github.com/1Estatic/estatic-dev.git
```

2. Navigate to the directory:
```bash
cd estatic-dev
```

3. Install dependencies:
```bash
pnpm install
```

4. Run the development server:
```bash
pnpm dev
```

5. Access in browser:
```
http://localhost:3000
```

### Local Network Access
The project is configured to accept connections from devices on the same local network. To access from other devices:

1. Find your machine's IP on the local network
2. Access `http://[YOUR-IP]:3000` from the other device
3. If needed, add the IP to `allowedDevOrigins` in `next.config.mjs`

### Available Scripts

```bash
pnpm dev          # Starts development server
pnpm build        # Creates production build
pnpm start        # Starts production server
pnpm lint         # Runs ESLint linter
```

## 📱 Portfolio Sections

### 🏠 Home
- Hero section with presentation and statistics
- Dynamic metrics: 5.7B total visits, 22.8K active players, 4+ years experience, 8 games
- Call-to-action buttons with animations
- Immersive galactic background with black holes and pulsing stars
- Scroll to top button with fade-in/out animation

### 👤 About
- Personal information and biography
- Achievement cards: Game Dev, Self-Taught, Soft-Skilled
- Background blur and glassmorphism effects

### 💡 Skills (Technical Mastery)
- Technical skills grid
- Detailed cards for:
  - Lua Scripting (Roblox)
  - Game Design
  - Performance Optimization
  - Team Leadership
- Expanded descriptions with Lucide icons

### 🎮 Portfolio
- **Project Categories**:
  - **Animations**: 3D Animations (Werewolf, Wolf, Daggers R6)
  - **Projects**: Personal and freelance projects (Games, Portfolio)
  - **College Work**: Academic work (OOP Python, Web Dev, Certificates)
- Featured Highlights with project previews
- Dialog modal for expanded project viewing
- Interactive card system with hover effects

### 📬 Contact
- **Multiple contact channels**:
  - Email: CorporationEstatic@gmail.com
  - Discord: @estatic.
  - GitHub: @1Estatic
- Functional contact form with validation
- Informative cards with React Icons
- Social media integration

## 🎯 Main Features

### Interface & Interaction
- **Theme Switcher**: Toggle between light/dark/system with dynamic icons and no scroll blocking
- **Smooth Scroll**: Smooth navigation between sections with native behavior
- **Scroll to Top**: Glassmorphism floating button with slide-up animation (appears at 500px scroll)
- **Responsive Navigation**: Adaptive menu for different screen sizes with sliding animation
- **Floating Navbar**: Navbar that slides down/up on scroll with fade effect
- **Large Dialogs**: Responsive dialogs (2xl to 5xl) optimized for desktop viewing
- **Interactive Cards**: Hover scale (105%) and click scale (95%) with drag-cancel detection
- **Glassmorphism Design**: Cards with 40% transparency and backdrop-blur-xl effect
- **Button Interactions**: All buttons scale on hover/click with consistent 200ms transitions
- **No Drag Behavior**: Links and buttons prevent text selection and dragging
- **Toast Notifications**: Notification system with Sonner
- **Adaptive Text**: "Scroll down" on desktop, "Swipe down" on mobile

### Animations & Effects
- **Diagonal Star Movement**: 45 stars moving from bottom-left to top-right with wrap-around
- **Individual Pulsing**: Each star pulses independently with random speed and phase
- **Grok-style Animation**: Stars grow/shrink with glow effect (inspired by grok.com)
- **Canvas Rendering**: HTML5 Canvas with requestAnimationFrame for smooth 60fps animation
- **Radial Glow**: Dual-layer glow (core + halo) that intensifies with pulse
- **Theme-adaptive Stars**: Soft pastel colors in light mode (blue-gray, purple, steel blue)
- **Nebula Background**: Nebula effect with 6 animated black holes
- **Black Holes**: Ultra-dark radial gradients with colored halos (purple, blue, pink)
- **Scroll Animations**: Navbar and scroll-to-top button with slide and fade effects
- **Card Hover Effects**: Scale transformations (105% hover, 95% active) with 300ms/200ms transitions
- **Button Interactions**: Consistent scale behavior across all interactive elements
- **Glassmorphism**: Frosted glass effects (backdrop-blur-xl) on all cards and floating UI
- **Close Button Animation**: Dialog close buttons with scale and opacity transitions

### Forms
- **React Hook Form**: Optimized form management
- **Zod Validation**: TypeScript-first schema validation
- **Input Validation**: Real-time visual feedback with focus states
- **Form Submission**: Ready for backend integration

### Performance
- **Next.js 15 App Router**: Optimized routing and automatic code splitting
- **Server Components**: Server-side rendering for better performance
- **Canvas Rendering**: 45 stars rendered via HTML5 Canvas with requestAnimationFrame
- **Efficient Animation**: Diagonal star movement with minimal performance impact
- **Theme Detection**: Theme system with automatic system preference detection and localStorage persistence
- **Responsive Canvas**: Resizable canvas that adapts to screen size on window resize
- **Image Optimization**: Automatic image optimization with next/image
- **Vercel Analytics**: Real-time performance metrics and Web Vitals
- **Tailwind CSS Purge**: Optimized CSS with automatic unused code removal
- **pnpm**: Efficient dependency management with global cache

## 🌐 Compatibility

| Browser | Minimum Version | Status |
|---------|----------------|---------|
| Chrome | 100+ | ✅ Fully Supported |
| Firefox | 100+ | ✅ Fully Supported |
| Safari | 15.4+ | ✅ Fully Supported |
| Edge | 100+ | ✅ Fully Supported |
| Opera | 86+ | ✅ Fully Supported |

**Modern Feature Requirements:**
- CSS Container Queries
- CSS backdrop-filter
- ES2022+ JavaScript
- CSS Grid & Flexbox
- CSS Custom Properties
- React 19 features

## 📝 Customization

To customize the portfolio:

### Content
1. **Personal Information**: Edit `app/page.tsx` to update texts and descriptions
2. **Projects**: Modify the `projectCategories` array in `app/page.tsx`
3. **Statistics**: Update values in `app/page.tsx` Hero section
4. **Contact Links**: Modify contacts in `app/page.tsx` and `components/footer.tsx`

### Styles
1. **Global Theme**: Configure CSS variables in `styles/globals.css`
2. **Tailwind Config**: Customize colors and breakpoints in `tailwind.config.ts`
3. **UI Components**: Customize components in `components/ui/`

### Features
1. **Add Sections**: Create new components and import in `app/page.tsx`
2. **New UI Components**: Use shadcn/ui CLI or add manually
3. **Analytics**: Configure `@vercel/analytics` for your domain

### Adding shadcn/ui Components
```bash
# Example of how to add a new component
pnpm dlx shadcn@latest add [component-name]
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a Branch for your Feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🚀 Deploy

### Vercel (Recommended)
The project is optimized for Vercel deployment:

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify**: Compatible with Next.js builds
- **Railway**: Support for SSR and APIs
- **AWS Amplify**: Automatic deployment via Git
- **Cloudflare Pages**: Next.js support with Workers

### Local Build
```bash
# Create production build
pnpm build

# Test build locally
pnpm start
```

## ⚙️ Important Configurations

### .gitignore
The project includes a complete `.gitignore` that ignores:
- 📁 `/.next/` - Next.js build and cache
- 📁 `node_modules/` - Dependencies
- 🔐 `.env*` - Environment variables
- 🗃️ Logs and temporary files
- 💻 IDE configurations

## 📦 Included UI Components

The project includes over 50 custom UI components based on Radix UI:

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

All components are fully customizable via Tailwind CSS and Class Variance Authority.

## 📄 License

This project is proprietary software. All rights reserved. Use, modification, or distribution requires prior written permission from the author. See the `LICENSE` file for more details.

## 👤 Author

**Estatic**

- GitHub: [@1Estatic](https://github.com/1Estatic)
- Email: CorporationEstatic@gmail.com
- Discord: @estatic.
- Portfolio: [estatic-dev](https://github.com/1Estatic/estatic-dev)

## 🙏 Acknowledgments

- Inspired by [Stackyz](https://www.stackyz.dev) portfolio
- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Lucide Icons](https://lucide.dev/) for modern icons
- [Vercel](https://vercel.com/) for hosting and analytics
- [Tailwind CSS](https://tailwindcss.com/) for the CSS framework
- Next.js and React community

## 🔧 Technologies and Versions

| Technology | Version | Description |
|------------|---------|-------------|
| Next.js | 15.5.4 | React Framework |
| React | 19.1.0 | UI Library |
| TypeScript | 5.9.3 | Language |
| Tailwind CSS | 4.1.17 | CSS Framework |
| pnpm | 10.22.0 | Package Manager |
| Node.js | 18+ | JavaScript Runtime |

---

<div align="center">
  
  **Made with ❤️ and ☕ by Estatic**
  
  ⭐ If you liked this project, consider giving it a star!
  
  ![Next.js](https://img.shields.io/badge/Powered%20by-Next.js-black?style=flat-square&logo=next.js)
  ![React](https://img.shields.io/badge/Built%20with-React%2019-61DAFB?style=flat-square&logo=react)
  ![TypeScript](https://img.shields.io/badge/Written%20in-TypeScript-3178C6?style=flat-square&logo=typescript)
  ![pnpm](https://img.shields.io/badge/Package%20Manager-pnpm-F69220?style=flat-square&logo=pnpm)
  
</div>
