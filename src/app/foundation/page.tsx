'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHandHoldingHeart, FaGraduationCap, FaUsers, FaSeedling } from 'react-icons/fa';

export default function FoundationPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-40">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">TDA Foundation</h1>
          <p className="text-xl text-gray-300 mb-8">
            Empowering communities through environmental health and safety education, 
            support, and sustainable initiatives.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                The TDA Foundation is dedicated to creating safer, healthier communities 
                through education, advocacy, and direct support in environmental health 
                and safety initiatives.
              </p>
              <p className="text-gray-300">
                We believe that everyone deserves access to safe working conditions and 
                a healthy environment, regardless of their socioeconomic status or location.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black p-6 rounded-lg text-center">
                <FaHandHoldingHeart className="text-4xl text-red-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Community Support</h3>
                <p className="text-sm text-gray-400">Direct assistance to underserved communities</p>
              </div>
              <div className="bg-black p-6 rounded-lg text-center">
                <FaGraduationCap className="text-4xl text-red-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Education</h3>
                <p className="text-sm text-gray-400">Free safety training and workshops</p>
              </div>
              <div className="bg-black p-6 rounded-lg text-center">
                <FaUsers className="text-4xl text-red-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Advocacy</h3>
                <p className="text-sm text-gray-400">Promoting safety awareness and policies</p>
              </div>
              <div className="bg-black p-6 rounded-lg text-center">
                <FaSeedling className="text-4xl text-red-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Sustainability</h3>
                <p className="text-sm text-gray-400">Environmental protection initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/images/foundation/scholarship.jpg"
                alt="Scholarship Program"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Scholarship Program</h3>
              <p className="text-gray-300 mb-4">
                Supporting students pursuing degrees in environmental health and safety.
              </p>
              <Link 
                href="/foundation/scholarship"
                className="text-red-500 hover:text-red-400"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/images/foundation/community.jpg"
                alt="Community Outreach"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Community Outreach</h3>
              <p className="text-gray-300 mb-4">
                Free safety training and resources for local communities.
              </p>
              <Link 
                href="/foundation/outreach"
                className="text-red-500 hover:text-red-400"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/images/foundation/grants.jpg"
                alt="Grant Program"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Grant Program</h3>
              <p className="text-gray-300 mb-4">
                Supporting organizations implementing safety initiatives.
              </p>
              <Link 
                href="/foundation/grants"
                className="text-red-500 hover:text-red-400"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in our mission to create safer, healthier communities. Whether through 
            volunteering, donations, or partnerships, your support makes a difference.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/foundation/donate"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Donate Now
            </Link>
            <Link 
              href="/foundation/volunteer"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
