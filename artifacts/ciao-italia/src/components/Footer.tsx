import { SiInstagram, SiFacebook } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-wider mb-6">
          CIAO <span className="text-primary italic font-light">Italia</span>
        </h2>
        
        <p className="text-white/60 font-light text-center max-w-md mb-8">
          Un pedacito de Italia en el corazón de Guadalajara. Comida hecha con amor, servida en familia.
        </p>

        <div className="flex space-x-6 mb-12">
          <a href="#" className="text-white/60 hover:text-primary transition-colors p-2">
            <SiInstagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-white/60 hover:text-primary transition-colors p-2">
            <SiFacebook className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </a>
        </div>

        <div className="text-white/40 text-sm font-light text-center flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <p>&copy; {new Date().getFullYear()} CIAO Italia. Todos los derechos reservados.</p>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
}
