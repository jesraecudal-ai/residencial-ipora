import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';

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
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className="section-reveal">{children}</div>;
}

const posts = [
  {
    slug: 'cuidado-adultos-mayores-uruguay',
    title: 'Guía completa para elegir un hogar de adultos mayores en Uruguay',
    excerpt: 'Tomar la decisión de buscar una residencia para un ser querido es uno de los momentos más difíciles. Te guiamos paso a paso en qué considerar al elegir un hogar geriátrico en Uruguay.',
    category: 'Guías',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    date: '10 de mayo, 2025',
  },
  {
    slug: 'beneficios-vida-naturaleza-adultos-mayores',
    title: '¿Por qué el entorno natural es clave para el bienestar de los adultos mayores?',
    excerpt: 'Numerosos estudios demuestran que vivir cerca de la naturaleza mejora la salud física y mental en la tercera edad. Descubrí por qué Balneario Iporá es el entorno ideal.',
    category: 'Bienestar',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    date: '2 de abril, 2025',
  },
  {
    slug: 'señales-necesita-cuidado-profesional',
    title: '10 señales de que tu familiar necesita cuidado profesional',
    excerpt: 'Reconocer el momento adecuado para buscar ayuda profesional puede marcar una diferencia enorme en la calidad de vida de tu ser querido. Aquí los indicadores más importantes.',
    category: 'Consejos',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    date: '15 de marzo, 2025',
  },
  {
    slug: 'alimentacion-adultos-mayores',
    title: 'Nutrición en la tercera edad: qué comer para vivir mejor',
    excerpt: 'La alimentación adecuada es fundamental para la salud y la vitalidad en los años dorados. Nuestro enfoque nutricional en Residencial Iporá y consejos para las familias.',
    category: 'Salud',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
    date: '5 de febrero, 2025',
  },
  {
    slug: 'actividades-adultos-mayores',
    title: 'Actividades que hacen felices a los adultos mayores',
    excerpt: 'El entretenimiento y la socialización no son un lujo: son una necesidad. Conocé las actividades que realizamos en Residencial Iporá para mantener la alegría de vivir.',
    category: 'Vida en el hogar',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    date: '20 de enero, 2025',
  },
  {
    slug: 'cuidado-demencia-alzheimer-uruguay',
    title: 'Cuidado especializado para personas con demencia en Uruguay',
    excerpt: 'El acompañamiento de adultos mayores con Alzheimer u otras demencias requiere paciencia, formación y amor. Conocé nuestro enfoque humanizado en Residencial Iporá.',
    category: 'Salud',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    date: '8 de diciembre, 2024',
  },
];

