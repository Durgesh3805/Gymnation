
import React from 'react';

const TopBar = () => {
  return (
    <div className="hidden lg:flex w-full justify-end items-center gap-4 py-2 px-8 bg-black text-xs font-bold font-oswald tracking-wider z-50 relative">
      <a href="tel:+916363735900" className="bg-[#FFE600] text-black px-4 py-3 uppercase hover:bg-yellow-400 transition-colors">
        +91 6363 735 900
      </a>
      <a href="#about" className="bg-black text-[#FFE600] border border-[#FFE600] px-4 py-3 uppercase hover:bg-[#FFE600] hover:text-black transition-colors">
        About
      </a>
      <a href="https://forms.gle/oGHKLKTHB4DjamtDA" target="_blank" rel="noopener noreferrer" className="bg-[#FFE600] text-black px-4 py-3 uppercase hover:bg-yellow-400 transition-colors">
        Register Now
      </a>
    </div>
  );
};

export default TopBar;
