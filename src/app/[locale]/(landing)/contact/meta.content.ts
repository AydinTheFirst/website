import { type Dictionary, t } from "intlayer";

import type { SeoContent } from "~/lib/seo";

export default {
  content: {
    author: t({
      en: "Halil Aydın",
      tr: "Halil Aydın",
    }),
    description: t({
      en: "Get in touch with Halil Aydın, Full-Stack Developer based in Istanbul, Turkey. Available for freelance web development projects, collaborations, and consultations. Specializing in React, Next.js, Node.js, and modern web technologies. Contact for project inquiries, job opportunities, or technical discussions.",
      tr: "İstanbul, Türkiye merkezli Full-Stack Geliştirici Halil Aydın ile iletişime geçin. Freelance web geliştirme projeleri, işbirlikleri ve danışmanlık hizmetleri için müsait. React, Next.js, Node.js ve modern web teknolojilerinde uzman. Proje sorularınız, iş fırsatları veya teknik tartışmalar için iletişime geçin.",
    }),
    keywords: t({
      en: "Contact Halil Aydın, Hire Full-Stack Developer, React Developer for Hire, Next.js Developer Contact, Node.js Developer Istanbul, Freelance Web Developer Turkey, Web Development Services, Project Consultation, Technical Consultation, Collaboration Opportunities, Job Opportunities, Remote Work, Freelance Projects, Custom Web Applications, E-commerce Development Services, API Development Services, Frontend Development, Backend Development, Full-Stack Solutions, Contact Form, Email Contact, Social Media, Professional Network",
      tr: "Halil Aydın İletişim, Full-Stack Geliştirici Kirala, React Geliştirici Kiralama, Next.js Geliştirici İletişim, Node.js Geliştirici İstanbul, Freelance Web Geliştirici Türkiye, Web Geliştirme Hizmetleri, Proje Danışmanlığı, Teknik Danışmanlık, İşbirliği Fırsatları, İş Fırsatları, Uzaktan Çalışma, Freelance Projeler, Özel Web Uygulamaları, E-ticaret Geliştirme Hizmetleri, API Geliştirme Hizmetleri, Frontend Geliştirme, Backend Geliştirme, Full-Stack Çözümler, İletişim Formu, E-posta İletişim, Sosyal Medya, Profesyonel Ağ",
    }),
    ogDescription: t({
      en: "💬 Let's work together! Full-Stack Developer available for projects. Expert in React, Next.js, Node.js. Based in Istanbul, Turkey. Quick response guaranteed!",
      tr: "💬 Birlikte çalışalım! Projeler için müsait Full-Stack Geliştirici. React, Next.js, Node.js uzmanı. İstanbul, Türkiye merkezli. Hızlı yanıt garantili!",
    }),
    ogTitle: t({
      en: "Contact Halil Aydın - Hire Full-Stack Developer | Available for Projects",
      tr: "Halil Aydın İletişim - Full-Stack Geliştirici Kirala | Projeler için Müsait",
    }),
    title: t({
      en: "Contact Halil Aydın (@AydinTheFirst) - Full-Stack Developer | Hire for Projects",
      tr: "Halil Aydın (@AydinTheFirst) İletişim - Full-Stack Geliştirici | Projeler için Kirala",
    }),
    twitterDescription: t({
      en: "📧 Ready to collaborate? Full-Stack Developer available for exciting projects! React • Next.js • Node.js expert. Let's build something amazing! #Contact #Hire #WebDev",
      tr: "📧 İşbirliği yapmaya hazır mısınız? Heyecan verici projeler için müsait Full-Stack Geliştirici! React • Next.js • Node.js uzmanı. Harika bir şeyler inşa edelim! #İletişim #Kirala #WebDev",
    }),
  },
  key: "contact-meta",
} satisfies Dictionary<SeoContent>;
