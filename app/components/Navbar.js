
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className="w-full bg-black text-white z-50 sticky top-0 border-b border-gray-800 lg:border-none">
      <div className="flex items-center justify-between px-6 py-4 lg:py-6 lg:px-12">
        {/* Logo */}
        <div className="text-3xl lg:text-4xl font-bold tracking-[0.3em] font-oswald">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Gymnation Logo" width={50} height={50} className="rounded-full" />
            <span>Gymnation</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <span className="font-oswald text-xl lg:text-xl tracking-[0.5em] font-bold text-white uppercase whitespace-nowrap">
            WINTER ARC CHALLENGE
          </span>
        </div>

        {/* Right Side / Mobile Controls */}
        <div className="flex items-center gap-4 lg:gap-8">
          <span className="text-sm lg:text-base font-normal text-gray-300 cursor-pointer hover:text-white">FAQs</span>
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center py-8 space-y-6 animate-in slide-in-from-top-5">
          <div className="text-xl font-oswald tracking-[0.2em] font-bold text-white uppercase text-center px-4">
             WINTER ARC CHALLENGE
          </div>
          <div className="flex flex-col gap-4 mt-4 w-3/4">
             <a href="#" className="bg-[#FFE600] text-center text-black px-4 py-3 uppercase font-bold font-oswald">
                FIND MY RACE
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
