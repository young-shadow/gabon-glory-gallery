import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="section-padding bg-gabon-primary text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Planifiez Votre Voyage
          </h2>
          <p className="text-lg mb-8 text-white text-opacity-90">
            Nous sommes là pour vous aider à organiser votre séjour au Gabon.
            Contactez-nous pour plus d'informations.
          </p>
          <button className="bg-white text-gabon-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
            Nous Contacter
          </button>
        </motion.div>
      </div>
    </section>
  );
};