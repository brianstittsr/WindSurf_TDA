'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiDiscussion } from 'react-icons/gi';

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="flex-1">
            <div className="mb-6">
              <GiDiscussion className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Consulting & Management</h1>
            <p className="text-xl text-gray-400 mb-8">
              Expert guidance on EHS management systems and regulatory compliance
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Request Consultation
            </Link>
          </div>
          <div className="flex-1 relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/services/consulting.jpg"
              alt="Consulting Session"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Management Systems</h3>
            <p className="text-gray-400">
              Development and implementation of comprehensive EHS management systems
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Regulatory Compliance</h3>
            <p className="text-gray-400">
              Expert guidance on meeting industry regulations and standards
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Process Improvement</h3>
            <p className="text-gray-400">
              Optimization of safety procedures and workplace efficiency
            </p>
          </div>
        </div>

        {/* Approach Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Consulting Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">1</div>
              <h3 className="font-bold mb-2">Assessment</h3>
              <p className="text-gray-400">Thorough evaluation of current systems and needs</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">2</div>
              <h3 className="font-bold mb-2">Strategy</h3>
              <p className="text-gray-400">Development of customized solutions</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">3</div>
              <h3 className="font-bold mb-2">Implementation</h3>
              <p className="text-gray-400">Guided execution of recommended solutions</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">4</div>
              <h3 className="font-bold mb-2">Monitoring</h3>
              <p className="text-gray-400">Ongoing support and optimization</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Our Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Improved regulatory compliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Enhanced safety culture</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Risk reduction</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Cost savings through efficiency</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Expert guidance and support</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Customized solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your EHS Program?</h2>
          <p className="text-gray-400 mb-8">
            Contact us to schedule a consultation and discover how we can help improve your safety management systems
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Schedule Consultation
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
