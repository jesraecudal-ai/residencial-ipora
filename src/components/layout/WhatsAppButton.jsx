import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isRivera = location.pathname === '/rivera';

  const contacts = [
    {
      name: 'Sonia Sanguinet',
      role: 'Fundadora',
      phone: '59891064292',
      message: isRivera
        ? 'Hola Sonia, me interesa el Proyecto Rivera Boutique y quisiera más información.'
        : 'Hola Sonia, me interesa Residencial Iporá y quisiera más información.',
      color: 'bg-trust-blue',
    },
    {
      name: 'Nicolás Macedo',
      role: 'Co-Fundador',
      phone: '59898282938',
      message: isRivera
        ? 'Hola Nicolás, me interesa el Proyecto Rivera Boutique y quisiera más información.'
        : 'Hola Nicolás, me interesa Residencial Iporá y quisiera más información.',
      color: 'bg-navy',
    },
  ];

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Contacts popup */}
      {open && (
        <div className="flex flex-col gap-3 mb-2 animate-in slide-in-from-bottom-4 fade-in duration-300">
          {contacts.map((c) => (
            <a
              key={c.phone}
              href={`https://wa.me/${c.phone}?text=${encodeURIComponent(c.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-2xl shadow-2xl px-4 py-3 hover-lift cursor-pointer border border-slate-100 min-w-[220px]"
            >
              <div className={`w-10 h-10 rounded-full ${c.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-sm font-medium">{c.name[0]}</span>
              </div>
              <div>
                <p className="font-inter font-semibold text-navy text-sm">{c.name}</p>
                <p className="font-inter text-slate-mist text-xs">{c.role}</p>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="whatsapp-pulse w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Contactar por WhatsApp"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white fill-white" />
        )}
      </button>

      {!open && (
        <span className="font-inter text-xs text-slate-mist bg-white px-3 py-1 rounded-full shadow-md border border-slate-100">
          Hablar por WhatsApp
        </span>
      )}
    </div>
  );
}