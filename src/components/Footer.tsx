'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TDA Enterprise</h3>
            <p className="text-gray-400 mb-4">
              Leading provider of Environmental Health and Safety solutions, committed to creating safer workplaces.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-red-500 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-red-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-red-500 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-red-500 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-red-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-red-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#training" className="text-gray-400 hover:text-red-500 transition-colors">
                  Training & Development
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="text-gray-400 hover:text-red-500 transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#audits" className="text-gray-400 hover:text-red-500 transition-colors">
                  Audits & Compliance
                </Link>
              </li>
              <li>
                <Link href="/services#safety" className="text-gray-400 hover:text-red-500 transition-colors">
                  Safety Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Safety Street</li>
              <li>Atlanta, GA 30303</li>
              <li>Phone: (404) 555-0123</li>
              <li>Email: info@tdaenterprise.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TDA Enterprise. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
