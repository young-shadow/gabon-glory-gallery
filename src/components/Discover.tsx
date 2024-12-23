import { motion } from "framer-motion";

const destinations = [
  {
    title: "Parc National de la Lopé",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    description: "Un sanctuaire naturel classé au patrimoine mondial de l'UNESCO"
  },
  {
    title: "Plages de Port-Gentil",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    description: "Des plages paradisiaques bordées de cocotiers"
  },
  {
    title: "Plateaux Batéké",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    description: "Des paysages savanes uniques et préservés"
  }
];

export const Discover = () => {
  return (
    <section className="section-padding bg-gabon-light">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gabon-text">
          Destinations Phares
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src={dest.image} 
                  alt={dest.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{dest.title}</h3>
                  <p className="text-white text-opacity-90">{dest.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};