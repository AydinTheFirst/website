import { type Dictionary, t } from "intlayer";

import type { SeoContent } from "~/lib/seo";

export default {
  content: {
    author: t({
      en: "Halil Aydın",
      tr: "Halil Aydın",
    }),
    description: t({
      en: "Learn about Halil Aydın's journey as a Full-Stack Developer. Discover his technical skills, professional experience, educational background, and passion for creating innovative web applications with React, Next.js, Node.js, and modern technologies.",
      tr: "Full-Stack Geliştirici Halil Aydın'ın yolculuğu hakkında bilgi edinin. Teknik becerileri, profesyonel deneyimi, eğitim geçmişi ve React, Next.js, Node.js ve modern teknolojilerle yenilikçi web uygulamaları yaratma tutkusunu keşfedin.",
    }),
    keywords: t({
      en: "Halil Aydın About, Full-Stack Developer Biography, Professional Experience, Technical Skills, Education Background, Career Journey, React Expert, Next.js Specialist, Node.js Developer, TypeScript Skills, JavaScript Expertise, Web Development Experience, Software Engineering Background, Portfolio About Section, Developer Story, Programming Journey, Turkey Developer, Istanbul Freelancer, Professional Profile, Developer CV, Technical Expertise, Problem Solving Skills, Innovation Mindset, Continuous Learning",
      tr: "Halil Aydın Hakkında, Full-Stack Geliştirici Biyografi, Profesyonel Deneyim, Teknik Beceriler, Eğitim Geçmişi, Kariyer Yolculuğu, React Uzmanı, Next.js Uzmanı, Node.js Geliştirici, TypeScript Becerileri, JavaScript Uzmanlığı, Web Geliştirme Deneyimi, Yazılım Mühendisliği Geçmişi, Portföy Hakkında Bölümü, Geliştirici Hikayesi, Programlama Yolculuğu, Türkiye Geliştirici, İstanbul Freelancer, Profesyonel Profil, Geliştirici CV, Teknik Uzmanlık, Problem Çözme Becerileri, İnovasyon Zihniyeti, Sürekli Öğrenme",
    }),
    ogDescription: t({
      en: "🎯 Discover the story behind Halil Aydın, a passionate Full-Stack Developer from Istanbul. Learn about his expertise in React, Next.js, Node.js, and his journey in creating cutting-edge web solutions.",
      tr: "🎯 İstanbul'dan tutkulu Full-Stack Geliştirici Halil Aydın'ın hikayesini keşfedin. React, Next.js, Node.js uzmanlığı ve son teknoloji web çözümleri yaratma yolculuğu hakkında bilgi edinin.",
    }),
    ogTitle: t({
      en: "About Halil Aydın - Full-Stack Developer Journey & Expertise",
      tr: "Halil Aydın Hakkında - Full-Stack Geliştirici Yolculuğu ve Uzmanlığı",
    }),
    title: t({
      en: "About Halil Aydın - Full-Stack Developer | Skills, Experience & Journey",
      tr: "Halil Aydın Hakkında - Full-Stack Geliştirici | Beceriler, Deneyim ve Yolculuk",
    }),
    twitterDescription: t({
      en: "👨‍💻 Meet Halil Aydın - Full-Stack Developer passionate about React, Next.js & Node.js. Discover my journey, skills & experience! #AboutMe #WebDev #Developer",
      tr: "👨‍💻 Halil Aydın ile tanışın - React, Next.js ve Node.js tutkunu Full-Stack Geliştirici. Yolculuğumu, becerilerimi ve deneyimimi keşfedin! #Hakkımda #WebDev #Geliştirici",
    }),
  },
  key: "about-meta",
} satisfies Dictionary<SeoContent>;
