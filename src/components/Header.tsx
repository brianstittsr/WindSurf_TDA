'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaChalkboardTeacher,
  FaBriefcase,
  FaSearch,
  FaClipboardCheck,
  FaShieldAlt
} from 'react-icons/fa';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 top-0">
      {/* Top utility navigation */}
      <div className="bg-black text-white text-sm">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-6 py-2">
            <li><Link href="/about" className="hover:text-red-500">ABOUT</Link></li>
            <li className="relative group">
              <button 
                className="hover:text-red-500 flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                SERVICES
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute left-0 mt-2 w-[600px] -ml-[150px] rounded-md shadow-lg bg-black border border-gray-700 transform transition-all duration-300 origin-top ${
                  isServicesOpen 
                    ? 'opacity-100 scale-y-100 visible' 
                    : 'opacity-0 scale-y-0 invisible'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Link 
                      href="/services/training" 
                      className="block p-4 rounded-lg hover:bg-gray-800 hover:text-red-500 transition-colors relative z-50"
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <FaChalkboardTeacher className="text-4xl" />
                        <span className="text-sm font-medium">Training & Development</span>
                      </div>
                    </Link>
                    <Link 
                      href="/services/consulting" 
                      className="block p-4 rounded-lg hover:bg-gray-800 hover:text-red-500 transition-colors relative z-50"
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <FaBriefcase className="text-4xl" />
                        <span className="text-sm font-medium">Consulting & Management</span>
                      </div>
                    </Link>
                    <Link 
                      href="/services/assessments" 
                      className="block p-4 rounded-lg hover:bg-gray-800 hover:text-red-500 transition-colors relative z-50"
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <FaSearch className="text-4xl" />
                        <span className="text-sm font-medium">Assessments & Inspections</span>
                      </div>
                    </Link>
                    <Link 
                      href="/services/audits" 
                      className="block p-4 rounded-lg hover:bg-gray-800 hover:text-red-500 transition-colors relative z-50"
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <FaClipboardCheck className="text-4xl" />
                        <span className="text-sm font-medium">Audits & Compliance</span>
                      </div>
                    </Link>
                    <Link 
                      href="/services/safety" 
                      className="block p-4 rounded-lg hover:bg-gray-800 hover:text-red-500 transition-colors col-span-2 relative z-50"
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <FaShieldAlt className="text-4xl" />
                        <span className="text-sm font-medium">Employee Safety</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li><Link href="/careers" className="hover:text-red-500">TRAINING</Link></li>
            <li><Link href="/foundation" className="hover:text-red-500">FOUNDATION</Link></li>
          </ul>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Left menu items */}
            <ul className="flex space-x-8">
              <li><Link href="/find-us" className="text-white hover:text-red-500">FIND US</Link></li>
              <li><Link href="/menu" className="text-white hover:text-red-500">MENU</Link></li>
              <li><Link href="/text" className="text-white hover:text-red-500">TEXT</Link></li>
              <li><Link href="/call" className="text-white hover:text-red-500">CALL</Link></li>
              <li><Link href="/app" className="text-white hover:text-red-500">APP</Link></li>
            </ul>

            {/* Center logo */}
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
              <Link href="/">
                <Image
                  src="/images/tda-logo-white.svg"
                  alt="TDA Enterprises"
                  width={160}
                  height={100}
                  className="w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Right menu items */}
            <ul className="flex space-x-8">
              <li><Link href="/book-truck" className="text-white hover:text-red-500">BOOK THE TRUCK</Link></li>
              <li>
                <Link 
                  href="/order-now" 
                  className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  ORDER NOW
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
