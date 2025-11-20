import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, HardHat, Ruler, ShieldCheck, Zap, Building2, MousePointerClick } from 'lucide-react';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES, WHATSAPP_LINK, PUBLIC_IMAGES } from '../constants';

export const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <div className="w-full bg-brand-dark">
      
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        {/* Background Image with Parallax-like effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src={PUBLIC_IMAGES[0]} 
            alt="Structural Engineering" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Sophisticated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-navy/90 to-brand-navy/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent h-64 bottom-0"></div>
          
          {/* Decorative Grid Lines */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-8"
            >
              <div className="inline-flex items-center gap-3 mb-8 group cursor-default">
                <div className="h-[2px] w-12 bg-brand-yellow group-hover:w-20 transition-all duration-500"></div>
                <span className="text-brand-yellow text-xs font-bold uppercase tracking-[0.2em]">Premium Engineering Solutions</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1] mb-8">
                Precision <br/>
                <span className="text-outline stroke-white stroke-2">in Every</span> <br/>
                <span className="text-brand-yellow">Structure.</span>
              </h1>
              
              <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed font-light border-l border-white/20 pl-6">
                DINGA ENGINEERINGS provides innovative, sustainable, and durable engineering services. We turn complex blueprints into tangible realities for a stronger tomorrow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Button to="/services" variant="primary" className="h-14 px-10 text-sm">
                   View Our Services
                </Button>
                <Button to="/contact" variant="outline" className="h-14 px-10 text-sm border-white text-white hover:bg-white hover:text-brand-dark">
                   Contact Us
                </Button>
              </div>
            </motion.div>

            {/* Hero Decorative Right Side */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="lg:col-span-4 hidden lg:block relative"
            >
               <div className="relative z-10 border border-white/10 bg-white/5 backdrop-blur-sm p-8 rounded-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-brand-yellow p-3 rounded-sm">
                      <Building2 className="text-brand-dark" size={24} />
                    </div>
                    <div>
                      <p className="text-white font-serif text-xl">Modern Design</p>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Civil & Structural</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    "We don't just build structures; we engineer the future with precision and integrity."
                  </p>
                  <div className="h-1 w-full bg-white/10 overflow-hidden">
                    <div className="h-full w-2/3 bg-brand-yellow animate-pulse"></div>
                  </div>
               </div>
               {/* Abstract shape behind */}
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-blue/30 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-dark to-transparent z-20 flex items-end justify-center pb-8">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/30 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION SECTION - White bg */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            <div className="relative">
              <div className="relative z-10">
                 <img 
                  src={PUBLIC_IMAGES[1]} 
                  alt="Engineering Planning" 
                  className="w-full h-auto shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-yellow z-0 hidden md:block"></div>
              <div className="absolute -top-12 -left-12 border-[1px] border-brand-navy w-full h-full z-0 hidden md:block opacity-20"></div>
            </div>

            <div className="flex flex-col justify-center">
               <h4 className="text-brand-blue font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-brand-yellow"></span> Who We Are
               </h4>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">
                 Engineering Excellence, <br/> Built to Last.
               </h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                 DINGA ENGINEERINGS is a leader in civil and structural engineering. We combine technical expertise with practical experience to deliver projects that stand the test of time. From residential complexes to industrial infrastructure, our approach is rooted in safety, sustainability, and superior craftsmanship.
               </p>
               
               <div className="grid grid-cols-2 gap-8 mb-10">
                 <div className="border-l-2 border-brand-yellow pl-6">
                    <h3 className="text-3xl font-bold text-brand-navy mb-1">15+</h3>
                    <p className="text-xs uppercase tracking-widest text-gray-500">Years Experience</p>
                 </div>
                 <div className="border-l-2 border-brand-yellow pl-6">
                    <h3 className="text-3xl font-bold text-brand-navy mb-1">120+</h3>
                    <p className="text-xs uppercase tracking-widest text-gray-500">Projects Done</p>
                 </div>
               </div>

               <Link to="/about" className="group inline-flex items-center gap-3 text-brand-navy font-bold uppercase tracking-widest text-xs hover:text-brand-blue transition-colors">
                  Read More About Us <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Dark Navy bg */}
      <section className="py-32 bg-brand-dark relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-10">
            <div className="max-w-2xl">
              <h4 className="text-brand-yellow font-bold uppercase tracking-widest text-xs mb-4">Our Expertise</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Core Services</h2>
            </div>
            <Button to="/services" variant="outline" className="hidden md:flex mt-6 md:mt-0 border-white/30 text-white hover:bg-white hover:text-brand-dark">
              View All Capabilities
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} variant="dark" />
              </motion.div>
            ))}
          </div>
           <div className="mt-12 md:hidden flex justify-center">
             <Button to="/services" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-brand-dark">
              View All Capabilities
            </Button>
           </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Light Gray bg */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-4xl font-serif font-bold text-brand-dark mb-6">Why Partner With Us?</h2>
             <p className="text-gray-600 text-lg font-light">We bring a unique combination of technical expertise, modern technology, and practical experience to every project we undertake.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HardHat, title: "Expert Engineers", desc: "Certified professionals leading every project with precision." },
              { icon: Zap, title: "Modern Tech", desc: "Utilizing the latest tools for accurate and efficient results." },
              { icon: ShieldCheck, title: "Safety First", desc: "Rigorous safety protocols to protect our team and your asset." },
              { icon: Ruler, title: "Precision", desc: "Attention to detail in every measurement and material selection." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-brand-yellow group">
                <div className="w-14 h-14 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER - Brand Yellow */}
      <section className="py-24 bg-brand-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${PUBLIC_IMAGES[5]})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
         
         <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Ready to start your project?</h2>
            <p className="text-brand-dark/80 text-xl mb-10 max-w-2xl mx-auto font-medium">
              Contact us today for a consultation or quote. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Button to="/contact" variant="white" className="min-w-[200px]">
                 Get in Touch
               </Button>
               <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white min-w-[200px]"
              >
                WhatsApp Us
              </a>
            </div>
         </div>
      </section>
    </div>
  );
};