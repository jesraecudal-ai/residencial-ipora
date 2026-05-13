import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Heart, Star, MapPin, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { number: '4+', label: 'Años de cuidado' },
  { number: '100%', label: 'Atención personalizada' },
  { number: '24/7', label: 'Presencia continua' },
  { number: '🌿', label: 'Parque natural protegido' },
];

const services = [
  { icon: Shield, title: 'Seguridad Continua', desc: 'Acompañamiento las 24 horas del día, los 365 días del año. Nunca están solos.' },
  { icon: Heart, title: 'Cuidado Familiar', desc: 'Un hogar íntimo, no una institución. Pocos residentes para atención verdaderamente personalizada.' },
  { icon: Star, title: 'Entorno Natural', desc: 'Ubicado junto al parque natural protegido de Balneario Iporá. Aire puro y paz.' },
  { icon: MapPin, title: 'Vida Simple y Digna', desc: 'Filosofía de vida tranquila, comidas nutritivas y actividades pensadas para el bienestar.' },
];

const testimonials = [
  {
    text: '"Desde que papá llegó a Residencial Iporá, está más tranquilo y feliz. El trato de Sonia y Nicolás es único."',
    author: 'Familia Rodríguez, Montevideo',
  },
  {
    text: '"Encontrar un lugar así en Uruguay es raro. Cuidan a mamá como si fuera propia. Estamos eternamente agradecidos."',
    author: 'Familia Martínez, Tacuarembó',
  },
];

