import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Diamond, Shield, Star, Users, Utensils, Stethoscope, Heart, Clock, MapPin, Camera, Calendar, MessageSquare, CheckCircle, Home } from 'lucide-react';
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

const carouselPhotos = [
  { url: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?w=1800&q=80', alt: 'Caregiver and elderly person sharing a happy moment' },
  { url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1800&q=80', alt: 'Elderly couple enjoying time together' },
  { url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1800&q=80', alt: 'Group activity in a warm care home' },
  { url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1800&q=80', alt: 'Caregiver holding hands with elderly resident' },
  { url: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1800&q=80', alt: 'Bright comfortable living space' },
  { url: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1800&q=80', alt: 'Warm family-like home environment' },
];

function CarouselSection() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % carouselPhotos.length), 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative h-72 md:h-96 overflow-hidden">
      {carouselPhotos.map((photo, i) => (
        <img
          key={i}
          src={photo.url}
          alt={photo.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? 'opacity-80' : 'opacity-0'}`}
        />
      ))}
      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {carouselPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-champagne w-5' : 'bg-white/40'}`}
          />
        ))}
      </div>
      {/* Arrows */}
      <button
        onClick={() => setCurrent(p => (p - 1 + carouselPhotos.length) % carouselPhotos.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center text-lg transition-all"
      >‹</button>
      <button
        onClick={() => setCurrent(p => (p + 1) % carouselPhotos.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center text-lg transition-all"
      >›</button>
    </section>
  );
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1800&q=80')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 60% 40%, rgba(212,175,55,0.08) 0%, transparent 70%)'
        }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
              <span className="font-inter text-champagne text-xs uppercase tracking-widest">Premium Care Network · Uruguay</span>
            </div>

            <h1 className="font-cormorant text-6xl md:text-8xl text-ivory font-light leading-none mb-6">
              Residencial<br />
              <em className="text-champagne italic">Iporá Boutique</em>
            </h1>

            <p className="font-inter text-ivory/60 text-lg max-w-xl leading-relaxed mb-6">
              You love them deeply — but you are exhausted. Caring for an aging parent at home is one of the hardest things a person can do. Iporá Boutique exists because your loved one deserves more than survival. They deserve to truly <em className="text-ivory/90">live</em>.
            </p>
            <div className="border border-champagne/20 rounded-2xl px-6 py-4 mb-10 max-w-xl">
              <p className="font-inter text-champagne text-sm font-medium mb-1">A care network across Uruguay</p>
              <p className="font-inter text-ivory/50 text-sm leading-relaxed">
                Iporá Boutique operates through a network of carefully selected boutique residences throughout Uruguay. Families work with our team to choose a home that fits their loved one's personality, preferences, and care needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:residencialipor@gmail.com?subject=Inquiry%20about%20Ipor%C3%A1%20Boutique&body=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20Ipor%C3%A1%20Boutique%20for%20my%20loved%20one."
                className="cta-btn cta-btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all"
              >
                Contact us <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/59898282938?text=Hello%20Nicol%C3%A1s%2C%20I%27m%20interested%20in%20Ipor%C3%A1%20Boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-ivory border border-ivory/20 hover:bg-ivory/10 transition-all"
              >
                WhatsApp Nicolás
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

      {/* The Concept */}
      <section className="py-24 relative" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1208 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-5">The ultimate act of love</span>
            <h2 className="font-cormorant text-5xl text-ivory font-light leading-tight mb-6">
              Not a hospital.<br />A <em className="text-champagne italic">home</em>.
            </h2>
            <p className="font-inter text-ivory/60 leading-relaxed mb-5">
              We know the guilt that keeps you up at night. The fear that Mom fell and no one was there. The exhaustion of being the only one who notices Dad is eating less. The weight of loving someone so much — and not being able to give them everything they need, no matter how hard you try.
            </p>
            <p className="font-inter text-ivory/60 leading-relaxed mb-5">
              Iporá Boutique is not a nursing facility. It is not a hospital. It is a network of boutique homes across Uruguay — each one intimate, warm, and thoughtfully selected — where your parent or grandparent spends their years living fully. Supported in their day-to-day life. Known by name, known by story, known by heart.
            </p>
            <p className="font-inter text-ivory/60 leading-relaxed mb-6">
              Choosing Iporá Boutique for your loved one is not giving up. It is the highest form of care — giving them a life you genuinely could not provide alone. That takes courage. And love.
            </p>
            {/* Price anchor */}
            <div className="border border-champagne/20 rounded-2xl p-6 max-w-md">
              <p className="font-inter text-ivory/40 text-xs uppercase tracking-widest mb-3">Pricing — transparent and tailored</p>
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
                  <span className="font-inter text-champagne text-sm font-medium">Iporá Boutique — starts from</span>
                  <span className="font-inter text-champagne text-sm font-semibold">USD 4,500/mo</span>
                </div>
              </div>
              <p className="font-inter text-ivory/40 text-xs">Every resident is unique. Pricing adjusts based on their level of dependency and care needs — tell us about your loved one and we will tailor a plan.</p>
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
                    <p className="font-cormorant text-2xl text-ivory">Boutique residences across Uruguay</p>
                    <p className="font-inter text-champagne/80 text-sm">Iporá Boutique Care Network</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-champagne rounded-2xl px-5 py-3">
                <p className="font-cormorant text-obsidian text-lg">Limited spots</p>
                <p className="font-inter text-obsidian text-xs">Personalized placement</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #1a1208 0%, #0d1a0d 100%)' }}>
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-14">
              <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">What's included</span>
              <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light mb-3">
                Everything your loved one needs to live fully
              </h2>
              <p className="font-inter text-ivory/40 text-sm max-w-xl mx-auto">We are not a hospital. We are a home. Our team supports each resident's day-to-day life — their routines, their dignity, their joy — for as long as they are with us.</p>
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

      {/* Lifestyle photo section */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576765608866-5b51046452be?w=1800&q=80"
          alt="Comfortable boutique living space"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(10,8,2,0.7) 0%, rgba(212,175,55,0.1) 100%)' }}>
          <div className="text-center px-5">
            <p className="font-cormorant text-4xl md:text-6xl text-ivory font-light italic">"A home they are proud to call their own."</p>
          </div>
        </div>
      </section>

      {/* Network section */}
      <section className="py-20 border-t border-champagne/10" style={{ background: 'linear-gradient(180deg, #0d1a0d 0%, #0a0a0a 100%)' }}>
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-12">
              <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">The Iporá Boutique Care Network</span>
              <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light mb-4">
                Choose the home. We provide the care.
              </h2>
              <p className="font-inter text-ivory/50 text-sm max-w-2xl mx-auto leading-relaxed">
                Iporá Boutique operates through a curated network of residential homes and trusted partners across Uruguay. Families are not confined to a single building — they participate in selecting the residence that best reflects their loved one's preferences, lifestyle, and care needs.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={80}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Camera, title: 'View residence photos', text: 'Browse photos of available homes within the Iporá network before making any decision.' },
                { icon: MessageSquare, title: 'Request information', text: 'Ask questions about any residence — its location, layout, environment, and current availability.' },
                { icon: Calendar, title: 'Schedule a visit', text: 'Arrange an in-person visit to any residence you are considering for your loved one.' },
                { icon: Heart, title: 'Discuss care needs', text: 'Meet with the Iporá team before admission to ensure we understand your loved one fully.' },
                { icon: Home, title: 'Participate in selection', text: 'Families are active participants in choosing the residence — not passive recipients of an assignment.' },
                { icon: MapPin, title: 'Network across Uruguay', text: 'Through partnerships with real estate professionals, we can identify homes based on your preferred location and lifestyle.' },
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
            <div className="border border-champagne/20 rounded-2xl p-7 bg-champagne/3">
              <p className="font-inter text-ivory/40 text-xs uppercase tracking-widest mb-3">A note on residence visits</p>
              <p className="font-inter text-ivory/60 text-sm leading-relaxed">
                When visiting a residence, real estate representatives or property owners may be present — particularly if the home is vacant or newly available within our network. This is part of our concierge-style placement process: we work closely with real estate professionals across Uruguay to give families access to exceptional homes that could not be found through conventional channels. You are not viewing a generic care facility. You are previewing a curated residence, selected specifically because it meets the standards of the Iporá Boutique Care Network.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Compliance section */}
      <section className="py-16 border-t border-champagne/10" style={{ background: 'linear-gradient(135deg, #0d1520 0%, #1a1208 100%)' }}>
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Residence standards & compliance</span>
                <h2 className="font-cormorant text-4xl text-ivory font-light leading-tight mb-5">
                  Not every property qualifies.<br /><em className="text-champagne italic">Ours do.</em>
                </h2>
                <p className="font-inter text-ivory/60 text-sm leading-relaxed mb-4">
                  Not all residential properties are suitable or legally approved for elderly care operations in Uruguay. Residences within the Iporá Boutique network must meet strict standards covering accessibility, safety infrastructure, emergency access, resident comfort, and applicable Uruguayan regulations.
                </p>
                <p className="font-inter text-ivory/60 text-sm leading-relaxed mb-4">
                  Iporá Boutique maintains a portfolio of pre-approved residences whenever possible to ensure a smooth and confident admission process for families.
                </p>
                <p className="font-inter text-ivory/60 text-sm leading-relaxed">
                  If a family has a specific property in mind, our team may evaluate it for suitability and compliance before it can be incorporated into the care network. Approval is subject to legal, safety, and operational requirements.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'Accessibility standards for reduced mobility',
                  'Emergency access and safety infrastructure',
                  'Resident comfort and spatial requirements',
                  'Compliance with Uruguayan elderly care regulations',
                  'Pre-approved portfolio for immediate placement',
                  'Custom property evaluation available upon request',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-champagne/15 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-champagne flex-shrink-0" />
                    <span className="font-inter text-ivory/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Shared living section */}
      <section className="py-16 border-t border-champagne/10" style={{ background: 'linear-gradient(180deg, #1a1208 0%, #0a0a0a 100%)' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-10">
              <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Boutique shared living</span>
              <h2 className="font-cormorant text-4xl text-ivory font-light mb-4">Small homes. Real community.</h2>
              <p className="font-inter text-ivory/50 text-sm max-w-2xl mx-auto leading-relaxed">
                Iporá Boutique residences operate as intimate shared-living environments. Depending on the size of the home, a small number of residents live together in a comfortable and personalized setting — for example, a three-bedroom residence may accommodate up to three residents.
              </p>
            </div>
            {/* Photo grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { url: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=500&q=80', alt: 'Cozy living room' },
                { url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&q=80', alt: 'Bright kitchen' },
                { url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80', alt: 'Comfortable bedroom' },
                { url: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=500&q=80', alt: 'Garden terrace' },
              ].map((photo, i) => (
                <div key={i} className="overflow-hidden rounded-xl h-36 md:h-44">
                  <img src={photo.url} alt={photo.alt} className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-400" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-champagne/20 rounded-2xl p-7">
                <h3 className="font-cormorant text-xl text-champagne mb-3">What choosing a residence means</h3>
                <p className="font-inter text-ivory/55 text-sm leading-relaxed">
                  Selecting a residence within the Iporá Boutique network does not mean exclusive occupancy of the entire property. Families are choosing their preferred home environment while their loved one benefits from the professional care, oversight, and quality standards of the Iporá Boutique Care Network — alongside a small number of fellow residents in a genuinely homelike setting.
                </p>
              </div>
              <div className="border border-champagne/20 rounded-2xl p-7">
                <h3 className="font-cormorant text-xl text-champagne mb-3">The Iporá difference</h3>
                <p className="font-inter text-ivory/55 text-sm leading-relaxed">
                  What distinguishes Iporá Boutique from any standard care home is not the building — it is the model. Our team, our standards, our oversight, and our philosophy of care travel with every resident into every home within our network. The residence is the backdrop. The care is what matters.
                </p>
              </div>
            </div>
            <div className="mt-8 border border-champagne/30 rounded-2xl p-8 bg-champagne/5 text-center">
              <p className="font-cormorant text-2xl text-ivory font-light italic leading-relaxed max-w-3xl mx-auto">
                "At Iporá Boutique, we believe exceptional elderly care begins with the right home. Our concierge-style approach allows families to participate in selecting a residence that reflects their loved one's preferences while benefiting from the professional care, oversight, and quality standards of the Iporá Boutique Care Network."
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Credibility anchor */}
      <section className="py-16 border-t border-champagne/10" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1520 100%)' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Our foundation</span>
                <h2 className="font-cormorant text-4xl text-ivory font-light leading-tight mb-5">
                  Proven care model.<br /><em className="text-champagne italic">Established track record.</em>
                </h2>
                <p className="font-inter text-ivory/60 text-sm leading-relaxed mb-4">
                  Residencial Iporá in Tacuarembó has been operating for over 4 years. Families who chose to trust us — and kept choosing us. That cannot be invented. It is the only credential that matters.
                </p>
                <p className="font-inter text-ivory/60 text-sm leading-relaxed">
                  Iporá Boutique brings this same care model — the same team, the same standards, the same philosophy — into a network of boutique homes across Uruguay. The address changes. The commitment does not.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { number: '4+', label: 'Years of continuous care operation in Tacuarembó' },
                  { number: '100%', label: 'Families who chose to renew month after month' },
                  { number: 'Network', label: 'Of pre-approved boutique residences across Uruguay' },
                  { number: 'Limited', label: 'Spots per residence — by design, not by circumstance' },
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

      {/* Healthcare plan requirement */}
      <section className="py-16 border-t border-champagne/10" style={{ background: 'linear-gradient(135deg, #0f1628 0%, #1a1208 100%)' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-10">
              <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Healthcare coverage</span>
              <h2 className="font-cormorant text-4xl text-ivory font-light mb-4">Every resident chooses a healthcare plan</h2>
              <p className="font-inter text-ivory/50 text-sm max-w-2xl mx-auto leading-relaxed">
                We are a home, not a clinic — but we take health seriously. Upon joining Iporá Boutique, every resident is required to enroll in one of the mutualist or private healthcare plans we provide and support. We guide families through the options so the right coverage is in place from day one.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Mutualist plan', text: 'Uruguay\'s established mutual health system. We help you enroll and coordinate all visits and follow-ups.' },
                { title: 'Private health insurance', text: 'Premium private coverage options with broader specialist access and faster response times.' },
                { title: 'We guide you', text: 'Not sure what plan is right? Our team walks every family through available options before admission.' },
              ].map((item, i) => (
                <div key={i} className="border border-champagne/15 rounded-2xl p-6 hover:border-champagne/35 transition-colors">
                  <h3 className="font-cormorant text-lg text-champagne mb-2">{item.title}</h3>
                  <p className="font-inter text-ivory/50 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Tiers section */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #0f1628 0%, #050505 100%)' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-12">
              <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-4">Care tiers</span>
              <h2 className="font-cormorant text-4xl text-ivory font-light mb-3">Priced by need, not by room</h2>
              <p className="font-inter text-ivory/50 text-sm max-w-xl mx-auto">No two residents are the same. Our pricing reflects the actual level of support your loved one requires — from companionship and supervision, to full daily care assistance.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { tier: 'Tier 1', name: 'Independent Support', price: 'from USD 4,500/mo', desc: 'For elders who are largely independent but benefit from daily companionship, meals, and light supervision. Ideal for early stages.' },
                { tier: 'Tier 2', name: 'Assisted Living', price: 'Customized pricing', desc: 'For residents who need help with daily activities — bathing, medication, mobility — while still enjoying active social participation.', featured: true },
                { tier: 'Tier 3', name: 'Full Dependency Care', price: 'Customized pricing', desc: 'For residents requiring round-the-clock assistance, specialized nursing support, and intensive daily care management.' },
              ].map((t, i) => (
                <div key={i} className={`rounded-2xl p-7 ${t.featured ? 'border-2 border-champagne bg-champagne/5' : 'border border-champagne/20'}`}>
                  <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-2">{t.tier}</span>
                  <h3 className="font-cormorant text-xl text-ivory mb-2">{t.name}</h3>
                  <p className="font-inter text-champagne text-sm font-medium mb-3">{t.price}</p>
                  <p className="font-inter text-ivory/50 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
            <p className="font-inter text-ivory/30 text-xs text-center mt-6">Exact pricing is determined after a private intake conversation about your loved one's specific needs and current health status.</p>
          </RevealSection>
        </div>
      </section>

      {/* Full-width photo carousel */}
      <CarouselSection />

      {/* Email CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1208 50%, #0a0a0a 100%)' }}>
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="border border-champagne/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle at 50% 0%, #D4AF37 0%, transparent 60%)'
              }} aria-hidden="true" />
              <div className="relative z-10">
                <Diamond className="w-10 h-10 text-champagne mx-auto mb-5" />
                <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light mb-4">
                  Tell us about your loved one
                </h2>
                <p className="font-inter text-ivory/60 mb-4 max-w-xl mx-auto">
                  Residencial Iporá Boutique opens on <strong className="text-champagne">August 1, 2026</strong>. Spots are strictly limited — not by capacity, but by our commitment to genuine, individual attention for every resident.
                </p>
                <p className="font-inter text-ivory/70 text-sm mb-3 max-w-lg mx-auto">
                  To explore if Iporá Boutique is the right fit, send us an email and tell us about your parent or grandparent — their name, their personality, their needs, their story. We will reach out personally to discuss the care tier that suits them best and answer every question you have.
                </p>
                <p className="font-inter text-ivory/40 text-sm mb-8 max-w-lg mx-auto">
                  No pressure. No commitment. Just an honest conversation about how we can best support your family.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a
                    href="mailto:residencialipor@gmail.com?subject=Inquiry%20about%20Ipor%C3%A1%20Boutique&body=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20Ipor%C3%A1%20Boutique%20for%20my%20loved%20one.%0A%0ATheir%20name%3A%0ATheir%20age%3A%0ATheir%20current%20needs%3A%0A%0APlease%20contact%20me%20at%3A"
                    className="cta-btn cta-btn-gold px-8 py-4 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all inline-flex items-center gap-2 justify-center"
                  >
                    Send us an email →
                  </a>
                  <a
                    href="https://wa.me/59898282938?text=Hello%20Nicol%C3%A1s%2C%20I%27m%20interested%20in%20Ipor%C3%A1%20Boutique%20for%20my%20loved%20one."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn px-8 py-4 rounded-full font-inter font-medium text-ivory border border-ivory/20 hover:bg-ivory/5 transition-all inline-flex items-center gap-2 justify-center text-sm"
                  >
                    Or WhatsApp Nicolás
                  </a>
                </div>

                <p className="font-inter text-ivory/30 text-xs">
                  Your inquiry is completely confidential. We respond personally to every message.
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
                    { feature: 'Monthly cost (USD)', a: '3,500–5,000', b: '1,500–3,000*', c: 'from 4,500' },
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
      <section className="py-16" style={{ background: 'linear-gradient(180deg, #0d1520 0%, #0a0a0a 100%)' }}>
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <RevealSection>
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-4xl text-ivory font-light">Why choose Residencial Iporá Boutique?</h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Because you love them', text: 'You have carried this weight long enough. Choosing Iporá Boutique is the greatest gift you can give your parent — a life fully lived, not merely managed.' },
              { icon: Shield, title: 'A home, not a ward', text: "No hospital corridors. No institutional schedules. A boutique home where your loved one's remaining years are filled with warmth, dignity, and real human connection." },
              { icon: Star, title: 'Proven, not promised', text: 'Over 4 years running Residencial Iporá in Tacuarembó. Families who trusted us — and still do. That is the only credential that matters.' },
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
      <section className="py-10 border-t border-champagne/20 text-center" style={{ background: '#050505' }}>
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