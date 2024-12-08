import Image from 'next/image'

const locations = [
  {
    id: 1,
    name: "Atlanta - Edgewood",
    address: "476 Edgewood Ave SE",
    city: "Atlanta",
    state: "GA",
    zip: "30312",
    hours: "12pm - 12am",
    phone: "(404) 555-0123",
    image: "/locations/location-1.jpg"
  },
  {
    id: 2,
    name: "Atlanta - Jonesboro",
    address: "164 N McDonough St",
    city: "Jonesboro",
    state: "GA",
    zip: "30236",
    hours: "12pm - 12am",
    phone: "(770) 555-0123",
    image: "/locations/location-2.jpg"
  },
  {
    id: 3,
    name: "Brooklyn",
    address: "690 Fulton St",
    city: "Brooklyn",
    state: "NY",
    zip: "11217",
    hours: "12pm - 12am",
    phone: "(718) 555-0123",
    image: "/locations/location-3.jpg"
  }
]

export default function Locations() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Locations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={location.id === 1}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-1">{location.address}</p>
                <p className="text-gray-600 mb-1">{`${location.city}, ${location.state} ${location.zip}`}</p>
                <p className="text-gray-600 mb-1">Hours: {location.hours}</p>
                <p className="text-gray-600">{location.phone}</p>
                <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
