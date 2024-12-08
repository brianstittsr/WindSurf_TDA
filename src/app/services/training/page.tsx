'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiTeacher } from 'react-icons/gi';

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="flex-1">
            <div className="mb-6">
              <GiTeacher className="w-16 h-16 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Training & Development</h1>
            <p className="text-xl text-gray-400 mb-8">
              Comprehensive training programs designed to enhance workplace safety and employee competency
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Schedule Training
            </Link>
          </div>
          <div className="flex-1 relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/services/training.jpg"
              alt="Training Session"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Occupational Safety Training</h3>
            <p className="text-gray-400">
              Comprehensive programs covering OSHA requirements and industry best practices
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Custom Training Programs</h3>
            <p className="text-gray-400">
              Tailored training solutions designed for your specific industry and needs
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Certification Courses</h3>
            <p className="text-gray-400">
              Industry-recognized certifications and compliance training
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Training?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Expert instructors with real-world experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Hands-on learning and practical exercises</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Flexible scheduling options</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Customized content for your industry</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Ongoing support and resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Certificate of completion</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">
            Contact us to discuss your training needs and schedule a consultation
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/services" 
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
