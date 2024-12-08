import React from 'react';
import Header from '@/components/Header';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-[108px]"> {/* Add padding to account for fixed header */}
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Environmental Services */}
            <div className="bg-gray-900 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Environmental Services</h2>
              <ul className="space-y-3">
                <li>• Environmental Compliance Audits</li>
                <li>• Environmental Management Systems</li>
                <li>• Waste Management Programs</li>
                <li>• Environmental Impact Assessments</li>
              </ul>
            </div>

            {/* Health & Safety */}
            <div className="bg-gray-900 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Health & Safety</h2>
              <ul className="space-y-3">
                <li>• Safety Program Development</li>
                <li>• Risk Assessments</li>
                <li>• OSHA Compliance</li>
                <li>• Workplace Safety Training</li>
              </ul>
            </div>

            {/* Training & Development */}
            <div className="bg-gray-900 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Training & Development</h2>
              <ul className="space-y-3">
                <li>• Custom Training Programs</li>
                <li>• Certification Courses</li>
                <li>• Professional Development</li>
                <li>• Compliance Training</li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="bg-gray-900 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Consulting</h2>
              <ul className="space-y-3">
                <li>• Strategic Planning</li>
                <li>• Process Improvement</li>
                <li>• Regulatory Compliance</li>
                <li>• Best Practices Implementation</li>
              </ul>
            </div>

            {/* Auditing */}
            <div className="bg-gray-900 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Auditing</h2>
              <ul className="space-y-3">
                <li>• Compliance Audits</li>
                <li>• Management System Audits</li>
                <li>• Safety Program Audits</li>
                <li>• Environmental Audits</li>
              </ul>
            </div>

            {/* Project Management */}
            <div className="bg-gray-900 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Project Management</h2>
              <ul className="space-y-3">
                <li>• Environmental Projects</li>
                <li>• Safety Implementations</li>
                <li>• Training Programs</li>
                <li>• Compliance Projects</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8">Contact us to discuss how we can help your organization achieve its environmental health and safety goals.</p>
            <a href="/contact" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
