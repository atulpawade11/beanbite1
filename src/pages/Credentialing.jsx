import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import InnerPageHeader from '../components/InnerPageHeader';
import PartnerSection from '../components/PartnerSection';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Credentialing = () => {
    const [openStep, setOpenStep] = useState(null);

    const documents = [
        "Personal Bio-profile (CV)", "Dental License", "Banking detail for EFT set-up",
        "TIN (Tax Identification Number)", "NPI (National Provider Identifier)",
        "DEA (Drug Enforcement Agency) registration", "W-9 form (needed for practice address)",
        "Professional Liability Insurance", "Bill of sale for acquisition practices",
        "Lease document", "Specialty school certificate-for specialists", "Sellers UCR Fee if possible"
    ];

    const workflowSteps = [
        {
          question: "Establish your office UCR fee",
          answer: "We analyze your local zip code market data to set competitive 'Usual, Customary, and Reasonable' fees that maximize your baseline revenue."
        },
        {
          question: "Create an NPI type 2 if essential",
          answer: "If your practice is incorporated, we handle the Type 2 NPI application to ensure proper organizational billing and credentialing."
        },
        {
          question: "Evaluate and choose the top 30 codes that can optimize revenue",
          answer: "We identify the high-frequency procedures in your practice and focus negotiations on these codes to ensure the highest return on investment."
        },
        {
          question: "Engage in fee negotiations with the 'negotiable' PPO plans",
          answer: "Our experts communicate directly with insurance carriers to leverage your practice's strengths for higher reimbursement rates."
        },
        {
          question: "Credentialing with planned PPO insurance & umbrella networks",
          answer: "We manage the entire application process for both direct contracts and umbrella networks like Zelis or Maverest to ensure total coverage."
        },
        {
          question: "Properly Structure your participation to optimize",
          answer: "We determine the best 'Leased Network' vs 'Direct' pathways to avoid lower fee schedules from overlapping networks."
        },
        {
          question: "Fee schedule entry",
          answer: "Once negotiated, we ensure all new fee schedules are accurately updated in your Practice Management Software (Open Dental, Eaglesoft, etc.)."
        },
        {
          question: "Copies of all final fee schedules",
          answer: "You receive full digital copies of every negotiated contract and fee schedule for your permanent office records."
        }
    ];

    return (
        <div className="bg-white">
            <InnerPageHeader title="Insurance Credentialing Service" breadcrumb="Services / Credentialing" />

            {/* 1. Top Section: We Cater to Start-up... */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">
                        We cater to start-up practices, dental practices undergoing acquisition, and actively participate in PPO fee negotiations for established dental practices.
                        </h2>
                        <p className="text-[#AFCB12] font-bold mb-4">New credentialing:</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                        New credentialing: A brand new or initial contract of the dentist requiring credentialing with HMO, PPO, EPO and Dent-Cal Insurances. Typically, PPO fee negotiations require 90 to 120 days, and an additional 3 to 12 weeks are allocated for the processing of credentialing contracts. It’s crucial to recognize that fee negotiation is a time-consuming process as insurance companies may not be quick to enhance reimbursement rates, and various obstacles need to be addressed. Moreover, each offer should be carefully assessed not only for its financial implications but also to evaluate the overall viability of remaining with the PPO plan. Therefore, meticulous planning well in advance is essential.
                        </p>
                    </motion.div>
                    <div className="relative">
                        <img src="/services/credentialing1.png" alt="Credentialing" className="rounded-2xl shadow-2xl border-l-[12px] border-b-[12px] border-[#AFCB12]/20" />
                    </div>
                </div>
            </section>

            {/* 2. Middle Section: PPO Fee Negotiations - PURE FULL BLEED IMAGE ON RIGHT */}
            {/* ========================================================= */}
            <section className="bg-[#EEF4FF] overflow-hidden relative min-h-[500px] lg:min-h-[600px] flex items-center mb-16">
  
                {/* The container only holds the text now */}
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
                    <div className="grid lg:grid-cols-2">
                        {/* ================== LEFT SIDE: Text content ================== */}
                        <motion.div 
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="py-16 lg:py-24 pr-12 lg:pr-20 lg:col-span-1" // Added padding-right to separate from image edge
                        >
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 leading-tight">
                            PPO Fee Negotiations
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            This intricate process typically spans 8 to 10 months, involving careful 
                            discussions with insurance providers to secure favorable fee schedules. 
                            PPO fee negotiations are a pivotal aspect of optimizing financial outcomes 
                            for dental practices. It is similar to any other major business negotiations. 
                            There are generally recognized "do's" & "don'ts" to achieve the best negotiation 
                            solution. Given the nuanced nature of these negotiations, patience is key, 
                            as insurance companies may not swiftly adjust reimbursement rates. Successful 
                            negotiations demand a strategic approach, evaluating each offer for its financial 
                            impact and considering the long-term feasibility of maintaining a relationship 
                            with the PPO plan.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* ================== RIGHT SIDE: THE PURE FULL BLEED IMAGE ================== */}
                {/* This div sits completely outside the container but inside the relative section */}
                <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 overflow-hidden hidden lg:block">
                    <img 
                    src="/services/credentialing2.png"
                    alt="PPO Negotiations" 
                    className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Mobile Image: Standard layout within the grid, disappears on desktop */}
                <div className="max-w-[1400px] mx-auto px-6 lg:hidden mb-16">
                    <img 
                    src="/services/credentialing2.png" 
                    alt="Negotiations" 
                    className="rounded-2xl shadow-xl w-full"
                    />
                </div>
            </section>

            {/* 3. Documents Required Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2">
                        <img src="/services/credentialing3.png" alt="Documents" className="w-full aspect-square object-cover" />
                    </div>
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold mb-8">Documents required for credentialing:</h2>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {documents.map((doc, i) => (
                            <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="text-[#AFCB12] shrink-0 mt-0.5" size={18} />
                            <span className="text-gray-700 text-sm font-medium">{doc}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Workflow Accordion Section */}
            <section className="bg-white py-20">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        BEANbite Credentialing and Fee <br/> Negotiations Workflow
                    </h2>
                
                    <div className="grid md:grid-cols-2 gap-4 items-start">
                        {workflowSteps.map((step, i) => (
                        <div key={i} className="flex flex-col">
                            <button 
                            onClick={() => setOpenStep(openStep === i ? null : i)}
                            className={`cursor-pointer border border-gray-100 rounded-xl p-5 flex justify-between items-center transition-all duration-300 bg-[#fcfcfc] w-full text-left ${
                                openStep === i ? "shadow-md border-[#AFCB12]/30" : "hover:shadow-sm"
                            }`}
                            >
                            <span className="text-sm font-bold text-gray-800 pr-4">{step.question}</span>
                                <ChevronDown 
                                size={18} 
                                className={`text-gray-400 transition-transform duration-300 ${openStep === i ? "rotate-180" : ""}`} 
                                    />
                            </button>

                            {/* Animated Answer Box */}
                            <AnimatePresence>
                            {openStep === i && (
                                <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                                >
                                <div className="p-5 text-sm text-gray-600 bg-gray-50/50 rounded-b-xl border-x border-b border-gray-100 -mt-2 pt-6">
                                    {step.answer}
                                </div>
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Partner Section */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20">
                <PartnerSection />
            </div>
        </div>
    );
};

export default Credentialing;