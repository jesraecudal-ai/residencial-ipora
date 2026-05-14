import { useEffect, useRef } from 'react';
import { Heart, Leaf, Users, Award } from 'lucide-react';

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

const values = [
  { icon: Heart, title: 'Amor y Dignidad', desc: 'Tratamos a cada residente como un miembro de nuestra propia familia, con profundo respeto y afecto.' },
  { icon: Leaf, title: 'Vida Simple', desc: 'Creemos en la belleza de lo cotidiano: buena comida, aire fresco, conversaciones y descanso.' },
  { icon: Users, title: 'Comunidad Íntima', desc: 'Pocos residentes para garantizar una atención real, personalizada y de calidad.' },
  { icon: Award, title: 'Experiencia Probada', desc: 'Más de 4 años de cuidado continuo con familias que confían en nosotros cada día.' },
];

export default function Nosotros() {
  return (
    <div className="bg-sanctuary min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80')` }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-5 md:px-10 text-center">
          <span className="font-inter text-sm text-trust-blue uppercase tracking-widest block mb-4">Nuestra historia</span>
          <h1 className="font-cormorant text-5xl md:text-7xl text-navy font-light mb-6">
            Quiénes somos
          </h1>
          <p className="font-inter text-slate-mist text-lg max-w-3xl mx-auto leading-relaxed">
            Residencial Iporá nació de una convicción profunda: que los adultos mayores merecen vivir sus últimos años con alegría, comodidad y amor genuino. Somos Sonia y Nicolás, y esto es nuestra misión de vida.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <RevealSection>
              <div className="relative">
                <div className="bg-trust-blue/10 rounded-3xl overflow-hidden aspect-[4/3]">
                  <img
                    src="https://media.base44.com/images/public/6a050510a0e721e56d922807/2dd2cf6c7_Screenshot2026-05-13at94936PM.png"
                    alt="Sonia Sanguinet, fundadora de Residencial Iporá, en entorno natural"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-6 py-4 shadow-xl border border-slate-100">
                  <p className="font-cormorant text-xl text-navy">Sonia Sanguinet</p>
                  <p className="font-inter text-xs text-trust-blue uppercase tracking-wide">Fundadora</p>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <span className="font-inter text-sm text-trust-blue uppercase tracking-widest block mb-4">Fundadora</span>
              <h2 className="font-cormorant text-4xl md:text-5xl text-navy font-light mb-6">
                Sonia Sanguinet
              </h2>
              <p className="font-inter text-slate-mist leading-relaxed mb-4">
                Con más de una década de vocación en el cuidado de adultos mayores, Sonia fundó Residencial Iporá con la visión de crear un espacio donde los mayores no sintieran que "están en una residencia", sino en un hogar verdadero.
              </p>
              <p className="font-inter text-slate-mist leading-relaxed mb-6">
                Su filosofía es simple pero poderosa: escuchar, acompañar y amar. Cada residente tiene una historia única, y Sonia se asegura de que esa historia sea honrada cada día.
              </p>
              <a
                href="https://wa.me/59891064292?text=Hola%20Sonia%2C%20me%20gustaría%20conocer%20más%20sobre%20el%20residencial"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-inter font-medium text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#25D366' }}
              >
                Hablar con Sonia
              </a>
            </RevealSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <RevealSection delay={100} className="md:order-2">
              <div className="relative">
                <div className="bg-navy/5 rounded-3xl overflow-hidden aspect-[4/3]">
                  <img
                    src="https://media.base44.com/images/public/6a050510a0e721e56d922807/348437edc_WhatsAppImage2026-05-13at203346.jpeg"
                    alt="Nicolás Macedo, co-fundador de Residencial Iporá"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-6 py-4 shadow-xl border border-slate-100">
                  <p className="font-cormorant text-xl text-navy">Nicolás Macedo</p>
                  <p className="font-inter text-xs text-trust-blue uppercase tracking-wide">Co-Fundador</p>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200} className="md:order-1">
              <span className="font-inter text-sm text-trust-blue uppercase tracking-widest block mb-4">Co-Fundador</span>
              <h2 className="font-cormorant text-4xl md:text-5xl text-navy font-light mb-6">
                Nicolás Macedo
              </h2>
              <p className="font-inter text-slate-mist leading-relaxed mb-4">
                Nicolás se une a la visión de Sonia aportando organización, energía y un profundo compromiso con el bienestar de cada residente. Su rol es garantizar que el hogar funcione con excelencia día a día.
              </p>
              <p className="font-inter text-slate-mist leading-relaxed mb-6">
                Apasionado por la naturaleza y el entorno de Balneario Iporá, Nicolás cree que el ambiente físico es tan importante como el cuidado humano.
              </p>
              <a
                href="https://wa.me/59898282938?text=Hola%20Nicolás%2C%20me%20gustaría%20conocer%20más%20sobre%20el%20residencial"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-inter font-medium text-navy border-2 border-navy hover:bg-navy hover:text-white transition-all"
              >
                Hablar con Nicolás
              </a>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-14">
              <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light mb-4">Nuestros valores</h2>
              <p className="font-inter text-ivory/60 max-w-xl mx-auto">Los principios que guían cada decisión en Residencial Iporá.</p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <RevealSection key={v.title} delay={i * 100}>
                <div className="border border-ivory/10 rounded-2xl p-7 hover:border-trust-blue/40 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-trust-blue/20 flex items-center justify-center mb-5">
                    <v.icon className="w-6 h-6 text-trust-blue" />
                  </div>
                  <h3 className="font-cormorant text-xl text-ivory mb-3">{v.title}</h3>
                  <p className="font-inter text-ivory/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-sanctuary">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <RevealSection>
            <h2 className="font-cormorant text-4xl text-navy font-light mb-5">Nuestro entorno natural</h2>
            <p className="font-inter text-slate-mist leading-relaxed mb-8">
              Estamos ubicados en Calle 9 y 18, Balneario Iporá, Tacuarembó — un rincón privilegiado de Uruguay, junto al parque natural protegido. El aire limpio, los árboles y el silencio de la naturaleza son parte integral de nuestra terapia.
            </p>
            <div className="rounded-3xl overflow-hidden h-96">
              <iframe
                src="https://maps.google.com/maps?q=Calle+9+y+18,+Balneario+Iporá,+Tacuarembó,+Uruguay&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Residencial Iporá"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/R7TqxSC4L49tibKe8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 font-inter text-sm text-trust-blue hover:underline"
            >
              Ver en Google Maps →
            </a>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}