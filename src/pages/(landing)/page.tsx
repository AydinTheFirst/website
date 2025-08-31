import type { Route } from "./+types/page";

import CTASection from "./sections/cta";
import Hero from "./sections/hero";
import ServicesSection from "./sections/services";
import SkillsSection from "./sections/skills";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Halil Aydın - Full-Stack Developer" },
    {
      content:
        "Passionate Full-Stack Developer creating modern web applications with cutting-edge technologies. Specializing in React, TypeScript, Node.js, and cloud solutions.",
      name: "description"
    },
    {
      content:
        "full-stack developer, react, typescript, nodejs, web development, portfolio, halil aydın",
      name: "keywords"
    },
    { content: "Halil Aydın", name: "author" },
    { content: "Halil Aydın - Full-Stack Developer", property: "og:title" },
    {
      content:
        "Passionate Full-Stack Developer creating modern web applications with cutting-edge technologies.",
      property: "og:description"
    },
    { content: "website", property: "og:type" },
    { content: "summary_large_image", name: "twitter:card" },
    { content: "Halil Aydın - Full-Stack Developer", name: "twitter:title" },
    {
      content:
        "Passionate Full-Stack Developer creating modern web applications with cutting-edge technologies.",
      name: "twitter:description"
    }
  ];
};

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <SkillsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
