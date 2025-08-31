import { type Dictionary, t } from "intlayer";

const aboutContent = {
  content: {
    aboutMe: t({
      en: "About Me",
      tr: "Hakkımda"
    }),
    cta: {
      description: t({
        en: "I'm always interested in new opportunities and exciting projects.",
        tr: "Her zaman yeni fırsatlar ve heyecan verici projelere ilgi duyuyorum."
      }),
      getInTouch: t({
        en: "Get In Touch",
        tr: "İletişime Geç"
      }),
      title: t({
        en: "Let's Work Together",
        tr: "Birlikte Çalışalım"
      })
    },
    description: t({
      en: "I'm a passionate Full-Stack Developer with expertise in modern web technologies. Currently working on various fullstack projects using JavaScript, TypeScript, React, and Node.js. I love creating efficient, scalable, and user-friendly applications.",
      tr: "Modern web teknolojilerinde uzman, tutkulu bir Full-Stack Geliştiriciyim. Şu anda JavaScript, TypeScript, React ve Node.js kullanarak çeşitli fullstack projeler üzerinde çalışıyorum. Verimli, ölçeklenebilir ve kullanıcı dostu uygulamalar yaratmayı seviyorum."
    }),
    education: t({
      en: "Education",
      tr: "Eğitim"
    }),
    experience: t({
      en: "Experience",
      tr: "Deneyim"
    }),
    skills: t({
      en: "Skills & Technologies",
      tr: "Yetenekler ve Teknolojiler"
    }),
    techStack: t({
      en: "Tech Stack",
      tr: "Teknoloji Yığını"
    })
  },
  key: "about"
} satisfies Dictionary;

export default aboutContent;
