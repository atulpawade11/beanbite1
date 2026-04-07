import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight, TrendingUp, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#414C00] pt-20 relative">
      {/* Floating Banner */}
      <div className="max-w-[1240px] mx-auto px-4 lg:px-12 relative z-20">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#AFCB12] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center shadow-lg border-4 border-white/10"
        >
          <div className="md:w-3/5 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#414C00] mb-4">Book An Appointment</h2>
            <p className="text-[#3f5216] text-lg opacity-90">At vero eos et accusamus et iusto odio dignissimos ducimus quiy blanditiis praesentium.</p>
          </div>
          <div className="flex items-center flex-col md:flex-row gap-6">
            <img src="/homeOne/footer-card-arrow-icon.png" alt="arrow" className="w-[150px] hidden md:block" />
            <button className="bg-white text-[#1a2e05] pl-6 pr-1 py-1.5 rounded-full font-bold text-lg inline-flex items-center gap-4 transition-all group">
              <span>Get Start Free</span>
              <div className="w-10 h-10 bg-[#384d14] rounded-full flex items-center justify-center text-white"><TrendingUp size={18} /></div>
            </button>
          </div>
        </motion.div>
      </div>

      <footer className="text-white pt-20 pb-0 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <img src="/homeOne/logo-light 1.svg" alt="BEANbite" className="h-10" />
            <p className="text-gray-300 text-[15px]">At vero eos et accusamus iusto odio dignissimos ducimus.</p>
            <div className="relative">
              <input type="email" placeholder="Email Address" className="w-full bg-white text-gray-800 rounded-lg pl-4 py-3 text-sm" />
              <button className="absolute right-1 top-1 bottom-1 w-10 bg-[#C5D92D] rounded-md flex items-center justify-center text-[#1a2e05]"><ArrowRight size={18}/></button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Link</h4>
            <ul className="space-y-4 text-gray-300 text-[15px]">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Help Link</h4>
            <ul className="space-y-4 text-gray-300 text-[15px]">
              <li><a href="/testimonials">Testimonial</a></li>
              <li><a href="/client-success">Client & Resources</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-300 text-[15px]">
              <li><a href="/services/credentialing">Credentialing</a></li>
              <li><a href="/services/verification">Verification</a></li>
              <li><a href="/services/billing">Billing Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-6 text-sm text-gray-300">
              <li className="flex gap-3"><MapPin size={18} className="text-[#AFCB12]"/> 1015 Riley St, Folsom CA</li>
              <li className="flex gap-3"><Phone size={18} className="text-[#AFCB12]"/> (888) 700 5543</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#414C00] py-6 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex flex-col md:flex-row justify-between items-center text-white text-sm">
            <p>BEANbite &copy; Copyright 2026 - Immersive Infotech</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="w-8 h-8 rounded-full bg-[#C5D92D] flex items-center justify-center text-[#1a2e05]"><Facebook size={14} fill="currentColor" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#C5D92D] flex items-center justify-center text-[#1a2e05]"><Instagram size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#C5D92D] flex items-center justify-center text-[#1a2e05]"><Twitter size={14} fill="currentColor" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;