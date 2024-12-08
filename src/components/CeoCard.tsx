import React from 'react';
import Image from 'next/image';

const CeoCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto">
      <div className="relative h-96 w-full">
        <Image
          src="/images/about/ceo.jpg"
          alt="Treymayne D. Anderson"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-xl"
        />
      </div>
      <div className="p-6 text-center bg-gray-900 text-white">
        <h3 className="text-2xl font-bold mb-1">Treymayne D. Anderson</h3>
        <p className="text-gray-300">CEO, TDA Enterprises</p>
      </div>
    </div>
  );
};

export default CeoCard;
