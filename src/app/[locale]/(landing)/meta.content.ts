import { type Dictionary, t } from "intlayer";

import type { SeoContent } from "~/lib/seo";

export default {
  content: {
    author: t({
      en: "Halil Aydın",
      tr: "Halil Aydın",
    }),
    description: t({
      en: "Full-Stack Developer Halil Aydın - Expert in React, Next.js, Node.js, and modern web technologies. Creating innovative web applications and digital solutions. Available for freelance projects and collaborations in Istanbul, Turkey.",
      tr: "Full-Stack Geliştirici Halil Aydın - React, Next.js, Node.js ve modern web teknolojilerinde uzman. Yenilikçi web uygulamaları ve dijital çözümler üretiyorum. İstanbul, Türkiye'de freelance projeler ve işbirlikleri için müsait.",
    }),
    keywords: t({
      en: "Halil Aydın, AydinTheFirst, Full-Stack Developer, React Developer, Next.js Expert, Node.js Developer, TypeScript Specialist, JavaScript Engineer, Web Development Services, Frontend Developer, Backend Developer, Software Engineer, Portfolio, Turkey Developer, Istanbul Freelancer, Web Applications, UI/UX Design, Responsive Design, Modern Web Technologies, Progressive Web Apps, E-commerce Development, API Development, Database Design, MongoDB, PostgreSQL, Git, Docker, AWS, Cloud Computing, Agile Development, SEO Optimization, Performance Optimization, Mobile-First Design, Cross-Platform Development",
      tr: "Halil Aydın, AydinTheFirst, Full-Stack Geliştirici, React Geliştirici, Next.js Uzmanı, Node.js Geliştirici, TypeScript Uzmanı, JavaScript Mühendisi, Web Geliştirme Hizmetleri, Frontend Geliştirici, Backend Geliştirici, Yazılım Mühendisi, Portföy, Türkiye Geliştirici, İstanbul Freelancer, Web Uygulamaları, UI/UX Tasarım, Responsive Tasarım, Modern Web Teknolojileri, Progressive Web Apps, E-ticaret Geliştirme, API Geliştirme, Veritabanı Tasarımı, MongoDB, PostgreSQL, Git, Docker, AWS, Bulut Bilişim, Agile Geliştirme, SEO Optimizasyonu, Performans Optimizasyonu, Mobile-First Tasarım, Cross-Platform Geliştirme",
    }),
    ogDescription: t({
      en: "🚀 Passionate Full-Stack Developer specializing in React, Next.js, and Node.js. Building modern, scalable web applications with cutting-edge technologies. Based in Istanbul, Turkey. Let's bring your ideas to life with innovative digital solutions!",
      tr: "🚀 React, Next.js ve Node.js konularında uzmanlaşmış tutkulu Full-Stack Geliştirici. Modern, ölçeklenebilir web uygulamaları geliştiriyorum. İstanbul, Türkiye merkezli. Yenilikçi dijital çözümlerle fikirlerinizi hayata geçirelim!",
    }),
    ogTitle: t({
      en: "Halil Aydın - Full-Stack Developer & Creative Problem Solver | React • Next.js • Node.js",
      tr: "Halil Aydın - Full-Stack Geliştirici ve Yaratıcı Problem Çözücü | React • Next.js • Node.js",
    }),
    title: t({
      en: "Halil Aydın (@AydinTheFirst) - Full-Stack Developer | React, Next.js, Node.js Expert | Istanbul, Turkey",
      tr: "Halil Aydın (@AydinTheFirst) - Full-Stack Geliştirici | React, Next.js, Node.js Uzmanı | İstanbul, Türkiye",
    }),
    twitterDescription: t({
      en: "🔥 Full-Stack Developer creating amazing web experiences with React, Next.js & Node.js. Available for projects! 💻 #WebDev #React #NextJS #NodeJS #Freelancer #Turkey",
      tr: "🔥 React, Next.js ve Node.js ile harika web deneyimleri yaratan Full-Stack Geliştirici. Projeler için müsait! 💻 #WebDev #React #NextJS #NodeJS #Freelancer #Türkiye",
    }),
  },
  key: "page-meta",
} satisfies Dictionary<SeoContent>;
