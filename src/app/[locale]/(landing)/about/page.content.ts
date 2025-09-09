import { type Dictionary, t } from "intlayer";

export default {
  content: {
    contactCard: {
      button: t({
        en: "Contact Me",
        tr: "İletişime Geç",
      }),
      description: t({
        en: "Feel free to reach out for collaborations or just a friendly hello!",
        tr: "İşbirlikleri veya sadece dostça bir merhaba için iletişime geçmekten çekinmeyin!",
      }),
      title: t({
        en: "Let's Work Together",
        tr: "Birlikte Çalışalım",
      }),
    },
    description: t({
      en: "Learn more about me, my skills, and my experiences.",
      tr: "Benim hakkımda, becerilerim ve deneyimlerim hakkında daha fazla bilgi edinin.",
    }),
    title: t({
      en: "About Me",
      tr: "Hakkımda",
    }),
  },
  key: "about-page",
} satisfies Dictionary;
