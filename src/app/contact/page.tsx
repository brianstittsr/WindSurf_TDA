export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="section-title">Contact Us</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Subject
                  </label>
                  <select className="w-full border rounded px-3 py-2">
                    <option>General Inquiry</option>
                    <option>Catering</option>
                    <option>Franchising</option>
                    <option>Careers</option>
                    <option>Press</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full border rounded px-3 py-2 h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button type="submit" className="button-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Corporate Office</h3>
                  <p className="text-gray-600">
                    123 Business Street<br />
                    Atlanta, GA 30303
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-gray-600">(404) 555-0123</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-600">info@sluttyveganatl.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-yellow-400">
                      Instagram
                    </a>
                    <a href="#" className="text-gray-600 hover:text-yellow-400">
                      Facebook
                    </a>
                    <a href="#" className="text-gray-600 hover:text-yellow-400">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Press Inquiries</h2>
            <p className="text-gray-600 mb-6">
              For press and media inquiries, please contact our PR team at:<br />
              press@sluttyveganatl.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
