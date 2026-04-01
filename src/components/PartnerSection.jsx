import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const PartnerSection = () => {
  const partnerLogos = [
    { name: "Trocon", image: "/about/partner1.png" },
    { name: "New England Dental", image: "/homeOne/partner-logos/New-England-logo1.png" },
    { name: "Smilesavers", image: "/homeOne/partner-logos/smilesavers1.png" },
    { name: "Monro Dental Arts", image: "/homeOne/partner-logos/dag.png" },
    { name: "LAKE TAVIS DENTISTRY", image: "/homeOne/partner-logos/ltd.png" }
  ];

  const swiperSettings = {
    modules: [Navigation],
    spaceBetween: 16,
    slidesPerView: 2,
    breakpoints: {
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
    },
    className: "!pb-4"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE - Logos */}
        <div>
          <motion.span className="inline-block bg-[#C5D92D] text-[#1a2e05] text-xs font-bold px-4 py-2 rounded-full mb-4">
            OUR TRUSTED PARTNERS
          </motion.span>

          <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-snug">
            Strengthen your business <br /> for enduring success.
          </motion.h2>

          {/* Row 1 */}
          <div className="mb-4">
            <Swiper {...swiperSettings} onInit={(s) => (window.swiperRow1 = s)}>
              {partnerLogos.map((partner, i) => (
                <SwiperSlide key={`row1-${i}`}>
                  <LogoCard partner={partner} delay={i * 0.1} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Row 2 */}
          <div className="mb-4">
            <Swiper {...swiperSettings} onInit={(s) => (window.swiperRow2 = s)}>
              {partnerLogos.map((partner, i) => (
                <SwiperSlide key={`row2-${i}`}>
                  <LogoCard partner={partner} delay={i * 0.1} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-4">
            <NavButton 
              icon={<ArrowLeft size={18} />} 
              onClick={() => { window.swiperRow1?.slidePrev(); window.swiperRow2?.slidePrev(); }} 
              isPrimary={false}
            />
            <NavButton 
              icon={<ArrowRight size={18} />} 
              onClick={() => { window.swiperRow1?.slideNext(); window.swiperRow2?.slideNext(); }} 
              isPrimary={true}
            />
          </div>
        </div>

        {/* RIGHT SIDE - Form */}
        <ContactFormCard />
      </div>
    </motion.div>
  );
};

// Internal Helper Components for Cleanliness
const LogoCard = ({ partner, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
    className="bg-white border border-gray-200 rounded-xl h-20 flex items-center justify-center p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
  >
    <img src={partner.image} alt={partner.name} className="max-w-full max-h-full object-contain" />
  </motion.div>
);

const NavButton = ({ icon, onClick, isPrimary }) => (
  <motion.button 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer border ${
      isPrimary ? "bg-[#C5D92D] border-transparent text-[#1a2e05]" : "border-gray-300 text-gray-500"
    }`}
  >
    {icon}
  </motion.button>
);

const ContactFormCard = () => (
  <motion.div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden border border-gray-100">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
    <div className="relative z-10">
      <p className="text-[#AFCB12] text-sm font-bold mb-1">Make an Appointment</p>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Start today with no risk.</h3>
      <form className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D]" placeholder="First name" />
          <input className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D]" placeholder="Last name" />
        </div>
        <input className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D]" placeholder="E-mail" />
        <textarea rows={3} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D]" placeholder="Message" />
        <button type="button" className="flex items-center gap-2 bg-[#C5D92D] border-2 border-[#384d14] text-[#1a2e05] font-bold px-4 py-1 rounded-full shadow-md hover:bg-[#b0c41a] transition-all group">
          Submit
          <div className="w-10 h-10 bg-[#384d14] rounded-full flex items-center justify-center text-white">
            <TrendingUp size={18} />
          </div>
        </button>
      </form>
    </div>
  </motion.div>
);

export default PartnerSection;