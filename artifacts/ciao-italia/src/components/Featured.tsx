import { motion } from "framer-motion";
import { menuData, MenuItem as MenuItemType } from "../data/menuData";

export function Featured() {
  // Extract featured items
  const featuredItems = [
    ...menuData.pastas.filter(item => item.featured),
    ...menuData.pizzas.filter(item => item.featured),
    ...menuData.ensaladas.filter(item => item.featured)
  ].slice(0, 3); // Take top 3

  return (
    <section id="featured" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary tracking-widest uppercase text-sm font-semibold mb-2 block">Selección Especial</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Los Favoritos de la Casa
          </h2>
          <p className="text-muted-foreground font-light">
            Platos elaborados con pasión y los ingredientes más frescos, seleccionados por nuestro chef para brindar una experiencia inolvidable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-sm mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white drop-shadow-md">{item.name}</h3>
                  </div>
                  {item.price && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-sm text-sm font-bold shadow-md">
                      ${item.price}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
