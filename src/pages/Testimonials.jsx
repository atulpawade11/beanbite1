import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import InnerPageHeader from '../components/InnerPageHeader';
import PartnerSection from '../components/PartnerSection';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;

  const allReviews = [
    { name: "Michael Anderson", text: "BEANbite has truly transformed our insurance verification process. Their team is professional, efficient, and always ready to assist. Since partnering with them, we've seen a significant reduction in errors and turnaround time.", rating: 5 },
    { name: "Jessica Miller", text: "I've worked with several insurance verification companies, but BEANbite stands out. Their platform is user-friendly and provides accurate data quickly. Customer support is excellent.", rating: 5 },
    { name: "David Thompson", text: "BEANbite made the PPO fee negotiation process smooth and straightforward. They explained all my options clearly and secured significant savings for me. Very satisfied.", rating: 5 },
    { name: "Emily Johnson", text: "BEANbite offers exceptional service and accuracy. Their attention to detail and commitment to excellence have made our operations smoother. Five stars all the way!", rating: 5 },
    { name: "Christopher Brown", text: "The team at BEANbite is knowledgeable and highly responsive. They've helped us save time and reduce verification errors. Their technology is advanced and easy to integrate.", rating: 5 },
    { name: "Ashley Davis", text: "Fantastic service! The team at BEANbite was knowledgeable and attentive. They took the time to understand my needs and negotiated my PPO fees effectively.", rating: 5 },
    { name: "Matthew Wilson", text: "I appreciated the personalized approach from BEANbite. They were patient and professional throughout the negotiation process. My PPO fees were lowered more than I expected.", rating: 5 },
    { name: "Sarah Martinez", text: "BEANbite exceeded my expectations. Their expertise in PPO fee negotiations helped me save a considerable amount on my healthcare costs. The process was easy.", rating: 5 },
    { name: "Daniel Taylor", text: "I've had a fantastic experience with BEANbite's dental billing team. They are extremely professional, efficient, and transparent. They handled all the insurance claims seamlessly.", rating: 5 },
    { name: "Jennifer Moore", text: "BEANbite has been a game-changer for our dental office. Their billing service is accurate, timely, and incredibly user-friendly. The staff is friendly and always ready to help.", rating: 5 }
  ];

  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);
  const currentReviews = allReviews.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans">
      <InnerPageHeader title="Success Stories" breadcrumb="Testimonials" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        
        {/* Interactive Stats Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              Trusted by <span className="text-[#AFCB12]">Our Clients</span>
            </h2>
            <p className="text-gray-500 text-lg">
              We let our results speak for themselves. Explore the experiences of our clients.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-8 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
             <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">98%</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Accuracy</p>
             </div>
             <div className="h-10 w-[1px] bg-gray-100"></div>
             <div className="text-center">
                <p className="text-3xl font-bold text-[#AFCB12]">5.0</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Rating</p>
             </div>
          </div>
        </motion.div>

        {/* The Grid with Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="wait">
            {currentReviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }} // Lift effect on hover
                className="group relative h-full"
              >
                {/* Decorative background element that appears on hover */}
                <div className="absolute inset-0 bg-[#AFCB12] rounded-[2.5rem] rotate-1 group-hover:rotate-3 transition-transform duration-300 opacity-0 group-hover:opacity-10"></div>
                
                <div className="relative flex flex-col h-full bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden">
                  
                  {/* Floating Quote Icon */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 text-gray-50 group-hover:text-[#AFCB12]/10 transition-colors duration-500 pointer-events-none">
                    <Quote size={80} fill="currentColor" />
                  </div>

                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        key={i}
                      >
                        <Star size={16} fill="#AFCB12" className="text-[#AFCB12]" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex-grow relative z-10">
                    <p className="text-gray-700 text-lg leading-relaxed font-medium group-hover:text-gray-900 transition-colors">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-5 pt-8 mt-8 border-t border-gray-50">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-[#384d14] flex items-center justify-center font-black text-white text-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
                        {review.name.charAt(0)}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#AFCB12] rounded-full border-4 border-white flex items-center justify-center">
                            <MessageCircle size={10} className="text-white fill-current" />
                        </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg tracking-tight group-hover:text-[#AFCB12] transition-colors">{review.name}</h4>
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Verified Partner</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Custom Pagination with Liquid Effect UI */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mb-24">
            <motion.button 
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md disabled:opacity-20 cursor-pointer"
            >
              <ChevronLeft size={24} className="text-gray-900" />
            </motion.button>

            <div className="flex gap-3 bg-gray-100/50 p-2 rounded-3xl">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`relative px-6 py-3 rounded-2xl font-bold transition-all duration-500 cursor-pointer ${
                    currentPage === i + 1 
                    ? "text-white" 
                    : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {currentPage === i + 1 && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#384d14] rounded-2xl shadow-lg"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{i + 1}</span>
                </button>
              ))}
            </div>

            <motion.button 
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md disabled:opacity-20 cursor-pointer"
            >
              <ChevronRight size={24} className="text-gray-900" />
            </motion.button>
          </div>
        )}

        <PartnerSection />
      </div>
    </div>
  );
};

export default Testimonials;