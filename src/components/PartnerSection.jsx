import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, TrendingUp } from "lucide-react";
import "swiper/css";

// Animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 }
};

const PartnerSection = ({ partnerLogos = [] }) => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE */}
            <div>
              {/* Tag */}
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block bg-[#C5D92D] text-[#1a2e05] text-xs font-bold px-4 py-2 rounded-full mb-4"
              >
                OUR TRUSTED PARTNERS
              </motion.span>

              {/* Heading */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-snug"
              >
                Strengthen your business <br />
                for enduring success.
              </motion.h2>

              {/* Two Lines Slider - First Row */}
              <div className="mb-4">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={16}
                  slidesPerView={2}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="!pb-4"
                  onInit={(swiper) => {
                    setTimeout(() => {
                      swiper.navigation.update();
                    }, 100);
                    window.swiperRow1 = swiper;
                  }}
                >
                  {partnerLogos.map((partner, i) => (
                    <SwiperSlide key={`row1-${i}`}>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white border border-gray-200 rounded-xl h-20 flex items-center justify-center p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <img 
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover"
                          style={{ maxWidth: '100%', maxHeight: '100%' }}
                        />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Two Lines Slider - Second Row */}
              <div className="mb-4">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={16}
                  slidesPerView={2}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="!pb-4"
                  onInit={(swiper) => {
                    setTimeout(() => {
                      swiper.navigation.update();
                    }, 100);
                    window.swiperRow2 = swiper;
                  }}
                >
                  {partnerLogos.map((partner, i) => (
                    <SwiperSlide key={`row2-${i}`}>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="border border-gray-200 rounded-xl h-20 flex items-center justify-center p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <img 
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover"
                          style={{ maxWidth: '100%', maxHeight: '100%' }}
                        />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              

              {/* Custom Arrows - Single set controlling both rows */}
              <div className="flex gap-3 mt-4">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="custom-prev w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => {
                    // Control both swipers simultaneously
                    if (window.swiperRow1) window.swiperRow1.slidePrev();
                    if (window.swiperRow2) window.swiperRow2.slidePrev();
                  }}
                >
                  <ArrowLeft size={18} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="custom-next w-10 h-10 rounded-full bg-[#C5D92D] flex items-center justify-center text-[#1a2e05] hover:bg-[#b0c41a] transition-colors cursor-pointer"
                  onClick={() => {
                    // Control both swipers simultaneously
                    if (window.swiperRow1) window.swiperRow1.slideNext();
                    if (window.swiperRow2) window.swiperRow2.slideNext();
                  }}
                >
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden border border-gray-100"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none"></div>

              <div className="relative z-10">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-[#AFCB12] text-sm font-bold mb-1"
                >
                  Make an Appointment
                </motion.p>

                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-6"
                >
                  Start today with absolutely no risk to you.
                </motion.h3>

                <motion.form 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                      placeholder="First name" 
                    />
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                      placeholder="Last name" 
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                      placeholder="E-mail" 
                    />
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                      placeholder="Phone number" 
                    />
                  </div>

                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    rows={4}
                    placeholder="Message"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] resize-none text-gray-700"
                  />

                  <div className="flex items-start gap-2 text-xs text-gray-500">
                    <input type="checkbox" className="mt-1 w-4 h-4 accent-[#C5D92D]" />
                    <p>
                      By choosing text, you agree to receive texts/calls from BEANbite LLC and its affiliates, 
                      including by auto-dialed or prerecorded means, regarding current and future projects 
                      or services at the number you provide.
                    </p>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 bg-[#C5D92D] border border-2 border-[#384d14] text-[#1a2e05] font-bold px-4 py-1 rounded-full shadow-md hover:bg-[#b0c41a] transition-all group"
                  >
                    Submit
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="w-10 h-10 bg-[#384d14] rounded-full flex items-center justify-center text-white"
                    >
                      <TrendingUp size={18} />
                    </motion.div>
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </motion.div>
    </div>
  );
};

export default PartnerSection;