import React, { useState, useEffect } from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaLongArrowAltRight, 
  FaFacebookF, 
  FaInstagram,
  FaBars,
  FaTimes 
} from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY <= 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', 
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e, id) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const navLinkStyles = (id) => `
    transition-all pb-1 border-b-2 uppercase tracking-[0.15em]
    ${activeSection === id 
      ? 'text-cyan border-cyan font-black' 
      : 'text-white border-transparent hover:text-cyan hover:border-cyan font-bold'}
  `;

  return (
    <header className="w-full sticky top-0 z-[100]">
      <div 
        className={`bg-navy text-white border-b border-white/5 transition-all duration-300 overflow-hidden ${
          showTopBar ? 'max-h-[40px] py-2' : 'max-h-0 py-0 border-none'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold">
          <div className="flex gap-4 md:gap-8">
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan" /> 
              <span className="hidden sm:inline italic">074 612 0340</span>
              <a href="tel:0638733550" className="sm:hidden font-bold">Call</a>
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-cyan" /> 
              <span className="hidden md:inline">gilberthasany2@gmail.com</span>
              <a href="mailto:mataveleconstruction@gmail.com" className="md:hidden font-bold">Email</a>
            </span>
          </div>
        </div>
      </div>

      <nav className="bg-navy text-white py-4 shadow-xl relative z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          <button 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex flex-col items-start focus:outline-none group text-left"
          >
            <span className="font-ghang text-2xl md:text-3xl tracking-wide text-white group-hover:text-cyan transition-colors leading-none">
              Ceilling Design
            </span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-[0.4em] text-white/40 group-hover:text-white/60 transition-colors mt-1">
              Premium Craftsmanship
            </span>
          </button>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-16">
            <div className="flex gap-10 text-sm">
              <button onClick={(e) => handleNavClick(e, 'home')} className={navLinkStyles('home')}>Home</button>
              <button onClick={(e) => handleNavClick(e, 'about')} className={navLinkStyles('about')}>About Us</button>
              <button onClick={(e) => handleNavClick(e, 'services')} className={navLinkStyles('services')}>Our Services</button>
              <button onClick={(e) => handleNavClick(e, 'portfolio')} className={navLinkStyles('portfolio')}>Portfolio</button>
            </div>
            <button 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="bg-white text-navy px-8 py-3.5 rounded-sm font-black uppercase text-xs tracking-widest flex items-center gap-3 hover:bg-cyan hover:text-white transition-all group"
            >
              Contact Us <FaLongArrowAltRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button onClick={toggleMenu} className="md:hidden text-white text-2xl p-2 focus:outline-none">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Drawer */}
      <div className={`fixed inset-0 z-[150] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-navy transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} />
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out delay-150 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button onClick={toggleMenu} className="absolute top-10 right-6 text-white text-3xl p-4 hover:text-cyan transition-colors"><FaTimes /></button>
          
          <div className="flex flex-col gap-10 text-center">
            {['home', 'about', 'services', 'portfolio'].map((id) => (
              <button 
                key={id}
                onClick={(e) => handleNavClick(e, id)} 
                className={`text-2xl uppercase tracking-[0.2em] ${activeSection === id ? 'text-cyan font-black' : 'text-white'}`}
              >
                {id === 'home' ? 'Home' : id === 'about' ? 'About Us' : id === 'services' ? 'Our Services' : 'Portfolio'}
              </button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="bg-cyan text-navy px-10 py-4 rounded-sm font-black uppercase text-xs tracking-widest mb-8 shadow-lg"
            >
              Get A Quote
            </button>
            <div className="flex gap-8 justify-center text-white/50">
               <a href="https://web.facebook.com/profile.php?id=61577862595173" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20} className="hover:text-cyan transition-colors" /></a>
               <FaInstagram size={20} className="hover:text-cyan transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;