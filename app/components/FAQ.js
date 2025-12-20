"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button 
        className="w-full flex justify-between items-center py-4 md:py-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-white font-oswald text-lg md:text-xl font-bold group-hover:text-[#FFE600] transition-colors duration-300">
          {question}
        </span>
        <span className="text-[#FFE600] ml-4 flex-shrink-0">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="font-inter text-gray-300 leading-relaxed text-sm md:text-base">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = ({ title, items }) => {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-2xl md:text-3xl font-bold font-oswald text-[#FFE600] mb-6 uppercase tracking-wider flex items-center gap-2">
        {title}
      </h3>
      <div className="px-0">
        {items.map((item, index) => (
          <FAQItem 
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={item.isOpen}
            onClick={() => item.toggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndexChallenge, setOpenIndexChallenge] = useState(null);
  const [openIndexGeneral, setOpenIndexGeneral] = useState(null);

  const toggleChallenge = (index) => {
    setOpenIndexChallenge(openIndexChallenge === index ? null : index);
  };

  const toggleGeneral = (index) => {
    setOpenIndexGeneral(openIndexGeneral === index ? null : index);
  };

  const challengeFAQs = [
    {
      question: "1. Who can participate in the Winter Arc Challenge?",
      answer: "The competition is open to everyone—from beginners to seasoned athletes. Whether you are a powerlifter, a bodybuilder, or someone who loves functional fitness, the hybrid format (Powerlifting + Circuit) is designed to test all levels of strength and endurance.",
      isOpen: openIndexChallenge === 0,
      toggle: toggleChallenge
    },
    {
      question: "2. Is there an entry fee for the competition?",
      answer: (
        <span>
          As mentioned in our promotion, we are currently offering <strong className="text-white">No Admission Fees</strong> for the competition! However, pre-registration is mandatory to secure your slot in the Bench Press and Circuit rounds.
        </span>
      ),
      isOpen: openIndexChallenge === 1,
      toggle: toggleChallenge
    },
    {
      question: "3. How is the \"Hybrid\" winner decided?",
      answer: "The winner is determined by a combined score from both the Bench Press Round (Strength) and the Circuit Training Round (Endurance/Speed). You need to perform well in both categories to take home the title.",
      isOpen: openIndexChallenge === 2,
      toggle: toggleChallenge
    },
    {
      question: "4. What are the rules for the Bench Press round?",
      answer: "Standard powerlifting rules apply: your back must remain on the bench, feet on the floor, and the bar must touch the chest before being pressed to full lockout. Our trainers will be on-site to judge form and ensure safety.",
      isOpen: openIndexChallenge === 3,
      toggle: toggleChallenge
    },
    {
      question: "5. Do I need to bring my own gear?",
      answer: "We provide all the necessary gym equipment. However, athletes are encouraged to bring their own lifting belts, wrist wraps, and proper athletic footwear.",
      isOpen: openIndexChallenge === 4,
      toggle: toggleChallenge
    }
  ];

  const generalFAQs = [
    {
      question: "6. Where exactly is Gym Nation located?",
      answer: (
        <span>
          We are located on <strong className="text-white">Rajendra Nagar Main Road</strong>. Look for our massive <strong className="text-white">2-floor facility</strong>—you can't miss it!
        </span>
      ),
      isOpen: openIndexGeneral === 0,
      toggle: toggleGeneral
    },
    {
      question: "7. Do you have separate batches for women?",
      answer: "Yes! We offer Separate Batches for Ladies to ensure a comfortable and focused workout environment. Please contact Hyder Ali for the specific timings of these sessions.",
      isOpen: openIndexGeneral === 1,
      toggle: toggleGeneral
    },
    {
      question: "8. What kind of training programs do you offer?",
      answer: (
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Personal Training</li>
          <li>Weight Gain & Weight Loss programs</li>
          <li>Bodybuilding & Weight Training</li>
          <li>Cardio & Functional Conditioning</li>
        </ul>
      ),
      isOpen: openIndexGeneral === 2,
      toggle: toggleGeneral
    },
    {
      question: "9. How do I join Gym Nation?",
      answer: (
        <span>
          You can visit us in person to see the facility, scan the QR code on our posters, or call <strong className="text-white">Hyder Ali at 63637 35900</strong> to get started with our latest "No Admission Fee" offers.
        </span>
      ),
      isOpen: openIndexGeneral === 3,
      toggle: toggleGeneral
    },
    {
      question: "10. What are the gym's operating hours?",
      answer: (
        <span>
          We are open from <strong className="text-white">5:00 AM to 10:00 PM</strong>, Monday through Saturday, allowing you to fit your "Grind" into any schedule.
        </span>
      ),
      isOpen: openIndexGeneral === 4,
      toggle: toggleGeneral
    }
  ];

  return (
    <section id="faq" className="w-full bg-black py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold font-oswald text-white text-center mb-16 uppercase tracking-[0.2em]">
          Frequently Asked Questions
        </h2>

        <FAQSection title="Winter Arc Challenge FAQs" items={challengeFAQs} />
        <FAQSection title="General Gym FAQs" items={generalFAQs} />

      </div>
    </section>
  );
};

export default FAQ;
