'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiCheckMark } from 'react-icons/gi';

export default function AuditsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="flex-1">
            <div className="mb-6">
              <GiCheckMark className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Audits & Compliance</h1>
            <p className="text-xl text-gray-400 mb-8">
              Comprehensive EHS audits to ensure regulatory compliance and best practices
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Schedule Audit
            </Link>
          </div>
          <div className="flex-1 relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/services/audit.jpg"
              alt="Compliance Audit"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Compliance Audits</h3>
            <p className="text-gray-400">
              Evaluation of adherence to regulatory requirements and standards
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Management System Audits</h3>
            <p className="text-gray-400">
              Assessment of EHS management system effectiveness
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Program Audits</h3>
            <p className="text-gray-400">
              Review of specific safety programs and initiatives
            </p>
          </div>
        </div>

        {/* Audit Process */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Audit Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2">Pre-Audit Review</h3>
              <p className="text-gray-400">Document review and scope definition</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2">On-Site Audit</h3>
              <p className="text-gray-400">Thorough evaluation and data collection</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2">Reporting & Action Plan</h3>
              <p className="text-gray-400">Detailed findings and recommendations</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Audit Coverage</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Regulatory compliance verification</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Management system effectiveness</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Documentation review</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Process evaluation</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Deliverables</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Comprehensive audit report</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Corrective action recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Compliance gap analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Implementation timeline</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ensure Your Compliance Today</h2>
          <p className="text-gray-400 mb-8">
            Contact us to schedule a comprehensive audit of your EHS programs
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Schedule Audit
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
