import { useState } from "react";
import { Input, Textarea, Button, Modal, ModalContent, ModalBody } from "@heroui/react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormModalOpen(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contacto" className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden max-w-full mx-4"
          style={{ minHeight: '550px' }}
        >
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80"
            alt="Consultorio dental"
            className="absolute inset-0 w-full h-full object-cover zoom-out-animation"
          />
          <div className="absolute inset-0 bg-primary-900/50"></div>
          
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-8 text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Escríbenos tu consulta
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
                Atención rápida, cómoda y personalizada por profesionales con experiencia que utilizan tecnologías dentales modernas.
              </p>
              <Button
                color="primary"
                size="lg"
                className="font-semibold text-xl px-12"
                onPress={() => setIsFormModalOpen(true)}
              >
                Consulta
              </Button>
          </div>
        </motion.div>

        <Modal 
          isOpen={isFormModalOpen} 
          onClose={() => setIsFormModalOpen(false)} 
          size="2xl"
          centered
        >
          <ModalContent>
            <ModalBody className="py-8 px-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Escríbenos tu consulta
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  label="Nombre"
                  placeholder="Tu nombre completo"
                  variant="bordered"
                  classNames={{
                    inputWrapper: "border-gray-300 hover:border-primary-500",
                  }}
                />
                <Input
                  label="Correo electrónico"
                  placeholder="tu@email.com"
                  type="email"
                  variant="bordered"
                  classNames={{
                    inputWrapper: "border-gray-300 hover:border-primary-500",
                  }}
                />
                <Input
                  label="Teléfono"
                  placeholder="+51 999 999 999"
                  type="tel"
                  variant="bordered"
                  classNames={{
                    inputWrapper: "border-gray-300 hover:border-primary-500",
                  }}
                />
                <Textarea
                  label="Mensaje"
                  placeholder="¿En qué podemos ayudarte?"
                  variant="bordered"
                  minRows={4}
                  classNames={{
                    inputWrapper: "border-gray-300 hover:border-primary-500",
                  }}
                />
                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="bordered"
                    className="flex-1"
                    onPress={() => setIsFormModalOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    className="flex-1 font-semibold"
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal isOpen={isSubmitted} onClose={() => setIsSubmitted(false)} centered>
          <ModalContent>
            <ModalBody className="text-center py-10">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Solicitud enviada!</h3>
              <p className="text-gray-600">Nos pondremos en contacto contigo pronto.</p>
              <Button
                color="primary"
                className="mt-6 font-semibold"
                onPress={() => setIsSubmitted(false)}
              >
                Cerrar
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
}
