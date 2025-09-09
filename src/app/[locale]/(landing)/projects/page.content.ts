import { type Dictionary, t } from "intlayer";

export default {
  content: {
    common: {
      liveDemo: t({
        en: "Live Demo",
        tr: "Canlı Demo",
      }),
      sourceCode: t({
        en: "Source Code",
        tr: "Kaynak Kodu",
      }),
    },
    description: t({
      en: "Explore my diverse range of projects, showcasing my skills and creativity.",
      tr: "Becerilerimi ve yaratıcılığımı sergileyen çeşitli projelerimi keşfedin.",
    }),
    seeMore: t({
      en: "See More Projects",
      tr: "Daha Fazla Proje Gör",
    }),
    title: t({
      en: "Projects",
      tr: "Projeler",
    }),
  },
  key: "projects-page",
} satisfies Dictionary;
