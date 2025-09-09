import {
  addToast,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Spacer,
  Textarea,
} from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { getIntlayer } from "intlayer";
import { useIntlayer } from "react-intlayer";

import LocaleLink from "~/components/locale-link";
import { SOCIALS } from "~/constants/socials";
import { generateSeoMetaTags } from "~/lib/seo";

import type { Route } from "./+types/page";

export const meta: Route.MetaFunction = ({ params }) => {
  const content = getIntlayer("contact-meta", params.locale);

  return generateSeoMetaTags(content);
};

export default function Page() {
  const content = useIntlayer("contact-page");

  const contactItems = [
    {
      icon: "mdi:email",
      label: content.infoCard.email,
      link: "mailto:hello@aydinthefirst.com",
      value: "hello@aydinthefirst.com",
    },
    {
      icon: "mdi:map-marker",
      label: content.infoCard.location,
      value: "Istanbul, Turkey",
    },
    {
      icon: "mdi:clock",
      label: content.infoCard.responseTime.label,
      value: content.infoCard.responseTime.value,
    },
  ];

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await axios.post(import.meta.env.VITE_CONTACT_WEBHOOK_URL, formData);

      addToast({
        color: "success",
        title: content.toasts.success,
      });
    } catch {
      addToast({
        color: "danger",
        title: content.toasts.error,
      });
    }
  };

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
        <div className="col-span-12 md:col-span-8">
          <Card className="p-4">
            <CardHeader className="flex flex-col items-start gap-3">
              <h2 className="text-2xl font-bold">
                {content.contactCard.title}
              </h2>
              <p className="text-muted max-w-xl">
                {content.contactCard.description}
              </p>
            </CardHeader>
            <CardBody>
              <form className="grid grid-cols-12 gap-3" onSubmit={onSubmit}>
                <Input
                  className="col-span-12 md:col-span-6"
                  isRequired
                  label={content.contactCard.inputs.name}
                  name="name"
                />
                <Input
                  className="col-span-12 md:col-span-6"
                  isRequired
                  label={content.contactCard.inputs.email}
                  name="email"
                  type="email"
                />
                <Input
                  className="col-span-12"
                  isRequired
                  label={content.contactCard.inputs.subject}
                  name="subject"
                />
                <Textarea
                  className="col-span-12"
                  isRequired
                  label={content.contactCard.inputs.message}
                  name="message"
                />
                <Button className="col-span-12" type="submit">
                  <Icon icon="mdi:send" />
                  {content.contactCard.inputs.send}
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Card className="p-4">
            <CardHeader>
              <h2 className="text-2xl font-bold">{content.infoCard.title}</h2>
            </CardHeader>
            <CardBody>
              <ul className="grid gap-3">
                {contactItems.map((item, index) => (
                  <li className="flex items-center gap-4" key={index}>
                    <div className="bg-content4 rounded-full p-3">
                      <Icon className="h-5 w-5" icon={item.icon} />
                    </div>
                    <div className="flex flex-col">
                      <strong>{item.label}</strong>
                      {item.link ? (
                        <span>
                          <LocaleLink color="foreground" href={item.link}>
                            {item.value}
                          </LocaleLink>
                        </span>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
          <Spacer y={2} />
          <Card className="p-4">
            <CardHeader>
              <h2 className="text-2xl font-bold">{content.socialLinks}</h2>
            </CardHeader>
            <CardBody>
              <ul className="grid gap-3">
                {Object.values(SOCIALS).map((social, idx) => (
                  <li className="mb-2 flex items-center gap-2" key={idx}>
                    <Icon className="h-5 w-5" icon={social.icon} />
                    <LocaleLink
                      color="foreground"
                      href={social.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {social.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
          <Spacer y={2} />
          <Card className="bg-success/20">
            <CardBody>
              <div className="flex items-center gap-2">
                <div className="rounded-full p-3">
                  <Icon className="h-4 w-4" icon="mdi:shield-check" />
                </div>
                <div className="flex flex-col">
                  <strong>{content.availableForWork.title}</strong>
                  <p className="text-muted text-sm">
                    {content.availableForWork.description}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
