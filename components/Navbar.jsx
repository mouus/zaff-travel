'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white text-black shadow-lg sticky top-0 z-50">
      <nav className="relative py-5 px-6 max-w-7xl mx-auto bg-white">
        {/* Nav links and buttons */}
        <div className="flex justify-between items-center">
          <div className="hidden md:flex gap-6">
            <Link href="/dive-itineraries" className="hover:underline transition text-xs">
              Dive Itineraries
            </Link>
            <Link href="/our-cruise" className="hover:underline transition text-xs">
              Our Cruise
            </Link>
            <Link href="/about-us" className="hover:underline transition text-xs">
              About Us
            </Link>
            <Link href="/our-team" className="hover:underline transition text-xs">
            Our Team
          </Link>
          </div>
          <div className="hidden md:block">
            <Link
              href="/book"
              className="bg-black text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-800 transition"
            >
              Book Now
            </Link>
          </div>

          {/* For mobile, wrap the burger icon in a flex container that pushes it to the right */}
          <div className="md:hidden flex-1 flex justify-end">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
              ☰
            </button>
          </div>
        </div>

        {/* Absolutely positioned logo */}
        <div className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/">
            <img src="logo.jpg" alt="Cruise Republic" className="w-20 h-20 rounded-full" />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 text-white flex flex-col gap-4 p-4">
          <Link href="/dive-itineraries" className="hover:underline transition text-lg">
            Dive Itineraries
          </Link>
          <Link href="/our-cruise" className="hover:underline transition text-lg">
            Our Cruise
          </Link>
          <Link href="/about-us" className="hover:underline transition text-lg">
            About Us
          </Link>
          <Link href="/our-team" className="hover:underline transition text-lg">
            Our Team
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
  )
}

export default Navbar
