import { Badge, Button, Card, CardBody, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useIntlayer } from "react-intlayer";

import type { Route } from "./+types/page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Projects - Halil Aydın" },
    {
      content:
        "Explore the portfolio of web development projects by Halil Aydın, including React applications, Node.js backends, and modern web solutions.",
      name: "description"
    },
    {
      content:
        "projects, portfolio, web development, react projects, nodejs projects, halil aydın projects",
      name: "keywords"
    },
    { content: "Halil Aydın", name: "author" },
    { content: "Projects - Halil Aydın", property: "og:title" },
    {
      content:
        "Explore the portfolio of web development projects by Halil Aydın.",
      property: "og:description"
    },
    { content: "website", property: "og:type" },
    { content: "summary", name: "twitter:card" }
  ];
};

const projectsData = [
  {
    description:
      "A comprehensive magazine platform built with modern web technologies for news and article publishing.",
    githubUrl: "https://github.com/AydinTheFirst/haloidergisi",
    liveUrl: "https://haloidergisi.com",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    title: "Halo Magazine"
  },
  {
    description:
      "A modern chat widget component for n8n automation platform with real-time messaging capabilities.",
    githubUrl: "https://github.com/AydinTheFirst/n8n-chat-widget",
    technologies: ["React", "TypeScript", "Socket.IO"],
    title: "N8N Chat Widget"
  },
  {
    description:
      "A simple and fast QR code generator built with React and TailwindCSS.",
    githubUrl: "https://github.com/AydinTheFirst/qrmaker",
    liveUrl: "https://qrmaker.aydinthefirst.com/",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
    title: "QR Maker"
  },
  {
    description:
      "React Router v7 template with modern tools and best practices for fast development.",
    githubUrl: "https://github.com/AydinTheFirst/rr-template",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
    title: "React Router Template"
  }
];

export default function ProjectsPage() {
  const content = useIntlayer("projects");

  return (
    <div className='min-h-screen py-12'>
      <div className='mx-auto max-w-6xl px-6'>
        {/* Header */}
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

        {/* Projects Grid */}
        <motion.div
          animate={{ opacity: 1 }}
          className='grid gap-8 md:grid-cols-2'
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              key={project.title}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
            >
              <Card className='h-full transition-transform hover:scale-[1.02]'>
                <CardBody className='p-6'>
                  <div className='flex h-full flex-col'>
                    <div className='mb-4'>
                      <h3 className='text-foreground mb-3 text-xl font-bold'>
                        {project.title}
                      </h3>
                      <p className='text-default-600 mb-4 leading-relaxed'>
                        {project.description}
                      </p>
                    </div>

                    <div className='mb-6'>
                      <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech) => (
                          <Badge
                            className='bg-primary/10 text-primary'
                            key={tech}
                            variant='flat'
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className='mt-auto flex gap-3'>
                      {project.liveUrl && (
                        <Button
                          as={Link}
                          className='flex-1'
                          color='primary'
                          href={project.liveUrl}
                          isExternal
                          startContent={<Icon icon='lucide:external-link' />}
                          variant='solid'
                        >
                          {content.viewLiveButton}
                        </Button>
                      )}
                      <Button
                        as={Link}
                        className={project.liveUrl ? "flex-1" : "w-full"}
                        href={project.githubUrl}
                        isExternal
                        startContent={<Icon icon='lucide:github' />}
                        variant='bordered'
                      >
                        {content.viewSourceButton}
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className='mt-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className='text-default-600 mb-6 text-lg'>
            {content.moreProjectsText}
          </p>
          <Button
            as={Link}
            color='primary'
            href='https://github.com/AydinTheFirst'
            isExternal
            size='lg'
            startContent={<Icon icon='lucide:github' />}
          >
            {content.viewAllButton}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
