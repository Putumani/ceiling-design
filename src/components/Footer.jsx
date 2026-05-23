import React from 'react';
import { FaFacebookF, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-navy text-white/70 pt-16 pb-8 border-t border-cyan/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col items-start">
              <div className="text-2xl font-normal tracking-wide text-white font-monas leading-none">
                Ceilling Design
              </div>
              <div className="text-[8px] uppercase tracking-[0.35em] text-cyan font-bold mt-1.5 whitespace-nowrap">
                PREMIUM CRAFTMANSHIP
              </div>
            </div>
            <p className="text-xs leading-relaxed max-w-[200px] pt-1">
              Expert home improvement across all provinces. We install or supply materials for your dream home.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-black mb-6">Expertise</h4>
            <ul className="text-sm space-y-2 font-medium">
              <li className="hover:text-cyan transition-colors cursor-pointer">PVC &amp; Tape Ceilings</li>
              <li className="hover:text-cyan transition-colors cursor-pointer">Rhinolite &amp; Bulkheads</li>
              <li className="hover:text-cyan transition-colors cursor-pointer">LED &amp; Solar Lighting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-black mb-6">Connect</h4>
            <ul className="text-sm space-y-4">
              <li className="flex items-center gap-3">
                <FaPhoneAlt size={12} className="text-cyan" />
                <span className="font-bold">074 612 0340</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt size={12} className="text-cyan mt-1" />
                <span className="text-xs">
                  Thembisa<br/>
                  South Africa
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
                <span className="text-[9px] font-black border border-cyan/50 px-2 py-1 text-cyan rounded-sm">
                  ISO CERTIFIED
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Ceilling Design</p>
          <div className="flex gap-6">
            <span className="text-white">Install</span>
            <span className="text-cyan">Any Quote Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;