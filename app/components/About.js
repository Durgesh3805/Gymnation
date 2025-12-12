
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="w-full bg-black py-12 lg:py-24 flex flex-col items-center">
      <h2 className="text-2xl lg:text-3xl font-bold font-oswald text-[#FFE600] mb-12 uppercase tracking-[0.3em]">
        About The Event
      </h2>
      <div className="w-full relative aspect-[21/9] lg:aspect-[21/6]">
        <Image 
          src="/abtSection.webp" 
          alt="Winter Arc Challenge Details" 
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default About;
