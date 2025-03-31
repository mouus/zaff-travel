'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            <Link href="/" className="block">
              <div className={`relative overflow-hidden rounded-full border-2 ${
                scrolled ? 'border-white' : 'border-white'
              } transition-all duration-300`}>
                <Image 
                  src="/logo.jpg" 
                  alt="Cruise Republic" 
                  width={scrolled ? 60 : 80} 
                  height={scrolled ? 60 : 80}
                  className="transition-all duration-300"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 ${
            scrolled ? 'text-black' : 'text-white'
          }`}>
            <Link 
              href="/dive-itineraries" 
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Dive Itineraries
            </Link>
            <Link 
              href="/our-cruise" 
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Our Cruise
            </Link>
            <Link 
              href="/our-team" 
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Our Team
            </Link>
            <Link 
              href="/dive-gear" 
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Dive Gear
            </Link>
            <Link 
              href="/about-us" 
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              About Us
            </Link>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Link
              href="/book"
              className={`${
                scrolled 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white text-black hover:bg-gray-100'
              } px-5 py-2 rounded-none font-medium transition-colors duration-300`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className={`p-2 focus:outline-none ${
                scrolled ? 'text-black' : 'text-white'
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 bg-black bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden
      `}>
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col space-y-6 text-center">
            <Link 
              href="/" 
              className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/dive-itineraries" 
              className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Dive Itineraries
            </Link>
            <Link 
              href="/our-cruise" 
              className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Our Cruise
            </Link>
            <Link 
              href="/our-team" 
              className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link 
              href="/dive-gear" 
              className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Dive Gear
            </Link>
            <Link 
              href="/about-us" 
              className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </div>
          
          <div className="mt-auto mb-10 text-center">
            <Link
              href="/book"
              className="inline-block bg-white text-black font-medium px-8 py-3 hover:bg-gray-200 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
