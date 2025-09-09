import { type Dictionary, t } from "intlayer";

export default {
  content: {
    availableForWork: {
      description: t({
        en: "I'm currently open to new freelance projects and collaborations. If you have an idea or project in mind, let's discuss how we can work together to bring it to life!",
        tr: "Şu anda yeni freelance projelere ve iş birliklerine açığım. Aklınızda bir fikir veya proje varsa, bunu hayata geçirmek için nasıl birlikte çalışabileceğimizi tartışalım!",
      }),
      title: t({
        en: "Available for Work",
        tr: "Çalışmaya Müsait",
      }),
    },

    contactCard: {
      description: t({
        en: "I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out using the form below.",
        tr: "Sizden haber almak isterim! Bir sorunuz varsa, iş birliği yapmak istiyorsanız veya sadece merhaba demek istiyorsanız, aşağıdaki formu kullanarak iletişime geçmekten çekinmeyin.",
      }),
      inputs: {
        email: t({
          en: "Email",
          tr: "E-posta",
        }),
        message: t({
          en: "Message",
          tr: "Mesaj",
        }),
        name: t({
          en: "Name",
          tr: "İsim",
        }),
        send: t({
          en: "Send Message",
          tr: "Mesaj Gönder",
        }),
        subject: t({
          en: "Subject",
          tr: "Konu",
        }),
      },
      title: t({
        en: "Get in Touch",
        tr: "İletişime Geçin",
      }),
    },
    description: t({
      en: "Feel free to reach out for collaborations, inquiries, or just to say hello! I'm always open to connecting with fellow developers and tech enthusiasts.",
      tr: "İş birlikleri, sorular veya sadece merhaba demek için benimle iletişime geçmekten çekinmeyin! Her zaman diğer geliştiriciler ve teknoloji meraklılarıyla bağlantı kurmaya açığım.",
    }),
    infoCard: {
      email: t({
        en: "Email",
        tr: "E-posta",
      }),
      location: t({
        en: "Location",
        tr: "Konum",
      }),
      responseTime: {
        label: t({
          en: "Response Time",
          tr: "Yanıt Süresi",
        }),
        value: t({
          en: "Typically responds within 24-48 hours.",
          tr: "Genellikle 24-48 saat içinde yanıt verir.",
        }),
      },
      title: t({
        en: "Other Ways to Reach Me",
        tr: "Bana Ulaşmanın Diğer Yolları",
      }),
    },
    socialLinks: t({
      en: "Social Links",
      tr: "Sosyal Bağlantılar",
    }),
    title: t({
      en: "Contact Me",
      tr: "Benimle İletişime Geçin",
    }),
    toasts: {
      error: t({
        en: "Something went wrong. Please try again later.",
        tr: "Bir şeyler ters gitti. Lütfen daha sonra tekrar deneyin.",
      }),
      success: t({
        en: "Your message has been sent successfully!",
        tr: "Mesajınız başarıyla gönderildi!",
      }),
    },
  },
  key: "contact-page",
} satisfies Dictionary;
