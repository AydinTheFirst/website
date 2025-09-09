import { type Dictionary, t } from "intlayer";

export default {
  content: {
    cta: {
      buttons: {
        contactMe: t({
          en: "Contact Me",
          tr: "İletişime Geç",
        }),
        seeMore: t({
          en: "See More",
          tr: "Daha Fazla Gör",
        }),
      },
      description: t({
        en: "I'm currently available for freelance work and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!",
        tr: "Şu anda freelance çalışma ve işbirlikleri için müsaitim. Aklınızda bir proje varsa veya sadece merhaba demek istiyorsanız, lütfen iletişime geçin!",
      }),
      title: t({
        en: "Let's Work Together!",
        tr: "Hadi Birlikte Çalışalım!",
      }),
    },
    hero: {
      buttons: {
        contactMe: t({
          en: "Contact Me",
          tr: "İletişime Geç",
        }),
        seeMyWork: t({
          en: "See My Work",
          tr: "Projelerimi Gör",
        }),
      },
      description: t({
        en: "I work on various fullstack projects with JavaScript. I am passionate about building modern web applications with TypeScript, React, and Node.js.",
        tr: "JavaScript ile çeşitli fullstack projeler üzerinde çalışıyorum. TypeScript, React ve Node.js ile modern web uygulamaları geliştirmeye tutkuyla yaklaşıyorum..",
      }),
      greet: t({
        en: "Hi, This is",
        tr: "Merhaba, Ben",
      }),
      title: t({
        en: "Full-Stack Web Developer",
        tr: "Full-Stack Web Geliştirici",
      }),
    },
    services: {
      description: t({
        en: "I offer a range of services to help you build and enhance your web presence. Here are some of the services I provide:",
        tr: "Web varlığınızı oluşturmanıza ve geliştirmenize yardımcı olmak için çeşitli hizmetler sunuyorum. İşte sunduğum bazı hizmetler:",
      }),
      items: {
        apiIntegration: {
          description: t({
            en: "Integrating third-party APIs to enhance functionality and streamline processes.",
            tr: "Üçüncü taraf API'lerini entegre ederek işlevselliği artırma ve süreçleri kolaylaştırma.",
          }),
          icon: "mdi:api",
          title: t({
            en: "API Integration",
            tr: "API Entegrasyonu",
          }),
        },
        performanceOptimization: {
          description: t({
            en: "Improving website speed and performance to enhance user experience and SEO.",
            tr: "Kullanıcı deneyimini ve SEO'yu artırmak için web sitesi hızını ve performansını iyileştirme.",
          }),
          icon: "mdi:speedometer",
          title: t({
            en: "Performance Optimization",
            tr: "Performans Optimizasyonu",
          }),
        },
        responsiveDesign: {
          description: t({
            en: "Ensuring your website looks great and functions well on all devices and screen sizes.",
            tr: "Web sitenizin tüm cihazlarda ve ekran boyutlarında harika görünmesini ve iyi çalışmasını sağlama.",
          }),
          icon: "mdi:monitor-cellphone",
          title: t({
            en: "Responsive Design",
            tr: "Duyarlı Tasarım",
          }),
        },
        uiUxDesign: {
          description: t({
            en: "Creating user-friendly interfaces and experiences that engage and delight users.",
            tr: "Kullanıcıları meşgul eden ve memnun eden kullanıcı dostu arayüzler ve deneyimler oluşturma.",
          }),
          icon: "mdi:palette",
          title: t({
            en: "UI/UX Design",
            tr: "UI/UX Tasarım",
          }),
        },
        webDevelopment: {
          description: t({
            en: "Building responsive and dynamic web applications using modern frameworks and libraries.",
            tr: "Modern frameworkler ve kütüphaneler kullanarak duyarlı ve dinamik web uygulamaları geliştirme.",
          }),
          icon: "mdi:code-tags",
          title: t({
            en: "Web Development",
            tr: "Web Geliştirme",
          }),
        },
      },
      title: t({
        en: "Services",
        tr: "Hizmetler",
      }),
    },
    skills: {
      description: t({
        en: "Here are some of the technologies and tools I work with:",
        tr: "İşte çalıştığım bazı teknolojiler ve araçlar:",
      }),
      title: t({
        en: "Skills & Technologies",
        tr: "Yetenekler & Teknolojiler",
      }),
    },
  },
  key: "page",
} satisfies Dictionary;
