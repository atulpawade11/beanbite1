import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } }
};

const ServicesSection = () => {
  return (
    <section className="bg-[#F8F8F8] py-24">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-6 py-2 bg-[#AFCB12] text-black font-bold rounded-full text-lg mb-6">
            SERVICES
          </span>

          <h2 className="text-[34px] md:text-5xl font-bold text-black leading-[1.2]">
            We Provide Best Dental <br /> Billing Services
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
          <ServiceCard
            icon="/homeOne/service-card-1-icon.png"
            title="Insurance Credentialing"
            desc="BEANbite strives to provide dentists with higher PPO reimbursement rates and subsequently allow them to obtain better profit margins."
            link="/services/credentialing"
          />

          {/* Card 2 */}
          <ServiceCard
            icon="/homeOne/service-card-2-icon.svg"
            title="Dental Insurance Verification"
            desc="BEANbite takes absolute pride in the quality & accuracy of the Insurance Verifications done by our agents. Our goal is to set up the dental office for success."
            link="/services/verification"
          />

          {/* Card 3 */}
          <ServiceCard
            icon="/homeOne/service-card-3-icon.svg"
            title="Billing Services"
            desc="Over the years, many dental practices see their A/R either plateau or go downstream and practice owners turn desperate to fix these issues."
            link="/services/billing"
          />

        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, desc, link }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white rounded-[32px] p-8 text-center border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-shadow"
  >
    <div
      className="absolute inset-0 opacity-60 pointer-events-none"
      style={{
        backgroundImage: "url(/homeOne/service-cards-bg-shape.svg)",
        backgroundSize: "cover",
      }}
    />

    <div className="w-20 h-20 bg-[#C5D92D] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
      <img src={icon} alt={title} className="w-10 h-10 object-contain" />
    </div>

    <h3 className="text-[24px] font-semibold text-black mb-4 relative z-10">
      {title}
    </h3>

    <p className="text-black text-[16px] font-light leading-relaxed mb-8 relative z-10">
      {desc}
    </p>

    <Link
      to={link}
      className="px-8 py-2.5 border border-[#cccccc] rounded-full text-black bg-white inline-block relative z-10 hover:bg-gray-50 transition"
    >
      Learn More
    </Link>
  </motion.div>
);

export default ServicesSection;