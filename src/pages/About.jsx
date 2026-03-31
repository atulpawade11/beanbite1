import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Star, TrendingUp } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import InnerPageHeader from '../components/InnerPageHeader';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 }
};

const About = () => {
  const partnerLogos = [
    { name: "Trocon", image: "/about/partner1.png" },
    { name: "New England Dental", image: "/homeOne/partner-logos/New-England-logo1.png" },
    { name: "Smilesavers", image: "/homeOne/partner-logos/smilesavers1.png" },
    { name: "Monro Dental Arts", image: "/homeOne/partner-logos/dag.png" },
    { name: "LAKE TAVIS DENTISTRY", image: "/homeOne/partner-logos/ltd.png" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-sans text-gray-800 antialiased bg-white"
    >
      {/* Inner Page Header */}
      <InnerPageHeader title="About Us" breadcrumb="About Us" />

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-16 md:py-20">
        
        {/* Who We Are Section */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <motion.div 
              variants={fadeInLeft}
              className="relative order-1"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/about/about-intro.png" 
                  alt="Dr. Santosh Rohira" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              {/* Decorative circles */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#C5D92D]/20 rounded-full -z-10"
              ></motion.div>
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 w-32 h-32 bg-[#AFCB12]/10 rounded-full -z-10"
              ></motion.div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div 
              variants={fadeInRight}
              className="order-2"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 bg-[#C5D92D] text-[#1a2e05] font-bold rounded-full text-sm mb-6"
              >
                Who We Are
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              >
                Santosh Rohira, a dentist with international training, is the visionary behind{' '}
                <span className="text-[#AFCB12]">BEANbite</span>
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-5 text-gray-600 text-base leading-relaxed mb-8"
              >
                <p>
                  Having spent numerous years as a dental office manager in California, she recognized 
                  the pivotal role that outsourcing solutions can play in enhancing the success of a 
                  dental practice. This realization emerged from the fundamental belief that dentists 
                  and office managers should have the opportunity to dedicate their time to patient care 
                  and superior customer service, rather than being bogged down by an array of tasks like 
                  insurance verifications, navigating derived claims, provider credentialing, and grappling 
                  with low insurance fee schedules.
                </p>
                <p>
                  Understanding the significance of customer service within dental practices and 
                  acknowledging the value patients place on it, Santosh Rohira established BEANbite to 
                  handle interactions with insurance carriers on behalf of dentists. This approach seeks 
                  to empower dentists to prioritize the delivery of exceptional patient care.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Commitment to Service Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT CONTENT */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              >
                A Commitment To Service
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600 text-base leading-relaxed mb-8"
              >
                Service and subsidized fees is what sets BEANbite apart from every
                other company you work with. We're here to support your business
                growth and operations. And we prove it every day by actively
                assisting providers and their office managers in their
                administrative needs. We understand your practice and do whatever it
                takes to make things better. Why do we do this? Because we care about
                you, your practice, and your patients.
              </motion.p>

              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 block"
              >
                Care — Above Everything Else
              </motion.span>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-600 text-base leading-relaxed"
              >
                We understand that every practice grows by adding more dentists and
                dental specialists and it is important to have all credentialing
                process completed in a timely manner in-order to get claims paid
                swiftly. We care for the revenue flow of a dental practice and
                strive to maintain a healthy A/R ratio.
              </motion.p>
            </div>
            {/* RIGHT IMAGE + BADGE */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative flex justify-center md:justify-end"
            >
              {/* Circle Image */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="w-100 h-100 md:w-115 md:h-115 rounded-full border-4 border-white"
              >
                <img
                  src="/about/commitment.png"
                  alt="Team"
                  className="w-full h-full object-cover"
                />
                {/* Green Badge */}
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.31 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 left-6 md:left-auto md:-left-10 bg-[#C5D92D] rounded-full w-34 h-34 flex flex-col items-center justify-center text-center border-4 border-white"
                >
                  <span className="text-3xl font-bold text-[#1a2e05] leading-none">25+</span>
                  <span className="text-xs mt-1 px-2 text-[#1a2e05] font-semibold">
                    Experience Team Help you
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 border-t border-dashed border-gray-200"
          ></motion.div>
        </motion.div>

        {/* Partners Section */}
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
    </motion.div>
  );
};

export default About;