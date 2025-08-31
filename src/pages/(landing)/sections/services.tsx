import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useIntlayer } from "react-intlayer";

export default function ServicesSection() {
  const servicesContent = useIntlayer("services");

  const services = [
    {
      description: servicesContent.services.webDevelopment.description,
      features: servicesContent.services.webDevelopment.features,
      icon: "lucide:code",
      key: "web-development",
      title: servicesContent.services.webDevelopment.title
    },
    {
      description: servicesContent.services.mobileDevelopment.description,
      features: servicesContent.services.mobileDevelopment.features,
      icon: "lucide:smartphone",
      key: "mobile-development",
      title: servicesContent.services.mobileDevelopment.title
    },
    {
      description: servicesContent.services.uiuxDesign.description,
      features: servicesContent.services.uiuxDesign.features,
      icon: "lucide:palette",
      key: "ui-ux-design",
      title: servicesContent.services.uiuxDesign.title
    }
  ];

  return (
    <section className='py-20'>
      <div className='mx-auto max-w-6xl px-6'>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className='mb-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-foreground mb-4 text-3xl font-bold md:text-4xl'>
            {servicesContent.title}
          </h2>
          <div className='bg-primary mx-auto mb-8 h-1 w-20'></div>
          <p className='text-default-600 mx-auto max-w-2xl text-lg'>
            {servicesContent.description}
          </p>
        </motion.div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              key={service.key}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <Card className='h-full transition-shadow hover:shadow-lg'>
                <CardBody className='p-6'>
                  <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full'>
                    <Icon
                      className='text-primary h-6 w-6'
                      icon={service.icon}
                    />
                  </div>
                  <h3 className='mb-3 text-xl font-semibold'>
                    {service.title}
                  </h3>
                  <p className='text-default-600 mb-4'>{service.description}</p>
                  <ul className='space-y-2'>
                    {service.features.map((feature, featureIndex) => (
                      <li
                        className='flex items-center gap-2 text-sm'
                        key={featureIndex}
                      >
                        <Icon
                          className='text-success h-4 w-4'
                          icon='lucide:check'
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
