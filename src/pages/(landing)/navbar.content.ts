import { type Dictionary, t } from "intlayer";

const navbarContent = {
  content: {
    about: t({
      en: "About",
      tr: "Hakkında"
    }),
    contact: t({
      en: "Contact",
      tr: "İletişim"
    }),
    home: t({
      en: "Home",
      tr: "Ana Sayfa"
    }),
    projects: t({
      en: "Projects",
      tr: "Projeler"
    })
  },
  key: "navbar"
} satisfies Dictionary;

export default navbarContent;
