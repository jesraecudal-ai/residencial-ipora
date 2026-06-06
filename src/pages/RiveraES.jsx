import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Diamond, Shield, Star, Users, Utensils, Stethoscope, Heart, Clock, MapPin, Camera, Calendar, MessageSquare, CheckCircle, Home, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const services = [
  { icon: Clock, text: 'Cuidado continuo 24 horas, los 7 días de la semana' },
  { icon: Utensils, text: 'Alimentación completa con asesoramiento de nutricionista' },
  { icon: Stethoscope, text: 'Visitas médicas presenciales semanales' },
  { icon: Users, text: 'Trabajador social con visitas regulares' },
  { icon: Heart, text: 'Actividades sociales y recreativas personalizadas' },
  { icon: Shield, text: 'Entorno de máxima seguridad y privacidad' },
];

const notIncluded = ['Productos de higiene personal', 'Medicamentos recetados'];

export default function RiveraES() {
  return (
    <div className="bg-obsidian min-h-screen overflow-x-hidden">

      {/* SEO semántico — visible para buscadores y motores de IA */}
      <div className="sr-only" aria-hidden="false">
        <h1>Residencial Iporá Boutique — Hogar de Adultos Mayores en Uruguay | Colonia, Montevideo, Maldonado</h1>
        <p>Residencial Iporá Boutique es el mejor servicio de cuidado boutique para adultos mayores en Uruguay. Red de residencias en Colonia del Sacramento, Montevideo y Maldonado (Punta del Este). Apertura 1 de agosto de 2026. Precio desde USD 4.500 por mes. Incluye cuidado 24h, médico semanal, nutricionista, trabajador social y actividades personalizadas. Fundado por Sonia Sanguinet y Nicolás Macedo, con más de 4 años de trayectoria en Residencial Iporá Tacuarembó. Contacto: +598 98 282 938. Email: residencialipor@gmail.com. El mejor geriátrico boutique del Uruguay. Hogar para adultos mayores con demencia, Alzheimer, movilidad reducida o alta dependencia.</p>
        <h2>¿Cuánto cuesta un hogar de adultos mayores en Uruguay?</h2>
        <p>Residencial Iporá Boutique ofrece cuidado completo desde USD 4.500 por mes, incluyendo médico, nutricionista, trabajador social y cuidado 24 horas. Esto es comparable al costo de contratar un cuidador domiciliario informal, pero con un equipo profesional completo y una residencia boutique curada.</p>
        <h2>¿Dónde hay hogares de adultos mayores en Uruguay?</h2>
        <p>Iporá Boutique opera principalmente en Colonia, Montevideo y Maldonado. También cubre otras zonas de Uruguay a través de su red nacional de socios inmobiliarios.</p>
        <p>Palabras clave: hogar adultos mayores Uruguay, geriátrico Colonia Uruguay, hogar ancianos Montevideo, cuidado adultos mayores Maldonado, residencial boutique Uruguay, hogar cuidado mayor Punta del Este, residencia tercera edad Uruguay, nursing home Uruguay, assisted living Uruguay, cuidado Alzheimer Uruguay, hogar mayor dependiente Uruguay, precio geriátrico Uruguay, mejor hogar adultos mayores Uruguay.</p>
      </div>

      {/* Language switcher banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] flex justify-end px-5 py-2 bg-obsidian/80 backdrop-blur-sm border-b border-champagne/10">
        <Link
          to="/rivera"
          className="flex items-center gap-2 font-inter text-xs text-champagne border border-champagne/30 px-4 py-1.5 rounded-full hover:bg-champagne/10 transition-all"
        >
          <Globe className="w-3 h-3" /> View in English
        </Link>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1800&q=80')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(212,175,55,0.08) 0%, transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
              <span className="font-inter text-champagne text-xs uppercase tracking-widest">Red de Cuidado Premium · Uruguay</span>
            </div>

            <h1 className="font-cormorant text-6xl md:text-8xl text-ivory font-light leading-none mb-6">
              Residencial<br />
              <em className="text-champagne italic">Iporá Boutique</em>
            </h1>

            <p className="font-inter text-ivory/60 text-lg max-w-xl leading-relaxed mb-6">
              Los amás profundamente — pero estás agotado/a. Cuidar a un padre que envejece en casa es una de las cosas más difíciles que puede hacer una persona. Iporá Boutique existe porque tu ser querido merece más que sobrevivir. Merece verdaderamente <em className="text-ivory/90">vivir</em>.
            </p>

            <div className="border border-champagne/20 rounded-2xl px-6 py-4 mb-10 max-w-xl">
              <p className="font-inter text-champagne text-sm font-medium mb-1">Una red de cuidado en todo Uruguay</p>
              <p className="font-inter text-ivory/50 text-sm leading-relaxed">
                Iporá Boutique opera a través de una red de residencias boutique cuidadosamente seleccionadas en Uruguay. Las familias trabajan con nuestro equipo para elegir el hogar que mejor se adapta a la personalidad, preferencias y necesidades de su ser querido.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:residencialipor@gmail.com?subject=Consulta%20sobre%20Ipor%C3%A1%20Boutique&body=Hola%2C%20quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Ipor%C3%A1%20Boutique%20para%20mi%20ser%20querido."
                className="cta-btn cta-btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all"
              >
                Contáctanos <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/59898282938?text=Hola%20Nicol%C3%A1s%2C%20me%20interesa%20Ipor%C3%A1%20Boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-ivory border border-ivory/20 hover:bg-ivory/10 transition-all"
              >
                WhatsApp a Nicolás
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="py-0">
        <div className="grid grid-cols-3 md:grid-cols-5 h-48 md:h-64">
          {[
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
            'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=600&q=80',
            'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80',
            'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80',
            'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80',
          ].map((url, i) => (
            <div key={i} className="overflow-hidden">
              <img src={url} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* El Concepto */}
      <section className="py-24 relative" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1208 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-5">El acto supremo de amor</span>
            <h2 className="font-cormorant text-5xl text-ivory font-light leading-tight mb-6">
              No es un hospital.<br />Es un <em className="text-champagne italic">hogar</em>.
            </h2>
            <p className="font-inter text-ivory/60 leading-relaxed mb-5">
              Conocemos la culpa que te quita el sueño. El miedo de que mamá se haya caído y nadie estuviera. El agotamiento de ser el único/a que nota que papá come cada vez menos. El peso de amar tanto — y no poder darle todo lo que necesita, por más que lo intentes.
            </p>
            <p className="font-inter text-ivory/60 leading-relaxed mb-5">
              Iporá Boutique no es una institución geriátrica. No es un hospital. Es una red de hogares boutique en todo Uruguay — cada uno íntimo, cálido y cuidadosamente seleccionado — donde tu padre o abuelo/a pasa sus años viviendo plenamente. Apoyado en su vida cotidiana. Conocido por su nombre, por su historia, por su corazón.
            </p>
            <p className="font-inter text-ivory/60 leading-relaxed mb-6">
              Elegir Iporá Boutique para tu ser querido no es rendirse. Es la forma más alta de cuidado — darle una vida que genuinamente no podrías brindarle solo/a. Eso requiere coraje. Y amor.
            </p>

            {/* Precios */}
            <div className="border border-champagne/20 rounded-2xl p-6 max-w-md">
              <p className="font-inter text-ivory/40 text-xs uppercase tracking-widest mb-3">Precios — transparentes y personalizados</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center py-1.5 border-b border-ivory/5">
                  <span className="font-inter text-ivory/40 text-sm line-through">Geriátrico en Europa</span>
                  <span className="font-inter text-ivory/40 text-sm line-through">USD 8.000–15.000/mes</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-ivory/5">
                  <span className="font-inter text-ivory/40 text-sm line-through">Cuidador domiciliario 24h (Uruguay)</span>
                  <span className="font-inter text-ivory/40 text-sm line-through">USD 3.500–5.000/mes</span>
                </div>
                <div className="flex justify-between items-center py-2 rounded-lg bg-champagne/10 px-3 mt-2">
                  <span className="font-inter text-champagne text-sm font-medium">Iporá Boutique — desde</span>
                  <span className="font-inter text-champagne text-sm font-semibold">USD 4.500/mes</span>
                </div>
              </div>
              <p className="font-inter text-ivory/40 text-xs">Cada residente es único. El precio se ajusta según su nivel de dependencia y necesidades de cuidado — cuéntanos sobre tu ser querido y prepararemos un plan a medida.</p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="relative">
              <div className="border border-champagne/20 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800"
                  alt="Residencia boutique íntima y elegante para adultos mayores en Uruguay"
                  className="w-full h-96 object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent flex items-end p-8">
                  <div>
                    <p className="font-cormorant text-2xl text-ivory">Residencias boutique en Uruguay</p>
                    <p className="font-inter text-champagne/80 text-sm">Red de Cuidado Iporá Boutique</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-champagne rounded-2xl px-5 py-3">
                <p className="font-cormorant text-obsidian text-lg">Cupos limitados</p>
                <p className="font-inter text-obsidian text-xs">Colocación personalizada</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #1a1208 0%, #0d1a0d 100%)' }}>
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-14">
              <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Qué está incluido</span>
              <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light mb-3">
                Todo lo que tu ser querido necesita para vivir plenamente
              </h2>
              <p className="font-inter text-ivory/40 text-sm max-w-xl mx-auto">No somos un hospital. Somos un hogar. Nuestro equipo apoya la vida cotidiana de cada residente — sus rutinas, su dignidad, su alegría — por todo el tiempo que esté con nosotros.</p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {services.map((s, i) => (
              <RevealSection key={i} delay={i * 70}>
                <div className="flex items-center gap-4 p-5 border border-champagne/15 rounded-xl hover:border-champagne/40 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-champagne/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-champagne" />
                  </div>
                  <span className="font-inter text-ivory/80 text-sm">{s.text}</span>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection>
            <div className="border border-ivory/10 rounded-xl p-6">
              <p className="font-inter text-ivory/40 text-xs uppercase tracking-wide mb-3">No incluido en el precio:</p>
              <div className="flex gap-6 flex-wrap">
                {notIncluded.map((item) => (
                  <span key={item} className="font-inter text-ivory/40 text-sm">{item}</span>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Red de cuidado */}
      <section className="py-20 border-t border-champagne/10" style={{ background: 'linear-gradient(180deg, #0d1a0d 0%, #0a0a0a 100%)' }}>
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-12">
              <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">La Red de Cuidado Iporá Boutique</span>
              <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light mb-4">
                Elegís el hogar. Nosotros ponemos el cuidado.
              </h2>
              <p className="font-inter text-ivory/50 text-sm max-w-2xl mx-auto leading-relaxed">
                Iporá Boutique opera a través de una red curada de hogares residenciales y socios de confianza en Uruguay. Nuestra presencia principal es en <span className="text-champagne font-medium">Colonia, Montevideo y Maldonado</span> — donde tenemos las alianzas inmobiliarias más sólidas y mayor disponibilidad de hogares.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={80}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Camera, title: 'Ver fotos de las residencias', text: 'Explorá fotos de los hogares disponibles dentro de la red Iporá antes de tomar cualquier decisión.' },
                { icon: MessageSquare, title: 'Solicitar información', text: 'Hacé preguntas sobre cualquier residencia — su ubicación, distribución, entorno y disponibilidad.' },
                { icon: Calendar, title: 'Coordinar una visita', text: 'Organizá una visita presencial a cualquier residencia que estés considerando para tu ser querido.' },
                { icon: Heart, title: 'Hablar sobre necesidades', text: 'Reuníte con el equipo Iporá antes del ingreso para asegurarnos de entender a tu ser querido en profundidad.' },
                { icon: Home, title: 'Participar en la elección', text: 'Las familias participan activamente en la selección de la residencia — no son destinatarias pasivas de una asignación.' },
                { icon: MapPin, title: 'Colonia · Montevideo · Maldonado', text: 'Nuestra red más sólida de socios inmobiliarios está concentrada en estos tres departamentos — donde podemos colocar a tu ser querido con mayor rapidez y confianza.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 border border-champagne/15 rounded-xl hover:border-champagne/35 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-champagne/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-champagne" />
                  </div>
                  <div>
                    <h3 className="font-inter text-ivory/90 text-sm font-medium mb-1">{item.title}</h3>
                    <p className="font-inter text-ivory/40 text-xs leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={150}>
            <div className="border border-champagne/20 rounded-2xl p-7">
              <p className="font-inter text-ivory/40 text-xs uppercase tracking-widest mb-3">Una nota sobre las visitas</p>
              <p className="font-inter text-ivory/60 text-sm leading-relaxed">
                Al visitar una residencia, pueden estar presentes representantes inmobiliarios o propietarios. Nuestras alianzas más profundas están concentradas en <strong className="text-ivory/80">Colonia, Montevideo y Maldonado</strong>. No estás visitando una instalación geriátrica genérica — estás conociendo una residencia curada, seleccionada específicamente porque cumple con los estándares de la Red de Cuidado Iporá Boutique.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Credibilidad */}
      <section className="py-16 border-t border-champagne/10" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1520 100%)' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Nuestra trayectoria</span>
                <h2 className="font-cormorant text-4xl text-ivory font-light leading-tight mb-5">
                  Modelo de cuidado probado.<br /><em className="text-champagne italic">Trayectoria real.</em>
                </h2>
                <p className="font-inter text-ivory/60 text-sm leading-relaxed mb-4">
                  Residencial Iporá en Tacuarembó lleva más de 4 años operando. Familias que eligieron confiar en nosotros — y siguieron eligiéndonos. Eso no se inventa. Es el único aval que importa.
                </p>
                <p className="font-inter text-ivory/60 text-sm leading-relaxed">
                  Iporá Boutique trae ese mismo modelo de cuidado — el mismo equipo, los mismos estándares, la misma filosofía — a una red de hogares boutique en todo Uruguay. La dirección cambia. El compromiso, no.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { number: '4+', label: 'Años de operación continua en Tacuarembó' },
                  { number: '100%', label: 'Familias que eligieron renovar mes a mes' },
                  { number: 'Red', label: 'De residencias boutique pre-aprobadas en Uruguay' },
                  { number: 'Limitado', label: 'Cupos por residencia — por diseño, no por circunstancia' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4 border border-champagne/15 rounded-xl px-5 py-4">
                    <span className="font-cormorant text-2xl text-champagne font-light w-24 flex-shrink-0">{stat.number}</span>
                    <span className="font-inter text-ivory/60 text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Foto central */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-top" style={{ backgroundImage: "url('https://media.base44.com/images/public/6a050510a0e721e56d922807/4d36f9b7a_image.png')" }} />
        <div className="absolute inset-0 bg-obsidian/30" />
        <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
          <p className="font-cormorant text-3xl md:text-4xl text-ivory font-light italic">
            "Cada residente merece calidez, dignidad y conexión humana genuina."
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #0f1628 0%, #050505 100%)' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-12">
              <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Niveles de cuidado</span>
              <h2 className="font-cormorant text-4xl text-ivory font-light mb-3">El precio según la necesidad, no según la habitación</h2>
              <p className="font-inter text-ivory/50 text-sm max-w-xl mx-auto">No hay dos residentes iguales. Nuestros precios reflejan el nivel real de apoyo que tu ser querido requiere — desde compañía y supervisión, hasta asistencia completa en el día a día.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { tier: 'Nivel 1', name: 'Apoyo Independiente', price: 'desde USD 4.500/mes', desc: 'Para adultos mayores en gran medida independientes que se benefician de compañía diaria, alimentación y supervisión liviana. Ideal para etapas tempranas.' },
                { tier: 'Nivel 2', name: 'Vida Asistida', price: 'Precio personalizado', desc: 'Para residentes que necesitan ayuda con actividades cotidianas — baño, medicación, movilidad — mientras participan activamente en la vida social.', featured: true },
                { tier: 'Nivel 3', name: 'Cuidado de Alta Dependencia', price: 'Precio personalizado', desc: 'Para residentes que requieren asistencia permanente, apoyo de enfermería especializado y gestión intensiva del cuidado diario.' },
              ].map((t, i) => (
                <div key={i} className={`rounded-2xl p-7 ${t.featured ? 'border-2 border-champagne bg-champagne/5' : 'border border-champagne/20'}`}>
                  <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-2">{t.tier}</span>
                  <h3 className="font-cormorant text-xl text-ivory mb-2">{t.name}</h3>
                  <p className="font-inter text-champagne text-sm font-medium mb-3">{t.price}</p>
                  <p className="font-inter text-ivory/50 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
            <p className="font-inter text-ivory/30 text-xs text-center mt-6">El precio exacto se define después de una conversación privada sobre las necesidades específicas y el estado de salud actual de tu ser querido.</p>
          </RevealSection>
        </div>
      </section>

      {/* CTA principal */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1208 50%, #0a0a0a 100%)' }}>
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="border border-champagne/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #D4AF37 0%, transparent 60%)' }} aria-hidden="true" />
              <div className="relative z-10">
                <Diamond className="w-10 h-10 text-champagne mx-auto mb-5" />
                <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light mb-4">
                  Contanos sobre tu ser querido
                </h2>
                <p className="font-inter text-ivory/60 mb-4 max-w-xl mx-auto">
                  Residencial Iporá Boutique abre el <strong className="text-champagne">1 de agosto de 2026</strong>. Los cupos son estrictamente limitados — no por capacidad, sino por nuestro compromiso de brindar atención genuina e individual a cada residente.
                </p>
                <p className="font-inter text-ivory/70 text-sm mb-8 max-w-lg mx-auto">
                  Mandanos un email y contanos sobre tu padre o abuelo/a — su nombre, su personalidad, sus necesidades, su historia. Te responderemos personalmente para hablar del nivel de cuidado que mejor le conviene.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a
                    href="mailto:residencialipor@gmail.com?subject=Consulta%20Ipor%C3%A1%20Boutique&body=Hola%2C%0A%0AQuiero%20contarles%20sobre%20mi%20ser%20querido%3A%0A%0ANombre%3A%0AEdad%3A%0ANecesidades%20actuales%3A%0A%0APueden%20contactarme%20en%3A"
                    className="cta-btn cta-btn-gold px-8 py-4 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all inline-flex items-center gap-2 justify-center"
                  >
                    Envianos un email →
                  </a>
                  <a
                    href="https://wa.me/59898282938?text=Hola%20Nicol%C3%A1s%2C%20me%20interesa%20Ipor%C3%A1%20Boutique%20para%20mi%20ser%20querido."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn px-8 py-4 rounded-full font-inter font-medium text-ivory border border-ivory/20 hover:bg-ivory/5 transition-all inline-flex items-center gap-2 justify-center text-sm"
                  >
                    O escribile a Nicolás por WhatsApp
                  </a>
                </div>
                <p className="font-inter text-ivory/30 text-xs">Tu consulta es completamente confidencial. Respondemos personalmente cada mensaje.</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="py-20 border-t border-champagne/10">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-12">
              <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Comparación de valor</span>
              <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light">¿Cuánto cuesta el cuidado realmente?</h2>
              <p className="font-inter text-ivory/40 text-sm mt-3 max-w-xl mx-auto">Antes de decidir, es importante entender qué cobra el mercado — y qué incluye cada opción.</p>
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="font-inter text-ivory/40 text-xs uppercase tracking-wide pb-4 pr-4 w-1/3">Característica</th>
                    <th className="font-inter text-ivory/30 text-xs uppercase tracking-wide pb-4 px-4 text-center">Cuidador domiciliario</th>
                    <th className="font-inter text-ivory/30 text-xs uppercase tracking-wide pb-4 px-4 text-center">Geriátrico estándar</th>
                    <th className="pb-4 px-4 text-center">
                      <span className="font-inter text-champagne text-xs uppercase tracking-wide">✦ Iporá Boutique</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ivory/5">
                  {[
                    { feature: 'Costo mensual (USD)', a: '3.500–5.000', b: '1.500–3.000*', c: 'desde 4.500' },
                    { feature: 'Cuidado nocturno incluido', a: 'Extra', b: '✓', c: '✓' },
                    { feature: 'Médico visitante semanal', a: '✗', b: 'Solo emergencias', c: '✓' },
                    { feature: 'Nutricionista incluida', a: '✗', b: '✗', c: '✓' },
                    { feature: 'Trabajador social', a: '✗', b: '✗', c: '✓' },
                    { feature: 'Actividades personalizadas', a: '✗', b: 'Solo grupales', c: '✓ Individual' },
                    { feature: 'Atención 1 a 1', a: '✓', b: '✗ (1 cada 8+)', c: '✓ ratio exclusivo' },
                    { feature: 'Tranquilidad para la familia', a: 'Baja', b: 'Media', c: '✓ Máxima' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="font-inter text-ivory/60 text-sm py-3 pr-4">{row.feature}</td>
                      <td className="font-inter text-ivory/30 text-sm py-3 px-4 text-center">{row.a}</td>
                      <td className="font-inter text-ivory/30 text-sm py-3 px-4 text-center">{row.b}</td>
                      <td className="font-inter text-champagne text-sm py-3 px-4 text-center font-medium bg-champagne/5 rounded">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="font-inter text-ivory/20 text-xs mt-3">* Geriátrico estándar: costos básicos, sin incluir extras frecuentes (pañales, medicamentos, atención médica adicional, traslados).</p>
            </div>
          </RevealSection>
          <RevealSection delay={200}>
            <div className="mt-10 border border-champagne/30 rounded-2xl p-6 bg-champagne/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-cormorant text-2xl text-ivory font-light mb-1">La conclusión es simple:</p>
                <p className="font-inter text-ivory/60 text-sm max-w-lg">Por un precio similar a un cuidador informal — sin médico, nutricionista ni estructura — Iporá Boutique ofrece un equipo profesional completo, un entorno seguro y la tranquilidad que tu familia merece.</p>
              </div>
              <a
                href="https://wa.me/59898282938?text=Hola%20Nicol%C3%A1s%2C%20quisiera%20saber%20el%20precio%20exacto%20de%20Ipor%C3%A1%20Boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn-gold flex-shrink-0 px-7 py-3 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all text-sm whitespace-nowrap"
              >
                Ver precio exacto →
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg, #0d1520 0%, #0a0a0a 100%)' }}>
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-4xl text-ivory font-light">¿Por qué elegir Residencial Iporá Boutique?</h2>
            </div>
          </RevealSection>
          <RevealSection>
            <div className="relative rounded-3xl mb-12 overflow-hidden h-72 md:h-96">
              <div className="absolute inset-0 bg-cover bg-top" style={{ backgroundImage: "url('https://media.base44.com/images/public/6a050510a0e721e56d922807/8fdbfca7e_image.png')" }} />
              <div className="absolute inset-0 bg-obsidian/30" />
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Porque los amás', text: 'Ya cargaste este peso suficiente tiempo. Elegir Iporá Boutique es el mayor regalo que podés darle a tu padre o madre — una vida plenamente vivida, no apenas gestionada.' },
              { icon: Shield, title: 'Un hogar, no una sala', text: 'Sin pasillos de hospital. Sin horarios institucionales. Un hogar boutique donde los años restantes de tu ser querido están llenos de calidez, dignidad y conexión humana real.' },
              { icon: Star, title: 'Probado, no prometido', text: 'Más de 4 años operando Residencial Iporá en Tacuarembó. Familias que confiaron en nosotros — y siguen haciéndolo. Ese es el único aval que importa.' },
            ].map((item, i) => (
              <RevealSection key={item.title} delay={i * 100}>
                <div className="border border-champagne/15 rounded-2xl p-7 text-center hover:border-champagne/40 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-champagne" />
                  </div>
                  <h3 className="font-cormorant text-xl text-ivory mb-3">{item.title}</h3>
                  <p className="font-inter text-ivory/50 text-sm">{item.text}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA emocional final */}
      <section className="py-20 border-t border-champagne/10" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1208 100%)' }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          <p className="font-inter text-champagne text-xs uppercase tracking-widest mb-6">Un email puede cambiarlo todo</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light leading-tight mb-6">
            Tu padre o madre merece pasar sus años <em className="text-champagne italic">verdaderamente viviendo</em>.
          </h2>
          <p className="font-inter text-ivory/60 text-base leading-relaxed mb-4">
            Llevas demasiado tiempo cargando esto solo/a. Las noches de insomnio. La culpa. El agotamiento de intentar ser todo para alguien a quien amás tan profundamente.
          </p>
          <p className="font-inter text-ivory/60 text-base leading-relaxed mb-10">
            Escribinos. Contanos sobre ellos — su nombre, su historia, lo que aman, lo que necesitan. Te responderemos personalmente, con honestidad y cuidado. Sin presión. Solo una conversación entre personas que entienden lo que significa este momento.
          </p>
          <a
            href="mailto:residencialipor@gmail.com?subject=Sobre%20mi%20ser%20querido&body=Hola%2C%0A%0AQuiero%20contarles%20sobre%20mi%20ser%20querido%3A%0A%0ANombre%3A%0AEdad%3A%0ALo%20que%20ama%3A%0ALo%20que%20necesita%3A%0A%0AMe%20pueden%20contactar%20en%3A"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all text-base"
          >
            Escribinos sobre ellos →
          </a>
          <p className="font-inter text-ivory/30 text-xs mt-5">Leemos y respondemos cada mensaje personalmente.</p>
        </div>
      </section>

      {/* FAQ SEO section — visible para buscadores y motores IA */}
      <section className="py-16 border-t border-champagne/10" style={{ background: '#0a0a0a' }}>
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <RevealSection>
            <h2 className="font-cormorant text-3xl text-ivory font-light text-center mb-10">Preguntas frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: '¿Dónde opera Residencial Iporá Boutique?', a: 'Iporá Boutique opera principalmente en Colonia del Sacramento, Montevideo y Maldonado (Punta del Este), Uruguay. Estas son las áreas donde tenemos la red más sólida de residencias asociadas y mayor disponibilidad.' },
                { q: '¿Cuánto cuesta un hogar de adultos mayores en Uruguay?', a: 'Residencial Iporá Boutique ofrece cuidado profesional completo desde USD 4.500 por mes, incluyendo médico semanal, nutricionista, trabajador social y cuidado 24 horas. El precio varía según el nivel de dependencia del residente.' },
                { q: '¿Qué incluye el precio mensual?', a: 'El precio incluye: cuidado continuo 24h los 7 días, alimentación completa con nutricionista, visitas médicas presenciales semanales, trabajador social, actividades recreativas personalizadas e higiene personal. No incluye medicamentos recetados ni productos de higiene personal.' },
                { q: '¿Cuándo abre Iporá Boutique?', a: 'Iporá Boutique abre el 1 de agosto de 2026. Pre-reservas disponibles ahora. Los cupos son limitados por diseño.' },
                { q: '¿Tienen experiencia en cuidado de Alzheimer y demencia?', a: 'Sí. El equipo de Iporá tiene experiencia en cuidado de adultos mayores con deterioro cognitivo, Alzheimer y demencia. El enfoque incluye rutinas estables, comunicación adaptada y monitoreo médico semanal.' },
                { q: '¿Cómo reservo un lugar?', a: 'Contactá a Nicolás Macedo por WhatsApp al +598 98 282 938 o por email a residencialipor@gmail.com. La reserva se confirma con el 50% del primer mes como seña.' },
              ].map((faq, i) => (
                <div key={i} className="border border-champagne/15 rounded-xl p-6">
                  <h3 className="font-inter text-ivory/90 text-sm font-medium mb-2">{faq.q}</h3>
                  <p className="font-inter text-ivory/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Footer mini */}
      <section className="py-10 border-t border-champagne/20 text-center" style={{ background: '#050505' }}>
        <p className="font-inter text-ivory/30 text-sm mb-3">
          © {new Date().getFullYear()} Residencial Iporá · Residencial Iporá Boutique
        </p>
        <div className="flex items-center justify-center gap-6">
          <Link to="/" className="font-inter text-trust-blue text-sm hover:underline">
            ← Volver al sitio principal
          </Link>
          <Link to="/rivera" className="font-inter text-champagne text-sm hover:underline flex items-center gap-1">
            <Globe className="w-3 h-3" /> English version
          </Link>
        </div>
      </section>

      {/* WhatsApp flotante */}
      <div className="fixed bottom-6 right-5 z-50">
        <a
          href="https://wa.me/59898282938?text=Hola%20Nicol%C3%A1s%2C%20me%20interesa%20Ipor%C3%A1%20Boutique"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-pulse w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
          style={{ backgroundColor: '#25D366' }}
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.065.525 4.004 1.445 5.694L0 24l6.485-1.42A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.368l-.36-.214-3.735.818.832-3.64-.234-.374A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818S17.424 21.818 12 21.818z" />
          </svg>
        </a>
      </div>
    </div>
  );
}