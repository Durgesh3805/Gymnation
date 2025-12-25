
import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#111111] text-white py-12 px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* 1. Contact Information */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#FFE600] font-oswald text-xl uppercase tracking-wider mb-2">
            Contact Us
          </h3>
          <div className="flex flex-col gap-2 font-inter text-gray-300 text-sm">
            <p>
              <span className="text-white font-medium">Phone:</span> 63637 35900 (Hyder Ali)
            </p>
            <p>
              <span className="text-white font-medium">Email:</span> gymnationmysore@gmail.com
            </p>
            <p>
              <span className="text-white font-medium">Gym Location:</span> NGOs Colony Park, Rajendra Nagar Main Road, 7th Cross Rd, Rajendra Nagar, Mysuru, Karnataka 570007
              <br />(2 Floor Facility)
            </p>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#FFE600] font-oswald text-xl uppercase tracking-wider mb-2">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 font-inter text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-[#FFE600] transition-colors duration-300">
                Competition Rules & Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFE600] transition-colors duration-300">
                Registration Form (Winter Arc 2026)
              </a>
            </li>
          </ul>
        </div>

        {/* 3. Social & Trust Elements */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#FFE600] font-oswald text-xl uppercase tracking-wider mb-2">
            Connect
          </h3>
          <div className="flex flex-col gap-4 font-inter text-gray-300 text-sm">
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
               {/* Instagram */}
               <a 
                 href="https://www.instagram.com/gymnationmysore" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFE600] hover:text-black transition-all duration-300"
               >
                 <Instagram size={20} />
               </a>

               {/* Facebook */}
               <a 
                 href="https://www.facebook.com/people/Gym-Nation-Mysore/100089135658829/?mibextid=ZbWKwL" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFE600] hover:text-black transition-all duration-300"
               >
                 <Facebook size={20} />
               </a>

               {/* Mail */}
               <a 
                 href="mailto:gymnationmysore@gmail.com"
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFE600] hover:text-black transition-all duration-300"
               >
                 <Mail size={20} />
               </a>

               {/* Phone */}
               <a 
                 href="tel:6363735900" 
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFE600] hover:text-black transition-all duration-300"
               >
                 <Phone size={20} />
               </a>
            </div>

            {/* Hours */}
            <div>
              <p className="text-white font-medium mb-1">Hours of Operation</p>
              <p>5 AM – 10 PM</p>
            </div>
          </div>
        </div>

        {/* 4. Legal & Branding */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 font-inter text-gray-300 text-sm">
              <p className="text-xs text-gray-500 mt-auto">
               © 2026 Gym Nation.
               <br />All Rights Reserved.
             </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
