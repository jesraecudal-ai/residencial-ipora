import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Star, Users, MapPin, Phone } from 'lucide-react';

function RevealSection({ children, delay = 0 }) {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className="section-reveal">{children}</div>;
}

export default function CuidadoMayor() {
  return (
    <div className="bg-sanctuary min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-sanctuary">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <span className="font-inter text-sm text-trust-blue uppercase tracking-widest block mb-4">Guía completa</span>
          <h1 className="font-cormorant text-5xl md:text-7xl text-navy font-light mb-6">
            Cuidado de adultos mayores en Uruguay
          </h1>
          <p className="font-inter text-slate-mist text-lg max-w-2xl mx-auto leading-relaxed">
            Todo lo que necesitás saber sobre el cuidado profesional de adultos mayores en Uruguay: opciones, costos, criterios de elección y cómo garantizar el bienestar de tu familiar.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-cormorant text-3xl text-navy font-light mb-4">¿Qué es un residencial de adultos mayores?</h2>
              <p className="font-inter text-slate-mist leading-relaxed mb-6">
                Un residencial de adultos mayores es un hogar especializado que ofrece cuidado continuo, alimentación, acompañamiento médico y actividades sociales para personas en la tercera edad que necesitan apoyo profesional. A diferencia de los grandes geriátricos institucionales, los residenciales boutique como Residencial Iporá priorizan la atención personalizada, el entorno familiar y el bienestar integral de cada residente.
              </p>

              <h2 className="font-cormorant text-3xl text-navy font-light mb-4">El cuidado de adultos mayores en Uruguay: contexto y realidad</h2>
              <p className="font-inter text-slate-mist leading-relaxed mb-6">
                Uruguay es uno de los países más envejecidos de América Latina. Según datos del Instituto Nacional de Estadística, más del 19% de la población uruguaya tiene 60 años o más, una proporción que sigue creciendo. Esta realidad demográfica genera una demanda creciente de servicios de cuidado de calidad que el mercado tradicional aún no satisface plenamente.
              </p>
              <p className="font-inter text-slate-mist leading-relaxed mb-6">
                La mayoría de las familias uruguayas enfrenta una decisión difícil: cuidar al familiar en casa — con los costos emocionales y económicos que eso implica — o buscar un residencial que pueda brindar la atención profesional que el adulto mayor merece. La clave está en encontrar un lugar que combine calidez humana con rigor profesional.
              </p>

              <h2 className="font-cormorant text-3xl text-navy font-light mb-4">Qué incluye un cuidado de calidad</h2>
              <p className="font-inter text-slate-mist leading-relaxed mb-4">
                Un servicio de cuidado de adultos mayores de alta calidad debe incluir, como mínimo, los siguientes elementos:
              </p>
              <ul className="font-inter text-slate-mist space-y-2 mb-6 pl-5 list-disc">
                <li><strong className="text-navy">Cuidado continuo 24 horas:</strong> Presencia permanente de cuidadores capacitados, no solo durante el día.</li>
                <li><strong className="text-navy">Atención médica regular:</strong> Visitas periódicas de médico para seguimiento de salud, no solo ante emergencias.</li>
                <li><strong className="text-navy">Nutrición planificada:</strong> Menús diseñados con asesoramiento de nutricionista, adaptados a las necesidades individuales.</li>
                <li><strong className="text-navy">Estimulación cognitiva y social:</strong> Actividades que mantienen la mente activa y previenen el aislamiento.</li>
                <li><strong className="text-navy">Trabajador social:</strong> Seguimiento del bienestar emocional y familiar del residente.</li>
                <li><strong className="text-navy">Comunicación con la familia:</strong> Información regular y transparente sobre el estado del residente.</li>
              </ul>

              <h2 className="font-cormorant text-3xl text-navy font-light mb-4">Residencial Iporá: un modelo diferente en Uruguay</h2>
              <p className="font-inter text-slate-mist leading-relaxed mb-6">
                Residencial Iporá nació hace más de cuatro años en Balneario Iporá, Tacuarembó, con una filosofía clara: el cuidado de adultos mayores debe parecerse más a un hogar que a una institución. El residencial mantiene un número reducido de residentes para garantizar una atención genuinamente personalizada. Cada persona que vive en Iporá es conocida por su nombre, por su historia y por sus preferencias.
              </p>
              <p className="font-inter text-slate-mist leading-relaxed mb-6">
                La fundadora Sonia Sanguinet lleva más de una década dedicada al cuidado de adultos mayores, no por necesidad sino por vocación. Junto a Nicolás Macedo, construyeron un modelo que las familias uruguayas eligen porque confían en los resultados — no en las promesas. El entorno natural único de Balneario Iporá, junto al parque natural protegido, añade un componente terapéutico que los grandes geriátricos urbanos no pueden replicar.
              </p>

              <h2 className="font-cormorant text-3xl text-navy font-light mb-4">Iporá Boutique: el futuro del cuidado premium en Uruguay</h2>
              <p className="font-inter text-slate-mist leading-relaxed mb-6">
                En 2026, Residencial Iporá lanza Iporá Boutique, un nuevo proyecto de cuidado exclusivo en Rivera y Punta del Este, Uruguay. Diseñado para familias que exigen lo mejor, Iporá Boutique combina el modelo probado de Iporá con una propuesta de máxima privacidad, ratio de atención excepcional y servicios completos incluidos desde el primer día.
              </p>
              <p className="font-inter text-slate-mist leading-relaxed mb-8">
                Las pre-reservas para la apertura del 1 de agosto de 2026 ya están abiertas. Los cupos son estrictamente limitados por diseño — no por capacidad. Cada residente merece atención real, no masificada.
              </p>
            </div>
          </RevealSection>

          {/* Key Points Grid */}
          <RevealSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              {[
                { icon: Heart, title: '4+ años de trayectoria', text: 'Operando con excelencia en Tacuarembó desde 2021.' },
                { icon: Shield, title: 'Modelo transparente', text: 'Precio único que incluye todo lo esencial. Sin sorpresas.' },
                { icon: Users, title: 'Pocos residentes', text: 'Número reducido para garantizar atención verdaderamente personalizada.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 text-center">
                  <div className="w-10 h-10 rounded-xl bg-trust-blue/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-trust-blue" />
                  </div>
                  <h3 className="font-cormorant text-lg text-navy mb-2">{item.title}</h3>
                  <p className="font-inter text-sm text-slate-mist">{item.text}</p>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* CTA */}
          <RevealSection delay={150}>
            <div className="bg-navy rounded-3xl p-8 text-center">
              <h2 className="font-cormorant text-3xl text-ivory font-light mb-3">¿Buscás cuidado para tu familiar?</h2>
              <p className="font-inter text-ivory/60 text-sm mb-6 max-w-lg mx-auto">
                Hablá con Sonia o Nicolás. Una conversación honesta, sin presiones, para entender si Residencial Iporá es la opción correcta para tu familia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/59891064292?text=Hola%20Sonia%2C%20quisiera%20información%20sobre%20Residencial%20Iporá"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn px-7 py-3 rounded-full font-inter font-medium text-white text-sm inline-flex items-center gap-2 justify-center hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <Phone className="w-4 h-4" /> Hablar con Sonia
                </a>
                <Link
                  to="/contacto"
                  className="cta-btn px-7 py-3 rounded-full font-inter font-medium text-white border border-white/30 text-sm text-center hover:bg-white/10 transition-all"
                >
                  Ir a contacto →
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}