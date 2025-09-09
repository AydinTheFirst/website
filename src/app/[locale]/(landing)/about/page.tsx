import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Spacer,
} from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getIntlayer } from "intlayer";
import { useIntlayer } from "react-intlayer";

import LocaleLink from "~/components/locale-link";
import { SOCIALS } from "~/constants/socials";
import { generateSeoMetaTags } from "~/lib/seo";

import type { Route } from "./+types/page";

export const meta: Route.MetaFunction = ({ params }) => {
  const content = getIntlayer("about-meta", params.locale);

  return generateSeoMetaTags(content);
};

export default function About() {
  const content = useIntlayer("about-page");

  return (
    <div className="container my-20">
      <div className="grid place-items-center gap-3 text-center">
        <h1 className="text-3xl font-bold">{content.title}</h1>
        <Divider className="h-1 w-20" />
        <Spacer />
        <p className="text-muted max-w-xl">{content.description}</p>
      </div>
      <Spacer y={20} />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <ProfileCard />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Card className="p-4">
            <CardBody>
              <div className="grid place-items-center gap-3 text-center">
                <Icon className="h-20 w-20" icon="mdi:email" />
                <h2 className="text-2xl font-bold">
                  {content.contactCard.title}
                </h2>
                <p className="text-muted max-w-xl">
                  {content.contactCard.description}
                </p>
                <Button as={LocaleLink} href="/contact">
                  {content.contactCard.button}
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <Card className="p-4">
      <CardHeader className="justify-center">
        <Avatar className="h-20 w-20" />
      </CardHeader>
      <CardBody>
        <div className="grid place-items-center gap-3 text-center">
          <h2 className="text-2xl font-bold">Halil Aydın</h2>
          <p className="text-muted">Full Stack Developer</p>
          <p className="text-muted">
            <Icon className="mr-2 inline-block" icon="mdi:location" />
            Turkiye
          </p>
          <Spacer />
          <div className="flex justify-center gap-3">
            {Object.values(SOCIALS).map((social, i) => (
              <LocaleLink
                color="foreground"
                href={social.href}
                key={i}
                target="_blank"
              >
                <Icon className="h-6 w-6" icon={social.icon} />
              </LocaleLink>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
