import { Card, CardBody, Image, Chip, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { servicesContent } from "../data/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <section id="servicios" className="pt-24 py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {servicesContent.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            {servicesContent.subtitle}
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesContent.services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Card
                isPressable
                className="border-none shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <CardBody className="p-0 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`Tratamiento dental de ${service.title} en Clínica Dental Sonrisa Perfecta`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Chip color="primary" variant="solid" className="text-2xl">
                        {service.icon}
                      </Chip>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Button
                      variant="light"
                      color="primary"
                      className="font-semibold"
                    >
                      Ver más
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
