import { Button, Card, CardBody, Divider, Spacer } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { getIntlayer } from "intlayer";
import { useIntlayer } from "react-intlayer";

import LocaleLink from "~/components/locale-link";
import { generateSeoMetaTags } from "~/lib/seo";

import type { Route } from "./+types/page";

export const meta: Route.MetaFunction = ({ params }) => {
  const content = getIntlayer("page-meta", params.locale);

  return generateSeoMetaTags(content);
};

export default function Page() {
  return (
    <div className="container my-10 flex flex-col gap-40">
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
}

function CTASection() {
  const content = useIntlayer("page").cta;
  return (
    <div>
      <div className="grid place-items-center gap-3 text-center">
        <h2 className="text-3xl font-bold">{content.title}</h2>
        <Divider className="h-1 w-20" />
        <p className="text-muted mt-4 max-w-xl">{content.description}</p>
        <div className="mt-4 flex justify-center gap-2">
          <Button as={LocaleLink} href="/contact">
            <Icon icon="mdi:email" />
            {content.buttons.contactMe}
          </Button>
          <Button as={LocaleLink} href="/projects" variant="bordered">
            <Icon icon="mdi:eye" />
            {content.buttons.seeMore}
          </Button>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const content = useIntlayer("page").hero;

  return (
    <div className="grid h-screen place-items-center">
      <div className="grid place-items-center gap-3 text-center">
        <p className="text-muted">{content.greet}</p>
        <h1 className="text-7xl font-bold">Halil Aydın</h1>
        <h2 className="text-2xl font-semibold">{content.title}</h2>
        <p className="text-muted mt-4 max-w-xl">{content.description}</p>
        <div className="mt-4 flex gap-2">
          <Button as={LocaleLink} href="/projects">
            <Icon icon="mdi:eye" />
            {content.buttons.seeMyWork}
          </Button>
          <Button as={LocaleLink} href="/contact" variant="bordered">
            <Icon icon="mdi:email" />
            {content.buttons.contactMe}
          </Button>
        </div>
        <Spacer />
        <div className="flex justify-center">
          <Button
            as={"a"}
            href="https://github.com/AydinTheFirst"
            isIconOnly
            radius="full"
            target="_blank"
            variant="light"
          >
            <Icon className="h-10 w-10" icon="mdi:github" />
          </Button>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      >
        <Icon icon="mdi:chevron-double-down" />
      </motion.div>
    </div>
  );
}

function ServicesSection() {
  const content = useIntlayer("page").services;

  return (
    <div>
      <div className="grid place-items-center gap-3 text-center">
        <h2 className="text-3xl font-bold">{content.title}</h2>
        <Divider className="h-1 w-20" />
        <p className="text-muted mt-4 max-w-xl">{content.description}</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Object.values(content.items).map((skill, i) => (
            <Card className="p-3" key={i}>
              <CardBody>
                <div className="flex flex-col items-center gap-2 text-center">
                  <Icon icon={skill.icon.value} />
                  <h3 className="text-2xl font-medium">{skill.title}</h3>
                  <p className="text-muted">{skill.description}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  const content = useIntlayer("page").skills;

  const skills = [
    { icon: "logos:javascript", name: "JavaScript" },
    { icon: "logos:typescript-icon", name: "TypeScript" },
    { icon: "logos:react", name: "React" },
    { icon: "logos:nodejs-icon", name: "Node.js" },
    { icon: "logos:nextjs-icon", name: "Next.js" },
    { icon: "logos:tailwindcss-icon", name: "Tailwind CSS" },
    { icon: "logos:graphql", name: "GraphQL" },
    { icon: "mdi:database", name: "Prisma" },
    { icon: "logos:docker-icon", name: "Docker" },
    { icon: "logos:postgresql", name: "PostgreSQL" },
    { icon: "logos:mongodb-icon", name: "MongoDB" },
    { icon: "logos:redis", name: "Redis" },
    { icon: "logos:aws", name: "AWS" },
    { icon: "logos:git-icon", name: "Git" },
    { icon: "logos:react-router", name: "React Router" },
    { icon: "logos:flutter", name: "Flutter" },
  ];

  return (
    <div>
      <div className="grid place-items-center gap-3 text-center">
        <h2 className="text-3xl font-bold">{content.title}</h2>
        <Divider className="h-1 w-20" />
        <p className="text-muted mt-4 max-w-xl">{content.description}</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, i) => (
            <Card className="p-3" key={i}>
              <CardBody>
                <div className="flex flex-col items-center gap-2">
                  <Icon className="text-white" icon={skill.icon} />
                  <p className="text-xl font-medium">{skill.name}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