function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`section-reveal ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8000ms] ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1800&q=80')`,
            animation: 'slowZoom 12s ease-out forwards',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

        <style>{`
          @keyframes slowZoom {
            from { transform: scale(1.05); }
            to { transform: scale(1.0); }
          }
        `}</style>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="slide-in-left">
            <span className="font-inter text-sm text-white/70 uppercase tracking-widest mb-4 block">
              Balneario Iporá · Tacuarembó · Uruguay
            </span>
            <h1 className="font-cormorant text-5xl md:text-7xl text-white font-light leading-tight mb-6">
              El hogar que<br />
              <em className="italic text-blue-300">merecen vivir</em>
            </h1>
            <p className="font-inter text-lg text-white/80 leading-relaxed mb-8 max-w-md">
              Más de 4 años cuidando adultos mayores con amor, respeto y dedicación. Un hogar íntimo junto al parque natural protegido de Iporá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/59891064292?text=Hola%20Sonia%2C%20quiero%20conocer%20Residencial%20Iporá"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn px-8 py-4 rounded-full font-inter font-medium text-white text-center hover:shadow-2xl hover:scale-105 transition-all"
                style={{ backgroundColor: '#25D366' }}
              >
                Hablar con Sonia →
              </a>
              <Link
                to="/como-funciona"
                className="cta-btn px-8 py-4 rounded-full font-inter font-medium text-white border border-white/40 text-center hover:bg-white/10 transition-all"
              >
                Cómo funciona
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="fade-in-up hidden md:block" style={{ animationDelay: '0.4s' }}>
            <div className="glass-header rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-cormorant text-4xl text-navy font-light mb-1">{s.number}</div>
                    <div className="font-inter text-xs text-slate-mist uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IPOR Á */}
      <section className="py-24 bg-sanctuary">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="font-inter text-sm text-trust-blue uppercase tracking-widest block mb-3">Por qué elegirnos</span>
              <h2 className="font-cormorant text-4xl md:text-6xl text-navy font-light mb-4">
                Un hogar, no una institución
              </h2>
              <p className="font-inter text-slate-mist max-w-2xl mx-auto">
                En Residencial Iporá creemos que cada adulto mayor merece vivir con dignidad, en un entorno familiar y lleno de naturaleza.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <RevealSection key={s.title} delay={i * 100}>
                <div className="hover-lift bg-white rounded-2xl p-8 border border-slate-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-trust-blue/10 flex items-center justify-center mb-5">
                    <s.icon className="w-6 h-6 text-trust-blue" />
                  </div>
                  <h3 className="font-cormorant text-xl text-navy mb-3">{s.title}</h3>
                  <p className="font-inter text-sm text-slate-mist leading-relaxed">{s.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY — fotos reales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-10">
              <span className="font-inter text-sm text-trust-blue uppercase tracking-widest block mb-3">Nuestro hogar</span>
              <h2 className="font-cormorant text-4xl md:text-5xl text-navy font-light">
                Así es Residencial Iporá
              </h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { url: 'https://media.base44.com/images/public/6a050510a0e721e56d922807/b1c3526d8_WhatsAppImage2026-05-13at203908.jpg', alt: 'Frente de Residencial Iporá con cartel y jardín en Tacuarembó', large: true },
              { url: 'https://media.base44.com/images/public/6a050510a0e721e56d922807/5eb7c680e_WhatsAppImage2026-05-13at2039081.jpg', alt: 'Jardín y entrada de Residencial Iporá, Balneario Iporá' },
              { url: 'https://media.base44.com/images/public/6a050510a0e721e56d922807/9ffb326cd_WhatsAppImage2026-05-13at2039091.jpg', alt: 'Galería y patio exterior con plantas en Residencial Iporá' },
              { url: 'https://media.base44.com/images/public/6a050510a0e721e56d922807/2400dd1d8_WhatsAppImage2026-05-13at2039082.jpg', alt: 'Vista del jardín con árboles nativos, Residencial Iporá' },
              { url: 'https://media.base44.com/images/public/6a050510a0e721e56d922807/6f059361f_WhatsAppImage2026-05-13at203909.jpg', alt: 'Entrada principal de Residencial Iporá con horarios de visita' },
              { url: 'https://media.base44.com/images/public/6a050510a0e721e56d922807/1657e7b96_WhatsAppImage2026-05-13at2011171.jpg', alt: 'Residentes compartiendo una comida en el comedor de Residencial Iporá, vida simple y familiar' },
            ].map((photo, i) => (
              <RevealSection key={i} delay={i * 80} className={photo.large ? 'md:col-span-2 md:row-span-1' : ''}>
                <div className={`overflow-hidden rounded-2xl group ${photo.large ? 'h-64 md:h-80' : 'h-52 md:h-64'}`}>
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-sanctuary">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-14">
              <span className="font-inter text-sm text-trust-blue uppercase tracking-widest block mb-3">Testimonios</span>
              <h2 className="font-cormorant text-4xl md:text-5xl text-navy font-light">
                Lo que dicen las familias
              </h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <RevealSection key={i} delay={i * 150}>
                <div className="hover-lift bg-white rounded-2xl p-8 border border-slate-100">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-champagne fill-champagne" />)}
                  </div>
                  <p className="font-cormorant text-xl text-navy leading-relaxed italic mb-5">{t.text}</p>
                  <p className="font-inter text-sm text-slate-mist">{t.author}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION HOOK */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #2563EB 0%, transparent 70%)'
        }} aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-5 md:px-10 text-center relative z-10">
          <RevealSection>
            <MapPin className="w-10 h-10 text-trust-blue mx-auto mb-5" />
            <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light mb-4">
              Junto al parque natural protegido
            </h2>
            <p className="font-inter text-ivory/60 max-w-2xl mx-auto mb-8">
              Calle 9 y 18, Balneario Iporá, Tacuarembó, Uruguay. Un entorno de paz y naturaleza que favorece el bienestar físico y emocional de quienes más amamos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/59891064292?text=Hola%20Sonia%2C%20me%20gustaría%20visitar%20el%20residencial"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn px-8 py-4 rounded-full font-inter font-medium text-white text-center hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#25D366' }}
              >
                Agendar una visita
              </a>
              <Link
                to="/nosotros"
                className="cta-btn px-8 py-4 rounded-full font-inter font-medium text-white border border-white/30 text-center hover:bg-white/10 transition-all"
              >
                Conocer más →
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* RIVERA PROMO */}
      <section className="py-20 bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(ellipse at 70% 50%, #D4AF37 0%, transparent 60%)'
        }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <RevealSection>
            <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Próximamente · Agosto 2026</span>
            <h2 className="font-cormorant text-4xl md:text-6xl text-ivory font-light leading-tight mb-5">
              Residencial Boutique<br /><em className="text-champagne italic">Rivera</em>
            </h2>
            <p className="font-inter text-ivory/60 mb-8 leading-relaxed">
              Una experiencia de cuidado absolutamente exclusiva. Pocos lugares disponibles. Reserva tu espacio con una seña del 50% y asegura el mejor cuidado premium para tu ser querido.
            </p>
            <Link
              to="/rivera"
              className="cta-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all"
            >
              Ver el proyecto <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealSection>
          <RevealSection delay={200}>
            <div className="border border-champagne/30 rounded-3xl p-8 glass-dark">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                <span className="font-inter text-champagne text-sm">Pre-reservas abiertas</span>
              </div>
              {['Cuidado 24h con 2 cuidadores por turno', 'Nutricionista y médico incluidos', 'Visitas de trabajador social', 'Actividades sociales personalizadas', 'Máximo de residentes por boutique'].map((item) => (
                <div key={item} className="flex items-center gap-3 py-2 border-b border-champagne/10 last:border-0">
                  <CheckCircle className="w-4 h-4 text-champagne flex-shrink-0" />
                  <span className="font-inter text-ivory/70 text-sm">{item}</span>
                </div>
              ))}
              <p className="font-inter text-champagne/60 text-xs mt-4 italic">Precio disponible bajo consulta · USD 4.000+/mes</p>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}