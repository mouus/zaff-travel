// Full code for a similar landing page in Next.js and Tailwind CSS

import Head from 'next/head';

export default function Home() {
  return (
    <div>

      <header className="bg-blue-950 text-white">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">Cruise Republic</div>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section 
          className="bg-cover bg-center h-screen flex items-center justify-center text-white" 
          style={{ backgroundImage: 'url(boat.jpg)' }}
        >
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Discover Paradise in the Maldives</h1>
            <p className="text-xl mb-6">Luxury liveaboard adventures and bespoke travel experiences.</p>
            <a href="#services" className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded">Learn More</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg leading-relaxed">
              We specialize in crafting unique luxury experiences in the Maldives. Enjoy top-tier accommodations and unparalleled adventures.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-2">Luxury Liveaboards</h3>
                <p>Experience comfort and style aboard our modern vessels.</p>
              </div>
              <div className="p-6 border rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-2">Custom Itineraries</h3>
                <p>Explore hidden gems with personalized travel plans.</p>
              </div>
              <div className="p-6 border rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-2">Water Adventures</h3>
                <p>Snorkel, dive, and enjoy thrilling water sports in crystal-clear waters.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">Ready to plan your dream trip? Get in touch with us today!</p>
            <a href="mailto:info@maldivesparadise.com" className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded">Email Us</a>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 text-white py-4 text-center">
        <p>&copy; 2025 Cruise Republic. All rights reserved.</p>
      </footer>
    </div>
  );
}
