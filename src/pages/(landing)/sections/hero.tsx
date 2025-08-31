import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useIntlayer } from "react-intlayer";

export default function Hero() {
  const content = useIntlayer("hero");

  return (
    <section className='from-background via-background to-primary/5 relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br px-4'>
      {/* Background Animation */}
      <div className='absolute inset-0 opacity-20'>
        {[...Array(50)].map((_, i) => (
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50]
            }}
            className='bg-primary absolute h-1 w-1 rounded-full'
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            transition={{
              delay: i * 0.1,
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        ))}
      </div>

      <div className='z-10 container mx-auto text-center'>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className='text-foreground/70 mb-2 text-lg'>{content.greeting}</p>
        </motion.div>

        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className='from-primary to-secondary mb-4 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent md:text-7xl'
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {content.name}
        </motion.h1>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className='text-foreground/80 mb-6 text-2xl md:text-3xl'
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {content.title}
        </motion.p>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className='text-foreground/70 mx-auto mb-12 max-w-3xl text-lg leading-relaxed'
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {content.description}
        </motion.p>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className='flex flex-col items-center justify-center gap-4 sm:flex-row'
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <Button
            as='a'
            className='min-w-[200px]'
            color='primary'
            href='/resume.pdf'
            radius='full'
            size='lg'
            startContent={<Icon icon='lucide:download' />}
            target='_blank'
            variant='solid'
          >
            {content.resumeButton}
          </Button>

          <Button
            as='a'
            className='min-w-[200px]'
            color='primary'
            href='/contact'
            radius='full'
            size='lg'
            startContent={<Icon icon='lucide:mail' />}
            variant='bordered'
          >
            {content.contactButton}
          </Button>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className='mt-12 flex justify-center gap-6'
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Button
            as='a'
            href='https://github.com/AydinTheFirst'
            isIconOnly
            radius='full'
            size='lg'
            target='_blank'
            variant='light'
          >
            <Icon
              className='text-2xl'
              icon='lucide:github'
            />
          </Button>
          <Button
            as='a'
            href='https://linkedin.com/in/aydinthefirst'
            isIconOnly
            radius='full'
            size='lg'
            target='_blank'
            variant='light'
          >
            <Icon
              className='text-2xl'
              icon='lucide:linkedin'
            />
          </Button>
          <Button
            as='a'
            href='https://twitter.com/AydinTheFirst'
            isIconOnly
            radius='full'
            size='lg'
            target='_blank'
            variant='light'
          >
            <Icon
              className='text-2xl'
              icon='lucide:twitter'
            />
          </Button>
          <Button
            as='a'
            href='https://instagram.com/aydinthefirst'
            isIconOnly
            radius='full'
            size='lg'
            target='_blank'
            variant='light'
          >
            <Icon
              className='text-2xl'
              icon='lucide:instagram'
            />
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            y: [0, 10, 0]
          }}
          className='absolute bottom-8 left-1/2 -translate-x-1/2 transform'
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
        >
          <Icon
            className='text-foreground/50 text-2xl'
            icon='lucide:chevron-down'
          />
        </motion.div>
      </div>
    </section>
  );
}
