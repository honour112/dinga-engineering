import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, PUBLIC_IMAGES } from '../constants';
import { ServiceCard } from '../components/ServiceCard';

export const Services: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="relative bg-brand-dark py-40 flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img src={PUBLIC_IMAGES[3]} alt="Services Background" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 to-brand-dark"></div>
         </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white"
          >
            Our Services
          </motion.h1>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Comprehensive solutions designed with efficiency, safety, and unmatched expertise.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} variant="light" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};