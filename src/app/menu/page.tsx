import Image from 'next/image'

const menuItems = [
  {
    id: 1,
    name: "One Night Stand",
    description: "Plant-based patty loaded with vegan bacon, vegan cheese, caramelized onions, lettuce, tomato, and slutty sauce on a vegan hawaiian bun",
    price: 13.99,
    image: "/menu/menu-item-1.jpg"
  },
  {
    id: 2,
    name: "Fussy Hussy",
    description: "Plant-based patty with vegan cheese, shredded lettuce, onion, pickle, and slutty sauce on a vegan hawaiian bun",
    price: 12.99,
    image: "/menu/menu-item-2.jpg"
  },
  {
    id: 3,
    name: "Heaux Boy",
    description: "Vegan shrimp tossed in a New Orleans style batter, loaded with lettuce, tomato, pickle, and slutty sauce on a vegan hawaiian bun",
    price: 14.99,
    image: "/menu/menu-item-3.jpg"
  },
  // Add more menu items as needed
]

export default function Menu() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={item.id === 1}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${item.price}</span>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to place a large order?</h2>
          <p className="mb-8">Contact us for catering options and special events!</p>
          <a href="/contact" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">Contact Us</a>
        </div>
      </div>
    </div>
  )
}
