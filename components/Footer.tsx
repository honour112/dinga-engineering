import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { COMPANY_NAME, TAGLINE, ADDRESS, EMAIL, PHONE_NUMBER, NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
               <h2 className="text-3xl font-serif font-bold text-white tracking-wide">DINGA</h2>
               <p className="text-xs text-brand-yellow uppercase tracking-[0.3em] font-bold">Engineerings</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Professional engineering and construction services specializing in civil, structural, and electrical projects across Malawi.
            </p>
            <div className="pt-4">
              <p className="text-white font-serif italic text-lg opacity-80 border-l-2 border-brand-yellow pl-4">"{TAGLINE}"</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-8 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-brand-yellow"></span> Navigation
            </h3>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-brand-yellow transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-brand-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
           <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-8 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-brand-yellow"></span> Expertise
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Civil Engineering</li>
              <li>Building Construction</li>
              <li>Structure Design</li>
              <li>Renovations</li>
              <li>Consultancy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-8 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-brand-yellow"></span> Contact
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4 text-gray-400 group">
                <MapPin size={18} className="mt-1 text-brand-yellow shrink-0" />
                <span className="text-sm leading-relaxed">{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 group">
                <Phone size={18} className="text-brand-yellow shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-sm hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </div>
              <div className="flex items-center gap-4 text-gray-400 group">
                <Mail size={18} className="text-brand-yellow shrink-0" />
                <a href={`mailto:${EMAIL}`} className="text-sm hover:text-white transition-colors">{EMAIL}</a>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-8">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 p-3 hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 text-white rounded-sm">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};