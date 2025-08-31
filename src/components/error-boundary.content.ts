import { type Dictionary, t } from "intlayer";

const errorBoundaryContent = {
  content: {
    description: t({
      en: "We encountered an unexpected error. Please try refreshing the page or contact us if the problem persists.",
      tr: "Beklenmedik bir hatayla karşılaştık. Lütfen sayfayı yenileyin veya sorun devam ederse bizimle iletişime geçin."
    }),
    homeButton: t({
      en: "Go Home",
      tr: "Ana Sayfaya Dön"
    }),
    notFound: {
      description: t({
        en: "The page you're looking for doesn't exist or has been moved.",
        tr: "Aradığınız sayfa mevcut değil veya taşınmış."
      }),
      title: t({
        en: "Page Not Found",
        tr: "Sayfa Bulunamadı"
      })
    },
    refreshButton: t({
      en: "Refresh Page",
      tr: "Sayfayı Yenile"
    }),
    title: t({
      en: "Oops! Something went wrong",
      tr: "Hay aksi! Bir şeyler yanlış gitti"
    })
  },
  key: "errorBoundary"
} satisfies Dictionary;

export default errorBoundaryContent;
