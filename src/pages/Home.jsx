import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Quote, Star, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

// Animation variants (kept here for page-specific use)
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeIn = {  
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
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
  animate: { transition: { staggerChildren: 0.2 } }
};

const Home = () => {
  return (
    <div className="font-sans text-gray-800 antialiased bg-white">
      
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-12 mt-4 mb-20">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-[#5C7C1F] rounded-[40px] overflow-hidden relative flex flex-col items-center md:block min-h-[550px]"
                >
                     {/* Background Image & Gradient */}
                     <div className="absolute inset-0 z-0">
                        <motion.img 
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            src="/homeOne/hero-img.png" 
                            alt="Dental Team" 
                            className="w-full h-full object-cover object-right" 
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#5C7C1F] via-[#5C7C1F]/90 to-transparent md:w-3/4"></div>
                        <div className="absolute inset-0 bg-[#5C7C1F]/40 md:hidden"></div>
                     </div>
 
                     {/* Content */}
                     <div className="relative z-10 p-8 md:p-16 lg:p-20 md:w-2/3 lg:w-[55%] flex flex-col justify-center h-full pt-20 md:pt-20">
                        <motion.h1 
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-[56px] font-bold leading-[1.1] mb-8 text-white"
                        >
                          Credentialing & Fee Schedule Negotiation Services
                        </motion.h1>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-4 text-white/90 text-lg font-medium mb-10 leading-relaxed max-w-xl"
                        >
                          <p>Does your practice collect at least 98 percent of the total adjusted production?</p>
                          <p>Do you feel some insurances could provide a better compensation on their contracted fees?</p>
                        </motion.div>
                        <motion.button 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-[5px] border-[#414C00] bg-[#C5D92D] hover:bg-[#b0c41a] text-[#fff] pl-8 pr-2 py-2 rounded-full font-bold text-lg inline-flex items-center justify-between gap-4 transition-all w-max shadow-lg group"
                        >
                           <span>Get Started</span>
                           <div className=" w-10 h-10 bg-[#414C00] rounded-full flex items-center justify-center transition-colors">
                             <TrendingUp size={20} className="text-[#fff]" strokeWidth={2.5} />
                           </div>
                        </motion.button>
                     </div>
                </motion.div>
            </section>

            {/* About Us Section */}
            <section id="about" className="max-w-[1400px] mx-auto px-4 lg:px-12 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column */}
                    <motion.div 
                        variants={fadeInLeft}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div className="rounded-[32px] overflow-hidden mb-8">
                            <img src="/homeOne/about-us-left-img.png" alt="Dental Professional" className="w-full h-auto object-cover" />
                        </div>
                        <p className="text-gray-600/90 text-[17px] leading-relaxed mb-8 pr-4">
                            BEANbite is founded by a dentist and a dental office manager who believed there had to be an approach to allow dentists and office managers to focus on patient care and customer service rather than just worry about dealing with credentialing providers and low insurance fee schedules.
                        </p>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#C5D92D] hover:bg-[#b0c41a] text-[#1a2e05] pl-8 pr-2 py-2 rounded-full font-bold text-lg inline-flex items-center gap-4 transition-all shadow-md group mb-10"
                        >
                           <span>More About</span>
                           <div className="w-10 h-10 bg-[#414C00] rounded-full flex items-center justify-center group-hover:bg-[#1a2e05]/20 transition-colors">
                             <TrendingUp size={20} className="text-[#fff]" strokeWidth={2.5} />
                           </div>
                        </motion.button>
                        
                        {/* Social Proof */}
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {/* Placeholder Avatars */}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400"></div>
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-500"></div>
                            </div>
                            <span className="font-bold text-gray-900">10M+ Impact Across the World.</span>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div 
                        variants={fadeInRight}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="pt-8"
                    >
                        <span className="inline-block px-6 py-2 bg-[#C5D92D] text-[#1a2e05] font-bold rounded-full text-sm mb-6">
                            ABOUT US
                        </span>
                        <h3 className="text-xl text-gray-600 font-medium mb-4">Some Interesting Facts About Us</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] mb-12">
                            Santosh Rohira, a dentist with international training, <span className="font-normal text-gray-600">is the visionary behind</span> <span className="text-[#AFCB12]">BEANbite</span>
                        </h2>

                        {/* Experience Graphic */}
                        <div className="relative flex items-center justify-left ml-4">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="relative z-10 bg-white border border-gray-100 pr-[50px] rounded-full w-[280px] h-[280px] flex flex-col items-center justify-center shadow-lg shrink-0"
                            >
                                <span className="text-[80px] font-bold text-black leading-none">25<sup className="text-4xl">+</sup></span>
                                <span className="text-lg font-bold text-gray-800 mt-2">Experience Team</span>
                                <span className="text-gray-500">Help you</span>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="relative -ml-20 z-20 rounded-full overflow-hidden w-[280px] h-[280px] border-[8px] border-white shadow-xl"
                            >
                                <img src="/homeOne/about-us-right-img.png" alt="Team Discussion" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="max-w-[1400px] mx-auto px-4 lg:px-12 mb-20 overflow-hidden">
                <motion.div 
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="inline-block px-6 py-2 bg-[#C5D92D] text-[#1a2e05] font-bold rounded-full text-sm mb-6">
                        SERVICES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2]">
                        We Provide Best Dental <br/> billing Services
                    </h2>
                </motion.div>

                <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                     {/* Card 1 */}
                     <motion.div 
                        variants={fadeInUp}
                        className="bg-white rounded-[32px] p-8 text-center border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-shadow"
                    >
                        <div className="absolute inset-0 pointer-events-none opacity-60" style={{ backgroundImage: 'url(/homeOne/service-cards-bg-shape.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        
                        <div className="w-20 h-20 bg-[#C5D92D] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                            <img src="/homeOne/service-card-1-icon.png" alt="Credentialing" className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Insurance Credentialing</h3>
                        <p className="text-gray-500 leading-relaxed mb-8 relative z-10">
                            BEANbite strives to provide dentists with higher PPO reimbursement rates and subsequently allow them to obtain better profit margins.
                        </p>
                        <button className="px-8 py-2.5 border border-gray-200 rounded-full font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors relative z-10 bg-white">
                            Learn More
                        </button>
                     </motion.div>

                     {/* Card 2 */}
                     <motion.div 
                        variants={fadeInUp}
                        className="bg-white rounded-[32px] p-8 text-center border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-shadow"
                    >
                        <div className="absolute inset-0 pointer-events-none opacity-60" style={{ backgroundImage: 'url(/homeOne/service-cards-bg-shape.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        
                        <div className="w-20 h-20 bg-[#C5D92D] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                             <img src="/homeOne/service-card-2-icon.svg" alt="Verification" className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Dental Insurance Verification</h3>
                        <p className="text-gray-500 leading-relaxed mb-8 relative z-10">
                             BEANbite takes absolute pride in the quality & accuracy of the Insurance Verifications done by our agents. Our goal is to set up the dental office for success.
                        </p>
                        <button className="px-8 py-2.5 border border-gray-200 rounded-full font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors relative z-10 bg-white">
                            Learn More
                        </button>
                     </motion.div>

                     {/* Card 3 */}
                     <motion.div 
                        variants={fadeInUp}
                        className="bg-white rounded-[32px] p-8 text-center border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-shadow"
                    >
                        <div className="absolute inset-0 pointer-events-none opacity-60" style={{ backgroundImage: 'url(/homeOne/service-cards-bg-shape.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        
                        <div className="w-20 h-20 bg-[#C5D92D] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                             <img src="/homeOne/service-card-3-icon.svg" alt="Billing" className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Billing Services</h3>
                        <p className="text-gray-500 leading-relaxed mb-8 relative z-10">
                            Over the years, many dental practices see their A/R either plateau or go downstream and practice owners turn desperate to fix these issues.
                        </p>
                        <button className="px-8 py-2.5 border border-gray-200 rounded-full font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors relative z-10 bg-white">
                            Learn More
                        </button>
                     </motion.div>
                </motion.div>
            </section>

            {/* CTA Strip */}
            <section className=" relative overflow-hidden min-h-[400px] py-6">
                {/* Background Image on Right */}
                <div className="absolute right-0 top-0 bottom-0 w-full z-0">
                    <motion.img 
                        initial={{ scale: 1.2, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 0.5 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        src="/homeOne/right-company-billing-bg-img.png" 
                        alt="Team Discussion" 
                        className="w-full h-full object-cover grayscale opacity-50 mix-blend-multiply" 
                    />
                </div>
                {/* Left Side Green & Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#658325]/90 from-40% via-[#658325]/80 to-transparent z-10">
                    <div className="absolute left-[-100px] bottom-[-100px] w-[400px] h-[400px] border border-white/10 rounded-full opacity-30"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-4 lg:px-12 h-full relative z-20 flex flex-col justify-center items-center text-center">
                    <motion.h2 
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-4xl md:text-[50px] font-bold text-white mb-4 leading-tight"
                    >
                        Choosing a Right Billing <br/> Company
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/90 text-lg mb-10 max-w-2xl mx-auto font-medium"
                    >
                        We wil help you take control of the things that matter most to your practice.
                    </motion.p>
                    <motion.div 
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-[5px] border-[#414C00] bg-[#9db520] hover:bg-[#8ca319] text-[#1a2e05] pl-8 pr-2 py-2 rounded-full font-bold text-lg inline-flex items-center gap-4 transition-all shadow-lg group"
                        >
                           <span>Discover More</span>
                           <div className="w-10 h-10 bg-[#414C00] rounded-full flex items-center justify-center group-hover:bg-[#1a2e05]/20 transition-colors">
                             <TrendingUp size={20} className="text-[#fff]" strokeWidth={2.5} />
                           </div>
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-[5px] border-[#00000025] bg-white hover:bg-gray-50 text-[#1a2e05] pl-8 pr-2 py-2 rounded-full font-bold text-lg inline-flex items-center gap-4 transition-all shadow-lg group"
                        >
                           <span>Book a Consulting</span>
                           <div className="w-10 h-10 bg-[#414C00] rounded-full flex items-center justify-center group-hover:bg-[#1a2e05]/90 transition-colors">
                             <TrendingUp size={20} className="text-[#fff]" strokeWidth={2.5} />
                           </div>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Partners & Form Section */}
            <section className="py-24 bg-white overflow-hidden">
                 <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
                     <div className="flex flex-col lg:flex-row gap-16">
                         {/* Left Side: Partners */}
                         <motion.div 
                            variants={fadeInLeft}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                             <span className="inline-block px-4 py-1.5 bg-[#C5D92D] text-[#1a2e05] font-bold rounded-full text-sm mb-6 uppercase tracking-wide">
                                 OUR TRUSTED PARTNERS
                             </span>
                             <h2 className="text-4xl md:text-[42px] font-bold text-gray-900 mb-10 leading-tight">Strengthen your business <br/> for enduring success.</h2>
                             
                             <motion.div 
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-12 max-w-lg"
                            >
                                 {[
                                     { img: "/homeOne/partner-logos/tralonGo1.png", alt: "Tralongo" },
                                     { img: "/homeOne/partner-logos/New-England-logo1.png", alt: "New England Dental" },
                                     { img: "/homeOne/partner-logos/smilesavers1.png", alt: "SmileSavers" },
                                     { img: "/homeOne/partner-logos/dag.png", alt: "Dental Associate Group" },
                                     { img: "/homeOne/partner-logos/mda.png", alt: "Monroe Dental Arts" },
                                     { img: "/homeOne/partner-logos/ltd.png", alt: "Lake Travis Dentistry" }
                                 ].map((partner, i) => (
                                     <motion.div 
                                        key={i} 
                                        variants={fadeIn}
                                        className=" rounded-xl flex items-center justify-center transition-shadow cursor-pointer"
                                    >
                                         <img src={partner.img} alt={partner.alt} className="max-w-full max-h-full object-contain" />
                                     </motion.div>
                                 ))}
                             </motion.div>
                             
                             <div className="flex gap-4">
                                 <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#C5D92D] hover:border-[#C5D92D] hover:text-[#1a2e05] transition-colors text-gray-400">
                                    <ArrowLeft size={24}/>
                                 </motion.button>
                                 <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-14 h-14 rounded-full bg-[#C5D92D] text-[#1a2e05] flex items-center justify-center hover:bg-[#b0c41a] transition-colors shadow-lg shadow-[#c5d92d]/30">
                                    <ArrowRight size={24}/>
                                 </motion.button>
                             </div>
                         </motion.div>

                         {/* Right Side: Form */}
                         <motion.div 
                            variants={fadeInRight}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                             <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100 relative overflow-hidden">
                                 {/* Background Grid Pattern */}
                                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                                 
                                 <div className="relative z-10">
                                     <div className="mb-8">
                                        <span className="text-[#AFCB12] text-sm font-bold tracking-wide mb-2 block">Make an Appointment</span>
                                        <h3 className="text-3xl font-bold text-gray-900">Start today with absolutely no risk to you.</h3>
                                     </div>
                                     
                                     <form className="space-y-5">
                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                             <div className="space-y-1">
                                                 <input type="text" placeholder="First name" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] bg-white text-gray-700 placeholder-gray-500" />
                                             </div>
                                             <div className="space-y-1">
                                                 <input type="text" placeholder="Last name" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] bg-white text-gray-700 placeholder-gray-500" />
                                             </div>
                                         </div>
                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                             <div className="space-y-1">
                                                 <input type="email" placeholder="E-mail" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] bg-white text-gray-700 placeholder-gray-500" />
                                             </div>
                                             <div className="space-y-1">
                                                 <input type="tel" placeholder="Phone number" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] bg-white text-gray-700 placeholder-gray-500" />
                                             </div>
                                         </div>
                                         <div className="space-y-1">
                                             <textarea placeholder="Message" rows={4} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] bg-white text-gray-700 placeholder-gray-500 resize-none"></textarea>
                                         </div>
                                         
                                         <div className="flex items-start gap-3 pt-2">
                                            <div className="relative flex items-center">
                                                <input type="checkbox" id="consent" className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm checked:border-[#84cc16] checked:bg-[#84cc16]" />
                                                <CheckCircle2 size={14} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" strokeWidth={3} />
                                            </div>
                                            <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
                                                By choosing text, you agree to receive texts/calls from BEANbite LLC and its affiliates, including by auto-dialed or prerecorded means, regarding current and future projects or services at the number you provide.
                                            </label>
                                         </div>
 
                                         <motion.button 
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="border border-[5px] border-[#414C00] bg-[#94AE00] hover:bg-[#65a30d] text-white px-8 py-2 pr-2 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-all shadow-lg shadow-green-600/20 group w-max mt-4"
                                        >
                                             <span>Submit</span>
                                             <div className="w-10 h-10 bg-[#414C00] rounded-full flex items-center justify-center transition-colors">
                                                <TrendingUp size={16} className="text-white" />
                                             </div>
                                         </motion.button>
                                     </form>
                                 </div>
                             </div>
                         </motion.div>
                     </div>
                 </div>
             </section>

             {/* Testimonial Section */}
             <section id="testimonials" className=" bg-gray-50 relative overflow-hidden">
                 <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[#AFCB12] to-[#6d8502] rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-xl relative min-h-[500px]"
                    >
                         
                         {/* Left Side: Text */}
                         <motion.div 
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="md:w-1/2 p-10  md:p-14 text-white flex flex-col justify-center relative z-10"
                        >
                             <motion.span 
                                variants={fadeIn}
                                className="inline-block px-4 py-1.5 bg-[#526600] text-white font-bold rounded-full text-xs mb-6 w-max uppercase tracking-wider"
                            >
                                 Testimonials
                             </motion.span>
                             <motion.h2 
                                variants={fadeInUp}
                                className="text-4xl md:text-[42px] font-bold mb-6 leading-tight"
                            >
                                What our customers say about us
                            </motion.h2>
                             
                             <motion.p 
                                variants={fadeInUp}
                                transition={{ delay: 0.2 }}
                                className="text-[17px] leading-relaxed relative z-10 font-normal opacity-90 mb-8"
                            >
                                 " Santosh worked for me for 3 years. She is very flexible, self motivated, detailed oriented so gained my rapid trust in presenting treatment plan to the patients and handled financial aspect related to my patients. She was good at maintaining patient relationship as well as managing dental office."
                             </motion.p>

                             <motion.div 
                                variants={fadeIn}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-4 mb-10"
                            >
                                 <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden">
                                     <img src="/homeOne/about-us-left-img.png" alt="Lopa Shah" className="w-full h-full object-cover" />
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-lg leading-none mb-1">Lopa Shah</h4>
                                     <p className="text-sm opacity-80 font-light">Owner Dentist</p>
                                 </div>
                             </motion.div>

                             <motion.div 
                                variants={fadeIn}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap items-center gap-6"
                            >
                                 {/* Rating Box */}
                                 <div className="bg-[#384d14]/40 backdrop-blur-sm rounded-lg flex items-center gap-3 px-4 py-3 border border-white/10">
                                     <div className="w-8 h-8 flex items-center justify-center bg-[#00b67a] rounded text-white">
                                         <Star size={18} fill="currentColor" />
                                     </div>
                                     <div className="flex flex-col">
                                         <div className="flex text-[#00b67a] space-x-0.5">
                                             <Star size={12} fill="currentColor" />
                                             <Star size={12} fill="currentColor" />
                                             <Star size={12} fill="currentColor" />
                                             <Star size={12} fill="currentColor" />
                                             <Star size={12} fill="currentColor" />
                                         </div>
                                         <span className="text-[10px] text-white opacity-80 leading-none mt-1">4.3 score, 47 reviews</span>
                                     </div>
                                 </div>

                                 {/* Navigation Arrows */}
                                  <div className="flex gap-2">
                                     <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-11 h-11 rounded-full bg-[#7a9305] border border-[#9db520] flex items-center justify-center hover:bg-[#658325] transition-colors text-white">
                                        <ArrowLeft size={20}/>
                                     </motion.button>
                                     <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-11 h-11 rounded-full bg-[#C5D92D] text-[#fff] border border-[#C5D92D] flex items-center justify-center hover:bg-[#b0c41a] transition-colors">
                                        <ArrowRight size={20}/>
                                     </motion.button>
                                 </div>
                             </motion.div>
                         </motion.div>

                         {/* Right Side: Image */}
                         <div className="md:w-1/2 relative flex items-end justify-center overflow-hidden">
                              {/* Darker box behind image for depth if needed, or just the gradient */}
                              <div className="absolute inset-x-8 bottom-0 h-[85%] bg-[#384d14]/20 rounded-t-[40px] mx-auto w-[80%]"></div>
                              
                              <motion.img 
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                src="/homeOne/testimonial-main-image.png" 
                                alt="Happy Customer" 
                                className="relative z-10 h-[90%] w-auto object-contain object-bottom" 
                            />
                              
                              {/* Floating Quote Icon */}
                              <motion.div 
                                initial={{ scale: 0, rotate: -45 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="absolute top-12 right-12 w-20 h-20 bg-[#aed900] rounded-full flex items-center justify-center text-[#4d6600] z-0"
                            >
                                  <Quote size={32} fill="currentColor" />
                              </motion.div>
 
                              {/* Floating Badge */}
                              <motion.div 
                                initial={{ scale: 0, x: "-50%", y: 50 }}
                                whileInView={{ scale: 1, x: "-50%", y: 0 }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-20 w-max"
                            >
                                  <div className="bg-white px-8 py-3 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] -rotate-2">
                                      <span className="font-extrabold text-[#1a2e05] text-xl">"Awesome Work"</span>
                                  </div>
                              </motion.div>
                         </div>
                     </motion.div>
                 </div>
             </section>

             {/* Blog Section */}
             <section id="blog" className="pt-24 bg-white relative z-10 overflow-hidden">
                 <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
                     <motion.div 
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                         <span className="inline-block px-8 py-3 bg-[#C5D92D] text-[#1a2e05] font-bold rounded-full text-sm mb-6 uppercase tracking-wide">
                             News & Blogs
                         </span>
                         <h2 className="text-4xl md:text-[46px] font-bold text-gray-900 leading-tight">
                             Your Practice Advisory <br/> Resources and Blog
                         </h2>
                     </motion.div>

                     <motion.div 
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                         {[
                             { img: "/homeOne/blog-img-1.png", date: "18 Nov, 2025", title: "What is retroactive termination, and why does it happen?" },
                             { img: "/homeOne/blog-img-2.png", date: "18 Nov, 2025", title: "What is retroactive termination, and why does it happen?" },
                             { img: "/homeOne/blog-img-3.png", date: "18 Nov, 2025", title: "What is retroactive termination, and why does it happen?" }
                         ].map((post, i) => (
                             <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
                                 <div className="rounded-[32px] overflow-hidden mb-6 h-[280px]">
                                     <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                 </div>
                                 
                                 <div className="flex items-center gap-2 text-gray-800 font-bold text-sm mb-3">
                                     <Calendar size={16} className="text-[#1a2e05]"/> 
                                     <span className="font-bold text-[#1a2e05]">Post date:</span> 
                                     <span className="font-normal text-gray-500">{post.date}</span>
                                 </div>
                                 
                                 <h3 className="text-[22px] font-bold text-gray-900 mb-6 leading-snug pr-4">
                                     {post.title}
                                 </h3>
                                 
                                 <div className="border-t border-gray-100 mb-6"></div>
                                 
                                 <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border border-[2px] border-[#414C00] bg-[#C5D92D] hover:bg-[#b0c41a] text-[#fff] pl-6 pr-1 py-1.5 rounded-full font-bold text-sm inline-flex items-center gap-3 transition-all shadow-sm group/btn w-max"
                                >
                                     <span>Read More</span>
                                     <div className="w-9 h-9 bg-[#414C00] rounded-full flex items-center justify-center text-white group-hover/btn:bg-[#2d4a0a] transition-colors">
                                         <TrendingUp size={16} />
                                     </div>
                                 </motion.button>
                             </motion.div>
                         ))}
                     </motion.div>
                 </div>
             </section>

    </div>
  );
};

export default Home;