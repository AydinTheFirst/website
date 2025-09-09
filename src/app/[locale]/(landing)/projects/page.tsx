import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Divider,
  Spacer,
} from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getIntlayer } from "intlayer";
import { useIntlayer } from "react-intlayer";

import LocaleLink from "~/components/locale-link";
import { generateSeoMetaTags } from "~/lib/seo";

import type { Route } from "./+types/page";

import { PROJECTS } from "./projects";

export const meta: Route.MetaFunction = ({ params }) => {
  const content = getIntlayer("projects-meta", params.locale);

  return generateSeoMetaTags(content);
};

export default function Page() {
  const content = useIntlayer("projects-page");

  return (
    <div className="container my-20">
      <div className="grid place-items-center gap-3 text-center">
        <h1 className="text-3xl font-bold">{content.title}</h1>
        <Divider className="h-1 w-20" />
        <Spacer />
        <p className="text-muted max-w-xl">{content.description}</p>
      </div>
      <Spacer y={20} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Card key={i}>
            <CardBody>
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.keywords.map((tag, idx) => (
                  <Chip key={idx}>{tag}</Chip>
                ))}
              </div>
            </CardBody>
            <CardFooter className="flex gap-2">
              <Button as={LocaleLink} href={project.sourceCode} target="_blank">
                <Icon className="h-5 w-5" icon="mdi:github" />
                {content.common.sourceCode}
              </Button>
              {project.liveDemo && (
                <Button
                  as={LocaleLink}
                  href={project.liveDemo}
                  target="_blank"
                  variant="bordered"
                >
                  <Icon className="h-5 w-5" icon="mdi:link" />
                  {content.common.liveDemo}
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      <Spacer y={20} />
      <div className="flex justify-center">
        <Button
          as={LocaleLink}
          href="https://github.com/AydinTheFirst?tab=repositories"
          size="lg"
          target="_blank"
        >
          <Icon className="h-6 w-6" icon="mdi:github" />
          {content.seeMore}
        </Button>
      </div>
    </div>
  );
}
