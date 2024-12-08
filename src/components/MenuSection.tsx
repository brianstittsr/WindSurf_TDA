'use client';

import React from 'react';
import MenuItem from './MenuItem';
import { GiTeacher, GiDiscussion, GiMagnifyingGlass, GiCheckMark, GiShield, GiGears } from 'react-icons/gi';

const menuItems = [
  {
    title: "Training & Development",
    description: "Comprehensive training programs including occupational safety training and personalized coaching sessions for your workforce.",
    price: "",
    category: "training",
  },
  {
    title: "Consulting & Management",
    description: "Expert guidance on EHS management systems, program development, and evaluation to ensure regulatory compliance.",
    price: "",
    category: "consulting",
  },
  {
    title: "Assessments & Inspections",
    description: "Thorough job site evaluations, hazard assessments, and equipment inspections to maintain workplace safety.",
    price: "",
    category: "assessment",
  },
  {
    title: "Audits & Compliance",
    description: "Comprehensive EHS audits to evaluate compliance with industry regulations and standards.",
    price: "",
    category: "audit",
  },
  {
    title: "Employee Safety",
    description: "Regular site inspections, employee observations, and safety protocol implementation to ensure workforce protection.",
    price: "",
    category: "safety",
  },
  {
    title: "Program Development",
    description: "Custom EHS program creation and evaluation tailored to your organization's unique needs and challenges.",
    price: "",
    category: "program",
  },
];

const MenuSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-400">Experience our comprehensive EHS services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
