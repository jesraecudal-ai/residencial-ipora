import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Diamond, Shield, Star, Users, Utensils, Stethoscope, Heart, Clock } from 'lucide-react';
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
  { icon: Clock, text: '24-hour continuous care — 2 caregivers per day shift' },
  { icon: Utensils, text: 'Full board included with nutritionist guidance' },
  { icon: Stethoscope, text: 'Weekly in-person physician visits' },
  { icon: Users, text: 'Social worker with regular visits' },
  { icon: Heart, text: 'Personalized social and recreational activities' },
  { icon: Shield, text: 'Maximum security and privacy environment' },
];

const notIncluded = [
  'Personal hygiene products',
  'Prescription medications',
];

export default function Rivera() {
  const timeLeft = useCountdown('2026-08-01T00:00:00');

  return (
    <div className="bg-obsidian min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560185007-cde436f6a4d?w=1800&q=80')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 60% 40%, rgba(212,175,55,0.08) 0%, transparent 70%)'
        }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
              <span className="font-inter text-champagne text-xs uppercase tracking-widest">Exclusive project · Rivera, Punta del Este, Uruguay · 2026</span>
            </div>

            <h1 className="font-cormorant text-6xl md:text-8xl text-ivory font-light leading-none mb-6">
              Residencial<br />
              <em className="text-champagne italic">Iporá Boutique</em>
            </h1>

            <p className="font-inter text-ivory/60 text-lg max-w-xl leading-relaxed mb-6">
              For families who accept no compromise. A boutique premium care home for older adults — intimate, discreet and absolutely personalized.
            </p>
            <div className="border border-champagne/20 rounded-2xl px-6 py-4 mb-10 max-w-xl">
              <p className="font-inter text-champagne text-sm font-medium mb-1">Confirmed opening: August 1, 2026</p>
              <p className="font-inter text-ivory/50 text-sm leading-relaxed">
                This project is in its capitalization phase. There is no physical location yet — there will be on opening day. Our only credential is what already exists: <strong className="text-ivory/80">Residencial Iporá in Tacuarembó</strong>, operating with excellence for over 4 years.
              </p>
            </div>

            {/* Countdown */}
            <div className="grid grid-cols-4 gap-4 max-w-lg mb-10">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Min' },
                { value: timeLeft.seconds, label: 'Sec' },
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
              href="https://wa.me/59898282938?text=Hello%20Nicol%C3%A1s%2C%20I%27m%20interested%20in%20pre-booking%20at%20Residencial%20Boutique%20Rivera"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all"
            >
              Talk to Nicolás — Co-Founder <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* The Concept */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-5">The concept</span>
            <h2 className="font-cormorant text-5xl text-ivory font-light leading-tight mb-6">
              When care becomes<br />an <em className="text-champagne italic">experience</em>
            </h2>
            <p className="font-inter text-ivory/60 leading-relaxed mb-5">
              Residencial Iporá Boutique is a vision under construction. We have no location yet — we are capitalizing the project to open on <strong className="text-ivory/80">August 1, 2026</strong> in Uruguay. What we do have is something very few can show: a model that already works.
            </p>
            <p className="font-inter text-ivory/60 leading-relaxed mb-5">
              Residencial Iporá in Tacuarembó has been caring for older adults for over 4 years with a level of attention that simply does not exist in the conventional market. That is our track record. We don't promise what we don't have — we show what we are.
            </p>
            <p className="font-inter text-ivory/60 leading-relaxed mb-6">
              Those who pre-book today do so because they trust the people behind the project, the Iporá track record, and their own ability to recognize a real opportunity. There are no photos of the location yet. No address yet. There is an honest conversation with Nicolás — and that is enough for those who understand how this works.
            </p>
            {/* Price anchor */}
            <div className="border border-champagne/20 rounded-2xl p-6 max-w-md">
              <p className="font-inter text-ivory/40 text-xs uppercase tracking-widest mb-3">What quality care costs today</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center py-1.5 border-b border-ivory/5">
                  <span className="font-inter text-ivory/40 text-sm line-through">Nursing home in Europe</span>
                  <span className="font-inter text-ivory/40 text-sm line-through">USD 8,000–15,000/mo</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-ivory/5">
                  <span className="font-inter text-ivory/40 text-sm line-through">24h home caregiver (Uruguay)</span>
                  <span className="font-inter text-ivory/40 text-sm line-through">USD 3,500–5,000/mo</span>
                </div>
                <div className="flex justify-between items-center py-2 rounded-lg bg-champagne/10 px-3 mt-2">
                  <span className="font-inter text-champagne text-sm font-medium">Iporá Boutique — all inclusive</span>
                  <span className="font-inter text-champagne text-sm font-semibold">from USD 4,000/mo</span>
                </div>
              </div>
              <p className="font-inter text-ivory/40 text-xs">Exact price upon private inquiry · Opening Aug 1, 2026</p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="relative">
              <div className="border border-champagne/20 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800"
                  alt="Luxury boutique space, intimate and elegant environment for older adults"
                  className="w-full h-96 object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent flex items-end p-8">
                  <div>
                    <p className="font-cormorant text-2xl text-ivory">Rivera and Punta del Este, Uruguay</p>
                    <p className="font-inter text-champagne/80 text-sm">Opening: August 1, 2026</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-champagne rounded-2xl px-5 py-3">
                <p className="font-cormorant text-obsidian text-lg">Limited spots</p>
                <p className="font-inter text-obsidian text-xs">Pre-book with 50% deposit</p>
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
              <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Included services</span>
              <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light">
                Everything included in your monthly fee
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
              <p className="font-inter text-ivory/40 text-xs uppercase tracking-wide mb-3">Not included in the price:</p>
              <div className="flex gap-6 flex-wrap">
                {notIncluded.map((item) => (
                  <span key={item} className="font-inter text-ivory/40 text-sm">{item}</span>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Credibility anchor */}
      <section className="py-16 border-t border-champagne/10">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Our guarantee</span>
                <h2 className="font-cormorant text-4xl text-ivory font-light leading-tight mb-5">
                  We don't sell dreams.<br /><em className="text-champagne italic">We sell proven results.</em>
                </h2>
                <p className="font-inter text-ivory/60 text-sm leading-relaxed mb-4">
                  Residencial Iporá in Tacuarembó has been operating for over 4 years. Families who chose to trust and kept trusting. That can't be invented. It's the only résumé that matters.
                </p>
                <p className="font-inter text-ivory/60 text-sm leading-relaxed">
                  Iporá Boutique doesn't physically exist yet — it exists in the plans, the date, and the will of those building it. If you need certainties before they're due, this project is not for you. If you value vision and track record, welcome.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { number: '4+', label: 'Years of continuous operation in Tacuarembó' },
                  { number: '100%', label: 'Families who chose to renew month after month' },
                  { number: '01/08', label: 'Confirmed opening date — 2026' },
                  { number: 'Limited', label: 'Spots per boutique — no exceptions' },
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
                  Spots are being reserved now
                </h2>
                <p className="font-inter text-ivory/60 mb-4 max-w-xl mx-auto">
                  Residencial Iporá Boutique opens on <strong className="text-champagne">August 1, 2026</strong>. Spots are strictly limited by design — not by capacity, but by philosophy. Every resident deserves real attention, not a mass-market approach.
                </p>
                <p className="font-inter text-ivory/70 text-sm mb-3 max-w-lg mx-auto">
                  Pre-booking today means securing your spot with a <strong className="text-champagne">50% deposit</strong> and entering a direct, private conversation with Nicolás about the project, the service, and next steps.
                </p>
                <p className="font-inter text-ivory/40 text-sm mb-8 max-w-lg mx-auto">
                  There is no location to show yet. No photos of the place. There is a real track record, a committed date, and two people who have spent years proving they can do it — in Tacuarembó.
                </p>

                <div className="flex justify-center mb-6">
                  <a
                    href="https://wa.me/59898282938?text=Hello%20Nicol%C3%A1s%2C%20I%27m%20interested%20in%20pre-booking%20at%20Residencial%20Boutique%20Rivera.%20I%27d%20like%20to%20know%20the%20price%20and%20deposit%20process."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn-gold px-8 py-4 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all inline-flex items-center gap-2 justify-center"
                  >
                    Talk to Nicolás — Co-Founder
                  </a>
                </div>

                <p className="font-inter text-ivory/30 text-xs">
                  Sending a WhatsApp message does not create any automatic commitment. We will contact you privately and without pressure.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Price Anchoring Comparison Table */}
      <section className="py-20 border-t border-champagne/10">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-12">
              <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Value comparison</span>
              <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light">How much does care really cost?</h2>
              <p className="font-inter text-ivory/40 text-sm mt-3 max-w-xl mx-auto">Before deciding, it's important to understand what the market charges — and what each option includes.</p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="font-inter text-ivory/40 text-xs uppercase tracking-wide pb-4 pr-4 w-1/3">Feature</th>
                    <th className="font-inter text-ivory/30 text-xs uppercase tracking-wide pb-4 px-4 text-center">Home caregiver</th>
                    <th className="font-inter text-ivory/30 text-xs uppercase tracking-wide pb-4 px-4 text-center">Standard nursing home</th>
                    <th className="pb-4 px-4 text-center">
                      <span className="font-inter text-champagne text-xs uppercase tracking-wide">✦ Iporá Boutique</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ivory/5">
                  {[
                    { feature: 'Monthly cost (USD)', a: '3,500–5,000', b: '1,500–3,000*', c: 'from 4,000' },
                    { feature: 'Overnight care included', a: 'Extra', b: '✓', c: '✓' },
                    { feature: 'Weekly visiting physician', a: '✗', b: 'Emergencies only', c: '✓' },
                    { feature: 'Nutritionist included', a: '✗', b: '✗', c: '✓' },
                    { feature: 'Social worker', a: '✗', b: '✗', c: '✓' },
                    { feature: 'Personalized activities', a: '✗', b: 'Group only', c: '✓ Individual' },
                    { feature: '1-to-1 attention', a: '✓', b: '✗ (1 to 8+)', c: '✓ exclusive ratio' },
                    { feature: 'Peace of mind for family', a: 'Low', b: 'Medium', c: '✓ Maximum' },
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
              <p className="font-inter text-ivory/20 text-xs mt-3">* Standard nursing home: basic costs, not including frequent extras (diapers, medications, additional medical care, transfers).</p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="mt-10 border border-champagne/30 rounded-2xl p-6 bg-champagne/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-cormorant text-2xl text-ivory font-light mb-1">The conclusion is simple:</p>
                <p className="font-inter text-ivory/60 text-sm max-w-lg">For a price similar to an informal caregiver — without a doctor, nutritionist, or structure — Iporá Boutique offers a full team, a safe environment, and the peace of mind your family deserves.</p>
              </div>
              <a
                href="https://wa.me/59898282938?text=Hello%20Nicol%C3%A1s%2C%20I%27d%20like%20to%20know%20the%20exact%20price%20of%20Ipor%C3%A1%20Boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn-gold flex-shrink-0 px-7 py-3 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all text-sm whitespace-nowrap"
              >
                See exact price →
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-4xl text-ivory font-light">Why choose Residencial Iporá Boutique?</h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Star, title: 'Real track record', text: 'Over 4 years operating Residencial Iporá in Tacuarembó. We are not a promise — we are a model that already works.' },
              { icon: Shield, title: 'For busy families', text: 'No bureaucracy, no failing systems. One call with Nicolás and everything is sorted. For those who have no time to waste.' },
              { icon: Heart, title: 'The best or nothing', text: 'Unmatched caregiver ratio. Doctor, nutritionist and social worker included. Your loved one in the best hands in Uruguay.' },
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
          ← Back to main site
        </Link>
      </section>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-5 z-50">
        <a
          href="https://wa.me/59898282938?text=Hello%20Nicol%C3%A1s%2C%20I%27m%20interested%20in%20Rivera%20Boutique%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-pulse w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
          style={{ backgroundColor: '#25D366' }}
          aria-label="Contact via WhatsApp"
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