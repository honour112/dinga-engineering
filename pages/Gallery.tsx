import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { PUBLIC_IMAGES } from '../constants';

const GALLERY_IMAGES = PUBLIC_IMAGES.map((src, i) => ({
  id: i,
  src,
  alt: `Project Image ${i + 1}`
}));

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Header */}
       <div className="relative bg-brand-dark py-40 flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img src={PUBLIC_IMAGES[2]} alt="Gallery Background" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
         </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white"
          >
            Our Portfolio
          </motion.h1>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
             A showcase of our engineering excellence and completed projects.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_IMAGES.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="cursor-pointer overflow-hidden group shadow-lg relative bg-brand-navy"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-72">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                      <ZoomIn className="text-brand-yellow mb-2" size={32} />
                      <span className="text-white font-bold tracking-widest text-sm">VIEW PROJECT</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-dark/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-yellow focus:outline-none transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl border-4 border-white"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};