import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Link
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useIntlayer } from "react-intlayer";

import { SITE_CONFIG, SKILLS, SOCIAL_LINKS } from "~/constants";

import type { Route } from "./+types/page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "About - Halil Aydın" },
    {
      content:
        "Learn more about Halil Aydın, a passionate Full-Stack Developer specializing in modern web technologies including React, TypeScript, Node.js, and cloud solutions.",
      name: "description"
    },
    {
      content:
        "about halil aydın, full-stack developer, react developer, typescript, nodejs, web development, portfolio",
      name: "keywords"
    },
    { content: "Halil Aydın", name: "author" },
    { content: "About - Halil Aydın", property: "og:title" },
    {
      content:
        "Learn more about Halil Aydın, a passionate Full-Stack Developer specializing in modern web technologies.",
      property: "og:description"
    },
    { content: "profile", property: "og:type" },
    { content: "summary", name: "twitter:card" }
  ];
};

export default function AboutPage() {
  const content = useIntlayer("about");

  const technologies = [
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "React Router",
    "Express.js",
    "Prisma",
    "GraphQL",
    "REST APIs",
    "Git",
    "Linux",
    "Docker",
    "AWS"
  ];

  return (
    <div className='min-h-screen py-12'>
      <div className='mx-auto max-w-6xl px-6'>
        {/* Hero Section */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className='mb-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-foreground mb-4 text-4xl font-bold md:text-5xl'>
            {content.aboutMe}
          </h1>
          <div className='bg-primary mx-auto mb-8 h-1 w-20'></div>
          <p className='text-default-600 mx-auto max-w-2xl text-lg'>
            {content.description}
          </p>
        </motion.div>

        <div className='grid gap-12 lg:grid-cols-3'>
          {/* Profile Card */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className='lg:col-span-1'
            initial={{ opacity: 0, x: -30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className='sticky top-20'>
              <CardBody className='p-8 text-center'>
                <Avatar
                  className='mx-auto mb-6 h-32 w-32'
                  src='/avatar.jpeg'
                />
                <h2 className='mb-2 text-2xl font-bold'>{SITE_CONFIG.name}</h2>
                <p className='text-default-600 mb-4'>{SITE_CONFIG.title}</p>
                <div className='mb-6 flex items-center justify-center gap-2'>
                  <Icon
                    className='text-default-500'
                    icon='lucide:map-pin'
                  />
                  <span className='text-default-500 text-sm'>
                    {SITE_CONFIG.location}
                  </span>
                </div>

                <div className='flex justify-center gap-4'>
                  {SOCIAL_LINKS.map((social) => (
                    <Link
                      color='foreground'
                      href={social.href}
                      isExternal
                      key={social.name}
                    >
                      <Icon
                        className='hover:text-primary cursor-pointer text-2xl transition-colors'
                        icon={social.icon}
                      />
                    </Link>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className='space-y-8 lg:col-span-2'
            initial={{ opacity: 0, x: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Skills Section */}
            <Card>
              <CardHeader>
                <h3 className='flex items-center gap-2 text-2xl font-bold'>
                  <Icon icon='lucide:code' />
                  {content.skills}
                </h3>
              </CardHeader>
              <CardBody>
                <div className='grid gap-6 md:grid-cols-2'>
                  {SKILLS.map((skill, index) => (
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className='space-y-2'
                      initial={{ opacity: 0, y: 20 }}
                      key={skill.name}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      <div className='flex items-center gap-3'>
                        <Icon
                          className='text-2xl'
                          icon={skill.icon}
                        />
                        <span className='font-medium'>{skill.name}</span>
                      </div>
                      <div className='bg-default-200 h-2 w-full rounded-full'>
                        <motion.div
                          animate={{ width: `${skill.level}%` }}
                          className='bg-primary h-2 rounded-full'
                          initial={{ width: 0 }}
                          transition={{ delay: 0.5 + 0.1 * index, duration: 1 }}
                        />
                      </div>
                      <div className='text-default-500 text-right text-sm'>
                        {skill.level}%
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Tech Stack Section */}
            <Card>
              <CardHeader>
                <h3 className='flex items-center gap-2 text-2xl font-bold'>
                  <Icon icon='lucide:layers' />
                  {content.techStack}
                </h3>
              </CardHeader>
              <CardBody>
                <div className='flex flex-wrap gap-3'>
                  {technologies.map((tech, index) => (
                    <motion.div
                      animate={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      key={tech}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Chip
                        className='px-4 py-2'
                        color='primary'
                        radius='full'
                        variant='flat'
                      >
                        {tech}
                      </Chip>
                    </motion.div>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Contact Section */}
            <Card className='border-primary/20 bg-primary/5'>
              <CardBody className='p-8 text-center'>
                <Icon
                  className='text-primary mx-auto mb-4 text-4xl'
                  icon='lucide:mail'
                />
                <h3 className='mb-4 text-xl font-bold'>{content.cta.title}</h3>
                <p className='text-default-600 mb-6'>
                  {content.cta.description}
                </p>
                <Button
                  as={Link}
                  color='primary'
                  href={`mailto:${SITE_CONFIG.email}`}
                >
                  <Icon icon='lucide:send' />
                  {content.cta.getInTouch}
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
