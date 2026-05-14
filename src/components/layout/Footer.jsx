import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-trust-blue flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-cormorant text-2xl text-ivory font-light">Residencial Iporá</span>
            </div>
            <p className="font-inter text-sm leading-relaxed text-ivory/60 mb-4 max-w-sm">
              Más de 4 años brindando cuidado íntimo y personalizado para adultos mayores en el corazón de Balneario Iporá, junto al parque natural protegido.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/59891064292?text=Hola%20Sonia%2C%20me%20interesa%20Residencial%20Iporá"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn px-5 py-2 rounded-full text-sm font-medium text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#25D366' }}
              >
                WhatsApp Sonia
              </a>
              <a
                href="https://wa.me/59898282938?text=Hola%20Nicolás%2C%20me%20interesa%20Residencial%20Iporá"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn px-5 py-2 rounded-full text-sm font-medium text-white flex items-center gap-2 hover:opacity-90 transition-opacity bg-navy border border-ivory/20"
              >
                WhatsApp Nicolás
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-cormorant text-ivory text-lg mb-4">Navegación</h4>
            <ul className="space-y-2">
              {[
                ['Inicio', '/'],
                ['Nosotros', '/nosotros'],
                ['Cómo Funciona', '/como-funciona'],
                ['Blog', '/blog'],
                ['Rivera Boutique', '/rivera'],
                ['Cuidado Mayor', '/cuidado-mayor'],
                ['Contacto', '/contacto'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="font-inter text-sm text-ivory/60 hover:text-ivory transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cormorant text-ivory text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-trust-blue mt-1 flex-shrink-0" />
                <span className="font-inter text-sm text-ivory/60">
                  Calle 9 y 18, Balneario Iporá,<br />Tacuarembó, Uruguay
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-trust-blue flex-shrink-0" />
                <a href="tel:+59891064292" className="font-inter text-sm text-ivory/60 hover:text-ivory transition-colors">
                  +598 91 064 292 (Sonia)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-trust-blue flex-shrink-0" />
                <a href="tel:+59898282938" className="font-inter text-sm text-ivory/60 hover:text-ivory transition-colors">
                  +598 98 282 938 (Nicolás)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-trust-blue flex-shrink-0" />
                <a href="mailto:contacto@residencialipora.com" className="font-inter text-sm text-ivory/60 hover:text-ivory transition-colors">
                  contacto@residencialipora.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-ivory/40">
            © {new Date().getFullYear()} Residencial Iporá — Todos los derechos reservados.
          </p>
          <p className="font-inter text-xs text-ivory/40">
            Cuidado con amor desde 2020 · Tacuarembó, Uruguay
          </p>
        </div>
      </div>
    </footer>
  );
}