import { type Dictionary, t } from "intlayer";

import type { SeoContent } from "~/lib/seo";

export default {
  content: {
    author: t({
      en: "Halil Aydın",
      tr: "Halil Aydın",
    }),
    description: t({
      en: "Explore Halil Aydın's portfolio of innovative web projects. Showcasing expertise in React, Next.js, Node.js, TypeScript, and modern web technologies. View live demos, source code, and detailed case studies of full-stack web applications, e-commerce solutions, and cutting-edge digital projects.",
      tr: "Halil Aydın'ın yenilikçi web projelerini keşfedin. React, Next.js, Node.js, TypeScript ve modern web teknolojilerindeki uzmanlığı sergileyen portföy. Full-stack web uygulamaları, e-ticaret çözümleri ve son teknoloji dijital projelerin canlı demolarını, kaynak kodlarını ve detaylı vaka analizlerini görüntüleyin.",
    }),
    keywords: t({
      en: "Halil Aydın Projects, Web Development Portfolio, React Projects, Next.js Applications, Node.js Backend, TypeScript Projects, JavaScript Applications, Full-Stack Projects, E-commerce Development, Progressive Web Apps, API Development, Database Projects, MongoDB Applications, PostgreSQL Projects, Responsive Web Design, Mobile-First Development, SEO Optimized Websites, Performance Optimized Apps, Modern Web Technologies, Open Source Projects, GitHub Portfolio, Live Demos, Source Code, Case Studies, Web App Development, Frontend Projects, Backend Development, Full-Stack Solutions",
      tr: "Halil Aydın Projeleri, Web Geliştirme Portföyü, React Projeleri, Next.js Uygulamaları, Node.js Backend, TypeScript Projeleri, JavaScript Uygulamaları, Full-Stack Projeler, E-ticaret Geliştirme, Progressive Web Apps, API Geliştirme, Veritabanı Projeleri, MongoDB Uygulamaları, PostgreSQL Projeleri, Responsive Web Tasarım, Mobile-First Geliştirme, SEO Optimizasyonlu Siteler, Performans Optimize Uygulamalar, Modern Web Teknolojileri, Açık Kaynak Projeler, GitHub Portföyü, Canlı Demolar, Kaynak Kodu, Vaka Analizleri, Web App Geliştirme, Frontend Projeler, Backend Geliştirme, Full-Stack Çözümler",
    }),
    ogDescription: t({
      en: "🚀 Check out my latest web development projects! From React SPAs to full-stack applications with Next.js and Node.js. See live demos, source code, and the technologies behind each innovative solution.",
      tr: "🚀 En son web geliştirme projelerimi inceleyin! React SPA'lardan Next.js ve Node.js ile full-stack uygulamalara. Canlı demoları, kaynak kodları ve her yenilikçi çözümün arkasındaki teknolojileri görün.",
    }),
    ogTitle: t({
      en: "Projects Portfolio - Halil Aydın | React, Next.js, Node.js Showcase",
      tr: "Projeler Portföyü - Halil Aydın | React, Next.js, Node.js Vitrin",
    }),
    title: t({
      en: "Projects - Halil Aydın (@AydinTheFirst) | Web Development Portfolio & Case Studies",
      tr: "Projeler - Halil Aydın (@AydinTheFirst) | Web Geliştirme Portföyü ve Vaka Analizleri",
    }),
    twitterDescription: t({
      en: "💻 Explore my web development projects! React • Next.js • Node.js • TypeScript. Live demos & source code available! #WebDev #React #Portfolio #Projects",
      tr: "💻 Web geliştirme projelerimi keşfedin! React • Next.js • Node.js • TypeScript. Canlı demolar ve kaynak kodu mevcut! #WebDev #React #Portföy #Projeler",
    }),
  },
  key: "projects-meta",
} satisfies Dictionary<SeoContent>;
