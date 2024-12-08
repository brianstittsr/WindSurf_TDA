export default function Careers() {
  const positions = [
    {
      id: 1,
      title: "Restaurant Manager",
      location: "Atlanta, GA",
      type: "Full-time",
      description: "Looking for an experienced restaurant manager to lead our team..."
    },
    {
      id: 2,
      title: "Line Cook",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Seeking skilled line cooks to join our kitchen team..."
    },
    {
      id: 3,
      title: "Server",
      location: "Multiple Locations",
      type: "Full-time / Part-time",
      description: "Join our front-of-house team as a server..."
    }
  ]

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="section-title">Join Our Team</h1>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-center text-gray-600 mb-8">
            We're always looking for passionate individuals to join the Slutty Vegan family. 
            If you're enthusiastic about plant-based food and providing excellent customer 
            service, we want to hear from you!
          </p>
        </div>

        <div className="grid gap-8 mb-16">
          {positions.map((position) => (
            <div key={position.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{position.title}</h3>
                  <p className="text-gray-600">{position.location}</p>
                </div>
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">
                  {position.type}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{position.description}</p>
              <button className="button-primary">Apply Now</button>
            </div>
          ))}
        </div>

        <div className="bg-black text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Position?</h2>
          <p className="mb-8">
            We're growing fast! Send us your resume and we'll keep it on file for future opportunities.
          </p>
          <a href="/contact" className="button-primary">
            Contact Us
          </a>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                We believe in promoting from within and supporting our team members' career development
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">Fun Environment</h3>
              <p className="text-gray-600">
                Work in a positive, high-energy atmosphere with a team that feels like family
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Competitive Benefits</h3>
              <p className="text-gray-600">
                Enjoy competitive pay, health benefits, and employee discounts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
