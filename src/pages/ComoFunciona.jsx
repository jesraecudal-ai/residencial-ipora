import { useEffect, useRef } from 'react';
import { MessageCircle, Eye, ClipboardList, Home, CheckCircle } from 'lucide-react';

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

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Primer contacto',
    desc: 'Contáctenos por WhatsApp con Sonia o Nicolás. Sin formularios complicados. Solo una conversación humana y cercana donde nos cuentes la situación de tu ser querido.',
    detail: 'Respondemos en menos de 24 horas.',
  },
  {
    number: '02',
    icon: Eye,
    title: 'Visita sin compromiso',
    desc: 'Te invitamos a conocer el hogar en persona. Verás el entorno natural, conocerás al equipo y sentirás la diferencia de un lugar con alma.',
    detail: 'Visitas coordinadas de lunes a sábado.',
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Plan personalizado',
    desc: 'Elaboramos juntos un plan de cuidado adaptado a las necesidades específicas de tu familiar. Cada persona es diferente y así lo tratamos.',
    detail: 'Incluye evaluación de salud y necesidades.',
  },
  {
    number: '04',
    icon: Home,
    title: 'Bienvenida al hogar',
    desc: 'Tu ser querido llega a su nuevo hogar. Nuestro equipo hace una transición con cariño, respeto y paciencia para que se adapte de la mejor manera.',
    detail: 'Acompañamiento continuo en los primeros días.',
  },
];

const services = [
  'Acompañamiento 24 horas del día',
  'Alimentación nutritiva incluida',
  'Visitas médicas semanales',
  'Visitas de trabajador social',
  'Actividades sociales y recreativas',
  'Higiene personal asistida',
  'Entorno natural y tranquilo',
  'Comunicación constante con la familia',
];

export default function ComoFunciona() {
  return (
    <div className="bg-sanctuary min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, #2563EB 0%, transparent 60%)'
        }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center relative z-10">
          <span className="font-inter text-sm text-trust-blue uppercase tracking-widest block mb-4">El proceso</span>
          <h1 className="font-cormorant text-5xl md:text-7xl text-ivory font-light mb-6">
            Cómo funciona
          </h1>
          <p className="font-inter text-ivory/60 text-lg max-w-2xl mx-auto">
            Sabemos que tomar esta decisión no es sencilla. Por eso hemos diseñado un proceso simple, humano y transparente para acompañarte en cada paso.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px golden-thread"
              aria-hidden="true"
            />

            <div className="space-y-16">
              {steps.map((step, i) => (
                <RevealSection key={step.number} delay={i * 150}>
                  <div className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                      <div
                        className={`font-cormorant text-8xl font-light opacity-10 text-navy leading-none mb-2 ${i % 2 === 1 ? 'md:text-right' : ''}`}
                        aria-hidden="true"
                      >
                        {step.number}
                      </div>
                      <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover-lift">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-trust-blue/10 flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-5 h-5 text-trust-blue" />
                          </div>
                          <h3 className="font-cormorant text-2xl text-navy">{step.title}</h3>
                        </div>
                        <p className="font-inter text-slate-mist leading-relaxed mb-3">{step.desc}</p>
                        <p className="font-inter text-xs text-trust-blue font-medium">{step.detail}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex w-8 h-8 rounded-full bg-trust-blue border-4 border-sanctuary flex-shrink-0 z-10 self-center" aria-hidden="true" />

                    {/* Empty space */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light mb-4">
                Servicios incluidos
              </h2>
              <p className="font-inter text-ivory/60">Todo lo que necesita tu familiar en un solo lugar.</p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <RevealSection key={s} delay={i * 60}>
                <div className="flex items-center gap-4 p-5 border border-ivory/10 rounded-xl hover:border-trust-blue/40 transition-colors">
                  <CheckCircle className="w-5 h-5 text-trust-blue flex-shrink-0" />
                  <span className="font-inter text-ivory/80 text-sm">{s}</span>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sanctuary text-center">
        <RevealSection>
          <div className="max-w-2xl mx-auto px-5">
            <h2 className="font-cormorant text-4xl md:text-5xl text-navy font-light mb-5">
              ¿Listo para dar el primer paso?
            </h2>
            <p className="font-inter text-slate-mist mb-8">
              Contáctanos hoy. Una conversación sin presiones puede cambiar la calidad de vida de quien más amás.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/59891064292?text=Hola%20Sonia%2C%20quiero%20iniciar%20el%20proceso%20de%20admisión"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn px-8 py-4 rounded-full font-inter font-medium text-white text-center hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#25D366' }}
              >
                Hablar con Sonia
              </a>
              <a
                href="https://wa.me/59898282938?text=Hola%20Nicolás%2C%20quiero%20iniciar%20el%20proceso%20de%20admisión"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn px-8 py-4 rounded-full font-inter font-medium text-navy border-2 border-navy text-center hover:bg-navy hover:text-white transition-all"
              >
                Hablar con Nicolás
              </a>
            </div>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}