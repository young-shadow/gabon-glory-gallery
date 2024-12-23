import { motion } from "framer-motion";

export const Culture = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gabon-text">
              Culture & Traditions
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              Le Gabon est riche d'une diversité culturelle exceptionnelle, avec plus de 40 ethnies 
              qui perpétuent leurs traditions ancestrales. Des masques sacrés aux danses traditionnelles, 
              découvrez un patrimoine culturel unique.
            </p>
            <button className="bg-gabon-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
              En savoir plus
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3]"
          >
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Culture gabonaise"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};