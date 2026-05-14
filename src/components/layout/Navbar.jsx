import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Cómo Funciona', path: '/como-funciona' },
  { label: 'Blog', path: '/blog' },
  { label: 'Iporá Boutique', path: '/rivera', special: true },
  { label: 'Contacto', path: '/contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isRivera = location.pathname === '/rivera';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  if (isRivera) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-header shadow-sm ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-trust-blue flex items-center justify-center">
            <Heart className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="font-cormorant text-2xl font-light text-navy tracking-wide">
            Residencial Iporá
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-inter text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-trust-blue focus-visible:outline-offset-2 rounded ${
                link.special
                  ? 'text-champagne border border-champagne/40 px-4 py-2 rounded-full hover:bg-champagne hover:text-obsidian'
                  : location.pathname === link.path
                  ? 'text-trust-blue'
                  : 'text-slate-mist hover:text-navy'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-navy focus-visible:outline-2 focus-visible:outline-trust-blue rounded"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-header border-t border-slate-200/50 px-5 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-inter text-base font-medium py-2 transition-colors ${
                link.special
                  ? 'text-champagne'
                  : location.pathname === link.path
                  ? 'text-trust-blue'
                  : 'text-slate-mist'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}