import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80")' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary tracking-[0.2em] uppercase text-sm md:text-base font-semibold mb-4"
        >
          Benvenuti a casa
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight"
        >
          El verdadero sabor de <span className="italic font-light">Italia</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl"
        >
          Pastas artesanales, pizzas a la leña y una copa de vino en un ambiente acogedor y refinado en el corazón de Guadalajara.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="#reservations"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-center rounded-sm font-medium tracking-wide uppercase transition-colors text-sm"
          >
            Reserva tu mesa
          </a>
          <a 
            href="#menu"
            className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-4 text-center rounded-sm font-medium tracking-wide uppercase transition-colors text-sm"
          >
            Ver Menú
          </a>
        </motion.div>
      </div>
    </section>
  );
}
