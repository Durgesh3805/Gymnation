
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] lg:h-[85vh] overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         {/* Using the generated artifact image path - will need to be moved to public or imported */}
         <img 
            src="/hero_background.png" 
            alt="Hyrox Race Event" 
            className="w-full h-full object-cover opacity-60"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 lg:from-black/50 lg:to-black/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto">
        
        {/* Main Title Box - Positioned slightly different on mobile vs desktop */}
        <div className="absolute top-[40%] lg:top-[35%] right-0 w-[90%] lg:w-[45%] bg-[#FFE600] p-6 lg:p-12 shadow-lg">
          <h1 className="text-4xl lg:text-7xl font-bold font-oswald text-black leading-tight uppercase tracking-tight">
            Your winter<br/> story <br/>starts here
            
          </h1>
        </div>

        {/* Bottom Banner - Mobile Only as per screenshot/common patterns? 
           Actually the desktop screenshot doesn't show the bottom banner, 
           bu the mobile one does designated 'WATCH THE HYROX LIVESTREAMS'.
           I will add it conditionally or responsive. 
           Wait, looking at desktop screenshot, there is NO bottom banner.
           Mobile screenshot HAS bottom banner.
        */}

      </div>
    </div>
  );
};

export default Hero;
