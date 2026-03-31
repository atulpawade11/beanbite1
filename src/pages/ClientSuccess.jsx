import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, TrendingUp } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import InnerPageHeader from "../components/InnerPageHeader";

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

// ================= PARTNER LOGOS =================
const partnerLogos = [
  { name: "Trocon", image: "/about/partner1.png" },
  { name: "New England Dental", image: "/homeOne/partner-logos/New-England-logo1.png" },
  { name: "Smilesavers", image: "/homeOne/partner-logos/smilesavers1.png" },
  { name: "Monro Dental Arts", image: "/homeOne/partner-logos/dag.png" },
  { name: "LAKE TAVIS DENTISTRY", image: "/homeOne/partner-logos/ltd.png" },
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
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

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

      {/* ================= RESOURCES SECTION ================= */}
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

      {/* ================= PARTNER SECTION ================= */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div>
            <span className="inline-block bg-[#C5D92D] text-xs font-bold px-4 py-2 rounded-full mb-4">
              OUR TRUSTED PARTNERS
            </span>

            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Strengthen your business <br />
              for enduring success.
            </h2>

            {/* ROW 1 */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={2}
              onSwiper={(swiper) => (swiper1Ref.current = swiper)}
              breakpoints={{ 640: { slidesPerView: 3 } }}
            >
              {partnerLogos.map((partner, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white border rounded-xl h-20 flex items-center justify-center p-3">
                    <img src={partner.image} alt={partner.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ROW 2 */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={2}
              onSwiper={(swiper) => (swiper2Ref.current = swiper)}
              breakpoints={{ 640: { slidesPerView: 3 } }}
              className="mt-4"
            >
              {partnerLogos.map((partner, i) => (
                <SwiperSlide key={i}>
                  <div className="border rounded-xl h-20 flex items-center justify-center p-3">
                    <img src={partner.image} alt={partner.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* CONTROLS */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => {
                  swiper1Ref.current?.slidePrev();
                  swiper2Ref.current?.slidePrev();
                }}
                className="w-10 h-10 border rounded-full flex items-center justify-center"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={() => {
                  swiper1Ref.current?.slideNext();
                  swiper2Ref.current?.slideNext();
                }}
                className="w-10 h-10 bg-[#C5D92D] rounded-full flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border">
            <p className="text-[#AFCB12] font-bold mb-2">Make an Appointment</p>
            <h3 className="text-xl font-bold mb-4">
              Start today with absolutely no risk to you.
            </h3>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="input" placeholder="First name" />
                <input className="input" placeholder="Last name" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input className="input" placeholder="Email" />
                <input className="input" placeholder="Phone" />
              </div>

              <textarea className="input w-full" placeholder="Message" />

              <button className="flex items-center gap-2 bg-[#C5D92D] px-4 py-2 rounded-full">
                Submit
                <TrendingUp size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSuccess;