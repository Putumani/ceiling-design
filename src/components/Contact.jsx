import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaWhatsapp, FaTruck, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Thank you! Our specialists will reach out within 24 hours.");
    setTimeout(() => setFormStatus(""), 5000);
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-cyan font-black text-[10px] uppercase tracking-[0.3em] bg-cyan/10 px-4 py-2 rounded-sm border border-cyan/20">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-6 text-navy tracking-tight">
            Request a <span className="font-black">Quote</span>
          </h2>
          <div className="w-12 h-1 bg-[#8bc12d] mx-auto mt-4"></div>
          <p className="text-gray-500 max-w-xl mx-auto mt-6 font-medium">
            Nationwide installation & supply. From Johannesburg to every province, we’ve got you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          <div className="lg:col-span-3 bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t-4 border-cyan">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-navy/40 mb-2">Full Name</label>
                  <input type="text" required className="w-full bg-gray-50 border border-gray-200 px-4 py-4 focus:ring-2 focus:ring-cyan focus:bg-white outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-navy/40 mb-2">Phone / Email</label>
                  <input type="text" required className="w-full bg-gray-50 border border-gray-200 px-4 py-4 focus:ring-2 focus:ring-cyan focus:bg-white outline-none transition-all" placeholder="063 873 3550" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-navy/40 mb-2">Service Interested In</label>
                <select className="w-full bg-gray-50 border border-gray-200 px-4 py-4 focus:ring-2 focus:ring-cyan focus:bg-white outline-none transition-all">
                  <option>Ceiling & Drywalls (PVC/Tape)</option>
                  <option>Rhinolite & Bulkheads</option>
                  <option>Lighting (LED/Solar/Trap)</option>
                  <option>TV Stands & Wall Panels</option>
                  <option>Material Supply & Delivery</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-navy/40 mb-2">Your Project Details</label>
                <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 px-4 py-4 focus:ring-2 focus:ring-cyan focus:bg-white outline-none transition-all" placeholder="Tell us about your space..."></textarea>
              </div>

              <button type="submit" className="w-full bg-navy text-white py-5 font-black uppercase tracking-[0.2em] text-xs hover:bg-cyan hover:text-navy transition-all duration-300 shadow-lg">
                Send Request →
              </button>
              
              {formStatus && (
                <div className="bg-green-50 border border-green-200 p-4 text-green-700 text-center text-xs font-bold uppercase tracking-widest">
                  {formStatus}
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-span-2 space-y-8">
            
            <div className="bg-navy text-white p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full -mr-16 -mt-16"></div>
              
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan" /> Our Hub
              </h3>
              
              <p className="text-white/70 leading-relaxed mb-8 font-medium">
                25 Magole Street, <br />
                Ivory Park Exit 6, <br />
                Johannesburg
              </p>

              <div className="space-y-6">
                <a href="tel:+27638733550" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-cyan group-hover:border-cyan transition-all">
                    <FaPhoneAlt size={14} />
                  </div>
                  <span className="font-bold tracking-widest text-sm">063 873 3550</span>
                </a>

                <a href="https://wa.me/27638733550" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#8bc12d] group-hover:border-[#8bc12d] transition-all">
                    <FaWhatsapp size={18} />
                  </div>
                  <span className="font-bold tracking-widest text-sm text-[#8bc12d]">Chat on WhatsApp</span>
                </a>

                <a href="mailto:info@fantasticceilings.co.za" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-cyan group-hover:border-cyan transition-all">
                    <FaEnvelope size={14} />
                  </div>
                  <span className="font-bold tracking-widest text-sm uppercase opacity-80">Email Us</span>
                </a>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-cyan">
                <FaTruck /> Nationwide Logistics & Supply
              </div>
            </div>

            <div className="bg-[#8bc12d] p-6 text-navy shadow-lg flex items-start gap-4">
              <div className="text-3xl mt-1">💡</div>
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest mb-1">Expert Advice</h4>
                <p className="text-sm font-medium leading-relaxed">
                  Ask about our <strong>LED Trap Light & Bulkhead combo</strong> deals for your living room or bedroom.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;