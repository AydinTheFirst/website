import CTASection from "./sections/cta";
import Hero from "./sections/hero";
import ServicesSection from "./sections/services";
import SkillsSection from "./sections/skills";

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
