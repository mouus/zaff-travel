'use client';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const images = [
    'people.jpg',
    'ray.jpg',
    'shark1.jpg',
    'shark2.jpg',
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-slate-950 text-white shadow-black/80 sticky top-0 z-50">
        <nav className="flex justify-between items-center py-5 px-4">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <span role="img" aria-label="cruise">🚢</span> Cruise Republic
          </Link>
          <div className="hidden md:flex gap-5">
            <Link href="#" className="hover:underline flex items-center gap-2">
               South Dives
            </Link>
            <Link href="#" className="hover:underline">About Us</Link>
          </div>
          <Link className="bg-white p-4 text-blue-950 font-bold hover:bg-gray-200 flex items-center gap-2 rounded-xl" href="/book">
            <span role="img" aria-label="book">📖</span> Book Now
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-screen flex items-center justify-center text-white relative"
          style={{ backgroundImage: 'url(boat.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4">Discover Paradise in the Maldives</h1>
            <p className="text-xl mb-6">Explore the deep south of the Maldives on an elegant cruise</p>
            <div className="flex gap-4 justify-center">
              <Link href="/dives" className="bg-blue-800 hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded">Learn More</Link>
              <Link href="/book" className="bg-white text-blue-950 font-semibold py-3 px-6 rounded hover:bg-gray-200">Book Now</Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Cruise Republic</h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              We specialize in crafting unique luxury experiences in the Maldives. Enjoy top-tier accommodations and unparalleled adventures.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-blue-950/10">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Discover South</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((src, index) => (
                <div key={index} className="rounded-xl overflow-hidden">
                  <img src={src} alt={`Scenery ${index + 1}`} className="h-48 w-full object-cover" />
                  {/* <p className="text-sm p-2 bg-white/10">Scenery {index + 1}</p> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">Ready to plan your dream trip? Get in touch with us today!</p>
            <div className='flex justify-center items-center'>
            <a href="mailto:info@maldivesparadise.com" className="bg-blue-800 hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 justify-center max-w-60">
              <FaEnvelope /> Email Us
            </a>
            </div>
         
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2025 Cruise Republic. All rights reserved.</p>
          <div className="flex justify-center mt-2 gap-4">
            <a href="#" className="hover:underline flex items-center gap-2">
              <FaFacebook /> Facebook
            </a>
            <a href="#" className="hover:underline flex items-center gap-2">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
