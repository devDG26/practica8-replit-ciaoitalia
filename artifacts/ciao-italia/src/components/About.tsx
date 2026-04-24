import { motion } from "framer-motion";
import chefPastaImage from "@assets/generated_images/chef_pasta.png";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full max-w-md mx-auto relative z-10">
              <img 
                src={chefPastaImage} 
                alt="Chef preparando pasta artesanal" 
                className="w-full h-full object-cover rounded-sm shadow-xl"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/10 -z-10 rounded-sm hidden md:block" />
            <div className="absolute -top-8 -right-8 w-48 h-48 border-2 border-primary/20 -z-10 rounded-sm hidden md:block" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <span className="text-primary tracking-widest uppercase text-sm font-semibold mb-2 block">Nuestra Historia</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Tradición en cada plato
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
              <p>
                CIAO Italia nació de un deseo simple: traer la calidez de una verdadera trattoria italiana a las calles de Guadalajara. Creemos que la comida no es solo alimento, sino una experiencia que reúne a las personas que amamos.
              </p>
              <p>
                Nuestras recetas han pasado de generación en generación. Preparamos nuestra masa a mano todos los días, dejamos que fermente lentamente y la horneamos a la leña para lograr esa textura perfecta. Nuestras pastas son artesanales y nuestras salsas se cocinan a fuego lento durante horas.
              </p>
              <p>
                Ya sea que vengas por una cena romántica, una celebración en familia o simplemente por una copa de vino al final del día, aquí siempre serás bienvenido.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">Ingredientes</h3>
                <p className="text-sm text-muted-foreground">Frescos, locales y de origen italiano auténtico.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">Ambiente</h3>
                <p className="text-sm text-muted-foreground">Íntimo, cálido y refinado, perfecto para cualquier ocasión.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
