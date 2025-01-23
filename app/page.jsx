'use client';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp  } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="bg-slate-950 text-white shadow-lg sticky top-0 z-50">
        <nav className="flex justify-between items-center py-5 px-6 max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <span role="img" aria-label="cruise">🚢</span> Cruise Republic
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/south-dives" className="hover:underline transition text-xs">
              South Dives
            </Link>
            <Link href="/about-us" className="hover:underline transition text-xs">
              About Us
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              ☰
            </button>
          </div>
          <div className="hidden md:block">
            <Link
              href="/book"
              className="bg-white text-blue-950 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              Book Now
            </Link>
          </div>
        </nav>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900 text-white flex flex-col gap-4 p-4">
            <Link href="/south-dives" className="hover:underline transition text-lg">
              South Dives
            </Link>
            <Link href="/about-us" className="hover:underline transition text-lg">
              About Us
            </Link>
            <Link
              href="/book"
              className="bg-white text-blue-950 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              Book Now
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-screen flex items-center justify-center text-white relative"
          style={{ backgroundImage: 'url(boat.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="text-center relative z-10 px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Discover Paradise in the Maldives
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              Explore the deep south of the Maldives on an elegant cruise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dives"
                className="bg-blue-800 hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded"
              >
                Learn More
              </Link>
              <Link
                href="/book"
                className="bg-white text-blue-950 font-semibold py-3 px-6 rounded hover:bg-gray-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-100">
          <div className="flex flex-col md:flex-row items-start max-w-7xl mx-auto px-6 gap-10">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="map.jpg"
                alt="Dive Map"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="people.jpg"
                alt="People Diving"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="ray.jpg"
                alt="Ray Diving"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="shark1.jpg"
                alt="Shark"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="shark2.jpg"
                alt="Another Shark"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="boat.jpg"
                alt="Boat"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-950">
                South Dives
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Embark on an unforgettable diving adventure in the pristine waters
                of the southern Maldives. Begin your journey in Fuvahmulah,
                renowned for its unique ecosystem and encounters with tiger
                sharks. Next, venture to Addu Atoll, where vibrant coral reefs and
                abundant marine life await. Return to Fuvahmulah for another
                breathtaking dive, then proceed to the serene waters of Hithadhoo,
                known for its tranquil beauty and rich underwater biodiversity.
                Experience the magic of these exclusive dive spots, each offering
                a new and thrilling perspective of the Maldives' underwater
                paradise.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9607795512"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        style={{ zIndex: 1000 }}
      >
        <FaWhatsapp size={24} />
      </a>


      {/* Footer */}
      <footer className="bg-slate-950 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2025 Cruise Republic. All rights reserved.</p>
          <div className="mt-4">
            <p className="text-sm">
              Everfront PVT Ltd<br />
              Zindha, Funaad, Husnuheenamagu<br />
              Fuvahmulah City
            </p>
          </div>
          <div className="flex justify-center mt-2 gap-4 flex-wrap">
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
