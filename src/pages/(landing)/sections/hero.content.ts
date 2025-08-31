import { type Dictionary, t } from "intlayer";

const heroContent = {
  content: {
    contactButton: t({
      en: "Get In Touch",
      tr: "İletişime Geç"
    }),
    description: t({
      en: "I'm currently working on various fullstack projects with JavaScript. Passionate about building modern web applications with TypeScript, React, and Node.js.",
      tr: "JavaScript ile çeşitli fullstack projeler üzerinde çalışıyorum. TypeScript, React ve Node.js ile modern web uygulamaları geliştirmeye tutkuyla yaklaşıyorum."
    }),
    greeting: t({
      en: "Hi, I'm",
      tr: "Merhaba, Ben"
    }),
    name: t({
      en: "Halil Aydın",
      tr: "Halil Aydın"
    }),
    resumeButton: t({
      en: "Download Resume",
      tr: "CV İndir"
    }),
    title: t({
      en: "Full-Stack Developer",
      tr: "Full-Stack Geliştirici"
    })
  },
  key: "hero"
} satisfies Dictionary;

export default heroContent;
