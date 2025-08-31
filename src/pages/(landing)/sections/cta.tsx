import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useIntlayer } from "react-intlayer";

export default function CTASection() {
  const ctaContent = useIntlayer("cta");

  return (
    <section className='from-primary/10 via-primary/5 to-secondary/10 bg-gradient-to-br py-20'>
      <div className='mx-auto max-w-4xl px-6 text-center'>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className='mb-4'
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className='bg-primary/20 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-medium'>
              {ctaContent.workTogether}
            </span>
          </motion.div>

          <h2 className='text-foreground mb-4 text-3xl font-bold md:text-4xl'>
            {ctaContent.title}
          </h2>

          <p className='text-default-600 mb-2 text-lg'>{ctaContent.subtitle}</p>

          <p className='text-default-600 mb-8 text-lg'>
            {ctaContent.description}
          </p>

          <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                as={Link}
                className='px-8 py-6 text-lg font-semibold'
                color='primary'
                href='/contact'
                size='lg'
                startContent={<Icon icon='lucide:message-circle' />}
              >
                {ctaContent.getInTouch}
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                as={Link}
                className='px-8 py-6 text-lg font-semibold'
                href='/projects'
                size='lg'
                startContent={<Icon icon='lucide:folder' />}
                variant='bordered'
              >
                {ctaContent.viewWork}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
