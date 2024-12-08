'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiMagnifyingGlass } from 'react-icons/gi';

export default function AssessmentsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="flex-1">
            <div className="mb-6">
              <GiMagnifyingGlass className="w-16 h-16 text-yellow-500" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Assessments & Inspections</h1>
            <p className="text-xl text-gray-400 mb-8">
              Thorough evaluations to identify and mitigate workplace safety risks
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Schedule Assessment
            </Link>
          </div>
          <div className="flex-1 relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/services/assessment.jpg"
              alt="Safety Assessment"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Job Site Evaluations</h3>
            <p className="text-gray-400">
              Comprehensive workplace safety assessments and risk identification
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Equipment Inspections</h3>
            <p className="text-gray-400">
              Detailed safety checks of machinery and equipment
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Hazard Assessments</h3>
            <p className="text-gray-400">
              Identification and analysis of potential workplace hazards
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Assessment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500 mb-2">1</div>
              <h3 className="font-bold mb-2">Initial Review</h3>
              <p className="text-gray-400">Preliminary analysis of workplace conditions</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500 mb-2">2</div>
              <h3 className="font-bold mb-2">Detailed Inspection</h3>
              <p className="text-gray-400">Thorough on-site evaluation</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500 mb-2">3</div>
              <h3 className="font-bold mb-2">Analysis</h3>
              <p className="text-gray-400">Comprehensive data analysis and reporting</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500 mb-2">4</div>
              <h3 className="font-bold mb-2">Recommendations</h3>
              <p className="text-gray-400">Detailed improvement strategies</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Assessment Types</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Workplace safety assessments</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Equipment and machinery inspections</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Environmental hazard evaluations</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Ergonomic assessments</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Deliverables</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Detailed assessment reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Risk mitigation strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Compliance recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Action plan documentation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Workplace Safety?</h2>
          <p className="text-gray-400 mb-8">
            Contact us to schedule a comprehensive assessment of your workplace
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Schedule Assessment
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
