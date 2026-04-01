import React, { useRef } from "react";
import { motion } from "framer-motion";


import InnerPageHeader from "../components/InnerPageHeader";
import PartnerSection from "../components/PartnerSection";

// ================= CLIENT IMAGES =================
const column1 = [
  "/client/client1.png",
  "/client/client2.png",
  "/client/client3.png",
  "/client/client4.png",
];

const column2 = [
  "/client/client5.png",
  "/client/client6.png",
  "/client/client7.png",
  "/client/client8.jpg",
];

const column3 = [
  "/client/client9.jpg",
  "/client/client10.jpg",
  "/client/client11.jpg",
  "/client/client12.jpg",
];

// ================= ANIMATION =================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

// ================= VERTICAL SLIDER =================
const VerticalSlider = ({ images, duration }) => (
  <div className="overflow-hidden h-[500px]">
    <motion.div
      animate={{ y: ["0%", "-50%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex flex-col gap-6"
    >
      {[...images, ...images].map((img, i) => (
        <img
          key={i}
          src={img}
          alt="client"
          className="h-[150px] w-full object-contain bg-white p-4 rounded-xl shadow-sm"
        />
      ))}
    </motion.div>
  </div>
);

const ClientSuccess = () => {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <InnerPageHeader title="Client Success" breadcrumb="Client Success" />

      {/* ================= CLIENT SECTION ================= */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-16 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show">
          <span className="text-[#AFCB12] font-semibold mb-2 block">
            Our Clients
          </span>

          <h2 className="text-4xl font-bold mb-2">
            We Work With The Best <br /> Clients Success
          </h2>

          <p className="text-gray-600">
            We decided to deal with insurance carriers so that they prioritize patient care.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div variants={fadeRight} initial="hidden" whileInView="show" className="grid grid-cols-3 gap-4 relative">
          <VerticalSlider images={column1} duration={20} />
          <VerticalSlider images={column2} duration={16} />
          <VerticalSlider images={column3} duration={12} />

          <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
        </motion.div>
      </div>

      {/* ================= RESOURCES SECTION (FULL WIDTH) ================= */}
      <div className="w-full py-16 bg-white">
        <div className="grid md:grid-cols-2">

          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-[#f8f8f8] px-6 md:px-16 lg:px-24 py-12 flex items-center justify-center"
          >
            <div className="max-w-[600px]">
              <h3 className="text-2xl font-semibold mb-6">Resources</h3>

              <ul className="space-y-4 text-sm text-gray-700">
                {[
                  "CAQH",
                  "Sample Short form",
                  "Sample Full breakdown form",
                  "Medicare Dental Provider Enrollment & Coverage Information",
                  "FAQ's ADA MEDICARE",
                  "ADA CDT Information",
                  "2024 ADA Dental Claim News",
                  "Review 2024 ADA Dental Claim form",
                  "NPI LOOKUP"
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 items-start hover:text-black cursor-pointer transition"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 mt-2 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            className="h-[300px] md:h-auto"
          >
            <img
              src="/client/resources.png"
              alt="Resources"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>

      {/* ================= REUSABLE PARTNER SECTION ================= */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-16">
        <PartnerSection />
      </div>
    </div>
  );
};

export default ClientSuccess;