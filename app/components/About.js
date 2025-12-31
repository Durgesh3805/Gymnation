
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="w-full bg-black py-12 lg:py-24 flex flex-col items-center">
      <h2 className="text-2xl lg:text-3xl font-bold font-oswald text-[#FFE600] mb-12 uppercase tracking-[0.3em]">
        About The Event
      </h2>
      <div className="w-full relative aspect-[21/7] lg:aspect-[21/6]">
        <Image 
          src="/abtSection.webp" 
          alt="Winter Arc Challenge Details" 
          fill
          className="object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto mt-12 px-6 flex flex-col items-center gap-8">
        <div className="font-inter text-gray-300 w-full">
          <ul className="space-y-6 list-none text-justify md:text-left">
            <li className="flex gap-4">
              <span className="text-[#FFE600] font-bold text-xl">/</span>
              <p>
                <strong className="text-white">Kickstart your year</strong> with the ultimate test of physical and mental fortitude. On  <b>January 2, 2026, </b> Gym Nation proudly presents the <span className="text-white">Winter Arc Challenge</span>, marking our third anniversary of fostering elite fitness.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#FFE600] font-bold text-xl">/</span>
              <p>
                This event is specifically engineered for those who spent the final months of the year <span className="italic">"in the shadows"</span> putting in the work.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#FFE600] font-bold text-xl">/</span>
              <p>
                The competition departs from traditional formats by merging the <strong className="text-white">raw intensity of Powerlifting</strong> with the <strong className="text-white">high-octane demand of Circuit Training</strong>.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#FFE600] font-bold text-xl">/</span>
              <p>
                Athletes will face off in a multi-stage arena, headlined by a formal <span className="text-white">Bench Press Round</span> to crown the strongest pressers, followed by a <span className="text-white">grueling circuit</span> designed to test conditioning and grit.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#FFE600] font-bold text-xl">/</span>
              <p>
                Whether you are a dedicated bodybuilder or a functional fitness enthusiast, the Winter Arc Challenge is where your discipline meets its reward. Join us at <strong className="text-white">7:00 PM</strong> for an evening of heavy lifts, high energy, and the celebration of three years of sweat and success.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#FFE600] font-bold text-xl">/</span>
              <p>The registration fee for the Winter Arc Challenge is <b>₹200,</b> payable before or during the competition. Payments can be made via UPI to +91 63637 35900 or directly at the gym premises. Participants who pay via UPI are requested to attach the payment screenshot during registration or share it via WhatsApp to the same number. Official receipts can be collected from the gym either before the event or on the event day.              </p>
            </li>
          </ul>
        </div>

        <a href="https://forms.gle/oGHKLKTHB4DjamtDA" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FFE600] text-black font-oswald text-xl uppercase font-bold px-12 py-3 hover:bg-white hover:scale-105 transition-all duration-300 clip-path-slant mt-4">
          Register Now
        </a>
      </div>
    </section>
  );
};

export default About;
