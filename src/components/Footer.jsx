import React from 'react';
import { FaFacebookF, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-navy text-white/70 pt-16 pb-8 border-t border-cyan/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Fantastic Ceilings Logo" 
                className="w-12 h-12 object-cover rounded-sm border border-cyan/30"
              />
              <div className="text-xl font-bold leading-tight">
                <span className="text-cyan block uppercase tracking-tighter">Fantastic</span>
                <span className="text-white block uppercase tracking-tighter">Ceilings</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed max-w-[200px]">
              Expert home improvement across all provinces. We install or supply materials for your dream home.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-black mb-6">Expertise</h4>
            <ul className="text-sm space-y-2 font-medium">
              <li className="hover:text-cyan transition-colors">PVC & Tape Ceilings</li>
              <li className="hover:text-cyan transition-colors">Rhinolite & Bulkheads</li>
              <li className="hover:text-cyan transition-colors">TV Stands & Wall Panels</li>
              <li className="hover:text-cyan transition-colors">LED & Solar Lighting</li>
              <li className="hover:text-cyan transition-colors">Painting & Door Installs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-black mb-6">Connect</h4>
            <ul className="text-sm space-y-4">
              <li className="flex items-center gap-3">
                <FaPhoneAlt size={12} className="text-cyan" />
                <span className="font-bold">063 873 3550</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt size={12} className="text-cyan mt-1" />
                <span className="text-xs">
                  25 Magole Street, Ivory Park<br/>
                  Exit 6, Johannesburg
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-black mb-6">Logistics</h4>
            <div className="bg-white/5 p-4 rounded-sm border border-white/10">
              <p className="text-[10px] leading-relaxed uppercase tracking-wider">
                We deliver comprehensive services and supplies to <span className="text-[#8BC12D] font-bold">all provinces</span>.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <a href="https://facebook.com" className="hover:text-cyan transition-colors">
                  <FaFacebookF size={18} />
                </a>
                <span className="text-[9px] font-black border border-cyan/50 px-2 py-1 text-cyan rounded-sm">
                  ISO CERTIFIED
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Fantastic Ceilings</p>
          <div className="flex gap-6">
            <span className="text-white">Install or Supply</span>
            <span className="text-cyan">Any Quote Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;