import type { MetaDescriptor } from "react-router";

export interface SeoContent {
  author?: string;
  description: string;
  keywords: string;
  ogDescription?: string;
  ogTitle?: string;
  title: string;
  twitterDescription?: string;
}

export const generateSeoMetaTags = (content: SeoContent): MetaDescriptor[] => {
  const metaTags: MetaDescriptor[] = [
    { title: content.title },
    { content: content.description, name: "description" },
    { content: content.keywords, name: "keywords" },
  ];

  if (content.author) {
    metaTags.push({ content: content.author, name: "author" });
  }

  if (content.ogTitle) {
    metaTags.push({ content: content.ogTitle, property: "og:title" });
  }

  if (content.ogDescription) {
    metaTags.push({
      content: content.ogDescription,
      property: "og:description",
    });
  }

  if (content.twitterDescription) {
    metaTags.push({
      content: content.twitterDescription,
      name: "twitter:description",
    });
  }

  return metaTags;
};
