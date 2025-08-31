import { type Dictionary, t } from "intlayer";

const ctaContent = {
  content: {
    description: t({
      en: "Let's work together to bring your ideas to life with modern web technologies.",
      tr: "Modern web teknolojileriyle fikirlerinizi hayata geçirmek için birlikte çalışalım."
    }),
    getInTouch: t({
      en: "Get In Touch",
      tr: "İletişime Geç"
    }),
    subtitle: t({
      en: "Have a project in mind?",
      tr: "Aklında bir proje var mı?"
    }),
    title: t({
      en: "Ready to Start Your Project?",
      tr: "Projenize Başlamaya Hazır mısınız?"
    }),
    viewWork: t({
      en: "View My Work",
      tr: "Çalışmalarımı Görüntüle"
    }),
    workTogether: t({
      en: "Let's work together",
      tr: "Birlikte çalışalım"
    })
  },
  key: "cta"
} satisfies Dictionary;

export default ctaContent;
