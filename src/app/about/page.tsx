'use client';

import React from 'react';
import CeoCard from '@/components/CeoCard';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center">About TDA Enterprises</h1>
          
          {/* CEO Card Section */}
          <div className="mb-16">
            <CeoCard />
          </div>

          {/* Company Description */}
          <div className="prose prose-invert mx-auto">
            <p className="text-xl mb-8">
              TDA Enterprises is a leading provider of environmental health and safety solutions, 
              dedicated to creating safer workplaces and communities through comprehensive training, 
              consulting, and support services.
            </p>
            <p className="text-lg mb-8">
              Our mission is to empower organizations with the knowledge and tools they need to 
              maintain the highest standards of safety and environmental compliance while fostering 
              a culture of continuous improvement.
            </p>
            <p className="text-lg mb-8">
              With years of industry experience and a commitment to excellence, we partner with 
              businesses of all sizes to develop and implement effective safety programs that protect 
              their most valuable assets - their people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
