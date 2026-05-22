import React from 'react';
import desktopParallax from '../assets/home/parallax-image/parallax-image.jpg';
import mobileParallax from '../assets/home/parallax-image/mobile-parallax-image.jpg';

const ParallaxDivider = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* We use a fixed background for the parallax effect. 
          Note: background-attachment: fixed has limited support on some mobile browsers, 
          so we use a standard centered cover for mobile.
      */}
      <div 
        className="h-[300px] md:h-[500px] w-full bg-cover bg-center bg-no-repeat md:bg-fixed flex items-center justify-center relative"
        style={{ 
          backgroundImage: `url(${window.innerWidth < 768 ? mobileParallax : desktopParallax})` 
        }}
      >
        {/* Dark Overlay to make the text pop and match the site theme */}
        <div className="absolute inset-0 bg-navy/40"></div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-6">
          <h2 className="text-white text-2xl md:text-5xl font-light tracking-[0.3em] uppercase leading-tight">
            Crafting <span className="font-black">Excellence</span> <br />
            <span className="text-xs md:text-sm tracking-[0.5em] text-cyan mt-4 block font-bold">In Every Square Meter</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ParallaxDivider;