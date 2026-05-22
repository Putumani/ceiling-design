import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import desktopHero from '../assets/home/hero/Desktop-hero.jpg';
import mobileHero from '../assets/home/hero/mobile-hero.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen md:h-[85vh] w-full flex flex-col md:flex-row items-center overflow-hidden bg-navy">
      <div className="relative h-[45vh] md:h-full w-full md:absolute md:inset-0 z-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileHero} />
          <img 
            src={desktopHero} 
            alt="Luxury Ceiling Installation" 
            className="w-full h-full object-cover object-center"
          />
        </picture>
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy/40"></div>
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10 flex justify-end">
        <div className="bg-navy text-white p-8 md:p-16 w-full md:max-w-2xl border-t-4 border-cyan shadow-2xl -mt-12 md:mt-0 relative">
          <span className="text-cyan uppercase tracking-[0.4em] text-[9px] md:text-[10px] font-bold block mb-4">
            Bespoke Architectural Interiors
          </span>
          <h1 className="text-3xl md:text-6xl font-light tracking-tight mb-6 md:mb-8 leading-tight uppercase">
            Define Your <br />
            <span className="font-black text-white">Atmosphere</span>
          </h1>
          <div className="w-12 md:w-16 h-1 bg-cyan mb-8 md:mb-10"></div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-md font-medium">
            Elevating South African homes with master-crafted PVC ceilings, 
            custom bulkheads, and precision lighting.
          </p>
          <button 
            onClick={scrollToContact}
            className="w-full md:w-auto bg-white text-navy px-10 py-4 rounded-sm font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 hover:bg-cyan hover:text-white transition-all group shadow-xl"
          >
            Start Your Project <FaLongArrowAltRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;