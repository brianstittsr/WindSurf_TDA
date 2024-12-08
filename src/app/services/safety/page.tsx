'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiShield } from 'react-icons/gi';

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="flex-1">
            <div className="mb-6">
              <GiShield className="w-16 h-16 text-purple-500" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Employee Safety</h1>
            <p className="text-xl text-gray-400 mb-8">
              Comprehensive workplace safety solutions to protect your most valuable asset - your employees
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="flex-1 relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/services/safety.jpg"
              alt="Workplace Safety"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Safety Protocols</h3>
            <p className="text-gray-400">
              Development and implementation of comprehensive safety procedures
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Employee Training</h3>
            <p className="text-gray-400">
              Regular safety training and awareness programs
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Risk Management</h3>
            <p className="text-gray-400">
              Proactive identification and mitigation of workplace hazards
            </p>
          </div>
        </div>

        {/* Key Components */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Safety Program Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2">Risk Assessment</h3>
              <p className="text-gray-400">Identification of potential hazards</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2">Protocol Development</h3>
              <p className="text-gray-400">Creation of safety procedures</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2">Implementation</h3>
              <p className="text-gray-400">Rollout of safety measures</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-bold mb-2">Monitoring</h3>
              <p className="text-gray-400">Continuous evaluation and improvement</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Program Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Regular safety inspections</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Emergency response planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Safety committee formation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Incident investigation procedures</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Reduced workplace incidents</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Improved employee morale</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Lower insurance costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Enhanced productivity</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Protect Your Workforce</h2>
          <p className="text-gray-400 mb-8">
            Contact us to learn how we can help enhance your workplace safety program
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Get Started
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
