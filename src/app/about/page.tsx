import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import CeoCard from '@/components/CeoCard';

export default function About() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-[108px]">
        <div className="container mx-auto px-4 py-16 text-white">
          <h1 className="text-4xl font-bold mb-12 text-center">About TDA Enterprises</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/about/company.jpg"
                alt="TDA Enterprises Office"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                TDA Enterprises is dedicated to providing comprehensive environmental health and safety solutions 
                that protect both people and the environment. With decades of experience, we deliver expert 
                consulting, training, and implementation services to organizations across various industries.
              </p>
              <p className="text-gray-300">
                Our team of certified professionals brings extensive knowledge and practical experience 
                to every project, ensuring our clients receive the highest quality service and support 
                in achieving their EHS goals.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-300">
                  Delivering the highest quality solutions and maintaining the highest professional standards
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-4">Partnership</h3>
                <p className="text-gray-300">
                  Building long-term relationships with our clients through trust and collaboration
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  Staying at the forefront of industry developments and best practices
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose TDA Enterprises?</h2>
            <p className="text-gray-300 mb-8">
              With over 20 years of industry experience, we've helped numerous organizations 
              improve their environmental health and safety performance. Our comprehensive 
              approach and dedication to excellence make us the trusted choice for businesses 
              seeking to enhance their EHS programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/services" 
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Our Services
              </a>
              <a 
                href="/contact" 
                className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-20">
            <CeoCard />
          </div>
          <div className="prose prose-invert max-w-none mt-12">
            <p className="text-lg mb-6">
              TDA Enterprises is a leading provider of environmental health and safety solutions, 
              dedicated to creating safer workplaces and communities through comprehensive training, 
              consulting, and support services.
            </p>
            <p className="text-lg mb-6">
              Our mission is to empower organizations with the knowledge and tools they need to 
              maintain the highest standards of safety and environmental compliance while fostering 
              a culture of continuous improvement.
            </p>
            <p className="text-lg">
              With years of industry experience and a commitment to excellence, we partner with 
              businesses of all sizes to develop and implement effective safety programs that protect 
              their most valuable assets - their people.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