const seoContent = `
Residencial Iporá: El Mejor Cuidado para Adultos Mayores en Uruguay

En Uruguay, el envejecimiento de la población es una realidad que toca cada vez más familias. Según datos del Instituto Nacional de Estadística (INE), más del 14% de la población uruguaya supera los 65 años, convirtiendo al país en uno de los más envejecidos de América Latina. Ante esta realidad, contar con opciones de cuidado de calidad, dignas y accesibles para los adultos mayores no es un lujo, sino una necesidad urgente.

Residencial Iporá nació hace más de 4 años en Balneario Iporá, Tacuarembó, como respuesta a esta necesidad. Fundado por Sonia Sanguinet y Nicolás Macedo, este hogar de cuidado para adultos mayores se diferencia por una propuesta única en Uruguay: un entorno íntimo, familiar y conectado con la naturaleza, donde cada residente recibe atención personalizada y es tratado con la dignidad que merece.

¿Qué buscan las familias uruguayas al elegir un hogar geriátrico?

Cuando una familia en Uruguay comienza a buscar opciones de cuidado para un adulto mayor, generalmente prioriza varios factores. En primer lugar, la seguridad: quieren saber que su ser querido estará bien cuidado las 24 horas del día. En segundo lugar, el ambiente: nadie quiere que su familiar sienta que "está en un hospital". Quieren un hogar, con calor humano y actividades que mantengan la mente y el cuerpo activos.

En Residencial Iporá entendemos estas preocupaciones profundamente. Por eso hemos construido un modelo de cuidado que pone al residente en el centro de todo. No somos una institución médica fría; somos una comunidad íntima donde el amor y el respeto son los pilares fundamentales.

La importancia del entorno natural en el cuidado de adultos mayores

Uno de los aspectos más diferenciadores de Residencial Iporá es su ubicación privilegiada. Situado junto al parque natural protegido de Balneario Iporá, en Tacuarembó, el hogar ofrece a sus residentes el beneficio terapéutico del contacto con la naturaleza.

La investigación científica respalda ampliamente este enfoque. Estudios publicados en revistas internacionales de geriatría demuestran que vivir en entornos naturales reduce los niveles de cortisol (la hormona del estrés), mejora la calidad del sueño, favorece la movilidad y potencia el bienestar emocional en personas de la tercera edad.

En Uruguay, muy pocos hogares geriátricos pueden ofrecer este tipo de entorno. La mayoría se encuentran en zonas urbanas, lejos del verde y del silencio. Residencial Iporá es la excepción: un refugio de paz donde el canto de los pájaros, el aire puro y la presencia constante del parque natural son parte del tratamiento diario.

Servicios de cuidado integral para adultos mayores en Tacuarembó

En Residencial Iporá ofrecemos un servicio de cuidado completo que incluye:

Atención continua 24 horas al día: Nuestro equipo está presente en todo momento para garantizar la seguridad y el bienestar de cada residente. No hay horarios de "menos atención"; siempre hay alguien disponible.

Alimentación nutritiva incluida: Trabajamos con una nutricionista para diseñar menús equilibrados, sabrosos y adaptados a las necesidades específicas de cada persona. La buena alimentación es la base de la salud en la tercera edad.

Visitas médicas semanales: Un médico visita el hogar regularmente para evaluar el estado de salud de los residentes, ajustar medicamentos si es necesario y mantener informadas a las familias. La prevención es nuestra prioridad.

Visitas de trabajador social: Un profesional en trabajo social acompaña tanto a los residentes como a sus familias, facilitando la adaptación, resolviendo inquietudes y fortaleciendo el vínculo entre el hogar y las familias.

Actividades sociales y recreativas: Creemos que el alma también necesita cuidado. Organizamos actividades adaptadas a las capacidades y preferencias de cada residente: juegos, música, manualidades, caminatas por el parque y más.

Cuidado de la higiene personal: Ayudamos con la higiene diaria de manera respetuosa y profesional, preservando siempre la dignidad del residente.

¿Por qué elegir Residencial Iporá para tu familiar?

A diferencia de los grandes centros geriátricos donde los adultos mayores pueden sentirse perdidos entre muchos residentes, Residencial Iporá apuesta por la escala pequeña. Pocos residentes significa más atención, más conocimiento de cada persona y relaciones más cercanas con el equipo de cuidado.

Sonia Sanguinet, fundadora del hogar, lo explica así: "Queremos que cada persona que llega a Iporá sienta que está en su casa. Que conozca a las personas que la cuidan por su nombre, que tenga sus objetos personales, sus rutinas y su espacio propio. La dignidad no es negociable."

Esta filosofía se traduce en residentes más felices, familias más tranquilas y un equipo de cuidadores verdaderamente comprometido. En Residencial Iporá no buscamos ser el hogar más grande de Uruguay, sino el mejor.

Cómo funciona el proceso de admisión

El proceso para que un familiar ingrese a Residencial Iporá es simple y humano. Comienza con una conversación: podés contactarnos por WhatsApp o teléfono y contarnos la situación de tu ser querido. A partir de ahí, coordinamos una visita al hogar para que puedas conocerlo en persona. Si el hogar es lo que estás buscando, elaboramos juntos un plan de cuidado personalizado y acordamos el ingreso con todo el tiempo que la familia necesite para prepararse.

No hay contratos complicados ni procesos burocráticos. Hay personas que se preocupan por otras personas.

Residencial Iporá y el futuro del cuidado geriátrico en Uruguay

El equipo de Residencial Iporá no se detiene. Con el éxito y la confianza ganada en Balneario Iporá durante más de 4 años, hemos comenzado a desarrollar un nuevo proyecto boutique en Rivera, Uruguay, para expandir nuestra propuesta de cuidado íntimo y de calidad a otras regiones del país.

El Proyecto Rivera representa el siguiente nivel del cuidado residencial premium en Uruguay: un hogar boutique de lujo para adultos mayores que desean y pueden acceder a un servicio de primer nivel, con todo el amor y la atención personalizada que caracteriza a Residencial Iporá.

Contacto y visitas

Si estás buscando un hogar de cuidado para un adulto mayor en Uruguay, te invitamos a contactarnos. Estamos ubicados en Calle 9 y 18, Balneario Iporá, Tacuarembó, y podés encontrarnos en:

• WhatsApp Sonia (Fundadora): +598 91 064 292
• WhatsApp Nicolás (Co-Fundador): +598 98 282 938
• Email: contacto@residencialipora.com

Residencial Iporá — Cuidado con amor, vida con dignidad.
`;

