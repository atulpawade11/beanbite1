import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight, Mail, ArrowRight, ArrowLeft, TrendingUp, X, Upload, FileText } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import InnerPageHeader from '../components/InnerPageHeader';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

// Modal Animation
const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    jobPosition: '',
    location: '',
    currentlyEmployed: '',
    reasonForChange: '',
    startAvailability: '',
    shift: '',
    applyingPosition: '',
    coverLetter: '',
    resume: null
  });

  const jobs = [
    "Entry-Level experience in Human Resources",
    "Credentialing Associate/ Dental Associate",
    "EOB / Payment Posting / Dental Billing",
    "Data Entry Executive",
    "JOB - EV, AR and Sr.AR",
  ];

  const partnerLogos = [
    { name: "Trocon", image: "/homeOne/partner-logos/tralonGo1.png" },
    { name: "New England Dental", image: "/homeOne/partner-logos/New-England-logo1.png" },
    { name: "Smilesavers", image: "/homeOne/partner-logos/smilesavers1.png" },
    { name: "Monro Dental Arts", image: "/homeOne/partner-logos/dag.png" },
    { name: "LAKE TAVIS DENTISTRY", image: "/homeOne/partner-logos/ltd.png" }
  ];

  const openModal = (job) => {
    setSelectedJob(job);
    setFormData({ ...formData, applyingPosition: job });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    closeModal();
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-sans text-gray-800 antialiased bg-white"
      >
        {/* Inner Page Header */}
        <InnerPageHeader title="Career" breadcrumb="Career" />

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-16 md:py-20">
          
          {/* Work at BEANbite Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* LEFT SIDE */}
            <motion.div
              variants={fadeInLeft}
              whileInView="whileInView"
              initial="initial"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                Work at <br /> BEANbite
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
                At Beanbite, we foster an environment of justice and openness so
                that our employees may thrive. We think that by consistently
                encouraging and guiding our employees, we can all work together to
                achieve success.
              </p>

              <p className="text-sm font-semibold text-gray-800 mb-2">
                OR CONTACT US WITH
              </p>

              <a
                href="mailto:info@BEANbite.com"
                className="text-[#AFCB12] text-base underline hover:text-[#C5D92D] transition-colors"
              >
                info@BEANbite.com
              </a>
            </motion.div>

            {/* RIGHT SIDE JOB LIST */}
            <motion.div 
              variants={staggerContainer}
              whileInView="whileInView"
              initial="initial"
              className="divide-y divide-gray-200"
            >
              {jobs.map((job, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInRight}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  {/* Job Info */}
                  <div>
                    <p className="text-xs text-[#AFCB12] font-semibold mb-1">
                      OPEN ROLES
                    </p>

                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                      {job}
                    </h3>

                    <p className="text-xs text-gray-500">
                      Full time &nbsp;–&nbsp; Ahmedabad &nbsp;–&nbsp; Experience: 1-2 Year
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {/* Dropdown Circle */}
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
                    >
                      <ChevronDown size={18} />
                    </motion.button>

                    {/* Apply Button */}
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openModal(job)}
                      className="flex items-center gap-2 bg-[#C5D92D] border border-1 border-[#384d14] text-[#1a2e05] font-bold px-2 py-2 rounded-full shadow-md hover:bg-[#b0c41a] transition-all group cursor-pointer"
                    >
                      Apply Now
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="w-8 h-8 bg-[#384d14] rounded-full flex items-center justify-center text-white"
                      >
                        <TrendingUp size={18} />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

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
                            className="w-full h-full object-contain"
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
                          className="bg-white border border-gray-200 rounded-xl h-20 flex items-center justify-center p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <img 
                            src={partner.image}
                            alt={partner.name}
                            className="w-full h-full object-contain"
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                          />
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Custom Arrows */}
                <div className="flex gap-3 mt-4">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="custom-prev w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => {
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
                      if (window.swiperRow1) window.swiperRow1.slideNext();
                      if (window.swiperRow2) window.swiperRow2.slideNext();
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </div>

              {/* RIGHT SIDE - Application Form */}
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
                    className="flex items-center gap-2 bg-[#C5D92D] border border-2 border-[#384d14] text-[#1a2e05] font-bold px-4 py-1 rounded-full shadow-md hover:bg-[#b0c41a] transition-all group cursor-pointer"
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

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/50 z-50"
              onClick={closeModal}
            />
            
            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Apply for this position</h2>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Personal Information - 50% each */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                                placeholder="Full Name"
                                />
                            </div>
                            <div>
                                <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                                placeholder="Email"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                                placeholder="Phone"
                                />
                            </div>
                            <div>
                                <input
                                type="text"
                                name="jobPosition"
                                value={formData.jobPosition}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                                placeholder="Job position?"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <select
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                                >
                                <option value="">Which location are you interested?</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Remote">Remote</option>
                                </select>
                            </div>
                            <div>
                                <select
                                name="currentlyEmployed"
                                value={formData.currentlyEmployed}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                                >
                                <option value="">Are you currently employed?</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                </select>
                            </div>
                        </div>

                        {/* Full width input */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="reasonForChange"
                                    value={formData.reasonForChange}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                                    placeholder="Why are you looking for a new job?"
                                />
                            </div>
                            <div>
                                <select
                                name="startAvailability"
                                value={formData.startAvailability}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                                >
                                    <option value="">How soon can you start work if hired?</option>
                                    <option value="Immediate">Immediate</option>
                                    <option value="1 Week">1 Week</option>
                                    <option value="2 Weeks">2 Weeks</option>
                                    <option value="1 Month">1 Month</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <select
                                name="shift"
                                value={formData.shift}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                                >
                                <option value="">Which shift are you available to work?</option>
                                <option value="Day Shift">Day Shift</option>
                                <option value="Night Shift">Night Shift</option>
                                <option value="Flexible">Flexible</option>
                                </select>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="applyingPosition"
                                    value={formData.applyingPosition}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                                    placeholder="Position you are applying for"
                                />
                            </div>
                        </div>

                        <div>
                            <textarea
                                name="coverLetter"
                                value={formData.coverLetter}
                                onChange={handleInputChange}
                                rows={3}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] resize-none text-gray-700"
                                placeholder="Cover letter"
                            />
                        </div>

                        <div>
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#C5D92D] transition-colors">
                                <input
                                type="file"
                                name="resume"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                id="resume-upload"
                                />
                                <label htmlFor="resume-upload" className="cursor-pointer">
                                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                <p className="text-sm text-gray-600 mb-1">
                                    Upload CV/Resume
                                </p>
                                <p className="text-xs text-gray-500">
                                    Allowed Type(s): pdf, doc, docx
                                </p>
                                </label>
                            </div>
                            {formData.resume && (
                                <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                                <FileText size={16} />
                                <span>{formData.resume.name}</span>
                                </div>
                            )}
                        </div>

                        {/* Consent Checkbox - Full width */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                required
                                className="mt-1 w-4 h-4 accent-[#C5D92D]"
                            />
                            <label className="text-xs text-gray-500 leading-relaxed">
                                By using this form you agree with the storage and handling of your data by this website.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="flex">
                            <motion.button 
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-2 bg-[#C5D92D] border-2 border-[#384d14] text-[#1a2e05] font-bold px-6 py-1 rounded-full shadow-md hover:bg-[#b0c41a] transition-all group cursor-pointer"
                            >
                                Submit Form
                                <motion.div 
                                whileHover={{ x: 5 }}
                                className="w-8 h-8 bg-[#384d14] rounded-full flex items-center justify-center text-white"
                                >
                                <TrendingUp size={16} />
                                </motion.div>
                            </motion.button>
                        </div>
                    </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Career;