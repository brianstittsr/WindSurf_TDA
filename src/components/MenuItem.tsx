'use client';

import React from 'react';
import { GiTeacher, GiDiscussion, GiMagnifyingGlass, GiCheckMark, GiShield, GiGears } from 'react-icons/gi';

interface MenuItemProps {
  title: string;
  description: string;
  price: string;
  category: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, description, price, category }) => {
  const getIcon = () => {
    switch (category) {
      case 'training':
        return <GiTeacher className="w-10 h-10 text-blue-500" />;
      case 'consulting':
        return <GiDiscussion className="w-10 h-10 text-green-500" />;
      case 'assessment':
        return <GiMagnifyingGlass className="w-10 h-10 text-yellow-500" />;
      case 'audit':
        return <GiCheckMark className="w-10 h-10 text-red-500" />;
      case 'safety':
        return <GiShield className="w-10 h-10 text-purple-500" />;
      case 'program':
        return <GiGears className="w-10 h-10 text-orange-500" />;
      default:
        return <GiShield className="w-10 h-10 text-blue-500" />;
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-800 rounded-lg">
              {getIcon()}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <p className="text-gray-400 text-sm min-h-[80px]">{description}</p>
        <button className="mt-2 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export { MenuItem };
export default MenuItem;
