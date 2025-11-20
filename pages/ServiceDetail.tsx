import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { SERVICES, WHATSAPP_LINK } from '../constants';
import { Button } from '../components/Button';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = SERVICES.find(s => s.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="pt-40 pb-20 text-center bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">Service not found</h2>
        <Button onClick={() => navigate('/services')} variant="secondary">Back to Services</Button>
      </div>
    );
  }

  return (
    <div className="w-full">
       {/* Header */}
      <div className="relative bg-brand-dark py-32 lg:py-40 flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img src={service.imageUrl} alt="Service Background" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
         </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
            <button onClick={() => navigate('/services')} className="flex items-center text-brand-yellow hover:text-white mb-8 transition-colors text-xs font-bold uppercase tracking-widest">
            <ArrowLeft size={16} className="mr-2" /> Back to Services
          </button>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-4 text-white"
          >
            {service.title}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-8">Service Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
              {service.fullDescription}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-12 font-light">
              At DINGA ENGINEERINGS, we approach {service.title.toLowerCase()} with a commitment to innovation and durability. 
              Our team ensures that every aspect of the project is handled with precision, from initial planning to final execution.
            </p>

            {/* Benefits List */}
            <div className="bg-gray-50 p-10 border-l-4 border-brand-yellow">
                <h3 className="text-xl font-bold text-brand-navy mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-gray-700">
                    <CheckCircle size={20} className="text-brand-blue shrink-0" />
                    <span>{benefit}</span>
                    </li>
                ))}
                </ul>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-5">
             <div className="sticky top-32">
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-auto shadow-2xl object-cover aspect-video mb-8 border-4 border-white"
                    />
                    
                    <div className="bg-brand-navy text-white p-10 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow"></div>
                        <h3 className="text-2xl font-serif font-bold mb-4">Start Your Project</h3>
                        <p className="mb-8 text-gray-400 text-sm leading-relaxed">Ready to discuss your requirements? Get a quote or consultation today.</p>
                        <a 
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-brand-yellow text-brand-dark font-bold uppercase tracking-widest py-4 px-8 hover:bg-white transition-colors shadow-lg"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </motion.div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};