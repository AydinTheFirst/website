# Halil Aydın - Portfolio Website

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-7.8.2-green.svg)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-38B2AC.svg)](https://tailwindcss.com/)
[![HeroUI](https://img.shields.io/badge/HeroUI-2.8.2-purple.svg)](https://heroui.com/)

A modern, responsive portfolio website built with cutting-edge technologies.
Features smooth animations, internationalization support, and a clean,
professional design.

## 🌟 Features

- **🚀 Modern Tech Stack**: Built with React 19, React Router v7, and TypeScript
- **🎨 Beautiful UI**: Styled with TailwindCSS and HeroUI components
- **🌍 Internationalization**: Multi-language support (English/Turkish) with
  Intlayer
- **📱 Responsive Design**: Fully responsive across all devices
- **✨ Smooth Animations**: Powered by Framer Motion
- **🎯 SEO Optimized**: Server-side rendering with React Router
- **🔧 Developer Experience**: Hot Module Replacement, TypeScript, ESLint
- **🎪 Component Library**: Modern UI components with HeroUI
- **📦 Asset Optimization**: Optimized bundling with Vite

## 🛠️ Tech Stack

### Frontend Framework

- **React 19.1.1** - Latest React with concurrent features
- **React Router 7.8.2** - Modern routing with SSR support
- **TypeScript 5.9.2** - Type-safe development

### Styling & UI

- **TailwindCSS 4.1.12** - Utility-first CSS framework
- **HeroUI 2.8.2** - Beautiful React components
- **Framer Motion 12.23.12** - Smooth animations and transitions

### Internationalization

- **Intlayer 5.8.1** - Modern i18n solution for React
- **React Intlayer 5.8.1** - Intlayer React integration

### Development Tools

- **Vite 7.1.3** - Fast build tool and dev server
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting

## � Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── error-boundary.tsx
│   └── ...
├── constants.ts          # Centralized configuration
├── pages/               # Route-based page components
│   ├── (landing)/
│   │   ├── page.tsx     # Landing page
│   │   ├── about/
│   │   │   └── page.tsx # About page
│   │   └── sections/    # Landing page sections
│   │       ├── hero.tsx
│   │       ├── skills.tsx
│   │       ├── services.tsx
│   │       └── cta.tsx
├── root.tsx            # App root component
├── routes.ts           # Route configuration
└── app.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22.12.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AydinTheFirst/website.git
cd website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Preview Production Build

Serve the production build locally:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Serve production build
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🌐 Internationalization

The website supports multiple languages:

- **English** (default)
- **Turkish**

Language switching is handled automatically based on user preference or can be
manually changed using the locale switcher component.

## 🎨 Components

### Core Components

- **ErrorBoundary** - Graceful error handling with beautiful UI
- **Hero Section** - Landing page hero with animated content
- **Skills Section** - Technical skills showcase
- **Services Section** - Service offerings display
- **CTA Section** - Call-to-action components
- **Navigation** - Responsive navigation bar
- **Footer** - Site footer with links

### UI Components

- **Theme Switcher** - Dark/light mode toggle
- **Locale Switcher** - Language selection
- **Social Links** - Social media integration

## 🔧 Configuration

### Environment Variables

The application uses the following environment variables:

- `NODE_ENV` - Environment mode (development/production)

### Intlayer Configuration

Located in `intlayer.config.ts`:

```typescript
const config: IntlayerConfig = {
  internationalization: {
    defaultLocale: Locales.ENGLISH,
    locales: [Locales.ENGLISH, Locales.TURKISH],
  },
};
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- 📱 Mobile devices (320px+)
- 📲 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## 🚀 Deployment

### Docker Deployment

Build and run using Docker:

```bash
# Build the Docker image
docker build -t portfolio-website .

# Run the container
docker run -p 3000:3000 portfolio-website
```

### Vercel/Netlify Deployment

The application is optimized for deployment on modern platforms:

1. Connect your repository to Vercel/Netlify
2. Set the build command: `npm run build`
3. Set the output directory: `build/client`
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

**Halil Aydın**

- Email: hello@aydinthefirst.com
- Location: Türkiye
- LinkedIn:
  [linkedin.com/in/aydinthefirst](https://linkedin.com/in/aydinthefirst)
- GitHub: [github.com/AydinTheFirst](https://github.com/AydinTheFirst)
- Twitter: [@aydnhalil0](https://x.com/aydnhalil0)
- Instagram: [@aydinthefirst](https://instagram.com/aydinthefirst)

## 🙏 Acknowledgments

- [React Router](https://reactrouter.com/) - Modern routing
- [HeroUI](https://heroui.com/) - Beautiful components
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://framer.com/motion) - Animation library
- [Intlayer](https://intlayer.org/) - Internationalization
- [Vite](https://vitejs.dev/) - Fast build tool

---
