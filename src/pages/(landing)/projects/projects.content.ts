import { type Dictionary, t } from "intlayer";

const projectsContent = {
  content: {
    description: t({
      en: "A collection of projects I've worked on, showcasing different technologies and solutions.",
      tr: "Farklı teknolojiler ve çözümler sergileyen, üzerinde çalıştığım projelerin koleksiyonu."
    }),
    moreProjectsText: t({
      en: "Want to see more projects?",
      tr: "Daha fazla proje görmek ister misiniz?"
    }),
    projects: [
      {
        description: t({
          en: "A comprehensive magazine platform built with modern web technologies for news and article publishing.",
          tr: "Haber ve makale yayıncılığı için modern web teknolojileriyle geliştirilmiş kapsamlı bir dergi platformu."
        }),
        githubUrl: "https://github.com/AydinTheFirst/halo-magazine",
        liveUrl: "https://halo-magazine.vercel.app",
        technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
        title: t({
          en: "Halo Magazine",
          tr: "Halo Dergisi"
        })
      },
      {
        description: t({
          en: "A modern chat widget component for n8n automation platform with real-time messaging capabilities.",
          tr: "n8n otomasyon platformu için gerçek zamanlı mesajlaşma yetenekleri olan modern sohbet widget bileşeni."
        }),
        githubUrl: "https://github.com/AydinTheFirst/n8n-chat-widget",
        technologies: ["React", "TypeScript", "Socket.IO"],
        title: t({
          en: "N8N Chat Widget",
          tr: "N8N Sohbet Widget'ı"
        })
      },
      {
        description: t({
          en: "A feature-rich Discord bot with advanced moderation, music, and utility commands.",
          tr: "Gelişmiş moderasyon, müzik ve yardımcı program komutları ile özellik açısından zengin Discord botu."
        }),
        githubUrl: "https://github.com/AydinTheFirst/halo-bot",
        technologies: ["Node.js", "Discord.js", "TypeScript"],
        title: t({
          en: "Halo Bot",
          tr: "Halo Bot"
        })
      },
      {
        description: t({
          en: "React Router v7 template with modern tools and best practices for fast development.",
          tr: "Hızlı geliştirme için modern araçlar ve en iyi uygulamalarla React Router v7 şablonu."
        }),
        githubUrl: "https://github.com/AydinTheFirst/react-router-template",
        liveUrl: "https://react-router-template.vercel.app",
        technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
        title: t({
          en: "React Router Template",
          tr: "React Router Şablonu"
        })
      }
    ],
    title: t({
      en: "My Projects",
      tr: "Projelerim"
    }),
    viewAllButton: t({
      en: "View All Projects",
      tr: "Tüm Projeleri Gör"
    }),
    viewLiveButton: t({
      en: "View Live",
      tr: "Canlı Görünüm"
    }),
    viewSourceButton: t({
      en: "View Source",
      tr: "Kaynak Kodunu Gör"
    })
  },
  key: "projects"
} satisfies Dictionary;

export default projectsContent;
