import { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Star, Diamond, Shield, Users, Utensils, Stethoscope, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return timeLeft;
}

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
  { icon: Clock, text: 'Cuidado 24 horas continuo — 2 cuidadores por turno de día' },
  { icon: Utensils, text: 'Alimentación completa incluida con asesoramiento de nutricionista' },
  { icon: Stethoscope, text: 'Visitas médicas semanales presenciales' },
  { icon: Users, text: 'Trabajador social con visitas periódicas' },
  { icon: Heart, text: 'Actividades sociales y recreativas personalizadas' },
  { icon: Shield, text: 'Ambiente de máxima seguridad y privacidad' },
];

const notIncluded = [
  'Productos de higiene personal',
  'Medicamentos recetados',
];

export default function Rivera() {
  const timeLeft = useCountdown('2026-08-01T00:00:00');
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleWhatsApp = () => {
    const msg = `Hola, me interesa el Proyecto Rivera Boutique. Mi nombre es ${form.nombre || '[mi nombre]'}. ${form.mensaje || '¿Podrían darme más información?'}`;
    window.open(`https://wa.me/59891064292?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="bg-obsidian min-h-screen overflow-x-hidden">
      {/* Custom Rivera Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-10 py-5 flex items-center justify-between glass-dark">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full border border-champagne/50 flex items-center justify-center">
            <Heart className="w-3 h-3 text-champagne fill-champagne" />
          </div>
          <span className="font-cormorant text-ivory text-lg font-light">Residencial Iporá</span>
        </Link>
        <a
          href="https://wa.me/59898282938?text=Hola%20Nicolás%2C%20me%20interesa%20el%20Proyecto%20Rivera"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn-gold px-5 py-2 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all text-sm"
        >
          Hablar con Nicolás — Co-Fundador
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1800&q=80')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 60% 40%, rgba(212,175,55,0.08) 0%, transparent 70%)'
        }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
              <span className="font-inter text-champagne text-xs uppercase tracking-widest">Proyecto exclusivo · Rivera & Punta del Este, Uruguay · 2026</span>
            </div>

            <h1 className="font-cormorant text-6xl md:text-8xl text-ivory font-light leading-none mb-6">
              Residencial<br />
              <em className="text-champagne italic">Iporá Boutique</em>
            </h1>

            <p className="font-inter text-ivory/60 text-lg max-w-xl leading-relaxed mb-10">
              Una experiencia de cuidado absolutamente exclusiva para adultos mayores que merecen lo mejor. Pocos lugares. Máximo nivel. Fecha de apertura confirmada: <strong className="text-champagne">1 de agosto de 2026</strong>.
            </p>

            {/* Countdown */}
            <div className="grid grid-cols-4 gap-4 max-w-lg mb-10">
              {[
                { value: timeLeft.days, label: 'Días' },
                { value: timeLeft.hours, label: 'Horas' },
                { value: timeLeft.minutes, label: 'Min' },
                { value: timeLeft.seconds, label: 'Seg' },
              ].map((t) => (
                <div key={t.label} className="text-center border border-champagne/20 rounded-xl py-4 px-2">
                  <div className="countdown-digit text-4xl md:text-5xl text-champagne font-light">
                    {String(t.value ?? 0).padStart(2, '0')}
                  </div>
                  <div className="font-inter text-xs text-ivory/40 uppercase tracking-wide mt-1">{t.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/59898282938?text=Hola%20Nicolás%2C%20me%20interesa%20pre-reservar%20en%20Residencial%20Boutique%20Rivera"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all"
            >
              Hablar con Nicolás — Co-Fundador <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* The Concept */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-5">El concepto</span>
            <h2 className="font-cormorant text-5xl text-ivory font-light leading-tight mb-6">
              Cuando el cuidado<br />se convierte en<br /><em className="text-champagne italic">experiencia</em>
            </h2>
            <p className="font-inter text-ivory/60 leading-relaxed mb-5">
              Residencial Iporá Boutique es un proyecto nacido de la visión de Sonia y Nicolás: llevar el modelo íntimo y de calidad de Iporá a un nivel superior. Un hogar para pocos, donde cada detalle importa y cada residente recibe atención que va más allá del cuidado convencional.
            </p>
            <p className="font-inter text-ivory/60 leading-relaxed mb-5">
              Con sedes en Rivera y Punta del Este, Uruguay — <em className="text-ivory/80">direcciones exactas a confirmar</em> — este proyecto boutique está diseñado para adultos mayores y sus familias que valoran la privacidad, la exclusividad y el más alto nivel de atención personalizada.
            </p>
            <div className="border border-champagne/20 rounded-xl p-5 inline-block">
              <p className="font-inter text-champagne text-sm font-medium">Inversión desde USD 4.000 / mes</p>
              <p className="font-inter text-ivory/40 text-xs mt-1">Precio exacto disponible bajo consulta privada</p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="relative">
              <div className="border border-champagne/20 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800&q=80"
                  alt="Espacio boutique de lujo, ambiente íntimo y elegante para adultos mayores"
                  className="w-full h-96 object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent flex items-end p-8">
                  <div>
                    <p className="font-cormorant text-2xl text-ivory">Rivera & Punta del Este, Uruguay</p>
                    <p className="font-inter text-champagne/80 text-sm">Apertura: 1 de agosto de 2026</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-champagne rounded-2xl px-5 py-3">
                <p className="font-cormorant text-obsidian text-lg">Lugares limitados</p>
                <p className="font-inter text-obsidian text-xs">Pre-reserva con 50% de seña</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-14">
              <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Servicios incluidos</span>
              <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light">
                Todo incluido en su precio mensual
              </h2>
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

          {/* Not included */}
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

      {/* Pre-reserve CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="border border-champagne/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle at 50% 0%, #D4AF37 0%, transparent 60%)'
              }} aria-hidden="true" />
              <div className="relative z-10">
                <Diamond className="w-10 h-10 text-champagne mx-auto mb-5" />
                <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light mb-4">
                  Asegurar tu lugar
                </h2>
                <p className="font-inter text-ivory/60 mb-4 max-w-xl mx-auto">
                  Los lugares en Residencial Boutique Rivera son limitados. Para asegurar el suyo, contáctenos por WhatsApp y coordinamos el proceso de pre-reserva con el <strong className="text-champagne">50% de seña inicial</strong>.
                </p>
                <p className="font-inter text-ivory/40 text-sm mb-8">
                  El precio exacto mensual se revela en consulta privada. Inversión estimada: desde USD 4.000/mes.
                </p>

                <div className="flex justify-center mb-6">
                  <a
                    href="https://wa.me/59898282938?text=Hola%20Nicolás%2C%20me%20interesa%20pre-reservar%20en%20Residencial%20Boutique%20Rivera.%20Quisiera%20conocer%20el%20precio%20y%20el%20proceso%20de%20seña."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn-gold px-8 py-4 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all inline-flex items-center gap-2 justify-center"
                  >
                    Hablar con Nicolás — Co-Fundador
                  </a>
                </div>

                <p className="font-inter text-ivory/30 text-xs">
                  Al enviar un mensaje por WhatsApp, no adquirís ningún compromiso automático. Te contactaremos para hablar con privacidad y sin presiones.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Compare */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-4xl text-ivory font-light">¿Por qué elegir Residencial Iporá Boutique?</h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Star, title: 'Experiencia probada', text: '4+ años operando Residencial Iporá con éxito. Sabemos lo que hacemos.' },
              { icon: Shield, title: 'Privacidad total', text: 'Pocos residentes. Nunca un ambiente de institución. Siempre un hogar.' },
              { icon: Heart, title: 'Atención sin igual', text: 'Dos cuidadores de turno de día. Ratio de atención incomparable en Uruguay.' },
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

      {/* Footer mini */}
      <section className="py-10 border-t border-ivory/10 text-center">
        <p className="font-inter text-ivory/30 text-sm mb-3">
          © {new Date().getFullYear()} Residencial Iporá · Residencial Iporá Boutique
        </p>
        <Link to="/" className="font-inter text-trust-blue text-sm hover:underline">
          ← Volver al sitio principal
        </Link>
      </section>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-5 z-50">
        <a
          href="https://wa.me/59898282938?text=Hola%20Nicolás%2C%20me%20interesa%20Proyecto%20Rivera%20Boutique"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-pulse w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
          style={{ backgroundColor: '#25D366' }}
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.065.525 4.004 1.445 5.694L0 24l6.485-1.42A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.368l-.36-.214-3.735.818.832-3.64-.234-.374A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818S17.424 21.818 12 21.818z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}