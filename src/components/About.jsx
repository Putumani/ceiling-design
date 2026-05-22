import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import aboutImage1 from '../assets/home/about/about-image-1.jpg';
import aboutImage2 from '../assets/home/about/about-image.jpg';
import aboutMain from '../assets/home/about/about.jpg';

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-white">
      <div className="py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute top-1/2 -right-20 md:-right-20 w-[60%] md:w-[45%] h-[85%] md:h-[75%] -translate-y-1/2 z-0 rounded-l-3xl"
          style={{ backgroundColor: '#8bc12d', opacity: '0.1' }}
        ></div>

        <div className="container mx-auto px-6 md:px-10 relative z-10 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex gap-4">
               <div 
                 className="w-1.5 h-20 md:h-24 flex-shrink-0 mt-1" 
                 style={{ backgroundColor: '#8bc12d' }}
               ></div> 
               <p className="text-navy text-base md:text-lg italic max-w-sm">
                 "Let us transform your ceilings to match your lifestyle."
               </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-navy tracking-tight uppercase">
              Ceillings <span className="font-black">Design</span>
            </h2>
            <p className="text-navy/70 text-sm leading-loose max-w-lg font-medium">
              At Ceillings Design, we specialise in ceilings interior transformations 
              that capture your unique vision. Based in Thembisa and serving 
              nationwide, we deliver sophisticated PVC installations, custom bulkheads, 
              and modern lighting systems tailored to your lifestyle.
            </p>
            <button 
              onClick={scrollToContact}
              className="border border-navy/20 text-navy px-8 md:px-10 py-3.5 rounded-sm font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-navy hover:bg-navy hover:text-white transition-all group"
            >
              Consultation <FaLongArrowAltRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex-1 flex gap-4 md:gap-6 z-10 w-full max-w-lg lg:max-w-none mx-auto">
            <div className="w-1/2 translate-y-8 md:translate-y-12 overflow-hidden rounded-sm shadow-xl bg-white">
              <img src={aboutImage2} alt="Interior Project" className="w-full h-full object-cover aspect-[4/5] block" />
            </div>
            <div className="w-1/2 overflow-hidden rounded-sm shadow-xl bg-white">
              <img src={aboutImage1} alt="Ceiling Detail" className="w-full h-full object-cover aspect-[4/5] block" />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16 md:pb-24 relative mt-12 md:mt-0">
        <div className="container mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-stretch gap-10 md:gap-0">
          <div className="flex-1 relative min-h-[350px] md:min-h-[500px]">
            <img src={aboutMain} alt="Luxury Interior" className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-2xl" />
          </div>

          <div className="flex-1 lg:pl-16 pt-8 lg:pt-0 relative flex flex-col justify-center">
            <div className="mb-6 md:mb-8">
              <h3 className="text-3xl md:text-4xl font-light text-navy tracking-tight uppercase mb-4">
                ABOUT <span className="font-black">US</span>
              </h3>
              <div className="w-16 h-0.5 bg-gray-300"></div>
            </div>
            <p className="text-navy/80 text-sm leading-loose font-medium mb-10 md:mb-12 max-w-md">
              Ceillings Design believes in turning your dreams into reality. 
              With years of experience in luxury ceilings design, we specialise in 
              crafting custom ceilings, bulkheads, and modern lighting systems 
              perfectly tailored to your home and lifestyle.
            </p>

            <div className="relative mt-8 md:mt-0">
               <div 
                 className="absolute left-4 md:left-10 top-[-20px] md:top-0 w-full h-32 md:h-40 z-0"
                 style={{ backgroundColor: '#8bc12d' }}
               ></div>
               <button 
                 onClick={scrollToContact}
                 className="w-full md:w-auto justify-center bg-navy text-white px-8 md:px-10 py-5 rounded-sm font-black uppercase text-xs tracking-[0.2em] flex items-center gap-4 hover:bg-cyan transition-colors relative z-10 lg:translate-y-10 shadow-xl"
               >
                 Book A Consultation <FaLongArrowAltRight className="text-white" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;