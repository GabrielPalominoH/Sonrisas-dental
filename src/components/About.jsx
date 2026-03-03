import { Card, CardBody, Avatar, Progress } from "@heroui/react";
import { motion } from "framer-motion";
import { aboutContent } from "../data/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function About() {
  return (
    <section id="nosotros" className="pt-24 py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {aboutContent.title}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-none shadow-xl">
              <CardBody className="p-0">
                <img
                  src={aboutContent.image}
                  alt="Nuestro equipo"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {aboutContent.description}
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {aboutContent.features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-none shadow-md bg-white">
                    <CardBody className="p-4">
                      <Avatar
                        name={feature.title.charAt(0)}
                        className="mb-2"
                        color="primary"
                        size="sm"
                      />
                      <h4 className="font-semibold text-gray-800">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {feature.description}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
