import { type Dictionary, t } from "intlayer";

const servicesContent = {
  content: {
    description: t({
      en: "Professional development services tailored to your needs",
      tr: "İhtiyaçlarınıza göre uyarlanmış profesyonel geliştirme hizmetleri"
    }),
    services: {
      mobileDevelopment: {
        description: t({
          en: "Cross-platform mobile applications",
          tr: "Çapraz platform mobil uygulamaları"
        }),
        features: [
          t({
            en: "Flutter",
            tr: "Flutter"
          }),
          t({
            en: "Native APIs",
            tr: "Yerel API'ler"
          }),
          t({
            en: "App Store Deployment",
            tr: "App Store Yayınlama"
          }),
          t({
            en: "Play Store Deployment",
            tr: "Play Store Yayınlama"
          })
        ],
        title: t({
          en: "Mobile Development",
          tr: "Mobil Geliştirme"
        })
      },
      uiuxDesign: {
        description: t({
          en: "Modern and user-friendly interface design",
          tr: "Modern ve kullanıcı dostu arayüz tasarımı"
        }),
        features: [
          t({
            en: "Figma",
            tr: "Figma"
          }),
          t({
            en: "Responsive Design",
            tr: "Duyarlı Tasarım"
          }),
          t({
            en: "User Experience",
            tr: "Kullanıcı Deneyimi"
          }),
          t({
            en: "Design Systems",
            tr: "Tasarım Sistemleri"
          })
        ],
        title: t({
          en: "UI/UX Design",
          tr: "UI/UX Tasarımı"
        })
      },
      webDevelopment: {
        description: t({
          en: "Full-stack web applications with modern technologies",
          tr: "Modern teknolojilerle tam yığın web uygulamaları"
        }),
        features: [
          t({
            en: "React/Next.js",
            tr: "React/Next.js"
          }),
          t({
            en: "TypeScript",
            tr: "TypeScript"
          }),
          t({
            en: "API Development",
            tr: "API Geliştirme"
          }),
          t({
            en: "Database Design",
            tr: "Veritabanı Tasarımı"
          })
        ],
        title: t({
          en: "Web Development",
          tr: "Web Geliştirme"
        })
      }
    },
    title: t({
      en: "Services",
      tr: "Hizmetler"
    })
  },
  key: "services"
} satisfies Dictionary;

export default servicesContent;
