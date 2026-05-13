import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function Layout() {
  const location = useLocation();
  const isRivera = location.pathname === '/rivera';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {!isRivera && <Footer />}
      <WhatsAppButton />
    </div>
  );
}