import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useIntlayer } from "react-intlayer";

import { SKILLS } from "~/constants";

export default function SkillsSection() {
  const skillsContent = useIntlayer("skills");

  return (
    <section className='bg-default-50 dark:bg-default-100/10 py-20'>
      <div className='mx-auto max-w-6xl px-6'>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className='mb-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-foreground mb-4 text-3xl font-bold md:text-4xl'>
            {skillsContent.title}
          </h2>
          <div className='bg-primary mx-auto mb-8 h-1 w-20'></div>
          <p className='text-default-600 mx-auto max-w-2xl text-lg'>
            {skillsContent.description}
          </p>
        </motion.div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {SKILLS.map((skill, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              key={skill.name}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
            >
              <Card className='h-full'>
                <CardBody className='flex flex-col items-center p-6 text-center'>
                  <Icon
                    className='mb-4 h-12 w-12'
                    icon={skill.icon}
                  />
                  <h3 className='mb-2 text-lg font-semibold'>{skill.name}</h3>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
