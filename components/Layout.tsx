
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, COMPANY_NAME, ADDRESS, PHONE, EMAIL, WHATSAPP } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-navy shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#/" className="flex items-center space-x-2">
          <div className="bg-brand-yellow p-1 rounded font-bold text-brand-navy">ND</div>
          <span className={`font-heading text-lg md:text-xl font-bold tracking-tight ${scrolled ? 'text-white' : 'text-white'}`}>
            NOOR DIESEL
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-200 hover:text-brand-yellow transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+923335132538"
          className="hidden md:block bg-brand-yellow text-brand-navy px-6 py-2 font-bold rounded hover:bg-white transition-colors"
        >
          {PHONE}
        </a>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-navy border-t border-gray-800 absolute top-full left-0 w-full shadow-2xl">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-brand-yellow font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t-4 border-brand-yellow">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="bg-brand-yellow text-brand-navy px-2 py-1 rounded mr-2">ND</span>
            NOOR DIESEL
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Trusted provider of industrial power solutions, generator sales, and specialized maintenance services in Islamabad for over a decade.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_ITEMS.slice(1, 5).map(item => (
              <li key={item.href}>
                <a href={item.href} className="text-gray-400 hover:text-brand-yellow text-sm transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contact Details</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start">
              <span className="text-brand-yellow mr-3">Address:</span>
              {ADDRESS}
            </li>
            <li className="flex items-center">
              <span className="text-brand-yellow mr-3">Phone:</span>
              {PHONE}
            </li>
            <li className="flex items-center">
              <span className="text-brand-yellow mr-3">WhatsApp:</span>
              {WHATSAPP}
            </li>
            <li className="flex items-center">
              <span className="text-brand-yellow mr-3">Email:</span>
              {EMAIL}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe to receive maintenance tips and new product updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-brand-darkgrey text-white px-4 py-2 w-full focus:outline-none rounded-l border border-brand-darkgrey focus:border-brand-yellow"
            />
            <button className="bg-brand-yellow text-brand-navy px-4 py-2 font-bold rounded-r">GO</button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
