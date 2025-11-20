import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import { PUBLIC_IMAGES } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="relative bg-brand-dark py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src={PUBLIC_IMAGES[4]} alt="Team Background" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
         </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white"
          >
            Who We Are
          </motion.h1>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">Precision. Reliability. Professional Craftsmanship.</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h4 className="text-brand-blue font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                 <span className="w-8 h-[2px] bg-brand-yellow"></span> Our Story
              </h4>
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-8 leading-tight">A Legacy of <br/>Engineering Excellence</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                DINGA ENGINEERINGS is a trusted engineering firm offering a wide range of professional construction and technical services. 
                Founded on the principles of integrity and innovation, we have grown to become a cornerstone in the Malawi construction industry.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With a skilled team and years of experience, we focus on engineering accuracy, strong project management, and safety-first execution. 
                We don't just build structures; we build relationships based on trust and performance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-5 bg-gray-50 border-l-4 border-brand-navy">
                  <Users className="text-brand-navy" size={24} />
                  <span className="font-bold text-brand-dark">Expert Team</span>
                </div>
                <div className="flex items-center gap-3 p-5 bg-gray-50 border-l-4 border-brand-navy">
                  <Award className="text-brand-navy" size={24} />
                  <span className="font-bold text-brand-dark">Certified Quality</span>
                </div>
                <div className="flex items-center gap-3 p-5 bg-gray-50 border-l-4 border-brand-navy">
                  <Clock className="text-brand-navy" size={24} />
                  <span className="font-bold text-brand-dark">On-Time Delivery</span>
                </div>
                 <div className="flex items-center gap-3 p-5 bg-gray-50 border-l-4 border-brand-navy">
                  <CheckCircle className="text-brand-navy" size={24} />
                  <span className="font-bold text-brand-dark">Sustainable</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 relative">
              <img src={PUBLIC_IMAGES[0]} alt="Engineer Site" className="w-full h-64 object-cover shadow-lg mt-8 grayscale hover:grayscale-0 transition-all duration-500" />
              <img src={PUBLIC_IMAGES[1]} alt="Construction" className="w-full h-64 object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-500" />
              <img src={PUBLIC_IMAGES[2]} alt="Blueprints" className="w-full h-64 object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-500" />
              <img src={PUBLIC_IMAGES[3]} alt="Team Meeting" className="w-full h-64 object-cover shadow-lg mt-8 grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 border-[20px] border-brand-yellow/10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        {/* Background lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
            <div className="bg-brand-dark/30 p-12 border border-white/10 hover:border-brand-yellow transition-colors relative overflow-hidden group backdrop-blur-md">
              <div className="absolute top-0 right-0 bg-brand-yellow w-20 h-20 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <h3 className="text-3xl font-serif font-bold text-brand-yellow mb-6">Our Mission</h3>
              <p className="text-xl text-gray-300 italic leading-relaxed">
                "To deliver engineering excellence through innovation, integrity, and precision in every project we undertake."
              </p>
            </div>
            <div className="bg-brand-dark/30 p-12 border border-white/10 hover:border-brand-yellow transition-colors relative overflow-hidden group backdrop-blur-md">
               <div className="absolute bottom-0 left-0 bg-brand-blue w-20 h-20 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <h3 className="text-3xl font-serif font-bold text-brand-yellow mb-6">Our Vision</h3>
              <p className="text-xl text-gray-300 italic leading-relaxed">
                "To be Malawi’s leading provider of sustainable, reliable, and world-class engineering solutions."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};