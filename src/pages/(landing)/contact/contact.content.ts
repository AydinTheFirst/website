import { type Dictionary, t } from "intlayer";

const contactContent = {
  content: {
    description: t({
      en: "Let's work together! Feel free to reach out for collaborations, questions, or just to say hello.",
      tr: "Birlikte çalışalım! İş birliği, sorular veya sadece merhaba demek için bana ulaşmaktan çekinmeyin."
    }),
    form: {
      email: t({
        en: "Email",
        tr: "E-posta"
      }),
      emailPlaceholder: t({
        en: "your.email@example.com",
        tr: "eposta@ornek.com"
      }),
      location: t({
        en: "Location",
        tr: "Konum"
      }),
      message: t({
        en: "Message",
        tr: "Mesaj"
      }),
      messagePlaceholder: t({
        en: "Tell me about your project or just say hello...",
        tr: "Projeniz hakkında bilgi verin veya sadece merhaba deyin..."
      }),
      name: t({
        en: "Name",
        tr: "İsim"
      }),
      namePlaceholder: t({
        en: "Your Name",
        tr: "İsminiz"
      }),
      responseTime: t({
        en: "Response Time",
        tr: "Yanıt Süresi"
      }),
      send: t({
        en: "Send Message",
        tr: "Mesaj Gönder"
      }),
      subject: t({
        en: "Subject",
        tr: "Konu"
      }),
      subjectPlaceholder: t({
        en: "What's this about?",
        tr: "Bu ne hakkında?"
      })
    },
    info: {
      availability: t({
        en: "Available for freelance work",
        tr: "Freelance çalışma için müsait"
      }),
      location: t({
        en: "Turkey",
        tr: "Türkiye"
      }),
      response: t({
        en: "Usually responds within 24 hours",
        tr: "Genellikle 24 saat içinde yanıtlar"
      })
    },
    social: {
      description: t({
        en: "Follow me on social media",
        tr: "Sosyal medyada takip edin"
      }),
      title: t({
        en: "Connect with me",
        tr: "Benimle bağlantı kurun"
      })
    },
    title: t({
      en: "Get In Touch",
      tr: "İletişime Geç"
    })
  },
  key: "contact-page"
} satisfies Dictionary;

export default contactContent;
