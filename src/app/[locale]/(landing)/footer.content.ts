import { type Dictionary, insert, t } from "intlayer";

export default {
  content: {
    about: t({
      en: "Full-Stack Developer passionate about creating modern web applications with cutting-edge technologies.",
      tr: "Modern web uygulamaları oluşturmaya tutkulu Full-Stack Developer.",
    }),
    availability: t({
      en: "Available for freelance work and collaborations.",
      tr: "Freelance çalışma ve işbirlikleri için müsait.",
    }),
    connect: t({
      en: "Connect",
      tr: "Bağlan",
    }),
    copyright: t({
      en: insert("© {{year}} Halil Aydın. All rights reserved."),
      tr: insert("© {{year}} Halil Aydın. Tüm hakları saklıdır."),
    }),
    links: {
      about: t({
        en: "About",
        tr: "Hakkında",
      }),
      contact: t({
        en: "Contact",
        tr: "İletişim",
      }),
      home: t({
        en: "Home",
        tr: "Ana Sayfa",
      }),
      projects: t({
        en: "Projects",
        tr: "Projeler",
      }),
    },
    name: t({
      en: "Halil Aydın",
      tr: "Halil Aydın",
    }),
    privacy: t({
      en: "Privacy Policy",
      tr: "Gizlilik Politikası",
    }),
    quickLinks: t({
      en: "Quick Links",
      tr: "Hızlı Bağlantılar",
    }),
    social: {
      email: t({
        en: "Email",
        tr: "E-posta",
      }),
      github: t({
        en: "GitHub",
        tr: "GitHub",
      }),
      linkedin: t({
        en: "LinkedIn",
        tr: "LinkedIn",
      }),
      twitter: t({
        en: "Twitter",
        tr: "Twitter",
      }),
    },
    terms: t({
      en: "Terms of Service",
      tr: "Hizmet Şartları",
    }),
  },
  key: "footer",
} satisfies Dictionary;
