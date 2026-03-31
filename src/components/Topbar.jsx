import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-3 hidden md:block">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex justify-between items-center text-[13px] font-medium text-gray-600">
        <div className="flex space-x-8">
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-gray-900 stroke-[2.5]" /> (888) 700 5543
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} className="text-gray-900 stroke-[2.5]" /> Mon – Fri 8 am – 6 pm
          </span>
        </div>
        <div className="flex">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-gray-900 stroke-[2.5]" /> 1015 Riley St, #297 Folsom CA 95630
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;