import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  variant?: 'light' | 'dark';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'light' }) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`group h-full flex flex-col transition-all duration-500 border-b-4 border-transparent hover:border-brand-yellow relative overflow-hidden ${isDark ? 'bg-brand-navy text-white' : 'bg-white text-brand-dark shadow-lg'}`}>
      
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
        />
        <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-brand-dark/40 group-hover:bg-transparent' : 'bg-brand-navy/10 group-hover:bg-transparent'}`}></div>
        
        {/* Hover Overlay Icon */}
        <div className="absolute bottom-0 right-0 bg-brand-yellow p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <ArrowRight className="text-brand-dark" size={24} />
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <span className={`text-[10px] font-bold uppercase tracking-widest mb-3 block ${isDark ? 'text-brand-yellow' : 'text-brand-blue'}`}>Service</span>
          <h3 className={`text-2xl font-serif font-bold transition-colors ${isDark ? 'text-white' : 'text-brand-dark'}`}>{service.title}</h3>
        </div>
        
        <p className={`mb-8 flex-grow line-clamp-3 leading-relaxed font-light text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
            {service.shortDescription}
        </p>
        
        <Link 
          to={`/services/${service.id}`}
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 self-start border-b pb-1 ${
             isDark 
             ? 'text-white border-white/30 hover:border-brand-yellow hover:text-brand-yellow' 
             : 'text-brand-navy border-brand-navy/30 hover:border-brand-yellow hover:text-brand-blue'
          }`}
        >
          Read Details
        </Link>
      </div>
    </div>
  );
};