import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { NAV_LINKS, EMAIL, ADDRESS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar - Corporate Info */}
      <div className={`hidden lg:block w-full bg-brand-dark text-white/60 text-[11px] font-medium tracking-wide transition-all duration-300 border-b border-white/5 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-11 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-8 h-full flex justify-between items-center">
          <div className="flex space-x-8">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
              <Mail size={12} className="text-brand-yellow" />
              <span>{EMAIL}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-brand-yellow" />
              <span>{ADDRESS}</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
             <span>Lilongwe, Malawi</span>
             <span className="text-brand-yellow/50">|</span>
             <span>Mon - Sat: 08:00 - 17:00</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3 z-50 relative">
              <div className={`w-11 h-11 flex items-center justify-center transition-all duration-300 ${scrolled ? 'bg-brand-yellow text-brand-dark' : 'bg-white text-brand-navy'}`}>
                <span className="font-serif font-bold text-2xl">D</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className={`font-serif text-xl leading-none tracking-wide font-bold transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}>DINGA</span>
                <span className="text-brand-yellow text-[10px] font-sans uppercase tracking-[0.3em] leading-tight font-bold">Engineerings</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 relative py-2 group ${
                    location.pathname === link.path ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-brand-yellow transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
              
              <div className="w-px h-8 bg-white/10 mx-2"></div>

              <a 
                href="https://wa.me/265888261522" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3 font-bold text-xs uppercase tracking-widest transition-all duration-300 border hover:-translate-y-0.5 ${
                  scrolled 
                  ? 'bg-brand-yellow text-brand-dark border-brand-yellow hover:bg-white hover:border-white' 
                  : 'bg-transparent text-white border-white/30 hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-dark'
                }`}
              >
                <Phone size={14} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`transition-colors focus:outline-none p-2 ${isOpen ? 'text-white' : 'text-white'}`}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`fixed inset-0 bg-brand-dark z-40 lg:hidden transition-all duration-500 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
          <div className="flex flex-col h-full justify-center px-8 space-y-6">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-2xl font-serif font-bold text-white hover:text-brand-yellow transition-colors flex items-center justify-between group border-b border-white/5 pb-4"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
                <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-yellow" />
              </Link>
            ))}
             <a 
              href="https://wa.me/265888261522" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 w-full bg-brand-yellow text-brand-dark px-6 py-5 font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors"
            >
              <Phone size={18} />
              Start a Project
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};