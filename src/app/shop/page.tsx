import Image from 'next/image'

const merchandise = [
  {
    id: 1,
    name: "Classic Logo T-Shirt",
    description: "100% cotton t-shirt with Slutty Vegan logo",
    price: 29.99,
    image: "/shop/tshirt.jpg",
    sizes: ["S", "M", "L", "XL", "2XL"]
  },
  {
    id: 2,
    name: "Snapback Cap",
    description: "Adjustable snapback cap with embroidered logo",
    price: 24.99,
    image: "/shop/cap.jpg",
    sizes: ["One Size"]
  },
  {
    id: 3,
    name: "Hoodie",
    description: "Comfortable hoodie with Slutty Vegan design",
    price: 49.99,
    image: "/shop/hoodie.jpg",
    sizes: ["S", "M", "L", "XL", "2XL"]
  },
  // Add more merchandise items as needed
]

export default function Shop() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="section-title">Shop Our Merch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchandise.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Size
                  </label>
                  <select className="w-full border rounded px-3 py-2">
                    {item.sizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${item.price}</span>
                  <button className="button-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Custom Orders</h2>
          <p className="mb-8">Looking for custom merchandise for your event or organization?</p>
          <a href="/contact" className="button-primary">Contact Us for Custom Orders</a>
        </div>
      </div>
    </div>
  )
}
