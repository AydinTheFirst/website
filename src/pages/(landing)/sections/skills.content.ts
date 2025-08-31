import { type Dictionary, t } from "intlayer";

const skillsContent = {
  content: {
    description: t({
      en: "Technologies and tools I work with",
      tr: "Çalıştığım teknolojiler ve araçlar"
    }),
    proficiency: t({
      en: "Proficiency",
      tr: "Yetenek"
    }),
    skills: {
      databases: t({
        en: "Databases",
        tr: "Veritabanları"
      }),
      frontend: t({
        en: "Frontend",
        tr: "Frontend"
      }),
      languages: t({
        en: "Languages",
        tr: "Diller"
      }),
      mobile: t({
        en: "Mobile",
        tr: "Mobil"
      }),
      tools: t({
        en: "Tools",
        tr: "Araçlar"
      }),
      web: t({
        en: "Backend",
        tr: "Backend"
      })
    },
    title: t({
      en: "Skills & Technologies",
      tr: "Yetenekler & Teknolojiler"
    })
  },
  key: "skills"
} satisfies Dictionary;

export default skillsContent;
