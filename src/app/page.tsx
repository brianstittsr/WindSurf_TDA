'use client';

import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <MenuSection />
{/*       <section className="hero-section">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">Welcome to Slutty Vegan</h1>
          <p className="text-2xl mb-8">Experience the Best Vegan Burgers in Town</p>
          <a href="/menu" className="button-primary">View Our Menu</a>
        </div>
      </section> */}


      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Join Our Newsletter</h2>
          <p className="mb-8">Stay updated with our latest news and special offers!</p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full text-black"
              />
              <button type="submit" className="button-primary">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
