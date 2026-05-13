import { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';

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

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: 'contacto@residencialipora.com',
      subject: `Nuevo contacto web: ${form.nombre}`,
      body: `
Nuevo mensaje desde el formulario de contacto de Residencial Iporá:

Nombre: ${form.nombre}
Email: ${form.email}
Teléfono: ${form.telefono}

Mensaje:
${form.mensaje}

---
Este mensaje fue enviado desde residencialipora.com
      `.trim(),
    });
    setSending(false);
    setSent(true);
  };

  return (
    <div className="bg-sanctuary min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, #2563EB 0%, transparent 60%)'
        }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center relative z-10">
          <span className="font-inter text-sm text-trust-blue uppercase tracking-widest block mb-4">Estamos para ayudarte</span>
          <h1 className="font-cormorant text-5xl md:text-7xl text-ivory font-light mb-5">
            Contacto
          </h1>
          <p className="font-inter text-ivory/60 text-lg max-w-xl mx-auto">
            ¿Tenés preguntas? ¿Querés visitar el hogar? Estamos a un mensaje de distancia.
          </p>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-10 bg-trust-blue">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-cormorant text-2xl text-white font-light text-center md:text-left">
              La forma más rápida de contactarnos es por WhatsApp
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <a
                href="https://wa.me/59891064292?text=Hola%20Sonia%2C%20necesito%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn px-6 py-3 rounded-full font-inter font-medium text-trust-blue bg-white hover:bg-white/90 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" style={{ color: '#25D366' }} />
                Sonia — Fundadora
              </a>
              <a
                href="https://wa.me/59898282938?text=Hola%20Nicolás%2C%20necesito%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn px-6 py-3 rounded-full font-inter font-medium text-white border border-white/50 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" style={{ color: '#25D366' }} />
                Nicolás — Co-Fundador
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <RevealSection>
            <div>
              <h2 className="font-cormorant text-4xl text-navy font-light mb-8">Información de contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-trust-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-trust-blue" />
                  </div>
                  <div>
                    <p className="font-inter font-medium text-navy mb-1">Dirección</p>
                    <p className="font-inter text-slate-mist text-sm">
                      Calle 9 y 18, Balneario Iporá<br />
                      Tacuarembó, Uruguay
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-trust-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-trust-blue" />
                  </div>
                  <div>
                    <p className="font-inter font-medium text-navy mb-1">Teléfonos</p>
                    <p className="font-inter text-slate-mist text-sm">
                      <a href="tel:+59891064292" className="hover:text-trust-blue transition-colors">
                        +598 91 064 292 — Sonia (Fundadora)
                      </a>
                    </p>
                    <p className="font-inter text-slate-mist text-sm">
                      <a href="tel:+59898282938" className="hover:text-trust-blue transition-colors">
                        +598 98 282 938 — Nicolás (Co-Fundador)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-trust-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-trust-blue" />
                  </div>
                  <div>
                    <p className="font-inter font-medium text-navy mb-1">Email</p>
                    <a href="mailto:contacto@residencialipora.com" className="font-inter text-slate-mist text-sm hover:text-trust-blue transition-colors">
                      contacto@residencialipora.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 rounded-2xl overflow-hidden h-56 relative">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                  alt="Entorno natural de Balneario Iporá, Tacuarembó"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-cormorant text-xl">Balneario Iporá</p>
                    <p className="font-inter text-sm opacity-80">Calle 9 y 18, Tacuarembó</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Form */}
          <RevealSection delay={200}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <CheckCircle className="w-16 h-16 text-trust-blue mb-5" />
                <h3 className="font-cormorant text-3xl text-navy mb-4">¡Mensaje enviado!</h3>
                <p className="font-inter text-slate-mist mb-6">
                  Gracias por contactarnos. Nos comunicaremos a la brevedad.<br />
                  También podés escribirnos directamente por WhatsApp para una respuesta más rápida.
                </p>
                <a
                  href="https://wa.me/59891064292?text=Hola%20Sonia%2C%20acabo%20de%20enviar%20un%20formulario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn px-7 py-3 rounded-full font-inter font-medium text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#25D366' }}
                >
                  Ir a WhatsApp
                </a>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h2 className="font-cormorant text-3xl text-navy font-light mb-2">Envianos un mensaje</h2>
                <p className="font-inter text-slate-mist text-sm mb-7">Te respondemos a la brevedad.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-inter text-sm font-medium text-navy block mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 font-inter text-navy text-sm focus:outline-none focus:ring-2 focus:ring-trust-blue focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-sm font-medium text-navy block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 font-inter text-navy text-sm focus:outline-none focus:ring-2 focus:ring-trust-blue focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-sm font-medium text-navy block mb-2">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+598 XX XXX XXX"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 font-inter text-navy text-sm focus:outline-none focus:ring-2 focus:ring-trust-blue focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-sm font-medium text-navy block mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      required
                      rows={5}
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu familiar y qué necesitás..."
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 font-inter text-navy text-sm focus:outline-none focus:ring-2 focus:ring-trust-blue focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="cta-btn w-full py-4 rounded-xl font-inter font-medium text-white bg-trust-blue hover:bg-navy transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {sending ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Enviando...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Enviar mensaje</>
                    )}
                  </button>

                  <p className="font-inter text-xs text-slate-mist text-center">
                    Para respuesta más rápida, contáctenos por{' '}
                    <a
                      href="https://wa.me/59891064292"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-trust-blue hover:underline"
                    >
                      WhatsApp
                    </a>
                  </p>
                </form>
              </div>
            )}
          </RevealSection>
        </div>
      </section>
    </div>
  );
}