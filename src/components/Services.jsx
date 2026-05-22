import React from 'react';
import { FaCheck, FaLongArrowAltRight } from 'react-icons/fa';

import ceilingsImg from '../assets/home/services/ceilings.jpg';
import electricalImg from '../assets/home/services/electrical.jpg';
import homeFittingImg from '../assets/home/services/home-fitting-tiling.jpg';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceCategories = [
    { 
      title: "Ceilings & Rhino-Lighting", 
      image: ceilingsImg,
      items: ["Custom Bulkheads", "PVC & Sleek Tape Ceilings", "Rhinolite Application", "Rhino-lighting Systems"] 
    },
    { 
      title: "Electrical & Downlights", 
      image: electricalImg,
      items: ["Modern LED Downlights", "General Electrical Wiring", "Smart Lighting Control", "Energy-Saving Solutions"] 
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-16 border-t border-gray-100 pt-10">
          <h2 className="text-4xl md:text-5xl font-light text-navy tracking-tight uppercase shrink-0 leading-tight">
            OUR EXCLUSIVE <br />
            <span className="font-black">SERVICES</span>
          </h2>
          <div className="max-w-2xl">
             <div className="w-12 h-1 bg-[#8bc12d] mb-4"></div>
             <p className="text-navy/70 text-sm md:text-base leading-loose font-medium">
                At Ceillings Design, we provide a complete ecosystem of ceilings solutions. 
                From precision Rhino-lighting and bespoke bulkheads to nationwide material supply 
                and logistics, we ensure every detail of your environment is master-crafted.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-sm h-[450px] shadow-2xl">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide uppercase">
                  {cat.title}
                </h3>
                
                <div className="w-10 h-0.5 bg-[#8bc12d] mb-6"></div>

                <ul className="space-y-3 mb-8">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 text-sm md:text-base font-medium tracking-wide">
                      <FaCheck className="text-[#8bc12d] text-xs" /> {item}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToContact}
                  className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-black text-white hover:text-[#8bc12d] transition-colors group/btn"
                >
                  Inquire Now <FaLongArrowAltRight className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 py-10 border-y border-gray-100 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
           <span className="text-navy/30 text-[10px] uppercase tracking-widest font-black">Nationwide Logistics</span>
           <span className="text-navy/30 text-[10px] uppercase tracking-widest font-black">Material Supply</span>
           <span className="text-navy/30 text-[10px] uppercase tracking-widest font-black">Project Management</span>
           <span className="text-navy/30 text-[10px] uppercase tracking-widest font-black">Wholesale Pricing</span>
        </div>
      </div>
    </section>
  );
};

export default Services;