export default function Blog() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-sanctuary min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-sanctuary">
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80')` }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center relative z-10">
          <span className="font-inter text-sm text-trust-blue uppercase tracking-widest block mb-4">Blog & Recursos</span>
          <h1 className="font-cormorant text-5xl md:text-7xl text-navy font-light mb-5">
            Información y consejos
          </h1>
          <p className="font-inter text-slate-mist text-lg max-w-2xl mx-auto">
            Artículos sobre cuidado de adultos mayores, bienestar y la vida en Residencial Iporá.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <RevealSection key={post.slug} delay={i * 80}>
                <article
                  className="hover-lift bg-white rounded-2xl overflow-hidden border border-slate-100 cursor-pointer h-full flex flex-col"
                  onClick={() => setSelected(selected === post.slug ? null : post.slug)}
                >
                  <div className="overflow-hidden h-52 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-inter text-xs text-trust-blue bg-trust-blue/10 px-3 py-1 rounded-full flex items-center gap-1">
                        <Tag className="w-3 h-3" /> {post.category}
                      </span>
                      <span className="font-inter text-xs text-slate-mist flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-cormorant text-xl text-navy mb-3 leading-tight">{post.title}</h2>
                    <p className="font-inter text-sm text-slate-mist leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-inter text-xs text-slate-mist">{post.date}</span>
                      <button className="font-inter text-sm text-trust-blue flex items-center gap-1 hover:gap-2 transition-all">
                        {selected === post.slug ? 'Cerrar' : 'Leer'} <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {selected === post.slug && (
                    <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                      <p className="font-inter text-sm text-slate-mist leading-relaxed">{post.excerpt}</p>
                      <a
                        href="https://wa.me/59891064292?text=Hola%20Sonia%2C%20leí%20el%20blog%20y%20quisiera%20más%20información"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full font-inter font-medium text-white text-sm hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#25D366' }}
                      >
                        Contactar por WhatsApp
                      </a>
                    </div>
                  )}
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="border-l-4 border-trust-blue pl-8 mb-10">
              <h2 className="font-cormorant text-3xl text-navy font-light mb-2">
                Guía completa: Cuidado de adultos mayores en Uruguay
              </h2>
              <p className="font-inter text-slate-mist text-sm">Contenido informativo · Residencial Iporá</p>
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <div className="prose max-w-none">
              {seoContent.trim().split('\n\n').map((para, i) => (
                <div key={i} className="mb-6">
                  {para.startsWith('Residencial') && i === 0 ? (
                    <h3 className="font-cormorant text-2xl text-navy font-light mb-3">{para}</h3>
                  ) : para.includes(':') && para.length < 100 ? (
                    <h3 className="font-cormorant text-xl text-navy font-light mt-8 mb-3">{para}</h3>
                  ) : para.startsWith('•') ? (
                    <p className="font-inter text-slate-mist leading-relaxed pl-4 border-l-2 border-trust-blue/30 py-1">{para}</p>
                  ) : (
                    <p className="font-inter text-slate-mist leading-relaxed">{para}</p>
                  )}
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-trust-blue text-center">
        <RevealSection>
          <div className="max-w-2xl mx-auto px-5">
            <h2 className="font-cormorant text-4xl text-white font-light mb-4">
              ¿Tenés preguntas sobre el cuidado de tu familiar?
            </h2>
            <p className="font-inter text-white/80 mb-7">
              Hablá con Sonia o Nicolás. Sin presiones, sin compromiso. Solo una conversación humana.
            </p>
            <a
              href="https://wa.me/59891064292?text=Hola%20Sonia%2C%20leí%20el%20blog%20y%20tengo%20preguntas"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-trust-blue bg-white hover:bg-white/90 transition-all"
            >
              Hablar ahora →
            </a>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}