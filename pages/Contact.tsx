import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';
import { PHONE_NUMBER, EMAIL, ADDRESS, WHATSAPP_LINK, PUBLIC_IMAGES } from '../constants';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly.");
  };

  return (
    <div className="w-full">
       {/* Header */}
       <div className="relative bg-brand-dark py-40 flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img src={PUBLIC_IMAGES[5]} alt="Contact Background" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
         </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white"
          >
             Let’s Build Together
          </motion.h1>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
             We respond quickly and are always ready to discuss your project.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-brand-blue font-bold uppercase tracking-widest text-xs mb-4">Contact Us</h4>
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-10">Get in Touch</h2>
              
              <div className="space-y-10 mb-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 group-hover:bg-brand-yellow transition-colors duration-300 flex items-center justify-center text-brand-navy group-hover:text-brand-dark shrink-0 rounded-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">Call / WhatsApp</h3>
                    <p className="text-gray-500 mb-2 text-sm">Available Mon-Sat, 8am - 6pm</p>
                    <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-brand-navy font-serif text-xl hover:text-brand-blue transition-colors block">{PHONE_NUMBER}</a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-sm text-brand-yellow font-bold uppercase tracking-wider hover:underline mt-2 inline-block text-shadow-sm">Chat on WhatsApp &rarr;</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 group-hover:bg-brand-yellow transition-colors duration-300 flex items-center justify-center text-brand-navy group-hover:text-brand-dark shrink-0 rounded-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">Email Us</h3>
                    <p className="text-gray-500 mb-2 text-sm">For inquiries and quotes</p>
                    <a href={`mailto:${EMAIL}`} className="text-brand-navy font-serif text-xl hover:text-brand-blue transition-colors">{EMAIL}</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 group-hover:bg-brand-yellow transition-colors duration-300 flex items-center justify-center text-brand-navy group-hover:text-brand-dark shrink-0 rounded-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">Visit Us</h3>
                    <p className="text-brand-navy font-serif text-xl">{ADDRESS}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-10 md:p-12 shadow-xl border-t-4 border-brand-yellow"
            >
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-8">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                    <input required type="text" id="name" className="w-full px-4 py-4 bg-white border border-gray-200 focus:border-brand-yellow focus:ring-0 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                   <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
                    <input required type="tel" id="phone" className="w-full px-4 py-4 bg-white border border-gray-200 focus:border-brand-yellow focus:ring-0 outline-none transition-colors" placeholder="+265..." />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                  <input required type="email" id="email" className="w-full px-4 py-4 bg-white border border-gray-200 focus:border-brand-yellow focus:ring-0 outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Interested Service</label>
                  <select id="service" className="w-full px-4 py-4 bg-white border border-gray-200 focus:border-brand-yellow focus:ring-0 outline-none transition-colors text-gray-700">
                    <option value="">Select a service...</option>
                    <option value="Construction">Construction</option>
                    <option value="Engineering">Civil Engineering</option>
                    <option value="Renovation">Renovations</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Message</label>
                  <textarea required id="message" rows={4} className="w-full px-4 py-4 bg-white border border-gray-200 focus:border-brand-yellow focus:ring-0 outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-yellow text-brand-dark font-bold text-sm uppercase tracking-widest py-4 px-8 hover:bg-brand-gold transition-colors flex items-center justify-center gap-2 shadow-lg">
                  Send Message <Send size={16} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};