import { Button, Card, CardBody, Input, Link, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";
import { useIntlayer } from "react-intlayer";

import { SITE_CONFIG, SOCIAL_LINKS } from "~/constants";

export default function ContactPage() {
  const content = useIntlayer("contact-page");

  const contactInfo = [
    {
      href: `mailto:${SITE_CONFIG.email}`,
      icon: "lucide:mail",
      label: "Email",
      value: SITE_CONFIG.email
    },
    {
      icon: "lucide:map-pin",
      label: content.form.location,
      value: content.info.location
    },
    {
      icon: "lucide:clock",
      label: content.form.responseTime,
      value: content.info.response
    }
  ];

  const socialLinks = SOCIAL_LINKS.map((social) => ({
    href: social.href,
    icon: social.icon,
    label: social.name
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    const mailtoUrl = new URL(`mailto:${SITE_CONFIG.email}`);
    mailtoUrl.searchParams.set("subject", (data.subject as string) || "");
    mailtoUrl.searchParams.set(
      "body",
      `Name: ${(data.name as string) || ""}\nEmail: ${(data.email as string) || ""}\n\nMessage:\n${(data.message as string) || ""}`
    );

    // Redirect to mailto link
    window.location.href = mailtoUrl.toString();
  };

  return (
    <div className='min-h-screen py-12'>
      <div className='mx-auto max-w-6xl px-6'>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className='mb-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-foreground mb-4 text-4xl font-bold md:text-5xl'>
            {content.title}
          </h1>
          <div className='bg-primary mx-auto mb-8 h-1 w-20'></div>
          <p className='text-default-600 mx-auto max-w-2xl text-lg'>
            {content.description}
          </p>
        </motion.div>

        <div className='grid gap-12 lg:grid-cols-3'>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className='lg:col-span-2'
            initial={{ opacity: 0, x: -30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card>
              <CardBody className='p-8'>
                <form
                  className='space-y-6'
                  onSubmit={handleSubmit}
                >
                  <div className='grid gap-4 md:grid-cols-2'>
                    <Input
                      isRequired
                      label={content.form.name}
                      variant='bordered'
                    />
                    <Input
                      isRequired
                      label={content.form.email}
                      type='email'
                      variant='bordered'
                    />
                  </div>

                  <Input
                    isRequired
                    label={content.form.subject}
                    variant='bordered'
                  />

                  <Textarea
                    isRequired
                    label={content.form.message}
                    minRows={6}
                    variant='bordered'
                  />

                  <Button
                    className='w-full'
                    color='primary'
                    size='lg'
                    startContent={<Icon icon='lucide:send' />}
                    type='submit'
                  >
                    {content.form.send}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className='space-y-6'
            initial={{ opacity: 0, x: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card>
              <CardBody className='p-6'>
                <h3 className='mb-6 text-lg font-semibold'>
                  {content.social.title}
                </h3>
                <div className='space-y-4'>
                  {contactInfo.map((info) => (
                    <div
                      className='flex items-start gap-3'
                      key={info.icon}
                    >
                      <div className='bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full'>
                        <Icon
                          className='text-primary h-4 w-4'
                          icon={info.icon}
                        />
                      </div>
                      <div className='flex-1'>
                        <p className='text-default-600 text-sm font-medium'>
                          {info.label}
                        </p>
                        {info.href ? (
                          <Link
                            className='text-foreground'
                            href={info.href}
                            isExternal={info.href.startsWith("http")}
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className='text-foreground'>{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className='p-6'>
                <h3 className='mb-6 text-lg font-semibold'>Social Media</h3>
                <p className='text-default-600 mb-4 text-sm'>
                  {content.social.description}
                </p>
                <div className='grid grid-cols-2 gap-3'>
                  {socialLinks.map((social) => (
                    <Button
                      as={Link}
                      className='justify-start'
                      href={social.href}
                      isExternal
                      key={social.label}
                      startContent={<Icon icon={social.icon} />}
                      variant='flat'
                    >
                      {social.label}
                    </Button>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card className='border-success/20 bg-success/5 border'>
              <CardBody className='p-6'>
                <div className='flex items-center gap-3'>
                  <div className='bg-success h-3 w-3 animate-pulse rounded-full'></div>
                  <div>
                    <p className='text-success-700 dark:text-success-300 font-medium'>
                      {content.info.availability}
                    </p>
                    <p className='text-success-600 dark:text-success-400 text-sm'>
                      {content.info.response}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
