import { MapPin, Phone, Clock } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div>
            <span className="text-primary tracking-widest uppercase text-sm font-semibold mb-2 block">Contacto</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 text-foreground">
              Encuéntranos
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Dirección</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Calle Reforma 1102-A<br />
                    Guadalajara, Jalisco<br />
                    México, C.P. 44100
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Reservaciones</h3>
                  <a href="tel:+523312345678" className="text-muted-foreground font-light hover:text-primary transition-colors">
                    +52 33 1234 5678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Horarios</h3>
                  <ul className="text-muted-foreground font-light space-y-1">
                    <li className="flex justify-between w-48">
                      <span>Lun - Jue:</span>
                      <span>13:00 - 22:00</span>
                    </li>
                    <li className="flex justify-between w-48">
                      <span>Vie - Sáb:</span>
                      <span>13:00 - 23:30</span>
                    </li>
                    <li className="flex justify-between w-48">
                      <span>Dom:</span>
                      <span>13:00 - 21:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto min-h-[400px] w-full rounded-sm overflow-hidden border border-border shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14932.327660237732!2d-103.35334639999999!3d20.666285499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1ed00b3952f%3A0xc48c08006e8ed663!2sReforma%201102A%2C%20Zona%20Centro%2C%2044100%20Guadalajara%2C%20Jal.!5e0!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
